System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "chai", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, initGame, assert, ERoomMsgRecvType, delay, MatcherKeys, logger, ErrorCodes, _crd;

  function _reportPossibleCrUseOfinitGame(extras) {
    _reporterNs.report("initGame", "./TestUnit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfassert(extras) {
    _reporterNs.report("assert", "chai", _context.meta, extras);
  }

  function _reportPossibleCrUseOfERoomMsgRecvType(extras) {
    _reporterNs.report("ERoomMsgRecvType", "../../src/tsgf/room/IRoomMsg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../../src/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISingleMatcherParams(extras) {
    _reporterNs.report("ISingleMatcherParams", "../../src/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatcherKeys(extras) {
    _reporterNs.report("MatcherKeys", "../../src/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOflogger(extras) {
    _reporterNs.report("logger", "../../src/tsgf/logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../src/tsgf/Result", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {}, function (_unresolved_3) {
      initGame = _unresolved_3.initGame;
    }, function (_chai) {
      assert = _chai.assert;
    }, function (_unresolved_4) {
      ERoomMsgRecvType = _unresolved_4.ERoomMsgRecvType;
    }, function (_unresolved_5) {
      delay = _unresolved_5.delay;
    }, function (_unresolved_6) {
      MatcherKeys = _unresolved_6.MatcherKeys;
    }, function (_unresolved_7) {
      logger = _unresolved_7.logger;
    }, function (_unresolved_8) {
      ErrorCodes = _unresolved_8.ErrorCodes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "43bc03UPKlEDIdHHhvazLsa", "GroupRoom.test", undefined);

      describe("组队房间", () => {
        test('3个玩家组队发消息', async function () {
          let initRet1 = await (_crd && initGame === void 0 ? (_reportPossibleCrUseOfinitGame({
            error: Error()
          }), initGame) : initGame)('3个玩家组队发消息_z1', 'z1');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(initRet1.succ, initRet1.err);
          let z1SDK = initRet1.data;
          let initRet2 = await (_crd && initGame === void 0 ? (_reportPossibleCrUseOfinitGame({
            error: Error()
          }), initGame) : initGame)('3个玩家组队发消息_z2', 'z2');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(initRet2.succ, initRet2.err);
          let z2SDK = initRet2.data;
          let initRet3 = await (_crd && initGame === void 0 ? (_reportPossibleCrUseOfinitGame({
            error: Error()
          }), initGame) : initGame)('3个玩家组队发消息_z3', 'z3');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(initRet3.succ, initRet3.err);
          let z3SDK = initRet3.data;
          let gMsgCount = 0,
              rMsgCount = 0,
              gJoinCount = 0,
              rJoinCount = 0,
              gLeaveCount = 0,
              rLeaveCount = 0;
          z1SDK.group.events.onRecvGroupMsg(msg => gMsgCount++);
          z2SDK.group.events.onRecvGroupMsg(msg => gMsgCount++);
          z3SDK.group.events.onRecvGroupMsg(msg => gMsgCount++);
          z1SDK.room.events.onRecvRoomMsg(msg => rMsgCount++);
          z2SDK.room.events.onRecvRoomMsg(msg => rMsgCount++);
          z3SDK.room.events.onRecvRoomMsg(msg => rMsgCount++);
          z1SDK.group.events.onJoinGroup(msg => gJoinCount++);
          z2SDK.group.events.onJoinGroup(msg => gJoinCount++);
          z3SDK.group.events.onJoinGroup(msg => gJoinCount++);
          z1SDK.room.events.onJoinRoom(msg => rJoinCount++);
          z2SDK.room.events.onJoinRoom(msg => rJoinCount++);
          z3SDK.room.events.onJoinRoom(msg => rJoinCount++);
          z1SDK.group.events.onLeaveGroup(msg => gLeaveCount++);
          z2SDK.group.events.onLeaveGroup(msg => gLeaveCount++);
          z3SDK.group.events.onLeaveGroup(msg => gLeaveCount++);
          z1SDK.room.events.onLeaveRoom(msg => rLeaveCount++);
          z2SDK.room.events.onLeaveRoom(msg => rLeaveCount++);
          z3SDK.room.events.onLeaveRoom(msg => rLeaveCount++);
          let gPJoin = 0,
              rPJoin = 0,
              gPLeave = 0,
              rPLeave = 0;
          z1SDK.group.events.onPlayerJoinGroup(msg => gPJoin++);
          z2SDK.group.events.onPlayerJoinGroup(msg => gPJoin++);
          z3SDK.group.events.onPlayerJoinGroup(msg => gPJoin++);
          z1SDK.room.events.onPlayerJoinRoom(msg => rPJoin++);
          z2SDK.room.events.onPlayerJoinRoom(msg => rPJoin++);
          z3SDK.room.events.onPlayerJoinRoom(msg => rPJoin++);
          z1SDK.group.events.onPlayerLeaveGroup(msg => gPLeave++);
          z2SDK.group.events.onPlayerLeaveGroup(msg => gPLeave++);
          z3SDK.group.events.onPlayerLeaveGroup(msg => gPLeave++);
          z1SDK.room.events.onPlayerLeaveRoom(msg => rPLeave++);
          z2SDK.room.events.onPlayerLeaveRoom(msg => rPLeave++);
          z3SDK.room.events.onPlayerLeaveRoom(msg => rPLeave++);
          let gDismiss = 0,
              rDismiss = 0;
          z1SDK.group.events.onDismissGroupRoom(msg => gDismiss++);
          z2SDK.group.events.onDismissGroupRoom(msg => gDismiss++);
          z3SDK.group.events.onDismissGroupRoom(msg => gDismiss++);
          z1SDK.room.events.onDismissRoom(msg => rDismiss++);
          z2SDK.room.events.onDismissRoom(msg => rDismiss++);
          z3SDK.room.events.onDismissRoom(msg => rDismiss++);
          gMsgCount = 0, rMsgCount = 0, gJoinCount = 0, rJoinCount = 0, gLeaveCount = 0, rLeaveCount = 0;
          let cRet = await z1SDK.group.createGroup({});
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(cRet.succ, cRet.err);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(50);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gJoinCount === 1, `玩家创建组队,应该收到1条消息, 实际为${gJoinCount},${rJoinCount}`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rJoinCount === 0, `应该收到0条消息, 实际为${rJoinCount}`);
          gMsgCount = 0, rMsgCount = 0, gJoinCount = 0, rJoinCount = 0, gLeaveCount = 0, rLeaveCount = 0;
          gPJoin = 0, rPJoin = 0, gPLeave = 0, rPLeave = 0;
          let joinRet = await z2SDK.group.joinGroup({}, cRet.data);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRet.succ, joinRet.err);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(50);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gJoinCount === 1, `玩家2加入组队后,应该收到1条消息, 实际为${gJoinCount}`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rJoinCount === 0, `应该收到0条消息, 实际为${rJoinCount}`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gPJoin === 1, `应该收到1条消息, 实际为${gPJoin}`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rPJoin === 0, `应该收到0条消息, 实际为${rPJoin}`);
          gMsgCount = 0, rMsgCount = 0, gJoinCount = 0, rJoinCount = 0, gLeaveCount = 0, rLeaveCount = 0;
          let sendRet = await z1SDK.group.sendGroupMsg({
            recvType: (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
              error: Error()
            }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_ALL,
            msg: 'test'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(sendRet.succ, sendRet.err);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(100);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gMsgCount === 2, `应该收到2条自定义消息, 实际为${gMsgCount}`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rMsgCount === 0, `应该收到0条消息, 实际为${rMsgCount}`);
          gMsgCount = rMsgCount = 0;
          sendRet = await z1SDK.room.sendRoomMsg({
            recvType: (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
              error: Error()
            }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_ALL,
            msg: 'test'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(sendRet.succ, sendRet.err);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(100);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gMsgCount === 2, `应该收到2条消息, 实际为${gMsgCount}`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rMsgCount === 0, `应该收到0条消息, 实际为${rMsgCount}`);
          gMsgCount = 0, rMsgCount = 0, gJoinCount = 0, rJoinCount = 0, gLeaveCount = 0, rLeaveCount = 0;
          gPJoin = 0, rPJoin = 0, gPLeave = 0, rPLeave = 0;
          joinRet = await z3SDK.group.joinGroup({}, cRet.data);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRet.succ, joinRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gJoinCount === 1, `应该收到1条消息, 实际为${gJoinCount}`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rJoinCount === 0, `应该收到0条消息, 实际为${rJoinCount}`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gPJoin === 2, `应该收到2条消息, 实际为${gPJoin}`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rPJoin === 0, `应该收到0条消息, 实际为${rPJoin}`);
          gMsgCount = rMsgCount = 0;
          sendRet = await z1SDK.group.sendGroupMsg({
            recvType: (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
              error: Error()
            }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_ALL,
            msg: 'test'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(sendRet.succ, sendRet.err);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(100);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gMsgCount === 3, `应该收到3条消息, 实际为${gMsgCount}`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rMsgCount === 0, `应该收到0条消息, 实际为${rMsgCount}`);
          gMsgCount = rMsgCount = 0;
          sendRet = await z1SDK.group.sendGroupMsg({
            recvType: (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
              error: Error()
            }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_OTHERS,
            msg: 'test'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(sendRet.succ, sendRet.err);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(50);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gMsgCount === 2, `应该收到2条消息, 实际为${gMsgCount}`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rMsgCount === 0, `应该收到0条消息, 实际为${rMsgCount}`);
          gMsgCount = rMsgCount = 0;
          sendRet = await z1SDK.group.sendGroupMsg({
            recvType: (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
              error: Error()
            }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_SOME,
            recvPlayerList: [z2SDK.game.__myPlayerId],
            msg: 'test'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(sendRet.succ, sendRet.err);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(50);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gMsgCount === 1, `应该收到1条消息, 实际为${gMsgCount}`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rMsgCount === 0, `应该收到0条消息, 实际为${rMsgCount}`);
          gLeaveCount = 0, rLeaveCount = 0;
          gPLeave = 0, rPLeave = 0;
          let leaveRet = await z2SDK.group.leaveGroup();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(leaveRet.succ, leaveRet.err);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(50);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gPLeave === 2, `应该收到2条消息, 实际为${gPLeave}`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rPLeave === 0, `应该收到0条消息, 实际为${rPLeave}`);
          gDismiss = 0, rDismiss = 0;
          let dismissRet = await z1SDK.group.dismissGroup();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(dismissRet.succ, dismissRet.err);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(50);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gDismiss === 1, `应该收到1条消息, 实际为${gDismiss}`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rDismiss === 0, `应该收到0条消息, 实际为${rDismiss}`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gLeaveCount === 3, `应该收到3条消息, 实际为${gLeaveCount}`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rLeaveCount === 0, `应该收到0条消息, 实际为${rLeaveCount}`); //下面进房间再测试一次

          gJoinCount = 0, rJoinCount = 0;
          gPJoin = 0, rPJoin = 0;
          let createRoomRet = await z1SDK.room.createRoom({}, {
            isPrivate: true,
            roomName: 'test',
            maxPlayers: 3,
            ownerPlayerId: z1SDK.game.__myPlayerId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(createRoomRet.succ, createRoomRet.err);
          let joinRoomRet = await z2SDK.room.joinRoom({}, {
            roomId: createRoomRet.data.roomId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRoomRet.succ, joinRoomRet.err);
          joinRoomRet = await z3SDK.room.joinRoom({}, {
            roomId: createRoomRet.data.roomId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRoomRet.succ, joinRoomRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gPJoin === 0, `应该收到0条消息, 实际为${gPJoin}`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rPJoin === 3, `应该收到1+2条消息, 实际为${rPJoin}`);
          sendRet = await z1SDK.group.sendGroupMsg({
            recvType: (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
              error: Error()
            }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_ALL,
            msg: 'test'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(sendRet.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNotIn, '应该提示不在组队房间!');
          gMsgCount = rMsgCount = 0;
          sendRet = await z1SDK.room.sendRoomMsg({
            recvType: (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
              error: Error()
            }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_ALL,
            msg: 'test'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(sendRet.succ, sendRet.err);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(50);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gMsgCount === 0, `应该收到0条消息, 实际为${gMsgCount}`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rMsgCount === 3, `应该收到3条消息, 实际为${rMsgCount}`);
          await z1SDK.dispose();
          await z2SDK.dispose();
          await z3SDK.dispose();
        }, 600000);
        test('3个玩家组队匹配进房间后再回到组队', async function () {
          let initRet1 = await (_crd && initGame === void 0 ? (_reportPossibleCrUseOfinitGame({
            error: Error()
          }), initGame) : initGame)('3个玩家组队匹配进房间后再回到组队_z1', 'z1');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(initRet1.succ, initRet1.err);
          let z1SDK = initRet1.data;
          let initRet2 = await (_crd && initGame === void 0 ? (_reportPossibleCrUseOfinitGame({
            error: Error()
          }), initGame) : initGame)('3个玩家组队匹配进房间后再回到组队_z2', 'z2');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(initRet2.succ, initRet2.err);
          let z2SDK = initRet2.data;
          let initRet3 = await (_crd && initGame === void 0 ? (_reportPossibleCrUseOfinitGame({
            error: Error()
          }), initGame) : initGame)('3个玩家组队匹配进房间后再回到组队_z3', 'z3');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(initRet3.succ, initRet3.err);
          let z3SDK = initRet3.data;
          let cRet = await z1SDK.group.createGroup({});
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(cRet.succ, cRet.err);
          let joinRet = await z2SDK.group.joinGroup({}, cRet.data);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRet.succ, joinRet.err);
          joinRet = await z3SDK.group.joinGroup({}, cRet.data);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRet.succ, joinRet.err);
          let startM = 0,
              cancelM = 0;
          z1SDK.group.events.onGroupMatchStart(() => startM++);
          z2SDK.group.events.onGroupMatchStart(() => startM++);
          z3SDK.group.events.onGroupMatchStart(() => startM++);
          z1SDK.group.events.onGroupMatchResult((errMsg, errCode, ret) => {
            if (errCode === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).MatchRequestCancelled) cancelM++;
          });
          z2SDK.group.events.onGroupMatchResult((errMsg, errCode, ret) => {
            if (errCode === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).MatchRequestCancelled) cancelM++;
          });
          z3SDK.group.events.onGroupMatchResult((errMsg, errCode, ret) => {
            if (errCode === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).MatchRequestCancelled) cancelM++;
          });
          let reqMatchRet = await z1SDK.group.requestMatch({
            matchType: 'test_请求一个暂时不会有结果的,用来测试取消',
            matcherKey: (_crd && MatcherKeys === void 0 ? (_reportPossibleCrUseOfMatcherKeys({
              error: Error()
            }), MatcherKeys) : MatcherKeys).Single,
            matcherParams: {
              minPlayers: 4
            },
            maxPlayers: 4
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(reqMatchRet.succ, reqMatchRet.err);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(500);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(startM === 3, `应该收到3条消息, 实际为${startM}`);
          let cancelRet = await z1SDK.group.cancelMatch();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(cancelRet.succ, cancelRet.err);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(500);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(cancelM === 3, `应该收到3条消息, 实际为${cancelM}`);
          let msgCount = 0;
          z1SDK.group.events.onGroupMatchEnterRoom(ret => {
            if (ret.succ) msgCount++;else (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger).error('z1进入匹配房间失败:', ret);
          });
          z2SDK.group.events.onGroupMatchEnterRoom(ret => {
            if (ret.succ) msgCount++;else (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger).error('z2进入匹配房间失败:', ret);
          });
          z3SDK.group.events.onGroupMatchEnterRoom(ret => {
            if (ret.succ) msgCount++;else (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger).error('z3进入匹配房间失败:', ret);
          });
          reqMatchRet = await z1SDK.group.requestMatch({
            matchType: 'test_3个玩家组队匹配进房间后再回到组队',
            matcherKey: (_crd && MatcherKeys === void 0 ? (_reportPossibleCrUseOfMatcherKeys({
              error: Error()
            }), MatcherKeys) : MatcherKeys).Single,
            matcherParams: {
              minPlayers: 3
            },
            maxPlayers: 3
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(reqMatchRet.succ, reqMatchRet.err);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(500);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 3, `应该收到3条消息, 实际为${msgCount}`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z1SDK.group.currGroupRoom === null, `应该不在组队房间中了!实际还在`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z2SDK.group.currGroupRoom === null, `应该不在组队房间中了!实际还在`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z3SDK.group.currGroupRoom === null, `应该不在组队房间中了!实际还在`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z1SDK.room.currRoomInfo !== null, `应该在匹配房间中了!实际不在`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z2SDK.room.currRoomInfo !== null, `应该在匹配房间中了!实际不在`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z3SDK.room.currRoomInfo !== null, `应该在匹配房间中了!实际不在`);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200);
          let backRet = await z1SDK.group.backGroup();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(backRet.succ, backRet.err);
          backRet = await z2SDK.group.backGroup();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(backRet.succ, backRet.err);
          backRet = await z3SDK.group.backGroup();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(backRet.succ, backRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z1SDK.group.currGroupRoom !== null, `应该在组队房间中了!实际不在`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z2SDK.group.currGroupRoom !== null, `应该在组队房间中了!实际不在`);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z3SDK.group.currGroupRoom !== null, `应该在组队房间中了!实际不在`);
          await z1SDK.dispose();
          await z2SDK.dispose();
          await z3SDK.dispose();
        }, 600000);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=55303d2b4beda192db3cd9c000977c21bb913e01.js.map