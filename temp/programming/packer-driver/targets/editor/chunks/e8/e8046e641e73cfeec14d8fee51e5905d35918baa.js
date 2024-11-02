System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EMatchFromType, arrSum, buildGuid, _crd, EMatchProcType;

  /**
   * 根据匹配参数生成匹配参数的分组标识
   *
   * @param params
   * @returns
   */
  function buildMatchGroupKey(params) {
    var _params$matchType;

    //固定的参数
    let key = `${(_params$matchType = params.matchType) != null ? _params$matchType : ''}_${params.matcherKey}_${params.maxPlayers}`; //开始队伍的部分

    if (params.teamParams) {
      if (params.teamParams.fixedTeamInfoList) {
        key += '_FixedTeam:' + params.teamParams.fixedTeamInfoList.map(t => `${t.id}-${t.minPlayers}-${t.maxPlayers}`).join('|');
      } else if (params.teamParams.fixedTeamCount) {
        key += '_FixedTeam:';
        let sp = '';

        for (let i = 0; i < params.teamParams.fixedTeamCount; i++) {
          key += sp;
          sp = '|';
          key += `${i + 1}-${params.teamParams.fixedTeamMinPlayers}-${params.teamParams.fixedTeamMaxPlayers}`;
        }
      } else if (params.teamParams.freeTeamMinPlayers && params.teamParams.freeTeamMaxPlayers) {
        key += `_FreeTeam:${params.teamParams.freeTeamMinPlayers}-${params.teamParams.freeTeamMaxPlayers}`;
      }
    } //返回


    return key;
  }
  /**
   * 初始化匹配参数,转为匹配请求
   *
   * @param matchParams
   * @returns
   */


  function initMatchRequest(matchParams, limit = true) {
    let req = matchParams;
    req.matchReqId = (_crd && buildGuid === void 0 ? (_reportPossibleCrUseOfbuildGuid({
      error: Error()
    }), buildGuid) : buildGuid)('MatchReq_');
    req.requestTime = Date.now();
    req.matchReqGroupKey = buildMatchGroupKey(matchParams);
    if (!req.matchTimeoutSec) req.matchTimeoutSec = 60; //设置默认60秒

    if (limit) {
      //默认需要限制参数
      if (req.matchTimeoutSec > 60) req.matchTimeoutSec = 60; //设置默认60秒
    }

    if (req.matchFromType === (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
      error: Error()
    }), EMatchFromType) : EMatchFromType).RoomJoinUs) {
      if (!req.matchFromInfo.teamsPlayerIds) {
        req.matchFromInfo.teamsPlayerIds = [{
          teamId: '',
          playerIds: []
        }];
      }
    } else {}

    return req;
  }
  /**
   * 根据一个来源的匹配请求以及房间相关信息,构造一个房间招人的匹配请求
   *
   * @param roomMatchReq
   * @param roomId
   * @param teamsPlayerIds
   * @returns
   */


  function buildRoomJoinUsMatchRequest(roomMatchReq, roomId, teamsPlayerIds) {
    let attr = Object.assign({}, roomMatchReq.matcherParams);
    let teamParams = roomMatchReq.teamParams ? Object.assign({}, roomMatchReq.teamParams) : undefined;
    let reqParams = {
      matchTimeoutSec: 999999,
      matcherKey: roomMatchReq.matcherKey,
      maxPlayers: roomMatchReq.maxPlayers,
      matcherParams: attr,
      matchFromType: (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
        error: Error()
      }), EMatchFromType) : EMatchFromType).RoomJoinUs,
      matchFromInfo: {
        roomId: roomId,
        currPlayerCount: (_crd && arrSum === void 0 ? (_reportPossibleCrUseOfarrSum({
          error: Error()
        }), arrSum) : arrSum)(teamsPlayerIds, t => t.playerIds.length),
        teamsPlayerIds: teamsPlayerIds.slice()
      },
      teamParams: teamParams
    }; //招人匹配不需要限制参数

    let req = initMatchRequest(reqParams, false);
    return req;
  }

  function _reportPossibleCrUseOfIMatchParamsBase(extras) {
    _reporterNs.report("IMatchParamsBase", "../../tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchParamsFromPlayer(extras) {
    _reporterNs.report("IMatchParamsFromPlayer", "../../tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEMatchFromType(extras) {
    _reporterNs.report("EMatchFromType", "../../tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchResult(extras) {
    _reporterNs.report("IMatchResult", "../../tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchPlayerResult(extras) {
    _reporterNs.report("IMatchPlayerResult", "../../tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchFromRoomAllPlayers(extras) {
    _reporterNs.report("IMatchFromRoomAllPlayers", "../../tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICreateRoomPara(extras) {
    _reporterNs.report("ICreateRoomPara", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITeamPlayerIds(extras) {
    _reporterNs.report("ITeamPlayerIds", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfarrSum(extras) {
    _reporterNs.report("arrSum", "../../tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbuildGuid(extras) {
    _reporterNs.report("buildGuid", "../ServerUtils", _context.meta, extras);
  }

  _export({
    buildMatchGroupKey: buildMatchGroupKey,
    initMatchRequest: initMatchRequest,
    buildRoomJoinUsMatchRequest: buildRoomJoinUsMatchRequest
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EMatchFromType = _unresolved_2.EMatchFromType;
    }, function (_unresolved_3) {
      arrSum = _unresolved_3.arrSum;
    }, function (_unresolved_4) {
      buildGuid = _unresolved_4.buildGuid;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ce5c559QwVC3LFnkNFEbgQd", "Models", undefined);

      //定义掩码数据结构加速队伍匹配计算

      /**房间全玩家发起匹配的来源信息(服务端)*/

      /**房间全玩家发起匹配的参数(服务端)*/

      /**来自玩家的匹配参数*/

      /**匹配请求发起的参数*/

      /**匹配请求的基础字段(匹配参数被匹配服务器初始化后会附加的字段)*/

      /**所有种类的匹配请求(服务器初始化后的)*/

      /**仅来自玩家的匹配请求(服务器初始化后的)*/

      /**匹配操作类型*/
      _export("EMatchProcType", EMatchProcType = /*#__PURE__*/function (EMatchProcType) {
        EMatchProcType[EMatchProcType["RequestMatch"] = 1] = "RequestMatch";
        EMatchProcType[EMatchProcType["CancelMatch"] = 2] = "CancelMatch";
        return EMatchProcType;
      }({}));
      /**请求匹配操作*/

      /**取消匹配操作*/

      /**匹配操作*/

      /**匹配器执行结果*/

      /**匹配请求的玩家结果数据,一个匹配请求一个对象, 包含多个玩家结果*/

      /**匹配器执行结果有创建房间的操作*/

      /**匹配器执行结果有加入房间的操作*/

      /**匹配结果通知消息*/


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e8046e641e73cfeec14d8fee51e5905d35918baa.js.map