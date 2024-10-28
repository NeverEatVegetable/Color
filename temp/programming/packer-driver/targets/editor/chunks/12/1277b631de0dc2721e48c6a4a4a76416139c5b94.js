System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  async function ApiChangeRoom(call) {
    let ret = await call.getGameServer().roomMgr.changeCurrRoom(call.conn.currPlayer, call.req);

    if (!ret.succ) {
      return await call.error(ret.err, {
        code: ret.code
      });
    }

    return await call.succ({
      roomInfo: ret.data
    });
  }

  function _reportPossibleCrUseOfReqChangeRoom(extras) {
    _reporterNs.report("ReqChangeRoom", "../../shared/gameClient/protocols/PtlChangeRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResChangeRoom(extras) {
    _reporterNs.report("ResChangeRoom", "../../shared/gameClient/protocols/PtlChangeRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiChangeRoom", ApiChangeRoom);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d77787Z/9RKxLG/m+1Eib4s", "ApiChangeRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1277b631de0dc2721e48c6a4a4a76416139c5b94.js.map