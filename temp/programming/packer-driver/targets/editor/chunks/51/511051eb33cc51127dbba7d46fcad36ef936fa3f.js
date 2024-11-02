System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfIPlayerInfoPara(extras) {
    _reporterNs.report("IPlayerInfoPara", "../../tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayerInfo(extras) {
    _reporterNs.report("IPlayerInfo", "../../tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "94a54lwF8JHP6d2cnEbVfip", "PtlAuthorize", undefined);
      /**
       * 玩家认证
       * 需要连接后立即发出请求,否则超时将被断开连接
       * */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=511051eb33cc51127dbba7d46fcad36ef936fa3f.js.map