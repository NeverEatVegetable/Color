System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ApiJoinRoom(_x) {
    return _ApiJoinRoom.apply(this, arguments);
  }

  function _ApiJoinRoom() {
    _ApiJoinRoom = _asyncToGenerator(function* (call) {
      var ret = yield call.getGameServer().roomMgr.joinRoom(call.conn.currPlayer, call.req);

      if (!ret.succ) {
        return yield call.error(ret.err, {
          code: ret.code
        });
      }

      return yield call.succ({
        roomInfo: ret.data
      });
    });
    return _ApiJoinRoom.apply(this, arguments);
  }

  function _reportPossibleCrUseOfReqJoinRoom(extras) {
    _reporterNs.report("ReqJoinRoom", "../../shared/gameClient/protocols/PtlJoinRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResJoinRoom(extras) {
    _reporterNs.report("ResJoinRoom", "../../shared/gameClient/protocols/PtlJoinRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiJoinRoom", ApiJoinRoom);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b16571fz+hJ6qUFettJFjlZ", "ApiJoinRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0639cd6caabf953d7e956c2df88c27fe937b1188.js.map