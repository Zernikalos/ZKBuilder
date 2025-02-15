import {InputFileFormat} from "@zernikalos/zkbuilder"

export interface ZkBuilderCliOptions {
    input: string;
    inputFormat: InputFileFormat;
    output: string;
    outputFormat: 'json' | 'proto' | 'object';
}
