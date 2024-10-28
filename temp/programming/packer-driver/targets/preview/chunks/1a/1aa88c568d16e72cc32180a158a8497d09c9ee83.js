System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfIMatchParamsFromRoomAllPlayer(extras) {
    _reporterNs.report("IMatchParamsFromRoomAllPlayer", "../../tsgf/match/Models", _context.meta, extras);
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

      _cclegacy._RF.push({}, "97c1b5xNuRCtbGACuCCB5Y6", "MsgNotifyRoomAllPlayersMatchStart", undefined);
      /**
       * 有玩家在房间中发起匹配请求
      */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1aa88c568d16e72cc32180a158a8497d09c9ee83.js.map