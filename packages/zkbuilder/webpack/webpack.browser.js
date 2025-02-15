
const browserConfig = {
    entry: {
        'index': {
            import: './src/index.ts',
            dependOn: ['zernikalos', 'zkoproto', 'vendor'],
        },
        'zernikalos': '@zernikalos/zernikalos',
        'zkoproto': './protobuild/index.js',
        'vendor': [
            'lodash',
            'three',
            'hash-it',
            'is-obj',
            'three/examples/jsm/loaders/ColladaLoader',
            'three/examples/jsm/loaders/FBXLoader',
            'three/examples/jsm/loaders/GLTFLoader',
            'three/examples/jsm/loaders/OBJLoader'
        ]
    },
    output: {
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
