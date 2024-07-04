import {setupEnv} from "./src/setupEnv";

setupEnv()

export {ZObject} from "./src/zernikalos/ZObject"
export {ZObjectType} from "./src/zernikalos/ZObjectType"
export {ZModel} from "./src/zernikalos/ZModel"

export {ZVector3} from "./src/zernikalos/math/ZVector3"
export {ZVector4} from "./src/zernikalos/math/ZVector4"
export {ZQuaternion} from "./src/zernikalos/math/ZQuaternion"
export {ZTransform} from "./src/zernikalos/ZTransform"

export {ZShaderProgram} from "./src/zernikalos/shader/ZShaderProgram"

export {ZkoParseableObject} from "./src/formats/ZkoParseableObject"
export {ZkoObjectProto, ZkoFormat} from "./src/proto"

export {zkImport, DEFAULT_IMPORT_OPTIONS} from "./src/zkImport"
export type { ImportOptions } from "./src/zkImport"

export {zkLoad, DEFAULT_LOAD_OPTIONS} from "./src/zkLoad"
export type { LoadOptions } from "./src/zkLoad"

export {zkParse, DEFAULT_PARSE_OPTIONS, ZkoParsed} from "./src/zkParse"
export type { ParseOptions } from "./src/zkParse"

export {zkExport, DEFAULT_EXPORT_OPTIONS} from "./src/zkExport"
export type { ExportOptions } from "./src/zkExport"

export {findById} from "./src/tools"
