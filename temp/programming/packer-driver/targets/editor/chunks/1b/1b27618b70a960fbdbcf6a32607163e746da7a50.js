System.register(["__unresolved_0", "cc", "redis", "uuid", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, commandOptions, createClient, v4, logger, delay, RedisClient, MemRedisClient, _crd, allRedisClients, allRedisCfg;

  /**
   * 初始化指定配置的redis客户端配置,如果已经存在会断开之前的连接(相当于重置)
   * @param cfg 
   * @param configKey 根据这配置标识区分客户端
   */
  async function initRedisClient(cfg, configKey = "default") {
    allRedisCfg.set(configKey, cfg);
    let existsClient = allRedisClients.get(configKey);
    if (existsClient) await existsClient.disconnect();

    if (cfg.useMemRedis) {
      existsClient = new MemRedisClient();
    } else {
      existsClient = await RedisClient.createClient(cfg);
    }

    allRedisClients.set(configKey, existsClient);
  }
  /**
   * 获取redis客户端(需要先调用初始化), 全局共享同配置的客户端实例
   * @param reuseClient 是否复用连接,否的只是单纯的创建一个全新的连接并返回
   * @param configKey 如果没传使用默认值
   * @returns 
   */


  async function getRedisClient(reuseClient = true, configKey = "default") {
    if (reuseClient) {
      let client = allRedisClients.get(configKey);
      if (client) return client;
      let cfg = allRedisCfg.get(configKey);

      if (!cfg) {
        throw new Error(`${configKey}标识未初始化配置!`);
      }

      if (cfg.useMemRedis) {
        client = new MemRedisClient();
      } else {
        client = await RedisClient.createClient(cfg);
      }

      allRedisClients.set(configKey, client);
      return client;
    } else {
      let cfg = allRedisCfg.get(configKey);

      if (!cfg) {
        throw new Error(`${configKey}标识未初始化配置!`);
      }

      if (cfg.useMemRedis) {
        return new MemRedisClient();
      } else {
        return await RedisClient.createClient(cfg);
      }
    }
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

          let url = "redis" + (this.config.ssl ? 's' : '') + "://";

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


        static async createClient(cfg) {
          let rc = new RedisClient(cfg);
          let isFirst = true; //redis的connect()方法实现的很坑, 如果没连接成功,触发完on('error')事件后,不会resolve或者reject继续,并且还会走自动重连
          //所以这里统一封装一个连接的异步任务,兼容connect的处理流程,即使连不上,也能正常走后续

          let connTask = new Promise(async resolve => {
            var _rc$client, _rc$client2, _rc$client3, _rc$client4, _rc$client5;

            //实现额外的网络错误重连
            (_rc$client = rc.client) == null || _rc$client.on('error', async error => {
              //暂时不启用自定义重连机制,暂时先相信redis客户端自己的重连机制
              //IRedisClient.tryReconnect(rc, null);
              //logger.log(`redisClient错误[${rc.id}]!`, error);
              if (!rc.showConnectError) {
                rc.showConnectError = true;
                (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                  error: Error()
                }), logger) : logger).error(`redisClient连接错误[${rc.id}]!(自动重试中...)`, error);
              }

              if (isFirst) {
                //还没连上就出错了,那就补充connect那边的异步回调
                isFirst = false;
                return resolve();
              }
            });
            (_rc$client2 = rc.client) == null || _rc$client2.on('reconnecting', async () => {//logger.log(`redisClient正在重连[${rc.id}]!`);
            });
            (_rc$client3 = rc.client) == null || _rc$client3.on('end', async error => {
              isFirst = false; //断开事件触发后尝试重连(如果是手动调用断开的会跳过)

              RedisClient.tryReconnect(rc, null);
            });
            (_rc$client4 = rc.client) == null || _rc$client4.on('ready', async error => {
              isFirst = false;
              rc.showConnectError = false; //logger.log(`redisClient连接成功[${rc.id}]!`);
            });
            await ((_rc$client5 = rc.client) == null ? void 0 : _rc$client5.connect()); //到这里了,说明连接成功了!返回

            return resolve();
          });
          await connTask;
          return rc;
        }
        /**暂时不需要自己的重连机制*/


        static async tryReconnect(rc, retryEx = null) {
          if (!rc) return;

          if (!rc.reconnectWaiting) {
            //因为error事件会多次重复触发, 所以用个标志只处理一次
            try {
              var _rc$client6;

              await ((_rc$client6 = rc.client) == null ? void 0 : _rc$client6.disconnect());
            } catch (ex) {//logger.error(`redisClient断开[${rc.id}]产生错误`, ex);
            }

            rc.reconnectWaiting = true;

            if (retryEx) {
              (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                error: Error()
              }), logger) : logger).error(`redisClient重连失败[${rc.id}], 2秒后再次重连!`, retryEx);
            } else {
              (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                error: Error()
              }), logger) : logger).error(`redisClient断开[${rc.id}], 2秒后重连尝试!`);
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
        }
        /**暂时不需要自己的重连机制*/


        static async reconnect(rc) {
          var _rc$client7;

          if (!rc) return;
          clearTimeout(rc.reconnectHd);

          if (((_rc$client7 = rc.client) == null ? void 0 : _rc$client7.isOpen) === true) {
            //开始重连时,状态就是连上的,则直接成功
            (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger).log(`redisClient重连成功[${rc.id}]! [01]`);
          } else {
            try {
              var _rc$client8;

              //尝试连接
              await ((_rc$client8 = rc.client) == null ? void 0 : _rc$client8.connect()); //没报错则成功

              (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                error: Error()
              }), logger) : logger).log(`redisClient重连成功[${rc.id}]! [02]`);
            } catch (ex) {
              var _rc$client9;

              if ((_rc$client9 = rc.client) != null && _rc$client9.isOpen) {
                //报错后发现是连接状态的,则视为成功
                (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                  error: Error()
                }), logger) : logger).log(`redisClient重连成功[${rc.id}]! [03]`);
                return;
              } //其他错误,则再次重试


              RedisClient.tryReconnect(rc, ex);
            }
          }

          rc = undefined;
        }

        async disconnect() {
          clearTimeout(this.reconnectHd);

          try {
            var _this$client;

            await ((_this$client = this.client) == null ? void 0 : _this$client.disconnect());
          } catch (e) {}

          this.client = undefined;
          this.config = undefined;
        }
        /**
         * 删除键
         *
         * @public
         * @param keys
         * @returns
         */


        async delete(...keys) {
          var _this$client2;

          await ((_this$client2 = this.client) == null ? void 0 : _this$client2.del(keys));
        }
        /**
         * 设置键值对,值是字符串
         * @param key 
         * @param val 
         * @param exTimeSec 在几秒后过期,0表示永不过期
         */


        async setString(key, val, exTimeSec = 0) {
          var _this$client3;

          let opt = {};

          if (exTimeSec) {
            opt.EX = exTimeSec;
          }

          await ((_this$client3 = this.client) == null ? void 0 : _this$client3.set(key, val, opt));
        }
        /**
         * 获取 @see setString 设置的值
         * @param key 
         * @returns 
         */


        async getString(key) {
          var _await$this$client$ge, _this$client4;

          return (_await$this$client$ge = await ((_this$client4 = this.client) == null ? void 0 : _this$client4.get(key))) != null ? _await$this$client$ge : null;
        }
        /**
         * 设置键值对,值类型是对象
         * @param key 
         * @param val 
         * @param exTimeSec 在几秒后过期,0表示永不过期
         */


        async setObject(key, val, exTimeSec = 0) {
          let valJson = null;

          if (val) {
            valJson = JSON.stringify(val);
          }

          await this.setString(key, valJson, exTimeSec);
        }
        /**
         * 获取 @see setObject 设置的值
         * @param key 
         * @returns 
         */


        async getObject(key) {
          let json = await this.getString(key);
          if (!json) return null;

          try {
            return JSON.parse(json);
          } catch (ex) {
            (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger).error('getObject("' + key + '")json解析失败:', json);
            return null;
          }
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


        async setHashObject(key, field, valueObject) {
          let valJson = null;

          if (valueObject) {
            valJson = JSON.stringify(valueObject);
          }

          await this.setHashString(key, field, valJson);
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


        async setHashString(key, field, valueString) {
          var _this$client5;

          await ((_this$client5 = this.client) == null ? void 0 : _this$client5.hSet(key, field, valueString));
        }
        /**
         * 获取hash表的字段的字符串值
         *
         * @public
         * @param key
         * @param field
         * @returns
         */


        async getHashString(key, field) {
          var _this$client6;

          return await ((_this$client6 = this.client) == null ? void 0 : _this$client6.hGet(key, field));
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


        async getHashObject(key, field) {
          let json = await this.getHashString(key, field);
          if (!json) return null;

          try {
            return JSON.parse(json);
          } catch (ex) {
            (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger).error(`getHashObject(${key}, ${field})json解析失败:`, json);
            return null;
          }
        }
        /**
         * 获取哈希表里的所有键值对，字段值为对象类型
         *
         * @public
         * @typeParam ValueType
         * @param key
         * @returns
         */


        async getHashObjects(key) {
          var _this$client7;

          let kv = await ((_this$client7 = this.client) == null ? void 0 : _this$client7.hGetAll(key));
          let ret = {};

          if (kv) {
            for (let key in kv) {
              let json = kv[key];
              ret[key] = JSON.parse(json);
            }
          }

          return ret;
        }
        /**
         * 获取哈希表里的所有键值对，字段值为字符串类型
         *
         * @public
         * @typeParam ValueType
         * @param key
         * @returns
         */


        async getHashValues(key) {
          var _await$this$client$hG, _this$client8;

          return (_await$this$client$hG = await ((_this$client8 = this.client) == null ? void 0 : _this$client8.hGetAll(key))) != null ? _await$this$client$hG : {};
        }
        /**
         * 删除hash表的字段
         * @public
         * @param key
         * @param field
         * @returns
         */


        async removeHashValue(key, field) {
          var _this$client9;

          await ((_this$client9 = this.client) == null ? void 0 : _this$client9.hDel(key, field));
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


        async rPushObject(redisKey, item) {
          var _this$client10;

          let valJson = null;

          if (item) {
            valJson = JSON.stringify(item);
          }

          await ((_this$client10 = this.client) == null ? void 0 : _this$client10.rPush(redisKey, valJson));
        }
        /**
         * 读取并移除列表第一个元素，并json解析为对象，如果列表为空这个返回null
         *
         * @public
         * @typeParam T extends object 必须是对象类型
         * @param redisKey
         * @returns
         */


        async lPopObject(redisKey) {
          var _this$client11;

          let json = await ((_this$client11 = this.client) == null ? void 0 : _this$client11.lPop(redisKey));
          if (!json) return null;

          try {
            return JSON.parse(json);
          } catch (ex) {
            (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger).error('IRedisClient.lPopObject("' + redisKey + '")json解析失败:', json);
            return null;
          }
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


        async blPopObject(redisKey, timeoutSec) {
          var _this$client12;

          let ret = await ((_this$client12 = this.client) == null ? void 0 : _this$client12.blPop((_crd && commandOptions === void 0 ? (_reportPossibleCrUseOfcommandOptions({
            error: Error()
          }), commandOptions) : commandOptions)({
            isolated: true
          }), redisKey, timeoutSec));
          if (!ret || !ret.element) return null;

          try {
            return JSON.parse(ret.element);
          } catch (ex) {
            (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger).error('IRedisClient.blPopObject("' + redisKey + '")json解析失败:', ret.element);
            return null;
          }
        }
        /**
         * 递增1并返回递增后的数值，如果没有则会当作0来执行
         *
         * @public
         * @param redisKey
         * @returns
         */


        async incr(redisKey) {
          var _await$this$client$in, _this$client13;

          return (_await$this$client$in = await ((_this$client13 = this.client) == null ? void 0 : _this$client13.incr(redisKey))) != null ? _await$this$client$in : 0;
        }
        /**
         * 递减1并返回递减后的数值，如果没有则会当作0来执行
         *
         * @public
         * @param redisKey
         * @returns
         */


        async decr(redisKey) {
          var _await$this$client$de, _this$client14;

          return (_await$this$client$de = await ((_this$client14 = this.client) == null ? void 0 : _this$client14.decr(redisKey))) != null ? _await$this$client$de : 0;
        }
        /**
         * 递增指定数值并返回递增后的数值，如果没有则会当作0来执行
         *
         * @public
         * @param redisKey
         * @param increment 整数
         * @returns
         */


        async incrBy(redisKey, increment) {
          var _await$this$client$in2, _this$client15;

          return (_await$this$client$in2 = await ((_this$client15 = this.client) == null ? void 0 : _this$client15.incrBy(redisKey, increment))) != null ? _await$this$client$in2 : 0;
        }
        /**
         * 递减指定数值并返回递减后的数值，如果没有则会当作0来执行
         *
         * @public
         * @param redisKey
         * @param increment 整数
         * @returns
         */


        async decrBy(redisKey, increment) {
          var _await$this$client$de2, _this$client16;

          return (_await$this$client$de2 = await ((_this$client16 = this.client) == null ? void 0 : _this$client16.decrBy(redisKey, increment))) != null ? _await$this$client$de2 : 0;
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


        async publishObject(redisKey, item) {
          var _this$client17;

          let valJson = null;

          if (item) {
            valJson = JSON.stringify(item);
          }

          await ((_this$client17 = this.client) == null ? void 0 : _this$client17.publish(redisKey, valJson));
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


        async subscribeObject(redisKey, listen) {
          var _this$client18;

          await ((_this$client18 = this.client) == null ? void 0 : _this$client18.subscribe(redisKey, json => {
            if (!json) return;
            let item;

            try {
              item = JSON.parse(json);
            } catch (ex) {
              (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                error: Error()
              }), logger) : logger).error('IRedisClient.subscribeObject("' + redisKey + '")json解析失败:', ex, "json:", json);
              return;
            }

            listen(item);
          }));
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


        async unsubscribe(redisKey) {
          var _this$client19;

          await ((_this$client19 = this.client) == null ? void 0 : _this$client19.unsubscribe(redisKey));
        }

      });
      /**单机内存版的实现，用在简易的all-in-one场景，减少redis的依赖！*/


      _export("MemRedisClient", MemRedisClient = class MemRedisClient {
        async disconnect() {}
        /**
         * 删除键
         *
         * @public
         * @param key
         * @returns
         */


        async delete(...keys) {
          for (let key of keys) {
            MemRedisClient.memCacheKV.delete(key);
          }
        }
        /**
         * 设置键值对,值是字符串
         * @param key 
         * @param val 
         * @param exTimeSec 在几秒后过期,0表示永不过期
         */


        async setString(key, val, exTimeSec = 0) {
          let opt = {};

          if (exTimeSec) {
            opt.EX = exTimeSec;
          }

          MemRedisClient.memCacheKV.set(key, val);
        }
        /**
         * 获取 @see setString 设置的值
         * @param key 
         * @returns 
         */


        async getString(key) {
          var _MemRedisClient$memCa;

          return (_MemRedisClient$memCa = MemRedisClient.memCacheKV.get(key)) != null ? _MemRedisClient$memCa : null;
        }
        /**
         * 设置键值对,值类型是对象
         * @param key 
         * @param val 
         * @param exTimeSec 在几秒后过期,0表示永不过期
         */


        async setObject(key, val, exTimeSec = 0) {
          let valJson = null;

          if (val) {
            valJson = JSON.stringify(val);
          }

          await this.setString(key, valJson, exTimeSec);
        }
        /**
         * 获取 @see setObject 设置的值
         * @param key 
         * @returns 
         */


        async getObject(key) {
          let json = await this.getString(key);
          if (!json) return null;

          try {
            return JSON.parse(json);
          } catch (ex) {
            (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger).error('getObject("' + key + '")json解析失败:', json);
            return null;
          }
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


        async setHashObject(key, field, valueObject) {
          let valJson = null;

          if (valueObject) {
            valJson = JSON.stringify(valueObject);
          }

          await this.setHashString(key, field, valJson);
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


        async setHashString(key, field, valueString) {
          let set = MemRedisClient.memCacheHSet.get(key);

          if (!set) {
            set = new Map();
            MemRedisClient.memCacheHSet.set(key, set);
          }

          set.set(field, valueString);
        }
        /**
         * 获取hash表的字段的字符串值
         *
         * @public
         * @param key
         * @param field
         * @returns
         */


        async getHashString(key, field) {
          let set = MemRedisClient.memCacheHSet.get(key);

          if (!set) {
            return null;
          }

          return set.get(field);
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


        async getHashObject(key, field) {
          let json = await this.getHashString(key, field);
          if (!json) return null;

          try {
            return JSON.parse(json);
          } catch (ex) {
            (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger).error(`getHashObject(${key}, ${field})json解析失败:`, json);
            return null;
          }
        }
        /**
         * 获取哈希表里的所有键值对，字段值为对象类型
         *
         * @public
         * @typeParam ValueType
         * @param key
         * @returns
         */


        async getHashObjects(key) {
          let set = MemRedisClient.memCacheHSet.get(key);

          if (!set) {
            return {};
          }

          let ret = {};

          for (let kv of set) {
            ret[kv[0]] = JSON.parse(kv[1]);
            ;
          }

          return ret;
        }
        /**
         * 获取哈希表里的所有键值对，字段值为字符串类型
         *
         * @public
         * @typeParam ValueType
         * @param key
         * @returns
         */


        async getHashValues(key) {
          let set = MemRedisClient.memCacheHSet.get(key);

          if (!set) {
            return {};
          }

          let obj = {};

          for (let kv of set) {
            obj[kv[0]] = kv[1];
          }

          return obj;
        }
        /**
         * 删除hash表的字段
         * @public
         * @param key
         * @param field
         * @returns
         */


        async removeHashValue(key, field) {
          let set = MemRedisClient.memCacheHSet.get(key);

          if (!set) {
            return;
          }

          set.delete(field);
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


        async rPushObject(redisKey, item) {
          let valJson = null;

          if (item) {
            valJson = JSON.stringify(item);
          }

          let list = MemRedisClient.memCacheList.get(redisKey);

          if (!list) {
            list = [];
            MemRedisClient.memCacheList.set(redisKey, list);
          }

          list.push(valJson);
        }
        /**
         * 读取并移除列表第一个元素，并json解析为对象，如果列表为空这个返回null
         *
         * @public
         * @typeParam T extends object 必须是对象类型
         * @param redisKey
         * @returns
         */


        async lPopObject(redisKey) {
          let list = MemRedisClient.memCacheList.get(redisKey);

          if (!list) {
            list = [];
            MemRedisClient.memCacheList.set(redisKey, list);
          }

          let json = list.shift();
          if (!json) return null;

          try {
            return JSON.parse(json);
          } catch (ex) {
            (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger).error('IRedisClient.lPopObject("' + redisKey + '")json解析失败:', json);
            return null;
          }
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


        async blPopObject(redisKey, timeoutSec) {
          return await new Promise(async resolve => {
            let time = 0,
                allTime = timeoutSec * 1000;

            while (timeoutSec === 0 || time < allTime) {
              let val = await this.lPopObject(redisKey);
              if (val) return resolve(val);
              await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
                error: Error()
              }), delay) : delay)(300);
              time += 300;
            }

            resolve(null);
          });
        }
        /**
         * 递增1并返回递增后的数值，如果没有则会当作0来执行
         *
         * @public
         * @param redisKey
         * @returns
         */


        async incr(redisKey) {
          let nStr = MemRedisClient.memCacheKV.get(redisKey);

          if (typeof nStr === 'undefined') {
            nStr = '0';
          }

          let n = parseInt(nStr);
          n++;
          MemRedisClient.memCacheKV.set(redisKey, n + '');
          return n;
        }
        /**
         * 递减1并返回递减后的数值，如果没有则会当作0来执行
         *
         * @public
         * @param redisKey
         * @returns
         */


        async decr(redisKey) {
          let nStr = MemRedisClient.memCacheKV.get(redisKey);

          if (typeof nStr === 'undefined') {
            nStr = '0';
          }

          let n = parseInt(nStr);
          n--;
          MemRedisClient.memCacheKV.set(redisKey, n + '');
          return n;
        }
        /**
         * 递增指定数值并返回递增后的数值，如果没有则会当作0来执行
         *
         * @public
         * @param redisKey
         * @param increment 整数
         * @returns
         */


        async incrBy(redisKey, increment) {
          let nStr = MemRedisClient.memCacheKV.get(redisKey);

          if (typeof nStr === 'undefined') {
            nStr = '0';
          }

          let n = parseInt(nStr);
          n += increment;
          MemRedisClient.memCacheKV.set(redisKey, n + '');
          return n;
        }
        /**
         * 递减指定数值并返回递减后的数值，如果没有则会当作0来执行
         *
         * @public
         * @param redisKey
         * @param increment 整数
         * @returns
         */


        async decrBy(redisKey, increment) {
          let nStr = MemRedisClient.memCacheKV.get(redisKey);

          if (typeof nStr === 'undefined') {
            nStr = '0';
          }

          let n = parseInt(nStr);
          n -= increment;
          MemRedisClient.memCacheKV.set(redisKey, n + '');
          return n;
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


        async publishObject(redisKey, item) {
          let valJson = null;

          if (item) {
            valJson = JSON.stringify(item);
          }

          let ls = MemRedisClient.memCachePubSub.get(redisKey);

          if (ls) {
            for (let fn of ls) {
              fn(valJson);
            }
          }
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


        async subscribeObject(redisKey, listen) {
          let ls = MemRedisClient.memCachePubSub.get(redisKey);

          if (!ls) {
            ls = [];
            MemRedisClient.memCachePubSub.set(redisKey, ls);
          }

          ls.push(json => {
            if (!json) return;
            let item;

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


        async unsubscribe(redisKey) {
          MemRedisClient.memCachePubSub.delete(redisKey);
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