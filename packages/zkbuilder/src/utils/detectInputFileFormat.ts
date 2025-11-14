import { InputFileFormat } from "../zkLoad";
import _ from "lodash";

/**
 * Detects the input file format based on the file extension
 * @param filePath - The path to the file
 * @returns The detected format or undefined if not supported
 */
export function detectInputFileFormat(filePath: string): InputFileFormat | undefined {
    if (_.isNil(filePath) || !_.isString(filePath)) {
        return undefined;
    }

    const extension = _.toLower(_.last(filePath.split('.')));
    
    switch (extension) {
        case 'obj':
            return 'obj';
        case 'gltf':
        case 'glb':
            return 'gltf';
        case 'fbx':
            return 'fbx';
        case 'dae':
        case 'collada':
            return 'collada';
        default:
            return undefined;
    }
}
