import {GLTF, GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"

export function setupEnv() {
    const originalLoad = GLTFLoader.prototype.load
    GLTFLoader.prototype.load = function(url, onLoad, onProgress, onError) {
        window.createImageBitmap = undefined

        const originalRevokeURL = URL.revokeObjectURL
        URL.revokeObjectURL = () => {}

        originalLoad.call(this,
            url,
            (args: GLTF) => {
                onLoad(args)
                URL.revokeObjectURL = originalRevokeURL
            },
            onProgress,
            onError
        )
    }
}