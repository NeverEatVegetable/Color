System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfReqFilterRooms(extras) {
    _reporterNs.report("ReqFilterRooms", "../../shared/hallClient/protocols/PtlFilterRooms", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResFilterRooms(extras) {
    _reporterNs.report("ResFilterRooms", "../../shared/hallClient/protocols/PtlFilterRooms", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallApiCall(extras) {
    _reporterNs.report("HallApiCall", "../HallServer", _context.meta, extras);
  }

  _export("default", async function (call) {
    let filterRet = await call.getHallServer().gameClusterTerminal.filterRooms(call.req.filter, call.req.skip, call.req.limit);

    if (!filterRet.succ) {
      return await call.error(filterRet.err, {
        code: filterRet.code
      });
    }

    return await call.succ({ ...filterRet.data
    });
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa7c2BHzo1IU4cAvb/ntgOh", "ApiFilterRooms", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=126612845f8f08583e8181de25cd104ce23dfd7c.js.map