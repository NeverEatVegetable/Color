System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, _crd;

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

  _export("default", async function (call) {
    let t = call.getHallServer().gameClusterTerminal;
    let getRet = await t.getRoomOnlineInfo(call.req.roomId);

    if (!getRet.succ) {
      return await call.error(getRet.err, {
        code: getRet.code
      });
    }

    let roomOnlineInfo = getRet.data;

    if (roomOnlineInfo.ownerPlayerId !== call.conn.currPlayer.authInfo.playerId) {
      return await call.error('只有房主才可以解散房间！', {
        code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
          error: Error()
        }), ErrorCodes) : ErrorCodes).RoomPermissionDenied
      });
    }

    let ret = await t.dismissRoom(call.req.roomId);

    if (!ret.succ) {
      return await call.error(ret.err, {
        code: ret.code
      });
    }

    return await call.succ({
      roomOnlineInfo: ret.data
    });
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