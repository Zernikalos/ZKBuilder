const { merge } = require('webpack-merge');
const path = require('path');
const {buildBaseConfig, ROOT_PATH} = require('./webpack.base')

const baseConfig = buildBaseConfig()

const devConfig = {
    mode: 'development',
    watch: false,
    watchOptions: {
        ignored: [path.join(ROOT_PATH, 'dist'), path.join(ROOT_PATH, 'build'), path.join(ROOT_PATH, 'node_modules')]
    },
}

module.exports =  merge(baseConfig, devConfig)
