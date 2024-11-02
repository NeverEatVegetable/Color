System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ApiStopFrameSync(_x) {
    return _ApiStopFrameSync.apply(this, arguments);
  }

  function _ApiStopFrameSync() {
    _ApiStopFrameSync = _asyncToGenerator(function* (call) {
      var gameServer = call.getGameServer();
      var gameRoom = yield gameServer.roomMgr.getGameRoom(call.conn.currPlayer);
      if (!gameRoom) return yield call.error('玩家不在房间中！');
      gameRoom.stopGameFrameSync(call.conn.currPlayer); //不用等待直接返回成功

      return yield call.succ({});
    });
    return _ApiStopFrameSync.apply(this, arguments);
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