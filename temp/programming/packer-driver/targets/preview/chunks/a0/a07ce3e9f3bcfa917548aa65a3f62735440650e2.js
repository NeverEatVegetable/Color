System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EMatchFromType, ErrorCodes, Result, MatchRequestHelper, initMatchRequest, MatchRequestTerminal, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfEMatchFromType(extras) {
    _reporterNs.report("EMatchFromType", "../../tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchResult(extras) {
    _reporterNs.report("IMatchResult", "../../tsgf/match/Models", _context.meta, extras);
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

  function _reportPossibleCrUseOfMatchRequestHelper(extras) {
    _reporterNs.report("MatchRequestHelper", "./MatchRequestHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchRequestParams(extras) {
    _reporterNs.report("IMatchRequestParams", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchResultNotify(extras) {
    _reporterNs.report("IMatchResultNotify", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitMatchRequest(extras) {
    _reporterNs.report("initMatchRequest", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRedisClient(extras) {
    _reporterNs.report("IRedisClient", "../redisHelper", _context.meta, extras);
  }

  _export("MatchRequestTerminal", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EMatchFromType = _unresolved_2.EMatchFromType;
    }, function (_unresolved_3) {
      ErrorCodes = _unresolved_3.ErrorCodes;
      Result = _unresolved_3.Result;
    }, function (_unresolved_4) {
      MatchRequestHelper = _unresolved_4.MatchRequestHelper;
    }, function (_unresolved_5) {
      initMatchRequest = _unresolved_5.initMatchRequest;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1fae9AjBAZF0qcca0Llm/fU", "MatchRequestTerminal", undefined);

      /**匹配请求服务终端，由大厅或游戏服务实例使用。
       * 大厅服务器无状态服务使用
       * 游戏服务器有状态服务使用，让房间中的玩家也可以发起匹配并实时收到匹配结果并广播
       * */
      _export("MatchRequestTerminal", MatchRequestTerminal = class MatchRequestTerminal {
        /**
         *
         * @param getRedisClient
         * @param useStateServer 是否启用状态服务部署，无状态则本地不存储当前请求的状态，统一查询redis，HTTP服务部署用的
         */
        constructor(getRedisClient, useStateServer) {
          this.reqHelper = void 0;

          /**是否启用状态服务，启用则本地不存储当前请求的状态，统一查询redis，HTTP服务部署用的*/
          this.useStateServer = void 0;

          /**当前匹配中请求的结果回调，请求ID=>结果回调, 但如果是分布式HTTP服务（无状态），则不能将临时数据保存在服务器*/
          this.matchReqsResultCallback = new Map();
          this.reqHelper = new (_crd && MatchRequestHelper === void 0 ? (_reportPossibleCrUseOfMatchRequestHelper({
            error: Error()
          }), MatchRequestHelper) : MatchRequestHelper)(getRedisClient);
          this.useStateServer = useStateServer;
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.useStateServer) {
              yield _this.reqHelper.startListenMatchResult(notify => {
                _this.procGlobalMatchResultNotify(notify);
              });
            }
          })();
        }

        stop() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (_this2.useStateServer) {
              yield _this2.reqHelper.stopListenMatchResult();
            }
          })();
        }

        procGlobalMatchResultNotify(notify) {
          var resultCallback = this.matchReqsResultCallback.get(notify.request.matchReqId);

          if (resultCallback) {
            resultCallback(notify.result);
          }
        }
        /**
         * 请求一次匹配, 返回匹配请求ID，用于查询请求结果
         *
         * @public
         * @param appId
         * @param matchParams
         * @param callback 只有状态服务的终端(useStateServer=true),才可以设置结果回调,如大厅服务需要自己轮询查询结果
         * @param limit 是否限制请求参数, 来自服务端构建的则不需要限制, 比如房间招人匹配
         * @returns
         */


        requestMatch(appId, matchParams, callback, limit) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (limit === void 0) {
              limit = true;
            }

            var req = (_crd && initMatchRequest === void 0 ? (_reportPossibleCrUseOfinitMatchRequest({
              error: Error()
            }), initMatchRequest) : initMatchRequest)(matchParams, limit);
            yield _this3.reqHelper.pushRequestMatchProc(appId, req);

            if (_this3.useStateServer) {
              //如果是有状态服务，则保存到本地，设置回调，接收到后回调
              if (callback) {
                //有设置回调才这样处理
                _this3.matchReqsResultCallback.set(req.matchReqId, result => {
                  _this3.matchReqsResultCallback.delete(req.matchReqId); // 结果回来了就


                  _this3.reqHelper.removeMatchRequestAndResult(appId, req.matchReqId);

                  callback(result);
                });
              }
            }

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildSucc(req.matchReqId);
          })();
        }
        /**
         * [无状态服务专用] 查询匹配结果，如果有结果则完成本次匹配请求（会清理本次请求的所有数据，即下次再查询就获取不到结果了）
         *
         * @public
         * @param appId
         * @param matchReqId
         * @returns 还没有结果则返回null，如果有结果则返回结果的IResult
         */


        queryMatch(appId, matchReqId) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            if (_this4.useStateServer) {
              throw Error("有状态服务，不可单独使用查询，因为请求时已经设置了回调，结果将走回调，这里查询不到！");
            }

            var result = yield _this4.reqHelper.getMatchRequestResult(appId, matchReqId);
            if (!result) return null; // 查询到结果了, 把匹配请求和结果数据都删除

            yield _this4.reqHelper.removeMatchRequestAndResult(appId, matchReqId);
            return result;
          })();
        }
        /**
         * 取消匹配
         *
         * @public
         * @param appId
         * @param matchReqId
         * @returns
         */


        cancelMatch(appId, matchReqId, currPlayerId) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            var req = yield _this5.reqHelper.getMatchRequest(appId, matchReqId);

            if (!req) {
              //匹配请求已经不存在，则直接认为成功
              return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildSucc(null);
            }

            switch (req.matchFromType) {
              case (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
                error: Error()
              }), EMatchFromType) : EMatchFromType).RoomJoinUs:
                //return Result.buildErr('房间匹配由房间属性自动启动匹配，不能手动开始匹配或取消！', ErrorCodes.ParamsError);
                break;

              case (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
                error: Error()
              }), EMatchFromType) : EMatchFromType).Player:
                {
                  var fromInfo = req.matchFromInfo;

                  if (!currPlayerId || !fromInfo.playerIds.includes(currPlayerId)) {
                    return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                      error: Error()
                    }), Result) : Result).buildErr('只有匹配的玩家才可以取消匹配！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                      error: Error()
                    }), ErrorCodes) : ErrorCodes).MatchPermissionDenied);
                  }

                  break;
                }

              case (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
                error: Error()
              }), EMatchFromType) : EMatchFromType).RoomAllPlayers:
                {
                  var _fromInfo = req.matchFromInfo;

                  if (!currPlayerId || !_fromInfo.playerIds.includes(currPlayerId)) {
                    return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                      error: Error()
                    }), Result) : Result).buildErr('只有匹配的玩家才可以取消匹配！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                      error: Error()
                    }), ErrorCodes) : ErrorCodes).MatchPermissionDenied);
                  }

                  break;
                }
            } //将取消匹配操作推入队列，让匹配服务器接收处理(清理数据)


            yield _this5.reqHelper.pushCancelMatchProc(appId, matchReqId);
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildSucc(null);
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a07ce3e9f3bcfa917548aa65a3f62735440650e2.js.map