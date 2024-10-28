System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfIGameSyncFrame(extras) {
    _reporterNs.report("IGameSyncFrame", "../../tsgf/room/IGameFrame", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f4a03ZGjAJCzIQcNIC7SyfY", "MsgNotifySyncFrame", undefined);
      /**服务端广播给所有客户端的每帧数据*/


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aae460e48e234d973dc639bfc890c6dfadcf3333.js.map