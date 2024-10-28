System.register(["__unresolved_0", "cc", "chai", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, assert, EMatchFromType, MatcherKeys, arrRemoveItems, arrSum, MatcherSingle, initMatchRequest, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfassert(extras) {
    _reporterNs.report("assert", "chai", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEMatchFromType(extras) {
    _reporterNs.report("EMatchFromType", "../../../src/shared/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchParamsFromPlayer(extras) {
    _reporterNs.report("IMatchParamsFromPlayer", "../../../src/shared/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISingleMatcherParams(extras) {
    _reporterNs.report("ISingleMatcherParams", "../../../src/shared/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatcherKeys(extras) {
    _reporterNs.report("MatcherKeys", "../../../src/shared/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfarrRemoveItems(extras) {
    _reporterNs.report("arrRemoveItems", "../../../src/shared/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfarrSum(extras) {
    _reporterNs.report("arrSum", "../../../src/shared/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatcherSingle(extras) {
    _reporterNs.report("MatcherSingle", "../../../src/shared/tsgfServer/match/MatcherSingle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchRequest(extras) {
    _reporterNs.report("IMatchRequest", "../../../src/shared/tsgfServer/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchFromRoomJoinUsOnServer(extras) {
    _reporterNs.report("IMatchFromRoomJoinUsOnServer", "../../../src/shared/tsgfServer/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitMatchRequest(extras) {
    _reporterNs.report("initMatchRequest", "../../../src/shared/tsgfServer/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchParamsFromRoomJoinUsOnServer(extras) {
    _reporterNs.report("IMatchParamsFromRoomJoinUsOnServer", "../../../src/shared/tsgfServer/match/Models", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_chai) {
      assert = _chai.assert;
    }, function (_unresolved_2) {
      EMatchFromType = _unresolved_2.EMatchFromType;
      MatcherKeys = _unresolved_2.MatcherKeys;
    }, function (_unresolved_3) {
      arrRemoveItems = _unresolved_3.arrRemoveItems;
      arrSum = _unresolved_3.arrSum;
    }, function (_unresolved_4) {
      MatcherSingle = _unresolved_4.MatcherSingle;
    }, function (_unresolved_5) {
      initMatchRequest = _unresolved_5.initMatchRequest;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8de8R6pVlM8bmga3/rzlAZ", "MatcherSingle.test", undefined);

      describe('单人匹配计算验证', () => {
        var matcher = new (_crd && MatcherSingle === void 0 ? (_reportPossibleCrUseOfMatcherSingle({
          error: Error()
        }), MatcherSingle) : MatcherSingle)();

        function buildSinglePlayerMatchReq(playerId, minPlayers, maxPlayers) {
          var reqParams = {
            matchFromType: (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
              error: Error()
            }), EMatchFromType) : EMatchFromType).Player,
            matchFromInfo: {
              playerIds: [playerId]
            },
            matcherKey: (_crd && MatcherKeys === void 0 ? (_reportPossibleCrUseOfMatcherKeys({
              error: Error()
            }), MatcherKeys) : MatcherKeys).Single,
            maxPlayers: maxPlayers,
            matcherParams: {
              minPlayers: minPlayers,
              resultsContinueRoomJoinUsMatch: true
            }
          };
          var req = (_crd && initMatchRequest === void 0 ? (_reportPossibleCrUseOfinitMatchRequest({
            error: Error()
          }), initMatchRequest) : initMatchRequest)(reqParams);
          return req;
        }

        function buildRoomJoinUsMatchReq(roomId, matchPlayerIds, maxPlayers) {
          var reqParams = {
            matchFromType: (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
              error: Error()
            }), EMatchFromType) : EMatchFromType).RoomJoinUs,
            matchFromInfo: {
              roomId: roomId,
              teamsPlayerIds: [{
                teamId: '',
                playerIds: matchPlayerIds.slice()
              }],
              currPlayerCount: matchPlayerIds.length
            },
            matcherKey: (_crd && MatcherKeys === void 0 ? (_reportPossibleCrUseOfMatcherKeys({
              error: Error()
            }), MatcherKeys) : MatcherKeys).Single,
            maxPlayers: maxPlayers,
            matcherParams: {}
          };
          var req = (_crd && initMatchRequest === void 0 ? (_reportPossibleCrUseOfinitMatchRequest({
            error: Error()
          }), initMatchRequest) : initMatchRequest)(reqParams);
          return req;
        }

        test('Single_1人的房间', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR;

          var allPlayersReqs = [buildSinglePlayerMatchReq('4a', 1, 9)];
          var result = matcher.onPollMatcherReqs(allPlayersReqs);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.hasResult, '应该要有结果了!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!result.resultErrMsg, '出错了' + result.resultErrMsg);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.resultCreateRoom, '应该创建1个房间!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_result$resultCreateR = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR.length) === 1, '应该创建1个房间!');
        }));
        test('Single_单玩家匹配再房间招人匹配', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR2, _result$resultJoinRoo2, _joinRoomResult, _joinRoomResult2, _joinRoomResult3, _joinRoomResult4, _joinRoomResult5, _result$resultJoinRoo4, _joinRoomResult6, _joinRoomResult7, _joinRoomResult8, _joinRoomResult9, _joinRoomResult10, _result$resultJoinRoo6;

          var allPlayersReqs = [buildSinglePlayerMatchReq('4a', 2, 4), buildSinglePlayerMatchReq('4b', 2, 4), buildSinglePlayerMatchReq('3a', 2, 3), buildSinglePlayerMatchReq('3a', 2, 3), buildSinglePlayerMatchReq('2a', 2, 2), buildSinglePlayerMatchReq('2b', 2, 2)];
          var result = matcher.onPollMatcherReqs(allPlayersReqs);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.hasResult, '应该要有结果了!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!result.resultErrMsg, '出错了' + result.resultErrMsg);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.resultCreateRoom, '应该创建3个房间!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_result$resultCreateR2 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR2.length) === 3, '应该创建3个房间!');
          var createRoomResult4 = result.resultCreateRoom.find(r => r.createRoomPara.maxPlayers === 4);
          var createRoomResult3 = result.resultCreateRoom.find(r => r.createRoomPara.maxPlayers === 3);
          var createRoomResult2 = result.resultCreateRoom.find(r => r.createRoomPara.maxPlayers === 2);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(createRoomResult4, '应该创建一个房间!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(createRoomResult3, '应该创建一个房间!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(createRoomResult2, '应该创建一个房间!');
          var matchPlayerCount = (_crd && arrSum === void 0 ? (_reportPossibleCrUseOfarrSum({
            error: Error()
          }), arrSum) : arrSum)(createRoomResult4.matchRequestPlayerResults, r => r.matchPlayerResults.length);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(matchPlayerCount === 2, '应该匹配到2个,实际为' + matchPlayerCount);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok((createRoomResult4 == null ? void 0 : createRoomResult4.matchRequestPlayerResults.length) === 2, '应该匹配到2个,实际为' + (createRoomResult4 == null ? void 0 : createRoomResult4.matchRequestPlayerResults.length));
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(createRoomResult4 == null ? void 0 : createRoomResult4.roomJoinUsMatch, '因为人未满,所以应该开启招人匹配!');
          matchPlayerCount = (_crd && arrSum === void 0 ? (_reportPossibleCrUseOfarrSum({
            error: Error()
          }), arrSum) : arrSum)(createRoomResult3.matchRequestPlayerResults, r => r.matchPlayerResults.length);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(matchPlayerCount === 2, '应该匹配到2个,实际为' + matchPlayerCount);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok((createRoomResult3 == null ? void 0 : createRoomResult3.matchRequestPlayerResults.length) === 2, '应该匹配到2个,实际为' + (createRoomResult3 == null ? void 0 : createRoomResult3.matchRequestPlayerResults.length));
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(createRoomResult3 == null ? void 0 : createRoomResult3.roomJoinUsMatch, '因为人未满,所以应该开启招人匹配!');
          matchPlayerCount = (_crd && arrSum === void 0 ? (_reportPossibleCrUseOfarrSum({
            error: Error()
          }), arrSum) : arrSum)(createRoomResult2.matchRequestPlayerResults, r => r.matchPlayerResults.length);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(matchPlayerCount === 2, '应该匹配到2个,实际为' + matchPlayerCount);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok((createRoomResult2 == null ? void 0 : createRoomResult2.matchRequestPlayerResults.length) === 2, '应该匹配到2个,实际为' + (createRoomResult2 == null ? void 0 : createRoomResult2.matchRequestPlayerResults.length));
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!(createRoomResult2 != null && createRoomResult2.roomJoinUsMatch), '因为满员,所以不应该开启招人匹配!'); //模拟移除匹配中的请求

          (_crd && arrRemoveItems === void 0 ? (_reportPossibleCrUseOfarrRemoveItems({
            error: Error()
          }), arrRemoveItems) : arrRemoveItems)(allPlayersReqs, r => {
            var _result$resultCreateR3, _result$resultJoinRoo;

            return !!((_result$resultCreateR3 = result.resultCreateRoom) != null && _result$resultCreateR3.find(c => c.matchRequestPlayerResults.find(re => re.matchReqId === r.matchReqId))) || !!((_result$resultJoinRoo = result.resultJoinRoom) != null && _result$resultJoinRoo.find(c => c.matchRequestPlayerResults.find(re => re.matchReqId === r.matchReqId)));
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(allPlayersReqs.length === 0, '匹配应该被清空了!实际为' + allPlayersReqs.length); //加入2个房间招人匹配

          var matchPlayerIds = [];
          createRoomResult4.matchRequestPlayerResults.forEach(r => matchPlayerIds.push(...r.matchPlayerResults.map(p => p.playerId)));
          var roomJoinUsMatchReq4 = buildRoomJoinUsMatchReq('4', matchPlayerIds, 4);
          matchPlayerIds = [];
          createRoomResult3.matchRequestPlayerResults.forEach(r => matchPlayerIds.push(...r.matchPlayerResults.map(p => p.playerId)));
          var roomJoinUsMatchReq3 = buildRoomJoinUsMatchReq('3', matchPlayerIds, 3);
          allPlayersReqs.push(roomJoinUsMatchReq4);
          allPlayersReqs.push(roomJoinUsMatchReq3);
          result = matcher.onPollMatcherReqs(allPlayersReqs);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!result.hasResult, '两个房间招人,但没玩家匹配,应该没结果!'); //加入1个4Max的玩家匹配

          allPlayersReqs.push(buildSinglePlayerMatchReq('4c', 2, 4));
          result = matcher.onPollMatcherReqs(allPlayersReqs);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.hasResult, '应该要有结果了!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!result.resultErrMsg, '出错了' + result.resultErrMsg);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.resultJoinRoom, '应该加入1个房间!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_result$resultJoinRoo2 = result.resultJoinRoom) == null ? void 0 : _result$resultJoinRoo2.length) === 1, '应该加入1个房间!');
          var joinRoomResult4 = result.resultJoinRoom[0];
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRoomResult4, '应该加入1个房间!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_joinRoomResult = joinRoomResult4) == null ? void 0 : _joinRoomResult.joinRoomId) === '4', '加入的房间ID应该是4,实际为' + ((_joinRoomResult2 = joinRoomResult4) == null ? void 0 : _joinRoomResult2.joinRoomId));
          matchPlayerCount = (_crd && arrSum === void 0 ? (_reportPossibleCrUseOfarrSum({
            error: Error()
          }), arrSum) : arrSum)(joinRoomResult4.matchRequestPlayerResults, r => r.matchPlayerResults.length);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(matchPlayerCount === 1, '应该匹配上1个,实际' + matchPlayerCount);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_joinRoomResult3 = joinRoomResult4) == null ? void 0 : _joinRoomResult3.matchRequestPlayerResults.length) === 1, '应该匹配上1个,实际' + ((_joinRoomResult4 = joinRoomResult4) == null ? void 0 : _joinRoomResult4.matchRequestPlayerResults.length));
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok((_joinRoomResult5 = joinRoomResult4) == null ? void 0 : _joinRoomResult5.roomJoinUsMatch, '因为人未满,所以应该开启招人匹配!'); //模拟移除匹配中的请求

          (_crd && arrRemoveItems === void 0 ? (_reportPossibleCrUseOfarrRemoveItems({
            error: Error()
          }), arrRemoveItems) : arrRemoveItems)(allPlayersReqs, r => {
            var _result$resultCreateR4, _result$resultJoinRoo3;

            return !!((_result$resultCreateR4 = result.resultCreateRoom) != null && _result$resultCreateR4.find(c => c.matchRequestPlayerResults.find(re => re.matchReqId === r.matchReqId))) || !!((_result$resultJoinRoo3 = result.resultJoinRoom) != null && _result$resultJoinRoo3.find(c => c.matchRequestPlayerResults.find(re => re.matchReqId === r.matchReqId)));
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(allPlayersReqs.length === 2, '总匹配应该剩下那2个招人匹配!但实际为' + allPlayersReqs.length); //需要模拟将这个匹配玩家加入到对应匹配的玩家列表中

          var roomJoinUsInfo = roomJoinUsMatchReq4.matchFromInfo;
          matchPlayerIds = [];
          joinRoomResult4.matchRequestPlayerResults.forEach(r => matchPlayerIds.push(...r.matchPlayerResults.map(p => p.playerId)));
          roomJoinUsInfo.teamsPlayerIds[0].playerIds.push(...matchPlayerIds);
          roomJoinUsInfo.currPlayerCount = roomJoinUsInfo.teamsPlayerIds[0].playerIds.length; //再加入1个4Max的玩家匹配

          allPlayersReqs.push(buildSinglePlayerMatchReq('4d', 2, 4));
          result = matcher.onPollMatcherReqs(allPlayersReqs);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.hasResult, '应该要有结果了!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!result.resultErrMsg, '出错了' + result.resultErrMsg);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.resultJoinRoom, '应该加入1个房间!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_result$resultJoinRoo4 = result.resultJoinRoom) == null ? void 0 : _result$resultJoinRoo4.length) === 1, '应该加入1个房间!');
          joinRoomResult4 = result.resultJoinRoom[0];
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRoomResult4, '应该加入1个房间!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_joinRoomResult6 = joinRoomResult4) == null ? void 0 : _joinRoomResult6.joinRoomId) === '4', '加入的房间ID应该是4,实际为' + ((_joinRoomResult7 = joinRoomResult4) == null ? void 0 : _joinRoomResult7.joinRoomId));
          matchPlayerCount = (_crd && arrSum === void 0 ? (_reportPossibleCrUseOfarrSum({
            error: Error()
          }), arrSum) : arrSum)(joinRoomResult4.matchRequestPlayerResults, r => r.matchPlayerResults.length);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(matchPlayerCount === 1, '应该匹配上1个,实际' + matchPlayerCount);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_joinRoomResult8 = joinRoomResult4) == null ? void 0 : _joinRoomResult8.matchRequestPlayerResults.length) === 1, '应该匹配上1个,实际' + ((_joinRoomResult9 = joinRoomResult4) == null ? void 0 : _joinRoomResult9.matchRequestPlayerResults.length));
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!((_joinRoomResult10 = joinRoomResult4) != null && _joinRoomResult10.roomJoinUsMatch), '因为满员,所以不应该开启招人匹配!'); //模拟移除匹配中的请求

          (_crd && arrRemoveItems === void 0 ? (_reportPossibleCrUseOfarrRemoveItems({
            error: Error()
          }), arrRemoveItems) : arrRemoveItems)(allPlayersReqs, r => {
            var _result$resultCreateR5, _result$resultJoinRoo5;

            return !!((_result$resultCreateR5 = result.resultCreateRoom) != null && _result$resultCreateR5.find(c => c.matchRequestPlayerResults.find(re => re.matchReqId === r.matchReqId))) || !!((_result$resultJoinRoo5 = result.resultJoinRoom) != null && _result$resultJoinRoo5.find(c => c.matchRequestPlayerResults.find(re => re.matchReqId === r.matchReqId)));
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(allPlayersReqs.length === 2, '总匹配应该剩下那2个招人匹配!但实际为' + allPlayersReqs.length); //需要模拟将这个匹配玩家加入到对应匹配的玩家列表中

          roomJoinUsInfo = roomJoinUsMatchReq4.matchFromInfo;
          matchPlayerIds = [];
          joinRoomResult4.matchRequestPlayerResults.forEach(r => matchPlayerIds.push(...r.matchPlayerResults.map(p => p.playerId)));
          roomJoinUsInfo.teamsPlayerIds[0].playerIds.push(...matchPlayerIds);
          roomJoinUsInfo.currPlayerCount = roomJoinUsInfo.teamsPlayerIds[0].playerIds.length; //再加入1个3Max的玩家匹配

          allPlayersReqs.push(buildSinglePlayerMatchReq('3c', 2, 3));
          result = matcher.onPollMatcherReqs(allPlayersReqs);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.hasResult, '应该要有结果了!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!result.resultErrMsg, '出错了' + result.resultErrMsg);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.resultJoinRoom, '应该加入1个房间!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_result$resultJoinRoo6 = result.resultJoinRoom) == null ? void 0 : _result$resultJoinRoo6.length) === 1, '应该加入1个房间!');
          var joinRoomResult3 = result.resultJoinRoom[0];
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(joinRoomResult3, '应该加入1个房间!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok((joinRoomResult3 == null ? void 0 : joinRoomResult3.joinRoomId) === '3', '加入的房间ID应该是3,实际为' + (joinRoomResult3 == null ? void 0 : joinRoomResult3.joinRoomId));
          matchPlayerCount = (_crd && arrSum === void 0 ? (_reportPossibleCrUseOfarrSum({
            error: Error()
          }), arrSum) : arrSum)(joinRoomResult3.matchRequestPlayerResults, r => r.matchPlayerResults.length);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(matchPlayerCount === 1, '应该匹配上1个,实际' + matchPlayerCount);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok((joinRoomResult3 == null ? void 0 : joinRoomResult3.matchRequestPlayerResults.length) === 1, '应该匹配上1个,实际' + (joinRoomResult3 == null ? void 0 : joinRoomResult3.matchRequestPlayerResults.length));
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!(joinRoomResult3 != null && joinRoomResult3.roomJoinUsMatch), '因为满员,所以不应该开启招人匹配!'); //模拟移除匹配中的请求

          (_crd && arrRemoveItems === void 0 ? (_reportPossibleCrUseOfarrRemoveItems({
            error: Error()
          }), arrRemoveItems) : arrRemoveItems)(allPlayersReqs, r => {
            var _result$resultCreateR6, _result$resultJoinRoo7;

            return !!((_result$resultCreateR6 = result.resultCreateRoom) != null && _result$resultCreateR6.find(c => c.matchRequestPlayerResults.find(re => re.matchReqId === r.matchReqId))) || !!((_result$resultJoinRoo7 = result.resultJoinRoom) != null && _result$resultJoinRoo7.find(c => c.matchRequestPlayerResults.find(re => re.matchReqId === r.matchReqId)));
          });
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(allPlayersReqs.length === 2, '总匹配应该剩下0个匹配!但实际为' + allPlayersReqs.length); //需要模拟将这个匹配玩家加入到对应匹配的玩家列表中

          roomJoinUsInfo = roomJoinUsMatchReq3.matchFromInfo;
          matchPlayerIds = [];
          joinRoomResult3.matchRequestPlayerResults.forEach(r => matchPlayerIds.push(...r.matchPlayerResults.map(p => p.playerId)));
          roomJoinUsInfo.teamsPlayerIds[0].playerIds.push(...matchPlayerIds);
          roomJoinUsInfo.currPlayerCount = roomJoinUsInfo.teamsPlayerIds[0].playerIds.length;
        }));
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0b248604de33ed594af50be0beb2136ee3a6b3f5.js.map