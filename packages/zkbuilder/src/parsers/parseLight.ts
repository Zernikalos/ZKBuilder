import { ZLight, ZLampType, ZDirectionalLamp, ZPointLamp, ZSpotLamp } from "@/zernikalos";
import { DirectionalLight, Light, Object3D, PointLight, SpotLight } from "three";

export function parseLight(obj: Light): { light: ZLight, children: Object3D[] } {

    const light = new ZLight()

    switch (obj.type) {
        case "DirectionalLight":
            light.lampType = ZLampType.DIRECTIONAL
            light.directionalLamp = parseDirectionalLamp(obj as DirectionalLight)
            break
        case "PointLight":
            light.lampType = ZLampType.POINT
            light.pointLamp = parsePointLamp(obj as PointLight)
            break
        case "SpotLight":
            light.lampType = ZLampType.SPOT
            light.spotLamp = parseSpotLamp(obj as SpotLight)
            break
    }

    return { light, children: obj.children }

}

function parseDirectionalLamp(_obj: DirectionalLight): ZDirectionalLamp {
    const lamp = new ZDirectionalLamp()
    return lamp
}

function parsePointLamp(obj: PointLight): ZPointLamp {
    const lamp = new ZPointLamp()
    lamp.range = obj.distance
    lamp.decay = obj.decay
    return lamp
}

function parseSpotLamp(obj: SpotLight): ZSpotLamp {
    const lamp = new ZSpotLamp()
    lamp.range = obj.distance
    lamp.decay = obj.decay
    lamp.innerAngle = obj.angle
    lamp.outerAngle = obj.angle
    return lamp
}