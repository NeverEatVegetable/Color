System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ApiChangeCustomPlayerStatus(_x) {
    return _ApiChangeCustomPlayerStatus.apply(this, arguments);
  }

  function _ApiChangeCustomPlayerStatus() {
    _ApiChangeCustomPlayerStatus = _asyncToGenerator(function* (call) {
      var ret = yield call.getGameServer().roomMgr.changeCustomPlayerStatus(call.conn.currPlayer, call.req.customPlayerStatus, call.req.robotPlayerId);

      if (!ret.succ) {
        return yield call.error(ret.err, {
          code: ret.code
        });
      }

      return yield call.succ({
        roomInfo: ret.data
      });
    });
    return _ApiChangeCustomPlayerStatus.apply(this, arguments);
  }

  function _reportPossibleCrUseOfReqChangeCustomPlayerStatus(extras) {
    _reporterNs.report("ReqChangeCustomPlayerStatus", "../../shared/gameClient/protocols/PtlChangeCustomPlayerStatus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResChangeCustomPlayerStatus(extras) {
    _reporterNs.report("ResChangeCustomPlayerStatus", "../../shared/gameClient/protocols/PtlChangeCustomPlayerStatus", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiChangeCustomPlayerStatus", ApiChangeCustomPlayerStatus);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4ab21lh4PdFrJi/g6h3/TLg", "ApiChangeCustomPlayerStatus", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cbd3a35754b25785e5a6e2f8e8be24604ce13681.js.map