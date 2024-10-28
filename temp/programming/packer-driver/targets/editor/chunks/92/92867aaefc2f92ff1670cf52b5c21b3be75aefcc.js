System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  async function ApiLeaveRoom(call) {
    let ret = await call.getGameServer().roomMgr.leaveRoom(call.conn.currPlayer);

    if (!ret.succ) {
      return await call.error(ret.err, {
        code: ret.code
      });
    }

    return await call.succ({});
  }

  function _reportPossibleCrUseOfReqLeaveRoom(extras) {
    _reporterNs.report("ReqLeaveRoom", "../../shared/gameClient/protocols/PtlLeaveRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResLeaveRoom(extras) {
    _reporterNs.report("ResLeaveRoom", "../../shared/gameClient/protocols/PtlLeaveRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiLeaveRoom", ApiLeaveRoom);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "84a91j6ve1EHJWPcXpxuCF6", "ApiLeaveRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=92867aaefc2f92ff1670cf52b5c21b3be75aefcc.js.map