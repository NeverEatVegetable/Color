System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, _crd;

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqNodeExtractRoom(extras) {
    _reporterNs.report("ReqNodeExtractRoom", "../../shared/tsgfServer/gameCluster/protocols/PtlNodeExtractRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResNodeExtractRoom(extras) {
    _reporterNs.report("ResNodeExtractRoom", "../../shared/tsgfServer/gameCluster/protocols/PtlNodeExtractRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameClusterApiCall(extras) {
    _reporterNs.report("GameClusterApiCall", "../GameServerClusterMgr", _context.meta, extras);
  }

  _export("default", async function (call) {
    let roomData = call.getGameClusterServer().roomMgr.extractRoom(call.req.roomId);

    if (!roomData) {
      return await call.error('提取房间信息失败：不存在的房间ID！', {
        code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
          error: Error()
        }), ErrorCodes) : ErrorCodes).RoomNotFound
      });
    }

    return await call.succ({
      roomRegInfo: roomData.regInfo,
      roomInfo: roomData.roomInfo
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

      _cclegacy._RF.push({}, "88612vHH45KCIpKPkLLGKdX", "ApiNodeExtractRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=207ce438b965fb2925474712384ad32bc121d5dd.js.map