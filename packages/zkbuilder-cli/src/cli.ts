import { Command, Option } from 'commander';
import {processFile} from "./processFile";
import {InputFileFormat} from "@zernikalos/zkbuilder"

const program = new Command();

const validInputFormats: InputFileFormat[] = ["obj", "gltf", "fbx", "collada"];

const iffOptions = new Option('-f, --input-format <format>', 'Input file format')
iffOptions.choices(validInputFormats)
iffOptions.required = true

program
    .name('zkcli')
    .description('CLI for generating Zernikalos Game Engine assets')
    .version('1.0.0')
    .requiredOption('-i, --input <path>', '3D scene input file path')
    .addOption(iffOptions)
    .requiredOption('-o, --output <path>', 'Output file path')
    .option('--output-format <format>', 'Output file format', 'proto')
    .action(processFile);

program.parse();