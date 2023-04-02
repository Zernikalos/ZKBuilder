
module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        const devConfig = require('./webpack/webpack.dev')
        return devConfig
    }
    if (env.useMode === "profile") {
        const profileConfig = require('./webpack/webpack.profile')
        return profileConfig
    }

    const prodConfig = require('./webpack/webpack.prod')
    return prodConfig
};
