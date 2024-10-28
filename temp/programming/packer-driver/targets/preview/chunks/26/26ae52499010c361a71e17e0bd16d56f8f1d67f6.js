System.register(["__unresolved_0", "cc", "__unresolved_1", "chai", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, delay, assert, cancelMatch, createAndEnterRoom, hallClient, joinRoom, joinRoomUseGameServer, queryMatch, requestMatchOneSingle, testEachBuild, ERoomMsgRecvType, EMatchFromType, MatcherKeys, ErrorCodes, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../../../src/shared/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfassert(extras) {
    _reporterNs.report("assert", "chai", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcancelMatch(extras) {
    _reporterNs.report("cancelMatch", "./ApiUtils", _context.meta, extras);
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

  function _reportPossibleCrUseOfjoinRoomUseGameServer(extras) {
    _reporterNs.report("joinRoomUseGameServer", "./ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfqueryMatch(extras) {
    _reporterNs.report("queryMatch", "./ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrequestMatchOneSingle(extras) {
    _reporterNs.report("requestMatchOneSingle", "./ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOftestEachBuild(extras) {
    _reporterNs.report("testEachBuild", "./ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfERoomMsgRecvType(extras) {
    _reporterNs.report("ERoomMsgRecvType", "../../../src/shared/tsgf/room/IRoomMsg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEMatchFromType(extras) {
    _reporterNs.report("EMatchFromType", "../../../src/shared/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchPlayerResultWithServer(extras) {
    _reporterNs.report("IMatchPlayerResultWithServer", "../../../src/shared/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISingleMatcherParams(extras) {
    _reporterNs.report("ISingleMatcherParams", "../../../src/shared/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatcherKeys(extras) {
    _reporterNs.report("MatcherKeys", "../../../src/shared/tsgf/match/Models", _context.meta, extras);
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
      cancelMatch = _unresolved_3.cancelMatch;
      createAndEnterRoom = _unresolved_3.createAndEnterRoom;
      hallClient = _unresolved_3.hallClient;
      joinRoom = _unresolved_3.joinRoom;
      joinRoomUseGameServer = _unresolved_3.joinRoomUseGameServer;
      queryMatch = _unresolved_3.queryMatch;
      requestMatchOneSingle = _unresolved_3.requestMatchOneSingle;
      testEachBuild = _unresolved_3.testEachBuild;
    }, function (_unresolved_4) {
      ERoomMsgRecvType = _unresolved_4.ERoomMsgRecvType;
    }, function (_unresolved_5) {
      EMatchFromType = _unresolved_5.EMatchFromType;
      MatcherKeys = _unresolved_5.MatcherKeys;
    }, function (_unresolved_6) {
      ErrorCodes = _unresolved_6.ErrorCodes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21caeyaFhlJV5rFYEQ6mHHL", "ApiPlayerMatchBaseMelee.test", undefined);

      describe("玩家匹配", () => {
        var testData = (_crd && testEachBuild === void 0 ? (_reportPossibleCrUseOftestEachBuild({
          error: Error()
        }), testEachBuild) : testEachBuild)(5);
        test('4max,min2,2人匹配,应成功,再进入招人匹配,依次进入2人,都要成功,再进1人应该要没结果,再取消!', /*#__PURE__*/_asyncToGenerator(function* () {
          //匹配请求
          var matchReqId1 = yield (_crd && requestMatchOneSingle === void 0 ? (_reportPossibleCrUseOfrequestMatchOneSingle({
            error: Error()
          }), requestMatchOneSingle) : requestMatchOneSingle)(testData.playerToken1, testData.playerId1, 4, 2);
          var matchReqId2 = yield (_crd && requestMatchOneSingle === void 0 ? (_reportPossibleCrUseOfrequestMatchOneSingle({
            error: Error()
          }), requestMatchOneSingle) : requestMatchOneSingle)(testData.playerToken2, testData.playerId2, 4, 2);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(1000);
          var matchRet1 = yield (_crd && queryMatch === void 0 ? (_reportPossibleCrUseOfqueryMatch({
            error: Error()
          }), queryMatch) : queryMatch)(testData.playerToken1, matchReqId1);
          var matchRet2 = yield (_crd && queryMatch === void 0 ? (_reportPossibleCrUseOfqueryMatch({
            error: Error()
          }), queryMatch) : queryMatch)(testData.playerToken2, matchReqId2);
          console.log('ApiPlayerMatch_4Max2Min2P_2P_1PNoResult, roomId:', matchRet1.roomId);
          testData.gameClient1 = yield (_crd && joinRoomUseGameServer === void 0 ? (_reportPossibleCrUseOfjoinRoomUseGameServer({
            error: Error()
          }), joinRoomUseGameServer) : joinRoomUseGameServer)(matchRet1.gameServerUrl, testData.playerToken1, matchRet1.roomId, 'zum1');
          testData.gameClient2 = yield (_crd && joinRoomUseGameServer === void 0 ? (_reportPossibleCrUseOfjoinRoomUseGameServer({
            error: Error()
          }), joinRoomUseGameServer) : joinRoomUseGameServer)(matchRet2.gameServerUrl, testData.playerToken2, matchRet2.roomId, 'zum2');
          var matchReqId3 = yield (_crd && requestMatchOneSingle === void 0 ? (_reportPossibleCrUseOfrequestMatchOneSingle({
            error: Error()
          }), requestMatchOneSingle) : requestMatchOneSingle)(testData.playerToken3, testData.playerId3, 4, 2);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(1000);
          var matchRet3 = yield (_crd && queryMatch === void 0 ? (_reportPossibleCrUseOfqueryMatch({
            error: Error()
          }), queryMatch) : queryMatch)(testData.playerToken3, matchReqId3);
          testData.gameClient3 = yield (_crd && joinRoomUseGameServer === void 0 ? (_reportPossibleCrUseOfjoinRoomUseGameServer({
            error: Error()
          }), joinRoomUseGameServer) : joinRoomUseGameServer)(matchRet3.gameServerUrl, testData.playerToken3, matchRet3.roomId, 'zum3');
          var matchReqId4 = yield (_crd && requestMatchOneSingle === void 0 ? (_reportPossibleCrUseOfrequestMatchOneSingle({
            error: Error()
          }), requestMatchOneSingle) : requestMatchOneSingle)(testData.playerToken4, testData.playerId4, 4, 2);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(1000);
          var matchRet4 = yield (_crd && queryMatch === void 0 ? (_reportPossibleCrUseOfqueryMatch({
            error: Error()
          }), queryMatch) : queryMatch)(testData.playerToken4, matchReqId4);
          testData.gameClient4 = yield (_crd && joinRoomUseGameServer === void 0 ? (_reportPossibleCrUseOfjoinRoomUseGameServer({
            error: Error()
          }), joinRoomUseGameServer) : joinRoomUseGameServer)(matchRet4.gameServerUrl, testData.playerToken4, matchRet4.roomId, 'zum4');
          var matchReqId5 = yield (_crd && requestMatchOneSingle === void 0 ? (_reportPossibleCrUseOfrequestMatchOneSingle({
            error: Error()
          }), requestMatchOneSingle) : requestMatchOneSingle)(testData.playerToken5, testData.playerId5, 4, 2);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(1000);
          var retM5 = yield (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).queryMatch(testData.playerToken5, matchReqId5);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retM5 === null, "应该没结果!实际有了!" + JSON.stringify(retM5)); //取消匹配

          yield (_crd && cancelMatch === void 0 ? (_reportPossibleCrUseOfcancelMatch({
            error: Error()
          }), cancelMatch) : cancelMatch)(testData.playerToken5, matchReqId5); //这个时候退出了一个

          yield testData.gameClient4.leaveRoom(); //玩家5这个时候要能匹配进房间才对!

          matchReqId5 = yield (_crd && requestMatchOneSingle === void 0 ? (_reportPossibleCrUseOfrequestMatchOneSingle({
            error: Error()
          }), requestMatchOneSingle) : requestMatchOneSingle)(testData.playerToken5, testData.playerId5, 4, 2);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(1000);
          var matchRet5 = yield (_crd && queryMatch === void 0 ? (_reportPossibleCrUseOfqueryMatch({
            error: Error()
          }), queryMatch) : queryMatch)(testData.playerToken5, matchReqId5);
          testData.gameClient5 = yield (_crd && joinRoomUseGameServer === void 0 ? (_reportPossibleCrUseOfjoinRoomUseGameServer({
            error: Error()
          }), joinRoomUseGameServer) : joinRoomUseGameServer)(matchRet5.gameServerUrl, testData.playerToken5, matchRet5.roomId, 'zum5');
        }));
        test('模拟三个客户端单人混战匹配', /*#__PURE__*/_asyncToGenerator(function* () {
          //匹配请求
          var matchReqId1 = yield (_crd && requestMatchOneSingle === void 0 ? (_reportPossibleCrUseOfrequestMatchOneSingle({
            error: Error()
          }), requestMatchOneSingle) : requestMatchOneSingle)(testData.playerToken1, testData.playerId1, 8, 3);
          var matchReqId2 = yield (_crd && requestMatchOneSingle === void 0 ? (_reportPossibleCrUseOfrequestMatchOneSingle({
            error: Error()
          }), requestMatchOneSingle) : requestMatchOneSingle)(testData.playerToken2, testData.playerId2, 8, 3);
          var matchReqId3 = yield (_crd && requestMatchOneSingle === void 0 ? (_reportPossibleCrUseOfrequestMatchOneSingle({
            error: Error()
          }), requestMatchOneSingle) : requestMatchOneSingle)(testData.playerToken3, testData.playerId3, 8, 3); //延时1秒

          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(1000);
          var matchRet1 = yield (_crd && queryMatch === void 0 ? (_reportPossibleCrUseOfqueryMatch({
            error: Error()
          }), queryMatch) : queryMatch)(testData.playerToken1, matchReqId1);
          var matchRet2 = yield (_crd && queryMatch === void 0 ? (_reportPossibleCrUseOfqueryMatch({
            error: Error()
          }), queryMatch) : queryMatch)(testData.playerToken2, matchReqId2);
          var matchRet3 = yield (_crd && queryMatch === void 0 ? (_reportPossibleCrUseOfqueryMatch({
            error: Error()
          }), queryMatch) : queryMatch)(testData.playerToken3, matchReqId3);
          console.log('matchRet1', matchRet1);
          console.log('matchRet2', matchRet2);
          console.log('matchRet3', matchRet3);
          console.log('ApiPlayer_MatchSingle3~8, roomId:', matchRet1.roomId);
          testData.gameClient1 = yield (_crd && joinRoomUseGameServer === void 0 ? (_reportPossibleCrUseOfjoinRoomUseGameServer({
            error: Error()
          }), joinRoomUseGameServer) : joinRoomUseGameServer)(matchRet1.gameServerUrl, testData.playerToken1, matchRet1.roomId, 'zum1');
          testData.gameClient2 = yield (_crd && joinRoomUseGameServer === void 0 ? (_reportPossibleCrUseOfjoinRoomUseGameServer({
            error: Error()
          }), joinRoomUseGameServer) : joinRoomUseGameServer)(matchRet2.gameServerUrl, testData.playerToken2, matchRet2.roomId, 'zum2');
          testData.gameClient3 = yield (_crd && joinRoomUseGameServer === void 0 ? (_reportPossibleCrUseOfjoinRoomUseGameServer({
            error: Error()
          }), joinRoomUseGameServer) : joinRoomUseGameServer)(matchRet3.gameServerUrl, testData.playerToken3, matchRet3.roomId, 'zum3');
          yield testData.gameClient3.sendRoomMsg({
            recvType: (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
              error: Error()
            }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_OTHERS,
            msg: '大伙好呀~'
          });
        }));
        test('取消匹配', /*#__PURE__*/_asyncToGenerator(function* () {
          var _retM, _retM2, _retM3, _retM4, _retM5, _retM6, _retM7;

          var matchReqId1 = yield (_crd && requestMatchOneSingle === void 0 ? (_reportPossibleCrUseOfrequestMatchOneSingle({
            error: Error()
          }), requestMatchOneSingle) : requestMatchOneSingle)(testData.playerToken1, testData.playerId1, 8, 3);
          var matchReqId2 = yield (_crd && requestMatchOneSingle === void 0 ? (_reportPossibleCrUseOfrequestMatchOneSingle({
            error: Error()
          }), requestMatchOneSingle) : requestMatchOneSingle)(testData.playerToken2, testData.playerId2, 8, 3);
          var retM1 = yield (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).queryMatch(testData.playerToken1, matchReqId1);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retM1 === null, '应该查不到结果的!' + JSON.stringify(retM1)); //取消玩家1匹配

          yield (_crd && cancelMatch === void 0 ? (_reportPossibleCrUseOfcancelMatch({
            error: Error()
          }), cancelMatch) : cancelMatch)(testData.playerToken1, matchReqId1);
          var matchReqId3 = yield (_crd && requestMatchOneSingle === void 0 ? (_reportPossibleCrUseOfrequestMatchOneSingle({
            error: Error()
          }), requestMatchOneSingle) : requestMatchOneSingle)(testData.playerToken3, testData.playerId3, 8, 3); //延时

          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(500);
          retM1 = yield (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).queryMatch(testData.playerToken1, matchReqId1);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_retM = retM1) == null ? void 0 : _retM.succ) === false && retM1.code === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).MatchRequestCancelled, '应该要查到取消匹配的结果!' + JSON.stringify(retM1)); //延时

          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(500); //这个时候不满3个,有2个在匹配池等待中,所以没有结果

          retM1 = yield (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).queryMatch(testData.playerToken1, matchReqId1);
          var retM2 = yield (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).queryMatch(testData.playerToken2, matchReqId2);
          var retM3 = yield (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).queryMatch(testData.playerToken3, matchReqId3);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retM1 === null, '应该查不到结果的!' + JSON.stringify(retM1));
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retM2 === null, '应该查不到结果的!' + JSON.stringify(retM2));
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retM3 === null, '应该查不到结果的!' + JSON.stringify(retM3)); //玩家1再提交匹配

          matchReqId1 = yield (_crd && requestMatchOneSingle === void 0 ? (_reportPossibleCrUseOfrequestMatchOneSingle({
            error: Error()
          }), requestMatchOneSingle) : requestMatchOneSingle)(testData.playerToken1, testData.playerId1, 8, 3); //延时

          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(500); //这个时候应该有结果了

          retM1 = yield (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).queryMatch(testData.playerToken1, matchReqId1);
          retM2 = yield (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).queryMatch(testData.playerToken2, matchReqId2);
          retM3 = yield (_crd && hallClient === void 0 ? (_reportPossibleCrUseOfhallClient({
            error: Error()
          }), hallClient) : hallClient).queryMatch(testData.playerToken3, matchReqId3);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retM1 !== null, '应该要有结果了!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_retM2 = retM1) == null ? void 0 : _retM2.succ) === true, '应该匹配成功才对!' + ((_retM3 = retM1) == null ? void 0 : _retM3.err));
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retM2 !== null, '应该要有结果了!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_retM4 = retM2) == null ? void 0 : _retM4.succ) === true, '应该匹配成功才对!' + ((_retM5 = retM2) == null ? void 0 : _retM5.err));
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retM3 !== null, '应该要有结果了!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_retM6 = retM3) == null ? void 0 : _retM6.succ) === true, '应该匹配成功才对!' + ((_retM7 = retM3) == null ? void 0 : _retM7.err));
          var matchRet1 = retM1.data;
          var matchRet2 = retM2.data;
          var matchRet3 = retM3.data;
          testData.gameClient1 = yield (_crd && joinRoomUseGameServer === void 0 ? (_reportPossibleCrUseOfjoinRoomUseGameServer({
            error: Error()
          }), joinRoomUseGameServer) : joinRoomUseGameServer)(matchRet1.gameServerUrl, testData.playerToken1, matchRet1.roomId, 'zum1');
          testData.gameClient2 = yield (_crd && joinRoomUseGameServer === void 0 ? (_reportPossibleCrUseOfjoinRoomUseGameServer({
            error: Error()
          }), joinRoomUseGameServer) : joinRoomUseGameServer)(matchRet2.gameServerUrl, testData.playerToken2, matchRet2.roomId, 'zum2');
          testData.gameClient3 = yield (_crd && joinRoomUseGameServer === void 0 ? (_reportPossibleCrUseOfjoinRoomUseGameServer({
            error: Error()
          }), joinRoomUseGameServer) : joinRoomUseGameServer)(matchRet3.gameServerUrl, testData.playerToken3, matchRet3.roomId, 'zum3');
        }));
        test('发起全房间玩家匹配和房间取消匹配_单人混战', /*#__PURE__*/_asyncToGenerator(function* () {
          //创建房间
          var gameClient1Ret = yield (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken1, testData.playerId1, 'zum1', {
            maxPlayers: 3
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient1Ret.succ === true, gameClient1Ret.err);
          testData.gameClient1 = gameClient1Ret.data.gameClient;
          var roomId1 = gameClient1Ret.data.roomId;
          testData.gameClient2 = yield (_crd && joinRoom === void 0 ? (_reportPossibleCrUseOfjoinRoom({
            error: Error()
          }), joinRoom) : joinRoom)(testData.playerToken2, roomId1, 'zum2');
          var gameClient3Ret = yield (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
            error: Error()
          }), createAndEnterRoom) : createAndEnterRoom)(testData.playerToken3, testData.playerId3, 'zum3', {
            maxPlayers: 3
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(gameClient3Ret.succ === true, gameClient3Ret.err);
          testData.gameClient3 = gameClient3Ret.data.gameClient;
          var roomId2 = gameClient3Ret.data.roomId;
          testData.gameClient4 = yield (_crd && joinRoom === void 0 ? (_reportPossibleCrUseOfjoinRoom({
            error: Error()
          }), joinRoom) : joinRoom)(testData.playerToken4, roomId2, 'zum4'); //发起房间所有玩家匹配请求

          var msgCount = 0;

          testData.gameClient1.onRoomAllPlayersMatchStart = (matchReqId, reqPlayerId, matchParams) => {
            if (reqPlayerId === testData.playerId1) {
              msgCount++;
            }
          };

          testData.gameClient2.onRoomAllPlayersMatchStart = (matchReqId, reqPlayerId, matchParams) => {
            if (reqPlayerId === testData.playerId1) {
              msgCount++;
            }
          };

          var reqRet = yield testData.gameClient1.requestMatch({
            matchFromType: (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
              error: Error()
            }), EMatchFromType) : EMatchFromType).RoomAllPlayers,
            matchFromInfo: {},
            maxPlayers: 4,
            matcherKey: (_crd && MatcherKeys === void 0 ? (_reportPossibleCrUseOfMatcherKeys({
              error: Error()
            }), MatcherKeys) : MatcherKeys).Single,
            matcherParams: {
              minPlayers: 4
            }
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(reqRet.succ, "" + reqRet.err);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 2, "\u5E94\u8BE5\u8981\u6536\u52302\u4E2A\u6D88\u606F\uFF01\u5B9E\u9645" + msgCount + "\u4E2A"); //先测试取消

          msgCount = 0;

          testData.gameClient1.onRoomAllPlayersMatchResult = (errMsg, errCode, matchResult) => {
            if (errCode === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).MatchRequestCancelled) {
              msgCount++;
            }
          };

          testData.gameClient2.onRoomAllPlayersMatchResult = (errMsg, errCode, matchResult) => {
            if (errCode === (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).MatchRequestCancelled) {
              msgCount++;
            }
          }; //玩家2去取消


          var cancelRet = yield testData.gameClient2.cancelMatch();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(cancelRet.succ, "" + cancelRet.err);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(500);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 2, "\u5E94\u8BE5\u8981\u6536\u52302\u4E2A\u6D88\u606F\uFF01\u5B9E\u9645" + msgCount + "\u4E2A"); //测试正常的匹配成功

          var p1Result, p2Result, p3Result, p4Result;
          msgCount = 0;

          testData.gameClient1.onRoomAllPlayersMatchStart = (matchReqId, reqPlayerId, matchParams) => {
            msgCount++;
          };

          testData.gameClient1.onRoomAllPlayersMatchResult = (errMsg, errCode, matchResult) => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(matchResult, "\u5E94\u8BE5\u6709\u7ED3\u679C,\u4F46\u4E3A\u7A7A,\u9519\u8BEF\u6D88\u606F\u4E3A:" + errCode + "," + errMsg);
            msgCount++;
            p1Result = matchResult;
          };

          testData.gameClient2.onRoomAllPlayersMatchStart = (matchReqId, reqPlayerId, matchParams) => {
            msgCount++;
          };

          testData.gameClient2.onRoomAllPlayersMatchResult = (errMsg, errCode, matchResult) => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(matchResult, "\u5E94\u8BE5\u6709\u7ED3\u679C,\u4F46\u4E3A\u7A7A,\u9519\u8BEF\u6D88\u606F\u4E3A:" + errCode + "," + errMsg);
            msgCount++;
            p2Result = matchResult;
          };

          reqRet = yield testData.gameClient1.requestMatch({
            matchFromType: (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
              error: Error()
            }), EMatchFromType) : EMatchFromType).RoomAllPlayers,
            matchFromInfo: {},
            maxPlayers: 4,
            matcherKey: (_crd && MatcherKeys === void 0 ? (_reportPossibleCrUseOfMatcherKeys({
              error: Error()
            }), MatcherKeys) : MatcherKeys).Single,
            matcherParams: {
              minPlayers: 4
            }
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(reqRet.succ, "" + reqRet.err);

          testData.gameClient3.onRoomAllPlayersMatchStart = (matchReqId, reqPlayerId, matchParams) => {
            msgCount++;
          };

          testData.gameClient3.onRoomAllPlayersMatchResult = (errMsg, errCode, matchResult) => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(matchResult, "\u5E94\u8BE5\u6709\u7ED3\u679C,\u4F46\u4E3A\u7A7A,\u9519\u8BEF\u6D88\u606F\u4E3A:" + errCode + "," + errMsg);
            msgCount++;
            p3Result = matchResult;
          };

          testData.gameClient4.onRoomAllPlayersMatchStart = (matchReqId, reqPlayerId, matchParams) => {
            msgCount++;
          };

          testData.gameClient4.onRoomAllPlayersMatchResult = (errMsg, errCode, matchResult) => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(matchResult, "\u5E94\u8BE5\u6709\u7ED3\u679C,\u4F46\u4E3A\u7A7A,\u9519\u8BEF\u6D88\u606F\u4E3A:" + errCode + "," + errMsg);
            msgCount++;
            p4Result = matchResult;
          };

          reqRet = yield testData.gameClient3.requestMatch({
            matchFromType: (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
              error: Error()
            }), EMatchFromType) : EMatchFromType).RoomAllPlayers,
            matchFromInfo: {},
            maxPlayers: 4,
            matcherKey: (_crd && MatcherKeys === void 0 ? (_reportPossibleCrUseOfMatcherKeys({
              error: Error()
            }), MatcherKeys) : MatcherKeys).Single,
            matcherParams: {
              minPlayers: 4
            }
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(reqRet.succ, "" + reqRet.err);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(2000); //匹配有定时器的

          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 8, "\u5E94\u8BE5\u8981\u6536\u52308\u4E2A\u6D88\u606F\uFF01\u5B9E\u9645" + msgCount + "\u4E2A"); //接着根据匹配结果加入新的房间

          yield testData.gameClient1.disconnect();
          yield testData.gameClient2.disconnect();
          yield testData.gameClient3.disconnect();
          yield testData.gameClient4.disconnect();
          testData.gameClient1 = yield (_crd && joinRoomUseGameServer === void 0 ? (_reportPossibleCrUseOfjoinRoomUseGameServer({
            error: Error()
          }), joinRoomUseGameServer) : joinRoomUseGameServer)(p1Result.gameServerUrl, testData.playerToken1, p1Result.roomId, 'zum1');
          testData.gameClient2 = yield (_crd && joinRoomUseGameServer === void 0 ? (_reportPossibleCrUseOfjoinRoomUseGameServer({
            error: Error()
          }), joinRoomUseGameServer) : joinRoomUseGameServer)(p2Result.gameServerUrl, testData.playerToken2, p2Result.roomId, 'zum2');
          testData.gameClient3 = yield (_crd && joinRoomUseGameServer === void 0 ? (_reportPossibleCrUseOfjoinRoomUseGameServer({
            error: Error()
          }), joinRoomUseGameServer) : joinRoomUseGameServer)(p3Result.gameServerUrl, testData.playerToken3, p3Result.roomId, 'zum3');
          testData.gameClient4 = yield (_crd && joinRoomUseGameServer === void 0 ? (_reportPossibleCrUseOfjoinRoomUseGameServer({
            error: Error()
          }), joinRoomUseGameServer) : joinRoomUseGameServer)(p4Result.gameServerUrl, testData.playerToken4, p4Result.roomId, 'zum4');
          msgCount = 0;

          testData.gameClient1.onRecvRoomMsg = msg => {
            msgCount++;
          };

          testData.gameClient2.onRecvRoomMsg = msg => {
            msgCount++;
          };

          testData.gameClient3.onRecvRoomMsg = msg => {
            msgCount++;
          };

          testData.gameClient4.onRecvRoomMsg = msg => {
            msgCount++;
          };

          var sendRet = yield testData.gameClient1.sendRoomMsg({
            recvType: (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
              error: Error()
            }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_ALL,
            msg: '测试是否同一个房间'
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(sendRet.succ, "" + sendRet.err);
          yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(200); //匹配有定时器的

          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(msgCount === 4, "\u5E94\u8BE5\u8981\u6536\u52304\u4E2A\u6D88\u606F\uFF01\u5B9E\u9645" + msgCount + "\u4E2A");
        }));
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=26ae52499010c361a71e17e0bd16d56f8f1d67f6.js.map