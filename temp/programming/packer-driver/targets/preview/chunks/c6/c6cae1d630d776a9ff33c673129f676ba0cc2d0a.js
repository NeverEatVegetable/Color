System.register(["__unresolved_0", "cc", "chai", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, assert, EMatchFromType, MatcherKeys, arrSum, MatcherFixedTeams, initMatchRequest, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfassert(extras) {
    _reporterNs.report("assert", "chai", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEMatchFromType(extras) {
    _reporterNs.report("EMatchFromType", "../../../src/shared/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFixedTeamsMatcherParams(extras) {
    _reporterNs.report("IFixedTeamsMatcherParams", "../../../src/shared/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchParamsFromPlayer(extras) {
    _reporterNs.report("IMatchParamsFromPlayer", "../../../src/shared/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatcherKeys(extras) {
    _reporterNs.report("MatcherKeys", "../../../src/shared/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITeamPlayerIds(extras) {
    _reporterNs.report("ITeamPlayerIds", "../../../src/shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfarrSum(extras) {
    _reporterNs.report("arrSum", "../../../src/shared/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatcherFixedTeams(extras) {
    _reporterNs.report("MatcherFixedTeams", "../../../src/shared/tsgfServer/match/MatcherFixedTeams", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchRequest(extras) {
    _reporterNs.report("IMatchRequest", "../../../src/shared/tsgfServer/match/Models", _context.meta, extras);
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
      arrSum = _unresolved_3.arrSum;
    }, function (_unresolved_4) {
      MatcherFixedTeams = _unresolved_4.MatcherFixedTeams;
    }, function (_unresolved_5) {
      initMatchRequest = _unresolved_5.initMatchRequest;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "26ab359cpVGx4g1CSKedNAb", "MatcherFixedTeams.test", undefined);

      describe('固定队伍匹配计算验证', () => {
        var matcher = new (_crd && MatcherFixedTeams === void 0 ? (_reportPossibleCrUseOfMatcherFixedTeams({
          error: Error()
        }), MatcherFixedTeams) : MatcherFixedTeams)();

        function buildSinglePlayerMatchReq(playerIds, fixedTeamCount, teamMinPlayers, teamMaxPlayers) {
          var reqParams = {
            maxPlayers: fixedTeamCount * teamMaxPlayers,
            matchFromType: (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
              error: Error()
            }), EMatchFromType) : EMatchFromType).Player,
            matchFromInfo: {
              playerIds: playerIds
            },
            matcherKey: (_crd && MatcherKeys === void 0 ? (_reportPossibleCrUseOfMatcherKeys({
              error: Error()
            }), MatcherKeys) : MatcherKeys).FixedTeams,
            matcherParams: {
              resultsContinueRoomJoinUsMatch: true
            },
            teamParams: {
              fixedTeamCount: fixedTeamCount,
              fixedTeamMinPlayers: teamMinPlayers,
              fixedTeamMaxPlayers: teamMaxPlayers
            }
          };
          var req = (_crd && initMatchRequest === void 0 ? (_reportPossibleCrUseOfinitMatchRequest({
            error: Error()
          }), initMatchRequest) : initMatchRequest)(reqParams);
          var ret = matcher.procNewMatchReq(req);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(ret.succ, ret.err);
          return req;
        }

        function buildRoomJoinUsMatchReq(roomId, fixedTeamCount, teamMinPlayers, teamMaxPlayers, teamsPlayerIds) {
          var reqParams = {
            maxPlayers: fixedTeamCount * teamMaxPlayers,
            matchFromType: (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
              error: Error()
            }), EMatchFromType) : EMatchFromType).RoomJoinUs,
            matchFromInfo: {
              roomId: roomId,
              teamsPlayerIds: teamsPlayerIds,
              currPlayerCount: (_crd && arrSum === void 0 ? (_reportPossibleCrUseOfarrSum({
                error: Error()
              }), arrSum) : arrSum)(teamsPlayerIds, t => t.playerIds.length)
            },
            matcherKey: (_crd && MatcherKeys === void 0 ? (_reportPossibleCrUseOfMatcherKeys({
              error: Error()
            }), MatcherKeys) : MatcherKeys).FixedTeams,
            matcherParams: {
              resultsContinueRoomJoinUsMatch: true
            },
            teamParams: {
              fixedTeamCount: fixedTeamCount,
              fixedTeamMinPlayers: teamMinPlayers,
              fixedTeamMaxPlayers: teamMaxPlayers
            }
          };
          var req = (_crd && initMatchRequest === void 0 ? (_reportPossibleCrUseOfinitMatchRequest({
            error: Error()
          }), initMatchRequest) : initMatchRequest)(reqParams);
          var ret = matcher.procNewMatchReq(req);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(ret.succ, ret.err);
          return req;
        }

        test('1个队伍(1~1) 1人*1请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR;

          //满足最低要求
          var allPlayersReqs = [buildSinglePlayerMatchReq(['1'], 1, 1, 1)];
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
        test('1个队伍(1~2) 1人*1请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR2;

          //满足最低要求
          var allPlayersReqs = [buildSinglePlayerMatchReq(['1'], 1, 1, 2)];
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
          }), assert) : assert).ok(((_result$resultCreateR2 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR2.length) === 1, '应该创建1个房间!');
        }));
        test('1个队伍(1~2) 2人*1请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR3;

          //满足最低要求
          var allPlayersReqs = [buildSinglePlayerMatchReq(['1', '2'], 1, 1, 2)];
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
          }), assert) : assert).ok(((_result$resultCreateR3 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR3.length) === 1, '应该创建1个房间!');
        }));
        test('1个队伍(1~2) 1人*2请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR4;

          //组合满
          var allPlayersReqs = [buildSinglePlayerMatchReq(['1'], 1, 1, 2), buildSinglePlayerMatchReq(['2'], 1, 1, 2)];
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
          }), assert) : assert).ok(((_result$resultCreateR4 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR4.length) === 1, '应该创建1个房间!');
        }));
        test('1个队伍(1~2) 2人*2请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR5, _result$resultCreateR6;

          //组合满
          var allPlayersReqs = [buildSinglePlayerMatchReq(['1', '1a'], 1, 1, 2), buildSinglePlayerMatchReq(['2', '2a'], 1, 1, 2)];
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
          }), assert) : assert).ok(((_result$resultCreateR5 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR5.length) === 2, '应该创建2个房间!实际' + ((_result$resultCreateR6 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR6.length));
        }));
        test('1个队伍(1~2) 1人*3请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR7, _result$resultCreateR8;

          //1个满,再1个最低要求
          var allPlayersReqs = [buildSinglePlayerMatchReq(['1'], 1, 1, 2), buildSinglePlayerMatchReq(['2'], 1, 1, 2), buildSinglePlayerMatchReq(['3'], 1, 1, 2)];
          var result = matcher.onPollMatcherReqs(allPlayersReqs);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.hasResult, '应该要有结果了!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!result.resultErrMsg, '出错了' + result.resultErrMsg);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.resultCreateRoom, '应该创建房间!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_result$resultCreateR7 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR7.length) === 2, '应该创建2个房间!实际为' + ((_result$resultCreateR8 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR8.length));
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 2, '第1个房间应该有2个匹配!实际为' + retReqLen);
          retReqLen = result.resultCreateRoom[1].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 1, '第2个房间应该有1个匹配!实际为' + retReqLen);
        }));
        test('1个队伍(1~2) 2人*3请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR9, _result$resultCreateR10;

          var allPlayersReqs = [buildSinglePlayerMatchReq(['1', '1a'], 1, 1, 2), buildSinglePlayerMatchReq(['2', '2a'], 1, 1, 2), buildSinglePlayerMatchReq(['3', '3a'], 1, 1, 2)];
          var result = matcher.onPollMatcherReqs(allPlayersReqs);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.hasResult, '应该要有结果了!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!result.resultErrMsg, '出错了' + result.resultErrMsg);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.resultCreateRoom, '应该创建房间!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_result$resultCreateR9 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR9.length) === 3, '应该创建3个房间!实际为' + ((_result$resultCreateR10 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR10.length));
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 1, '第1个房间应该有1个匹配!实际为' + retReqLen);
          retReqLen = result.resultCreateRoom[1].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 1, '第2个房间应该有1个匹配!实际为' + retReqLen);
        }));
        test('1个队伍(1~3) 1人*5请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR11, _result$resultCreateR12;

          //1个满,再1个最低要求并推满
          var allPlayersReqs = [buildSinglePlayerMatchReq(['1'], 1, 1, 3), buildSinglePlayerMatchReq(['2'], 1, 1, 3), buildSinglePlayerMatchReq(['3'], 1, 1, 3), buildSinglePlayerMatchReq(['4'], 1, 1, 3), buildSinglePlayerMatchReq(['5'], 1, 1, 3)];
          var result = matcher.onPollMatcherReqs(allPlayersReqs);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.hasResult, '应该要有结果了!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!result.resultErrMsg, '出错了' + result.resultErrMsg);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.resultCreateRoom, '应该创建房间!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_result$resultCreateR11 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR11.length) === 2, '应该创建2个房间!实际为' + ((_result$resultCreateR12 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR12.length));
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 3, '第1个房间应该有3个匹配!实际为' + retReqLen);
          retReqLen = result.resultCreateRoom[1].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 2, '第2个房间应该有2个匹配!实际为' + retReqLen);
        }));
        test('1个队伍(1~3) 2人*5请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR13, _result$resultCreateR14;

          //1个满,再1个最低要求并推满
          var allPlayersReqs = [buildSinglePlayerMatchReq(['1', '1a'], 1, 1, 3), buildSinglePlayerMatchReq(['2', '2a'], 1, 1, 3), buildSinglePlayerMatchReq(['3', '3a'], 1, 1, 3), buildSinglePlayerMatchReq(['4', '4a'], 1, 1, 3), buildSinglePlayerMatchReq(['5', '5a'], 1, 1, 3)];
          var result = matcher.onPollMatcherReqs(allPlayersReqs);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.hasResult, '应该要有结果了!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!result.resultErrMsg, '出错了' + result.resultErrMsg);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.resultCreateRoom, '应该创建房间!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_result$resultCreateR13 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR13.length) === 5, '应该创建5个房间!实际为' + ((_result$resultCreateR14 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR14.length));
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 1, '第1个房间应该有3个匹配!实际为' + retReqLen);
          retReqLen = result.resultCreateRoom[1].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 1, '第2个房间应该有2个匹配!实际为' + retReqLen);
        }));
        test('2个队伍各(1~1) 1人*2请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR15;

          //2个队伍(1~1)组合满
          var allPlayersReqs = [buildSinglePlayerMatchReq(['1'], 2, 1, 1), buildSinglePlayerMatchReq(['2'], 2, 1, 1)];
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
          }), assert) : assert).ok(((_result$resultCreateR15 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR15.length) === 1, '应该创建1个房间!');
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 2, '第1个房间应该有2个匹配!实际为' + retReqLen);
        }));
        test('2个队伍各(1~1) 2人*2请求', /*#__PURE__*/_asyncToGenerator(function* () {
          //2个队伍(1~1)组合满
          var allPlayersReqs = [buildSinglePlayerMatchReq(['1', '1a'], 2, 1, 1), buildSinglePlayerMatchReq(['2', '2a'], 2, 1, 1)];
          var result = matcher.onPollMatcherReqs(allPlayersReqs);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!result.hasResult, '应该没结果!');
        }));
        test('2个队伍各(1~2) 1人*2请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR16;

          //2个队伍(1~2)满足最低要求
          var allPlayersReqs = [buildSinglePlayerMatchReq(['1'], 2, 1, 2), buildSinglePlayerMatchReq(['2'], 2, 1, 2)];
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
          }), assert) : assert).ok(((_result$resultCreateR16 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR16.length) === 1, '应该创建1个房间!');
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 2, '第1个房间应该有2个匹配!实际为' + retReqLen);
        }));
        test('2个队伍各(1~2) 2人*2请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR17;

          //2个队伍(1~2)满足最低要求
          var allPlayersReqs = [buildSinglePlayerMatchReq(['1', '1a'], 2, 1, 2), buildSinglePlayerMatchReq(['2', '2a'], 2, 1, 2)];
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
          }), assert) : assert).ok(((_result$resultCreateR17 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR17.length) === 1, '应该创建1个房间!');
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 2, '第1个房间应该有2个匹配!实际为' + retReqLen);
        }));
        test('2个队伍各(1~3) 1人*2请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR18;

          //2个队伍(1~3)满足最低要求
          var allPlayersReqs = [buildSinglePlayerMatchReq(['1'], 2, 1, 3), buildSinglePlayerMatchReq(['2'], 2, 1, 3)];
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
          }), assert) : assert).ok(((_result$resultCreateR18 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR18.length) === 1, '应该创建1个房间!');
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 2, '第1个房间应该有2个匹配!实际为' + retReqLen);
        }));
        test('2个队伍各(1~3) 2人*2请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR19;

          var allPlayersReqs = [buildSinglePlayerMatchReq(['1', '1a'], 2, 1, 3), buildSinglePlayerMatchReq(['2', '2a'], 2, 1, 3)];
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
          }), assert) : assert).ok(((_result$resultCreateR19 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR19.length) === 1, '应该创建1个房间!');
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 2, '第1个房间应该有2个匹配!实际为' + retReqLen);
        }));
        test('2个队伍各(1~2) 1人*4请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR20, _result$resultCreateR21;

          //2个队伍(1~2)组合满
          var allPlayersReqs = [buildSinglePlayerMatchReq(['1'], 2, 1, 2), buildSinglePlayerMatchReq(['2'], 2, 1, 2), buildSinglePlayerMatchReq(['3'], 2, 1, 2), buildSinglePlayerMatchReq(['4'], 2, 1, 2)];
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
          }), assert) : assert).ok(((_result$resultCreateR20 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR20.length) === 1, '应该创建1个房间!实际为' + ((_result$resultCreateR21 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR21.length));
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 4, '第1个房间应该有4个匹配!实际为' + retReqLen);
        }));
        test('2个队伍各(1~2) 2人*4请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR22, _result$resultCreateR23;

          var allPlayersReqs = [buildSinglePlayerMatchReq(['1', '1a'], 2, 1, 2), buildSinglePlayerMatchReq(['2', '2a'], 2, 1, 2), buildSinglePlayerMatchReq(['3', '3a'], 2, 1, 2), buildSinglePlayerMatchReq(['4', '4a'], 2, 1, 2)];
          var result = matcher.onPollMatcherReqs(allPlayersReqs);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.hasResult, '应该要有结果了!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!result.resultErrMsg, '出错了' + result.resultErrMsg);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.resultCreateRoom, '应该创建2个房间!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_result$resultCreateR22 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR22.length) === 2, '应该创建2个房间!实际为' + ((_result$resultCreateR23 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR23.length));
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 2, '第1个房间应该有2个匹配!实际为' + retReqLen);
        }));
        test('2个队伍各(1~2) 2+2+2+1人请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR24, _result$resultCreateR25;

          var allPlayersReqs = [buildSinglePlayerMatchReq(['1', '1a'], 2, 1, 2), buildSinglePlayerMatchReq(['2', '2a'], 2, 1, 2), buildSinglePlayerMatchReq(['3', '3a'], 2, 1, 2), buildSinglePlayerMatchReq(['4'], 2, 1, 2)];
          var result = matcher.onPollMatcherReqs(allPlayersReqs);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.hasResult, '应该要有结果了!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!result.resultErrMsg, '出错了' + result.resultErrMsg);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.resultCreateRoom, '应该创建2个房间!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_result$resultCreateR24 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR24.length) === 2, '应该创建2个房间!实际为' + ((_result$resultCreateR25 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR25.length));
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 2, '第1个房间应该有2个匹配!实际为' + retReqLen);
          retReqLen = result.resultCreateRoom[1].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 2, '第2个房间应该有2个匹配!实际为' + retReqLen);
        }));
        test('2个队伍各(1~2) 2+2+1+1人请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR26, _result$resultCreateR27;

          var allPlayersReqs = [buildSinglePlayerMatchReq(['1', '1a'], 2, 1, 2), buildSinglePlayerMatchReq(['2', '2a'], 2, 1, 2), buildSinglePlayerMatchReq(['3'], 2, 1, 2), buildSinglePlayerMatchReq(['4'], 2, 1, 2)];
          var result = matcher.onPollMatcherReqs(allPlayersReqs);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.hasResult, '应该要有结果了!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!result.resultErrMsg, '出错了' + result.resultErrMsg);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.resultCreateRoom, '应该创建2个房间!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_result$resultCreateR26 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR26.length) === 2, '应该创建2个房间!实际为' + ((_result$resultCreateR27 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR27.length));
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 2, '第1个房间应该有2个匹配!实际为' + retReqLen);
          retReqLen = result.resultCreateRoom[1].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 2, '第2个房间应该有2个匹配!实际为' + retReqLen);
        }));
        test('3个队伍各(1~3) 1人*3请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR28;

          //3个队伍(1~3)满足最低要求
          var allPlayersReqs = [buildSinglePlayerMatchReq(['1'], 3, 1, 3), buildSinglePlayerMatchReq(['2'], 3, 1, 3), buildSinglePlayerMatchReq(['3'], 3, 1, 3)];
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
          }), assert) : assert).ok(((_result$resultCreateR28 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR28.length) === 1, '应该创建1个房间!');
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 3, '第1个房间应该有3个匹配!实际为' + retReqLen);
        }));
        test('3个队伍各(1~3) 2人*3请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR29;

          var allPlayersReqs = [buildSinglePlayerMatchReq(['1', '1a'], 3, 1, 3), buildSinglePlayerMatchReq(['2', '2a'], 3, 1, 3), buildSinglePlayerMatchReq(['3', '3a'], 3, 1, 3)];
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
          }), assert) : assert).ok(((_result$resultCreateR29 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR29.length) === 1, '应该创建1个房间!');
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 3, '第1个房间应该有3个匹配!实际为' + retReqLen);
        }));
        test('3个队伍各(1~3) 3人*3请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR30;

          var allPlayersReqs = [buildSinglePlayerMatchReq(['1', '1a', '1b'], 3, 1, 3), buildSinglePlayerMatchReq(['2', '2a', '2b'], 3, 1, 3), buildSinglePlayerMatchReq(['3', '3a', '3b'], 3, 1, 3)];
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
          }), assert) : assert).ok(((_result$resultCreateR30 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR30.length) === 1, '应该创建1个房间!');
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 3, '第1个房间应该有3个匹配!实际为' + retReqLen);
        }));
        test('3个队伍各(1~3) 1+2+3人请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR31;

          var allPlayersReqs = [buildSinglePlayerMatchReq(['1'], 3, 1, 3), buildSinglePlayerMatchReq(['2', '2a'], 3, 1, 3), buildSinglePlayerMatchReq(['3', '3a', '3b'], 3, 1, 3)];
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
          }), assert) : assert).ok(((_result$resultCreateR31 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR31.length) === 1, '应该创建1个房间!');
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 3, '第1个房间应该有3个匹配!实际为' + retReqLen);
        }));
        test('3个队伍各(1~3) 1+2+3+1+2人请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR32;

          var allPlayersReqs = [buildSinglePlayerMatchReq(['1'], 3, 1, 3), buildSinglePlayerMatchReq(['2', '2a'], 3, 1, 3), buildSinglePlayerMatchReq(['3', '3a', '3b'], 3, 1, 3), buildSinglePlayerMatchReq(['4'], 3, 1, 3), buildSinglePlayerMatchReq(['5', '5a'], 3, 1, 3)];
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
          }), assert) : assert).ok(((_result$resultCreateR32 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR32.length) === 1, '应该创建1个房间!');
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 5, '第1个房间应该有5个匹配!实际为' + retReqLen);
        }));
        test('3个队伍各(1~3) 1人*6请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR33, _result$resultCreateR34;

          //3个队伍(1~3)满足最低要求再补充
          var allPlayersReqs = [buildSinglePlayerMatchReq(['1'], 3, 1, 3), buildSinglePlayerMatchReq(['2'], 3, 1, 3), buildSinglePlayerMatchReq(['3'], 3, 1, 3), buildSinglePlayerMatchReq(['4'], 3, 1, 3), buildSinglePlayerMatchReq(['5'], 3, 1, 3), buildSinglePlayerMatchReq(['6'], 3, 1, 3)];
          var result = matcher.onPollMatcherReqs(allPlayersReqs);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.hasResult, '应该要有结果了!');
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(!result.resultErrMsg, '出错了' + result.resultErrMsg);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(result.resultCreateRoom, '应该创建1个房间!'); //应该是尽量推满, 而不是按min去创建两个房间

          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_result$resultCreateR33 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR33.length) === 1, '应该创建1个房间!实际为' + ((_result$resultCreateR34 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR34.length));
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 6, '第1个房间应该有6个匹配!实际为' + retReqLen);
        }));
        test('3个队伍各(2~3) 1人*6请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR35, _result$resultCreateR36;

          var allPlayersReqs = [buildSinglePlayerMatchReq(['1'], 3, 2, 3), buildSinglePlayerMatchReq(['2'], 3, 2, 3), buildSinglePlayerMatchReq(['3'], 3, 2, 3), buildSinglePlayerMatchReq(['4'], 3, 2, 3), buildSinglePlayerMatchReq(['5'], 3, 2, 3), buildSinglePlayerMatchReq(['6'], 3, 2, 3)];
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
          }), assert) : assert).ok(((_result$resultCreateR35 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR35.length) === 1, '应该创建1个房间!实际为' + ((_result$resultCreateR36 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR36.length));
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 6, '第1个房间应该有6个匹配!实际为' + retReqLen);
        }));
        test('3个队伍各(1~2) 1人*12请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultCreateR37, _result$resultCreateR38;

          //3个队伍(1~2) 组合满2个房间
          var allPlayersReqs = [buildSinglePlayerMatchReq(['1'], 3, 1, 2), buildSinglePlayerMatchReq(['2'], 3, 1, 2), buildSinglePlayerMatchReq(['3'], 3, 1, 2), buildSinglePlayerMatchReq(['4'], 3, 1, 2), buildSinglePlayerMatchReq(['5'], 3, 1, 2), buildSinglePlayerMatchReq(['6'], 3, 1, 2), buildSinglePlayerMatchReq(['7'], 3, 1, 2), buildSinglePlayerMatchReq(['8'], 3, 1, 2), buildSinglePlayerMatchReq(['9'], 3, 1, 2), buildSinglePlayerMatchReq(['10'], 3, 1, 2), buildSinglePlayerMatchReq(['11'], 3, 1, 2), buildSinglePlayerMatchReq(['12'], 3, 1, 2)];
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
          }), assert) : assert).ok(((_result$resultCreateR37 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR37.length) === 2, '应该创建2个房间!实际为' + ((_result$resultCreateR38 = result.resultCreateRoom) == null ? void 0 : _result$resultCreateR38.length));
          var retReqLen = result.resultCreateRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 6, '第1个房间应该有6个匹配!实际为' + retReqLen);
          retReqLen = result.resultCreateRoom[1].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 6, '第2个房间应该有6个匹配!实际为' + retReqLen);
        }));
        test('房间招人:2个队伍各(1~2) 已有1*2人, 匹配1人*1请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultJoinRoo, _result$resultJoinRoo2;

          var allPlayersReqs = [buildRoomJoinUsMatchReq('1', 2, 1, 2, [{
            teamId: '1',
            playerIds: ['1']
          }, {
            teamId: '2',
            playerIds: ['2']
          }]), buildSinglePlayerMatchReq(['1'], 2, 1, 2)];
          var result = matcher.onPollMatcherReqs(allPlayersReqs);
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
          }), assert) : assert).ok(((_result$resultJoinRoo = result.resultJoinRoom) == null ? void 0 : _result$resultJoinRoo.length) === 1, '应该加入1个房间!实际为' + ((_result$resultJoinRoo2 = result.resultJoinRoom) == null ? void 0 : _result$resultJoinRoo2.length));
          var retReqLen = result.resultJoinRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 1, '第1个结果应该有1个匹配!实际为' + retReqLen);
        }));
        test('房间招人:2个队伍各(1~3) 已有1+1人, 匹配1+2人请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultJoinRoo3, _result$resultJoinRoo4;

          var allPlayersReqs = [buildRoomJoinUsMatchReq('1', 2, 1, 3, [{
            teamId: '1',
            playerIds: ['1']
          }, {
            teamId: '2',
            playerIds: ['2']
          }]), buildSinglePlayerMatchReq(['1'], 2, 1, 3), buildSinglePlayerMatchReq(['2', '2a'], 2, 1, 3), //干扰
          buildSinglePlayerMatchReq(['a1'], 2, 1, 2), buildSinglePlayerMatchReq(['b1'], 2, 1, 2), buildSinglePlayerMatchReq(['c1'], 2, 1, 2)];
          var result = matcher.onPollMatcherReqs(allPlayersReqs);
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
          }), assert) : assert).ok(((_result$resultJoinRoo3 = result.resultJoinRoom) == null ? void 0 : _result$resultJoinRoo3.length) === 1, '应该加入1个房间!实际为' + ((_result$resultJoinRoo4 = result.resultJoinRoom) == null ? void 0 : _result$resultJoinRoo4.length));
          var retReqLen = result.resultJoinRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 2, '第1个结果应该有2个匹配!实际为' + retReqLen);
        }));
        test('房间招人:2个队伍各(1~2) 已有1*2人, 匹配1人*2请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultJoinRoo5, _result$resultJoinRoo6;

          var allPlayersReqs = [buildRoomJoinUsMatchReq('1', 2, 1, 2, [{
            teamId: '1',
            playerIds: ['1']
          }, {
            teamId: '2',
            playerIds: ['2']
          }]), buildSinglePlayerMatchReq(['1'], 2, 1, 2), buildSinglePlayerMatchReq(['2'], 2, 1, 2)];
          var result = matcher.onPollMatcherReqs(allPlayersReqs);
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
          }), assert) : assert).ok(((_result$resultJoinRoo5 = result.resultJoinRoom) == null ? void 0 : _result$resultJoinRoo5.length) === 1, '应该加入1个房间!实际为' + ((_result$resultJoinRoo6 = result.resultJoinRoom) == null ? void 0 : _result$resultJoinRoo6.length));
          var retReqLen = result.resultJoinRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 2, '第1个结果应该有2个匹配!实际为' + retReqLen);
        }));
        test('房间招人:2个队伍各(1~2) 已有1*2人, 匹配1人*3请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultJoinRoo7, _result$resultJoinRoo8;

          var allPlayersReqs = [buildRoomJoinUsMatchReq('1', 2, 1, 2, [{
            teamId: '1',
            playerIds: ['1']
          }, {
            teamId: '2',
            playerIds: ['2']
          }]), buildSinglePlayerMatchReq(['1'], 2, 1, 2), buildSinglePlayerMatchReq(['2'], 2, 1, 2), buildSinglePlayerMatchReq(['3'], 2, 1, 2)];
          var result = matcher.onPollMatcherReqs(allPlayersReqs);
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
          }), assert) : assert).ok(((_result$resultJoinRoo7 = result.resultJoinRoom) == null ? void 0 : _result$resultJoinRoo7.length) === 1, '应该加入1个房间!实际为' + ((_result$resultJoinRoo8 = result.resultJoinRoom) == null ? void 0 : _result$resultJoinRoo8.length));
          var retReqLen = result.resultJoinRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 2, '第1个结果应该有2个匹配!实际为' + retReqLen);
        }));
        test('房间招人:2个队伍各(1~2) 已有1+2人, 匹配1人*3请求', /*#__PURE__*/_asyncToGenerator(function* () {
          var _result$resultJoinRoo9, _result$resultJoinRoo10;

          var allPlayersReqs = [buildRoomJoinUsMatchReq('1', 2, 1, 2, [{
            teamId: '1',
            playerIds: ['1']
          }, {
            teamId: '2',
            playerIds: ['2', '3']
          }]), buildSinglePlayerMatchReq(['1'], 2, 1, 2), buildSinglePlayerMatchReq(['2'], 2, 1, 2), buildSinglePlayerMatchReq(['3'], 2, 1, 2)];
          var result = matcher.onPollMatcherReqs(allPlayersReqs);
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
          }), assert) : assert).ok(((_result$resultJoinRoo9 = result.resultJoinRoom) == null ? void 0 : _result$resultJoinRoo9.length) === 1, '应该加入1个房间!实际为' + ((_result$resultJoinRoo10 = result.resultJoinRoom) == null ? void 0 : _result$resultJoinRoo10.length));
          var retReqLen = result.resultJoinRoom[0].matchRequestPlayerResults.length;
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(retReqLen === 1, '第1个结果应该有2个匹配!实际为' + retReqLen);
        }));
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c6cae1d630d776a9ff33c673129f676ba0cc2d0a.js.map