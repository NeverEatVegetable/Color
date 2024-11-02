System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _ref() {
    _ref = _asyncToGenerator(function* (call) {
      var reqData = call.req.data;
      var ret = yield call.getHallServer().gameClusterTerminal.dismissRoom(reqData.roomId);

      if (!ret.succ) {
        return yield call.error(ret.err, {
          code: ret.code
        });
      }

      return yield call.succ({
        roomOnlineInfo: ret.data
      });
    });
    return _ref.apply(this, arguments);
  }

  function _reportPossibleCrUseOfHallApiCall(extras) {
    _reporterNs.report("HallApiCall", "../HallServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqAppDismissRoomT(extras) {
    _reporterNs.report("ReqAppDismissRoomT", "../../shared/hallClient/protocols/PtlAppDismissRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResAppDismissRoom(extras) {
    _reporterNs.report("ResAppDismissRoom", "../../shared/hallClient/protocols/PtlAppDismissRoom", _context.meta, extras);
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

      _cclegacy._RF.push({}, "4d3caek94lAFrfQrAp04HLU", "ApiAppDismissRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2baf38d246406f5bb1637a388dd71e2ab2c52529.js.map