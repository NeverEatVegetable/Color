System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, PlayerAuthHelper, _crd;

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

  _export("default", async function (call) {
    let reqData = call.req;

    if (!reqData.playerId) {
      return await call.error('playerId 不能为空！', {
        code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
          error: Error()
        }), ErrorCodes) : ErrorCodes).ParamsError
      });
    }

    if (!reqData.playerToken) {
      return await call.error('playerToken 不能为空！', {
        code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
          error: Error()
        }), ErrorCodes) : ErrorCodes).ParamsError
      });
    }

    let ret = await (_crd && PlayerAuthHelper === void 0 ? (_reportPossibleCrUseOfPlayerAuthHelper({
      error: Error()
    }), PlayerAuthHelper) : PlayerAuthHelper).verificationFromId(reqData.playerId, reqData.playerToken, reqData.updateShowName);

    if (!ret.succ) {
      return await call.error(ret.err, {
        code: ret.code
      });
    }

    let roomOnlineInfo = null;

    if (ret.data.currRoomId) {
      let getRoomRet = await call.getHallServer().gameClusterTerminal.getRoomOnlineInfo(ret.data.currRoomId);

      if (!getRoomRet.succ) {
        return await call.error(getRoomRet.err, {
          code: ret.code
        });
      }

      roomOnlineInfo = getRoomRet.data;
    }

    await call.succ({
      roomOnlineInfo
    });
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