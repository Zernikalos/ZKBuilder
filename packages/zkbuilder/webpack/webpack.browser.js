const path = require("path");
const {ROOT_PATH} = require("./webpack.base");

const browserConfig = {
    entry: {
        'index': {
            import: './src-browser/index.ts',
            dependOn: ['zkoproto', 'vendor'],
        },
        'zkoproto': './protobuild/index.js',
        'vendor': [
            'lodash',
            'three',
            'is-obj',
            'three/examples/jsm/loaders/ColladaLoader',
            'three/examples/jsm/loaders/FBXLoader',
            'three/examples/jsm/loaders/GLTFLoader',
            'three/examples/jsm/loaders/OBJLoader'
        ]
    },
    externals: {
        '@zernikalos/zernikalos': '@zernikalos/zernikalos'
    },
    output: {
        path: path.join(ROOT_PATH, 'dist-browser'),
        library: {
            type: 'module'
        }
    },
    node: false,
    target: ['web'],
    experiments: {
        outputModule: true
    },
    optimization: {
        runtimeChunk: 'single'
    },
}

module.exports = browserConfig
