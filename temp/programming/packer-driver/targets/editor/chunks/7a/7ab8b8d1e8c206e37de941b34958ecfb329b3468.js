System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, _crd;

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqTerminalDismissRoom(extras) {
    _reporterNs.report("ReqTerminalDismissRoom", "../../shared/tsgfServer/gameCluster/protocols/PtlTerminalDismissRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResTerminalDismissRoom(extras) {
    _reporterNs.report("ResTerminalDismissRoom", "../../shared/tsgfServer/gameCluster/protocols/PtlTerminalDismissRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameClusterApiCall(extras) {
    _reporterNs.report("GameClusterApiCall", "../GameServerClusterMgr", _context.meta, extras);
  }

  _export("default", async function (call) {
    // 直接解散集群内的房间信息，再通知游戏服务器（游戏服务器还会再通知回来，返回了找不到的错误，游戏服务器可以忽略）
    let regInfo = call.getGameClusterServer().roomMgr.dismissRoom(call.req.roomId);

    if (!regInfo) {
      return await call.error('roomId未找到', {
        code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
          error: Error()
        }), ErrorCodes) : ErrorCodes).RoomNotFound
      });
    } // 通知游戏服务器解散()


    let ret = await call.getGameClusterServer().notifyGameServerDismissRoom(regInfo);

    if (!ret.succ) {
      return await call.error(ret.err, {
        code: ret.code
      });
    } // 生成房间在线信息


    let roomOnlineInfo = call.getGameClusterServer().buildRoomOnlineInfo(regInfo);

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

      _cclegacy._RF.push({}, "8abc5fbnjZAYKEnTJVp8xcN", "ApiTerminalDismissRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7ab8b8d1e8c206e37de941b34958ecfb329b3468.js.map