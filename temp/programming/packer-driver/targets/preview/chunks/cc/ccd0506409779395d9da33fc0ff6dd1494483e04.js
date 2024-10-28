System.register(["__unresolved_0", "cc", "__unresolved_1", "chai", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, delay, assert, createAndEnterRoom, hallClient, joinRoom, testEachBuild, ENetworkState, GameClient, ErrorCodes, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../../../src/shared/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfassert(extras) {
    _reporterNs.report("assert", "chai", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateAndEnterRoom(extras) {
    _reporterNs.report("createAndEnterRoom", "./ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhallClient(extras) {
    _reporterNs.report("hallClient", "./ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfjoinRoom(extras) {
    _reporterNs.report("joinRoom", "./ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOftestEachBuild(extras) {
    _reporterNs.report("testEachBuild", "./ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENetworkState(extras) {
    _reporterNs.report("ENetworkState", "../../../src/shared/tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameClient(extras) {
    _reporterNs.report("GameClient", "../../../src/shared/gameClient/GameClient", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../../src/shared/tsgf/Result", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      delay = _unresolved_2.delay;
    }, function (_chai) {
      assert = _chai.assert;
    }, function (_unresolved_3) {
      createAndEnterRoom = _unresolved_3.createAndEnterRoom;
      hallClient = _unresolved_3.hallClient;
      joinRoom = _unresolved_3.joinRoom;
      testEachBuild = _unresolved_3.testEachBuild;
    }, function (_unresolved_4) {
      ENetworkState = _unresolved_4.ENetworkState;
    }, function (_unresolved_5) {
      GameClient = _unresolved_5.GameClient;
    }, function (_unresolved_6) {
      ErrorCodes = _unresolved_6.ErrorCodes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "317c8LCPYNJuIjzDXyheKlN", "ApiReconnect.test", undefined);

      describe("断线重连", () => {
        var testData = (_crd && testEachBuild === void 0 ? (_reportPossibleCrUseOftestEachBuild({
          error: Error()
        }), testEachBuild) : testEachBuild)(5);
        test('断线重连同时测试网络事件', /*#__PURE__*/_asyncToGenerator(function* () {
          var msgCount = 0; //玩家1创建房间并进入游戏服务器

          var gameClient1Ret = yield (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, testData.playerId1, 'zum1');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1Ret.succ, gameClient1Ret.err);
          testData.gameClient1 = gameClient1Ret.data.gameClient;
          var roomId = gameClient1Ret.data.roomId;
          testData.gameClient2 = yield (_crd && joinRoom === void 0 ? (_reportPossibleCrUseOfjoinRoom({
            error: Error()
          }), joinRoom) : joinRoom)(testData.playerToken2, roomId, 'zum2');
          testData.gameClient3 = yield (_crd && joinRoom === void 0 ? (_reportPossibleCrUseOfjoinRoom({
            error: Error()
          }), joinRoom) : joinRoom)(testData.playerToken3, roomId, 'zum3');
          msgCount = 0;

          testData.gameClient1.onChangePlayerNetworkState = p => {
            msgCount--;
            console.error("\u4E0D\u5E94\u8BE5\u6536\u5230\u81EA\u5DF1\u7684\u7F51\u7EDC\u4E8B\u4EF6");
          };

          testData.gameClient2.onChangePlayerNetworkState = p => {
            if (p.playerId === testData.playerId1 && p.networkState === (_crd && ENetworkState === void 0 ? (_reportPossibleCrUseOfENetworkState({
              error: Error()
            }), ENetworkState) : ENetworkState).OFFLINE) {
              msgCount++;
            } else {
              console.error("\u8FD9\u4E2A\u65F6\u5019\u5E94\u8BE5\u6536\u5230\u73A9\u5BB61\u3010" + testData.playerId1 + "\u3011\u7684\u53D8\u66F4\u901A\u77E5,\u4F46\u5B9E\u9645\u6536\u5230\u7684\u662F:" + JSON.stringify(p));
            }
          };

          testData.gameClient3.onChangePlayerNetworkState = p => {
            if (p.playerId === testData.playerId1 && p.networkState === (_crd && ENetworkState === void 0 ? (_reportPossibleCrUseOfENetworkState({
              error: Error()
            }), ENetworkState) : ENetworkState).OFFLINE) {
              msgCount++;
            } else {
              console.error("\u8FD9\u4E2A\u65F6\u5019\u5E94\u8BE5\u6536\u5230\u73A9\u5BB61\u3010" + testData.playerId1 + "\u3011\u7684\u53D8\u66F4\u901A\u77E5,\u4F46\u5B9E\u9645\u6536\u5230\u7684\u662F:" + JSON.stringify(p));
            }
          };

          var oldToken = testData.gameClient1.playerToken;
          var oldPid = testData.gameClient1.playerId;
          yield testData.gameClient1.client.disconnect();
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 2, '剩下2个人都应该收到网络变更通知, 实际只为' + msgCount);
          msgCount = 0;

          testData.gameClient1.onChangePlayerNetworkState = p => {
            msgCount++;
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).fail('不应该收到自己的网络事件');
          };

          testData.gameClient2.onChangePlayerNetworkState = p => {
            msgCount++;
          };

          testData.gameClient3.onChangePlayerNetworkState = p => {
            msgCount++;
          }; //@ts-ignore


          testData.gameClient1._playerToken = oldToken; //@ts-ignore

          testData.gameClient1._playerId = oldPid;
          var recRet = yield testData.gameClient1.reconnect();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(recRet.succ, '重连失败!:' + recRet.err);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 2, '剩下2个人都应该收到网络变更通知, 实际只为' + msgCount); //await delay(5000);//临时延迟5秒，方便我查看一下redis

          oldPid = testData.gameClient1.playerId;
          oldToken = testData.gameClient1.playerToken;
          yield testData.gameClient1.client.disconnect();
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200);
          var onJoinCount = 0;

          testData.gameClient1.onPlayerJoinRoom = p => {
            onJoinCount++;
          };

          testData.gameClient2.onPlayerJoinRoom = p => {
            onJoinCount++;
          };

          testData.gameClient3.onPlayerJoinRoom = p => {
            onJoinCount++;
          };

          msgCount = 0;
          var roomIdRet = yield (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).recoverPlayerRoom(oldPid, oldToken, '全新的名字');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(roomIdRet.succ, '恢复失败!' + roomIdRet.err); //开始游戏服务器的重连操作

          testData.gameClient1 = new (_crd && GameClient === void 0 ? (_reportPossibleCrUseOfGameClient({
            error: Error()
          }), GameClient) : GameClient)(roomIdRet.data.gameServerUrl, oldToken);
          var reconnectRet = yield testData.gameClient1.reconnect();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(reconnectRet.succ, '恢复失败!' + reconnectRet.err);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(onJoinCount === 0, '应该有0个玩家收到玩家加入通知, 实际为' + onJoinCount);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 2, '剩下2个人都应该收到网络变更通知, 实际为' + msgCount);
        }), 60 * 1000);
        test('断线超时重连测试是否房间自动解散', /*#__PURE__*/_asyncToGenerator(function* () {
          //玩家1创建房间并进入游戏服务器
          var gameClient1Ret = yield (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, testData.playerId1, 'zum1', {}, undefined, 0);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1Ret.succ, gameClient1Ret.err);
          testData.gameClient1 = gameClient1Ret.data.gameClient;
          var oldToken = testData.gameClient1.playerToken;
          var oldPid = testData.gameClient1.playerId;
          yield testData.gameClient1.client.disconnect();
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200); //@ts-ignore

          testData.gameClient1._playerToken = oldToken; //@ts-ignore

          testData.gameClient1._playerId = oldPid;
          var recRet = yield testData.gameClient1.reconnect();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!recRet.succ && recRet.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).AuthReconnectionFail, '重连应该失败!' + JSON.stringify(recRet)); // 接着尝试恢复房间数据, token是成功的, 但当前房间id应该为空

          var roomIdRet = yield (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).recoverPlayerRoom(oldPid, oldToken, '全新的名字');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(roomIdRet.succ && !roomIdRet.data, '这里应该恢复成功,但没有房间id!' + roomIdRet.err);
        }), 60 * 1000);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ccd0506409779395d9da33fc0ff6dd1494483e04.js.map