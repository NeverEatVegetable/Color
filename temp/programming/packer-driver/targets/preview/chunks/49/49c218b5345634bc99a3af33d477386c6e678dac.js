System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ApiChangePlayerTeam(_x) {
    return _ApiChangePlayerTeam.apply(this, arguments);
  }

  function _ApiChangePlayerTeam() {
    _ApiChangePlayerTeam = _asyncToGenerator(function* (call) {
      var ret = yield call.getGameServer().roomMgr.changePlayerTeam(call.conn.currPlayer, call.req.newTeamId, call.req.robotPlayerId);

      if (!ret.succ) {
        return yield call.error(ret.err, {
          code: ret.code
        });
      }

      return yield call.succ({
        roomInfo: ret.data
      });
    });
    return _ApiChangePlayerTeam.apply(this, arguments);
  }

  function _reportPossibleCrUseOfReqChangePlayerTeam(extras) {
    _reporterNs.report("ReqChangePlayerTeam", "../../shared/gameClient/protocols/PtlChangePlayerTeam", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResChangePlayerTeam(extras) {
    _reporterNs.report("ResChangePlayerTeam", "../../shared/gameClient/protocols/PtlChangePlayerTeam", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiChangePlayerTeam", ApiChangePlayerTeam);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d014bAPV7tJvb08IEK0jsQF", "ApiChangePlayerTeam", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=49c218b5345634bc99a3af33d477386c6e678dac.js.map