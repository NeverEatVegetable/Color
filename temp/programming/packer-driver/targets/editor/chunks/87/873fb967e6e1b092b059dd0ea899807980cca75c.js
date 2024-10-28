System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  async function ApiGetRoomOnlineInfo(call) {
    let ret = await call.getHallServer().gameClusterTerminal.getRoomOnlineInfo(call.req.roomId);

    if (!ret.succ) {
      return await call.error(ret.err, {
        code: ret.code
      });
    }

    return await call.succ({
      roomOnlineInfo: ret.data
    });
  }

  function _reportPossibleCrUseOfReqGetRoomOnlineInfo(extras) {
    _reporterNs.report("ReqGetRoomOnlineInfo", "../../shared/hallClient/protocols/PtlGetRoomOnlineInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResGetRoomOnlineInfo(extras) {
    _reporterNs.report("ResGetRoomOnlineInfo", "../../shared/hallClient/protocols/PtlGetRoomOnlineInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallApiCall(extras) {
    _reporterNs.report("HallApiCall", "../HallServer", _context.meta, extras);
  }

  _export("ApiGetRoomOnlineInfo", ApiGetRoomOnlineInfo);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "811e2IJv/pHfYZfPxNnOJOT", "ApiGetRoomOnlineInfo", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=873fb967e6e1b092b059dd0ea899807980cca75c.js.map