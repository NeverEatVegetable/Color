System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EApiCryptoMode, _crd, conf;

  function _reportPossibleCrUseOfEApiCryptoMode(extras) {
    _reporterNs.report("EApiCryptoMode", "../../tsgf/apiCrypto/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAppEncryptRequest(extras) {
    _reporterNs.report("IAppEncryptRequest", "../../tsgf/apiCrypto/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAppEncryptRequestT(extras) {
    _reporterNs.report("IAppEncryptRequestT", "../../tsgf/apiCrypto/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBaseEncryptRequestData(extras) {
    _reporterNs.report("IBaseEncryptRequestData", "../../tsgf/apiCrypto/Models", _context.meta, extras);
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

      _cclegacy._RF.push({}, "b5c78tj0k5Id5y5D4a7OD7x", "PtlAuthorize", undefined);

      /**
       * 玩家获取认证信息(原始请求对象)
      */

      /**
       * 玩家获取认证信息(服务端解密后的请求对象)
       * */
      _export("conf", conf = {
        skipPlayerAuth: true,
        cryptoMode: (_crd && EApiCryptoMode === void 0 ? (_reportPossibleCrUseOfEApiCryptoMode({
          error: Error()
        }), EApiCryptoMode) : EApiCryptoMode).AppReqDes
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a605a265176c1966251f4e1296e7b2b7d805fea3.js.map