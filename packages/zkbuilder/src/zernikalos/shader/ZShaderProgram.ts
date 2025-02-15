import {zernikalos} from "@zernikalos/zernikalos"
import ZShaderProgram = zernikalos.components.shader.ZShaderProgram
import {Zko} from "../../proto";
import {kotlinMapToJsObject} from "../../utils/mapFlatJs";

export {ZShaderProgram}

const ogFromObject = Zko.ZkShaderProgram.fromObject

Zko.ZkShaderProgram.fromObject = (obj: any) => {
    if (obj instanceof Zko.ZkShaderProgram) {
        return ogFromObject(obj)
    }
    const attributes = kotlinMapToJsObject(obj.attributes)
    const uniforms = kotlinMapToJsObject(obj.uniforms)
    const newObj = {
        refId: obj.refId,
        vertexShader: obj.vertexShader,
        fragmentShader: obj.fragmentShader,
        attributes,
        uniforms
    }
    return ogFromObject(newObj)
}
