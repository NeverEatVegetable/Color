System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MatcherRequests, buildRoomJoinUsMatchRequest, EMatchProcType, ErrorCodes, Result, EMatchFromType, ERoomRegChangedType, arrRemoveItems, arrSum, logger, ERoomCreateType, teamPlayerIdsAdd, teamPlayerIdsAddSingle, teamPlayerIdsSubtractSingle, AppMatchRequestHandler, _crd;

  function _reportPossibleCrUseOfIMatcher(extras) {
    _reporterNs.report("IMatcher", "./IMatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatcherRequests(extras) {
    _reporterNs.report("MatcherRequests", "./MatcherRequests", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbuildRoomJoinUsMatchRequest(extras) {
    _reporterNs.report("buildRoomJoinUsMatchRequest", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEMatchProcType(extras) {
    _reporterNs.report("EMatchProcType", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatcherExecResult(extras) {
    _reporterNs.report("IMatcherExecResult", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchFromRoomJoinUsOnServer(extras) {
    _reporterNs.report("IMatchFromRoomJoinUsOnServer", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchProc(extras) {
    _reporterNs.report("IMatchProc", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchRequest(extras) {
    _reporterNs.report("IMatchRequest", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatchRequestHelper(extras) {
    _reporterNs.report("MatchRequestHelper", "./MatchRequestHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEMatchFromType(extras) {
    _reporterNs.report("EMatchFromType", "../../tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchResult(extras) {
    _reporterNs.report("IMatchResult", "../../tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfERoomRegChangedType(extras) {
    _reporterNs.report("ERoomRegChangedType", "../room/RoomHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomRegChanged(extras) {
    _reporterNs.report("IRoomRegChanged", "../room/RoomHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfarrRemoveItems(extras) {
    _reporterNs.report("arrRemoveItems", "../../tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfarrSum(extras) {
    _reporterNs.report("arrSum", "../../tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOflogger(extras) {
    _reporterNs.report("logger", "../../tsgf/logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfERoomCreateType(extras) {
    _reporterNs.report("ERoomCreateType", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITeamPlayerIds(extras) {
    _reporterNs.report("ITeamPlayerIds", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomRegInfo(extras) {
    _reporterNs.report("IRoomRegInfo", "../room/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfteamPlayerIdsAdd(extras) {
    _reporterNs.report("teamPlayerIdsAdd", "../room/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfteamPlayerIdsAddSingle(extras) {
    _reporterNs.report("teamPlayerIdsAddSingle", "../room/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfteamPlayerIdsSubtractSingle(extras) {
    _reporterNs.report("teamPlayerIdsSubtractSingle", "../room/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameClusterTerminal(extras) {
    _reporterNs.report("GameClusterTerminal", "../gameCluster/GameClusterTerminal", _context.meta, extras);
  }

  _export("AppMatchRequestHandler", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      MatcherRequests = _unresolved_2.MatcherRequests;
    }, function (_unresolved_3) {
      buildRoomJoinUsMatchRequest = _unresolved_3.buildRoomJoinUsMatchRequest;
      EMatchProcType = _unresolved_3.EMatchProcType;
    }, function (_unresolved_4) {
      ErrorCodes = _unresolved_4.ErrorCodes;
      Result = _unresolved_4.Result;
    }, function (_unresolved_5) {
      EMatchFromType = _unresolved_5.EMatchFromType;
    }, function (_unresolved_6) {
      ERoomRegChangedType = _unresolved_6.ERoomRegChangedType;
    }, function (_unresolved_7) {
      arrRemoveItems = _unresolved_7.arrRemoveItems;
      arrSum = _unresolved_7.arrSum;
    }, function (_unresolved_8) {
      logger = _unresolved_8.logger;
    }, function (_unresolved_9) {
      ERoomCreateType = _unresolved_9.ERoomCreateType;
    }, function (_unresolved_10) {
      teamPlayerIdsAdd = _unresolved_10.teamPlayerIdsAdd;
      teamPlayerIdsAddSingle = _unresolved_10.teamPlayerIdsAddSingle;
      teamPlayerIdsSubtractSingle = _unresolved_10.teamPlayerIdsSubtractSingle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6697aOb9ElDOKQY/VX6RInC", "AppMatchRequestHandler", undefined);

      /**应用匹配请求处理器*/
      _export("AppMatchRequestHandler", AppMatchRequestHandler = class AppMatchRequestHandler {
        /**
         *
         * @param appId
         * @param reqHelper 公共的请求工具类
         * @param allotGameServer 设置一个分配游戏服务器的方法
         */
        constructor(appId, reqHelper, gameClusterTerminal) {
          this.appId = void 0;

          /**本应用的所有匹配器，按匹配器标识字典*/
          this.matchers = new Map();

          /**本应用的所有匹配器下的匹配请求*/
          this.allMatcherReqs = new Map();

          /**本应用的所有匹配请求*/
          this.allReqs = new Map();

          /**公共的请求处理工具*/
          this.reqHelper = void 0;

          /**本应用下的房间注册信息缓存, 由父级服务进行维护*/
          this.roomRegInfos = new Map();

          /**房间招人的匹配,一个房间只能存在一个匹配请求*/
          this.roomJoinUsReq = new Map();
          this.gameClusterTerminal = void 0;
          this.pollMatchReqHd = null;
          this.pollProcTimeoutMatchReqHd = null;
          this.appId = appId;
          this.reqHelper = reqHelper;
          this.reqHelper.listenMatchProc(this.appId, async proc => {
            await this.onNewAppMatchProc(proc);
          });
          this.gameClusterTerminal = gameClusterTerminal;
          this.startPollProcTimeoutReqs();
        }
        /**
         * 清除数据
         *
         * @public
         */


        dispose() {
          this.reqHelper.stopListenMatchProc(this.appId);
          this.stopPollReqs();
          this.startPollProcTimeoutReqs();
        }

        roomRegInfoChanged(regRoomChanged) {
          let roomJoinUsReq = this.roomJoinUsReq.get(regRoomChanged.regInfo.roomId);

          switch (regRoomChanged.changedType) {
            case (_crd && ERoomRegChangedType === void 0 ? (_reportPossibleCrUseOfERoomRegChangedType({
              error: Error()
            }), ERoomRegChangedType) : ERoomRegChangedType).Create:
              this.roomRegInfos.set(regRoomChanged.regInfo.roomId, regRoomChanged.regInfo);
              break;

            case (_crd && ERoomRegChangedType === void 0 ? (_reportPossibleCrUseOfERoomRegChangedType({
              error: Error()
            }), ERoomRegChangedType) : ERoomRegChangedType).ChangeInfo:
              this.roomRegInfos.set(regRoomChanged.regInfo.roomId, regRoomChanged.regInfo);
              break;

            case (_crd && ERoomRegChangedType === void 0 ? (_reportPossibleCrUseOfERoomRegChangedType({
              error: Error()
            }), ERoomRegChangedType) : ERoomRegChangedType).Delete:
              this.roomRegInfos.delete(regRoomChanged.regInfo.roomId);

              if (roomJoinUsReq) {
                //如果存在房间招人匹配,则同步删除匹配!
                this.removeMatchRequestAndResult(roomJoinUsReq);
              }

              break;

            case (_crd && ERoomRegChangedType === void 0 ? (_reportPossibleCrUseOfERoomRegChangedType({
              error: Error()
            }), ERoomRegChangedType) : ERoomRegChangedType).PlayerJoinRoom:
              if (roomJoinUsReq) {
                //如果存在房间招人匹配,更新人数
                let fromInfo = roomJoinUsReq.matchFromInfo;
                (_crd && teamPlayerIdsAddSingle === void 0 ? (_reportPossibleCrUseOfteamPlayerIdsAddSingle({
                  error: Error()
                }), teamPlayerIdsAddSingle) : teamPlayerIdsAddSingle)(fromInfo.teamsPlayerIds, regRoomChanged.joinRoomPlayerId, regRoomChanged.teamId);
                fromInfo.currPlayerCount = (_crd && arrSum === void 0 ? (_reportPossibleCrUseOfarrSum({
                  error: Error()
                }), arrSum) : arrSum)(fromInfo.teamsPlayerIds, t => t.playerIds.length);
              }

              break;

            case (_crd && ERoomRegChangedType === void 0 ? (_reportPossibleCrUseOfERoomRegChangedType({
              error: Error()
            }), ERoomRegChangedType) : ERoomRegChangedType).PlayerLeaveRoom:
              if (roomJoinUsReq) {
                //如果存在房间招人匹配,更新人数
                let fromInfo = roomJoinUsReq.matchFromInfo;
                (_crd && teamPlayerIdsSubtractSingle === void 0 ? (_reportPossibleCrUseOfteamPlayerIdsSubtractSingle({
                  error: Error()
                }), teamPlayerIdsSubtractSingle) : teamPlayerIdsSubtractSingle)(fromInfo.teamsPlayerIds, regRoomChanged.leaveRoomPlayerId, regRoomChanged.teamId);
                fromInfo.currPlayerCount = (_crd && arrSum === void 0 ? (_reportPossibleCrUseOfarrSum({
                  error: Error()
                }), arrSum) : arrSum)(fromInfo.teamsPlayerIds, t => t.playerIds.length);
              }

              break;

            case (_crd && ERoomRegChangedType === void 0 ? (_reportPossibleCrUseOfERoomRegChangedType({
              error: Error()
            }), ERoomRegChangedType) : ERoomRegChangedType).PlayerChangeTeam:
              if (roomJoinUsReq) {
                //如果存在房间招人匹配,更新人数
                let fromInfo = roomJoinUsReq.matchFromInfo;
                (_crd && teamPlayerIdsSubtractSingle === void 0 ? (_reportPossibleCrUseOfteamPlayerIdsSubtractSingle({
                  error: Error()
                }), teamPlayerIdsSubtractSingle) : teamPlayerIdsSubtractSingle)(fromInfo.teamsPlayerIds, regRoomChanged.changePlayerId, regRoomChanged.oldTeamId);
                (_crd && teamPlayerIdsAddSingle === void 0 ? (_reportPossibleCrUseOfteamPlayerIdsAddSingle({
                  error: Error()
                }), teamPlayerIdsAddSingle) : teamPlayerIdsAddSingle)(fromInfo.teamsPlayerIds, regRoomChanged.changePlayerId, regRoomChanged.newTeamId);
                fromInfo.currPlayerCount = (_crd && arrSum === void 0 ? (_reportPossibleCrUseOfarrSum({
                  error: Error()
                }), arrSum) : arrSum)(fromInfo.teamsPlayerIds, t => t.playerIds.length);
              }

              break;
          }
        }
        /**停止定时轮询请求*/


        stopPollReqs() {
          if (this.pollMatchReqHd) clearTimeout(this.pollMatchReqHd);
          this.pollMatchReqHd = null;
        }
        /**开始轮询所有请求*/


        startPollAllReqs() {
          this.stopPollReqs();
          this.pollMatchReqHd = setTimeout(async () => await this.pollAllReqs(), 1000);
        }
        /**执行轮询所有请求（给匹配器执行自己匹配器下的请求集合）*/


        async pollAllReqs() {
          //处理一遍超时的
          await this.pollProcTimeoutReqs();

          if (this.allMatcherReqs.size > 0) {
            for (let [matcherKey, matcherReqs] of this.allMatcherReqs) {
              let matcher = this.matchers.get(matcherKey);
              if (!matcher || matcherReqs.length <= 0) continue;
              (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                error: Error()
              }), logger) : logger).log('AppMatchRequestMgr', `pollAllReqs: ${matcher.matcherKey},matcherReqsCount:${matcherReqs.length}`);
              let result = matcher.onPollMatcherReqs(matcherReqs.slice());
              await this.procMatcherExecResult(result, matcherReqs);
            }
          } //重新开始定时轮询


          this.startPollAllReqs();
        }
        /**新匹配请求添加进本管理器*/


        async addNewMatchReq(matchReq) {
          //更新请求相关字段
          matchReq.startMatchTime = Date.now(); //添加到所有请求集合中

          this.allReqs.set(matchReq.matchReqId, matchReq); //添加到同匹配器下的请求集合中

          let matcherAllReqs = this.allMatcherReqs.get(matchReq.matcherKey);

          if (!matcherAllReqs) {
            matcherAllReqs = new (_crd && MatcherRequests === void 0 ? (_reportPossibleCrUseOfMatcherRequests({
              error: Error()
            }), MatcherRequests) : MatcherRequests)(matchReq.matcherKey);
            this.allMatcherReqs.set(matcherAllReqs.matcherKey, matcherAllReqs);
          }

          matcherAllReqs.push(matchReq);

          if (matchReq.matchFromType === (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
            error: Error()
          }), EMatchFromType) : EMatchFromType).RoomJoinUs) {
            //如果是房间招人匹配,特殊处理一下
            let existsJoinUsReq = this.roomJoinUsReq.get(matchReq.matchFromInfo.roomId);

            if (existsJoinUsReq) {
              //居然存在同房间还有其他的招人匹配!正常不应该,但出现了就设置为失败
              await this.faildMatchRequest(existsJoinUsReq, `被其他房间招人匹配覆盖！`, (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).MatchRequestCancelled, matcherAllReqs);
            } //放在房间招人字典里,统一管理


            this.roomJoinUsReq.set(matchReq.matchFromInfo.roomId, matchReq);
          }

          return matcherAllReqs;
        }

        stopPollProcTimeoutReqs() {
          if (this.pollProcTimeoutMatchReqHd) clearTimeout(this.pollProcTimeoutMatchReqHd);
          this.pollProcTimeoutMatchReqHd = null;
        }

        startPollProcTimeoutReqs() {
          this.stopPollProcTimeoutReqs();
          this.pollProcTimeoutMatchReqHd = setTimeout(async () => await this.pollProcTimeoutReqs(), 1000);
        }
        /**处理超时的匹配(设置结果并移出管理)*/


        async pollProcTimeoutReqs() {
          if (this.allMatcherReqs.size > 0) {
            let now = Date.now();
            let timeoutReqIds = [];

            for (let matcherKey of this.allMatcherReqs.keys()) {
              let matcherReqs = this.allMatcherReqs.get(matcherKey);
              let matcher = this.matchers.get(matcherKey);
              if (!matcher || !matcherReqs || matcherReqs.length <= 0) continue;

              for (let i = 0; i < matcherReqs.length; i++) {
                let req = matcherReqs[i];
                if (!req.matchTimeoutSec) continue;

                if (req.startMatchTime + req.matchTimeoutSec * 1000 < now) {
                  //这个请求已经超时
                  timeoutReqIds.push(req);
                }
              }
            }

            if (timeoutReqIds.length > 0) {
              await this.faildMatchRequests(timeoutReqIds, '匹配超时！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).MatchTimeout);
            }
          } //重新开始定时轮询


          this.startPollProcTimeoutReqs();
        }
        /**当收到新匹配请求的处理*/


        async onNewAppMatchProc(matchProc) {
          if (matchProc.procType === (_crd && EMatchProcType === void 0 ? (_reportPossibleCrUseOfEMatchProcType({
            error: Error()
          }), EMatchProcType) : EMatchProcType).RequestMatch) {
            //收到新的匹配请求
            return await this.onNewAppMatchReq(matchProc.matchReqId);
          } else if (matchProc.procType === (_crd && EMatchProcType === void 0 ? (_reportPossibleCrUseOfEMatchProcType({
            error: Error()
          }), EMatchProcType) : EMatchProcType).CancelMatch) {
            //收到取消匹配操作
            return await this.onCancelMatchReq(matchProc.matchReqId);
          }
        }

        async onNewAppMatchReq(matchReqId) {
          let matchReq = await this.reqHelper.getMatchRequest(this.appId, matchReqId);

          if (!matchReq) {
            //全局请求数据已经被删除,则忽略
            (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger).warn('AppMatchRequestMgr', '匹配请求已经被删除!', this.appId, matchReqId);
            return;
          }

          let matcher = this.matchers.get(matchReq.matcherKey);

          if (!matcher) {
            //没实现的匹配器,设置匹配失败结果
            return await this.faildMatchRequest(matchReq, `没有对应的匹配器实现${matchReq.matcherKey}`, (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).MatchMatcherNotFound);
          }

          if (matchReq.matchFromType === (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
            error: Error()
          }), EMatchFromType) : EMatchFromType).RoomJoinUs) {
            //如果是房间招人匹配, 则需要提交房间id
            if (!matchReq.matchFromInfo.roomId) {
              return await this.faildMatchRequest(matchReq, `matchFromInfo.roomId不能为空！`, (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).ParamsError);
            }
          } //验证都通过了,加入匹配请求!


          let matcherAllReqs = await this.addNewMatchReq(matchReq); //停止定时轮询

          this.stopPollReqs(); //匹配器执行得到结果

          (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
            error: Error()
          }), logger) : logger).log('AppMatchRequestMgr', `onNewMatchReq:${matcher.matcherKey},matcherReqsCount:${matcherAllReqs.length}`);
          let ret = matcher.onNewMatchReq(matchReq, matcherAllReqs.slice());
          await this.procMatcherExecResult(ret, matcherAllReqs, matchReq); //重新开始定时轮询

          this.startPollAllReqs();
        }

        async onCancelMatchReq(matchReqId) {
          let matchReq = this.allReqs.get(matchReqId);

          if (!matchReq) {
            //如果不在本地，则尝试读取redis中的
            matchReq = await this.reqHelper.getMatchRequest(this.appId, matchReqId);

            if (!matchReq) {
              //还是没有，则忽略掉，当作已经完成取消！
              return;
            }
          }

          let matcherReqs = this.allMatcherReqs.get(matchReq.matcherKey);

          if (!matcherReqs) {
            matcherReqs = new (_crd && MatcherRequests === void 0 ? (_reportPossibleCrUseOfMatcherRequests({
              error: Error()
            }), MatcherRequests) : MatcherRequests)(matchReq.matcherKey);
            this.allMatcherReqs.set(matcherReqs.matcherKey, matcherReqs);
          }

          let result = (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('请求被取消', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).MatchRequestCancelled);
          this.setMatchRequestResult(matchReq, result, matcherReqs);
        }
        /**
         * 处理匹配器执行结果
         *
         * @protected
         * @param result
         * @param matcherAllReqs 匹配器下的所有匹配请求, 只有在新的匹配请求且没对应匹配器时，才没得传！
         * @param currReq 针对单个匹配请求触发时
         * @returns
         */


        async procMatcherExecResult(result, matcherAllReqs, currReq) {
          if (result.resultErrCode || result.resultErrMsg) {
            var _result$resultErrMsg, _result$resultErrCode;

            result.resultErrMsg = (_result$resultErrMsg = result.resultErrMsg) != null ? _result$resultErrMsg : '匹配失败';
            result.resultErrCode = (_result$resultErrCode = result.resultErrCode) != null ? _result$resultErrCode : (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).MatchUnknown; //有错误，并且有指定请求，才设置当前请求为失败

            if (currReq) {
              this.faildMatchRequest(currReq, result.resultErrMsg, result.resultErrCode);
              return;
            }

            if (matcherAllReqs) {
              for (let req of matcherAllReqs) {
                this.faildMatchRequest(req, result.resultErrMsg, result.resultErrCode);
              }

              return;
            }

            return;
          }

          if (!result.hasResult) {
            //没结果直接返回
            return;
          }

          if (!matcherAllReqs) {
            //正常这里要传当前匹配器下的所有请求,如果没有
            (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger).error(`AppMatchRequestMgr.procMatcherExecResult 都有结果了，还没传匹配器下所有匹配请求！`);
            return;
          }

          if (result.resultCreateRoom) {
            //匹配结果有创建房间
            for (let createRoomResult of result.resultCreateRoom) {
              if (createRoomResult.matchRequestPlayerResults.length <= 0) continue;
              let createRoomRet = await this.gameClusterTerminal.createRoom(this.appId, createRoomResult.createRoomPara, (_crd && ERoomCreateType === void 0 ? (_reportPossibleCrUseOfERoomCreateType({
                error: Error()
              }), ERoomCreateType) : ERoomCreateType).MATCH_CREATE);

              if (!createRoomRet.succ) {
                createRoomResult.matchRequestPlayerResults.forEach(async reqPlayerResult => {
                  let req = matcherAllReqs.find(r => r.matchReqId === reqPlayerResult.matchReqId);
                  if (!req) return;
                  await this.faildMatchRequest(req, createRoomRet.err, createRoomRet.code);
                });
                return;
              }

              let roomOnlineInfo = createRoomRet.data;
              let matchTeamsPlayerIds = [];
              let firstReq; //分派请求结果, 同时匹配结果的玩家信息转成队伍玩家的结构

              for (let reqPlayerResult of createRoomResult.matchRequestPlayerResults) {
                let req = matcherAllReqs.find(r => r.matchReqId === reqPlayerResult.matchReqId);
                if (!req) continue;
                if (!firstReq) firstReq = req;

                for (let playerRet of reqPlayerResult.matchPlayerResults) {
                  (_crd && teamPlayerIdsAddSingle === void 0 ? (_reportPossibleCrUseOfteamPlayerIdsAddSingle({
                    error: Error()
                  }), teamPlayerIdsAddSingle) : teamPlayerIdsAddSingle)(matchTeamsPlayerIds, playerRet.playerId, playerRet.teamId);
                }

                let matchResult = {
                  roomId: roomOnlineInfo.roomId,
                  gameServerUrl: roomOnlineInfo.gameServerUrl,
                  matchPlayerResults: reqPlayerResult.matchPlayerResults
                };
                await this.succMatchRequest(req, matchResult, matcherAllReqs);
              }

              if (createRoomResult.roomJoinUsMatch) {
                //创建好的房间,如果还需要继续招人匹配
                //则构建匹配请求数据,并加入本管理(将在下个轮询或者下个新匹配时触发)
                let useReq = firstReq;
                let roomJoinUsReq = (_crd && buildRoomJoinUsMatchRequest === void 0 ? (_reportPossibleCrUseOfbuildRoomJoinUsMatchRequest({
                  error: Error()
                }), buildRoomJoinUsMatchRequest) : buildRoomJoinUsMatchRequest)(useReq, roomOnlineInfo.roomId, matchTeamsPlayerIds);
                await this.addNewMatchReq(roomJoinUsReq);
              }
            }
          }

          if (result.resultJoinRoom) {
            //匹配结果有加入房间
            for (let joinRoomResult of result.resultJoinRoom) {
              //找到要加入的房间的注册信息
              let getRoomOLInfo = await this.gameClusterTerminal.getRoomOnlineInfo(joinRoomResult.joinRoomId);

              if (!getRoomOLInfo.succ) {
                joinRoomResult.matchRequestPlayerResults.forEach(async reqPlayerResult => {
                  let req = matcherAllReqs.find(r => r.matchReqId === reqPlayerResult.matchReqId);
                  if (!req) return; //房间已经被解散, 但因为对玩家来说是加入一个现有房间, 所以还是返回服务器爆满

                  await this.faildMatchRequest(req, getRoomOLInfo.err, getRoomOLInfo.code);
                });
                return;
              } //要追加到房间的队伍玩家列表


              let matchTeamsPlayerIds = []; //分派请求结果, 同时匹配结果的玩家信息转成队伍玩家的结构

              for (let reqPlayerResult of joinRoomResult.matchRequestPlayerResults) {
                let req = matcherAllReqs.find(r => r.matchReqId === reqPlayerResult.matchReqId);
                if (!req) continue;

                for (let playerRet of reqPlayerResult.matchPlayerResults) {
                  (_crd && teamPlayerIdsAddSingle === void 0 ? (_reportPossibleCrUseOfteamPlayerIdsAddSingle({
                    error: Error()
                  }), teamPlayerIdsAddSingle) : teamPlayerIdsAddSingle)(matchTeamsPlayerIds, playerRet.playerId, playerRet.teamId);
                }

                let matchResult = {
                  roomId: joinRoomResult.joinRoomId,
                  gameServerUrl: getRoomOLInfo.data.gameServerUrl,
                  matchPlayerResults: reqPlayerResult.matchPlayerResults
                };
                await this.succMatchRequest(req, matchResult, matcherAllReqs);
              }

              let roomJoinUsMatch = this.roomJoinUsReq.get(joinRoomResult.joinRoomId);

              if (roomJoinUsMatch) {
                //这个房间存在招人匹配,则需要额外处理
                let fromInfo = roomJoinUsMatch.matchFromInfo; //将结果中增加的匹配玩家,追加到这个房间的队伍玩家数据中

                (_crd && teamPlayerIdsAdd === void 0 ? (_reportPossibleCrUseOfteamPlayerIdsAdd({
                  error: Error()
                }), teamPlayerIdsAdd) : teamPlayerIdsAdd)(fromInfo.teamsPlayerIds, matchTeamsPlayerIds);

                if (!joinRoomResult.roomJoinUsMatch) {
                  //加入的房间,要求停止招人匹配,执行清除数据
                  this.removeMatchRequestAndResult(roomJoinUsMatch);
                }
              }
            }
          }
        }
        /**
         * 设置匹配请求结果,并移除本地数据
         *
         * @protected
         * @param matchReq
         * @param result
         * @param matcherAllReqs 如果有获取好的匹配器所有请求,则传入
         * @returns
         */


        async setMatchRequestResult(matchReq, result, matcherAllReqs) {
          if (!matcherAllReqs) {
            matcherAllReqs = this.allMatcherReqs.get(matchReq.matcherKey);
          }

          if (matcherAllReqs) {
            //匹配器请求中移除
            (_crd && arrRemoveItems === void 0 ? (_reportPossibleCrUseOfarrRemoveItems({
              error: Error()
            }), arrRemoveItems) : arrRemoveItems)(matcherAllReqs, r => r.matchReqId === matchReq.matchReqId);
          } //从所有请求中移除


          this.allReqs.delete(matchReq.matchReqId); //如果是房间招人的匹配,则同步删除房间招人匹配列表

          if (matchReq.matchFromType === (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
            error: Error()
          }), EMatchFromType) : EMatchFromType).RoomJoinUs) {
            this.roomJoinUsReq.delete(matchReq.matchFromInfo.roomId);
          } //设置redis中的匹配结果


          return await this.reqHelper.setMatchRequestResult(this.appId, matchReq, result);
        }
        /**
         * 移除匹配请求数据(本地和redis), 只有在不需要结果的情况下,才直接删除(比如已经拿到结果 或者 系统类型取消如房间招人匹配)
         *
         * @protected
         * @param matchReq
         * @param matcherAllReqs 如果有获取好的匹配器所有请求,则传入
         * @returns
         */


        async removeMatchRequestAndResult(matchReq, matcherAllReqs) {
          if (!matcherAllReqs) {
            matcherAllReqs = this.allMatcherReqs.get(matchReq.matcherKey);
          }

          if (matcherAllReqs) {
            //匹配器请求中移除
            (_crd && arrRemoveItems === void 0 ? (_reportPossibleCrUseOfarrRemoveItems({
              error: Error()
            }), arrRemoveItems) : arrRemoveItems)(matcherAllReqs, r => r.matchReqId === matchReq.matchReqId);
          } //从所有请求中移除


          this.allReqs.delete(matchReq.matchReqId); //如果是房间招人的匹配,则同步删除房间招人匹配列表

          if (matchReq.matchFromType === (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
            error: Error()
          }), EMatchFromType) : EMatchFromType).RoomJoinUs) {
            this.roomJoinUsReq.delete(matchReq.matchFromInfo.roomId);
          } //删除redis中的数据


          return await this.reqHelper.removeMatchRequestAndResult(this.appId, matchReq.matchReqId);
        }
        /**
         * 设置匹配请求为失败
         *
         * @public
         * @param matchReq
         * @param errMsg
         * @param errCode 错误码请看 IMatcherExecResult 的注释
         * @param matcherAllReqs 如果有获取好的匹配器所有请求,则传入
         * @returns
         */


        async faildMatchRequest(matchReq, errMsg, errCode, matcherAllReqs) {
          await this.setMatchRequestResult(matchReq, (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr(errMsg, errCode), matcherAllReqs);
        }
        /**
         * 设置多个匹配请求为失败
         *
         * @public
         * @param matcherReqs
         * @param errMsg
         * @param errCode 错误码请看 IMatcherExecResult 的注释
         * @param matcherAllReqs 如果有获取好的匹配器所有请求,则传入
         * @returns
         */


        async faildMatchRequests(matcherReqs, errMsg, errCode, matcherAllReqs) {
          for (let req of matcherReqs) {
            await this.setMatchRequestResult(req, (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(errMsg, errCode), matcherAllReqs);
          }
        }
        /**
         * 设置匹配请求为成功
         *
         * @public
         * @param matchReq
         * @param result
         * @param matcherAllReqs 如果有获取好的匹配器所有请求,则传入
         * @returns
         */


        async succMatchRequest(matchReq, result, matcherAllReqs) {
          await this.setMatchRequestResult(matchReq, (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(result), matcherAllReqs);
        }
        /**
         * 设置多个匹配请求为成功
         *
         * @public
         * @param matcherReqs
         * @param result
         * @param matcherAllReqs 如果有获取好的匹配器所有请求,则传入
         * @returns
         */


        async succMatchRequests(matcherReqs, result, matcherAllReqs) {
          for (let req of matcherReqs) {
            await this.setMatchRequestResult(req, (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildSucc(result), matcherAllReqs);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e6e53f76059682e4699a160db06207cc2db01eae.js.map