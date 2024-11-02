System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ApiDismissRoom(_x) {
    return _ApiDismissRoom.apply(this, arguments);
  }

  function _ApiDismissRoom() {
    _ApiDismissRoom = _asyncToGenerator(function* (call) {
      var ret = yield call.getGameServer().roomMgr.dismissRoom(call.conn.currPlayer, call.req.roomId);

      if (!ret.succ) {
        return yield call.error(ret.err, {
          code: ret.code
        });
      }

      return yield call.succ({
        roomInfo: ret.data
      });
    });
    return _ApiDismissRoom.apply(this, arguments);
  }

  function _reportPossibleCrUseOfReqDismissRoom(extras) {
    _reporterNs.report("ReqDismissRoom", "../../shared/gameClient/protocols/PtlDismissRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResDismissRoom(extras) {
    _reporterNs.report("ResDismissRoom", "../../shared/gameClient/protocols/PtlDismissRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiDismissRoom", ApiDismissRoom);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "035169Pe9VDWb2y9mMpaCnP", "ApiDismissRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=21f679ae91a2ac0e2e552b6c4d3d2fb282cd3693.js.map