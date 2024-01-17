import {zernikalos} from "@zernikalos/zernikalos"
import mapFlatJs = zernikalos.utils.mapFlatJs

export {mapFlatJs}

export function kotlinMapToJsMap(kotlinMap: any): Map<any, any> {
    const mapPairList = mapFlatJs(kotlinMap)
    const m = new Map()
    mapPairList.forEach((pair: any) => {
        m.set(pair.key, pair.value)
    })
    return m
}

export function kotlinMapToJsObject(kotlinMap: any): any {
    const m = kotlinMapToJsMap(kotlinMap)
    return Object.fromEntries(m)
}