System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfReqCreateRoomRobot(extras) {
    _reporterNs.report("ReqCreateRoomRobot", "../../shared/gameClient/protocols/PtlCreateRoomRobot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResCreateRoomRobot(extras) {
    _reporterNs.report("ResCreateRoomRobot", "../../shared/gameClient/protocols/PtlCreateRoomRobot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("default", async function (call) {
    let ret = await call.getGameServer().roomMgr.createRoomRobot(call.conn.currPlayer, call.req.createPa, call.req.teamId);

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

      _cclegacy._RF.push({}, "b5a56HfY4hPDKsu1ESsmFBa", "ApiCreateRoomRobot", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b9a53591fee5f112c3fb62ce7d30309d9365dcfa.js.map