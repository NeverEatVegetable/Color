System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, RedisQueue, EMatchProcType, MatchRequestHelper, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfIMatchResult(extras) {
    _reporterNs.report("IMatchResult", "../../tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIQueue(extras) {
    _reporterNs.report("IQueue", "../Queue", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedisQueue(extras) {
    _reporterNs.report("RedisQueue", "../Queue", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRedisClient(extras) {
    _reporterNs.report("IRedisClient", "../redisHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchResultNotify(extras) {
    _reporterNs.report("IMatchResultNotify", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchRequest(extras) {
    _reporterNs.report("IMatchRequest", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchProc(extras) {
    _reporterNs.report("IMatchProc", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEMatchProcType(extras) {
    _reporterNs.report("EMatchProcType", "./Models", _context.meta, extras);
  }

  _export("MatchRequestHelper", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      RedisQueue = _unresolved_2.RedisQueue;
    }, function (_unresolved_3) {
      EMatchProcType = _unresolved_3.EMatchProcType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d2604UF4IZDbbaOI3i4OEgr", "MatchRequestHelper", undefined);

      /**匹配请求通用操作（跨服务器）*/
      _export("MatchRequestHelper", MatchRequestHelper = class MatchRequestHelper {
        constructor(getRedisClient) {
          this.getRedisClient = void 0;
          this.subscribeClient = void 0;
          this.matchRequestQueue = void 0;
          this.getRedisClient = getRedisClient;
          this.matchRequestQueue = new (_crd && RedisQueue === void 0 ? (_reportPossibleCrUseOfRedisQueue({
            error: Error()
          }), RedisQueue) : RedisQueue)(this.getRedisClient);
        }

        static buildMatchRequestModelRedisKey(appId, reqId) {
          return "MatchServer:AppMatchRequest:App_" + appId + ":ReqId_" + reqId + ":Model";
        }

        static buildMatchRequestLockRedisKey(appId, reqId) {
          return "MatchServer:AppMatchRequest:App_" + appId + ":ReqId_" + reqId + ":Lock";
        }

        static buildMatchRequestResultRedisKey(appId, reqId) {
          return "MatchServer:AppMatchRequest:App_" + appId + ":ReqId_" + reqId + ":Result";
        }

        static buildMatchProcQueueRedisKey(appId) {
          return "MatchServer:AppMatchProc:App_" + appId + ":Queue";
        }
        /**
         * [匹配服务器] 开始侦听匹配操作队列
         *
         * @public
         * @param appId
         * @param listen
         * @returns
         */


        listenMatchProc(appId, listen) {
          var queueKey = MatchRequestHelper.buildMatchProcQueueRedisKey(appId);
          this.matchRequestQueue.listen(queueKey, listen);
        }
        /**
         * [匹配服务器] 停止侦听匹配操作队列
         *
         * @public
         * @param appId
         */


        stopListenMatchProc(appId) {
          var queueKey = MatchRequestHelper.buildMatchProcQueueRedisKey(appId);
          this.matchRequestQueue.stopListen(queueKey);
        }
        /**
         * [大厅服务器、游戏服务器] 推送请求匹配操作到队列
         *
         * @public
         * @param appId
         * @param req
         * @returns
         */


        pushRequestMatchProc(appId, req) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var _req$matchTimeoutSec;

            var modelKey = MatchRequestHelper.buildMatchRequestModelRedisKey(appId, req.matchReqId);
            var lockKey = MatchRequestHelper.buildMatchRequestLockRedisKey(appId, req.matchReqId);
            var redisTimeoutSec = ((_req$matchTimeoutSec = req.matchTimeoutSec) != null ? _req$matchTimeoutSec : 60) + 600; //redis的过期时间为匹配请求过期时间再加10分钟

            var client = yield _this.getRedisClient(true);
            client.setObject(modelKey, req, redisTimeoutSec); //设置值为1，通过递减，并发的话值为0的只会有一个，来确保唯一处理结果

            client.setString(lockKey, "1", redisTimeoutSec);
            var queueKey = MatchRequestHelper.buildMatchProcQueueRedisKey(appId);
            var matchProc = {
              procType: (_crd && EMatchProcType === void 0 ? (_reportPossibleCrUseOfEMatchProcType({
                error: Error()
              }), EMatchProcType) : EMatchProcType).RequestMatch,
              matchReqId: req.matchReqId
            };

            _this.matchRequestQueue.push(queueKey, matchProc);
          })();
        }
        /**
         * [大厅服务器、游戏服务器] 推送取消匹配操作到队列
         *
         * @public
         * @param appId
         * @param matchReqId
         * @returns
         */


        pushCancelMatchProc(appId, matchReqId) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var queueKey = MatchRequestHelper.buildMatchProcQueueRedisKey(appId);
            var matchProc = {
              procType: (_crd && EMatchProcType === void 0 ? (_reportPossibleCrUseOfEMatchProcType({
                error: Error()
              }), EMatchProcType) : EMatchProcType).CancelMatch,
              matchReqId: matchReqId
            };

            _this2.matchRequestQueue.push(queueKey, matchProc);
          })();
        }
        /**
         * [大厅服务器、游戏服务器、匹配服务器] 获取匹配请求
         *
         * @public
         * @param appId 
         * @param reqId 
         * @returns
         */


        getMatchRequest(appId, reqId) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var resultKey = MatchRequestHelper.buildMatchRequestModelRedisKey(appId, reqId);
            var ret = yield (yield _this3.getRedisClient(true)).getObject(resultKey);
            if (!ret) return null;
            return ret;
          })();
        }
        /**
         * 设置请求结果，只有返回true才表示设置成功，false则表示其他并发抢去了，请忽略这次匹配结果，防止影响到抢下并发的逻辑
         * 使用 startListenMatchResult 来侦听全局匹配结果的消息
         *
         * @public
         * @param appId
         * @param req
         * @param result
         * @returns
         */


        setMatchRequestResult(appId, req, result) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var lockKey = MatchRequestHelper.buildMatchRequestLockRedisKey(appId, req.matchReqId);
            var redisClient = yield _this4.getRedisClient(true);
            var inc = yield redisClient.decr(lockKey);

            if (inc !== 0) {
              //成功递减为0的才表示抢下并发了，其他值则为并发落后了！
              return false;
            } //设置结果对象到redis


            var resultKey = MatchRequestHelper.buildMatchRequestResultRedisKey(appId, req.matchReqId);
            yield redisClient.setObject(resultKey, result, 600); // 推送结果通知, 不需要等待

            _this4.pubMatchRequestResult(req, result);

            return true;
          })();
        }
        /**
         *推送匹配结果到订阅频道, 让所有订阅结果的地方都能收到, 独立的数据通道,其他redis键删掉也不影响结果频道获取数据
         *
         * @param req
         * @param result
         */


        pubMatchRequestResult(req, result) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            var redisClient = yield _this5.getRedisClient(true); //将结果消息推送到订阅消息

            yield redisClient.publishObject("MatchRequestsResult", {
              request: req,
              result: result
            });
          })();
        }
        /**
         * 获取匹配请求结果
         *
         * @public
         * @param appId 
         * @param reqId 
         * @returns
         */


        getMatchRequestResult(appId, reqId) {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            var resultKey = MatchRequestHelper.buildMatchRequestResultRedisKey(appId, reqId);
            var ret = yield (yield _this6.getRedisClient(true)).getObject(resultKey);
            if (!ret) return null;
            return ret;
          })();
        }
        /**
         * 直接移除匹配请求和结果的redis数据, 由发起请求端调用(如果是终端发起,则终端拿到结果后删除, 如果是匹配服务发起,则匹配服务有结果后调用删除)
         *
         * @public
         * @param appId
         * @param reqId
         * @returns
         */


        removeMatchRequestAndResult(appId, reqId) {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            var removeKeys = [MatchRequestHelper.buildMatchRequestModelRedisKey(appId, reqId), MatchRequestHelper.buildMatchRequestLockRedisKey(appId, reqId), MatchRequestHelper.buildMatchRequestResultRedisKey(appId, reqId)];
            yield (yield _this7.getRedisClient(true)).delete(...removeKeys);
          })();
        }
        /**
         * [大厅服务器、游戏服务器] 开始侦听全局的匹配请求结果的消息
         *
         * @public
         * @param listen
         * @returns
         */


        startListenMatchResult(listen) {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            _this8.stopListenMatchResult();

            _this8.subscribeClient = yield _this8.getRedisClient(false);
            yield _this8.subscribeClient.subscribeObject("MatchRequestsResult", item => listen(item));
          })();
        }
        /**
         * [大厅服务器、游戏服务器] 取消侦听全局的匹配请求结果
         *
         * @public
         * @returns
         */


        stopListenMatchResult() {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            if (_this9.subscribeClient) {
              _this9.subscribeClient.unsubscribe("MatchRequestsResult");

              _this9.subscribeClient.disconnect();

              _this9.subscribeClient = undefined;
            }
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=afcbcac7c4cccd50a585b2aee43f022b5e8e7243.js.map