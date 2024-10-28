System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, _crd;

  async function ApiRequestFrames(call) {
    if (call.req.beginFrameIndex < 0) {
      return await call.error('beginFrameIndex需要大于等于0 ！', {
        code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
          error: Error()
        }), ErrorCodes) : ErrorCodes).ParamsError
      });
    }

    if (call.req.endFrameIndex < call.req.beginFrameIndex) {
      return await call.error('endFrameIndex需要大于等于beginFrameIndex！', {
        code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
          error: Error()
        }), ErrorCodes) : ErrorCodes).ParamsError
      });
    }

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

    let frames = gameRoom.game.requestFrames(call.req.beginFrameIndex, call.req.endFrameIndex);
    return await call.succ({
      frames: frames
    });
  }

  function _reportPossibleCrUseOfReqRequestFrames(extras) {
    _reporterNs.report("ReqRequestFrames", "../../shared/gameClient/protocols/PtlRequestFrames", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResRequestFrames(extras) {
    _reporterNs.report("ResRequestFrames", "../../shared/gameClient/protocols/PtlRequestFrames", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiRequestFrames", ApiRequestFrames);

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

      _cclegacy._RF.push({}, "5e4e8eoNYRNNJLQiKOY98HS", "ApiRequestFrames", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6ade8f4c2a558d75dfd5563223e9ab24fb7a6852.js.map