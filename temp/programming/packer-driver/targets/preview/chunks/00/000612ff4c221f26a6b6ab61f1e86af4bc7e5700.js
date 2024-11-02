System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _ref() {
    _ref = _asyncToGenerator(function* (call) {
      var roomOnlineInfo = call.getGameClusterServer().roomMgr.getRoomOnlineInfo(call.req.roomId);

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

  function _reportPossibleCrUseOfReqTerminalGetRoomOnlineInfo(extras) {
    _reporterNs.report("ReqTerminalGetRoomOnlineInfo", "../../shared/tsgfServer/gameCluster/protocols/PtlTerminalGetRoomOnlineInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResTerminalGetRoomOnlineInfo(extras) {
    _reporterNs.report("ResTerminalGetRoomOnlineInfo", "../../shared/tsgfServer/gameCluster/protocols/PtlTerminalGetRoomOnlineInfo", _context.meta, extras);
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

      _cclegacy._RF.push({}, "3d47a2ZzkBJYrtz1OqJJvcG", "ApiTerminalGetRoomOnlineInfo", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=000612ff4c221f26a6b6ab61f1e86af4bc7e5700.js.map