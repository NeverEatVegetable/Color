System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _ref() {
    _ref = _asyncToGenerator(function* (call) {
      var getOrAllotRet = yield call.getHallServer().gameClusterTerminal.getOrCreateRoom(call.conn.currPlayer.authInfo.appId, call.req);

      if (!getOrAllotRet.succ) {
        return yield call.error(getOrAllotRet.err, {
          code: getOrAllotRet.code
        });
      }

      return yield call.succ(getOrAllotRet.data);
    });
    return _ref.apply(this, arguments);
  }

  function _reportPossibleCrUseOfHallApiCall(extras) {
    _reporterNs.report("HallApiCall", "../HallServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqGetOrCreateRoom(extras) {
    _reporterNs.report("ReqGetOrCreateRoom", "../../shared/hallClient/protocols/PtlGetOrCreateRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResGetOrCreateRoom(extras) {
    _reporterNs.report("ResGetOrCreateRoom", "../../shared/hallClient/protocols/PtlGetOrCreateRoom", _context.meta, extras);
  }

  _export("default", function (_x) {
    return _ref.apply(this, arguments);
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d01dfp8/YpJTaMmcunNoh7H", "ApiGetOrCreateRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9d0f4b9d616d3bc88de78ccdd655596edb424859.js.map