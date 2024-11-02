System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfIChangePlayerTeam(extras) {
    _reporterNs.report("IChangePlayerTeam", "../../tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0fc92PlMyVAuZjGWOWUANHx", "MsgNotifyChangePlayerTeam", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=37355c2f5e779f46b5522406dd2bcd340f62e72f.js.map