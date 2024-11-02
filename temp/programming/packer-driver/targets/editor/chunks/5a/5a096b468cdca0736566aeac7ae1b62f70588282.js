System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, _crd;

  async function ApiRequestAfterFrames(call) {
    let gameServer = call.getGameServer();
    let gameRoom = await gameServer.roomMgr.getGameRoom(call.conn.currPlayer);

    if (!gameRoom) {
      return await call.error('玩家不在房间中！', {
        code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
          error: Error()
        }), ErrorCodes) : ErrorCodes).RoomNotIn
      });
    }

    if (!gameRoom.game.inSync) {
      return await call.error('当前不在同步中！', {
        code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
          error: Error()
        }), ErrorCodes) : ErrorCodes).RoomNotInSync
      });
    }

    let afterFrames = gameRoom.game.buildAfterFrames(call.req.startFrameIndex);
    return await call.succ(afterFrames);
  }

  function _reportPossibleCrUseOfReqRequestAfterFrames(extras) {
    _reporterNs.report("ReqRequestAfterFrames", "../../shared/gameClient/protocols/PtlRequestAfterFrames", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResRequestAfterFrames(extras) {
    _reporterNs.report("ResRequestAfterFrames", "../../shared/gameClient/protocols/PtlRequestAfterFrames", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiRequestAfterFrames", ApiRequestAfterFrames);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ErrorCodes = _unresolved_2.ErrorCodes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c6b64SNRxJDiLIXvPn4tWrX", "ApiRequestAfterFrames", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5a096b468cdca0736566aeac7ae1b62f70588282.js.map