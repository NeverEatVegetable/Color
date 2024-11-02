System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, apiErrorThenClose, ErrorCodes, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ApiReconnect(_x) {
    return _ApiReconnect.apply(this, arguments);
  }

  function _ApiReconnect() {
    _ApiReconnect = _asyncToGenerator(function* (call) {
      var gameServer = call.getGameServer();
      var ret = yield gameServer.gameConnMgr.connReconnect(call.conn, call.req.playerToken, call.req.roomWaitReconnectTime);

      if (!ret.succ) {
        //拒绝继续重连尝试了,要求重新登录!
        return yield (_crd && apiErrorThenClose === void 0 ? (_reportPossibleCrUseOfapiErrorThenClose({
          error: Error()
        }), apiErrorThenClose) : apiErrorThenClose)(call, ret.err, {
          code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).AuthReconnectionFail
        });
      }

      var roomInfo = yield gameServer.roomMgr.getRoomInfo(call.conn.currPlayer);
      yield call.succ({
        playerId: call.conn.currPlayer.playerInfo.playerId,
        currRoomInfo: roomInfo
      });
    });
    return _ApiReconnect.apply(this, arguments);
  }

  function _reportPossibleCrUseOfapiErrorThenClose(extras) {
    _reporterNs.report("apiErrorThenClose", "../../shared/tsgfServer/ApiBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqReconnect(extras) {
    _reporterNs.report("ReqReconnect", "../../shared/gameClient/protocols/PtlReconnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResReconnect(extras) {
    _reporterNs.report("ResReconnect", "../../shared/gameClient/protocols/PtlReconnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../shared/tsgf/Result", _context.meta, extras);
  }

  _export("ApiReconnect", ApiReconnect);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      apiErrorThenClose = _unresolved_2.apiErrorThenClose;
    }, function (_unresolved_3) {
      ErrorCodes = _unresolved_3.ErrorCodes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f3b39I3QitIqIGZUwo+KtRE", "ApiReconnect", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d5d04bfcb0a668418088b41921d8ece6130bcf86.js.map