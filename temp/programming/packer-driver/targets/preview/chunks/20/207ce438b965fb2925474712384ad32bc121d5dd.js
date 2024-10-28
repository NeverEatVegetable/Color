System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _ref() {
    _ref = _asyncToGenerator(function* (call) {
      var roomData = call.getGameClusterServer().roomMgr.extractRoom(call.req.roomId);

      if (!roomData) {
        return yield call.error('提取房间信息失败：不存在的房间ID！', {
          code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNotFound
        });
      }

      return yield call.succ({
        roomRegInfo: roomData.regInfo,
        roomInfo: roomData.roomInfo
      });
    });
    return _ref.apply(this, arguments);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqNodeExtractRoom(extras) {
    _reporterNs.report("ReqNodeExtractRoom", "../../shared/tsgfServer/gameCluster/protocols/PtlNodeExtractRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResNodeExtractRoom(extras) {
    _reporterNs.report("ResNodeExtractRoom", "../../shared/tsgfServer/gameCluster/protocols/PtlNodeExtractRoom", _context.meta, extras);
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

      _cclegacy._RF.push({}, "88612vHH45KCIpKPkLLGKdX", "ApiNodeExtractRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=207ce438b965fb2925474712384ad32bc121d5dd.js.map