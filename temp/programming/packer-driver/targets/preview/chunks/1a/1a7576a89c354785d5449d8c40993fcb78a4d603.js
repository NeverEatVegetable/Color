System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EApiCryptoMode, _crd, conf;

  function _reportPossibleCrUseOfEApiCryptoMode(extras) {
    _reporterNs.report("EApiCryptoMode", "../../tsgf/apiCrypto/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasePlayerRequest(extras) {
    _reporterNs.report("BasePlayerRequest", "./base", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasePlayerResponse(extras) {
    _reporterNs.report("BasePlayerResponse", "./base", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseConf(extras) {
    _reporterNs.report("BaseConf", "./base", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EApiCryptoMode = _unresolved_2.EApiCryptoMode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fb710RGpFlJd5f9PR9BMPac", "PtlCancelMatch", undefined);

      /**
       * 取消匹配
      */
      _export("conf", conf = {
        cryptoMode: (_crd && EApiCryptoMode === void 0 ? (_reportPossibleCrUseOfEApiCryptoMode({
          error: Error()
        }), EApiCryptoMode) : EApiCryptoMode).None
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1a7576a89c354785d5449d8c40993fcb78a4d603.js.map