
module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        const devConfig = require('./webpack/webpack.dev')
        if (argv.target && argv.target[0] === 'node') {
            const nodeConfig = require('./webpack/webpack.node')
            return nodeConfig
        }
        return devConfig
    }
    if (env.useMode === "profile") {
        const profileConfig = require('./webpack/webpack.profile')
        return profileConfig
    }

    const prodConfig = require('./webpack/webpack.prod')
    return prodConfig
};
