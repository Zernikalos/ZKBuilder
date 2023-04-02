// const debug = process.env.NODE_ENV !== "production";
// const webpack = require('webpack');
// const path = require('path');
//
// const ROOT_PATH = path.join(__dirname, '.');
// const INDEX_DIR = 'index.ts';
//
// const babelLoaderRule = {
//     loader: 'babel-loader',
//     options: {
//         cacheDirectory: true,
//         configFile: path.join(ROOT_PATH, 'babel.config.js')
//     }
// };
//
// const tsLoaderRule = {
//     loader: 'ts-loader'
// }
//
// function config({libraryName, entryName}) {
//     const packageDir = ROOT_PATH;
//     const entries = [path.join(packageDir, INDEX_DIR)];
//     const outputPath = path.join(packageDir, 'dist');
//
//     return {
//         mode: 'development',
//         entry: {
//             [entryName]: entries
//         },
//         output: {
//             path: outputPath,
//             filename: "[name]-node.js",
//             library: libraryName,
//             libraryTarget: 'umd',
//             umdNamedDefine: true,
//             // libraryExport: 'default'
//         },
//         plugins: debug ? [] : [
//             new webpack.optimize.DedupePlugin(),
//             new webpack.optimize.OccurenceOrderPlugin(),
//         ],
//         resolve: {
//             extensions: ['.ts', '.js'],
//             symlinks: true
//         },
//         target: ['node'],
//         devtool: 'source-map',
//         module: {
//             rules: [
//                 {
//                     test: /\.ts?$/,
//                     use: [
//                         babelLoaderRule,
//                         tsLoaderRule
//                     ],
//                     exclude: []
//                 },
//                 {
//                     test: /\.js?$/,
//                     use: [
//                         babelLoaderRule
//                     ],
//                     exclude: [/node_modules/]
//                 }
//             ]
//         },
//     };
// }
//
// module.exports = config({libraryName: 'zkoexporter', entryName: 'zernikalos-exporter'});



const { merge } = require('webpack-merge');
const path = require('path');
const {buildBaseConfig, ROOT_PATH, ENTRY_NAME} = require('./webpack.base')

const baseConfig = buildBaseConfig({entryName: `${ENTRY_NAME}-node`})
const devConfig = require('./webpack.dev')

const nodeConfig = {
    target: 'node',
}

module.exports =  merge(baseConfig, devConfig, nodeConfig)

