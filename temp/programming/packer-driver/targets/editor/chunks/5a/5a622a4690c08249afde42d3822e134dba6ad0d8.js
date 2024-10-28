System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        name: 'tsgf-sdk',
        version: '1.4.1',
        description: 'ts-gameframework(TSGF) client sdk, Select the corresponding SDK, such as tsgf-sdk-browser or tsgf-sdk-miniapp, based on your platform. TSGF is An open source platform that supports frame synchronization online.',
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
        keywords: ['ts', 'game', 'network', 'online', 'connection', 'sync'],
        author: 'fengssy',
        license: 'MIT',
        scripts: {
          test: 'jest --runInBand --detectOpenHandles',
          coverage: 'jest --coverage',
          build: 'npm run build:js && npm run build:dts && npm run build:doc && copy /Y package.json dist && copy /Y LICENSE dist && copy /Y ..\\README.md dist',
          'build:js': 'npx rollup -c',
          'build:dts': 'npx tsc && npx api-extractor run --local --verbose && rmdir /S/Q lib && node scripts/postBuild',
          'build:doc': 'npx api-documenter markdown --input temp --output docs/api && rmdir /S/Q temp'
        },
        devDependencies: {
          '@microsoft/api-documenter': '^7.17.17',
          '@microsoft/api-extractor': '^7.27.0',
          '@types/chai': '^4.3.0',
          '@types/crypto-js': '^4.1.1',
          '@types/jest': '^27.4.1',
          chai: '^4.3.6',
          'crypto-js': '^4.1.1',
          jest: '^27.5.1',
          rollup: '^2.75.6',
          'rollup-plugin-typescript2': '^0.32.1',
          'ts-jest': '^27.1.4',
          'ts-node': '^10.8.1',
          tsrpc: '^3.4.1',
          typescript: '^4.7.3'
        },
        dependencies: {
          'tsrpc-base-client': '^2.1.2'
        }
      });
    }
  };
});
//# sourceMappingURL=5a622a4690c08249afde42d3822e134dba6ad0d8.js.map