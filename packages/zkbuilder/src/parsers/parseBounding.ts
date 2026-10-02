import {Mesh, SkinnedMesh} from "three";
import {ZBounds} from "../zernikalos/collider";
import {ZVector3} from "@/zernikalos";
import {ZBoundingSphere, ZBox3D} from "../zernikalos/math";

export function parseBounding(mesh: Mesh | SkinnedMesh): ZBounds {
    const {max, min} = mesh.geometry.boundingBox
    const maxVec = ZVector3.initWithValues(max.x, max.y, max.z)
    const minVec = ZVector3.initWithValues(min.x, min.y, min.z)
    const boundingBox = ZBox3D.initWithMinMax(minVec, maxVec)

    const {center, radius} = mesh.geometry.boundingSphere
    const centerVec = ZVector3.initWithValues(center.x, center.y, center.z)
    const boundingSphere = new ZBoundingSphere(centerVec, radius)

    return new ZBounds(boundingBox, boundingSphere)
}