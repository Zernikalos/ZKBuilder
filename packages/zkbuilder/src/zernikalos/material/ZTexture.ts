import {zernikalos} from "@zernikalos/zernikalos"
import ZTexture = zernikalos.components.material.ZTexture
import ZTextureFilterMode = zernikalos.components.material.ZTextureFilterMode
import ZTextureWrapMode = zernikalos.components.material.ZTextureWrapMode
import ZTextureChannels = zernikalos.components.material.ZTextureChannels
import ZTextureColorSpace = zernikalos.components.material.ZTextureColorSpace
import {Zko} from "../../proto";

export {
    ZTexture,
    ZTextureFilterMode,
    ZTextureWrapMode,
    ZTextureChannels,
    ZTextureColorSpace
}

const ogFromObject = Zko.ZkTexture.fromObject

Zko.ZkTexture.fromObject = (obj: any) => {
    if (obj instanceof Zko.ZkTexture) {
        return ogFromObject(obj)
    }

    const texToZk: Zko.IZkTexture = {
        refId: obj.refId,
        width: obj.width,
        height: obj.height,

        flipX: obj.flipX,
        flipY: obj.flipY,

        magFilter: obj.magFilter.ordinal,
        minFilter: obj.minFilter.ordinal,

        wrapModeU: obj.wrapModeU.ordinal,
        wrapModeV: obj.wrapModeV.ordinal,

        channels: obj.channels.ordinal,
        colorSpace: obj.colorSpace.ordinal,
        pixelType: obj.pixelType.ordinal,
        normalized: obj.normalized,

        dataArray: obj.dataArray,
    }

    return ogFromObject(texToZk)
}