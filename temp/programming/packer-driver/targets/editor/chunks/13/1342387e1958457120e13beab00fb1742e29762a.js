System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EClusterClientType, _crd, conf;

  function _reportPossibleCrUseOfIRoomInfo(extras) {
    _reporterNs.report("IRoomInfo", "../../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

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

      _cclegacy._RF.push({}, "2b88aGGXqBFo6FZBUXnHW8d", "PtlNodeExtractRoom", undefined);

      /**游戏服务器提取房间信息，用于首次使用*/
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
//# sourceMappingURL=1342387e1958457120e13beab00fb1742e29762a.js.map