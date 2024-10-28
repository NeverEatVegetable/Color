System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  async function ApiJoinRoom(call) {
    let ret = await call.getGameServer().roomMgr.joinRoom(call.conn.currPlayer, call.req);

    if (!ret.succ) {
      return await call.error(ret.err, {
        code: ret.code
      });
    }

    return await call.succ({
      roomInfo: ret.data
    });
  }

  function _reportPossibleCrUseOfReqJoinRoom(extras) {
    _reporterNs.report("ReqJoinRoom", "../../shared/gameClient/protocols/PtlJoinRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResJoinRoom(extras) {
    _reporterNs.report("ResJoinRoom", "../../shared/gameClient/protocols/PtlJoinRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiJoinRoom", ApiJoinRoom);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b16571fz+hJ6qUFettJFjlZ", "ApiJoinRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0639cd6caabf953d7e956c2df88c27fe937b1188.js.map