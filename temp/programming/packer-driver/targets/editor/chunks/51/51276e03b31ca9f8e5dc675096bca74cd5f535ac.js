System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EApiCryptoMode, _crd, conf;

  function _reportPossibleCrUseOfEApiCryptoMode(extras) {
    _reporterNs.report("EApiCryptoMode", "../../tsgf/apiCrypto/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchParamsFromPlayer(extras) {
    _reporterNs.report("IMatchParamsFromPlayer", "../../tsgf/match/Models", _context.meta, extras);
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

      _cclegacy._RF.push({}, "6ce2eAyEw5JQ5A9Fv7CNRML", "PtlRequestMatch", undefined);

      /**
       * 请求匹配
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
//# sourceMappingURL=51276e03b31ca9f8e5dc675096bca74cd5f535ac.js.map