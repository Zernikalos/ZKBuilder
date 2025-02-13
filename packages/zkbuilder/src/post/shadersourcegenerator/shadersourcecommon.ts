export const BR = ""
export const T = "    "
export const HEADER = `#version 300 es`
export const FLOAT_PRECISSION = "precision mediump float;"
export const OPEN_MAIN = `void main() {`
export const CLOSE_MAIN = `}`

export function l(s?: string) {
    return `${s ?? ''}\n`
}

export function t(s?: string) {
    return `    ${s ?? ''}`
}

export function buildSource(source: (string | string[])[]) {
    return source.flatMap((e) => {
        if (Array.isArray(e)) {
            return e.join('')
        }
        return e
    }).map(l).join('')
}
