import {ZkBuilderCliOptions} from "./ZkBuilderCliOptions";
import { zkLoad, zkParse, zkExport } from '@zernikalos/zkbuilder';
import { writeFileSync } from 'fs';
import * as path from 'path';

export async function processFile(options: ZkBuilderCliOptions): Promise<void> {
    const absoluteInputPath = path.resolve(options.input);
    const absoluteOutputPath = path.resolve(options.output);

    // Load the file
    const loaded = await zkLoad({
        filePath: absoluteInputPath,
        format: options.inputFormat
    });

    // Parse the loaded content
    const parsed = await zkParse(loaded);

    // Export to desired format
    const result = await zkExport(parsed, {
        format: options.outputFormat
    });

    // Write the result to the output file
    // @ts-ignore
    writeFileSync(absoluteOutputPath, result);
}
