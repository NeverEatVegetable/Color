System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "chai"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, initGame, assert, _crd;

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
        test('获取房间在线信息', async function () {
          let initRet1 = await (_crd && initGame === void 0 ? (_reportPossibleCrUseOfinitGame({
            error: Error()
          }), initGame) : initGame)('获取房间在线信息_z1', 'z1');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(initRet1.succ, initRet1.err);
          let z1SDK = initRet1.data;
          let initRet2 = await (_crd && initGame === void 0 ? (_reportPossibleCrUseOfinitGame({
            error: Error()
          }), initGame) : initGame)('获取房间在线信息_z2', 'z2');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(initRet2.succ, initRet2.err);
          let z2SDK = initRet2.data;
          let z1CreateRet = await z1SDK.room.createRoom({}, {
            roomName: 'test',
            maxPlayers: 2,
            ownerPlayerId: initRet1.data.playerId,
            isPrivate: true
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z1CreateRet.succ, z1CreateRet.err);
          let getRet = await z2SDK.room.getOnlineRoomInfo(z1CreateRet.data.roomId);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(getRet.succ, getRet.err);
          await z1SDK.dispose();
          await z2SDK.dispose();
        }, 600000);
        test('筛选房间', async function () {
          let initRet1 = await (_crd && initGame === void 0 ? (_reportPossibleCrUseOfinitGame({
            error: Error()
          }), initGame) : initGame)('筛选房间_z1', 'z1');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(initRet1.succ, initRet1.err);
          let z1SDK = initRet1.data;
          let initRet2 = await (_crd && initGame === void 0 ? (_reportPossibleCrUseOfinitGame({
            error: Error()
          }), initGame) : initGame)('筛选房间_z2', 'z2');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(initRet2.succ, initRet2.err);
          let z2SDK = initRet2.data;
          let z1CreateRet = await z1SDK.room.createRoom({}, {
            roomName: 'test',
            maxPlayers: 2,
            ownerPlayerId: initRet1.data.playerId,
            isPrivate: true
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(z1CreateRet.succ, z1CreateRet.err);
          let getRet = await z2SDK.room.filterRooms({
            roomNameFullMatch: 'test'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(getRet.succ, getRet.err);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(getRet.data.rooms.length === 1, '应该匹配到1个');
          await z1SDK.dispose();
          await z2SDK.dispose();
        }, 600000);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cec01f0173221540a00959ee41956b49f481951c.js.map