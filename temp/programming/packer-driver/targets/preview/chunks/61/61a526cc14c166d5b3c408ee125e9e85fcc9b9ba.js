System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfIPlayerInfo(extras) {
    _reporterNs.report("IPlayerInfo", "../../tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomInfo(extras) {
    _reporterNs.report("IRoomInfo", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1b5bcR5yiRFx5fwAALDkMrz", "MsgNotifyLeaveRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=61a526cc14c166d5b3c408ee125e9e85fcc9b9ba.js.map