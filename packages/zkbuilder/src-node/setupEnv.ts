import * as THREE from "three"
import {Texture} from "three"
import {isBinaryFile} from "isbinaryfile"
import fs from "node:fs/promises"
import _ from "lodash"
import {DOMParser} from "@xmldom/xmldom"
import path from "node:path"
import {Env, EnvSetup} from "../src/EnvSetup";

export function setupEnv() {
    EnvSetup.configureEnv(new NodeEnv())
}

function loadFromDataUriScheme(url: string): ArrayBuffer | undefined {
    if ( url.slice( 0, 5 ) === 'data:' ) {
        const match = url.match(/base64,(.+)/)
        if (match && match[1]) {
            const encodedData = match[1]
            return Uint8Array.from(atob(encodedData), c => c.charCodeAt(0)) as any as ArrayBuffer
        }
    }
}

async function loadFromFile(pathStr: string): Promise<ArrayBuffer | string> {
    const fullPath = path.resolve(__dirname, pathStr)
    try {
        await fs.access(fullPath, fs.constants.R_OK)
    } catch (err) {
        return undefined
    }
    const isBinary = await isBinaryFile(fullPath)
    const file = await fs.open(fullPath)
    const options = isBinary ? undefined : "utf-8"
    const data: Buffer | string = await file.readFile(options)
    await file.close()
    return isBinary ? (data as unknown as Buffer).buffer as any as ArrayBuffer: data
}

async function loadFromUrl(url: string): Promise<ArrayBuffer | undefined> {
    const response = await fetch(url)
    return await response.arrayBuffer()
}

class NodeEnv extends Env {
    setup(): void {
        // @ts-ignore
        global.DOMParser = DOMParser

        THREE.FileLoader.prototype.load = (url, onLoad, _onProgress, onError) => {
            async function read() {
                let data: ArrayBuffer | string = loadFromDataUriScheme(url)
                if (_.isNil(data))  {
                    data = await loadFromFile(url)
                }
                if (_.isNil(data)) {
                    throw new Error(`File ${url} not found`)
                }
                onLoad?.(data)
            }
            try {
                read()
            } catch (err) {
                console.trace(err)
                onError(err)
            }
        }

        THREE.TextureLoader.prototype.load = ( url, onLoad, _onProgress, onError ) => {
            const texture = new Texture<HTMLImageElement>();

            async function read() {
                let data: ArrayBuffer | string = loadFromDataUriScheme(url)
                if (_.isNil(data)) {
                    // const response = await fetch(url)
                    // data = await response.arrayBuffer()
                    data = await loadFromFile(url)
                }
                if (_.isNil(data)) {
                    data = await loadFromUrl(url)
                }
                if (_.isNil(data)) {
                    throw new Error(`File ${url} not found`)
                }

                texture.image = data as any
                texture.needsUpdate = true
                onLoad?.(texture)
            }
            try {
                read()
            } catch (err) {
                console.trace(err)
                onError(err)
            }

            return texture;

        }

        // @ts-ignore
        global.self = {
            URL: URL
        }
    }

    clean() {
    }
}

