System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, PlayerAuthHelper, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ApiAuthorize(_x) {
    return _ApiAuthorize.apply(this, arguments);
  }

  function _ApiAuthorize() {
    _ApiAuthorize = _asyncToGenerator(function* (call) {
      var reqData = call.req.data;

      if (reqData.authTokenDay > 120) {
        return yield call.error('authTokenDay 范围1~120！', {
          code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).ParamsError
        });
      }

      var ret = yield (_crd && PlayerAuthHelper === void 0 ? (_reportPossibleCrUseOfPlayerAuthHelper({
        error: Error()
      }), PlayerAuthHelper) : PlayerAuthHelper).authorize(call.req.appId, reqData.openId, reqData.showName, reqData.authTokenDay);

      if (!ret.succ) {
        return yield call.error(ret.err, {
          code: ret.code
        });
      }

      yield call.succ({
        playerId: ret.data.playerId,
        playerToken: ret.data.playerToken
      });
    });
    return _ApiAuthorize.apply(this, arguments);
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