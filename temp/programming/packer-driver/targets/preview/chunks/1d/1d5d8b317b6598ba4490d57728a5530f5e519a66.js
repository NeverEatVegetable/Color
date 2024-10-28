System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfIChangeRoomPara(extras) {
    _reporterNs.report("IChangeRoomPara", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomInfo(extras) {
    _reporterNs.report("IRoomInfo", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d4a80I+8sZGh6s3KuASCGTR", "PtlChangeRoom", undefined);
      /**
       * 修改房间信息
       * 只有房主可以修改
       * 修改后房间内所有玩家都收到通知
      */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1d5d8b317b6598ba4490d57728a5530f5e519a66.js.map