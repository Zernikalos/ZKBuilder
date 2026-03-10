import {ZBaseType} from "@/zernikalos"

type BufferConversionFn = (data: Int8Array, elemCount: number) => Int8Array

function conversionKey(from: ZBaseType, to: ZBaseType): string {
    return `${from}_${to}`
}

const CONVERSIONS = new Map<string, BufferConversionFn>()

/**
 * Registers a conversion from one base type to another.
 */
function registerConversion(
    from: ZBaseType,
    to: ZBaseType,
    fn: BufferConversionFn
): void {
    CONVERSIONS.set(conversionKey(from, to), fn)
}

/**
 * Transforms buffer data from type A to type B.
 * Returns the transformed buffer, or null if no conversion is registered.
 */
export function transformBuffer(
    data: Int8Array,
    fromType: ZBaseType,
    toType: ZBaseType,
    elemCount: number
): Int8Array | null {
    if (fromType === toType) return data

    const fn = CONVERSIONS.get(conversionKey(fromType, toType))
    if (!fn) return null

    return fn(data, elemCount)
}

// --- Built-in conversions ---

// FLOAT -> UNSIGNED_INT
registerConversion(ZBaseType.FLOAT, ZBaseType.UNSIGNED_INT, (data, elemCount) => {
    const src = new Float32Array(data.buffer, data.byteOffset, elemCount)
    const dst = new Uint32Array(elemCount)
    for (let i = 0; i < elemCount; i++) {
        dst[i] = Math.max(0, Math.floor(src[i]))
    }
    return new Int8Array(dst.buffer)
})

// UNSIGNED_INT -> FLOAT
registerConversion(ZBaseType.UNSIGNED_INT, ZBaseType.FLOAT, (data, elemCount) => {
    const src = new Uint32Array(data.buffer, data.byteOffset, elemCount)
    const dst = new Float32Array(elemCount)
    for (let i = 0; i < elemCount; i++) {
        dst[i] = src[i]
    }
    return new Int8Array(dst.buffer)
})

// INT -> FLOAT
registerConversion(ZBaseType.INT, ZBaseType.FLOAT, (data, elemCount) => {
    const src = new Int32Array(data.buffer, data.byteOffset, elemCount)
    const dst = new Float32Array(elemCount)
    for (let i = 0; i < elemCount; i++) {
        dst[i] = src[i]
    }
    return new Int8Array(dst.buffer)
})

// FLOAT -> INT
registerConversion(ZBaseType.FLOAT, ZBaseType.INT, (data, elemCount) => {
    const src = new Float32Array(data.buffer, data.byteOffset, elemCount)
    const dst = new Int32Array(elemCount)
    for (let i = 0; i < elemCount; i++) {
        dst[i] = Math.floor(src[i])
    }
    return new Int8Array(dst.buffer)
})
