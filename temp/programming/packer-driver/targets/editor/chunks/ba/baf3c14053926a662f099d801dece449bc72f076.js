System.register(["__unresolved_0", "fs", "path", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_fs) {
      _req = _fs.__cjsMetaURL;
    }, function (_path) {
      _req0 = _path.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req2 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        const fs = require('fs');

        const path = require('path'); // remove private / protected index.d.ts


        (() => {
          let content = fs.readFileSync(path.resolve(__dirname, '../dist/index.d.ts'), 'utf-8');
          content = content.replace(/\r?\n\s*(private|protected)\s+_.+;/ig, '');
          content = content.replace(/\/\/\/ <reference types="node" \/>/ig, '');
          content = require('./copyright') + '\n' + content;
          fs.writeFileSync(path.resolve(__dirname, '../dist/index.d.ts'), content, 'utf-8');
        })(); // replace __TSGF_VERSION__from index.js/mjs


        [path.resolve(__dirname, '../dist/index.js'), path.resolve(__dirname, '../dist/index.mjs')].forEach(filepath => {
          let content = fs.readFileSync(filepath, 'utf-8');
          content = content.replace('__TSGF_VERSION__', require('../package.json').version);
          ;
          fs.writeFileSync(filepath, content, 'utf-8');
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        'fs': _req,
        'path': _req0,
        './copyright': _req1,
        '../package.json': _req2
      }));
    }
  };
});
//# sourceMappingURL=baf3c14053926a662f099d801dece449bc72f076.js.map