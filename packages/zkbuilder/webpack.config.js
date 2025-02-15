const {merge} = require("webpack-merge");

const {buildBaseConfig} = require('./webpack/webpack.base')
const devConfig = require('./webpack/webpack.dev')
const prodConfig = require('./webpack/webpack.prod')

const browserConfig = require('./webpack/webpack.browser')
const nodeConfig = require('./webpack/webpack.node')

module.exports = (env, argv) => {
    let config = buildBaseConfig()
    switch (argv.mode) {
        case 'development':
            config = merge(config, devConfig)
            break
        case 'production':
            config = merge(config, prodConfig)
            break
    }

    if (argv.target && argv.target[0] === 'node') {
        config = merge(config, nodeConfig)
    } else {
        console.log('Building for browser')
        config = merge(config, browserConfig)
    }
    return config
}
