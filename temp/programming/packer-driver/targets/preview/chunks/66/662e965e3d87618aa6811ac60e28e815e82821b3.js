System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, apiErrorThenClose, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ApiAuthorize(_x) {
    return _ApiAuthorize.apply(this, arguments);
  }

  function _ApiAuthorize() {
    _ApiAuthorize = _asyncToGenerator(function* (call) {
      var ret = yield call.getGameServer().gameConnMgr.connAuthorize(call.conn, call.req.playerToken, call.req, call.req.roomWaitReconnectTime);

      if (!ret.succ) {
        return yield (_crd && apiErrorThenClose === void 0 ? (_reportPossibleCrUseOfapiErrorThenClose({
          error: Error()
        }), apiErrorThenClose) : apiErrorThenClose)(call, ret.err, {
          code: ret.code
        });
      }

      yield call.succ({
        playerInfo: ret.data.playerInfo
      });
    });
    return _ApiAuthorize.apply(this, arguments);
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