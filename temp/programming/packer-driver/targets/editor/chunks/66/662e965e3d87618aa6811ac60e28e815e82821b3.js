System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, apiErrorThenClose, _crd;

  async function ApiAuthorize(call) {
    let ret = await call.getGameServer().gameConnMgr.connAuthorize(call.conn, call.req.playerToken, call.req, call.req.roomWaitReconnectTime);

    if (!ret.succ) {
      return await (_crd && apiErrorThenClose === void 0 ? (_reportPossibleCrUseOfapiErrorThenClose({
        error: Error()
      }), apiErrorThenClose) : apiErrorThenClose)(call, ret.err, {
        code: ret.code
      });
    }

    await call.succ({
      playerInfo: ret.data.playerInfo
    });
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfapiErrorThenClose(extras) {
    _reporterNs.report("apiErrorThenClose", "../../shared/tsgfServer/ApiBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqAuthorize(extras) {
    _reporterNs.report("ReqAuthorize", "../../shared/gameClient/protocols/PtlAuthorize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResAuthorize(extras) {
    _reporterNs.report("ResAuthorize", "../../shared/gameClient/protocols/PtlAuthorize", _context.meta, extras);
  }

  _export("ApiAuthorize", ApiAuthorize);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      apiErrorThenClose = _unresolved_2.apiErrorThenClose;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5cd72mTGCpH0qC9ZvXUKZ7B", "ApiAuthorize", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=662e965e3d87618aa6811ac60e28e815e82821b3.js.map