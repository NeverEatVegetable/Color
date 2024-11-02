System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  async function ApiChangeCustomPlayerStatus(call) {
    let ret = await call.getGameServer().roomMgr.changeCustomPlayerStatus(call.conn.currPlayer, call.req.customPlayerStatus, call.req.robotPlayerId);

    if (!ret.succ) {
      return await call.error(ret.err, {
        code: ret.code
      });
    }

    return await call.succ({
      roomInfo: ret.data
    });
  }

  function _reportPossibleCrUseOfReqChangeCustomPlayerStatus(extras) {
    _reporterNs.report("ReqChangeCustomPlayerStatus", "../../shared/gameClient/protocols/PtlChangeCustomPlayerStatus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResChangeCustomPlayerStatus(extras) {
    _reporterNs.report("ResChangeCustomPlayerStatus", "../../shared/gameClient/protocols/PtlChangeCustomPlayerStatus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiChangeCustomPlayerStatus", ApiChangeCustomPlayerStatus);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4ab21lh4PdFrJi/g6h3/TLg", "ApiChangeCustomPlayerStatus", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cbd3a35754b25785e5a6e2f8e8be24604ce13681.js.map