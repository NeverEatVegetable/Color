System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfIMatchParamsFromRoomAllPlayer(extras) {
    _reporterNs.report("IMatchParamsFromRoomAllPlayer", "../../tsgf/match/Models", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc122O3eotIBrGvMQeT/wCV", "PtlRequestMatch", undefined);
      /**
       * 发起房间所有玩家匹配请求
       * 请求成功即返回,同时房间中的所有玩家会收到通知
       * 匹配有结果了还会收到消息通知, 并且可由一个玩家调用QueryMatch等待完整匹配结果
      */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=78e912db7e35065e0c5fde23b40f82656b2e2736.js.map