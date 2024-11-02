System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ERoomCreateType, _crd;

  async function ApiCreateRoom(call) {
    let ret = await call.getHallServer().gameClusterTerminal.createRoom(call.conn.currPlayer.authInfo.appId, call.req, (_crd && ERoomCreateType === void 0 ? (_reportPossibleCrUseOfERoomCreateType({
      error: Error()
    }), ERoomCreateType) : ERoomCreateType).COMMON_CREATE);

    if (!ret.succ) {
      return await call.error(ret.err, {
        code: ret.code
      });
    }

    return await call.succ({
      roomOnlineInfo: ret.data
    });
  }

  function _reportPossibleCrUseOfReqCreateRoom(extras) {
    _reporterNs.report("ReqCreateRoom", "../../shared/hallClient/protocols/PtlCreateRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResCreateRoom(extras) {
    _reporterNs.report("ResCreateRoom", "../../shared/hallClient/protocols/PtlCreateRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfERoomCreateType(extras) {
    _reporterNs.report("ERoomCreateType", "../../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallApiCall(extras) {
    _reporterNs.report("HallApiCall", "../HallServer", _context.meta, extras);
  }

  _export("ApiCreateRoom", ApiCreateRoom);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ERoomCreateType = _unresolved_2.ERoomCreateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85cc5X8xBBLjInAt5KIbNGu", "ApiCreateRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0437c1cec96b8bc9a71cd81121bbd2c376b29d44.js.map