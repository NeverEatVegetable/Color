System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        module.exports = {
          roots: ["<rootDir>/test"],
          testRegex: 'test/(.+)\\.test\\.ts$',
          transform: {
            "^.+\\.tsx?$": "ts-jest"
          },
          moduleFileExtensions: ['ts', 'js']
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=02cda0d8dcb2117bbd518f12f12b77bd750d53bf.js.map