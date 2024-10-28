System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ApiChangeRoom(_x) {
    return _ApiChangeRoom.apply(this, arguments);
  }

  function _ApiChangeRoom() {
    _ApiChangeRoom = _asyncToGenerator(function* (call) {
      var ret = yield call.getGameServer().roomMgr.changeCurrRoom(call.conn.currPlayer, call.req);

      if (!ret.succ) {
        return yield call.error(ret.err, {
          code: ret.code
        });
      }

      return yield call.succ({
        roomInfo: ret.data
      });
    });
    return _ApiChangeRoom.apply(this, arguments);
  }

  function _reportPossibleCrUseOfReqChangeRoom(extras) {
    _reporterNs.report("ReqChangeRoom", "../../shared/gameClient/protocols/PtlChangeRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResChangeRoom(extras) {
    _reporterNs.report("ResChangeRoom", "../../shared/gameClient/protocols/PtlChangeRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiChangeRoom", ApiChangeRoom);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d77787Z/9RKxLG/m+1Eib4s", "ApiChangeRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1277b631de0dc2721e48c6a4a4a76416139c5b94.js.map