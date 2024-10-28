System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ApiLeaveRoom(_x) {
    return _ApiLeaveRoom.apply(this, arguments);
  }

  function _ApiLeaveRoom() {
    _ApiLeaveRoom = _asyncToGenerator(function* (call) {
      var ret = yield call.getGameServer().roomMgr.leaveRoom(call.conn.currPlayer);

      if (!ret.succ) {
        return yield call.error(ret.err, {
          code: ret.code
        });
      }

      return yield call.succ({});
    });
    return _ApiLeaveRoom.apply(this, arguments);
  }

  function _reportPossibleCrUseOfReqLeaveRoom(extras) {
    _reporterNs.report("ReqLeaveRoom", "../../shared/gameClient/protocols/PtlLeaveRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResLeaveRoom(extras) {
    _reporterNs.report("ResLeaveRoom", "../../shared/gameClient/protocols/PtlLeaveRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiLeaveRoom", ApiLeaveRoom);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "84a91j6ve1EHJWPcXpxuCF6", "ApiLeaveRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=92867aaefc2f92ff1670cf52b5c21b3be75aefcc.js.map