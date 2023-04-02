const { merge } = require('webpack-merge');
const {buildBaseConfig} = require('./webpack.base')

const baseConfig = buildBaseConfig({entryName: 'zernikalos-exporter'})

const prodConfig = {
    mode: 'production',
    plugins: [
    ],
}

module.exports = merge(baseConfig, prodConfig)
