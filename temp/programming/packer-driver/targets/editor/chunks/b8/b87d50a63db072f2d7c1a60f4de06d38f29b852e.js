System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  async function ApiCancelMatch(call) {
    let ret = await call.getGameServer().roomMgr.cancelMatch(call.conn.currPlayer);

    if (!ret.succ) {
      return await call.error(ret.err, {
        code: ret.code
      });
    }

    return await call.succ({
      matchResult: ret.data
    });
  }

  function _reportPossibleCrUseOfReqCancelMatch(extras) {
    _reporterNs.report("ReqCancelMatch", "../../shared/gameClient/protocols/PtlCancelMatch", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResCancelMatch(extras) {
    _reporterNs.report("ResCancelMatch", "../../shared/gameClient/protocols/PtlCancelMatch", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiCancelMatch", ApiCancelMatch);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e7e6dzYiPJBWrCX3gwUnXpt", "ApiCancelMatch", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b87d50a63db072f2d7c1a60f4de06d38f29b852e.js.map