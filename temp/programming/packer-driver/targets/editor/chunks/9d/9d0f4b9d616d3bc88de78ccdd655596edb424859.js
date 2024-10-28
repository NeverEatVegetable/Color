System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfHallApiCall(extras) {
    _reporterNs.report("HallApiCall", "../HallServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqGetOrCreateRoom(extras) {
    _reporterNs.report("ReqGetOrCreateRoom", "../../shared/hallClient/protocols/PtlGetOrCreateRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResGetOrCreateRoom(extras) {
    _reporterNs.report("ResGetOrCreateRoom", "../../shared/hallClient/protocols/PtlGetOrCreateRoom", _context.meta, extras);
  }

  _export("default", async function (call) {
    let getOrAllotRet = await call.getHallServer().gameClusterTerminal.getOrCreateRoom(call.conn.currPlayer.authInfo.appId, call.req);

    if (!getOrAllotRet.succ) {
      return await call.error(getOrAllotRet.err, {
        code: getOrAllotRet.code
      });
    }

    return await call.succ(getOrAllotRet.data);
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d01dfp8/YpJTaMmcunNoh7H", "ApiGetOrCreateRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9d0f4b9d616d3bc88de78ccdd655596edb424859.js.map