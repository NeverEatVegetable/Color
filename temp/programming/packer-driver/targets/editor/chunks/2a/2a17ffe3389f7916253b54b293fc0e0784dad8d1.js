System.register(["__unresolved_0", "cc", "path", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, path, getConfigAuto, startWatchConfig, getRedisClient, initRedisClient, logger, parseProcessArgv, parseProcessEnv, Result, _ref, _processArgs$tsgfConf, _crd, processArgs, processEnv, tsgfConfigFile, serverConfigPath, memServerConfig;

  /**开始监控gf.clusterServer.config.json配置, 并返回获取到的配置对象 */
  async function startWatchServerConfig() {
    let getAndInitConfig = async () => {
      let cfg = await getServerConfig();

      if (cfg.redisConfig) {
        (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
          error: Error()
        }), logger) : logger).log(`初始化redis配置`);
        (_crd && initRedisClient === void 0 ? (_reportPossibleCrUseOfinitRedisClient({
          error: Error()
        }), initRedisClient) : initRedisClient)(cfg.redisConfig);
      } else {
        (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
          error: Error()
        }), logger) : logger).error(`redisConfig未配置!`);
        return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
          error: Error()
        }), Result) : Result).buildErr("redisConfig未配置!");
      }

      return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
        error: Error()
      }), Result) : Result).buildSucc(cfg);
    };

    let ret = await (_crd && startWatchConfig === void 0 ? (_reportPossibleCrUseOfstartWatchConfig({
      error: Error()
    }), startWatchConfig) : startWatchConfig)(serverConfigPath, () => {
      if (!getConfig) return;
      (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
        error: Error()
      }), logger) : logger).log(`配置文件更新,重新加载中...[${serverConfigPath}]`);
      getAndInitConfig();
    });

    if (!ret.succ) {
      return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
        error: Error()
      }), Result) : Result).transition(ret);
    }

    let getConfig = ret.data;
    return await getAndInitConfig();
  }
  /**获取gf.clusterServer.config.json配置，配置文件有变化会自动读取最新的*/


  async function getServerConfig() {
    //如果有指定内存配置，则直接返回
    if (memServerConfig) return memServerConfig; //尝试加载文件配置

    let ret = await (_crd && getConfigAuto === void 0 ? (_reportPossibleCrUseOfgetConfigAuto({
      error: Error()
    }), getConfigAuto) : getConfigAuto)(serverConfigPath);

    if (!ret.succ) {
      (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
        error: Error()
      }), logger) : logger).error(ret.err);
      return {};
    }

    return ret.data;
  }
  /**
   * 指定使用内存配置
   * @param cfg null表示清除内存配置，获取配置时会使用文件配置
   */


  function setMemServerConfig(cfg) {
    memServerConfig = cfg;
  }
  /**获取gf.clusterServer.config.json配置中的redis客户端实例，配置文件有变化会自动使用最新的*/


  async function getServerRedisClient(reuseClient = true) {
    return await (_crd && getRedisClient === void 0 ? (_reportPossibleCrUseOfgetRedisClient({
      error: Error()
    }), getRedisClient) : getRedisClient)(reuseClient);
  }

  function _reportPossibleCrUseOfpath(extras) {
    _reporterNs.report("path", "path", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetConfigAuto(extras) {
    _reporterNs.report("getConfigAuto", "./shared/tsgfServer/gfConfigMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstartWatchConfig(extras) {
    _reporterNs.report("startWatchConfig", "./shared/tsgfServer/gfConfigMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetRedisClient(extras) {
    _reporterNs.report("getRedisClient", "./shared/tsgfServer/redisHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitRedisClient(extras) {
    _reporterNs.report("initRedisClient", "./shared/tsgfServer/redisHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRedisClient(extras) {
    _reporterNs.report("IRedisClient", "./shared/tsgfServer/redisHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOflogger(extras) {
    _reporterNs.report("logger", "./shared/tsgf/logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfparseProcessArgv(extras) {
    _reporterNs.report("parseProcessArgv", "./shared/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfparseProcessEnv(extras) {
    _reporterNs.report("parseProcessEnv", "./shared/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "./shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "./shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIServerConfig(extras) {
    _reporterNs.report("IServerConfig", "./ServerConfig", _context.meta, extras);
  }

  _export({
    startWatchServerConfig: startWatchServerConfig,
    getServerConfig: getServerConfig,
    setMemServerConfig: setMemServerConfig,
    getServerRedisClient: getServerRedisClient
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_path) {
      path = _path.default;
    }, function (_unresolved_2) {
      getConfigAuto = _unresolved_2.getConfigAuto;
      startWatchConfig = _unresolved_2.startWatchConfig;
    }, function (_unresolved_3) {
      getRedisClient = _unresolved_3.getRedisClient;
      initRedisClient = _unresolved_3.initRedisClient;
    }, function (_unresolved_4) {
      logger = _unresolved_4.logger;
    }, function (_unresolved_5) {
      parseProcessArgv = _unresolved_5.parseProcessArgv;
      parseProcessEnv = _unresolved_5.parseProcessEnv;
    }, function (_unresolved_6) {
      Result = _unresolved_6.Result;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8700dRCTRlAJorlJfssHLIp", "serverConfigMgr", undefined);

      processArgs = (_crd && parseProcessArgv === void 0 ? (_reportPossibleCrUseOfparseProcessArgv({
        error: Error()
      }), parseProcessArgv) : parseProcessArgv)(process.argv.splice(2));
      processEnv = (_crd && parseProcessEnv === void 0 ? (_reportPossibleCrUseOfparseProcessEnv({
        error: Error()
      }), parseProcessEnv) : parseProcessEnv)(process.env); // 命令行参数 > 环境变量 > 默认值

      tsgfConfigFile = (_ref = (_processArgs$tsgfConf = processArgs['tsgfConfigFile']) != null ? _processArgs$tsgfConf : processEnv['tsgfConfigFile']) != null ? _ref : '../tsgf.server.config.json';
      serverConfigPath = (_crd && path === void 0 ? (_reportPossibleCrUseOfpath({
        error: Error()
      }), path) : path).resolve(__dirname, tsgfConfigFile);
      /**使用内存指定的配置*/

      memServerConfig = null;
      (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
        error: Error()
      }), logger) : logger).log('serverConfigPath:', serverConfigPath);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2a17ffe3389f7916253b54b293fc0e0784dad8d1.js.map