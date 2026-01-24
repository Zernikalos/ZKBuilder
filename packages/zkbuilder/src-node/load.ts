import _ from "lodash"
import {isBinaryFile} from "isbinaryfile"
import fs from "node:fs/promises"
import path from "node:path"

export async function threeCustomLoad(url: string, allowHttp: boolean = false): Promise<ArrayBuffer | string | undefined> {
    let data: ArrayBuffer | string | undefined = loadFromDataUriScheme(url)
    if (_.isNil(data))  {
        data = await loadFromFile(url)
    }
    if (_.isNil(data) && allowHttp) {
        data = await loadFromUrl(url)
    }
    return data
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

async function loadFromFile(pathStr: string): Promise<ArrayBuffer | string | undefined> {
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
    if (isBinary) {
        if (Buffer.isBuffer(data)) {
            return data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength) as ArrayBuffer
        }
        return undefined
    }
    return typeof data === 'string' ? data : undefined
}

async function loadFromUrl(url: string): Promise<ArrayBuffer | undefined> {
    try {
        const response = await fetch(url)
        return await response.arrayBuffer()
    } catch (err) {
        return undefined
    }
}