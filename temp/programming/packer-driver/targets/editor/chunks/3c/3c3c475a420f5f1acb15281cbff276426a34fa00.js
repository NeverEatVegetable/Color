System.register(["__unresolved_0", "cc", "chai", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, assert, ErrorCodes, createAndEnterRoom, hallClient, appDismissRoom, joinRoom, testEachBuild, _crd;

  function _reportPossibleCrUseOfassert(extras) {
    _reporterNs.report("assert", "chai", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../../src/shared/tsgf/Result", _context.meta, extras);
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

  function _reportPossibleCrUseOfjoinRoom(extras) {
    _reporterNs.report("joinRoom", "./ApiUtils", _context.meta, extras);
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
      createAndEnterRoom = _unresolved_3.createAndEnterRoom;
      hallClient = _unresolved_3.hallClient;
      appDismissRoom = _unresolved_3.appDismissRoom;
      joinRoom = _unresolved_3.joinRoom;
      testEachBuild = _unresolved_3.testEachBuild;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b92c40+EuRMP5n4Dqke40fT", "ApiRoomAllotRules.test", undefined);

      describe("服务器分配规则验证", () => {
        test('empty', async function () {});
        return; // 防止被批量执行这里return, 需要单独跑的时候再启用
        // 需要启动 npm run devRunLimitOthers + npm run devRunLimitGameServer 作为单元测试环境

        let testData = (_crd && testEachBuild === void 0 ? (_reportPossibleCrUseOftestEachBuild({
          error: Error()
        }), testEachBuild) : testEachBuild)(5);
        test('单类型房间数限制', async function () {
          let gameClient1Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, testData.playerId1, 'zum1', {
            roomType: 'Plaza'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1Ret.succ === true, gameClient1Ret.err);
          testData.gameClient1 = gameClient1Ret.data.gameClient;
          let gameClient2Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken2, testData.playerId2, 'zum2', {
            roomType: 'Plaza'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient2Ret.succ === false && gameClient2Ret.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNoServerAvailable, '配置 Plaza 只能有一个,第二次创建应该失败!');
          await testData.gameClient1.dismissRoom();
          gameClient2Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken2, testData.playerId2, 'zum2', {
            roomType: 'Plaza'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient2Ret.succ === true, gameClient2Ret.err + '上一个 Plaza 房间都解散了,应该成功才对!');
          testData.gameClient2 = gameClient2Ret.data.gameClient;
          let gameClient3Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken3, testData.playerId3, 'zum3', {
            roomType: 'Plaza'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient3Ret.succ === false && gameClient3Ret.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNoServerAvailable, '配置 Plaza 只能有一个,第二次创建应该失败!');
        }, 999999999);
        test('类型加最大玩家数10的房间数限制', async function () {
          let gameClient1Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, testData.playerId1, 'zum1', {
            roomType: 'MeetingRoom',
            maxPlayers: 10
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1Ret.succ === true, gameClient1Ret.err);
          testData.gameClient1 = gameClient1Ret.data.gameClient;
          let gameClient2Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken2, testData.playerId2, 'zum2', {
            roomType: 'MeetingRoom',
            maxPlayers: 10
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient2Ret.succ === true, gameClient2Ret.err);
          testData.gameClient2 = gameClient2Ret.data.gameClient;
          let gameClient3Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken3, testData.playerId3, 'zum3', {
            roomType: 'MeetingRoom',
            maxPlayers: 10
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient3Ret.succ === false && gameClient3Ret.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNoServerAvailable, '配置 MeetingRoom+10 只能有2个,第3次创建应该失败!'); //玩家2释放会议室, 后续应该成功

          await testData.gameClient2.dismissRoom();
          gameClient3Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken3, testData.playerId3, 'zum3', {
            roomType: 'MeetingRoom',
            maxPlayers: 10
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient3Ret.succ === true, gameClient3Ret.err);
          testData.gameClient3 = gameClient3Ret.data.gameClient;
        }, 999999999);
        test('获取或创建房间_同类型同时存在个数的限制', async function () {
          var _getOrCreateRet$data, _getOrCreateRet$data2, _getOrCreateRet$data3, _getOrCreateRet$data4, _getOrCreateRet$data5, _testData$gameClient;

          //玩家1
          let getOrCreateRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).getOrCreateRoom(testData.playerToken2, {
            createRoomPara: {
              ownerPlayerId: testData.playerId1,
              roomType: 'Hall',
              maxPlayers: 2,
              roomName: '大厅',
              isPrivate: true
            },
            matchRoomType: true
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(getOrCreateRet.succ, getOrCreateRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok((_getOrCreateRet$data = getOrCreateRet.data) == null ? void 0 : _getOrCreateRet$data.createRoomOnlineInfo, '应该没匹配到并且创建了一个房间'); // 玩家1进入自己创建的房间

          testData.gameClient1 = await (_crd && joinRoom === void 0 ? (_reportPossibleCrUseOfjoinRoom({
            error: Error()
          }), joinRoom) : joinRoom)(testData.playerToken1, getOrCreateRet.data.createRoomOnlineInfo.roomId, 'zum1'); //玩家2

          getOrCreateRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).getOrCreateRoom(testData.playerToken2, {
            createRoomPara: {
              ownerPlayerId: testData.playerId2,
              roomType: 'Hall',
              maxPlayers: 2,
              roomName: '大厅',
              isPrivate: true
            },
            matchRoomType: true
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(getOrCreateRet.succ, getOrCreateRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok((_getOrCreateRet$data2 = getOrCreateRet.data) == null || (_getOrCreateRet$data2 = _getOrCreateRet$data2.matchRoomOnlineInfoList) == null ? void 0 : _getOrCreateRet$data2.length, '应该匹配到房间才对' + JSON.stringify(getOrCreateRet.data)); // 玩家2进入玩家1创建的房间

          testData.gameClient2 = await (_crd && joinRoom === void 0 ? (_reportPossibleCrUseOfjoinRoom({
            error: Error()
          }), joinRoom) : joinRoom)(testData.playerToken2, getOrCreateRet.data.matchRoomOnlineInfoList[0].roomId, 'zum2'); //玩家3

          getOrCreateRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).getOrCreateRoom(testData.playerToken3, {
            createRoomPara: {
              ownerPlayerId: testData.playerId3,
              roomType: 'Hall',
              maxPlayers: 2,
              roomName: '大厅',
              isPrivate: true
            },
            matchRoomType: true
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(getOrCreateRet.succ, getOrCreateRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok((_getOrCreateRet$data3 = getOrCreateRet.data) == null ? void 0 : _getOrCreateRet$data3.createRoomOnlineInfo, '应该要创建房间,但实际数据是:' + JSON.stringify(getOrCreateRet.data)); // 玩家3加入自己创建的房间

          testData.gameClient3 = await (_crd && joinRoom === void 0 ? (_reportPossibleCrUseOfjoinRoom({
            error: Error()
          }), joinRoom) : joinRoom)(testData.playerToken3, getOrCreateRet.data.createRoomOnlineInfo.roomId, 'zum3'); //玩家4

          getOrCreateRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).getOrCreateRoom(testData.playerToken4, {
            createRoomPara: {
              ownerPlayerId: testData.playerId4,
              roomType: 'Hall',
              maxPlayers: 2,
              roomName: '大厅',
              isPrivate: true
            },
            matchRoomType: true
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(getOrCreateRet.succ, getOrCreateRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_getOrCreateRet$data4 = getOrCreateRet.data) == null || (_getOrCreateRet$data4 = _getOrCreateRet$data4.matchRoomOnlineInfoList) == null ? void 0 : _getOrCreateRet$data4.length) === 1, '应该匹配到了1个房间,但实际数据是:' + JSON.stringify((_getOrCreateRet$data5 = getOrCreateRet.data) == null ? void 0 : _getOrCreateRet$data5.matchRoomOnlineInfoList));
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(getOrCreateRet.data.matchRoomOnlineInfoList[0].roomId === ((_testData$gameClient = testData.gameClient3.currRoomInfo) == null ? void 0 : _testData$gameClient.roomId), '应该匹配到玩家3创建的房间, 因为玩家1创建的房间已经满了(玩家1+玩家2)'); // 玩家4加入玩家3创建的房间

          testData.gameClient4 = await (_crd && joinRoom === void 0 ? (_reportPossibleCrUseOfjoinRoom({
            error: Error()
          }), joinRoom) : joinRoom)(testData.playerToken4, getOrCreateRet.data.matchRoomOnlineInfoList[0].roomId, 'zum4'); //玩家5

          getOrCreateRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).getOrCreateRoom(testData.playerToken5, {
            createRoomPara: {
              ownerPlayerId: testData.playerId5,
              roomType: 'Hall',
              maxPlayers: 2,
              roomName: '大厅',
              isPrivate: true
            },
            matchRoomType: true
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!getOrCreateRet.succ && getOrCreateRet.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNoServerAvailable, '配置了大厅只能有2个房间,应该要满了才对!,实际:' + JSON.stringify(getOrCreateRet));
        }, 999999999);
        test('验证创建但不提取是否也算数量', async function () {
          let createRet1 = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).createRoom(testData.playerToken1, {
            roomType: 'Plaza',
            roomName: 'zum1',
            maxPlayers: 4,
            ownerPlayerId: testData.playerId1,
            isPrivate: true
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(createRet1.succ, createRet1.err);
          let createRet2 = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).createRoom(testData.playerToken2, {
            roomType: 'Plaza',
            roomName: 'zum2',
            maxPlayers: 4,
            ownerPlayerId: testData.playerId2,
            isPrivate: true
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!createRet2.succ && createRet2.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNoServerAvailable, `配置 Plaza 只能有一个,第二次创建应该失败!${JSON.stringify(createRet2)}`);
          let dismissRet = await (_crd && appDismissRoom === void 0 ? (_reportPossibleCrUseOfappDismissRoom({
            error: Error()
          }), appDismissRoom) : appDismissRoom)(createRet1.data.roomId);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(dismissRet.succ, dismissRet.err);
          createRet2 = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).createRoom(testData.playerToken2, {
            roomType: 'Plaza',
            roomName: 'zum2',
            maxPlayers: 4,
            ownerPlayerId: testData.playerId2,
            isPrivate: true
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(createRet2.succ, createRet2.err);
        }, 999999999);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3c3c475a420f5f1acb15281cbff276426a34fa00.js.map