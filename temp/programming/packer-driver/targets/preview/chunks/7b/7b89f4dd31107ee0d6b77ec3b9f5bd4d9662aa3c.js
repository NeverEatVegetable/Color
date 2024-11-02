System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ApiStartFrameSync(_x) {
    return _ApiStartFrameSync.apply(this, arguments);
  }

  function _ApiStartFrameSync() {
    _ApiStartFrameSync = _asyncToGenerator(function* (call) {
      var gameServer = call.getGameServer();
      var gameRoom = yield gameServer.roomMgr.getGameRoom(call.conn.currPlayer);
      if (!gameRoom) return yield call.error('玩家不在房间中！'); //开始帧同步,这个不用等待,直接异步开始

      gameRoom.startGameFrameSync(call.conn.currPlayer); //不用等待开始,直接返回成功

      return yield call.succ({});
    });
    return _ApiStartFrameSync.apply(this, arguments);
  }

  function _reportPossibleCrUseOfReqStartFrameSync(extras) {
    _reporterNs.report("ReqStartFrameSync", "../../shared/gameClient/protocols/PtlStartFrameSync", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResStartFrameSync(extras) {
    _reporterNs.report("ResStartFrameSync", "../../shared/gameClient/protocols/PtlStartFrameSync", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiStartFrameSync", ApiStartFrameSync);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3cc46lomT5FWbvbJVJ4P+61", "ApiStartFrameSync", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b89f4dd31107ee0d6b77ec3b9f5bd4d9662aa3c.js.map