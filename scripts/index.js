// require('../dist/runtime.js')
const zk = require('../dist/index.js');

async function test() {
    const p = await zk.zkLoad({
        filePath: '../../Zernikalos-Studio/samples/gltf/cosa.glb',
        format: 'gltf'
    })
    const a = await zk.zkParse(p)
    const result = await zk.zkExport(a, {format: 'object'})
    console.log(result)
}

test()