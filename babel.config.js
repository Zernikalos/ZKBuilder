module.exports = {
        'sourceType': 'unambiguous',
        'presets': [
            ['@babel/preset-env', {
                'targets': 'defaults',
                'modules': false,
                'loose': false
            }],
            '@babel/preset-typescript'
        ],
        'plugins': [
            ['@babel/plugin-transform-runtime', {
                'helpers': true,
                'regenerator': true,
                'useESModules': true
            }],
            '@babel/plugin-proposal-export-default-from',
        ]
};
