System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "chai"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, initGame, assert, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfinitGame(extras) {
    _reporterNs.report("initGame", "./TestUnit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfassert(extras) {
    _reporterNs.report("assert", "chai", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b9733yVvQNC2KnzvF+dZpAs", "Room.test", undefined);

      describe("房间", () => {
        test('获取房间在线信息', /*#__PURE__*/_asyncToGenerator(function* () {
          var initRet1 = yield (_crd && initGame === void 0 ? (_reportPossibleCrUseOfinitGame({
            error: Error()
          }), initGame) : initGame)('获取房间在线信息_z1', 'z1');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(initRet1.succ, initRet1.err);
          var z1SDK = initRet1.data;
          var initRet2 = yield (_crd && initGame === void 0 ? (_reportPossibleCrUseOfinitGame({
            error: Error()
          }), initGame) : initGame)('获取房间在线信息_z2', 'z2');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(initRet2.succ, initRet2.err);
          var z2SDK = initRet2.data;
          var z1CreateRet = yield z1SDK.room.createRoom({}, {
            roomName: 'test',
            maxPlayers: 2,
            ownerPlayerId: initRet1.data.playerId,
            isPrivate: true
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z1CreateRet.succ, z1CreateRet.err);
          var getRet = yield z2SDK.room.getOnlineRoomInfo(z1CreateRet.data.roomId);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(getRet.succ, getRet.err);
          yield z1SDK.dispose();
          yield z2SDK.dispose();
        }), 600000);
        test('筛选房间', /*#__PURE__*/_asyncToGenerator(function* () {
          var initRet1 = yield (_crd && initGame === void 0 ? (_reportPossibleCrUseOfinitGame({
            error: Error()
          }), initGame) : initGame)('筛选房间_z1', 'z1');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(initRet1.succ, initRet1.err);
          var z1SDK = initRet1.data;
          var initRet2 = yield (_crd && initGame === void 0 ? (_reportPossibleCrUseOfinitGame({
            error: Error()
          }), initGame) : initGame)('筛选房间_z2', 'z2');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(initRet2.succ, initRet2.err);
          var z2SDK = initRet2.data;
          var z1CreateRet = yield z1SDK.room.createRoom({}, {
            roomName: 'test',
            maxPlayers: 2,
            ownerPlayerId: initRet1.data.playerId,
            isPrivate: true
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z1CreateRet.succ, z1CreateRet.err);
          var getRet = yield z2SDK.room.filterRooms({
            roomNameFullMatch: 'test'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(getRet.succ, getRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(getRet.data.rooms.length === 1, '应该匹配到1个');
          yield z1SDK.dispose();
          yield z2SDK.dispose();
        }), 600000);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cec01f0173221540a00959ee41956b49f481951c.js.map