System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, _crd;

  function _reportPossibleCrUseOfGameClusterApiCall(extras) {
    _reporterNs.report("GameClusterApiCall", "../GameServerClusterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqNodeDismissRoom(extras) {
    _reporterNs.report("ReqNodeDismissRoom", "../../shared/tsgfServer/gameCluster/protocols/PtlNodeDismissRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResNodeDismissRoom(extras) {
    _reporterNs.report("ResNodeDismissRoom", "../../shared/tsgfServer/gameCluster/protocols/PtlNodeDismissRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../shared/tsgf/Result", _context.meta, extras);
  }

  _export("default", async function (call) {
    let roomRegInfo = call.getGameClusterServer().roomMgr.dismissRoom(call.req.roomId);

    if (!roomRegInfo) {
      return await call.error('roomId未找到', {
        code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
          error: Error()
        }), ErrorCodes) : ErrorCodes).RoomNotFound
      });
    }

    return await call.succ({
      roomRegInfo
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

      _cclegacy._RF.push({}, "fc8feLRBmBOOqTbc22WmuwJ", "ApiNodeDismissRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0c6ae5de60e8150f4d3969433ea143ac3e4d9fc1.js.map