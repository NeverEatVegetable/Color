System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MatcherRequests, buildRoomJoinUsMatchRequest, EMatchProcType, ErrorCodes, Result, EMatchFromType, ERoomRegChangedType, arrRemoveItems, arrSum, logger, ERoomCreateType, teamPlayerIdsAdd, teamPlayerIdsAddSingle, teamPlayerIdsSubtractSingle, AppMatchRequestHandler, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
          var _this = this;

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
          this.reqHelper.listenMatchProc(this.appId, /*#__PURE__*/_asyncToGenerator(function* (proc) {
            yield _this.onNewAppMatchProc(proc);
          }));
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
          var roomJoinUsReq = this.roomJoinUsReq.get(regRoomChanged.regInfo.roomId);

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
                var fromInfo = roomJoinUsReq.matchFromInfo;
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
                var _fromInfo = roomJoinUsReq.matchFromInfo;
                (_crd && teamPlayerIdsSubtractSingle === void 0 ? (_reportPossibleCrUseOfteamPlayerIdsSubtractSingle({
                  error: Error()
                }), teamPlayerIdsSubtractSingle) : teamPlayerIdsSubtractSingle)(_fromInfo.teamsPlayerIds, regRoomChanged.leaveRoomPlayerId, regRoomChanged.teamId);
                _fromInfo.currPlayerCount = (_crd && arrSum === void 0 ? (_reportPossibleCrUseOfarrSum({
                  error: Error()
                }), arrSum) : arrSum)(_fromInfo.teamsPlayerIds, t => t.playerIds.length);
              }

              break;

            case (_crd && ERoomRegChangedType === void 0 ? (_reportPossibleCrUseOfERoomRegChangedType({
              error: Error()
            }), ERoomRegChangedType) : ERoomRegChangedType).PlayerChangeTeam:
              if (roomJoinUsReq) {
                //如果存在房间招人匹配,更新人数
                var _fromInfo2 = roomJoinUsReq.matchFromInfo;
                (_crd && teamPlayerIdsSubtractSingle === void 0 ? (_reportPossibleCrUseOfteamPlayerIdsSubtractSingle({
                  error: Error()
                }), teamPlayerIdsSubtractSingle) : teamPlayerIdsSubtractSingle)(_fromInfo2.teamsPlayerIds, regRoomChanged.changePlayerId, regRoomChanged.oldTeamId);
                (_crd && teamPlayerIdsAddSingle === void 0 ? (_reportPossibleCrUseOfteamPlayerIdsAddSingle({
                  error: Error()
                }), teamPlayerIdsAddSingle) : teamPlayerIdsAddSingle)(_fromInfo2.teamsPlayerIds, regRoomChanged.changePlayerId, regRoomChanged.newTeamId);
                _fromInfo2.currPlayerCount = (_crd && arrSum === void 0 ? (_reportPossibleCrUseOfarrSum({
                  error: Error()
                }), arrSum) : arrSum)(_fromInfo2.teamsPlayerIds, t => t.playerIds.length);
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
          var _this2 = this;

          this.stopPollReqs();
          this.pollMatchReqHd = setTimeout( /*#__PURE__*/_asyncToGenerator(function* () {
            return yield _this2.pollAllReqs();
          }), 1000);
        }
        /**执行轮询所有请求（给匹配器执行自己匹配器下的请求集合）*/


        pollAllReqs() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            //处理一遍超时的
            yield _this3.pollProcTimeoutReqs();

            if (_this3.allMatcherReqs.size > 0) {
              for (var [matcherKey, matcherReqs] of _this3.allMatcherReqs) {
                var matcher = _this3.matchers.get(matcherKey);

                if (!matcher || matcherReqs.length <= 0) continue;
                (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                  error: Error()
                }), logger) : logger).log('AppMatchRequestMgr', "pollAllReqs: " + matcher.matcherKey + ",matcherReqsCount:" + matcherReqs.length);
                var result = matcher.onPollMatcherReqs(matcherReqs.slice());
                yield _this3.procMatcherExecResult(result, matcherReqs);
              }
            } //重新开始定时轮询


            _this3.startPollAllReqs();
          })();
        }
        /**新匹配请求添加进本管理器*/


        addNewMatchReq(matchReq) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            //更新请求相关字段
            matchReq.startMatchTime = Date.now(); //添加到所有请求集合中

            _this4.allReqs.set(matchReq.matchReqId, matchReq); //添加到同匹配器下的请求集合中


            var matcherAllReqs = _this4.allMatcherReqs.get(matchReq.matcherKey);

            if (!matcherAllReqs) {
              matcherAllReqs = new (_crd && MatcherRequests === void 0 ? (_reportPossibleCrUseOfMatcherRequests({
                error: Error()
              }), MatcherRequests) : MatcherRequests)(matchReq.matcherKey);

              _this4.allMatcherReqs.set(matcherAllReqs.matcherKey, matcherAllReqs);
            }

            matcherAllReqs.push(matchReq);

            if (matchReq.matchFromType === (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
              error: Error()
            }), EMatchFromType) : EMatchFromType).RoomJoinUs) {
              //如果是房间招人匹配,特殊处理一下
              var existsJoinUsReq = _this4.roomJoinUsReq.get(matchReq.matchFromInfo.roomId);

              if (existsJoinUsReq) {
                //居然存在同房间还有其他的招人匹配!正常不应该,但出现了就设置为失败
                yield _this4.faildMatchRequest(existsJoinUsReq, "\u88AB\u5176\u4ED6\u623F\u95F4\u62DB\u4EBA\u5339\u914D\u8986\u76D6\uFF01", (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                  error: Error()
                }), ErrorCodes) : ErrorCodes).MatchRequestCancelled, matcherAllReqs);
              } //放在房间招人字典里,统一管理


              _this4.roomJoinUsReq.set(matchReq.matchFromInfo.roomId, matchReq);
            }

            return matcherAllReqs;
          })();
        }

        stopPollProcTimeoutReqs() {
          if (this.pollProcTimeoutMatchReqHd) clearTimeout(this.pollProcTimeoutMatchReqHd);
          this.pollProcTimeoutMatchReqHd = null;
        }

        startPollProcTimeoutReqs() {
          var _this5 = this;

          this.stopPollProcTimeoutReqs();
          this.pollProcTimeoutMatchReqHd = setTimeout( /*#__PURE__*/_asyncToGenerator(function* () {
            return yield _this5.pollProcTimeoutReqs();
          }), 1000);
        }
        /**处理超时的匹配(设置结果并移出管理)*/


        pollProcTimeoutReqs() {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            if (_this6.allMatcherReqs.size > 0) {
              var now = Date.now();
              var timeoutReqIds = [];

              for (var matcherKey of _this6.allMatcherReqs.keys()) {
                var matcherReqs = _this6.allMatcherReqs.get(matcherKey);

                var matcher = _this6.matchers.get(matcherKey);

                if (!matcher || !matcherReqs || matcherReqs.length <= 0) continue;

                for (var i = 0; i < matcherReqs.length; i++) {
                  var req = matcherReqs[i];
                  if (!req.matchTimeoutSec) continue;

                  if (req.startMatchTime + req.matchTimeoutSec * 1000 < now) {
                    //这个请求已经超时
                    timeoutReqIds.push(req);
                  }
                }
              }

              if (timeoutReqIds.length > 0) {
                yield _this6.faildMatchRequests(timeoutReqIds, '匹配超时！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                  error: Error()
                }), ErrorCodes) : ErrorCodes).MatchTimeout);
              }
            } //重新开始定时轮询


            _this6.startPollProcTimeoutReqs();
          })();
        }
        /**当收到新匹配请求的处理*/


        onNewAppMatchProc(matchProc) {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            if (matchProc.procType === (_crd && EMatchProcType === void 0 ? (_reportPossibleCrUseOfEMatchProcType({
              error: Error()
            }), EMatchProcType) : EMatchProcType).RequestMatch) {
              //收到新的匹配请求
              return yield _this7.onNewAppMatchReq(matchProc.matchReqId);
            } else if (matchProc.procType === (_crd && EMatchProcType === void 0 ? (_reportPossibleCrUseOfEMatchProcType({
              error: Error()
            }), EMatchProcType) : EMatchProcType).CancelMatch) {
              //收到取消匹配操作
              return yield _this7.onCancelMatchReq(matchProc.matchReqId);
            }
          })();
        }

        onNewAppMatchReq(matchReqId) {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            var matchReq = yield _this8.reqHelper.getMatchRequest(_this8.appId, matchReqId);

            if (!matchReq) {
              //全局请求数据已经被删除,则忽略
              (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                error: Error()
              }), logger) : logger).warn('AppMatchRequestMgr', '匹配请求已经被删除!', _this8.appId, matchReqId);
              return;
            }

            var matcher = _this8.matchers.get(matchReq.matcherKey);

            if (!matcher) {
              //没实现的匹配器,设置匹配失败结果
              return yield _this8.faildMatchRequest(matchReq, "\u6CA1\u6709\u5BF9\u5E94\u7684\u5339\u914D\u5668\u5B9E\u73B0" + matchReq.matcherKey, (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).MatchMatcherNotFound);
            }

            if (matchReq.matchFromType === (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
              error: Error()
            }), EMatchFromType) : EMatchFromType).RoomJoinUs) {
              //如果是房间招人匹配, 则需要提交房间id
              if (!matchReq.matchFromInfo.roomId) {
                return yield _this8.faildMatchRequest(matchReq, "matchFromInfo.roomId\u4E0D\u80FD\u4E3A\u7A7A\uFF01", (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                  error: Error()
                }), ErrorCodes) : ErrorCodes).ParamsError);
              }
            } //验证都通过了,加入匹配请求!


            var matcherAllReqs = yield _this8.addNewMatchReq(matchReq); //停止定时轮询

            _this8.stopPollReqs(); //匹配器执行得到结果


            (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger).log('AppMatchRequestMgr', "onNewMatchReq:" + matcher.matcherKey + ",matcherReqsCount:" + matcherAllReqs.length);
            var ret = matcher.onNewMatchReq(matchReq, matcherAllReqs.slice());
            yield _this8.procMatcherExecResult(ret, matcherAllReqs, matchReq); //重新开始定时轮询

            _this8.startPollAllReqs();
          })();
        }

        onCancelMatchReq(matchReqId) {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            var matchReq = _this9.allReqs.get(matchReqId);

            if (!matchReq) {
              //如果不在本地，则尝试读取redis中的
              matchReq = yield _this9.reqHelper.getMatchRequest(_this9.appId, matchReqId);

              if (!matchReq) {
                //还是没有，则忽略掉，当作已经完成取消！
                return;
              }
            }

            var matcherReqs = _this9.allMatcherReqs.get(matchReq.matcherKey);

            if (!matcherReqs) {
              matcherReqs = new (_crd && MatcherRequests === void 0 ? (_reportPossibleCrUseOfMatcherRequests({
                error: Error()
              }), MatcherRequests) : MatcherRequests)(matchReq.matcherKey);

              _this9.allMatcherReqs.set(matcherReqs.matcherKey, matcherReqs);
            }

            var result = (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('请求被取消', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).MatchRequestCancelled);

            _this9.setMatchRequestResult(matchReq, result, matcherReqs);
          })();
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


        procMatcherExecResult(result, matcherAllReqs, currReq) {
          var _this10 = this;

          return _asyncToGenerator(function* () {
            if (result.resultErrCode || result.resultErrMsg) {
              var _result$resultErrMsg, _result$resultErrCode;

              result.resultErrMsg = (_result$resultErrMsg = result.resultErrMsg) != null ? _result$resultErrMsg : '匹配失败';
              result.resultErrCode = (_result$resultErrCode = result.resultErrCode) != null ? _result$resultErrCode : (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).MatchUnknown; //有错误，并且有指定请求，才设置当前请求为失败

              if (currReq) {
                _this10.faildMatchRequest(currReq, result.resultErrMsg, result.resultErrCode);

                return;
              }

              if (matcherAllReqs) {
                for (var req of matcherAllReqs) {
                  _this10.faildMatchRequest(req, result.resultErrMsg, result.resultErrCode);
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
              }), logger) : logger).error("AppMatchRequestMgr.procMatcherExecResult \u90FD\u6709\u7ED3\u679C\u4E86\uFF0C\u8FD8\u6CA1\u4F20\u5339\u914D\u5668\u4E0B\u6240\u6709\u5339\u914D\u8BF7\u6C42\uFF01");
              return;
            }

            if (result.resultCreateRoom) {
              var _loop = function* _loop() {
                if (createRoomResult.matchRequestPlayerResults.length <= 0) return 0; // continue

                var createRoomRet = yield _this10.gameClusterTerminal.createRoom(_this10.appId, createRoomResult.createRoomPara, (_crd && ERoomCreateType === void 0 ? (_reportPossibleCrUseOfERoomCreateType({
                  error: Error()
                }), ERoomCreateType) : ERoomCreateType).MATCH_CREATE);

                if (!createRoomRet.succ) {
                  createRoomResult.matchRequestPlayerResults.forEach( /*#__PURE__*/_asyncToGenerator(function* (reqPlayerResult) {
                    var req = matcherAllReqs.find(r => r.matchReqId === reqPlayerResult.matchReqId);
                    if (!req) return;
                    yield _this10.faildMatchRequest(req, createRoomRet.err, createRoomRet.code);
                  }));
                  return {
                    v: void 0
                  };
                }

                var roomOnlineInfo = createRoomRet.data;
                var matchTeamsPlayerIds = [];
                var firstReq; //分派请求结果, 同时匹配结果的玩家信息转成队伍玩家的结构

                var _loop2 = function* _loop2(reqPlayerResult) {
                  var req = matcherAllReqs.find(r => r.matchReqId === reqPlayerResult.matchReqId);
                  if (!req) return 1; // continue

                  if (!firstReq) firstReq = req;

                  for (var playerRet of reqPlayerResult.matchPlayerResults) {
                    (_crd && teamPlayerIdsAddSingle === void 0 ? (_reportPossibleCrUseOfteamPlayerIdsAddSingle({
                      error: Error()
                    }), teamPlayerIdsAddSingle) : teamPlayerIdsAddSingle)(matchTeamsPlayerIds, playerRet.playerId, playerRet.teamId);
                  }

                  var matchResult = {
                    roomId: roomOnlineInfo.roomId,
                    gameServerUrl: roomOnlineInfo.gameServerUrl,
                    matchPlayerResults: reqPlayerResult.matchPlayerResults
                  };
                  yield _this10.succMatchRequest(req, matchResult, matcherAllReqs);
                };

                for (var reqPlayerResult of createRoomResult.matchRequestPlayerResults) {
                  if (yield* _loop2(reqPlayerResult)) continue;
                }

                if (createRoomResult.roomJoinUsMatch) {
                  //创建好的房间,如果还需要继续招人匹配
                  //则构建匹配请求数据,并加入本管理(将在下个轮询或者下个新匹配时触发)
                  var useReq = firstReq;
                  var roomJoinUsReq = (_crd && buildRoomJoinUsMatchRequest === void 0 ? (_reportPossibleCrUseOfbuildRoomJoinUsMatchRequest({
                    error: Error()
                  }), buildRoomJoinUsMatchRequest) : buildRoomJoinUsMatchRequest)(useReq, roomOnlineInfo.roomId, matchTeamsPlayerIds);
                  yield _this10.addNewMatchReq(roomJoinUsReq);
                }
              },
                  _ret;

              //匹配结果有创建房间
              for (var createRoomResult of result.resultCreateRoom) {
                _ret = yield* _loop();
                if (_ret === 0) continue;
                if (_ret) return _ret.v;
              }
            }

            if (result.resultJoinRoom) {
              var _loop3 = function* _loop3() {
                //找到要加入的房间的注册信息
                var getRoomOLInfo = yield _this10.gameClusterTerminal.getRoomOnlineInfo(joinRoomResult.joinRoomId);

                if (!getRoomOLInfo.succ) {
                  joinRoomResult.matchRequestPlayerResults.forEach( /*#__PURE__*/_asyncToGenerator(function* (reqPlayerResult) {
                    var req = matcherAllReqs.find(r => r.matchReqId === reqPlayerResult.matchReqId);
                    if (!req) return; //房间已经被解散, 但因为对玩家来说是加入一个现有房间, 所以还是返回服务器爆满

                    yield _this10.faildMatchRequest(req, getRoomOLInfo.err, getRoomOLInfo.code);
                  }));
                  return {
                    v: void 0
                  };
                } //要追加到房间的队伍玩家列表


                var matchTeamsPlayerIds = []; //分派请求结果, 同时匹配结果的玩家信息转成队伍玩家的结构

                var _loop4 = function* _loop4(reqPlayerResult) {
                  var req = matcherAllReqs.find(r => r.matchReqId === reqPlayerResult.matchReqId);
                  if (!req) return 1; // continue

                  for (var playerRet of reqPlayerResult.matchPlayerResults) {
                    (_crd && teamPlayerIdsAddSingle === void 0 ? (_reportPossibleCrUseOfteamPlayerIdsAddSingle({
                      error: Error()
                    }), teamPlayerIdsAddSingle) : teamPlayerIdsAddSingle)(matchTeamsPlayerIds, playerRet.playerId, playerRet.teamId);
                  }

                  var matchResult = {
                    roomId: joinRoomResult.joinRoomId,
                    gameServerUrl: getRoomOLInfo.data.gameServerUrl,
                    matchPlayerResults: reqPlayerResult.matchPlayerResults
                  };
                  yield _this10.succMatchRequest(req, matchResult, matcherAllReqs);
                };

                for (var reqPlayerResult of joinRoomResult.matchRequestPlayerResults) {
                  if (yield* _loop4(reqPlayerResult)) continue;
                }

                var roomJoinUsMatch = _this10.roomJoinUsReq.get(joinRoomResult.joinRoomId);

                if (roomJoinUsMatch) {
                  //这个房间存在招人匹配,则需要额外处理
                  var fromInfo = roomJoinUsMatch.matchFromInfo; //将结果中增加的匹配玩家,追加到这个房间的队伍玩家数据中

                  (_crd && teamPlayerIdsAdd === void 0 ? (_reportPossibleCrUseOfteamPlayerIdsAdd({
                    error: Error()
                  }), teamPlayerIdsAdd) : teamPlayerIdsAdd)(fromInfo.teamsPlayerIds, matchTeamsPlayerIds);

                  if (!joinRoomResult.roomJoinUsMatch) {
                    //加入的房间,要求停止招人匹配,执行清除数据
                    _this10.removeMatchRequestAndResult(roomJoinUsMatch);
                  }
                }
              },
                  _ret2;

              //匹配结果有加入房间
              for (var joinRoomResult of result.resultJoinRoom) {
                _ret2 = yield* _loop3();
                if (_ret2) return _ret2.v;
              }
            }
          })();
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


        setMatchRequestResult(matchReq, result, matcherAllReqs) {
          var _this11 = this;

          return _asyncToGenerator(function* () {
            if (!matcherAllReqs) {
              matcherAllReqs = _this11.allMatcherReqs.get(matchReq.matcherKey);
            }

            if (matcherAllReqs) {
              //匹配器请求中移除
              (_crd && arrRemoveItems === void 0 ? (_reportPossibleCrUseOfarrRemoveItems({
                error: Error()
              }), arrRemoveItems) : arrRemoveItems)(matcherAllReqs, r => r.matchReqId === matchReq.matchReqId);
            } //从所有请求中移除


            _this11.allReqs.delete(matchReq.matchReqId); //如果是房间招人的匹配,则同步删除房间招人匹配列表


            if (matchReq.matchFromType === (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
              error: Error()
            }), EMatchFromType) : EMatchFromType).RoomJoinUs) {
              _this11.roomJoinUsReq.delete(matchReq.matchFromInfo.roomId);
            } //设置redis中的匹配结果


            return yield _this11.reqHelper.setMatchRequestResult(_this11.appId, matchReq, result);
          })();
        }
        /**
         * 移除匹配请求数据(本地和redis), 只有在不需要结果的情况下,才直接删除(比如已经拿到结果 或者 系统类型取消如房间招人匹配)
         *
         * @protected
         * @param matchReq
         * @param matcherAllReqs 如果有获取好的匹配器所有请求,则传入
         * @returns
         */


        removeMatchRequestAndResult(matchReq, matcherAllReqs) {
          var _this12 = this;

          return _asyncToGenerator(function* () {
            if (!matcherAllReqs) {
              matcherAllReqs = _this12.allMatcherReqs.get(matchReq.matcherKey);
            }

            if (matcherAllReqs) {
              //匹配器请求中移除
              (_crd && arrRemoveItems === void 0 ? (_reportPossibleCrUseOfarrRemoveItems({
                error: Error()
              }), arrRemoveItems) : arrRemoveItems)(matcherAllReqs, r => r.matchReqId === matchReq.matchReqId);
            } //从所有请求中移除


            _this12.allReqs.delete(matchReq.matchReqId); //如果是房间招人的匹配,则同步删除房间招人匹配列表


            if (matchReq.matchFromType === (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
              error: Error()
            }), EMatchFromType) : EMatchFromType).RoomJoinUs) {
              _this12.roomJoinUsReq.delete(matchReq.matchFromInfo.roomId);
            } //删除redis中的数据


            return yield _this12.reqHelper.removeMatchRequestAndResult(_this12.appId, matchReq.matchReqId);
          })();
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


        faildMatchRequest(matchReq, errMsg, errCode, matcherAllReqs) {
          var _this13 = this;

          return _asyncToGenerator(function* () {
            yield _this13.setMatchRequestResult(matchReq, (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(errMsg, errCode), matcherAllReqs);
          })();
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


        faildMatchRequests(matcherReqs, errMsg, errCode, matcherAllReqs) {
          var _this14 = this;

          return _asyncToGenerator(function* () {
            for (var req of matcherReqs) {
              yield _this14.setMatchRequestResult(req, (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildErr(errMsg, errCode), matcherAllReqs);
            }
          })();
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


        succMatchRequest(matchReq, result, matcherAllReqs) {
          var _this15 = this;

          return _asyncToGenerator(function* () {
            yield _this15.setMatchRequestResult(matchReq, (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildSucc(result), matcherAllReqs);
          })();
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


        succMatchRequests(matcherReqs, result, matcherAllReqs) {
          var _this16 = this;

          return _asyncToGenerator(function* () {
            for (var req of matcherReqs) {
              yield _this16.setMatchRequestResult(req, (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildSucc(result), matcherAllReqs);
            }
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e6e53f76059682e4699a160db06207cc2db01eae.js.map