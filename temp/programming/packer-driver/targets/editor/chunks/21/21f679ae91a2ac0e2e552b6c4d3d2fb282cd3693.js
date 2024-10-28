System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  async function ApiDismissRoom(call) {
    let ret = await call.getGameServer().roomMgr.dismissRoom(call.conn.currPlayer, call.req.roomId);

    if (!ret.succ) {
      return await call.error(ret.err, {
        code: ret.code
      });
    }

    return await call.succ({
      roomInfo: ret.data
    });
  }

  function _reportPossibleCrUseOfReqDismissRoom(extras) {
    _reporterNs.report("ReqDismissRoom", "../../shared/gameClient/protocols/PtlDismissRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResDismissRoom(extras) {
    _reporterNs.report("ResDismissRoom", "../../shared/gameClient/protocols/PtlDismissRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiDismissRoom", ApiDismissRoom);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "035169Pe9VDWb2y9mMpaCnP", "ApiDismissRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=21f679ae91a2ac0e2e552b6c4d3d2fb282cd3693.js.map