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

      _cclegacy._RF.push({}, "0d100P6eZtOJaxVaKrOA8uk", "PtlChangeRoom", undefined);
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
//# sourceMappingURL=1729148c3771fdff12bc2e68abaa19a47924ab86.js.map