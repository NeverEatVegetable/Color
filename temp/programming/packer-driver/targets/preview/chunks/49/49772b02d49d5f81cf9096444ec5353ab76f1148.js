System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfENetworkState(extras) {
    _reporterNs.report("ENetworkState", "../../tsgf/player/IPlayerInfo", _context.meta, extras);
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

      _cclegacy._RF.push({}, "cea2bp657BKSaIqhRbXM6RL", "MsgNotifyChangePlayerNetworkState", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=49772b02d49d5f81cf9096444ec5353ab76f1148.js.map