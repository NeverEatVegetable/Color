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
          moduleFileExtensions: ['ts', 'js'],
          maxConcurrency: 99999,
          maxWorkers: 99999,
          testTimeout: 60000
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=c2a1bdd2a1bd8a2e54cc3fd4909d4fd5d924018a.js.map