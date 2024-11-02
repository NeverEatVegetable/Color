System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, PlayerAuthHelper, _crd;

  async function ApiAuthorize(call) {
    let reqData = call.req.data;

    if (reqData.authTokenDay > 120) {
      return await call.error('authTokenDay 范围1~120！', {
        code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
          error: Error()
        }), ErrorCodes) : ErrorCodes).ParamsError
      });
    }

    let ret = await (_crd && PlayerAuthHelper === void 0 ? (_reportPossibleCrUseOfPlayerAuthHelper({
      error: Error()
    }), PlayerAuthHelper) : PlayerAuthHelper).authorize(call.req.appId, reqData.openId, reqData.showName, reqData.authTokenDay);

    if (!ret.succ) {
      return await call.error(ret.err, {
        code: ret.code
      });
    }

    await call.succ({
      playerId: ret.data.playerId,
      playerToken: ret.data.playerToken
    });
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerAuthHelper(extras) {
    _reporterNs.report("PlayerAuthHelper", "../../shared/tsgfServer/auth/PlayerAuthHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqAuthorizeT(extras) {
    _reporterNs.report("ReqAuthorizeT", "../../shared/hallClient/protocols/PtlAuthorize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResAuthorize(extras) {
    _reporterNs.report("ResAuthorize", "../../shared/hallClient/protocols/PtlAuthorize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallApiCall(extras) {
    _reporterNs.report("HallApiCall", "../HallServer", _context.meta, extras);
  }

  _export("ApiAuthorize", ApiAuthorize);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ErrorCodes = _unresolved_2.ErrorCodes;
    }, function (_unresolved_3) {
      PlayerAuthHelper = _unresolved_3.PlayerAuthHelper;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2fe04bpl7NJb6+8llr8bM8k", "ApiAuthorize", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d9ce62ba28e890cc59c80e4990465b3d7666f308.js.map