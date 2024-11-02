System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EClusterClientType, _crd, conf;

  function _reportPossibleCrUseOfIRoomOnlineInfo(extras) {
    _reporterNs.report("IRoomOnlineInfo", "../../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEClusterClientType(extras) {
    _reporterNs.report("EClusterClientType", "../../cluster/Models", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EClusterClientType = _unresolved_2.EClusterClientType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6009cdgAUJNS4W+mnmPxtLW", "PtlTerminalGetRoomOnlineInfo", undefined);

      _export("conf", conf = {
        /**限制本接口的客户端类型*/
        clientType: (_crd && EClusterClientType === void 0 ? (_reportPossibleCrUseOfEClusterClientType({
          error: Error()
        }), EClusterClientType) : EClusterClientType).Terminal
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fbac2fce0be149158472d5d02f58960d5cb97a1e.js.map