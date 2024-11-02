System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  async function ApiStopFrameSync(call) {
    let gameServer = call.getGameServer();
    let gameRoom = await gameServer.roomMgr.getGameRoom(call.conn.currPlayer);
    if (!gameRoom) return await call.error('玩家不在房间中！');
    gameRoom.stopGameFrameSync(call.conn.currPlayer); //不用等待直接返回成功

    return await call.succ({});
  }

  function _reportPossibleCrUseOfReqStopFrameSync(extras) {
    _reporterNs.report("ReqStopFrameSync", "../../shared/gameClient/protocols/PtlStopFrameSync", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResStopFrameSync(extras) {
    _reporterNs.report("ResStopFrameSync", "../../shared/gameClient/protocols/PtlStopFrameSync", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiStopFrameSync", ApiStopFrameSync);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4bb1cGiQ9hK2q0R57WwfsyX", "ApiStopFrameSync", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=90305e23c0830a47582ba45f177759a715f87652.js.map