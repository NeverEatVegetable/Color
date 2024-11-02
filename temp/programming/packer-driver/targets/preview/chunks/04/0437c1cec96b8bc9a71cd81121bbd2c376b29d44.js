System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ERoomCreateType, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ApiCreateRoom(_x) {
    return _ApiCreateRoom.apply(this, arguments);
  }

  function _ApiCreateRoom() {
    _ApiCreateRoom = _asyncToGenerator(function* (call) {
      var ret = yield call.getHallServer().gameClusterTerminal.createRoom(call.conn.currPlayer.authInfo.appId, call.req, (_crd && ERoomCreateType === void 0 ? (_reportPossibleCrUseOfERoomCreateType({
        error: Error()
      }), ERoomCreateType) : ERoomCreateType).COMMON_CREATE);

      if (!ret.succ) {
        return yield call.error(ret.err, {
          code: ret.code
        });
      }

      return yield call.succ({
        roomOnlineInfo: ret.data
      });
    });
    return _ApiCreateRoom.apply(this, arguments);
  }

  function _reportPossibleCrUseOfReqCreateRoom(extras) {
    _reporterNs.report("ReqCreateRoom", "../../shared/hallClient/protocols/PtlCreateRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResCreateRoom(extras) {
    _reporterNs.report("ResCreateRoom", "../../shared/hallClient/protocols/PtlCreateRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfERoomCreateType(extras) {
    _reporterNs.report("ERoomCreateType", "../../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallApiCall(extras) {
    _reporterNs.report("HallApiCall", "../HallServer", _context.meta, extras);
  }

  _export("ApiCreateRoom", ApiCreateRoom);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ERoomCreateType = _unresolved_2.ERoomCreateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85cc5X8xBBLjInAt5KIbNGu", "ApiCreateRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0437c1cec96b8bc9a71cd81121bbd2c376b29d44.js.map