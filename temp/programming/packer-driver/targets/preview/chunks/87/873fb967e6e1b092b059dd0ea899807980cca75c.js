System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ApiGetRoomOnlineInfo(_x) {
    return _ApiGetRoomOnlineInfo.apply(this, arguments);
  }

  function _ApiGetRoomOnlineInfo() {
    _ApiGetRoomOnlineInfo = _asyncToGenerator(function* (call) {
      var ret = yield call.getHallServer().gameClusterTerminal.getRoomOnlineInfo(call.req.roomId);

      if (!ret.succ) {
        return yield call.error(ret.err, {
          code: ret.code
        });
      }

      return yield call.succ({
        roomOnlineInfo: ret.data
      });
    });
    return _ApiGetRoomOnlineInfo.apply(this, arguments);
  }

  function _reportPossibleCrUseOfReqGetRoomOnlineInfo(extras) {
    _reporterNs.report("ReqGetRoomOnlineInfo", "../../shared/hallClient/protocols/PtlGetRoomOnlineInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResGetRoomOnlineInfo(extras) {
    _reporterNs.report("ResGetRoomOnlineInfo", "../../shared/hallClient/protocols/PtlGetRoomOnlineInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallApiCall(extras) {
    _reporterNs.report("HallApiCall", "../HallServer", _context.meta, extras);
  }

  _export("ApiGetRoomOnlineInfo", ApiGetRoomOnlineInfo);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "811e2IJv/pHfYZfPxNnOJOT", "ApiGetRoomOnlineInfo", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=873fb967e6e1b092b059dd0ea899807980cca75c.js.map