import * as THREE from "three"
import {Texture} from "three"
import _ from "lodash"
import {DOMParser} from "@xmldom/xmldom"
import {Env, EnvSetup} from "../src/EnvSetup";
import { imageSize } from "image-size"
import {threeCustomLoad} from "./load";

export function setupEnv() {
    EnvSetup.configureEnv(new NodeEnv())
}

class MockVideoFrame {}

function fakeFileDownload(
    url: string,
    onLoad?: (fdatasync: any) => void,
    _onProgress?: any,
    onError?: (error: Error) => void
) {
    async function loadFile() {
        const data = await threeCustomLoad(url)
        if (_.isNil(data)) {
            onError?.(new Error(`File ${url} not found`))
            return
        }
        onLoad?.(data)
    }
    
    loadFile().catch((err) => {
        onError?.(err)
    })
}

function fakeTextureDownload(
    url: string,
    onLoad?: (fdatasync: any) => void,
    _onProgress?: any,
    onError?: (error: Error) => void
): Texture<any> {
    const texture = new Texture<HTMLImageElement>();
    
    async function loadTexture() {
        const data = await threeCustomLoad(url, true)
        if (_.isNil(data) || typeof data === 'string') {
            onError?.(new Error(`File ${url} not found`))
            return
        }
        const buffer = new Uint8Array(data)
        const {width, height} = imageSize(buffer)

        texture.image = data as any
        texture.source.data.width = width
        texture.source.data.height = height
        texture.needsUpdate = true
        onLoad?.(texture)
    }
    
    loadTexture().catch((err) => {
        onError?.(err)
    })

    return texture
}

class NodeEnv extends Env {
    setup(): void {
        // @ts-ignore
        global.DOMParser = DOMParser
        // @ts-ignore
        global.VideoFrame = MockVideoFrame

        THREE.FileLoader.prototype.load = (url, onLoad, _onProgress, onError) => {
            fakeFileDownload(url, onLoad, _onProgress, onError)
        }

        THREE.TextureLoader.prototype.load = ( url, onLoad, _onProgress, onError ) => {
            return fakeTextureDownload(url, onLoad, _onProgress, onError)
        }

        // @ts-ignore
        global.self = {
            URL: URL
        }
    }

    clean() {
    }
}

