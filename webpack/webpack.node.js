const webpack = require('webpack');

const nodeConfig = {
    target: 'node',
    entry: {
        'index': './index.ts'
    },
    plugins: [
        new webpack.DefinePlugin({
            '__NODE_ENV__': JSON.stringify(true),
        })
    ]

}

module.exports = nodeConfig
