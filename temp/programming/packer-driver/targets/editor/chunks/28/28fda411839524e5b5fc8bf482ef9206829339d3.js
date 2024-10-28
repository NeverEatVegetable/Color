System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EClusterClientType, _crd, conf;

  function _reportPossibleCrUseOfEClusterClientType(extras) {
    _reporterNs.report("EClusterClientType", "../../cluster/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomRegInfo(extras) {
    _reporterNs.report("IRoomRegInfo", "../../room/Models", _context.meta, extras);
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

      _cclegacy._RF.push({}, "2dbf3AK/DZIW5l4ICUf/Gfr", "PtlNodeDismissRoom", undefined);

      /**游戏服务器上房间解散，则同步给集群*/
      _export("conf", conf = {
        /**限制本接口的客户端类型*/
        clientType: (_crd && EClusterClientType === void 0 ? (_reportPossibleCrUseOfEClusterClientType({
          error: Error()
        }), EClusterClientType) : EClusterClientType).Node
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=28fda411839524e5b5fc8bf482ef9206829339d3.js.map