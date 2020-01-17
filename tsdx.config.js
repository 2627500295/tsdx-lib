const rpts2 = require('rollup-plugin-typescript2');
const pathsTransformer = require('ts-transform-paths').default;
const typescript = require('typescript');

module.exports = {
  rollup(config, options) {
    const rpt2Options = {
      typescript,
      cacheRoot: `./node_modules/.cache/tsdx/${options.format}/`,
      tsconfig: options.tsconfig,
      check: options.transpileOnly === false,
      transformers: [
        service => pathsTransformer()
      ],
      tsconfigDefaults: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          jsx: 'react',
          target: 'es5',
        },
      },
      tsconfigOverride: {
        compilerOptions: {
          target: 'esnext',
        },
      },
      
    };

    config.plugins = config.plugins.map(plugin => plugin.name !== 'rpt2' ? plugin : rpts2(rpt2Options));

    return config;
  },
};