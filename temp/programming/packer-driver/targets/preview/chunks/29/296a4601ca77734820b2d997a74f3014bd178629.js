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
        module.exports = "/*!\n  * TSGF Dev Demo Client v" + require('../package.json').version + "\n  * -----------------------------------------\n  * Copyright (c) zum.\n  * MIT License\n  * https://gitee.com/fengssy/ts-gameframework\n  */"; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../package.json': _req
      }));
    }
  };
});
//# sourceMappingURL=296a4601ca77734820b2d997a74f3014bd178629.js.map