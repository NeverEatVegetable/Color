System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        module.exports = `/*!
  * TSGF SDK For MiniApp v${require('../package.json').version}
  * -----------------------------------------
  * Copyright (c) zum.
  * MIT License
  * https://gitee.com/fengssy/ts-gameframework
  */`; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../package.json': _req
      }));
    }
  };
});
//# sourceMappingURL=1c236a08cbe6c9216976a71006d692474dba9d9e.js.map