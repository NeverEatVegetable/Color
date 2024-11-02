System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, getServerRedisClient, startWatchServerConfig, startServers, PlayerAuthHelper, RoomHelper, GameServerHelper, MySqlFactory, _crd;

  async function main() {
    let cfgRet = await (_crd && startWatchServerConfig === void 0 ? (_reportPossibleCrUseOfstartWatchServerConfig({
      error: Error()
    }), startWatchServerConfig) : startWatchServerConfig)();
    if (!cfgRet.succ) throw new Error(cfgRet.err);
    /**实现当前项目全局定义的 获取应用数据库连接实例 的方法*/

    if (!globalThis.getAppDbHelper && cfgRet.data.connString) {
      globalThis.getAppDbHelper = function () {
        return (_crd && MySqlFactory === void 0 ? (_reportPossibleCrUseOfMySqlFactory({
          error: Error()
        }), MySqlFactory) : MySqlFactory).getMySqlDbHelper(cfgRet.data.connString.appDb.mysql);
      };
    }

    (_crd && PlayerAuthHelper === void 0 ? (_reportPossibleCrUseOfPlayerAuthHelper({
      error: Error()
    }), PlayerAuthHelper) : PlayerAuthHelper).init(_crd && getServerRedisClient === void 0 ? (_reportPossibleCrUseOfgetServerRedisClient({
      error: Error()
    }), getServerRedisClient) : getServerRedisClient);
    (_crd && RoomHelper === void 0 ? (_reportPossibleCrUseOfRoomHelper({
      error: Error()
    }), RoomHelper) : RoomHelper).init(_crd && getServerRedisClient === void 0 ? (_reportPossibleCrUseOfgetServerRedisClient({
      error: Error()
    }), getServerRedisClient) : getServerRedisClient);
    (_crd && GameServerHelper === void 0 ? (_reportPossibleCrUseOfGameServerHelper({
      error: Error()
    }), GameServerHelper) : GameServerHelper).init(_crd && getServerRedisClient === void 0 ? (_reportPossibleCrUseOfgetServerRedisClient({
      error: Error()
    }), getServerRedisClient) : getServerRedisClient);
    await (_crd && startServers === void 0 ? (_reportPossibleCrUseOfstartServers({
      error: Error()
    }), startServers) : startServers)();
  }

  function _reportPossibleCrUseOfgetServerRedisClient(extras) {
    _reporterNs.report("getServerRedisClient", "./serverConfigMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstartWatchServerConfig(extras) {
    _reporterNs.report("startWatchServerConfig", "./serverConfigMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstartServers(extras) {
    _reporterNs.report("startServers", "./server", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerAuthHelper(extras) {
    _reporterNs.report("PlayerAuthHelper", "./shared/tsgfServer/auth/PlayerAuthHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomHelper(extras) {
    _reporterNs.report("RoomHelper", "./shared/tsgfServer/room/RoomHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameServerHelper(extras) {
    _reporterNs.report("GameServerHelper", "./shared/tsgfServer/game/GameServerHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMySqlFactory(extras) {
    _reporterNs.report("MySqlFactory", "./shared/tsgfServer/DbHelper", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {}, function (_unresolved_3) {
      getServerRedisClient = _unresolved_3.getServerRedisClient;
      startWatchServerConfig = _unresolved_3.startWatchServerConfig;
    }, function (_unresolved_4) {
      startServers = _unresolved_4.startServers;
    }, function (_unresolved_5) {
      PlayerAuthHelper = _unresolved_5.PlayerAuthHelper;
    }, function (_unresolved_6) {
      RoomHelper = _unresolved_6.RoomHelper;
    }, function (_unresolved_7) {
      GameServerHelper = _unresolved_7.GameServerHelper;
    }, function (_unresolved_8) {
      MySqlFactory = _unresolved_8.MySqlFactory;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3ba01CLRflEA4uq1L0eQnso", "index", undefined);

      ;
      main();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2a8d9d6405794a6ec7a1479825018ca8beb08bab.js.map