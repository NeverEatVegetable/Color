System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _ref() {
    _ref = _asyncToGenerator(function* (call) {
      var ret = yield call.getGameServer().roomMgr.createRoomRobot(call.conn.currPlayer, call.req.createPa, call.req.teamId);

      if (!ret.succ) {
        return yield call.error(ret.err, {
          code: ret.code
        });
      }

      return yield call.succ({
        robotInfo: ret.data
      });
    });
    return _ref.apply(this, arguments);
  }

  function _reportPossibleCrUseOfReqCreateRoomRobot(extras) {
    _reporterNs.report("ReqCreateRoomRobot", "../../shared/gameClient/protocols/PtlCreateRoomRobot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResCreateRoomRobot(extras) {
    _reporterNs.report("ResCreateRoomRobot", "../../shared/gameClient/protocols/PtlCreateRoomRobot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
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

      _cclegacy._RF.push({}, "b5a56HfY4hPDKsu1ESsmFBa", "ApiCreateRoomRobot", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b9a53591fee5f112c3fb62ce7d30309d9365dcfa.js.map