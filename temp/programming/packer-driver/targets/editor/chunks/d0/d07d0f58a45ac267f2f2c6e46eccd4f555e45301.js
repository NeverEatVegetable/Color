System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  async function ApiRequestMatch(call) {
    let ret = await call.getHallServer().matchRequestTerminal.requestMatch(call.conn.currPlayer.authInfo.appId, call.req.matchParams);

    if (!ret.succ) {
      return await call.error(ret.err, {
        code: ret.code
      });
    }

    return await call.succ({
      matchReqId: ret.data
    });
  }

  function _reportPossibleCrUseOfReqRequestMatch(extras) {
    _reporterNs.report("ReqRequestMatch", "../../shared/hallClient/protocols/PtlRequestMatch", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResRequestMatch(extras) {
    _reporterNs.report("ResRequestMatch", "../../shared/hallClient/protocols/PtlRequestMatch", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallApiCall(extras) {
    _reporterNs.report("HallApiCall", "../HallServer", _context.meta, extras);
  }

  _export("ApiRequestMatch", ApiRequestMatch);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1ad19vb/hNBDJOIqkSCYwjJ", "ApiRequestMatch", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d07d0f58a45ac267f2f2c6e46eccd4f555e45301.js.map