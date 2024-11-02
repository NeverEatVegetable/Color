System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "chai", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, initGame, assert, ERoomMsgRecvType, delay, MatcherKeys, logger, ErrorCodes, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        test('3个玩家组队发消息', /*#__PURE__*/_asyncToGenerator(function* () {
          var initRet1 = yield (_crd && initGame === void 0 ? (_reportPossibleCrUseOfinitGame({
            error: Error()
          }), initGame) : initGame)('3个玩家组队发消息_z1', 'z1');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(initRet1.succ, initRet1.err);
          var z1SDK = initRet1.data;
          var initRet2 = yield (_crd && initGame === void 0 ? (_reportPossibleCrUseOfinitGame({
            error: Error()
          }), initGame) : initGame)('3个玩家组队发消息_z2', 'z2');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(initRet2.succ, initRet2.err);
          var z2SDK = initRet2.data;
          var initRet3 = yield (_crd && initGame === void 0 ? (_reportPossibleCrUseOfinitGame({
            error: Error()
          }), initGame) : initGame)('3个玩家组队发消息_z3', 'z3');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(initRet3.succ, initRet3.err);
          var z3SDK = initRet3.data;
          var gMsgCount = 0,
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
          var gPJoin = 0,
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
          var gDismiss = 0,
              rDismiss = 0;
          z1SDK.group.events.onDismissGroupRoom(msg => gDismiss++);
          z2SDK.group.events.onDismissGroupRoom(msg => gDismiss++);
          z3SDK.group.events.onDismissGroupRoom(msg => gDismiss++);
          z1SDK.room.events.onDismissRoom(msg => rDismiss++);
          z2SDK.room.events.onDismissRoom(msg => rDismiss++);
          z3SDK.room.events.onDismissRoom(msg => rDismiss++);
          gMsgCount = 0, rMsgCount = 0, gJoinCount = 0, rJoinCount = 0, gLeaveCount = 0, rLeaveCount = 0;
          var cRet = yield z1SDK.group.createGroup({});
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(cRet.succ, cRet.err);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(50);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gJoinCount === 1, "\u73A9\u5BB6\u521B\u5EFA\u7EC4\u961F,\u5E94\u8BE5\u6536\u52301\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + gJoinCount + "," + rJoinCount);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rJoinCount === 0, "\u5E94\u8BE5\u6536\u52300\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + rJoinCount);
          gMsgCount = 0, rMsgCount = 0, gJoinCount = 0, rJoinCount = 0, gLeaveCount = 0, rLeaveCount = 0;
          gPJoin = 0, rPJoin = 0, gPLeave = 0, rPLeave = 0;
          var joinRet = yield z2SDK.group.joinGroup({}, cRet.data);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRet.succ, joinRet.err);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(50);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gJoinCount === 1, "\u73A9\u5BB62\u52A0\u5165\u7EC4\u961F\u540E,\u5E94\u8BE5\u6536\u52301\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + gJoinCount);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rJoinCount === 0, "\u5E94\u8BE5\u6536\u52300\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + rJoinCount);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gPJoin === 1, "\u5E94\u8BE5\u6536\u52301\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + gPJoin);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rPJoin === 0, "\u5E94\u8BE5\u6536\u52300\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + rPJoin);
          gMsgCount = 0, rMsgCount = 0, gJoinCount = 0, rJoinCount = 0, gLeaveCount = 0, rLeaveCount = 0;
          var sendRet = yield z1SDK.group.sendGroupMsg({
            recvType: (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
              error: Error()
            }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_ALL,
            msg: 'test'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(sendRet.succ, sendRet.err);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(100);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gMsgCount === 2, "\u5E94\u8BE5\u6536\u52302\u6761\u81EA\u5B9A\u4E49\u6D88\u606F, \u5B9E\u9645\u4E3A" + gMsgCount);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rMsgCount === 0, "\u5E94\u8BE5\u6536\u52300\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + rMsgCount);
          gMsgCount = rMsgCount = 0;
          sendRet = yield z1SDK.room.sendRoomMsg({
            recvType: (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
              error: Error()
            }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_ALL,
            msg: 'test'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(sendRet.succ, sendRet.err);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(100);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gMsgCount === 2, "\u5E94\u8BE5\u6536\u52302\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + gMsgCount);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rMsgCount === 0, "\u5E94\u8BE5\u6536\u52300\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + rMsgCount);
          gMsgCount = 0, rMsgCount = 0, gJoinCount = 0, rJoinCount = 0, gLeaveCount = 0, rLeaveCount = 0;
          gPJoin = 0, rPJoin = 0, gPLeave = 0, rPLeave = 0;
          joinRet = yield z3SDK.group.joinGroup({}, cRet.data);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRet.succ, joinRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gJoinCount === 1, "\u5E94\u8BE5\u6536\u52301\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + gJoinCount);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rJoinCount === 0, "\u5E94\u8BE5\u6536\u52300\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + rJoinCount);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gPJoin === 2, "\u5E94\u8BE5\u6536\u52302\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + gPJoin);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rPJoin === 0, "\u5E94\u8BE5\u6536\u52300\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + rPJoin);
          gMsgCount = rMsgCount = 0;
          sendRet = yield z1SDK.group.sendGroupMsg({
            recvType: (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
              error: Error()
            }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_ALL,
            msg: 'test'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(sendRet.succ, sendRet.err);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(100);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gMsgCount === 3, "\u5E94\u8BE5\u6536\u52303\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + gMsgCount);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rMsgCount === 0, "\u5E94\u8BE5\u6536\u52300\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + rMsgCount);
          gMsgCount = rMsgCount = 0;
          sendRet = yield z1SDK.group.sendGroupMsg({
            recvType: (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
              error: Error()
            }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_OTHERS,
            msg: 'test'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(sendRet.succ, sendRet.err);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(50);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gMsgCount === 2, "\u5E94\u8BE5\u6536\u52302\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + gMsgCount);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rMsgCount === 0, "\u5E94\u8BE5\u6536\u52300\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + rMsgCount);
          gMsgCount = rMsgCount = 0;
          sendRet = yield z1SDK.group.sendGroupMsg({
            recvType: (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
              error: Error()
            }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_SOME,
            recvPlayerList: [z2SDK.game.__myPlayerId],
            msg: 'test'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(sendRet.succ, sendRet.err);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(50);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gMsgCount === 1, "\u5E94\u8BE5\u6536\u52301\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + gMsgCount);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rMsgCount === 0, "\u5E94\u8BE5\u6536\u52300\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + rMsgCount);
          gLeaveCount = 0, rLeaveCount = 0;
          gPLeave = 0, rPLeave = 0;
          var leaveRet = yield z2SDK.group.leaveGroup();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(leaveRet.succ, leaveRet.err);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(50);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gPLeave === 2, "\u5E94\u8BE5\u6536\u52302\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + gPLeave);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rPLeave === 0, "\u5E94\u8BE5\u6536\u52300\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + rPLeave);
          gDismiss = 0, rDismiss = 0;
          var dismissRet = yield z1SDK.group.dismissGroup();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(dismissRet.succ, dismissRet.err);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(50);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gDismiss === 1, "\u5E94\u8BE5\u6536\u52301\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + gDismiss);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rDismiss === 0, "\u5E94\u8BE5\u6536\u52300\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + rDismiss);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gLeaveCount === 3, "\u5E94\u8BE5\u6536\u52303\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + gLeaveCount);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rLeaveCount === 0, "\u5E94\u8BE5\u6536\u52300\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + rLeaveCount); //下面进房间再测试一次

          gJoinCount = 0, rJoinCount = 0;
          gPJoin = 0, rPJoin = 0;
          var createRoomRet = yield z1SDK.room.createRoom({}, {
            isPrivate: true,
            roomName: 'test',
            maxPlayers: 3,
            ownerPlayerId: z1SDK.game.__myPlayerId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(createRoomRet.succ, createRoomRet.err);
          var joinRoomRet = yield z2SDK.room.joinRoom({}, {
            roomId: createRoomRet.data.roomId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRoomRet.succ, joinRoomRet.err);
          joinRoomRet = yield z3SDK.room.joinRoom({}, {
            roomId: createRoomRet.data.roomId
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRoomRet.succ, joinRoomRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gPJoin === 0, "\u5E94\u8BE5\u6536\u52300\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + gPJoin);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rPJoin === 3, "\u5E94\u8BE5\u6536\u52301+2\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + rPJoin);
          sendRet = yield z1SDK.group.sendGroupMsg({
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
          sendRet = yield z1SDK.room.sendRoomMsg({
            recvType: (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
              error: Error()
            }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_ALL,
            msg: 'test'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(sendRet.succ, sendRet.err);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(50);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gMsgCount === 0, "\u5E94\u8BE5\u6536\u52300\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + gMsgCount);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(rMsgCount === 3, "\u5E94\u8BE5\u6536\u52303\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + rMsgCount);
          yield z1SDK.dispose();
          yield z2SDK.dispose();
          yield z3SDK.dispose();
        }), 600000);
        test('3个玩家组队匹配进房间后再回到组队', /*#__PURE__*/_asyncToGenerator(function* () {
          var initRet1 = yield (_crd && initGame === void 0 ? (_reportPossibleCrUseOfinitGame({
            error: Error()
          }), initGame) : initGame)('3个玩家组队匹配进房间后再回到组队_z1', 'z1');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(initRet1.succ, initRet1.err);
          var z1SDK = initRet1.data;
          var initRet2 = yield (_crd && initGame === void 0 ? (_reportPossibleCrUseOfinitGame({
            error: Error()
          }), initGame) : initGame)('3个玩家组队匹配进房间后再回到组队_z2', 'z2');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(initRet2.succ, initRet2.err);
          var z2SDK = initRet2.data;
          var initRet3 = yield (_crd && initGame === void 0 ? (_reportPossibleCrUseOfinitGame({
            error: Error()
          }), initGame) : initGame)('3个玩家组队匹配进房间后再回到组队_z3', 'z3');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(initRet3.succ, initRet3.err);
          var z3SDK = initRet3.data;
          var cRet = yield z1SDK.group.createGroup({});
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(cRet.succ, cRet.err);
          var joinRet = yield z2SDK.group.joinGroup({}, cRet.data);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRet.succ, joinRet.err);
          joinRet = yield z3SDK.group.joinGroup({}, cRet.data);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRet.succ, joinRet.err);
          var startM = 0,
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
          var reqMatchRet = yield z1SDK.group.requestMatch({
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
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(500);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(startM === 3, "\u5E94\u8BE5\u6536\u52303\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + startM);
          var cancelRet = yield z1SDK.group.cancelMatch();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(cancelRet.succ, cancelRet.err);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(500);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(cancelM === 3, "\u5E94\u8BE5\u6536\u52303\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + cancelM);
          var msgCount = 0;
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
          reqMatchRet = yield z1SDK.group.requestMatch({
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
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(500);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 3, "\u5E94\u8BE5\u6536\u52303\u6761\u6D88\u606F, \u5B9E\u9645\u4E3A" + msgCount);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z1SDK.group.currGroupRoom === null, "\u5E94\u8BE5\u4E0D\u5728\u7EC4\u961F\u623F\u95F4\u4E2D\u4E86!\u5B9E\u9645\u8FD8\u5728");
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z2SDK.group.currGroupRoom === null, "\u5E94\u8BE5\u4E0D\u5728\u7EC4\u961F\u623F\u95F4\u4E2D\u4E86!\u5B9E\u9645\u8FD8\u5728");
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z3SDK.group.currGroupRoom === null, "\u5E94\u8BE5\u4E0D\u5728\u7EC4\u961F\u623F\u95F4\u4E2D\u4E86!\u5B9E\u9645\u8FD8\u5728");
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z1SDK.room.currRoomInfo !== null, "\u5E94\u8BE5\u5728\u5339\u914D\u623F\u95F4\u4E2D\u4E86!\u5B9E\u9645\u4E0D\u5728");
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z2SDK.room.currRoomInfo !== null, "\u5E94\u8BE5\u5728\u5339\u914D\u623F\u95F4\u4E2D\u4E86!\u5B9E\u9645\u4E0D\u5728");
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z3SDK.room.currRoomInfo !== null, "\u5E94\u8BE5\u5728\u5339\u914D\u623F\u95F4\u4E2D\u4E86!\u5B9E\u9645\u4E0D\u5728");
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200);
          var backRet = yield z1SDK.group.backGroup();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(backRet.succ, backRet.err);
          backRet = yield z2SDK.group.backGroup();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(backRet.succ, backRet.err);
          backRet = yield z3SDK.group.backGroup();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(backRet.succ, backRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z1SDK.group.currGroupRoom !== null, "\u5E94\u8BE5\u5728\u7EC4\u961F\u623F\u95F4\u4E2D\u4E86!\u5B9E\u9645\u4E0D\u5728");
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z2SDK.group.currGroupRoom !== null, "\u5E94\u8BE5\u5728\u7EC4\u961F\u623F\u95F4\u4E2D\u4E86!\u5B9E\u9645\u4E0D\u5728");
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z3SDK.group.currGroupRoom !== null, "\u5E94\u8BE5\u5728\u7EC4\u961F\u623F\u95F4\u4E2D\u4E86!\u5B9E\u9645\u4E0D\u5728");
          yield z1SDK.dispose();
          yield z2SDK.dispose();
          yield z3SDK.dispose();
        }), 600000);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=55303d2b4beda192db3cd9c000977c21bb913e01.js.map