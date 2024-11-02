System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _ref() {
    _ref = _asyncToGenerator(function* (call) {
      var t = call.getHallServer().gameClusterTerminal;
      var getRet = yield t.getRoomOnlineInfo(call.req.roomId);

      if (!getRet.succ) {
        return yield call.error(getRet.err, {
          code: getRet.code
        });
      }

      var roomOnlineInfo = getRet.data;

      if (roomOnlineInfo.ownerPlayerId !== call.conn.currPlayer.authInfo.playerId) {
        return yield call.error('只有房主才可以解散房间！', {
          code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomPermissionDenied
        });
      }

      var ret = yield t.dismissRoom(call.req.roomId);

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

  function _reportPossibleCrUseOfReqOwnDismissRoom(extras) {
    _reporterNs.report("ReqOwnDismissRoom", "../../shared/hallClient/protocols/PtlOwnDismissRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResOwnDismissRoom(extras) {
    _reporterNs.report("ResOwnDismissRoom", "../../shared/hallClient/protocols/PtlOwnDismissRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallApiCall(extras) {
    _reporterNs.report("HallApiCall", "../HallServer", _context.meta, extras);
  }

  _export("default", function (_x) {
    return _ref.apply(this, arguments);
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ErrorCodes = _unresolved_2.ErrorCodes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bddcbKQyyxKxJWWE5L2GUu7", "ApiOwnDismissRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=be651d842adddfaf29a92fc4486240a595fd299f.js.map