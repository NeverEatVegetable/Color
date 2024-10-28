System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ApiRequestFrames(_x) {
    return _ApiRequestFrames.apply(this, arguments);
  }

  function _ApiRequestFrames() {
    _ApiRequestFrames = _asyncToGenerator(function* (call) {
      if (call.req.beginFrameIndex < 0) {
        return yield call.error('beginFrameIndex需要大于等于0 ！', {
          code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).ParamsError
        });
      }

      if (call.req.endFrameIndex < call.req.beginFrameIndex) {
        return yield call.error('endFrameIndex需要大于等于beginFrameIndex！', {
          code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).ParamsError
        });
      }

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

      var frames = gameRoom.game.requestFrames(call.req.beginFrameIndex, call.req.endFrameIndex);
      return yield call.succ({
        frames: frames
      });
    });
    return _ApiRequestFrames.apply(this, arguments);
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