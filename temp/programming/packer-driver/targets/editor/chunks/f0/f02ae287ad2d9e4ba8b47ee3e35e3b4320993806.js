System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EApiCryptoMode, _crd, conf;

  function _reportPossibleCrUseOfEApiCryptoMode(extras) {
    _reporterNs.report("EApiCryptoMode", "../../tsgf/apiCrypto/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomOnlineInfo(extras) {
    _reporterNs.report("IRoomOnlineInfo", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseConf(extras) {
    _reporterNs.report("BaseConf", "./base", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasePlayerRequest(extras) {
    _reporterNs.report("BasePlayerRequest", "./base", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasePlayerResponse(extras) {
    _reporterNs.report("BasePlayerResponse", "./base", _context.meta, extras);
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

      _cclegacy._RF.push({}, "200b4PqPd9O7r+XJAGgkDi8", "PtlOwnDismissRoom", undefined);

      /**房主在大厅解散自己的房间*/
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
//# sourceMappingURL=f02ae287ad2d9e4ba8b47ee3e35e3b4320993806.js.map