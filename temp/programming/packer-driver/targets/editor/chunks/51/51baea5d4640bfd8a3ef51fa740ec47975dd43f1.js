System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfGameClusterApiCall(extras) {
    _reporterNs.report("GameClusterApiCall", "../GameServerClusterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqTerminalCreateRoom(extras) {
    _reporterNs.report("ReqTerminalCreateRoom", "../../shared/tsgfServer/gameCluster/protocols/PtlTerminalCreateRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResTerminalCreateRoom(extras) {
    _reporterNs.report("ResTerminalCreateRoom", "../../shared/tsgfServer/gameCluster/protocols/PtlTerminalCreateRoom", _context.meta, extras);
  }

  _export("default", async function (call) {
    let ret = await call.getGameClusterServer().roomMgr.createRoom(call.req.appId, call.req);

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8b0eUUb1VKFIeG6FhYa1z4", "ApiTerminalCreateRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=51baea5d4640bfd8a3ef51fa740ec47975dd43f1.js.map