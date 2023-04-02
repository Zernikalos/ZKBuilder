const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const {buildBaseConfig} = require('./webpack.base')

const baseConfig = buildBaseConfig()

const profileConfig = {
    mode: 'development',
    plugins: [
        new BundleAnalyzerPlugin()
    ],
}

module.exports = merge(baseConfig, profileConfig)
