System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfReqTerminalFilterRoom(extras) {
    _reporterNs.report("ReqTerminalFilterRoom", "../../shared/tsgfServer/gameCluster/protocols/PtlTerminalFilterRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResTerminalFilterRoom(extras) {
    _reporterNs.report("ResTerminalFilterRoom", "../../shared/tsgfServer/gameCluster/protocols/PtlTerminalFilterRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameClusterApiCall(extras) {
    _reporterNs.report("GameClusterApiCall", "../GameServerClusterMgr", _context.meta, extras);
  }

  _export("default", async function (call) {
    let filterRes = call.getGameClusterServer().roomMgr.filterRooms(call.req.filter, call.req.skip, call.req.limit);
    return await call.succ({ ...filterRes
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

      _cclegacy._RF.push({}, "4efa69TCRhF5IKCtHXd1+G6", "ApiTerminalFilterRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c3a91357a6db3649dd9e1692285dac744fb3c0c6.js.map