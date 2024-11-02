System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, RedisQueue, _crd;

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

        async listen(queueKey, callback) {
          this.msgCallbacks.set(queueKey, callback);

          do {
            //阻塞读取，1秒超时 （阻塞的命令，需要独占连接，所以使用队列自己的连接
            let ret = await (await this.getInsRedisClient()).blPopObject(queueKey, 1);

            if (ret) {
              callback(ret);
            }
          } while (this.msgCallbacks.get(queueKey));
        }

        stopListen(queueKey) {
          this.msgCallbacks.delete(queueKey);
        }

        async getSelfRedisClient() {
          return await this.getRedisClient(true);
        }

        async getInsRedisClient() {
          if (!this.insRedisClient) {
            //首次或者之前的已经断开,则全新拷贝一个自己的连接来使用
            this.insRedisClient = await this.getRedisClient(false);
          }

          return this.insRedisClient;
        }

        async push(queueKey, item) {
          return await (await this.getSelfRedisClient()).rPushObject(queueKey, item);
        }

        async pop(queueKey) {
          return await (await this.getSelfRedisClient()).lPopObject(queueKey);
        }

        async blockPop(queueKey) {
          //阻塞的命令，需要独占连接，所以使用全新的获取连接
          return await (await this.getInsRedisClient()).blPopObject(queueKey, 0);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5b6d5d2148f097a968dadb4da7d8b6f562e1cecd.js.map