System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  async function ApiChangeCustomPlayerProfile(call) {
    let ret = await call.getGameServer().roomMgr.changeCustomPlayerProfile(call.conn.currPlayer, call.req.customPlayerProfile, call.req.robotPlayerId);

    if (!ret.succ) {
      return await call.error(ret.err, {
        code: ret.code
      });
    }

    return await call.succ({
      roomInfo: ret.data
    });
  }

  function _reportPossibleCrUseOfReqChangeCustomPlayerProfile(extras) {
    _reporterNs.report("ReqChangeCustomPlayerProfile", "../../shared/gameClient/protocols/PtlChangeCustomPlayerProfile", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResChangeCustomPlayerProfile(extras) {
    _reporterNs.report("ResChangeCustomPlayerProfile", "../../shared/gameClient/protocols/PtlChangeCustomPlayerProfile", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiChangeCustomPlayerProfile", ApiChangeCustomPlayerProfile);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d6e65Fv/UlOp6tC24YbUQXw", "ApiChangeCustomPlayerProfile", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ed043edb76945a1f924ffaece1758e5e188749c6.js.map