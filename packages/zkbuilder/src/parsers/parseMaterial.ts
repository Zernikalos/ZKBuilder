import {ZMaterial, ZPbrMaterialData, ZPhongMaterialData} from "@/zernikalos";
import {Material, MeshPhongMaterial, MeshStandardMaterial} from "three";
import _ from "lodash";
import {ParserContext} from "./ParserContext";
import { ZColor } from "@/zernikalos";
import {parseTexture} from "./parseTexture";

export async function parseMaterial(ctx: ParserContext,mat: Material): Promise<ZMaterial | undefined> {
    if (_.isNil(mat)) {
        return
    }

    if (ctx.hasComponent(mat.uuid)) {
        return ctx.getComponent(mat.uuid) as ZMaterial
    }

    const material = ZMaterial.init()

    if (mat instanceof MeshStandardMaterial) {
        material.pbr = parseMeshStandardMaterial(mat)
    }

    if (mat instanceof MeshPhongMaterial) {
        material.phong = parseMeshPhongMaterial(mat)
    }

    // @ts-ignore
    const tex = mat?.map
    if (!_.isNil(tex)) {
        material.texture = await parseTexture(ctx, tex)
    }
    ctx.registerComponent(mat.uuid, material)

    return material
}

function parseMeshStandardMaterial(material: MeshStandardMaterial): ZPbrMaterialData {
    const pbrMaterial = new ZPbrMaterialData(
        ZColor.initWithValues(material.color.r, material.color.g, material.color.b),
        ZColor.initWithValues(material.emissive.r, material.emissive.g, material.emissive.b),
        material.emissiveIntensity,
        material.metalness,
        material.roughness
    )
    return pbrMaterial
}

function parseMeshPhongMaterial(material: MeshPhongMaterial): ZPhongMaterialData {
    const phongMaterial = new ZPhongMaterialData(
        ZColor.initWithValues(material.color.r, material.color.g, material.color.b),
        ZColor.initWithValues(material.emissive.r, material.emissive.g, material.emissive.b),
        ZColor.initWithValues(material.specular.r, material.specular.g, material.specular.b),
        material.shininess
    )
    return phongMaterial
}