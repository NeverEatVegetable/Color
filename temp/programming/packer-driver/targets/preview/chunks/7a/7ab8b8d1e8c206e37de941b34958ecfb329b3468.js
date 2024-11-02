System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _ref() {
    _ref = _asyncToGenerator(function* (call) {
      // 直接解散集群内的房间信息，再通知游戏服务器（游戏服务器还会再通知回来，返回了找不到的错误，游戏服务器可以忽略）
      var regInfo = call.getGameClusterServer().roomMgr.dismissRoom(call.req.roomId);

      if (!regInfo) {
        return yield call.error('roomId未找到', {
          code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNotFound
        });
      } // 通知游戏服务器解散()


      var ret = yield call.getGameClusterServer().notifyGameServerDismissRoom(regInfo);

      if (!ret.succ) {
        return yield call.error(ret.err, {
          code: ret.code
        });
      } // 生成房间在线信息


      var roomOnlineInfo = call.getGameClusterServer().buildRoomOnlineInfo(regInfo);

      if (!roomOnlineInfo) {
        return yield call.error('roomId未找到', {
          code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNotFound
        });
      }

      return yield call.succ({
        roomOnlineInfo
      });
    });
    return _ref.apply(this, arguments);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqTerminalDismissRoom(extras) {
    _reporterNs.report("ReqTerminalDismissRoom", "../../shared/tsgfServer/gameCluster/protocols/PtlTerminalDismissRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResTerminalDismissRoom(extras) {
    _reporterNs.report("ResTerminalDismissRoom", "../../shared/tsgfServer/gameCluster/protocols/PtlTerminalDismissRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameClusterApiCall(extras) {
    _reporterNs.report("GameClusterApiCall", "../GameServerClusterMgr", _context.meta, extras);
  }

  _export("default", function (_x) {
    return _ref.apply(this, arguments);
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ErrorCodes = _unresolved_2.ErrorCodes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8abc5fbnjZAYKEnTJVp8xcN", "ApiTerminalDismissRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7ab8b8d1e8c206e37de941b34958ecfb329b3468.js.map