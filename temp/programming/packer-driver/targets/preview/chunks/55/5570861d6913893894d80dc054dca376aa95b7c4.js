System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        name: 'tsgf-dev-demo-client',
        version: '1.4.1',
        description: 'client side encapsulation of the ts-gameframework(TSGF) developer\'s application site. TSGF is An open source platform that supports frame synchronization online. Select the corresponding SDK, such as tsgf-sdk-browser or tsgf-sdk-miniapp, based on your platform.',
        main: 'index.js',
        exports: {
          require: './index.js',
          'import': './index.mjs'
        },
        typings: 'index.d.ts',
        repository: {
          type: 'git',
          url: 'https://gitee.com/fengssy/ts-gameframework'
        },
        scripts: {
          build: 'npm run build:js && npm run build:dts && copy /Y package.json dist && copy /Y LICENSE dist && copy /Y ..\\README.md dist',
          'build:js': 'npx rollup -c',
          'build:dts': 'npx tsc && npx api-extractor run --local --verbose && rmdir /S/Q lib && node scripts/postBuild'
        },
        keywords: ['ts', 'game', 'network', 'online', 'connection', 'sync'],
        author: 'fengssy',
        license: 'MIT',
        devDependencies: {
          '@microsoft/api-documenter': '^7.17.17',
          '@microsoft/api-extractor': '^7.27.0',
          '@types/chai': '^4.3.0',
          '@types/jest': '^27.4.1',
          chai: '^4.3.6',
          jest: '^27.5.1',
          rollup: '^2.75.6',
          'rollup-plugin-typescript2': '^0.32.1',
          'ts-jest': '^27.1.4',
          'ts-node': '^10.8.1',
          typescript: '^4.7.3'
        },
        dependencies: {
          'tsgf-sdk': '^1.4.1'
        }
      });
    }
  };
});
//# sourceMappingURL=5570861d6913893894d80dc054dca376aa95b7c4.js.map