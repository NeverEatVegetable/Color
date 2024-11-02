System.register(["__unresolved_0", "cc", "uuid", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, v4, CryptoHelper, _crd;

  function buildGuid(type) {
    return (type != null ? type : '') + (_crd && v4 === void 0 ? (_reportPossibleCrUseOfv({
      error: Error()
    }), v4) : v4)();
  }

  function buildPlayerId(appId, openId) {
    return (_crd && CryptoHelper === void 0 ? (_reportPossibleCrUseOfCryptoHelper({
      error: Error()
    }), CryptoHelper) : CryptoHelper).md5(appId + openId + 'FGWOIEURT2038451P34OIWRJD0');
  }

  function buildPlayerRobotId(playerId) {
    return (_crd && CryptoHelper === void 0 ? (_reportPossibleCrUseOfCryptoHelper({
      error: Error()
    }), CryptoHelper) : CryptoHelper).md5(playerId + (_crd && v4 === void 0 ? (_reportPossibleCrUseOfv({
      error: Error()
    }), v4) : v4)());
  }

  function _reportPossibleCrUseOfv(extras) {
    _reporterNs.report("v4", "uuid", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCryptoHelper(extras) {
    _reporterNs.report("CryptoHelper", "./CryptoHelper", _context.meta, extras);
  }

  _export({
    buildGuid: buildGuid,
    buildPlayerId: buildPlayerId,
    buildPlayerRobotId: buildPlayerRobotId
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_uuid) {
      v4 = _uuid.v4;
    }, function (_unresolved_2) {
      CryptoHelper = _unresolved_2.CryptoHelper;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "04e248VEANIRJ3pXl5nsIGZ", "ServerUtils", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=55f5f335dfd411d523c56e5605b9ce0cd4b46ba7.js.map