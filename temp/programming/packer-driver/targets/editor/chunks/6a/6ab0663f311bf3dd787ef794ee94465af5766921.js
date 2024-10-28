System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, delay, authPlayerToken, requestMatchOneSingle, _crd, stopTime;

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../../src/shared/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfauthPlayerToken(extras) {
    _reporterNs.report("authPlayerToken", "../unitTest/api/ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrequestMatchOneSingle(extras) {
    _reporterNs.report("requestMatchOneSingle", "../unitTest/api/ApiUtils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      delay = _unresolved_2.delay;
    }, function (_unresolved_3) {
      authPlayerToken = _unresolved_3.authPlayerToken;
      requestMatchOneSingle = _unresolved_3.requestMatchOneSingle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "54d7f2n/o9G07wHfzMSakcE", "matcherSingle.test", undefined);

      stopTime = Date.parse('2022-06-20 14:00:00');
      test('单人匹配器的负载_匹配不进房间', async function () {
        return; // 不需要常规执行

        const auth1 = await (_crd && authPlayerToken === void 0 ? (_reportPossibleCrUseOfauthPlayerToken({
          error: Error()
        }), authPlayerToken) : authPlayerToken)("zum0001_单人匹配器的负载_匹配不进房间", "zum1");
        const auth2 = await (_crd && authPlayerToken === void 0 ? (_reportPossibleCrUseOfauthPlayerToken({
          error: Error()
        }), authPlayerToken) : authPlayerToken)("zum0002_单人匹配器的负载_匹配不进房间", "zum2");
        const auth3 = await (_crd && authPlayerToken === void 0 ? (_reportPossibleCrUseOfauthPlayerToken({
          error: Error()
        }), authPlayerToken) : authPlayerToken)("zum0003_单人匹配器的负载_匹配不进房间", "zum3");
        let playerToken1 = auth1.playerToken;
        let playerId1 = auth1.playerId;
        let playerToken2 = auth2.playerToken;
        let playerId2 = auth2.playerId;
        let playerToken3 = auth3.playerToken;
        let playerId3 = auth3.playerId;

        while (Date.now() < stopTime) {
          await (_crd && requestMatchOneSingle === void 0 ? (_reportPossibleCrUseOfrequestMatchOneSingle({
            error: Error()
          }), requestMatchOneSingle) : requestMatchOneSingle)(playerToken1, playerId1, 3, 3);
          await (_crd && requestMatchOneSingle === void 0 ? (_reportPossibleCrUseOfrequestMatchOneSingle({
            error: Error()
          }), requestMatchOneSingle) : requestMatchOneSingle)(playerToken2, playerId2, 3, 3);
          await (_crd && requestMatchOneSingle === void 0 ? (_reportPossibleCrUseOfrequestMatchOneSingle({
            error: Error()
          }), requestMatchOneSingle) : requestMatchOneSingle)(playerToken3, playerId3, 3, 3);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(100);
        }
      }, stopTime - Date.now() + 50000);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6ab0663f311bf3dd787ef794ee94465af5766921.js.map