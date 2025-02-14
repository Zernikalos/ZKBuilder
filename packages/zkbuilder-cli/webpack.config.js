const path = require('path');

module.exports = {
    target: 'node',
    //mode: 'production',
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
        // Aquí puedes listar dependencias que no quieres que se incluyan en el bundle
        // Por ejemplo, módulos nativos de Node.js
        //'fsevents': "require('fsevents')"
    }
};