const path = require('path');
const packageJson = require('./package.json');

module.exports = {
    target: 'node',
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'zkcli.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        minimize: false
    },
    externals: {

    },
    plugins: [
        new (require('webpack')).DefinePlugin({
            'process.env.PACKAGE_VERSION': JSON.stringify(packageJson.version)
        })
    ]
};