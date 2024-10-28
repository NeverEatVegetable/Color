System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseMySqlDAL, AppDAL, _crd;

  function _reportPossibleCrUseOfBaseMySqlDAL(extras) {
    _reporterNs.report("BaseMySqlDAL", "../tsgfServer/BaseDAL", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIApp(extras) {
    _reporterNs.report("IApp", "./Models", _context.meta, extras);
  }

  _export("AppDAL", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BaseMySqlDAL = _unresolved_2.BaseMySqlDAL;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fc91cW3IVZM6a9ObRxGO1Ln", "DAL", undefined);

      _export("AppDAL", AppDAL = class AppDAL extends (_crd && BaseMySqlDAL === void 0 ? (_reportPossibleCrUseOfBaseMySqlDAL({
        error: Error()
      }), BaseMySqlDAL) : BaseMySqlDAL) {
        constructor() {
          super(getAppDbHelper, 'app', 'appId');
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9a9f30562a88de2ee7be7e09512470615c7150eb.js.map