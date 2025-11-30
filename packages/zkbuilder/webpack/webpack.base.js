const path = require('path');
const webpack = require('webpack');

const packageJson = require(path.join(__dirname, '..', 'package.json'));

const ENTRY_NAME = 'zkbuilder'
const ROOT_PATH = path.join(__dirname, '..');
const BUILDER_VERSION = packageJson.version;

const tsLoaderRule = {
    loader: 'ts-loader',
    options: {
        transpileOnly: false
    }
}

function buildBaseConfig({entryName} = {entryName: ENTRY_NAME}) {
    const packageDir = __dirname;
    const outputPath = path.join(packageDir, 'dist');

    return {
        entry: {},
        output: {
            path: outputPath,
            filename: "[name].js",
            library: {
                type: 'umd',
            }
        },
        resolve: {
            extensions: ['.ts', '.js'],
            symlinks: true,
            alias: {
                '@': path.join(ROOT_PATH, 'src')
            }
        },
        devtool: 'source-map',
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
        plugins: [
            new webpack.DefinePlugin({
                __ZKBUILDER_VERSION__: JSON.stringify(BUILDER_VERSION),
            })
        ]
    };
}

module.exports = {ROOT_PATH, ENTRY_NAME, buildBaseConfig}
