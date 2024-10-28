System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, _crd;

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqTerminalGetRoomOnlineInfo(extras) {
    _reporterNs.report("ReqTerminalGetRoomOnlineInfo", "../../shared/tsgfServer/gameCluster/protocols/PtlTerminalGetRoomOnlineInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResTerminalGetRoomOnlineInfo(extras) {
    _reporterNs.report("ResTerminalGetRoomOnlineInfo", "../../shared/tsgfServer/gameCluster/protocols/PtlTerminalGetRoomOnlineInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameClusterApiCall(extras) {
    _reporterNs.report("GameClusterApiCall", "../GameServerClusterMgr", _context.meta, extras);
  }

  _export("default", async function (call) {
    let roomOnlineInfo = call.getGameClusterServer().roomMgr.getRoomOnlineInfo(call.req.roomId);

    if (!roomOnlineInfo) {
      return await call.error('roomId未找到', {
        code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
          error: Error()
        }), ErrorCodes) : ErrorCodes).RoomNotFound
      });
    }

    return await call.succ({
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3d47a2ZzkBJYrtz1OqJJvcG", "ApiTerminalGetRoomOnlineInfo", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=000612ff4c221f26a6b6ab61f1e86af4bc7e5700.js.map