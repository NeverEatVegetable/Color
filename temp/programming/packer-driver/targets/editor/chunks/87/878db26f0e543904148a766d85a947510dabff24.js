System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfReqRoomRobotLeave(extras) {
    _reporterNs.report("ReqRoomRobotLeave", "../../shared/gameClient/protocols/PtlRoomRobotLeave", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResRoomRobotLeave(extras) {
    _reporterNs.report("ResRoomRobotLeave", "../../shared/gameClient/protocols/PtlRoomRobotLeave", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("default", async function (call) {
    let ret = await call.getGameServer().roomMgr.roomRobotLeave(call.conn.currPlayer, call.req.robotPlayerId);

    if (!ret.succ) {
      return await call.error(ret.err, {
        code: ret.code
      });
    }

    return await call.succ({
      robotInfo: ret.data
    });
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e77b94yktdDyJQfxluTVfD4", "ApiRoomRobotLeave", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=878db26f0e543904148a766d85a947510dabff24.js.map