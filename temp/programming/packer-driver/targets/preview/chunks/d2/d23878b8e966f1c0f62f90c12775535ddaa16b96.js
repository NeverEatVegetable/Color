System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EMatchFromType, arrGroup, arrRemoveItems, arrSum, MatcherSingle, _crd;

  function _reportPossibleCrUseOfEMatchFromType(extras) {
    _reporterNs.report("EMatchFromType", "../../tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISingleMatcherParams(extras) {
    _reporterNs.report("ISingleMatcherParams", "../../tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchFromPlayer(extras) {
    _reporterNs.report("IMatchFromPlayer", "../../tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfarrGroup(extras) {
    _reporterNs.report("arrGroup", "../../tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfarrRemoveItems(extras) {
    _reporterNs.report("arrRemoveItems", "../../tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfarrSum(extras) {
    _reporterNs.report("arrSum", "../../tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatcher(extras) {
    _reporterNs.report("IMatcher", "./IMatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchRequest(extras) {
    _reporterNs.report("IMatchRequest", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatcherExecResult(extras) {
    _reporterNs.report("IMatcherExecResult", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatcherExecResultJoinRoom(extras) {
    _reporterNs.report("IMatcherExecResultJoinRoom", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatcherExecResultCreateRoom(extras) {
    _reporterNs.report("IMatcherExecResultCreateRoom", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchFromRoomJoinUsOnServer(extras) {
    _reporterNs.report("IMatchFromRoomJoinUsOnServer", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchRequestPlayerResults(extras) {
    _reporterNs.report("IMatchRequestPlayerResults", "./Models", _context.meta, extras);
  }

  _export("MatcherSingle", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EMatchFromType = _unresolved_2.EMatchFromType;
    }, function (_unresolved_3) {
      arrGroup = _unresolved_3.arrGroup;
      arrRemoveItems = _unresolved_3.arrRemoveItems;
      arrSum = _unresolved_3.arrSum;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4ee4cLroGBJPqyOo9fW27Wb", "MatcherSingle", undefined);

      /**单人(无组队)匹配器
       * ISingleMatcherParams
      */
      _export("MatcherSingle", MatcherSingle = class MatcherSingle {
        constructor() {
          this.matcherKey = 'Single';
        }

        matchAllReqs(allReqs) {
          var _this = this;

          var joinRoomResults = [];
          var createRoomResults = [];
          var roomJoinUsReqs = [];
          var playerReqs = [];
          allReqs.forEach(r => {
            switch (r.matchFromType) {
              case (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
                error: Error()
              }), EMatchFromType) : EMatchFromType).RoomJoinUs:
                roomJoinUsReqs.push(r);
                break;

              case (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
                error: Error()
              }), EMatchFromType) : EMatchFromType).Player:
              case (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
                error: Error()
              }), EMatchFromType) : EMatchFromType).RoomAllPlayers:
                playerReqs.push(r);
                break;
            }
          }); //=====房间招人匹配, 即招人的房间先挑人,挑满后剩下的再看能否匹配成功
          //排序, 先请求的先满足

          this.sortByReqTime(roomJoinUsReqs);

          var _loop = function _loop(checkReq) {
            var fromInfo = checkReq.matchFromInfo; //相同匹配分组的

            var matchReqs = playerReqs.filter(r => r.matchReqGroupKey === checkReq.matchReqGroupKey);

            if (matchReqs.length > 0) {
              var ret = _this.matchPlayerReqs(playerReqs, checkReq, fromInfo.currPlayerCount, false, matchReqs);

              if (ret.matchRequestPlayerResults.length > 0) {
                var roomJoinUsMatch = true;
                var matchPlayerCount = (_crd && arrSum === void 0 ? (_reportPossibleCrUseOfarrSum({
                  error: Error()
                }), arrSum) : arrSum)(ret.matchRequestPlayerResults, r => r.matchPlayerResults.length);

                if (fromInfo.currPlayerCount + matchPlayerCount >= checkReq.maxPlayers) {
                  //如果匹配完玩家满员,则关闭招人匹配
                  roomJoinUsMatch = false;
                } //匹配成功!


                joinRoomResults.push({
                  joinRoomId: fromInfo.roomId,
                  matchRequestPlayerResults: ret.matchRequestPlayerResults,
                  roomJoinUsMatch: roomJoinUsMatch
                });
              }
            }
          };

          for (var checkReq of roomJoinUsReqs) {
            _loop(checkReq);
          } //=====玩家匹配
          //根据匹配分组遍历, 组内匹配时间排序, 依次找有没满足minPlayers的匹配


          var maxPlayersReqs = (_crd && arrGroup === void 0 ? (_reportPossibleCrUseOfarrGroup({
            error: Error()
          }), arrGroup) : arrGroup)(playerReqs, r => r.matchReqGroupKey);

          for (var group of maxPlayersReqs) {
            //组内匹配时间排序
            var reqs = group[1];
            var groupMatchReqs = reqs.slice(); //拷贝一份

            this.sortByReqTime(groupMatchReqs);

            var _loop2 = function _loop2() {
              var checkReq = reqs[i]; //用原始group的,保证每个都能有一次尝试机会

              if (!groupMatchReqs.find(r => r.matchReqId === checkReq.matchReqId)) {
                //如果这个匹配请求已经被其他的匹配走了,则跳过
                return 1; // continue
              }

              var attr = checkReq.matcherParams;
              var fromInfo = checkReq.matchFromInfo; //找到不高于这个最小玩家要求的匹配

              var canPlayersMatchReqs = groupMatchReqs.filter(r => r.matchReqId !== checkReq.matchReqId && (!r.matcherParams.minPlayers || r.matcherParams.minPlayers <= attr.minPlayers));
              var playerCount = (_crd && arrSum === void 0 ? (_reportPossibleCrUseOfarrSum({
                error: Error()
              }), arrSum) : arrSum)(canPlayersMatchReqs, r => r.matchFromInfo.playerIds.length) + fromInfo.playerIds.length;

              if (playerCount >= attr.minPlayers) {
                //有包含最低要求, 调用匹配逻辑,会尽量配满!
                var ret = _this.matchPlayerReqs(groupMatchReqs, checkReq, fromInfo.playerIds.length, true, canPlayersMatchReqs);

                if (ret.matchRequestPlayerResults.length > 0) {
                  //匹配成功!
                  var roomJoinUsMatch = false;
                  var matchPlayerCount = (_crd && arrSum === void 0 ? (_reportPossibleCrUseOfarrSum({
                    error: Error()
                  }), arrSum) : arrSum)(ret.matchRequestPlayerResults, r => r.matchPlayerResults.length);

                  if (matchPlayerCount < checkReq.maxPlayers) {
                    //如果匹配玩家没满员,则根据配置来决定是否开启招人匹配
                    roomJoinUsMatch = attr.resultsContinueRoomJoinUsMatch === true;
                  }

                  createRoomResults.push({
                    createRoomPara: {
                      roomName: '系统匹配的房间',
                      ownerPlayerId: '',
                      maxPlayers: checkReq.maxPlayers,
                      isPrivate: !roomJoinUsMatch,
                      matcherKey: _this.matcherKey
                    },
                    matchRequestPlayerResults: ret.matchRequestPlayerResults,
                    roomJoinUsMatch: roomJoinUsMatch
                  }); //组里的也移除

                  (_crd && arrRemoveItems === void 0 ? (_reportPossibleCrUseOfarrRemoveItems({
                    error: Error()
                  }), arrRemoveItems) : arrRemoveItems)(groupMatchReqs, r => !!ret.matchRequestPlayerResults.find(e => e.matchReqId === r.matchReqId));
                }
              }
            };

            for (var i = 0; i < reqs.length; i++) {
              if (_loop2()) continue;
            }
          }

          if (joinRoomResults.length <= 0 && createRoomResults.length <= 0) {
            return {
              hasResult: false
            };
          }

          return {
            hasResult: true,
            resultCreateRoom: createRoomResults,
            resultJoinRoom: joinRoomResults
          };
        }
        /**
         * 匹配筛选出来的玩家列表,成功则移除allReqs里的匹配请求
         *
         * @protected
         * @param allReqs
         * @param checkReq
         * @param checkReqPlayerCount
         * @param checkReqSelfApply 匹配结果是否需要包含checkReq(同时移除)
         * @param matchPlayerReqs
         * @returns
         */


        matchPlayerReqs(allReqs, checkReq, checkReqPlayerCount, checkReqSelfApply, matchPlayerReqs) {
          this.sortByReqTime(matchPlayerReqs);
          var matchRequestPlayerResults = [];
          var playerIdCount = checkReqPlayerCount;

          var _loop3 = function _loop3(matchReq) {
            if (playerIdCount >= matchReq.maxPlayers) {
              //满员
              return 0; // break
            }

            var fromPlayerInfo = matchReq.matchFromInfo;

            if (playerIdCount + fromPlayerInfo.playerIds.length > matchReq.maxPlayers) {
              //遍历的请求加上去超过了最大玩家数,跳过
              return 1; // continue
            }

            matchRequestPlayerResults.push({
              matchReqId: matchReq.matchReqId,
              //没有队伍,直接用玩家id生成结果
              matchPlayerResults: fromPlayerInfo.playerIds.map(pid => {
                return {
                  playerId: pid
                };
              })
            });
            playerIdCount += fromPlayerInfo.playerIds.length; //匹配移除

            (_crd && arrRemoveItems === void 0 ? (_reportPossibleCrUseOfarrRemoveItems({
              error: Error()
            }), arrRemoveItems) : arrRemoveItems)(allReqs, r => r.matchReqId === matchReq.matchReqId);
          },
              _ret;

          for (var matchReq of matchPlayerReqs) {
            _ret = _loop3(matchReq);
            if (_ret === 0) break;
            if (_ret === 1) continue;
          }

          if (checkReqSelfApply) {
            (_crd && arrRemoveItems === void 0 ? (_reportPossibleCrUseOfarrRemoveItems({
              error: Error()
            }), arrRemoveItems) : arrRemoveItems)(allReqs, r => r.matchReqId === checkReq.matchReqId); //当前匹配数据是否也加入到匹配结果里(房间招人匹配就不需要加入)

            var selfReqResult = {
              matchReqId: checkReq.matchReqId,
              matchPlayerResults: []
            };

            if (checkReq.matchFromType === (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
              error: Error()
            }), EMatchFromType) : EMatchFromType).Player || checkReq.matchFromType === (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
              error: Error()
            }), EMatchFromType) : EMatchFromType).RoomAllPlayers) {
              //检测请求是来源玩家,则把玩家id也加入到结果中
              //没有队伍,直接用玩家id生成结果
              selfReqResult.matchPlayerResults.push(...checkReq.matchFromInfo.playerIds.map(pid => {
                return {
                  playerId: pid
                };
              }));
            }

            matchRequestPlayerResults.splice(0, 0, selfReqResult);
          }

          return {
            matchRequestPlayerResults
          };
        }
        /**请求按开始匹配时间排序,早的在前面*/


        sortByReqTime(reqs) {
          reqs.sort((a, b) => {
            //返回小于0则a在前
            return a.startMatchTime - b.startMatchTime;
          });
        }

        onNewMatchReq(currMatchReq, allReqs) {
          return this.matchAllReqs(allReqs);
        }

        onPollMatcherReqs(allReqs) {
          return this.matchAllReqs(allReqs);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d23878b8e966f1c0f62f90c12775535ddaa16b96.js.map