System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  async function ApiQueryMatch(call) {
    let ret = await call.getHallServer().matchRequestTerminal.queryMatch(call.conn.currPlayer.authInfo.appId, call.req.matchReqId);

    if (ret === null) {
      //失败的结果
      return await call.succ({
        hasResult: false
      });
    }

    if (!ret.succ) {
      return await call.succ({
        hasResult: true,
        errMsg: ret.err,
        errCode: ret.code
      });
    }

    return await call.succ({
      hasResult: true,
      matchResult: ret.data
    });
  }

  function _reportPossibleCrUseOfReqQueryMatch(extras) {
    _reporterNs.report("ReqQueryMatch", "../../shared/hallClient/protocols/PtlQueryMatch", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResQueryMatch(extras) {
    _reporterNs.report("ResQueryMatch", "../../shared/hallClient/protocols/PtlQueryMatch", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallApiCall(extras) {
    _reporterNs.report("HallApiCall", "../HallServer", _context.meta, extras);
  }

  _export("ApiQueryMatch", ApiQueryMatch);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3ef1CnTmJDEaccaekbLV7H", "ApiQueryMatch", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dfedfb133316b5a6df02f66a130083905ddbca42.js.map