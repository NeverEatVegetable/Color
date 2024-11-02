System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  async function ApiChangePlayerTeam(call) {
    let ret = await call.getGameServer().roomMgr.changePlayerTeam(call.conn.currPlayer, call.req.newTeamId, call.req.robotPlayerId);

    if (!ret.succ) {
      return await call.error(ret.err, {
        code: ret.code
      });
    }

    return await call.succ({
      roomInfo: ret.data
    });
  }

  function _reportPossibleCrUseOfReqChangePlayerTeam(extras) {
    _reporterNs.report("ReqChangePlayerTeam", "../../shared/gameClient/protocols/PtlChangePlayerTeam", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResChangePlayerTeam(extras) {
    _reporterNs.report("ResChangePlayerTeam", "../../shared/gameClient/protocols/PtlChangePlayerTeam", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiChangePlayerTeam", ApiChangePlayerTeam);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d014bAPV7tJvb08IEK0jsQF", "ApiChangePlayerTeam", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=49c218b5345634bc99a3af33d477386c6e678dac.js.map