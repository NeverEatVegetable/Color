System.register(["__unresolved_0", "cc", "redis", "uuid", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, commandOptions, createClient, v4, logger, delay, RedisClient, MemRedisClient, _crd, allRedisClients, allRedisCfg;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  /**
   * 初始化指定配置的redis客户端配置,如果已经存在会断开之前的连接(相当于重置)
   * @param cfg 
   * @param configKey 根据这配置标识区分客户端
   */
  function initRedisClient(_x6, _x7) {
    return _initRedisClient.apply(this, arguments);
  }
  /**
   * 获取redis客户端(需要先调用初始化), 全局共享同配置的客户端实例
   * @param reuseClient 是否复用连接,否的只是单纯的创建一个全新的连接并返回
   * @param configKey 如果没传使用默认值
   * @returns 
   */


  function _initRedisClient() {
    _initRedisClient = _asyncToGenerator(function* (cfg, configKey) {
      if (configKey === void 0) {
        configKey = "default";
      }

      allRedisCfg.set(configKey, cfg);
      var existsClient = allRedisClients.get(configKey);
      if (existsClient) yield existsClient.disconnect();

      if (cfg.useMemRedis) {
        existsClient = new MemRedisClient();
      } else {
        existsClient = yield RedisClient.createClient(cfg);
      }

      allRedisClients.set(configKey, existsClient);
    });
    return _initRedisClient.apply(this, arguments);
  }

  function getRedisClient(_x8, _x9) {
    return _getRedisClient.apply(this, arguments);
  }

  function _getRedisClient() {
    _getRedisClient = _asyncToGenerator(function* (reuseClient, configKey) {
      if (reuseClient === void 0) {
        reuseClient = true;
      }

      if (configKey === void 0) {
        configKey = "default";
      }

      if (reuseClient) {
        var client = allRedisClients.get(configKey);
        if (client) return client;
        var cfg = allRedisCfg.get(configKey);

        if (!cfg) {
          throw new Error(configKey + "\u6807\u8BC6\u672A\u521D\u59CB\u5316\u914D\u7F6E!");
        }

        if (cfg.useMemRedis) {
          client = new MemRedisClient();
        } else {
          client = yield RedisClient.createClient(cfg);
        }

        allRedisClients.set(configKey, client);
        return client;
      } else {
        var _cfg = allRedisCfg.get(configKey);

        if (!_cfg) {
          throw new Error(configKey + "\u6807\u8BC6\u672A\u521D\u59CB\u5316\u914D\u7F6E!");
        }

        if (_cfg.useMemRedis) {
          return new MemRedisClient();
        } else {
          return yield RedisClient.createClient(_cfg);
        }
      }
    });
    return _getRedisClient.apply(this, arguments);
  }

  function _reportPossibleCrUseOfcommandOptions(extras) {
    _reporterNs.report("commandOptions", "redis", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateClient(extras) {
    _reporterNs.report("createClient", "redis", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedisClientType(extras) {
    _reporterNs.report("RedisClientType", "redis", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedisFunctions(extras) {
    _reporterNs.report("RedisFunctions", "redis", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedisModules(extras) {
    _reporterNs.report("RedisModules", "redis", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedisScripts(extras) {
    _reporterNs.report("RedisScripts", "redis", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv(extras) {
    _reporterNs.report("v4", "uuid", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedisConfig(extras) {
    _reporterNs.report("RedisConfig", "../../ServerConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOflogger(extras) {
    _reporterNs.report("logger", "../tsgf/logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../tsgf/Utils", _context.meta, extras);
  }

  _export({
    RedisClient: void 0,
    MemRedisClient: void 0,
    initRedisClient: initRedisClient,
    getRedisClient: getRedisClient
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_redis) {
      commandOptions = _redis.commandOptions;
      createClient = _redis.createClient;
    }, function (_uuid) {
      v4 = _uuid.v4;
    }, function (_unresolved_2) {
      logger = _unresolved_2.logger;
    }, function (_unresolved_3) {
      delay = _unresolved_3.delay;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "844edwq/2dE6JQnT4pUyAUO", "redisHelper", undefined);

      /**
       * redis客户端接口
       */

      /**获取redis客户端实例的方法定义*/

      /**redis客户端封装 */
      _export("RedisClient", RedisClient = class RedisClient {
        /**
         * 初始化
         * @param cfg 配置对象
         */
        constructor(cfg) {
          this.config = void 0;
          this.configUrl = void 0;
          this.client = void 0;
          this.reconnectHd = void 0;
          this.reconnectWaiting = false;

          /**是否已经显示过连接错误了*/
          this.showConnectError = false;
          this.id = void 0;
          this.id = (_crd && v4 === void 0 ? (_reportPossibleCrUseOfv({
            error: Error()
          }), v4) : v4)();
          this.config = cfg; //redis[s]://[[username][:password]@][host][:port][/db-number]:

          var url = "redis" + (this.config.ssl ? 's' : '') + "://";

          if (this.config.username) {
            url += this.config.username;

            if (this.config.password) {
              url += ":" + this.config.password;
            }

            url += "@";
          }

          url += this.config.host + ':' + this.config.port + '/' + this.config.database;
          this.configUrl = url;
          this.client = (_crd && createClient === void 0 ? (_reportPossibleCrUseOfcreateClient({
            error: Error()
          }), createClient) : createClient)({
            url: this.configUrl
          });
        }
        /**
         * 创建连接好的客户端,建议全局静态一个
         * @param cfg 
         * @returns 
         */


        static createClient(cfg) {
          return _asyncToGenerator(function* () {
            var rc = new RedisClient(cfg);
            var isFirst = true; //redis的connect()方法实现的很坑, 如果没连接成功,触发完on('error')事件后,不会resolve或者reject继续,并且还会走自动重连
            //所以这里统一封装一个连接的异步任务,兼容connect的处理流程,即使连不上,也能正常走后续

            var connTask = new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve) {
              var _rc$client, _rc$client2, _rc$client3, _rc$client4, _rc$client5;

              //实现额外的网络错误重连
              (_rc$client = rc.client) == null || _rc$client.on('error', /*#__PURE__*/_asyncToGenerator(function* (error) {
                //暂时不启用自定义重连机制,暂时先相信redis客户端自己的重连机制
                //IRedisClient.tryReconnect(rc, null);
                //logger.log(`redisClient错误[${rc.id}]!`, error);
                if (!rc.showConnectError) {
                  rc.showConnectError = true;
                  (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                    error: Error()
                  }), logger) : logger).error("redisClient\u8FDE\u63A5\u9519\u8BEF[" + rc.id + "]!(\u81EA\u52A8\u91CD\u8BD5\u4E2D...)", error);
                }

                if (isFirst) {
                  //还没连上就出错了,那就补充connect那边的异步回调
                  isFirst = false;
                  return resolve();
                }
              }));
              (_rc$client2 = rc.client) == null || _rc$client2.on('reconnecting', /*#__PURE__*/_asyncToGenerator(function* () {//logger.log(`redisClient正在重连[${rc.id}]!`);
              }));
              (_rc$client3 = rc.client) == null || _rc$client3.on('end', /*#__PURE__*/_asyncToGenerator(function* (error) {
                isFirst = false; //断开事件触发后尝试重连(如果是手动调用断开的会跳过)

                RedisClient.tryReconnect(rc, null);
              }));
              (_rc$client4 = rc.client) == null || _rc$client4.on('ready', /*#__PURE__*/_asyncToGenerator(function* (error) {
                isFirst = false;
                rc.showConnectError = false; //logger.log(`redisClient连接成功[${rc.id}]!`);
              }));
              yield (_rc$client5 = rc.client) == null ? void 0 : _rc$client5.connect(); //到这里了,说明连接成功了!返回

              return resolve();
            }));
            yield connTask;
            return rc;
          })();
        }
        /**暂时不需要自己的重连机制*/


        static tryReconnect(rc, retryEx) {
          return _asyncToGenerator(function* () {
            if (retryEx === void 0) {
              retryEx = null;
            }

            if (!rc) return;

            if (!rc.reconnectWaiting) {
              //因为error事件会多次重复触发, 所以用个标志只处理一次
              try {
                var _rc$client6;

                yield (_rc$client6 = rc.client) == null ? void 0 : _rc$client6.disconnect();
              } catch (ex) {//logger.error(`redisClient断开[${rc.id}]产生错误`, ex);
              }

              rc.reconnectWaiting = true;

              if (retryEx) {
                (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                  error: Error()
                }), logger) : logger).error("redisClient\u91CD\u8FDE\u5931\u8D25[" + rc.id + "], 2\u79D2\u540E\u518D\u6B21\u91CD\u8FDE!", retryEx);
              } else {
                (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                  error: Error()
                }), logger) : logger).error("redisClient\u65AD\u5F00[" + rc.id + "], 2\u79D2\u540E\u91CD\u8FDE\u5C1D\u8BD5!");
              }

              clearTimeout(rc.reconnectHd);
              rc.reconnectHd = setTimeout(rc => {
                if (rc) {
                  rc.reconnectWaiting = false;
                  RedisClient.reconnect(rc);
                  rc = undefined;
                }
              }, 2000, rc);
            }

            rc = undefined;
          })();
        }
        /**暂时不需要自己的重连机制*/


        static reconnect(rc) {
          return _asyncToGenerator(function* () {
            var _rc$client7;

            if (!rc) return;
            clearTimeout(rc.reconnectHd);

            if (((_rc$client7 = rc.client) == null ? void 0 : _rc$client7.isOpen) === true) {
              //开始重连时,状态就是连上的,则直接成功
              (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                error: Error()
              }), logger) : logger).log("redisClient\u91CD\u8FDE\u6210\u529F[" + rc.id + "]! [01]");
            } else {
              try {
                var _rc$client8;

                //尝试连接
                yield (_rc$client8 = rc.client) == null ? void 0 : _rc$client8.connect(); //没报错则成功

                (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                  error: Error()
                }), logger) : logger).log("redisClient\u91CD\u8FDE\u6210\u529F[" + rc.id + "]! [02]");
              } catch (ex) {
                var _rc$client9;

                if ((_rc$client9 = rc.client) != null && _rc$client9.isOpen) {
                  //报错后发现是连接状态的,则视为成功
                  (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                    error: Error()
                  }), logger) : logger).log("redisClient\u91CD\u8FDE\u6210\u529F[" + rc.id + "]! [03]");
                  return;
                } //其他错误,则再次重试


                RedisClient.tryReconnect(rc, ex);
              }
            }

            rc = undefined;
          })();
        }

        disconnect() {
          var _this = this;

          return _asyncToGenerator(function* () {
            clearTimeout(_this.reconnectHd);

            try {
              var _this$client;

              yield (_this$client = _this.client) == null ? void 0 : _this$client.disconnect();
            } catch (e) {}

            _this.client = undefined;
            _this.config = undefined;
          })();
        }
        /**
         * 删除键
         *
         * @public
         * @param keys
         * @returns
         */


        delete() {
          var _arguments = arguments,
              _this2 = this;

          return _asyncToGenerator(function* () {
            var _this2$client;

            for (var _len = _arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
              keys[_key] = _arguments[_key];
            }

            yield (_this2$client = _this2.client) == null ? void 0 : _this2$client.del(keys);
          })();
        }
        /**
         * 设置键值对,值是字符串
         * @param key 
         * @param val 
         * @param exTimeSec 在几秒后过期,0表示永不过期
         */


        setString(key, val, exTimeSec) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var _this3$client;

            if (exTimeSec === void 0) {
              exTimeSec = 0;
            }

            var opt = {};

            if (exTimeSec) {
              opt.EX = exTimeSec;
            }

            yield (_this3$client = _this3.client) == null ? void 0 : _this3$client.set(key, val, opt);
          })();
        }
        /**
         * 获取 @see setString 设置的值
         * @param key 
         * @returns 
         */


        getString(key) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var _yield$_this4$client$, _this4$client;

            return (_yield$_this4$client$ = yield (_this4$client = _this4.client) == null ? void 0 : _this4$client.get(key)) != null ? _yield$_this4$client$ : null;
          })();
        }
        /**
         * 设置键值对,值类型是对象
         * @param key 
         * @param val 
         * @param exTimeSec 在几秒后过期,0表示永不过期
         */


        setObject(key, val, exTimeSec) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            if (exTimeSec === void 0) {
              exTimeSec = 0;
            }

            var valJson = null;

            if (val) {
              valJson = JSON.stringify(val);
            }

            yield _this5.setString(key, valJson, exTimeSec);
          })();
        }
        /**
         * 获取 @see setObject 设置的值
         * @param key 
         * @returns 
         */


        getObject(key) {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            var json = yield _this6.getString(key);
            if (!json) return null;

            try {
              return JSON.parse(json);
            } catch (ex) {
              (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                error: Error()
              }), logger) : logger).error('getObject("' + key + '")json解析失败:', json);
              return null;
            }
          })();
        }
        /**
         * 设置hash表的字段为对象值（会被序列化为json字符串进行存储）
         *
         * @public
         * @param key
         * @param field
         * @param valueObject 对象类型
         * @returns
         */


        setHashObject(key, field, valueObject) {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            var valJson = null;

            if (valueObject) {
              valJson = JSON.stringify(valueObject);
            }

            yield _this7.setHashString(key, field, valJson);
          })();
        }
        /**
         * 设置hash表的字段为字符串值
         *
         * @public
         * @param key
         * @param field
         * @param valueString 字符串类型
         * @returns
         */


        setHashString(key, field, valueString) {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            var _this8$client;

            yield (_this8$client = _this8.client) == null ? void 0 : _this8$client.hSet(key, field, valueString);
          })();
        }
        /**
         * 获取hash表的字段的字符串值
         *
         * @public
         * @param key
         * @param field
         * @returns
         */


        getHashString(key, field) {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            var _this9$client;

            return yield (_this9$client = _this9.client) == null ? void 0 : _this9$client.hGet(key, field);
          })();
        }
        /**
         * 设置hash表的字段为对象值（会被序列化为json字符串进行存储）
         *
         * @public
         * @param key
         * @param field
         * @param valueObject 对象类型
         * @returns
         */


        getHashObject(key, field) {
          var _this10 = this;

          return _asyncToGenerator(function* () {
            var json = yield _this10.getHashString(key, field);
            if (!json) return null;

            try {
              return JSON.parse(json);
            } catch (ex) {
              (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                error: Error()
              }), logger) : logger).error("getHashObject(" + key + ", " + field + ")json\u89E3\u6790\u5931\u8D25:", json);
              return null;
            }
          })();
        }
        /**
         * 获取哈希表里的所有键值对，字段值为对象类型
         *
         * @public
         * @typeParam ValueType
         * @param key
         * @returns
         */


        getHashObjects(key) {
          var _this11 = this;

          return _asyncToGenerator(function* () {
            var _this11$client;

            var kv = yield (_this11$client = _this11.client) == null ? void 0 : _this11$client.hGetAll(key);
            var ret = {};

            if (kv) {
              for (var _key2 in kv) {
                var json = kv[_key2];
                ret[_key2] = JSON.parse(json);
              }
            }

            return ret;
          })();
        }
        /**
         * 获取哈希表里的所有键值对，字段值为字符串类型
         *
         * @public
         * @typeParam ValueType
         * @param key
         * @returns
         */


        getHashValues(key) {
          var _this12 = this;

          return _asyncToGenerator(function* () {
            var _yield$_this12$client, _this12$client;

            return (_yield$_this12$client = yield (_this12$client = _this12.client) == null ? void 0 : _this12$client.hGetAll(key)) != null ? _yield$_this12$client : {};
          })();
        }
        /**
         * 删除hash表的字段
         * @public
         * @param key
         * @param field
         * @returns
         */


        removeHashValue(key, field) {
          var _this13 = this;

          return _asyncToGenerator(function* () {
            var _this13$client;

            yield (_this13$client = _this13.client) == null ? void 0 : _this13$client.hDel(key, field);
          })();
        }
        /**
         * 将一个元素推入列表的最后
         *
         * @public
         * @typeParam T extends object 必须是对象类型
         * @param redisKey
         * @param item
         * @returns
         */


        rPushObject(redisKey, item) {
          var _this14 = this;

          return _asyncToGenerator(function* () {
            var _this14$client;

            var valJson = null;

            if (item) {
              valJson = JSON.stringify(item);
            }

            yield (_this14$client = _this14.client) == null ? void 0 : _this14$client.rPush(redisKey, valJson);
          })();
        }
        /**
         * 读取并移除列表第一个元素，并json解析为对象，如果列表为空这个返回null
         *
         * @public
         * @typeParam T extends object 必须是对象类型
         * @param redisKey
         * @returns
         */


        lPopObject(redisKey) {
          var _this15 = this;

          return _asyncToGenerator(function* () {
            var _this15$client;

            var json = yield (_this15$client = _this15.client) == null ? void 0 : _this15$client.lPop(redisKey);
            if (!json) return null;

            try {
              return JSON.parse(json);
            } catch (ex) {
              (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                error: Error()
              }), logger) : logger).error('IRedisClient.lPopObject("' + redisKey + '")json解析失败:', json);
              return null;
            }
          })();
        }
        /**
         * 阻塞的方式读取并移除列表第一个元素，并解析为对象，如果列表为空则会一直阻塞
         *
         * @public
         * @typeParam T extends object 必须是对象类型
         * @param redisKey
         * @param timeoutSec 阻塞超时秒数，传0表示不超时，没数据则一直阻塞下去
         * @returns
         */


        blPopObject(redisKey, timeoutSec) {
          var _this16 = this;

          return _asyncToGenerator(function* () {
            var _this16$client;

            var ret = yield (_this16$client = _this16.client) == null ? void 0 : _this16$client.blPop((_crd && commandOptions === void 0 ? (_reportPossibleCrUseOfcommandOptions({
              error: Error()
            }), commandOptions) : commandOptions)({
              isolated: true
            }), redisKey, timeoutSec);
            if (!ret || !ret.element) return null;

            try {
              return JSON.parse(ret.element);
            } catch (ex) {
              (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                error: Error()
              }), logger) : logger).error('IRedisClient.blPopObject("' + redisKey + '")json解析失败:', ret.element);
              return null;
            }
          })();
        }
        /**
         * 递增1并返回递增后的数值，如果没有则会当作0来执行
         *
         * @public
         * @param redisKey
         * @returns
         */


        incr(redisKey) {
          var _this17 = this;

          return _asyncToGenerator(function* () {
            var _yield$_this17$client, _this17$client;

            return (_yield$_this17$client = yield (_this17$client = _this17.client) == null ? void 0 : _this17$client.incr(redisKey)) != null ? _yield$_this17$client : 0;
          })();
        }
        /**
         * 递减1并返回递减后的数值，如果没有则会当作0来执行
         *
         * @public
         * @param redisKey
         * @returns
         */


        decr(redisKey) {
          var _this18 = this;

          return _asyncToGenerator(function* () {
            var _yield$_this18$client, _this18$client;

            return (_yield$_this18$client = yield (_this18$client = _this18.client) == null ? void 0 : _this18$client.decr(redisKey)) != null ? _yield$_this18$client : 0;
          })();
        }
        /**
         * 递增指定数值并返回递增后的数值，如果没有则会当作0来执行
         *
         * @public
         * @param redisKey
         * @param increment 整数
         * @returns
         */


        incrBy(redisKey, increment) {
          var _this19 = this;

          return _asyncToGenerator(function* () {
            var _yield$_this19$client, _this19$client;

            return (_yield$_this19$client = yield (_this19$client = _this19.client) == null ? void 0 : _this19$client.incrBy(redisKey, increment)) != null ? _yield$_this19$client : 0;
          })();
        }
        /**
         * 递减指定数值并返回递减后的数值，如果没有则会当作0来执行
         *
         * @public
         * @param redisKey
         * @param increment 整数
         * @returns
         */


        decrBy(redisKey, increment) {
          var _this20 = this;

          return _asyncToGenerator(function* () {
            var _yield$_this20$client, _this20$client;

            return (_yield$_this20$client = yield (_this20$client = _this20.client) == null ? void 0 : _this20$client.decrBy(redisKey, increment)) != null ? _yield$_this20$client : 0;
          })();
        }
        /**
         * 【发布、订阅】发布一个对象到key中
         *
         * @public
         * @typeParam T extends object 需要是一个对象
         * @param redisKey
         * @param item
         * @returns
         */


        publishObject(redisKey, item) {
          var _this21 = this;

          return _asyncToGenerator(function* () {
            var _this21$client;

            var valJson = null;

            if (item) {
              valJson = JSON.stringify(item);
            }

            yield (_this21$client = _this21.client) == null ? void 0 : _this21$client.publish(redisKey, valJson);
          })();
        }
        /**
         * 【发布、订阅】订阅一个key中的消息，注意，本操作需要一个独立的连接！（可以使用getRedisClient(false)来创建一个全新的连接）
         *
         * @public
         * @typeParam T extends object 需要是一个对象
         * @param redisKey
         * @param item
         * @returns
         */


        subscribeObject(redisKey, listen) {
          var _this22 = this;

          return _asyncToGenerator(function* () {
            var _this22$client;

            yield (_this22$client = _this22.client) == null ? void 0 : _this22$client.subscribe(redisKey, json => {
              if (!json) return;
              var item;

              try {
                item = JSON.parse(json);
              } catch (ex) {
                (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                  error: Error()
                }), logger) : logger).error('IRedisClient.subscribeObject("' + redisKey + '")json解析失败:', ex, "json:", json);
                return;
              }

              listen(item);
            });
          })();
        }
        /**
         * 【发布、订阅】取消订阅一个key中的消息，注意，本操作的连接需要和订阅是同一个！
         *
         * @public
         * @typeParam T extends object 需要是一个对象
         * @param redisKey
         * @param item
         * @returns
         */


        unsubscribe(redisKey) {
          var _this23 = this;

          return _asyncToGenerator(function* () {
            var _this23$client;

            yield (_this23$client = _this23.client) == null ? void 0 : _this23$client.unsubscribe(redisKey);
          })();
        }

      });
      /**单机内存版的实现，用在简易的all-in-one场景，减少redis的依赖！*/


      _export("MemRedisClient", MemRedisClient = class MemRedisClient {
        disconnect() {
          return _asyncToGenerator(function* () {})();
        }
        /**
         * 删除键
         *
         * @public
         * @param key
         * @returns
         */


        delete() {
          var _arguments2 = arguments;
          return _asyncToGenerator(function* () {
            for (var _len2 = _arguments2.length, keys = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
              keys[_key3] = _arguments2[_key3];
            }

            for (var _key4 of keys) {
              MemRedisClient.memCacheKV.delete(_key4);
            }
          })();
        }
        /**
         * 设置键值对,值是字符串
         * @param key 
         * @param val 
         * @param exTimeSec 在几秒后过期,0表示永不过期
         */


        setString(key, val, exTimeSec) {
          return _asyncToGenerator(function* () {
            if (exTimeSec === void 0) {
              exTimeSec = 0;
            }

            var opt = {};

            if (exTimeSec) {
              opt.EX = exTimeSec;
            }

            MemRedisClient.memCacheKV.set(key, val);
          })();
        }
        /**
         * 获取 @see setString 设置的值
         * @param key 
         * @returns 
         */


        getString(key) {
          return _asyncToGenerator(function* () {
            var _MemRedisClient$memCa;

            return (_MemRedisClient$memCa = MemRedisClient.memCacheKV.get(key)) != null ? _MemRedisClient$memCa : null;
          })();
        }
        /**
         * 设置键值对,值类型是对象
         * @param key 
         * @param val 
         * @param exTimeSec 在几秒后过期,0表示永不过期
         */


        setObject(key, val, exTimeSec) {
          var _this24 = this;

          return _asyncToGenerator(function* () {
            if (exTimeSec === void 0) {
              exTimeSec = 0;
            }

            var valJson = null;

            if (val) {
              valJson = JSON.stringify(val);
            }

            yield _this24.setString(key, valJson, exTimeSec);
          })();
        }
        /**
         * 获取 @see setObject 设置的值
         * @param key 
         * @returns 
         */


        getObject(key) {
          var _this25 = this;

          return _asyncToGenerator(function* () {
            var json = yield _this25.getString(key);
            if (!json) return null;

            try {
              return JSON.parse(json);
            } catch (ex) {
              (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                error: Error()
              }), logger) : logger).error('getObject("' + key + '")json解析失败:', json);
              return null;
            }
          })();
        }
        /**
         * 设置hash表的字段为对象值（会被序列化为json字符串进行存储）
         *
         * @public
         * @param key
         * @param field
         * @param valueObject 对象类型
         * @returns
         */


        setHashObject(key, field, valueObject) {
          var _this26 = this;

          return _asyncToGenerator(function* () {
            var valJson = null;

            if (valueObject) {
              valJson = JSON.stringify(valueObject);
            }

            yield _this26.setHashString(key, field, valJson);
          })();
        }
        /**
         * 设置hash表的字段为字符串值
         *
         * @public
         * @param key
         * @param field
         * @param valueString 字符串类型
         * @returns
         */


        setHashString(key, field, valueString) {
          return _asyncToGenerator(function* () {
            var set = MemRedisClient.memCacheHSet.get(key);

            if (!set) {
              set = new Map();
              MemRedisClient.memCacheHSet.set(key, set);
            }

            set.set(field, valueString);
          })();
        }
        /**
         * 获取hash表的字段的字符串值
         *
         * @public
         * @param key
         * @param field
         * @returns
         */


        getHashString(key, field) {
          return _asyncToGenerator(function* () {
            var set = MemRedisClient.memCacheHSet.get(key);

            if (!set) {
              return null;
            }

            return set.get(field);
          })();
        }
        /**
         * 设置hash表的字段为对象值（会被序列化为json字符串进行存储）
         *
         * @public
         * @param key
         * @param field
         * @param valueObject 对象类型
         * @returns
         */


        getHashObject(key, field) {
          var _this27 = this;

          return _asyncToGenerator(function* () {
            var json = yield _this27.getHashString(key, field);
            if (!json) return null;

            try {
              return JSON.parse(json);
            } catch (ex) {
              (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                error: Error()
              }), logger) : logger).error("getHashObject(" + key + ", " + field + ")json\u89E3\u6790\u5931\u8D25:", json);
              return null;
            }
          })();
        }
        /**
         * 获取哈希表里的所有键值对，字段值为对象类型
         *
         * @public
         * @typeParam ValueType
         * @param key
         * @returns
         */


        getHashObjects(key) {
          return _asyncToGenerator(function* () {
            var set = MemRedisClient.memCacheHSet.get(key);

            if (!set) {
              return {};
            }

            var ret = {};

            for (var kv of set) {
              ret[kv[0]] = JSON.parse(kv[1]);
              ;
            }

            return ret;
          })();
        }
        /**
         * 获取哈希表里的所有键值对，字段值为字符串类型
         *
         * @public
         * @typeParam ValueType
         * @param key
         * @returns
         */


        getHashValues(key) {
          return _asyncToGenerator(function* () {
            var set = MemRedisClient.memCacheHSet.get(key);

            if (!set) {
              return {};
            }

            var obj = {};

            for (var kv of set) {
              obj[kv[0]] = kv[1];
            }

            return obj;
          })();
        }
        /**
         * 删除hash表的字段
         * @public
         * @param key
         * @param field
         * @returns
         */


        removeHashValue(key, field) {
          return _asyncToGenerator(function* () {
            var set = MemRedisClient.memCacheHSet.get(key);

            if (!set) {
              return;
            }

            set.delete(field);
          })();
        }
        /**
         * 将一个元素推入列表的最后
         *
         * @public
         * @typeParam T extends object 必须是对象类型
         * @param redisKey
         * @param item
         * @returns
         */


        rPushObject(redisKey, item) {
          return _asyncToGenerator(function* () {
            var valJson = null;

            if (item) {
              valJson = JSON.stringify(item);
            }

            var list = MemRedisClient.memCacheList.get(redisKey);

            if (!list) {
              list = [];
              MemRedisClient.memCacheList.set(redisKey, list);
            }

            list.push(valJson);
          })();
        }
        /**
         * 读取并移除列表第一个元素，并json解析为对象，如果列表为空这个返回null
         *
         * @public
         * @typeParam T extends object 必须是对象类型
         * @param redisKey
         * @returns
         */


        lPopObject(redisKey) {
          return _asyncToGenerator(function* () {
            var list = MemRedisClient.memCacheList.get(redisKey);

            if (!list) {
              list = [];
              MemRedisClient.memCacheList.set(redisKey, list);
            }

            var json = list.shift();
            if (!json) return null;

            try {
              return JSON.parse(json);
            } catch (ex) {
              (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                error: Error()
              }), logger) : logger).error('IRedisClient.lPopObject("' + redisKey + '")json解析失败:', json);
              return null;
            }
          })();
        }
        /**
         * 阻塞的方式读取并移除列表第一个元素，并解析为对象，如果列表为空则会一直阻塞
         *
         * @public
         * @typeParam T extends object 必须是对象类型
         * @param redisKey
         * @param timeoutSec 阻塞超时秒数，传0表示不超时，没数据则一直阻塞下去
         * @returns
         */


        blPopObject(redisKey, timeoutSec) {
          var _this28 = this;

          return _asyncToGenerator(function* () {
            return yield new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve) {
              var time = 0,
                  allTime = timeoutSec * 1000;

              while (timeoutSec === 0 || time < allTime) {
                var _val = yield _this28.lPopObject(redisKey);

                if (_val) return resolve(_val);
                yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
                  error: Error()
                }), delay) : delay)(300);
                time += 300;
              }

              resolve(null);
            }));
          })();
        }
        /**
         * 递增1并返回递增后的数值，如果没有则会当作0来执行
         *
         * @public
         * @param redisKey
         * @returns
         */


        incr(redisKey) {
          return _asyncToGenerator(function* () {
            var nStr = MemRedisClient.memCacheKV.get(redisKey);

            if (typeof nStr === 'undefined') {
              nStr = '0';
            }

            var n = parseInt(nStr);
            n++;
            MemRedisClient.memCacheKV.set(redisKey, n + '');
            return n;
          })();
        }
        /**
         * 递减1并返回递减后的数值，如果没有则会当作0来执行
         *
         * @public
         * @param redisKey
         * @returns
         */


        decr(redisKey) {
          return _asyncToGenerator(function* () {
            var nStr = MemRedisClient.memCacheKV.get(redisKey);

            if (typeof nStr === 'undefined') {
              nStr = '0';
            }

            var n = parseInt(nStr);
            n--;
            MemRedisClient.memCacheKV.set(redisKey, n + '');
            return n;
          })();
        }
        /**
         * 递增指定数值并返回递增后的数值，如果没有则会当作0来执行
         *
         * @public
         * @param redisKey
         * @param increment 整数
         * @returns
         */


        incrBy(redisKey, increment) {
          return _asyncToGenerator(function* () {
            var nStr = MemRedisClient.memCacheKV.get(redisKey);

            if (typeof nStr === 'undefined') {
              nStr = '0';
            }

            var n = parseInt(nStr);
            n += increment;
            MemRedisClient.memCacheKV.set(redisKey, n + '');
            return n;
          })();
        }
        /**
         * 递减指定数值并返回递减后的数值，如果没有则会当作0来执行
         *
         * @public
         * @param redisKey
         * @param increment 整数
         * @returns
         */


        decrBy(redisKey, increment) {
          return _asyncToGenerator(function* () {
            var nStr = MemRedisClient.memCacheKV.get(redisKey);

            if (typeof nStr === 'undefined') {
              nStr = '0';
            }

            var n = parseInt(nStr);
            n -= increment;
            MemRedisClient.memCacheKV.set(redisKey, n + '');
            return n;
          })();
        }
        /**
         * 【发布、订阅】发布一个对象到key中
         *
         * @public
         * @typeParam T extends object 需要是一个对象
         * @param redisKey
         * @param item
         * @returns
         */


        publishObject(redisKey, item) {
          return _asyncToGenerator(function* () {
            var valJson = null;

            if (item) {
              valJson = JSON.stringify(item);
            }

            var ls = MemRedisClient.memCachePubSub.get(redisKey);

            if (ls) {
              for (var fn of ls) {
                fn(valJson);
              }
            }
          })();
        }
        /**
         * 【发布、订阅】订阅一个key中的消息，注意，本操作需要一个独立的连接！（可以使用getRedisClient(false)来创建一个全新的连接）
         *
         * @public
         * @typeParam T extends object 需要是一个对象
         * @param redisKey
         * @param listen
         * @returns
         */


        subscribeObject(redisKey, listen) {
          return _asyncToGenerator(function* () {
            var ls = MemRedisClient.memCachePubSub.get(redisKey);

            if (!ls) {
              ls = [];
              MemRedisClient.memCachePubSub.set(redisKey, ls);
            }

            ls.push(json => {
              if (!json) return;
              var item;

              try {
                item = JSON.parse(json);
              } catch (ex) {
                (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                  error: Error()
                }), logger) : logger).error('IRedisClient.subscribeObject("' + redisKey + '")json解析失败:', ex, "json:", json);
                return;
              }

              listen(item);
            });
          })();
        }
        /**
         * 【发布、订阅】取消订阅一个key中的消息，注意，本操作的连接需要和订阅是同一个！
         *
         * @public
         * @typeParam T extends object 需要是一个对象
         * @param redisKey
         * @param item
         * @returns
         */


        unsubscribe(redisKey) {
          return _asyncToGenerator(function* () {
            MemRedisClient.memCachePubSub.delete(redisKey);
          })();
        }

      });

      MemRedisClient.memCacheKV = new Map();
      MemRedisClient.memCacheHSet = new Map();
      MemRedisClient.memCacheList = new Map();
      MemRedisClient.memCacheInc = new Map();
      MemRedisClient.memCachePubSub = new Map();
      allRedisClients = new Map();
      allRedisCfg = new Map();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1b27618b70a960fbdbcf6a32607163e746da7a50.js.map