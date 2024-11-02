System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfHallApiCall(extras) {
    _reporterNs.report("HallApiCall", "../HallServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqAppDismissRoomT(extras) {
    _reporterNs.report("ReqAppDismissRoomT", "../../shared/hallClient/protocols/PtlAppDismissRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResAppDismissRoom(extras) {
    _reporterNs.report("ResAppDismissRoom", "../../shared/hallClient/protocols/PtlAppDismissRoom", _context.meta, extras);
  }

  _export("default", async function (call) {
    let reqData = call.req.data;
    let ret = await call.getHallServer().gameClusterTerminal.dismissRoom(reqData.roomId);

    if (!ret.succ) {
      return await call.error(ret.err, {
        code: ret.code
      });
    }

    return await call.succ({
      roomOnlineInfo: ret.data
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

      _cclegacy._RF.push({}, "4d3caek94lAFrfQrAp04HLU", "ApiAppDismissRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2baf38d246406f5bb1637a388dd71e2ab2c52529.js.map