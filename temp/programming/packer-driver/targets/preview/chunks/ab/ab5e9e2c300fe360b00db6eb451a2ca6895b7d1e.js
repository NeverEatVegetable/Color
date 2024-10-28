System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _ref() {
    _ref = _asyncToGenerator(function* (call) {
      var _getOrAllotRet$data$m;

      if (!call.req.matchRoomType && !call.req.matchMaxPlayers) {
        return yield call.error('match参数至少要有一个!', {
          code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).ParamsError
        });
      }

      var getOrAllotRet = yield call.getGameClusterServer().roomMgr.getOrAllotGameServer(call.req.appId, call.req);

      if (!getOrAllotRet.succ) {
        return yield call.error(getOrAllotRet.err, {
          code: getOrAllotRet.code
        });
      }

      if ((_getOrAllotRet$data$m = getOrAllotRet.data.matchRoomOnlineInfoList) != null && _getOrAllotRet$data$m.length) {
        // 匹配到现有房间
        return yield call.succ({
          matchRoomOnlineInfoList: getOrAllotRet.data.matchRoomOnlineInfoList
        });
      }

      if (getOrAllotRet.data.createRoomOnlineInfo) {
        // 成功创建房间
        return yield call.succ({
          createRoomOnlineInfo: getOrAllotRet.data.createRoomOnlineInfo
        });
      }

      return yield call.error('结果异常！', {
        code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
          error: Error()
        }), ErrorCodes) : ErrorCodes).Exception
      });
    });
    return _ref.apply(this, arguments);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqTerminalGetOrCreateRoom(extras) {
    _reporterNs.report("ReqTerminalGetOrCreateRoom", "../../shared/tsgfServer/gameCluster/protocols/PtlTerminalGetOrCreateRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResTerminalGetOrCreateRoom(extras) {
    _reporterNs.report("ResTerminalGetOrCreateRoom", "../../shared/tsgfServer/gameCluster/protocols/PtlTerminalGetOrCreateRoom", _context.meta, extras);
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

      _cclegacy._RF.push({}, "d88176oRrtJUZMNzrZGtnOS", "ApiTerminalGetOrCreateRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ab5e9e2c300fe360b00db6eb451a2ca6895b7d1e.js.map