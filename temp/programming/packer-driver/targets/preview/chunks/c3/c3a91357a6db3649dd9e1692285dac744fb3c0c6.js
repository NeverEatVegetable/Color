System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _ref() {
    _ref = _asyncToGenerator(function* (call) {
      var filterRes = call.getGameClusterServer().roomMgr.filterRooms(call.req.filter, call.req.skip, call.req.limit);
      return yield call.succ(_extends({}, filterRes));
    });
    return _ref.apply(this, arguments);
  }

  function _reportPossibleCrUseOfReqTerminalFilterRoom(extras) {
    _reporterNs.report("ReqTerminalFilterRoom", "../../shared/tsgfServer/gameCluster/protocols/PtlTerminalFilterRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResTerminalFilterRoom(extras) {
    _reporterNs.report("ResTerminalFilterRoom", "../../shared/tsgfServer/gameCluster/protocols/PtlTerminalFilterRoom", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4efa69TCRhF5IKCtHXd1+G6", "ApiTerminalFilterRoom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c3a91357a6db3649dd9e1692285dac744fb3c0c6.js.map