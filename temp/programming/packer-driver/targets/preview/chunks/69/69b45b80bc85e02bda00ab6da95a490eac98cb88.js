System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, PlayerAuthHelper, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _ref() {
    _ref = _asyncToGenerator(function* (call) {
      var reqData = call.req;

      if (!reqData.playerId) {
        return yield call.error('playerId 不能为空！', {
          code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).ParamsError
        });
      }

      if (!reqData.playerToken) {
        return yield call.error('playerToken 不能为空！', {
          code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).ParamsError
        });
      }

      var ret = yield (_crd && PlayerAuthHelper === void 0 ? (_reportPossibleCrUseOfPlayerAuthHelper({
        error: Error()
      }), PlayerAuthHelper) : PlayerAuthHelper).verificationFromId(reqData.playerId, reqData.playerToken, reqData.updateShowName);

      if (!ret.succ) {
        return yield call.error(ret.err, {
          code: ret.code
        });
      }

      var roomOnlineInfo = null;

      if (ret.data.currRoomId) {
        var getRoomRet = yield call.getHallServer().gameClusterTerminal.getRoomOnlineInfo(ret.data.currRoomId);

        if (!getRoomRet.succ) {
          return yield call.error(getRoomRet.err, {
            code: ret.code
          });
        }

        roomOnlineInfo = getRoomRet.data;
      }

      yield call.succ({
        roomOnlineInfo
      });
    });
    return _ref.apply(this, arguments);
  }

  function _reportPossibleCrUseOfReqRecoverPlayerRoom(extras) {
    _reporterNs.report("ReqRecoverPlayerRoom", "../../shared/hallClient/protocols/PtlRecoverPlayerRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResRecoverPlayerRoom(extras) {
    _reporterNs.report("ResRecoverPlayerRoom", "../../shared/hallClient/protocols/PtlRecoverPlayerRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomOnlineInfo(extras) {
    _reporterNs.report("IRoomOnlineInfo", "../../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerAuthHelper(extras) {
    _reporterNs.report("PlayerAuthHelper", "../../shared/tsgfServer/auth/PlayerAuthHelper", _context.meta, extras);
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
    }, function (_unresolved_3) {
      PlayerAuthHelper = _unresolved_3.PlayerAuthHelper;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "defdfT4vTJK6bJx+0HkVDAu", "ApiRecoverPlayerRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=69b45b80bc85e02bda00ab6da95a490eac98cb88.js.map