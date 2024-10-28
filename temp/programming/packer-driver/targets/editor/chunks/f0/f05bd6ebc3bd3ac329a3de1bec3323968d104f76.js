System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c2d4tJ2J5BjLDPuKIvJuty", "PtlCancelMatch", undefined);
      /**
       * 取消匹配请求
       * 可能发生并发,导致虽然请求成功了,但还是收到了成功结果的通知
      */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f05bd6ebc3bd3ac329a3de1bec3323968d104f76.js.map