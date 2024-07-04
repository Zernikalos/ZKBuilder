const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');

const ENTRY_NAME = 'zkbuilder'
const ROOT_PATH = path.join(__dirname, '..');
const INDEX_DIR = 'index.ts';

const tsLoaderRule = {
    loader: 'ts-loader',
    options: {
        transpileOnly: false
    }
}

function buildBaseConfig({entryName} = {entryName: ENTRY_NAME}) {
    const packageDir = ROOT_PATH;
    const entries = [path.join(packageDir, INDEX_DIR)];
    const outputPath = path.join(packageDir, 'dist');

    return {
        entry: {
            'index': {
                import: './index.ts',
                dependOn: ['zernikalos', 'zkoproto', 'vendor'],
            },
            'zernikalos': '@zernikalos/zernikalos',
            'zkoproto': './protobuild/index.js',
            'vendor': [
                'lodash',
                'three',
                'hash-it',
                'is-obj',
                'three/examples/jsm/loaders/ColladaLoader',
                'three/examples/jsm/loaders/FBXLoader',
                'three/examples/jsm/loaders/GLTFLoader',
                'three/examples/jsm/loaders/OBJLoader'
            ]
        },
        output: {
            path: outputPath,
            filename: "[name].js",
            libraryTarget: "umd"
        },
        resolve: {
            extensions: ['.ts', '.js'],
            symlinks: true
        },
        devtool: 'source-map',
        experiments: {
            outputModule: true
        },
        optimization: {
            runtimeChunk: 'single',
        },
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: [
                        tsLoaderRule
                    ],
                    exclude: []
                }
            ]
        },
    };
}

module.exports = {ROOT_PATH, ENTRY_NAME, buildBaseConfig}
