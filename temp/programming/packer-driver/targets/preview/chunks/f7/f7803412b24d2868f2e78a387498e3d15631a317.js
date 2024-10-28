System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfIMatchResult(extras) {
    _reporterNs.report("IMatchResult", "../../tsgf/match/Models", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b9490FX6T5MBrR7wEdJoKul", "PtlQueryMatch", undefined);
      /**
       * 查询完整匹配结果
       * 会等到有结果了才返回!
       * 注意: 同时只能只有一个玩家进行查询等待,一般使用通知来获取结果即可
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f7803412b24d2868f2e78a387498e3d15631a317.js.map