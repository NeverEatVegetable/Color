System.register(["__unresolved_0", "cc", "chai", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, assert, delay, authToGameServer, createHallClient, authPlayerTokenByHallClient, _crd;

  function _reportPossibleCrUseOfassert(extras) {
    _reporterNs.report("assert", "chai", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../../../src/shared/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfauthToGameServer(extras) {
    _reporterNs.report("authToGameServer", "./ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateHallClient(extras) {
    _reporterNs.report("createHallClient", "./ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfauthPlayerTokenByHallClient(extras) {
    _reporterNs.report("authPlayerTokenByHallClient", "./ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTestData(extras) {
    _reporterNs.report("TestData", "./ApiUtils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_chai) {
      assert = _chai.assert;
    }, function (_unresolved_2) {
      delay = _unresolved_2.delay;
    }, function (_unresolved_3) {
      authToGameServer = _unresolved_3.authToGameServer;
      createHallClient = _unresolved_3.createHallClient;
      authPlayerTokenByHallClient = _unresolved_3.authPlayerTokenByHallClient;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "edf31Q1zf9GEqT+tRs0xoaS", "Traefik.test", undefined);

      describe("Traefik", () => {
        test('empty', async function () {});
        return; // 防止被批量执行这里return, 需要单独跑的时候再启用
        // 需要启动 npm run runAllInOne + traefik服务 + hosts解析本地 作为单元测试环境

        test('简单走一下基本接口', async function () {
          const hallClient = (_crd && createHallClient === void 0 ? (_reportPossibleCrUseOfcreateHallClient({
            error: Error()
          }), createHallClient) : createHallClient)('http://tsgf-hall.iclouden.com');
          let authRet = await (_crd && authPlayerTokenByHallClient === void 0 ? (_reportPossibleCrUseOfauthPlayerTokenByHallClient({
            error: Error()
          }), authPlayerTokenByHallClient) : authPlayerTokenByHallClient)(hallClient, 'zum1', 'zum1'); // @ts-ignore

          let testData = {
            playerId1: authRet.playerId,
            playerToken1: authRet.playerToken
          }; //创建单人房间

          let createRet = await hallClient.createRoom(testData.playerToken1, {
            roomName: 'test',
            maxPlayers: 2,
            ownerPlayerId: testData.playerId1,
            isPrivate: true
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(createRet.succ, createRet.err);
          let roomOnlineInfo = createRet.data; //连接游戏服务器

          let gameClient = await (_crd && authToGameServer === void 0 ? (_reportPossibleCrUseOfauthToGameServer({
            error: Error()
          }), authToGameServer) : authToGameServer)('zum1', testData.playerToken1, roomOnlineInfo.gameServerUrl, 0); //加入自己创建的房间

          let joinRet = await gameClient.joinRoom({
            roomId: roomOnlineInfo.roomId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRet.succ, joinRet.err);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(500);
          let regRet = await hallClient.getRoomOnlineInfo(testData.playerToken1, roomOnlineInfo.roomId);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(regRet.succ, regRet.err);
          await gameClient.disconnect();
        });
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=49949b3472ccd9ba75009b6fcdeb5065e7032aa7.js.map