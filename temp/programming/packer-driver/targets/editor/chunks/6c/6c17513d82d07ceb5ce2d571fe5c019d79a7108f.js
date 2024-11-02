System.register(["__unresolved_0", "cc", "path", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "tsrpc", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, path, getServerConfig, getServerRedisClient, logger, HallServer, GameServerClusterMgr, MatchServerClusterMgr, GameServer, MatchServer, HttpServer, demoServiceProto, RunServerKey, _crd, hallServer, gameServerClusterMgr, matchServerClusterMgr, gameServer, matchServer, demoServer;

  async function startHallServer() {
    var _ref;

    // 大厅服务器
    let hallServerCfg = (await (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
      error: Error()
    }), getServerConfig) : getServerConfig)()).hallServer;
    (_ref = _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
      error: Error()
    }), logger) : logger) == null || _ref.log("大厅服务器.port:", hallServerCfg.port);
    hallServer = new (_crd && HallServer === void 0 ? (_reportPossibleCrUseOfHallServer({
      error: Error()
    }), HallServer) : HallServer)(_crd && getServerRedisClient === void 0 ? (_reportPossibleCrUseOfgetServerRedisClient({
      error: Error()
    }), getServerRedisClient) : getServerRedisClient, hallServerCfg, async () => (await (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
      error: Error()
    }), getServerConfig) : getServerConfig)()).hallServer);
    await hallServer.start();
    (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
      error: Error()
    }), logger) : logger).log("大厅服务启动成功!");
  }

  async function stopHallServer() {
    var _hallServer;

    await ((_hallServer = hallServer) == null ? void 0 : _hallServer.stop());
  }

  async function startGameServerClusterMgr() {
    var _ref2;

    // 游戏服务器集群管理服务（可选，即可另外独立部署、启动）
    (_ref2 = _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
      error: Error()
    }), logger) : logger) == null || _ref2.log("gameClusterServer.port:", (await (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
      error: Error()
    }), getServerConfig) : getServerConfig)()).gameServerCluster.port);
    gameServerClusterMgr = new (_crd && GameServerClusterMgr === void 0 ? (_reportPossibleCrUseOfGameServerClusterMgr({
      error: Error()
    }), GameServerClusterMgr) : GameServerClusterMgr)(async () => {
      //每次都从配置中读取
      return (await (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
        error: Error()
      }), getServerConfig) : getServerConfig)()).gameServerCluster.nodeList;
    }, async () => {
      //每次都从配置中读取
      return (await (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
        error: Error()
      }), getServerConfig) : getServerConfig)()).gameServerCluster.terminalList;
    }, {
      port: (await (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
        error: Error()
      }), getServerConfig) : getServerConfig)()).gameServerCluster.port,
      json: false,
      logger: _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
        error: Error()
      }), logger) : logger
    }, async (reuseClient = true) => await (_crd && getServerRedisClient === void 0 ? (_reportPossibleCrUseOfgetServerRedisClient({
      error: Error()
    }), getServerRedisClient) : getServerRedisClient)(reuseClient));
    await gameServerClusterMgr.start();
    (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
      error: Error()
    }), logger) : logger).log("游戏集群管理服务启动成功!");
  }

  async function stopGameServerClusterMgr() {
    var _gameServerClusterMgr;

    await ((_gameServerClusterMgr = gameServerClusterMgr) == null ? void 0 : _gameServerClusterMgr.stop());
  }

  async function startMatchServerClusterMgr() {
    var _ref3;

    // 匹配服务器集群管理服务（可选，即可另外独立部署、启动）
    (_ref3 = _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
      error: Error()
    }), logger) : logger) == null || _ref3.log("matchClusterServer.port:", (await (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
      error: Error()
    }), getServerConfig) : getServerConfig)()).matchServerCluster.port);
    matchServerClusterMgr = new (_crd && MatchServerClusterMgr === void 0 ? (_reportPossibleCrUseOfMatchServerClusterMgr({
      error: Error()
    }), MatchServerClusterMgr) : MatchServerClusterMgr)(async () => {
      //每次都从配置中读取
      return (await (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
        error: Error()
      }), getServerConfig) : getServerConfig)()).matchServerCluster.nodeList;
    }, async () => {
      //每次都从配置中读取
      return (await (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
        error: Error()
      }), getServerConfig) : getServerConfig)()).matchServerCluster.terminalList;
    }, {
      port: (await (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
        error: Error()
      }), getServerConfig) : getServerConfig)()).matchServerCluster.port,
      json: false,
      logger: _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
        error: Error()
      }), logger) : logger
    }, async (reuseClient = true) => await (_crd && getServerRedisClient === void 0 ? (_reportPossibleCrUseOfgetServerRedisClient({
      error: Error()
    }), getServerRedisClient) : getServerRedisClient)(reuseClient));
    await matchServerClusterMgr.start();
    (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
      error: Error()
    }), logger) : logger).log("匹配集群管理服务启动成功!");
  }

  async function stopMatchServerClusterMgr() {
    var _matchServerClusterMg;

    await ((_matchServerClusterMg = matchServerClusterMgr) == null ? void 0 : _matchServerClusterMg.stop());
  }

  async function startGameServer() {
    var _ref4;

    let serverCfg = await (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
      error: Error()
    }), getServerConfig) : getServerConfig)();
    (_ref4 = _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
      error: Error()
    }), logger) : logger) == null || _ref4.log("gameServer: port:", serverCfg.gameServer.port);
    gameServer = new (_crd && GameServer === void 0 ? (_reportPossibleCrUseOfGameServer({
      error: Error()
    }), GameServer) : GameServer)(_crd && getServerRedisClient === void 0 ? (_reportPossibleCrUseOfgetServerRedisClient({
      error: Error()
    }), getServerRedisClient) : getServerRedisClient, serverCfg.gameServer, async () => (await (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
      error: Error()
    }), getServerConfig) : getServerConfig)()).gameServer);
    await gameServer.start();
    (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
      error: Error()
    }), logger) : logger).log("游戏服务启动成功!");
  }

  async function stopGameServer() {
    var _gameServer;

    await ((_gameServer = gameServer) == null ? void 0 : _gameServer.stop());
  }

  async function startMatchServer() {
    var _ref5;

    let serverCfg = await (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
      error: Error()
    }), getServerConfig) : getServerConfig)();
    (_ref5 = _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
      error: Error()
    }), logger) : logger) == null || _ref5.log("matchServer:", serverCfg.matchServer.clusterNodeId, serverCfg.matchServer.serverName);
    matchServer = new (_crd && MatchServer === void 0 ? (_reportPossibleCrUseOfMatchServer({
      error: Error()
    }), MatchServer) : MatchServer)(_crd && getServerRedisClient === void 0 ? (_reportPossibleCrUseOfgetServerRedisClient({
      error: Error()
    }), getServerRedisClient) : getServerRedisClient, serverCfg.matchServer);
    await matchServer.start();
    (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
      error: Error()
    }), logger) : logger).log("匹配处理服务启动成功!");
  }

  async function stopMatchServer() {
    var _matchServer;

    await ((_matchServer = matchServer) == null ? void 0 : _matchServer.stop());
  }

  async function startDemoServer() {
    demoServer = new (_crd && HttpServer === void 0 ? (_reportPossibleCrUseOfHttpServer({
      error: Error()
    }), HttpServer) : HttpServer)(_crd && demoServiceProto === void 0 ? (_reportPossibleCrUseOfdemoServiceProto({
      error: Error()
    }), demoServiceProto) : demoServiceProto, {
      port: (await (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
        error: Error()
      }), getServerConfig) : getServerConfig)()).demoServer.port,
      json: true,
      logger: _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
        error: Error()
      }), logger) : logger
    });
    demoServer.flows.preRecvDataFlow.push(v => {
      let conn = v.conn; //解决HTTP请求跨域问题

      conn.httpRes.setHeader("Access-Control-Allow-Origin", "*");
      return v;
    });
    await demoServer.autoImplementApi(path.resolve(__dirname, 'demoServer/api'));
    await demoServer.start();
    (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
      error: Error()
    }), logger) : logger).log("示例应用的用户系统模拟服务启动成功!");
  }

  async function stopDemoServer() {
    var _demoServer;

    await ((_demoServer = demoServer) == null ? void 0 : _demoServer.stop());
  }
  /**启动当前选用的所有服务*/


  async function startServers() {
    let rs = (await (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
      error: Error()
    }), getServerConfig) : getServerConfig)()).runServer;

    if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
      error: Error()
    }), RunServerKey) : RunServerKey).GameServerCluster)) {
      await startGameServerClusterMgr();
    }

    if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
      error: Error()
    }), RunServerKey) : RunServerKey).MatchServerCluster)) {
      await startMatchServerClusterMgr();
    }

    if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
      error: Error()
    }), RunServerKey) : RunServerKey).GameServer)) {
      await startGameServer();
    }

    if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
      error: Error()
    }), RunServerKey) : RunServerKey).MatchServer)) {
      await startMatchServer();
    }

    if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
      error: Error()
    }), RunServerKey) : RunServerKey).HallServer)) {
      await startHallServer();
    }

    if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
      error: Error()
    }), RunServerKey) : RunServerKey).DemoServer)) {
      await startDemoServer();
    }
  }

  async function stopServers() {
    let rs = (await (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
      error: Error()
    }), getServerConfig) : getServerConfig)()).runServer;

    if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
      error: Error()
    }), RunServerKey) : RunServerKey).DemoServer)) {
      await stopDemoServer();
    }

    if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
      error: Error()
    }), RunServerKey) : RunServerKey).GameServer)) {
      await stopGameServer();
    }

    if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
      error: Error()
    }), RunServerKey) : RunServerKey).MatchServer)) {
      await stopMatchServer();
    }

    if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
      error: Error()
    }), RunServerKey) : RunServerKey).HallServer)) {
      await stopHallServer();
    }

    if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
      error: Error()
    }), RunServerKey) : RunServerKey).GameServerCluster)) {
      await stopGameServerClusterMgr();
    }

    if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
      error: Error()
    }), RunServerKey) : RunServerKey).MatchServerCluster)) {
      await stopMatchServerClusterMgr();
    }
  }

  function _reportPossibleCrUseOfgetServerConfig(extras) {
    _reporterNs.report("getServerConfig", "./serverConfigMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetServerRedisClient(extras) {
    _reporterNs.report("getServerRedisClient", "./serverConfigMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOflogger(extras) {
    _reporterNs.report("logger", "./shared/tsgf/logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayer(extras) {
    _reporterNs.report("IPlayer", "./shared/tsgfServer/auth/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallServer(extras) {
    _reporterNs.report("HallServer", "./hallServer/HallServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameServerClusterMgr(extras) {
    _reporterNs.report("GameServerClusterMgr", "./gameServerCluster/GameServerClusterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatchServerClusterMgr(extras) {
    _reporterNs.report("MatchServerClusterMgr", "./matchServerCluster/MatchServerClusterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameServer(extras) {
    _reporterNs.report("GameServer", "./gameServer/GameServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatchServer(extras) {
    _reporterNs.report("MatchServer", "./matchServer/MatchServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpConnection(extras) {
    _reporterNs.report("HttpConnection", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpServer(extras) {
    _reporterNs.report("HttpServer", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdemoServiceProto(extras) {
    _reporterNs.report("demoServiceProto", "./shared/demoClient/protocols/serviceProto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDemoServiceType(extras) {
    _reporterNs.report("DemoServiceType", "./shared/demoClient/protocols/serviceProto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRunServerKey(extras) {
    _reporterNs.report("RunServerKey", "./ServerConfig", _context.meta, extras);
  }

  _export({
    startServers: startServers,
    stopServers: stopServers
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_path) {
      path = _path;
    }, function (_unresolved_2) {
      getServerConfig = _unresolved_2.getServerConfig;
      getServerRedisClient = _unresolved_2.getServerRedisClient;
    }, function (_unresolved_3) {
      logger = _unresolved_3.logger;
    }, function (_unresolved_4) {
      HallServer = _unresolved_4.HallServer;
    }, function (_unresolved_5) {
      GameServerClusterMgr = _unresolved_5.GameServerClusterMgr;
    }, function (_unresolved_6) {
      MatchServerClusterMgr = _unresolved_6.MatchServerClusterMgr;
    }, function (_unresolved_7) {
      GameServer = _unresolved_7.GameServer;
    }, function (_unresolved_8) {
      MatchServer = _unresolved_8.MatchServer;
    }, function (_tsrpc) {
      HttpServer = _tsrpc.HttpServer;
    }, function (_unresolved_9) {
      demoServiceProto = _unresolved_9.serviceProto;
    }, function (_unresolved_10) {
      RunServerKey = _unresolved_10.RunServerKey;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "82c1f7rHDZBy54ayeJ/rTTC", "server", undefined);
      /*
      当前加载了哪些服务，由本文件决定
      */


      hallServer = null;
      gameServerClusterMgr = null;
      matchServerClusterMgr = null;
      gameServer = null;
      matchServer = null;
      demoServer = null;
      /**拓展字段*/

      ;
      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6c17513d82d07ceb5ce2d571fe5c019d79a7108f.js.map