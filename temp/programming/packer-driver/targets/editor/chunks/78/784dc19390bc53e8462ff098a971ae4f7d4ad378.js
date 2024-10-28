System.register(["__unresolved_0", "cc", "chai", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, assert, ErrorCodes, EPrivateRoomJoinMode, ERoomMsgRecvType, delay, authToGameServer, authToGameServerByRoomId, createAndEnterRoom, hallClient, appDismissRoom, joinRoom, testEachBuild, _crd;

  function _reportPossibleCrUseOfassert(extras) {
    _reporterNs.report("assert", "chai", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../../src/shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEPrivateRoomJoinMode(extras) {
    _reporterNs.report("EPrivateRoomJoinMode", "../../../src/shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfERoomMsgRecvType(extras) {
    _reporterNs.report("ERoomMsgRecvType", "../../../src/shared/tsgf/room/IRoomMsg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../../../src/shared/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfauthToGameServer(extras) {
    _reporterNs.report("authToGameServer", "./ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfauthToGameServerByRoomId(extras) {
    _reporterNs.report("authToGameServerByRoomId", "./ApiUtils", _context.meta, extras);
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
      EPrivateRoomJoinMode = _unresolved_3.EPrivateRoomJoinMode;
    }, function (_unresolved_4) {
      ERoomMsgRecvType = _unresolved_4.ERoomMsgRecvType;
    }, function (_unresolved_5) {
      delay = _unresolved_5.delay;
    }, function (_unresolved_6) {
      authToGameServer = _unresolved_6.authToGameServer;
      authToGameServerByRoomId = _unresolved_6.authToGameServerByRoomId;
      createAndEnterRoom = _unresolved_6.createAndEnterRoom;
      hallClient = _unresolved_6.hallClient;
      appDismissRoom = _unresolved_6.appDismissRoom;
      joinRoom = _unresolved_6.joinRoom;
      testEachBuild = _unresolved_6.testEachBuild;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8b3aebvVzRO+LcntT1dhjYR", "ApiRoom.test", undefined);

      describe("房间单元测试", () => {
        let testData = (_crd && testEachBuild === void 0 ? (_reportPossibleCrUseOftestEachBuild({
          error: Error()
        }), testEachBuild) : testEachBuild)(5);
        test('简单创建房间', async function () {
          let gameClient1Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, 'zum1', testData.playerId1, {
            maxPlayers: 4
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1Ret.succ === true, gameClient1Ret.err);
          testData.gameClient1 = gameClient1Ret.data.gameClient;
        });
        test('基本创建房间和加入流程', async function () {
          //创建并进入房间
          let gameClient1Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, testData.playerId1, 'zum1', {
            maxPlayers: 2
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1Ret.succ === true, gameClient1Ret.err);
          testData.gameClient1 = gameClient1Ret.data.gameClient; //玩家2加入玩家1创建好的房间

          testData.gameClient2 = await (_crd && joinRoom === void 0 ? (_reportPossibleCrUseOfjoinRoom({
            error: Error()
          }), joinRoom) : joinRoom)(testData.playerToken2, gameClient1Ret.data.roomId, 'zum2');
        });
        test('房间加入失败_MaxPlayers1', async function () {
          //创建单人房间
          let gameClient1Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, testData.playerId1, 'zum1', {
            maxPlayers: 1
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1Ret.succ === true, gameClient1Ret.err);
          testData.gameClient1 = gameClient1Ret.data.gameClient; //玩家2

          testData.gameClient2 = await (_crd && authToGameServerByRoomId === void 0 ? (_reportPossibleCrUseOfauthToGameServerByRoomId({
            error: Error()
          }), authToGameServerByRoomId) : authToGameServerByRoomId)(testData.playerToken2, gameClient1Ret.data.roomId, 'zum2');
          let ret2 = await testData.gameClient2.joinRoom({
            roomId: gameClient1Ret.data.roomId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(ret2.succ === false && ret2.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomPlayersFull, `加入应该失败的!因为最大人数只有1!${JSON.stringify(ret2)}`);
          await testData.gameClient1.disconnect();
          await testData.gameClient2.disconnect();
        }, 99999999);
        test('房间加入失败_MaxPlayers2', async function () {
          //创建单人房间
          let gameClient1Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, testData.playerId1, 'zum1', {
            maxPlayers: 2
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1Ret.succ === true, gameClient1Ret.err);
          testData.gameClient1 = gameClient1Ret.data.gameClient;
          let roomId = gameClient1Ret.data.roomId; //玩家2正常加入

          testData.gameClient2 = await (_crd && joinRoom === void 0 ? (_reportPossibleCrUseOfjoinRoom({
            error: Error()
          }), joinRoom) : joinRoom)(testData.playerToken2, roomId, 'zum2'); //玩家4先加入到房间所在游戏服务器(先备用)

          testData.gameClient4 = await (_crd && authToGameServer === void 0 ? (_reportPossibleCrUseOfauthToGameServer({
            error: Error()
          }), authToGameServer) : authToGameServer)('zum4', testData.playerToken4, gameClient1Ret.data.gameServerUrl); //玩家3加入失败

          testData.gameClient3 = await (_crd && authToGameServerByRoomId === void 0 ? (_reportPossibleCrUseOfauthToGameServerByRoomId({
            error: Error()
          }), authToGameServerByRoomId) : authToGameServerByRoomId)(testData.playerToken3, roomId, 'zum3');
          let ret3 = await testData.gameClient3.joinRoom({
            roomId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(ret3.succ === false && ret3.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomPlayersFull, '加入应该失败的!因为最大人数只有2!'); //玩家2主动退出房间,让玩家3再试,应该要能加入

          await testData.gameClient2.leaveRoom();
          ret3 = await testData.gameClient3.joinRoom({
            roomId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(ret3.succ, ret3.err); //这个时候玩家2再去加入,应该要失败

          let ret2 = await testData.gameClient2.joinRoom({
            roomId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(ret2.succ === false && ret2.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomPlayersFull, '加入应该失败的!因为最大人数只有2!'); //玩家3直接断开,玩家2应该要能加入成功

          await testData.gameClient3.disconnect();
          ret2 = await testData.gameClient2.joinRoom({
            roomId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(ret2.succ, ret2.err); //玩家1和玩家2都断开,这个时候房间应该被解散了

          await testData.gameClient1.disconnect();
          await testData.gameClient2.disconnect(); //重新连应该是失败的,先用大厅获取房间注册信息,应该也是要销毁的

          let regRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).getRoomOnlineInfo(testData.playerToken1, roomId);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(regRet.succ === false, '大厅获取房间注册信息应该是要返回不存在!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(regRet.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNotFound, '大厅获取房间注册信息应该是要返回不存在!但返回的错误码是' + regRet.code); //然后用玩家4(前面已经连接到同一台游戏服务器的),尝试加入房间,应该也是要失败的

          let ret4 = await testData.gameClient4.joinRoom({
            roomId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(ret4.succ === false && ret4.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNotFound, '游戏服务器的加入房间应该是要返回不存在!');
        });
        test('玩家队伍操作_Fixed', async function () {
          //创建房间, 2个队伍,队伍最大人数2
          let gameClient1Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, testData.playerId1, 'zum1', {
            maxPlayers: 3,
            fixedTeamCount: 2,
            fixedTeamMinPlayers: 1,
            fixedTeamMaxPlayers: 2
          }, '1');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1Ret.succ === true, gameClient1Ret.err);
          testData.gameClient1 = gameClient1Ret.data.gameClient;
          let roomId = gameClient1Ret.data.roomId;
          testData.gameClient2 = await (_crd && joinRoom === void 0 ? (_reportPossibleCrUseOfjoinRoom({
            error: Error()
          }), joinRoom) : joinRoom)(testData.playerToken2, roomId, 'zum2', '1');
          testData.gameClient3 = await (_crd && authToGameServerByRoomId === void 0 ? (_reportPossibleCrUseOfauthToGameServerByRoomId({
            error: Error()
          }), authToGameServerByRoomId) : authToGameServerByRoomId)(testData.playerToken3, roomId, 'zum3');
          let joinRet = await testData.gameClient3.joinRoom({
            roomId,
            teamId: '3'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRet.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomTeamNotFound, `固定房间的队伍不存在,应该不能加入才对!${joinRet.succ},${joinRet.code},${joinRet.err}`);
          joinRet = await testData.gameClient3.joinRoom({
            roomId,
            teamId: '1'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRet.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomTeamPlayersFull, `队伍满员了,应该不能加入才对!${joinRet.succ},${joinRet.code},${joinRet.err}`);
          joinRet = await testData.gameClient3.joinRoom({
            roomId,
            teamId: '2'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRet.succ, joinRet.err);
          let changeTeamRet = await testData.gameClient3.changePlayerTeam('1');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(changeTeamRet.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomTeamPlayersFull, `队伍满员了,应该不能加入才对!${changeTeamRet.succ},${changeTeamRet.code},${changeTeamRet.err}`);
          let msgCount = 0;

          testData.gameClient1.onChangePlayerTeam = changeInfo => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(changeInfo.changePlayerId === testData.playerId1, `【玩家1】应该收到玩家1的通知, 实际为${changeInfo.changePlayerId}`);
            msgCount++;
          };

          testData.gameClient2.onChangePlayerTeam = changeInfo => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(changeInfo.changePlayerId === testData.playerId1, `【玩家2】应该收到玩家1的通知, 实际为${changeInfo.changePlayerId}`);
            msgCount++;
          };

          testData.gameClient3.onChangePlayerTeam = changeInfo => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(changeInfo.changePlayerId === testData.playerId1, `【玩家3】应该收到玩家1的通知, 实际为${changeInfo.changePlayerId}`);
            msgCount++;
          };

          changeTeamRet = await testData.gameClient1.changePlayerTeam('2');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(changeTeamRet.succ, `${changeTeamRet.err}`);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200); //延时一下，因为通知消息是异步的，不会等待本rpc回来再通知

          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 3, `应该要收到3个消息！实际${msgCount}个`);
          changeTeamRet = await testData.gameClient2.changePlayerTeam('2');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(changeTeamRet.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomTeamPlayersFull, `队伍满员了,应该不能加入才对!${changeTeamRet.succ},${changeTeamRet.code},${changeTeamRet.err}`);
          msgCount = 0;

          testData.gameClient1.onChangePlayerTeam = changeInfo => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(changeInfo.changePlayerId === testData.playerId3, `【玩家1】应该收到通知, 实际为${changeInfo.changePlayerId}`);
            msgCount++;
          };

          testData.gameClient2.onChangePlayerTeam = changeInfo => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(changeInfo.changePlayerId === testData.playerId3, `【玩家2】应该收到通知, 实际为${changeInfo.changePlayerId}`);
            msgCount++;
          };

          testData.gameClient3.onChangePlayerTeam = changeInfo => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(changeInfo.changePlayerId === testData.playerId3, `【玩家3】应该收到通知, 实际为${changeInfo.changePlayerId}`);
            msgCount++;
          };

          changeTeamRet = await testData.gameClient3.changePlayerTeam('1');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(changeTeamRet.succ, `${changeTeamRet.err}`);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200); //延时一下，因为通知消息是异步的，不会等待本rpc回来再通知

          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 3, `应该要收到3个消息！实际${msgCount}个`);
        });
        test('玩家队伍操作_Free', async function () {
          //创建房间, 2个队伍,队伍最大人数2
          let gameClient1Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, testData.playerId1, 'zum1', {
            maxPlayers: 3,
            freeTeamMinPlayers: 1,
            freeTeamMaxPlayers: 2
          }, '1');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1Ret.succ === true, gameClient1Ret.err);
          testData.gameClient1 = gameClient1Ret.data.gameClient;
          let roomId = gameClient1Ret.data.roomId;
          testData.gameClient2 = await (_crd && joinRoom === void 0 ? (_reportPossibleCrUseOfjoinRoom({
            error: Error()
          }), joinRoom) : joinRoom)(testData.playerToken2, roomId, 'zum2', '1');
          testData.gameClient3 = await (_crd && authToGameServerByRoomId === void 0 ? (_reportPossibleCrUseOfauthToGameServerByRoomId({
            error: Error()
          }), authToGameServerByRoomId) : authToGameServerByRoomId)(testData.playerToken3, roomId, 'zum3');
          let joinRet = await testData.gameClient3.joinRoom({
            roomId,
            teamId: '1'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRet.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomTeamPlayersFull, `队伍满员了,应该不能加入才对!${joinRet.succ},${joinRet.code},${joinRet.err}`);
          joinRet = await testData.gameClient3.joinRoom({
            roomId,
            teamId: '2'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRet.succ, joinRet.err);
          let changeTeamRet = await testData.gameClient3.changePlayerTeam('1');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(changeTeamRet.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomTeamPlayersFull, `队伍满员了,应该不能加入才对!${changeTeamRet.succ},${changeTeamRet.code},${changeTeamRet.err}`);
          let msgCount = 0;

          testData.gameClient1.onChangePlayerTeam = changeInfo => {
            if (changeInfo.changePlayerId === testData.playerId1) {
              msgCount++;
            }
          };

          testData.gameClient2.onChangePlayerTeam = changeInfo => {
            if (changeInfo.changePlayerId === testData.playerId1) {
              msgCount++;
            }
          };

          testData.gameClient3.onChangePlayerTeam = changeInfo => {
            if (changeInfo.changePlayerId === testData.playerId1) {
              msgCount++;
            }
          };

          changeTeamRet = await testData.gameClient1.changePlayerTeam('2');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(changeTeamRet.succ, `${changeTeamRet.err}`);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200); //延时一下，因为通知消息是异步的，不会等待本rpc回来再通知

          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 3, `应该要收到3个消息！实际${msgCount}个`);
          changeTeamRet = await testData.gameClient2.changePlayerTeam('2');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(changeTeamRet.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomTeamPlayersFull, `队伍满员了,应该不能加入才对!${changeTeamRet.succ},${changeTeamRet.code},${changeTeamRet.err}`); //玩家2也改到其他队伍.队伍1应该已经不存在了

          changeTeamRet = await testData.gameClient2.changePlayerTeam('3');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(changeTeamRet.succ, `${changeTeamRet.err}`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(testData.gameClient2.currRoomInfo && !testData.gameClient2.currRoomInfo.teamList.find(t => t.id === '1'), `队伍1应该已经不存在了!`);
          msgCount = 0;

          testData.gameClient1.onChangePlayerTeam = changeInfo => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(changeInfo.changePlayerId === testData.playerId3, `【玩家1】应该收到通知, 实际为${changeInfo.changePlayerId}`);
            msgCount++;
          };

          testData.gameClient2.onChangePlayerTeam = changeInfo => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(changeInfo.changePlayerId === testData.playerId3, `【玩家2】应该收到通知, 实际为${changeInfo.changePlayerId}`);
            msgCount++;
          };

          testData.gameClient3.onChangePlayerTeam = changeInfo => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(changeInfo.changePlayerId === testData.playerId3, `【玩家3】应该收到通知, 实际为${changeInfo.changePlayerId}`);
            msgCount++;
          };

          changeTeamRet = await testData.gameClient3.changePlayerTeam('1');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(changeTeamRet.succ, `${changeTeamRet.err}`);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200); //延时一下，因为通知消息是异步的，不会等待本rpc回来再通知

          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 3, `应该要收到3个消息！实际${msgCount}个`);
          changeTeamRet = await testData.gameClient3.changePlayerTeam('3');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(changeTeamRet.succ, `${changeTeamRet.err}`);
        });
        test('创建房间和多玩家加入房间以及事件触发逻辑', async function () {
          //玩家1创建房间并进入游戏服务器
          let gameClient1Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, testData.playerId1, 'zum1');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1Ret.succ, gameClient1Ret.err);
          testData.gameClient1 = gameClient1Ret.data.gameClient;
          let roomId = gameClient1Ret.data.roomId;
          let gameClient1RobotResult = await testData.gameClient1.createRoomRobot({
            showName: 'robot1'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1RobotResult.succ, gameClient1RobotResult.err);
          let robot1 = gameClient1RobotResult.data; //玩家2加入玩家1创建的房间（进入游戏服务器），玩家1收到来人通知

          let msgCount = 0;

          testData.gameClient1.onPlayerJoinRoom = (playerInfo, roomInfo) => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(playerInfo.playerId === testData.playerId2, '这个时候【玩家1】应该收到【玩家2】的进入房间通知');
            msgCount++;
          };

          testData.gameClient2 = await (_crd && joinRoom === void 0 ? (_reportPossibleCrUseOfjoinRoom({
            error: Error()
          }), joinRoom) : joinRoom)(testData.playerToken2, roomId, 'zum2');
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200); //延时一下，因为通知消息是异步的，不会等待本rpc回来再通知

          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 1, '应该要收到1个消息！');
          msgCount = 0;

          testData.gameClient1.onPlayerJoinRoom = (playerInfo, roomInfo) => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(playerInfo.playerId === testData.playerId3, '这个时候【玩家1】应该收到【玩家3】的进入房间通知');
            msgCount++;
          };

          testData.gameClient2.onPlayerJoinRoom = (playerInfo, roomInfo) => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(playerInfo.playerId === testData.playerId3, '这个时候【玩家2】应该收到【玩家3】的进入房间通知');
            msgCount++;
          }; //玩家3加入玩家1创建的房间（进入游戏服务器），玩家2、玩家2收到来人通知


          testData.gameClient3 = await (_crd && joinRoom === void 0 ? (_reportPossibleCrUseOfjoinRoom({
            error: Error()
          }), joinRoom) : joinRoom)(testData.playerToken3, roomId, 'zum3');
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200); //延时一下，因为通知消息是异步的，不会等待本rpc回来再通知

          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 2, '应该要收到2个消息！'); //玩家2发送房间消息

          msgCount = 0;

          testData.gameClient1.onRecvRoomMsg = msg => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(msg.fromPlayerInfo.playerId === testData.playerId2, '这个时候【玩家1】应该收到【玩家2】的房间广播消息');
            msgCount++;
          };

          testData.gameClient2.onRecvRoomMsg = msg => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(msg.fromPlayerInfo.playerId === testData.playerId2, '这个时候【玩家2】应该收到【玩家2】的房间广播消息');
            msgCount++;
          };

          testData.gameClient3.onRecvRoomMsg = msg => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(msg.fromPlayerInfo.playerId === testData.playerId2, '这个时候【玩家3】应该收到【玩家2】的房间广播消息');
            msgCount++;
          };

          await testData.gameClient2.sendRoomMsg({
            recvType: (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
              error: Error()
            }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_ALL,
            msg: '广播所有人一条测试消息'
          });
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200); //延时一下，因为通知消息是异步的，不会等待本rpc回来再通知

          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 3, '应该要收到3个消息！');
          msgCount = 0;

          testData.gameClient1.onRecvRoomMsg = msg => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(msg.fromPlayerInfo.playerId === testData.playerId2, '这个时候【玩家1】应该收到【玩家2】的房间给他人的消息');
            msgCount++;
          };

          testData.gameClient2.onRecvRoomMsg = msg => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).fail('这个时候【玩家2】不应该收到【玩家2】的房间消息');
          };

          testData.gameClient3.onRecvRoomMsg = msg => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(msg.fromPlayerInfo.playerId === testData.playerId2, '这个时候【玩家3】应该收到【玩家2】的房间给他人的消息');
            msgCount++;
          };

          await testData.gameClient2.sendRoomMsg({
            recvType: (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
              error: Error()
            }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_OTHERS,
            msg: '其他人，我是玩家1'
          });
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200); //延时一下，因为通知消息是异步的，不会等待本rpc回来再通知

          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 2, '应该要收到2个消息！');
          msgCount = 0;

          testData.gameClient1.onRecvRoomMsg = msg => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(msg.fromPlayerInfo.playerId === testData.playerId2, '这个时候【玩家1】应该收到【玩家2】的房间指定消息');
            msgCount++;
          };

          testData.gameClient2.onRecvRoomMsg = msg => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).fail('这个时候【玩家2】不应该收到【玩家2】的房间消息');
          };

          testData.gameClient3.onRecvRoomMsg = msg => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).fail('这个时候【玩家3】不应该收到【玩家2】的房间消息');
          };

          await testData.gameClient2.sendRoomMsg({
            recvType: (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
              error: Error()
            }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_SOME,
            recvPlayerList: [testData.gameClient2.currRoomInfo.ownerPlayerId],
            msg: '房主好，我是玩家1'
          });
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200); //延时一下，因为通知消息是异步的，不会等待本rpc回来再通知

          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 1, '应该要收到1个消息！'); //测试房间信息修改

          msgCount = 0;

          testData.gameClient1.onChangeRoom = roomInfo => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(roomInfo.roomName === '2', `【玩家1】roomName应为'2', 实际为${roomInfo.roomName}`);
            msgCount++;
          };

          testData.gameClient2.onChangeRoom = roomInfo => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(roomInfo.roomName === '2', `【玩家2】roomName应为'2', 实际为${roomInfo.roomName}`);
            msgCount++;
          };

          testData.gameClient3.onChangeRoom = roomInfo => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(roomInfo.roomName === '2', `【玩家3】roomName应为'2', 实际为${roomInfo.roomName}`);
            msgCount++;
          };

          let changeRoomRet = await testData.gameClient1.changeRoom({
            roomName: '2'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(changeRoomRet.succ, `修改房间信息应该成功.${changeRoomRet.err}`);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200); //延时一下，因为通知消息是异步的，不会等待本rpc回来再通知

          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 3, `应该要收到3个消息！实际${msgCount}个`); //测试玩家自定义属性修改

          msgCount = 0;

          testData.gameClient1.onChangeCustomPlayerProfile = changeInfo => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(changeInfo.changePlayerId === testData.playerId1, `【玩家1】应该收到玩家1的通知, 实际为${changeInfo.changePlayerId}`);
            msgCount++;
          };

          testData.gameClient2.onChangeCustomPlayerProfile = changeInfo => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(changeInfo.changePlayerId === testData.playerId1, `【玩家2】应该收到玩家1的通知, 实际为${changeInfo.changePlayerId}`);
            msgCount++;
          };

          testData.gameClient3.onChangeCustomPlayerProfile = changeInfo => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(changeInfo.changePlayerId === testData.playerId1, `【玩家3】应该收到玩家1的通知, 实际为${changeInfo.changePlayerId}`);
            msgCount++;
          };

          let changeProfileRet = await testData.gameClient1.changeCustomPlayerProfile('2');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(changeProfileRet.succ, `修改玩家自定义属性应该成功.${changeProfileRet.err}`);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200); //延时一下，因为通知消息是异步的，不会等待本rpc回来再通知

          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 3, `应该要收到3个消息！实际${msgCount}个`); //测试玩家自定义状态修改

          msgCount = 0;

          testData.gameClient1.onChangeCustomPlayerStatus = changeInfo => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(changeInfo.changePlayerId === testData.playerId1, `【玩家1】应该收到玩家1的通知, 实际为${changeInfo.changePlayerId}`);
            msgCount++;
          };

          testData.gameClient2.onChangeCustomPlayerStatus = changeInfo => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(changeInfo.changePlayerId === testData.playerId1, `【玩家2】应该收到玩家1的通知, 实际为${changeInfo.changePlayerId}`);
            msgCount++;
          };

          testData.gameClient3.onChangeCustomPlayerStatus = changeInfo => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(changeInfo.changePlayerId === testData.playerId1, `【玩家3】应该收到玩家1的通知, 实际为${changeInfo.changePlayerId}`);
            msgCount++;
          };

          let changeStatusRet = await testData.gameClient1.changeCustomPlayerStatus(2);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(changeStatusRet.succ, `修改玩家自定义状态应该成功.${changeStatusRet.err}`);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200); //延时一下，因为通知消息是异步的，不会等待本rpc回来再通知

          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 3, `应该要收到3个消息！实际${msgCount}个`); //测试机器人修改自定义状态

          let gameClient1OldStatus = testData.gameClient1.currPlayerInfo.customPlayerStatus;
          msgCount = 0;

          testData.gameClient1.onChangeCustomPlayerStatus = changeInfo => {
            if (changeInfo.changePlayerId === robot1.playerId) {
              msgCount++;
            }
          };

          testData.gameClient2.onChangeCustomPlayerStatus = changeInfo => {
            if (changeInfo.changePlayerId === robot1.playerId) {
              msgCount++;
            }
          };

          testData.gameClient3.onChangeCustomPlayerStatus = changeInfo => {
            if (changeInfo.changePlayerId === robot1.playerId) {
              msgCount++;
            }
          };

          changeStatusRet = await testData.gameClient1.changeCustomPlayerStatus(2, robot1.playerId);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(changeStatusRet.succ, `修改玩家1机器人自定义状态应该成功.${changeStatusRet.err}`);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200); //延时一下，因为通知消息是异步的，不会等待本rpc回来再通知

          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 3, `应该要收到3个消息！实际${msgCount}个`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1OldStatus === testData.gameClient1.currPlayerInfo.customPlayerStatus, `新旧状态应该一致`); //测试机器人修改自定义信息

          let gameClient1OldProfile = testData.gameClient1.currPlayerInfo.customPlayerProfile;
          msgCount = 0;

          testData.gameClient1.onChangeCustomPlayerProfile = changeInfo => {
            if (changeInfo.changePlayerId === robot1.playerId) {
              msgCount++;
            }
          };

          testData.gameClient2.onChangeCustomPlayerProfile = changeInfo => {
            if (changeInfo.changePlayerId === robot1.playerId) {
              msgCount++;
            }
          };

          testData.gameClient3.onChangeCustomPlayerProfile = changeInfo => {
            if (changeInfo.changePlayerId === robot1.playerId) {
              msgCount++;
            }
          };

          changeStatusRet = await testData.gameClient1.changeCustomPlayerProfile('123', robot1.playerId);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(changeStatusRet.succ, `修改玩家1机器人自定义字符串应该成功.${changeStatusRet.err}`);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200); //延时一下，因为通知消息是异步的，不会等待本rpc回来再通知

          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 3, `应该要收到3个消息！实际${msgCount}个`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1OldProfile === testData.gameClient1.currPlayerInfo.customPlayerProfile, `新旧数据应该一致`); //玩家2离开房间, 玩家1、玩家2收到通知

          msgCount = 0;

          testData.gameClient1.onPlayerLeaveRoom = (playerInfo, roomInfo) => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(playerInfo.playerId === testData.playerId2, '这个时候【玩家1】应该收到【玩家2】的退出房间通知');
            msgCount++;
          };

          testData.gameClient2.onPlayerLeaveRoom = (playerInfo, roomInfo) => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).fail('这个时候【玩家2】不应该收到【玩家2】的退出房间通知');
          };

          testData.gameClient3.onPlayerLeaveRoom = (playerInfo, roomInfo) => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(playerInfo.playerId === testData.playerId2, '这个时候【玩家3】应该收到【玩家2】的退出房间通知');
            msgCount++;
          };

          await testData.gameClient2.leaveRoom();
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200); //延时一下，因为通知消息是异步的，不会等待本rpc回来再通知

          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 2, `应该要收到2个消息！实际${msgCount}个`); //玩家2离开房间,测试一下不在房间中是否不应该收到通知

          msgCount = 0;

          testData.gameClient1.onChangeCustomPlayerStatus = changeInfo => {
            msgCount++;
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).fail(`【玩家1】不应该收到通知, 实际changePlayerId为${changeInfo.changePlayerId}`);
          };

          testData.gameClient2.onChangeCustomPlayerStatus = changeInfo => {
            msgCount++;
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).fail(`【玩家2】不应该收到通知, 实际changePlayerId为${changeInfo.changePlayerId}`);
          };

          testData.gameClient3.onChangeCustomPlayerStatus = changeInfo => {
            msgCount++;
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).fail(`【玩家3】不应该收到通知, 实际changePlayerId为${changeInfo.changePlayerId}`);
          };

          changeStatusRet = await testData.gameClient2.changeCustomPlayerStatus(2);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(changeStatusRet.succ, `修改玩家自定义状态应该成功.${changeStatusRet.err}`);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200); //延时一下，因为通知消息是异步的，不会等待本rpc回来再通知

          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 0, `应该要收到0个消息！实际${msgCount}个`); //玩家1解散房间，玩家3收到解散通知

          msgCount = 0;

          testData.gameClient1.onDismissRoom = roomInfo => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).fail('这个时候【玩家1】不应该收到解散房间通知');
          };

          testData.gameClient2.onDismissRoom = roomInfo => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).fail('这个时候【玩家2】不应该收到解散房间通知');
          };

          testData.gameClient3.onDismissRoom = roomInfo => {
            msgCount++;
          };

          await testData.gameClient1.dismissRoom();
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200); //延时一下，因为通知消息是异步的，不会等待本rpc回来再通知

          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 1, '应该要收到1个消息！');
        }, 60 * 1000);
        test('私密房间加入模式', async function () {
          //创建单人房间
          let gameClient1Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, testData.playerId1, 'zum1', {
            maxPlayers: 2,
            isPrivate: true,
            privateRoomJoinMode: (_crd && EPrivateRoomJoinMode === void 0 ? (_reportPossibleCrUseOfEPrivateRoomJoinMode({
              error: Error()
            }), EPrivateRoomJoinMode) : EPrivateRoomJoinMode).password,
            privateRoomPassword: '123'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1Ret.succ === true, gameClient1Ret.err);
          testData.gameClient1 = gameClient1Ret.data.gameClient;
          let roomId = gameClient1Ret.data.roomId; //玩家2

          testData.gameClient2 = await (_crd && authToGameServerByRoomId === void 0 ? (_reportPossibleCrUseOfauthToGameServerByRoomId({
            error: Error()
          }), authToGameServerByRoomId) : authToGameServerByRoomId)(testData.playerToken2, roomId, 'zum2');
          let ret2 = await testData.gameClient2.joinRoom({
            roomId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(ret2.succ === false && ret2.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomMustPassword, '应该是提示需要密码!');
          ret2 = await testData.gameClient2.joinRoom({
            roomId,
            password: '11'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(ret2.succ === false && ret2.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomPasswordWrong, '应该是提示密码错误!');
          ret2 = await testData.gameClient2.joinRoom({
            roomId,
            password: '123'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(ret2.succ, ret2.err);
          await testData.gameClient1.disconnect();
          await testData.gameClient2.disconnect();
        });
        test('获取或创建新房间', async function () {
          var _getOrCreateRet$data, _getOrCreateRet$data2, _getOrCreateRet$data3, _getOrCreateRet$data4, _getOrCreateRet$data5, _getOrCreateRet$data6, _testData$gameClient, _getOrCreateRet$data7;

          //玩家1
          let getOrCreateRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).getOrCreateRoom(testData.playerToken2, {
            createRoomPara: {
              ownerPlayerId: testData.playerId1,
              roomType: '111',
              maxPlayers: 2,
              roomName: '匹配或创建的房间',
              isPrivate: true
            },
            matchRoomType: true,
            matchMaxPlayers: true
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
              roomType: '222',
              maxPlayers: 2,
              roomName: '匹配或创建的房间',
              isPrivate: true
            }
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(getOrCreateRet.succ === false && getOrCreateRet.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).ParamsError, '应该是提示参数至少要有一个!');
          getOrCreateRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).getOrCreateRoom(testData.playerToken2, {
            createRoomPara: {
              ownerPlayerId: testData.playerId2,
              roomType: '222',
              maxPlayers: 2,
              roomName: '匹配或创建的房间',
              isPrivate: true
            },
            matchRoomType: true,
            matchMaxPlayers: true
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(getOrCreateRet.succ, getOrCreateRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok((_getOrCreateRet$data2 = getOrCreateRet.data) == null ? void 0 : _getOrCreateRet$data2.createRoomOnlineInfo, '应该没匹配到并且创建了一个房间'); // 玩家2进入自己创建的房间

          testData.gameClient2 = await (_crd && joinRoom === void 0 ? (_reportPossibleCrUseOfjoinRoom({
            error: Error()
          }), joinRoom) : joinRoom)(testData.playerToken2, getOrCreateRet.data.createRoomOnlineInfo.roomId, 'zum2'); //玩家3

          getOrCreateRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).getOrCreateRoom(testData.playerToken3, {
            createRoomPara: {
              ownerPlayerId: testData.playerId3,
              roomType: '111',
              maxPlayers: 2,
              roomName: '匹配或创建的房间',
              isPrivate: true
            },
            matchRoomType: true,
            matchLimitRoomCount: 2
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(getOrCreateRet.succ, getOrCreateRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_getOrCreateRet$data3 = getOrCreateRet.data) == null || (_getOrCreateRet$data3 = _getOrCreateRet$data3.matchRoomOnlineInfoList) == null ? void 0 : _getOrCreateRet$data3.length) === 1, '应该匹配到了1个房间,但实际数据是:' + JSON.stringify((_getOrCreateRet$data4 = getOrCreateRet.data) == null ? void 0 : _getOrCreateRet$data4.matchRoomOnlineInfoList)); // 玩家3加入玩家1创建的房间

          testData.gameClient3 = await (_crd && joinRoom === void 0 ? (_reportPossibleCrUseOfjoinRoom({
            error: Error()
          }), joinRoom) : joinRoom)(testData.playerToken3, getOrCreateRet.data.matchRoomOnlineInfoList[0].roomId, 'zum3'); //玩家4

          getOrCreateRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).getOrCreateRoom(testData.playerToken4, {
            createRoomPara: {
              ownerPlayerId: testData.playerId4,
              roomType: '111',
              maxPlayers: 2,
              roomName: '匹配或创建的房间',
              isPrivate: true
            },
            matchMaxPlayers: true,
            matchLimitRoomCount: 2
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(getOrCreateRet.succ, getOrCreateRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_getOrCreateRet$data5 = getOrCreateRet.data) == null || (_getOrCreateRet$data5 = _getOrCreateRet$data5.matchRoomOnlineInfoList) == null ? void 0 : _getOrCreateRet$data5.length) === 1, '应该匹配到了1个房间,但实际数据是:' + JSON.stringify((_getOrCreateRet$data6 = getOrCreateRet.data) == null ? void 0 : _getOrCreateRet$data6.matchRoomOnlineInfoList));
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(getOrCreateRet.data.matchRoomOnlineInfoList[0].roomId === ((_testData$gameClient = testData.gameClient2.currRoomInfo) == null ? void 0 : _testData$gameClient.roomId), '应该匹配到玩家2创建的房间, 因为玩家1创建的房间已经满了(玩家1+玩家3)'); // 玩家4加入玩家2创建的房间

          testData.gameClient4 = await (_crd && joinRoom === void 0 ? (_reportPossibleCrUseOfjoinRoom({
            error: Error()
          }), joinRoom) : joinRoom)(testData.playerToken4, getOrCreateRet.data.matchRoomOnlineInfoList[0].roomId, 'zum4'); //玩家5

          getOrCreateRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).getOrCreateRoom(testData.playerToken5, {
            createRoomPara: {
              ownerPlayerId: testData.playerId5,
              roomType: '111',
              maxPlayers: 2,
              roomName: '匹配或创建的房间',
              isPrivate: true
            },
            matchMaxPlayers: true,
            matchLimitRoomCount: 2
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(getOrCreateRet.succ, getOrCreateRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok((_getOrCreateRet$data7 = getOrCreateRet.data) == null ? void 0 : _getOrCreateRet$data7.createRoomOnlineInfo, '应该要创建房间,因为仅有的两个应该是要都满了:' + JSON.stringify(getOrCreateRet.data)); // 玩家5进入房间

          testData.gameClient5 = await (_crd && joinRoom === void 0 ? (_reportPossibleCrUseOfjoinRoom({
            error: Error()
          }), joinRoom) : joinRoom)(testData.playerToken5, getOrCreateRet.data.createRoomOnlineInfo.roomId, 'zum5');
        });
        test('空房间的保留时间', async function () {
          //创建单人房间
          let gameClient1Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, testData.playerId1, 'zum1', {
            maxPlayers: 2,
            isPrivate: true,
            retainEmptyRoomTime: 1000 // 保留1秒

          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1Ret.succ, gameClient1Ret.err);
          testData.gameClient1 = gameClient1Ret.data.gameClient;
          let roomId = gameClient1Ret.data.roomId;
          await testData.gameClient1.leaveRoom();
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(50); // 空房间保留时间内

          testData.gameClient1 = await (_crd && authToGameServer === void 0 ? (_reportPossibleCrUseOfauthToGameServer({
            error: Error()
          }), authToGameServer) : authToGameServer)('zum1', testData.playerToken1, gameClient1Ret.data.gameServerUrl);
          let joinRet = await testData.gameClient1.joinRoom({
            roomId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRet.succ, joinRet.err);
          await testData.gameClient1.leaveRoom();
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(1200); // 超过空房间保留时间

          testData.gameClient1 = await (_crd && authToGameServer === void 0 ? (_reportPossibleCrUseOfauthToGameServer({
            error: Error()
          }), authToGameServer) : authToGameServer)('zum1', testData.playerToken1, gameClient1Ret.data.gameServerUrl);
          joinRet = await testData.gameClient1.joinRoom({
            roomId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!joinRet.succ && joinRet.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNotFound, '应该加入失败,并且找不到房间' + JSON.stringify(joinRet));
        });
        test('房主的保留位置', async function () {
          //创建单人房间
          let gameClient1Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, testData.playerId1, 'zum1', {
            maxPlayers: 2,
            isPrivate: true,
            retainOwnSeat: true //保留房主的位置

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
          }), assert) : assert).ok(joinRet.succ, joinRet.err); // 玩家1用下线的方式离开房间

          await testData.gameClient1.disconnect(); // 玩家3加入, 应该是失败的

          testData.gameClient3 = await (_crd && authToGameServer === void 0 ? (_reportPossibleCrUseOfauthToGameServer({
            error: Error()
          }), authToGameServer) : authToGameServer)('zum3', testData.playerToken3, gameServerUrl);
          joinRet = await testData.gameClient3.joinRoom({
            roomId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!joinRet.succ && joinRet.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomPlayersFull, "应该是房间人满,但:" + JSON.stringify(joinRet)); // 玩家1加入

          testData.gameClient1 = await (_crd && authToGameServer === void 0 ? (_reportPossibleCrUseOfauthToGameServer({
            error: Error()
          }), authToGameServer) : authToGameServer)('zum1', testData.playerToken1, gameServerUrl);
          joinRet = await testData.gameClient1.joinRoom({
            roomId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRet.succ, joinRet.err);
        });
        test('房主退出房间后调用大厅接口解散房间', async function () {
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

          let dRet = await (_crd && appDismissRoom === void 0 ? (_reportPossibleCrUseOfappDismissRoom({
            error: Error()
          }), appDismissRoom) : appDismissRoom)(roomId);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(dRet.succ, dRet.err);
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
        test('使用指定房间id创建房间', async function () {
          //创建单人房间
          let gameClient1Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, testData.playerId1, 'zum1', {
            roomId: '1',
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

          let dRet = await (_crd && appDismissRoom === void 0 ? (_reportPossibleCrUseOfappDismissRoom({
            error: Error()
          }), appDismissRoom) : appDismissRoom)(roomId);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(dRet.succ, dRet.err);
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
          await testData.gameClient1.disconnect();
          await testData.gameClient2.disconnect(); // 同id房间 重复创建的验证

          gameClient1Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, testData.playerId1, 'zum1', {
            roomId: '1',
            maxPlayers: 2,
            isPrivate: true
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1Ret.succ, `解散过的房间id应该是可以重复使用的:${gameClient1Ret.err}`);
          testData.gameClient1 = gameClient1Ret.data.gameClient; // 重新再创建一个同id房间

          let gameClient2Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken2, testData.playerId2, 'zum2', {
            roomId: '1',
            maxPlayers: 2,
            isPrivate: true
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!gameClient2Ret.succ && gameClient2Ret.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomIdExists, `重复的房间id应该报错:${JSON.stringify(gameClient2Ret)}`); // 再测试游戏服务器中的解散

          await testData.gameClient1.dismissRoom(); //马上验证

          gameClient2Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken2, testData.playerId2, 'zum2', {
            roomId: '1',
            maxPlayers: 2,
            isPrivate: true
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient2Ret.succ, `解散过的房间id应该是可以重复使用的:${gameClient2Ret.err}`);
          testData.gameClient2 = gameClient2Ret.data.gameClient;
        });
        test('筛选房间', async function () {
          let gameClient1Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, testData.playerId1, 'zum1', {
            maxPlayers: 2,
            isPrivate: true,
            roomType: 'test',
            roomName: 'name'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1Ret.succ, gameClient1Ret.err);
          testData.gameClient1 = gameClient1Ret.data.gameClient;
          let filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            roomType: 'test'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 1, `应该匹配到1个,实际为${JSON.stringify(filterRet)}`);
          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            maxPlayers: 2
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 1, `应该匹配到1个,实际为${JSON.stringify(filterRet)}`);
          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            roomNameFullMatch: 'name'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 1, `应该匹配到1个,实际为${JSON.stringify(filterRet)}`);
          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            roomNameLike: 'name'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 1, `应该匹配到1个,实际为${JSON.stringify(filterRet)}`);
          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            roomNameLike: 'n'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 1, `应该匹配到1个,实际为${JSON.stringify(filterRet)}`);
          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            roomType: 'test',
            roomNameFullMatch: 'name'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 1, `应该匹配到1个,实际为${JSON.stringify(filterRet)}`);
          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            roomType: 'test',
            roomNameFullMatch: 'name',
            roomNameLike: 'n'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 1, `应该匹配到1个,实际为${JSON.stringify(filterRet)}`);
          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            roomNameLike: 'nonono'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 0, `应该匹配到0个,实际为${JSON.stringify(filterRet)}`);
          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            roomType: 'test',
            roomNameFullMatch: 'name',
            roomNameLike: 'nonono'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 0, `应该匹配到0个,实际为${JSON.stringify(filterRet)}`);
          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            roomType: 'test',
            roomNameFullMatch: 'name',
            roomNameLike: 'n'
          }, 1, 1);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 0, `应该匹配到0个,实际为${JSON.stringify(filterRet)}`);
          let gameClient2Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken2, testData.playerId2, 'zum2', {
            maxPlayers: 2,
            isPrivate: true,
            roomType: 'test',
            roomName: 'name2'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient2Ret.succ, gameClient2Ret.err);
          testData.gameClient2 = gameClient2Ret.data.gameClient; // 继续匹配验证

          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            roomType: 'test'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 2, `应该匹配到2个,实际为${JSON.stringify(filterRet)}`);
          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            maxPlayers: 2
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 2, `应该匹配到2个,实际为${JSON.stringify(filterRet)}`);
          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            roomNameFullMatch: 'name'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 1, `应该匹配到1个,实际为${JSON.stringify(filterRet)}`);
          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            roomNameLike: 'name2'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 1, `应该匹配到1个,实际为${JSON.stringify(filterRet)}`);
          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            roomNameLike: 'n'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 2, `应该匹配到2个,实际为${JSON.stringify(filterRet)}`);
          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            roomType: 'test',
            roomNameFullMatch: 'name'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 1, `应该匹配到1个,实际为${JSON.stringify(filterRet)}`);
          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            roomType: 'test',
            roomNameFullMatch: 'name',
            roomNameLike: 'n'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 1, `应该匹配到1个,实际为${JSON.stringify(filterRet)}`);
          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            roomNameLike: 'nonono'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 0, `应该匹配到0个,实际为${JSON.stringify(filterRet)}`);
          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            roomType: 'test',
            roomNameFullMatch: 'name',
            roomNameLike: 'nonono'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 0, `应该匹配到0个,实际为${JSON.stringify(filterRet)}`);
          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            roomType: 'test',
            roomNameLike: 'name'
          }, 1, 1);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 1, `应该匹配到1个,实际为${JSON.stringify(filterRet)}`);
          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            roomType: 'test',
            roomNameLike: 'name'
          }, 0, 1);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 1, `应该匹配到1个,实际为${JSON.stringify(filterRet)}`);
          filterRet = await (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).filterRooms(testData.playerToken1, {
            roomType: 'test',
            roomNameLike: 'name'
          }, 1, 2);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.succ, filterRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(filterRet.data.rooms.length === 1, `应该匹配到1个,实际为${JSON.stringify(filterRet)}`);
        });
        test('随机要求玩家同步状态', async function () {
          const invMs = 1000;
          let gameClient1Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, testData.playerId1, 'zum1', {
            maxPlayers: 2,
            isPrivate: true,
            roomType: 'test',
            roomName: 'name',
            randomRequirePlayerSyncStateInvMs: invMs
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1Ret.succ, gameClient1Ret.err);
          testData.gameClient1 = gameClient1Ret.data.gameClient;
          let prevTime = 0;
          let hasMatch = false;
          let rtUseTime = 0;

          testData.gameClient1.onRequirePlayerSyncState = () => {
            rtUseTime = Date.now() - prevTime;

            if (Math.abs(invMs - rtUseTime) < 200) {
              // 误差200ms内算符合预期
              hasMatch = true;
            } else {
              hasMatch = false;
            }

            prevTime = Date.now();
          };

          let ret = await testData.gameClient1.startFrameSync();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(ret.succ, ret.err);
          prevTime = Date.now();
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(invMs + 1000);
          console.log('【要求玩家同步全量数据】实际花了：', rtUseTime);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(hasMatch, '没收到预期的【要求玩家同步全量数据】的请求');
          let gameClient2Ret = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken2, testData.playerId2, 'zum2', {
            maxPlayers: 2,
            isPrivate: true,
            roomType: 'test',
            roomName: 'name'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient2Ret.succ, gameClient2Ret.err);
          testData.gameClient2 = gameClient2Ret.data.gameClient;
          let hasReqStateMsg = false;

          testData.gameClient2.onRequirePlayerSyncState = () => {
            //不应该收到消息，有收到就算匹配了
            hasReqStateMsg = true;
          };

          ret = await testData.gameClient2.startFrameSync();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(ret.succ, ret.err);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(1000);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!hasReqStateMsg, '收到预期外的【要求玩家同步全量数据】的请求');
        });
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=784dc19390bc53e8462ff098a971ae4f7d4ad378.js.map