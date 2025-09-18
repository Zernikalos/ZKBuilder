import {ZkBuilderCliOptions} from "./ZkBuilderCliOptions";
import { ZkPipeline } from '@zernikalos/zkbuilder';
import { writeFileSync } from 'fs';
import * as path from 'path';

export async function processFile(options: ZkBuilderCliOptions): Promise<void> {
    const absoluteInputPath = path.resolve(options.input);
    const absoluteOutputPath = path.resolve(options.output);

    // Convert the file using the new ZkPipeline
    const pipeline = new ZkPipeline();
    await pipeline.load({
        filePath: absoluteInputPath,
        format: options.inputFormat
    });
    await pipeline.parse();
    const result = await pipeline.export({
        format: options.outputFormat
    });

    // Write the result to the output file
    // @ts-ignore
    writeFileSync(absoluteOutputPath, result);
}
