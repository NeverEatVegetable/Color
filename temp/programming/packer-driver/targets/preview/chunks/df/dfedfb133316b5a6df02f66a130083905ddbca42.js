System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ApiQueryMatch(_x) {
    return _ApiQueryMatch.apply(this, arguments);
  }

  function _ApiQueryMatch() {
    _ApiQueryMatch = _asyncToGenerator(function* (call) {
      var ret = yield call.getHallServer().matchRequestTerminal.queryMatch(call.conn.currPlayer.authInfo.appId, call.req.matchReqId);

      if (ret === null) {
        //失败的结果
        return yield call.succ({
          hasResult: false
        });
      }

      if (!ret.succ) {
        return yield call.succ({
          hasResult: true,
          errMsg: ret.err,
          errCode: ret.code
        });
      }

      return yield call.succ({
        hasResult: true,
        matchResult: ret.data
      });
    });
    return _ApiQueryMatch.apply(this, arguments);
  }

  function _reportPossibleCrUseOfReqQueryMatch(extras) {
    _reporterNs.report("ReqQueryMatch", "../../shared/hallClient/protocols/PtlQueryMatch", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResQueryMatch(extras) {
    _reporterNs.report("ResQueryMatch", "../../shared/hallClient/protocols/PtlQueryMatch", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallApiCall(extras) {
    _reporterNs.report("HallApiCall", "../HallServer", _context.meta, extras);
  }

  _export("ApiQueryMatch", ApiQueryMatch);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3ef1CnTmJDEaccaekbLV7H", "ApiQueryMatch", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dfedfb133316b5a6df02f66a130083905ddbca42.js.map