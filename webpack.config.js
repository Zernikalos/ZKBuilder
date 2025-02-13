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

// module.exports = (env, argv) => {
//     if (argv.mode === 'development') {
//         const devConfig = require('./webpack/webpack.dev')
//         if (argv.target && argv.target[0] === 'node') {
//             console.log('Building for node')
//             const nodeConfig = require('./webpack/webpack.node')
//             return nodeConfig
//         }
//         return devConfig
//     }
//     if (env.useMode === "profile") {
//         const profileConfig = require('./webpack/webpack.profile')
//         return profileConfig
//     }
//
//     const prodConfig = require('./webpack/webpack.prod')
//     return prodConfig
// };
