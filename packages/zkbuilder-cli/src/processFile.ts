import {ZkBuilderCliOptions} from "./ZkBuilderCliOptions";
import { zkLoad, zkParse, zkExport } from '@zernikalos/zkbuilder';
import { writeFileSync } from 'fs';

export async function processFile(options: ZkBuilderCliOptions): Promise<void> {
    // Load the file
    const loaded = await zkLoad({
        filePath: options.input,
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
    writeFileSync(options.output, result);
}
