System.register(["__unresolved_0", "cc", "chai", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, assert, ErrorCodes, delay, authPlayerToken, authToGameServer, createAndEnterRoom, hallClient, appDismissRoom, testEachBuild, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfassert(extras) {
    _reporterNs.report("assert", "chai", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../../src/shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../../../src/shared/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfauthPlayerToken(extras) {
    _reporterNs.report("authPlayerToken", "./ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfauthToGameServer(extras) {
    _reporterNs.report("authToGameServer", "./ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateAndEnterRoom(extras) {
    _reporterNs.report("createAndEnterRoom", "./ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhallClient(extras) {
    _reporterNs.report("hallClient", "./ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfappDismissRoom(extras) {
    _reporterNs.report("appDismissRoom", "./ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOftestEachBuild(extras) {
    _reporterNs.report("testEachBuild", "./ApiUtils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_chai) {
      assert = _chai.assert;
    }, function (_unresolved_2) {
      ErrorCodes = _unresolved_2.ErrorCodes;
    }, function (_unresolved_3) {
      delay = _unresolved_3.delay;
    }, function (_unresolved_4) {
      authPlayerToken = _unresolved_4.authPlayerToken;
      authToGameServer = _unresolved_4.authToGameServer;
      createAndEnterRoom = _unresolved_4.createAndEnterRoom;
      hallClient = _unresolved_4.hallClient;
      appDismissRoom = _unresolved_4.appDismissRoom;
      testEachBuild = _unresolved_4.testEachBuild;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06407TvNL1LnJSswjnejhXj", "ApiAuthorize.test", undefined);

      describe("大厅服务端接口", () => {
        var testData = (_crd && testEachBuild === void 0 ? (_reportPossibleCrUseOftestEachBuild({
          error: Error()
        }), testEachBuild) : testEachBuild)(5);
        test('玩家服务端认证', /*#__PURE__*/_asyncToGenerator(function* () {
          //==========这里模拟服务端获取playerToken (openid需要按单元测试名区分一下,防止多个单元测试并行时token互踢)
          yield (_crd && authPlayerToken === void 0 ? (_reportPossibleCrUseOfauthPlayerToken({
            error: Error()
          }), authPlayerToken) : authPlayerToken)("zum0001_ApiAuthorize", "zum1");
        }));
        test('服务端解散房间', /*#__PURE__*/_asyncToGenerator(function* () {
          //创建单人房间
          var gameClient1Ret = yield (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, testData.playerId1, 'zum1', {
            maxPlayers: 2,
            isPrivate: true
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1Ret.succ, gameClient1Ret.err);
          testData.gameClient1 = gameClient1Ret.data.gameClient;
          var roomId = gameClient1Ret.data.roomId;
          var gameServerUrl = gameClient1Ret.data.gameServerUrl; // 玩家2加入

          testData.gameClient2 = yield (_crd && authToGameServer === void 0 ? (_reportPossibleCrUseOfauthToGameServer({
            error: Error()
          }), authToGameServer) : authToGameServer)('zum2', testData.playerToken2, gameServerUrl);
          var joinRet = yield testData.gameClient2.joinRoom({
            roomId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRet.succ, joinRet.err);
          var onDismissRoom = 0;

          testData.gameClient1.onDismissRoom = () => {
            onDismissRoom++;
          };

          testData.gameClient2.onDismissRoom = () => {
            onDismissRoom++;
          };

          var dismissRoomRet = yield (_crd && appDismissRoom === void 0 ? (_reportPossibleCrUseOfappDismissRoom({
            error: Error()
          }), appDismissRoom) : appDismissRoom)(roomId);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(dismissRoomRet.succ, dismissRoomRet.err);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(500);
          var regRet = yield (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).getRoomOnlineInfo(testData.playerToken1, roomId);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!regRet.succ && regRet.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNotFound, '房间应该被解散了!' + JSON.stringify(regRet));
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(onDismissRoom === 2, "\u5E94\u8BE5\u6536\u52302\u6761\u89E3\u6563\u623F\u95F4\u7684\u6D88\u606F,\u4F46\u5B9E\u9645" + onDismissRoom + "\u6761");
        }));
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a031cac0a1df087b9bb7321b9687ed53242873f3.js.map