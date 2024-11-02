System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, delay, authPlayerToken, requestMatchOneSingle, _crd, stopTime;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      test('单人匹配器的负载_匹配不进房间', /*#__PURE__*/_asyncToGenerator(function* () {
        return; // 不需要常规执行

        var auth1 = yield (_crd && authPlayerToken === void 0 ? (_reportPossibleCrUseOfauthPlayerToken({
          error: Error()
        }), authPlayerToken) : authPlayerToken)("zum0001_单人匹配器的负载_匹配不进房间", "zum1");
        var auth2 = yield (_crd && authPlayerToken === void 0 ? (_reportPossibleCrUseOfauthPlayerToken({
          error: Error()
        }), authPlayerToken) : authPlayerToken)("zum0002_单人匹配器的负载_匹配不进房间", "zum2");
        var auth3 = yield (_crd && authPlayerToken === void 0 ? (_reportPossibleCrUseOfauthPlayerToken({
          error: Error()
        }), authPlayerToken) : authPlayerToken)("zum0003_单人匹配器的负载_匹配不进房间", "zum3");
        var playerToken1 = auth1.playerToken;
        var playerId1 = auth1.playerId;
        var playerToken2 = auth2.playerToken;
        var playerId2 = auth2.playerId;
        var playerToken3 = auth3.playerToken;
        var playerId3 = auth3.playerId;

        while (Date.now() < stopTime) {
          yield (_crd && requestMatchOneSingle === void 0 ? (_reportPossibleCrUseOfrequestMatchOneSingle({
            error: Error()
          }), requestMatchOneSingle) : requestMatchOneSingle)(playerToken1, playerId1, 3, 3);
          yield (_crd && requestMatchOneSingle === void 0 ? (_reportPossibleCrUseOfrequestMatchOneSingle({
            error: Error()
          }), requestMatchOneSingle) : requestMatchOneSingle)(playerToken2, playerId2, 3, 3);
          yield (_crd && requestMatchOneSingle === void 0 ? (_reportPossibleCrUseOfrequestMatchOneSingle({
            error: Error()
          }), requestMatchOneSingle) : requestMatchOneSingle)(playerToken3, playerId3, 3, 3);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(100);
        }
      }), stopTime - Date.now() + 50000);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6ab0663f311bf3dd787ef794ee94465af5766921.js.map