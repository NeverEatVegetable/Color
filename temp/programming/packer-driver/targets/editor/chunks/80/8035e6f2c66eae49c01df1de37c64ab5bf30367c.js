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

      _cclegacy._RF.push({}, "34667vGmU5H6YPwirfr0leC", "MsgNotifySyncFrame", undefined);
      /**服务端广播给所有客户端的每帧数据*/


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8035e6f2c66eae49c01df1de37c64ab5bf30367c.js.map