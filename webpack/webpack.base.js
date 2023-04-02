const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');

const ENTRY_NAME = 'zkbuilder'
const ROOT_PATH = path.join(__dirname, '..');
const INDEX_DIR = 'index.ts';

const babelLoaderRule = {
    loader: 'babel-loader',
    options: {
        cacheDirectory: true,
        configFile: path.join(ROOT_PATH, 'babel.config.js')
    }
};

const tsLoaderRule = {
    loader: 'ts-loader'
}

function buildBaseConfig({entryName} = {entryName: ENTRY_NAME}) {
    const packageDir = ROOT_PATH;
    const entries = [path.join(packageDir, INDEX_DIR)];
    const outputPath = path.join(packageDir, 'dist');

    return {
        entry: {
            [entryName]: entries
        },
        output: {
            path: outputPath,
            filename: "[name].js",
            library: {
                type: "module"
            }
        },
        resolve: {
            extensions: ['.ts', '.js'],
            symlinks: true
        },
        node: false,
        target: ['web'],
        devtool: 'source-map',
        experiments: {
            outputModule: true
        },
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: [
                        babelLoaderRule,
                        tsLoaderRule
                    ],
                    exclude: []
                },
                {
                    test: /\.js?$/,
                    use: [
                        babelLoaderRule
                    ],
                    exclude: [/node_modules/]
                }
            ]
        },
    };
}

module.exports = {ROOT_PATH, ENTRY_NAME, buildBaseConfig}
