System.register(["__unresolved_0", "cc", "chai", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, assert, ErrorCodes, delay, authPlayerToken, authToGameServer, createAndEnterRoom, hallClient, appDismissRoom, testEachBuild, _crd;

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
        let testData = (_crd && testEachBuild === void 0 ? (_reportPossibleCrUseOftestEachBuild({
          error: Error()
        }), testEachBuild) : testEachBuild)(5);
        test('玩家服务端认证', async function () {
          //==========这里模拟服务端获取playerToken (openid需要按单元测试名区分一下,防止多个单元测试并行时token互踢)
          await (_crd && authPlayerToken === void 0 ? (_reportPossibleCrUseOfauthPlayerToken({
            error: Error()
          }), authPlayerToken) : authPlayerToken)("zum0001_ApiAuthorize", "zum1");
        });
        test('服务端解散房间', async function () {
          //创建单人房间
          let gameClient1Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, testData.playerId1, 'zum1', {
            maxPlayers: 2,
            isPrivate: true
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1Ret.succ, gameClient1Ret.err);
          testData.gameClient1 = gameClient1Ret.data.gameClient;
          let roomId = gameClient1Ret.data.roomId;
          let gameServerUrl = gameClient1Ret.data.gameServerUrl; // 玩家2加入

          testData.gameClient2 = await (_crd && authToGameServer === void 0 ? (_reportPossibleCrUseOfauthToGameServer({
            error: Error()
          }), authToGameServer) : authToGameServer)('zum2', testData.playerToken2, gameServerUrl);
          let joinRet = await testData.gameClient2.joinRoom({
            roomId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRet.succ, joinRet.err);
          let onDismissRoom = 0;

          testData.gameClient1.onDismissRoom = () => {
            onDismissRoom++;
          };

          testData.gameClient2.onDismissRoom = () => {
            onDismissRoom++;
          };

          let dismissRoomRet = await (_crd && appDismissRoom === void 0 ? (_reportPossibleCrUseOfappDismissRoom({
            error: Error()
          }), appDismissRoom) : appDismissRoom)(roomId);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(dismissRoomRet.succ, dismissRoomRet.err);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(500);
          let regRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).getRoomOnlineInfo(testData.playerToken1, roomId);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!regRet.succ && regRet.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNotFound, '房间应该被解散了!' + JSON.stringify(regRet));
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(onDismissRoom === 2, `应该收到2条解散房间的消息,但实际${onDismissRoom}条`);
        });
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a031cac0a1df087b9bb7321b9687ed53242873f3.js.map