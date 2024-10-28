System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ApiChangeCustomPlayerProfile(_x) {
    return _ApiChangeCustomPlayerProfile.apply(this, arguments);
  }

  function _ApiChangeCustomPlayerProfile() {
    _ApiChangeCustomPlayerProfile = _asyncToGenerator(function* (call) {
      var ret = yield call.getGameServer().roomMgr.changeCustomPlayerProfile(call.conn.currPlayer, call.req.customPlayerProfile, call.req.robotPlayerId);

      if (!ret.succ) {
        return yield call.error(ret.err, {
          code: ret.code
        });
      }

      return yield call.succ({
        roomInfo: ret.data
      });
    });
    return _ApiChangeCustomPlayerProfile.apply(this, arguments);
  }

  function _reportPossibleCrUseOfReqChangeCustomPlayerProfile(extras) {
    _reporterNs.report("ReqChangeCustomPlayerProfile", "../../shared/gameClient/protocols/PtlChangeCustomPlayerProfile", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResChangeCustomPlayerProfile(extras) {
    _reporterNs.report("ResChangeCustomPlayerProfile", "../../shared/gameClient/protocols/PtlChangeCustomPlayerProfile", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiChangeCustomPlayerProfile", ApiChangeCustomPlayerProfile);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d6e65Fv/UlOp6tC24YbUQXw", "ApiChangeCustomPlayerProfile", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ed043edb76945a1f924ffaece1758e5e188749c6.js.map