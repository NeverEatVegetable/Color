System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "381114aXLZNGrCTcuFZJtOk", "PtlCancelMatch", undefined);
      /**
       * 取消匹配请求
       * 可能发生并发,导致虽然请求成功了,但还是收到了成功结果的通知
      */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0c58f2ba231b590771ed59e865572484dffee7fc.js.map