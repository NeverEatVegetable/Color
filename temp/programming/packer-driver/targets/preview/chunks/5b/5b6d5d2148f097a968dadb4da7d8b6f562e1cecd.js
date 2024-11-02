System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, RedisQueue, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfIRedisClient(extras) {
    _reporterNs.report("IRedisClient", "./redisHelper", _context.meta, extras);
  }

  _export("RedisQueue", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a868iNMQtEQ7+U0kLWzZZE", "Queue", undefined);
      /**（跨服务器）队列接口*/


      /**redis队列实现, 需要调用init进行异步初始化*/
      _export("RedisQueue", RedisQueue = class RedisQueue {
        constructor(getRedisClient) {
          this.getRedisClient = void 0;
          this.msgCallbacks = new Map();
          this.insRedisClient = void 0;
          this.getRedisClient = getRedisClient;
        }

        listen(queueKey, callback) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.msgCallbacks.set(queueKey, callback);

            do {
              //阻塞读取，1秒超时 （阻塞的命令，需要独占连接，所以使用队列自己的连接
              var ret = yield (yield _this.getInsRedisClient()).blPopObject(queueKey, 1);

              if (ret) {
                callback(ret);
              }
            } while (_this.msgCallbacks.get(queueKey));
          })();
        }

        stopListen(queueKey) {
          this.msgCallbacks.delete(queueKey);
        }

        getSelfRedisClient() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            return yield _this2.getRedisClient(true);
          })();
        }

        getInsRedisClient() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (!_this3.insRedisClient) {
              //首次或者之前的已经断开,则全新拷贝一个自己的连接来使用
              _this3.insRedisClient = yield _this3.getRedisClient(false);
            }

            return _this3.insRedisClient;
          })();
        }

        push(queueKey, item) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            return yield (yield _this4.getSelfRedisClient()).rPushObject(queueKey, item);
          })();
        }

        pop(queueKey) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            return yield (yield _this5.getSelfRedisClient()).lPopObject(queueKey);
          })();
        }

        blockPop(queueKey) {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            //阻塞的命令，需要独占连接，所以使用全新的获取连接
            return yield (yield _this6.getInsRedisClient()).blPopObject(queueKey, 0);
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5b6d5d2148f097a968dadb4da7d8b6f562e1cecd.js.map