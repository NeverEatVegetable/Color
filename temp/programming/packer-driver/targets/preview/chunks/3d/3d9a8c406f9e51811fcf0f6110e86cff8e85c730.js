System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ApiRequestMatch(_x) {
    return _ApiRequestMatch.apply(this, arguments);
  }

  function _ApiRequestMatch() {
    _ApiRequestMatch = _asyncToGenerator(function* (call) {
      var ret = yield call.getGameServer().roomMgr.requestMatch(call.conn.currPlayer, call.req.matchParams);

      if (!ret.succ) {
        return yield call.error(ret.err, {
          code: ret.code
        });
      }

      return yield call.succ({
        matchReqId: ret.data
      });
    });
    return _ApiRequestMatch.apply(this, arguments);
  }

  function _reportPossibleCrUseOfReqRequestMatch(extras) {
    _reporterNs.report("ReqRequestMatch", "../../shared/gameClient/protocols/PtlRequestMatch", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResRequestMatch(extras) {
    _reporterNs.report("ResRequestMatch", "../../shared/gameClient/protocols/PtlRequestMatch", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiRequestMatch", ApiRequestMatch);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02e8bR32gFNGJLSGpwWVTUz", "ApiRequestMatch", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3d9a8c406f9e51811fcf0f6110e86cff8e85c730.js.map