System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ApiCancelMatch(_x) {
    return _ApiCancelMatch.apply(this, arguments);
  }

  function _ApiCancelMatch() {
    _ApiCancelMatch = _asyncToGenerator(function* (call) {
      var ret = yield call.getGameServer().roomMgr.cancelMatch(call.conn.currPlayer);

      if (!ret.succ) {
        return yield call.error(ret.err, {
          code: ret.code
        });
      }

      return yield call.succ({
        matchResult: ret.data
      });
    });
    return _ApiCancelMatch.apply(this, arguments);
  }

  function _reportPossibleCrUseOfReqCancelMatch(extras) {
    _reporterNs.report("ReqCancelMatch", "../../shared/gameClient/protocols/PtlCancelMatch", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResCancelMatch(extras) {
    _reporterNs.report("ResCancelMatch", "../../shared/gameClient/protocols/PtlCancelMatch", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiCancelMatch", ApiCancelMatch);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e7e6dzYiPJBWrCX3gwUnXpt", "ApiCancelMatch", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b87d50a63db072f2d7c1a60f4de06d38f29b852e.js.map