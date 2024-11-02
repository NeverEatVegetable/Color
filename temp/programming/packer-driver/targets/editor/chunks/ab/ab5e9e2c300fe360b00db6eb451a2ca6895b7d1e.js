System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, _crd;

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqTerminalGetOrCreateRoom(extras) {
    _reporterNs.report("ReqTerminalGetOrCreateRoom", "../../shared/tsgfServer/gameCluster/protocols/PtlTerminalGetOrCreateRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResTerminalGetOrCreateRoom(extras) {
    _reporterNs.report("ResTerminalGetOrCreateRoom", "../../shared/tsgfServer/gameCluster/protocols/PtlTerminalGetOrCreateRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameClusterApiCall(extras) {
    _reporterNs.report("GameClusterApiCall", "../GameServerClusterMgr", _context.meta, extras);
  }

  _export("default", async function (call) {
    var _getOrAllotRet$data$m;

    if (!call.req.matchRoomType && !call.req.matchMaxPlayers) {
      return await call.error('match参数至少要有一个!', {
        code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
          error: Error()
        }), ErrorCodes) : ErrorCodes).ParamsError
      });
    }

    let getOrAllotRet = await call.getGameClusterServer().roomMgr.getOrAllotGameServer(call.req.appId, call.req);

    if (!getOrAllotRet.succ) {
      return await call.error(getOrAllotRet.err, {
        code: getOrAllotRet.code
      });
    }

    if ((_getOrAllotRet$data$m = getOrAllotRet.data.matchRoomOnlineInfoList) != null && _getOrAllotRet$data$m.length) {
      // 匹配到现有房间
      return await call.succ({
        matchRoomOnlineInfoList: getOrAllotRet.data.matchRoomOnlineInfoList
      });
    }

    if (getOrAllotRet.data.createRoomOnlineInfo) {
      // 成功创建房间
      return await call.succ({
        createRoomOnlineInfo: getOrAllotRet.data.createRoomOnlineInfo
      });
    }

    return await call.error('结果异常！', {
      code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
        error: Error()
      }), ErrorCodes) : ErrorCodes).Exception
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

      _cclegacy._RF.push({}, "d88176oRrtJUZMNzrZGtnOS", "ApiTerminalGetOrCreateRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ab5e9e2c300fe360b00db6eb451a2ca6895b7d1e.js.map