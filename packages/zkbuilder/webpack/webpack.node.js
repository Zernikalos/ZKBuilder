const webpack = require('webpack');
const path = require("path");
const {ROOT_PATH} = require("./webpack.base");

const nodeConfig = {
    target: 'node',
    output: {
        path: path.join(ROOT_PATH, 'dist-node'),
    },
    entry: {
        'index': './src-node/index.ts'
    },
    plugins: [
        new webpack.DefinePlugin({
            '__NODE_ENV__': JSON.stringify(true),
        })
    ]

}

module.exports = nodeConfig
