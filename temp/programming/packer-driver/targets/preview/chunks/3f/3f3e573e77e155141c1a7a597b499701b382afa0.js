System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfIMatchPlayerResultWithServer(extras) {
    _reporterNs.report("IMatchPlayerResultWithServer", "../../tsgf/match/Models", _context.meta, extras);
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

      _cclegacy._RF.push({}, "2e0a1YP0WVA3omVbbziflb9", "MsgNotifyRoomAllPlayersMatchResult", undefined);
      /**
       * 房间匹配请求有结果了
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3f3e573e77e155141c1a7a597b499701b382afa0.js.map