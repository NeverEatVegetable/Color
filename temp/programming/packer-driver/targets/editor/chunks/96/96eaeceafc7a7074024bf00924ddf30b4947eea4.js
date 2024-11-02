System.register(["__unresolved_0", "cc", "fs", "path", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, fs, path, Result, _crd, allConfigs, ConfigType;

  /**
   * 开始监控配置文件,并返回配置对象的方法
   * @param configPath 配置文件路径, 支持json和ts默认导出格式
   * @param configChanged 当配置文件有变化时触发，需要自行调用获取最新的配置
   * @returns 
   */
  async function startWatchConfig(configPath, configChanged = null) {
    if (!(_crd && fs === void 0 ? (_reportPossibleCrUseOffs({
      error: Error()
    }), fs) : fs).existsSync(configPath)) {
      return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
        error: Error()
      }), Result) : Result).buildErr("配置文件[" + configPath + "]不存在!");
    }

    (_crd && fs === void 0 ? (_reportPossibleCrUseOffs({
      error: Error()
    }), fs) : fs).watchFile(configPath, {
      persistent: false,
      interval: 500
    }, () => {
      allConfigs.set(configPath, null);
      configChanged == null || configChanged.call(null);
    });
    allConfigs.set(configPath, null);
    return await getConfigAuto(configPath);
  }
  /**
   * 读取配置文件,自动根据配置文件格式解析,如果配置没变更将从缓存中读取,需要调用过startWatchConfig初始化!
   * @param configPath 配置文件路径, 支持json和js默认导出格式
   * @returns 
   */


  async function getConfigAuto(configPath) {
    let config = allConfigs.get(configPath);
    if (config) return Promise.resolve((_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
      error: Error()
    }), Result) : Result).buildSucc(config));
    let ext = (_crd && path === void 0 ? (_reportPossibleCrUseOfpath({
      error: Error()
    }), path) : path).extname(configPath);
    let getConfig = null;

    switch (ext) {
      case ConfigType.json:
        getConfig = () => Promise.resolve(getConfigByJson(configPath));

        break;

      case ConfigType.js:
        getConfig = async () => (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
          error: Error()
        }), Result) : Result).buildSucc((await _context.import(`${configPath}`)).default);

        break;

      default:
        return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
          error: Error()
        }), Result) : Result).buildErr("配置路径[" + configPath + "]格式不支持!目前只支持ts和json格式");
    }

    return await getConfig();
  }
  /**
   * 读取配置文件,如果配置没变更将从缓存中读取,需要调用过startWatchConfig初始化!
   * @param configPath 配置文件路径
   * @returns 
   */


  function getConfigByJson(configPath) {
    let config = allConfigs.get(configPath);

    if (!config) {
      let configFileText;

      try {
        let fileBin = (_crd && fs === void 0 ? (_reportPossibleCrUseOffs({
          error: Error()
        }), fs) : fs).readFileSync(configPath);

        if (!fileBin) {
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr("配置文件[" + configPath + "]读取为空!可能是没权限!");
        }

        if (fileBin[0] === 0xEF && fileBin[1] === 0xBB && fileBin[2] === 0xBF) {
          fileBin = fileBin.slice(3);
        }

        configFileText = fileBin.toString('utf-8');
      } catch (ex) {
        return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
          error: Error()
        }), Result) : Result).buildErr("配置文件[" + configPath + "]读取失败:" + ex);
      }

      try {
        config = JSON.parse(configFileText);
        allConfigs.set(configPath, config);
      } catch (ex) {
        return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
          error: Error()
        }), Result) : Result).buildErr("配置文件[" + configPath + "]解析失败:" + ex + ", configFileText:" + configFileText);
      }
    }

    return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
      error: Error()
    }), Result) : Result).buildSucc(config);
  }

  function _reportPossibleCrUseOffs(extras) {
    _reporterNs.report("fs", "fs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpath(extras) {
    _reporterNs.report("path", "path", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIDbHelper(extras) {
    _reporterNs.report("IDbHelper", "./DbHelper", _context.meta, extras);
  }

  _export({
    startWatchConfig: startWatchConfig,
    getConfigAuto: getConfigAuto
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_fs) {
      fs = _fs.default;
    }, function (_path) {
      path = _path.default;
    }, function (_unresolved_2) {
      Result = _unresolved_2.Result;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f8852RE6edLyqjNeDzOA4lJ", "gfConfigMgr", undefined);

      allConfigs = new Map();

      _export("ConfigType", ConfigType = /*#__PURE__*/function (ConfigType) {
        ConfigType["json"] = ".json";
        ConfigType["js"] = ".js";
        return ConfigType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=96eaeceafc7a7074024bf00924ddf30b4947eea4.js.map