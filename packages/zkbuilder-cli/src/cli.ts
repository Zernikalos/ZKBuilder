import { Command, Option } from 'commander';
import {processFile} from "./processFile";
import {InputFileFormat} from "@zernikalos/zkbuilder"

const program = new Command();

const validInputFormats: InputFileFormat[] = ["obj", "gltf", "fbx", "collada"];
const validOutputFormats = ["proto", "json"];

const iffOptions = new Option('-f, --input-format <format>', 'Input file format (auto-detected from extension if not provided)')
iffOptions.choices(validInputFormats)

const ofOptions = new Option('--of, --output-format <format>', 'Output file format')
ofOptions.choices(validOutputFormats)
ofOptions.default('proto')

// Declarar la variable de entorno que será inyectada por webpack
declare const process: {
    env: {
        PACKAGE_VERSION: string;
    };
};

program
    .name('zkcli')
    .description('CLI for generating Zernikalos Game Engine assets')
    .version(process.env.PACKAGE_VERSION)
    .requiredOption('-i, --input <path>', '3D scene input file path')
    .addOption(iffOptions)
    .requiredOption('-o, --output <path>', 'Output file path')
    .addOption(ofOptions)
    .action(processFile);

program.parse();