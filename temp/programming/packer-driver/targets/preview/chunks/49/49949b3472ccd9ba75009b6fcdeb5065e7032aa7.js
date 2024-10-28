System.register(["__unresolved_0", "cc", "chai", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, assert, delay, authToGameServer, createHallClient, authPlayerTokenByHallClient, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        test('empty', /*#__PURE__*/_asyncToGenerator(function* () {}));
        return; // 防止被批量执行这里return, 需要单独跑的时候再启用
        // 需要启动 npm run runAllInOne + traefik服务 + hosts解析本地 作为单元测试环境

        test('简单走一下基本接口', /*#__PURE__*/_asyncToGenerator(function* () {
          var hallClient = (_crd && createHallClient === void 0 ? (_reportPossibleCrUseOfcreateHallClient({
            error: Error()
          }), createHallClient) : createHallClient)('http://tsgf-hall.iclouden.com');
          var authRet = yield (_crd && authPlayerTokenByHallClient === void 0 ? (_reportPossibleCrUseOfauthPlayerTokenByHallClient({
            error: Error()
          }), authPlayerTokenByHallClient) : authPlayerTokenByHallClient)(hallClient, 'zum1', 'zum1'); // @ts-ignore

          var testData = {
            playerId1: authRet.playerId,
            playerToken1: authRet.playerToken
          }; //创建单人房间

          var createRet = yield hallClient.createRoom(testData.playerToken1, {
            roomName: 'test',
            maxPlayers: 2,
            ownerPlayerId: testData.playerId1,
            isPrivate: true
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(createRet.succ, createRet.err);
          var roomOnlineInfo = createRet.data; //连接游戏服务器

          var gameClient = yield (_crd && authToGameServer === void 0 ? (_reportPossibleCrUseOfauthToGameServer({
            error: Error()
          }), authToGameServer) : authToGameServer)('zum1', testData.playerToken1, roomOnlineInfo.gameServerUrl, 0); //加入自己创建的房间

          var joinRet = yield gameClient.joinRoom({
            roomId: roomOnlineInfo.roomId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRet.succ, joinRet.err);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(500);
          var regRet = yield hallClient.getRoomOnlineInfo(testData.playerToken1, roomOnlineInfo.roomId);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(regRet.succ, regRet.err);
          yield gameClient.disconnect();
        }));
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=49949b3472ccd9ba75009b6fcdeb5065e7032aa7.js.map