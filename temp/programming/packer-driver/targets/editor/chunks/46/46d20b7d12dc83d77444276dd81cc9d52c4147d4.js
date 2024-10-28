System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EClusterClientType, _crd, conf;

  function _reportPossibleCrUseOfERoomCreateType(extras) {
    _reporterNs.report("ERoomCreateType", "../../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICreateRoomPara(extras) {
    _reporterNs.report("ICreateRoomPara", "../../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

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

      _cclegacy._RF.push({}, "35185NOCTpK057P00nkN7Eq", "PtlTerminalCreateRoom", undefined);

      /**终端请求创建房间*/
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
//# sourceMappingURL=46d20b7d12dc83d77444276dd81cc9d52c4147d4.js.map