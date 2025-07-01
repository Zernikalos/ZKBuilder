const path = require('path');

const ENTRY_NAME = 'zkbuilder'
const ROOT_PATH = path.join(__dirname, '..');

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
            symlinks: true
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
    };
}

module.exports = {ROOT_PATH, ENTRY_NAME, buildBaseConfig}
