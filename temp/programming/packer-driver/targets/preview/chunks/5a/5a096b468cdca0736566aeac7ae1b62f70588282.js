System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ApiRequestAfterFrames(_x) {
    return _ApiRequestAfterFrames.apply(this, arguments);
  }

  function _ApiRequestAfterFrames() {
    _ApiRequestAfterFrames = _asyncToGenerator(function* (call) {
      var gameServer = call.getGameServer();
      var gameRoom = yield gameServer.roomMgr.getGameRoom(call.conn.currPlayer);

      if (!gameRoom) {
        return yield call.error('玩家不在房间中！', {
          code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNotIn
        });
      }

      if (!gameRoom.game.inSync) {
        return yield call.error('当前不在同步中！', {
          code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNotInSync
        });
      }

      var afterFrames = gameRoom.game.buildAfterFrames(call.req.startFrameIndex);
      return yield call.succ(afterFrames);
    });
    return _ApiRequestAfterFrames.apply(this, arguments);
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