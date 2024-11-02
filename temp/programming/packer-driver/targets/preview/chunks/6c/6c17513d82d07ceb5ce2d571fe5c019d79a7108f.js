System.register(["__unresolved_0", "cc", "path", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "tsrpc", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, path, getServerConfig, getServerRedisClient, logger, HallServer, GameServerClusterMgr, MatchServerClusterMgr, GameServer, MatchServer, HttpServer, demoServiceProto, RunServerKey, _crd, hallServer, gameServerClusterMgr, matchServerClusterMgr, gameServer, matchServer, demoServer;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function startHallServer() {
    return _startHallServer.apply(this, arguments);
  }

  function _startHallServer() {
    _startHallServer = _asyncToGenerator(function* () {
      var _ref;

      // 大厅服务器
      var hallServerCfg = (yield (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
        error: Error()
      }), getServerConfig) : getServerConfig)()).hallServer;
      (_ref = _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
        error: Error()
      }), logger) : logger) == null || _ref.log("大厅服务器.port:", hallServerCfg.port);
      hallServer = new (_crd && HallServer === void 0 ? (_reportPossibleCrUseOfHallServer({
        error: Error()
      }), HallServer) : HallServer)(_crd && getServerRedisClient === void 0 ? (_reportPossibleCrUseOfgetServerRedisClient({
        error: Error()
      }), getServerRedisClient) : getServerRedisClient, hallServerCfg, /*#__PURE__*/_asyncToGenerator(function* () {
        return (yield (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
          error: Error()
        }), getServerConfig) : getServerConfig)()).hallServer;
      }));
      yield hallServer.start();
      (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
        error: Error()
      }), logger) : logger).log("大厅服务启动成功!");
    });
    return _startHallServer.apply(this, arguments);
  }

  function stopHallServer() {
    return _stopHallServer.apply(this, arguments);
  }

  function _stopHallServer() {
    _stopHallServer = _asyncToGenerator(function* () {
      var _hallServer;

      yield (_hallServer = hallServer) == null ? void 0 : _hallServer.stop();
    });
    return _stopHallServer.apply(this, arguments);
  }

  function startGameServerClusterMgr() {
    return _startGameServerClusterMgr.apply(this, arguments);
  }

  function _startGameServerClusterMgr() {
    _startGameServerClusterMgr = _asyncToGenerator(function* () {
      var _ref3;

      // 游戏服务器集群管理服务（可选，即可另外独立部署、启动）
      (_ref3 = _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
        error: Error()
      }), logger) : logger) == null || _ref3.log("gameClusterServer.port:", (yield (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
        error: Error()
      }), getServerConfig) : getServerConfig)()).gameServerCluster.port);
      gameServerClusterMgr = new (_crd && GameServerClusterMgr === void 0 ? (_reportPossibleCrUseOfGameServerClusterMgr({
        error: Error()
      }), GameServerClusterMgr) : GameServerClusterMgr)( /*#__PURE__*/_asyncToGenerator(function* () {
        //每次都从配置中读取
        return (yield (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
          error: Error()
        }), getServerConfig) : getServerConfig)()).gameServerCluster.nodeList;
      }), /*#__PURE__*/_asyncToGenerator(function* () {
        //每次都从配置中读取
        return (yield (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
          error: Error()
        }), getServerConfig) : getServerConfig)()).gameServerCluster.terminalList;
      }), {
        port: (yield (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
          error: Error()
        }), getServerConfig) : getServerConfig)()).gameServerCluster.port,
        json: false,
        logger: _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
          error: Error()
        }), logger) : logger
      }, /*#__PURE__*/_asyncToGenerator(function* (reuseClient) {
        if (reuseClient === void 0) {
          reuseClient = true;
        }

        return yield (_crd && getServerRedisClient === void 0 ? (_reportPossibleCrUseOfgetServerRedisClient({
          error: Error()
        }), getServerRedisClient) : getServerRedisClient)(reuseClient);
      }));
      yield gameServerClusterMgr.start();
      (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
        error: Error()
      }), logger) : logger).log("游戏集群管理服务启动成功!");
    });
    return _startGameServerClusterMgr.apply(this, arguments);
  }

  function stopGameServerClusterMgr() {
    return _stopGameServerClusterMgr.apply(this, arguments);
  }

  function _stopGameServerClusterMgr() {
    _stopGameServerClusterMgr = _asyncToGenerator(function* () {
      var _gameServerClusterMgr;

      yield (_gameServerClusterMgr = gameServerClusterMgr) == null ? void 0 : _gameServerClusterMgr.stop();
    });
    return _stopGameServerClusterMgr.apply(this, arguments);
  }

  function startMatchServerClusterMgr() {
    return _startMatchServerClusterMgr.apply(this, arguments);
  }

  function _startMatchServerClusterMgr() {
    _startMatchServerClusterMgr = _asyncToGenerator(function* () {
      var _ref7;

      // 匹配服务器集群管理服务（可选，即可另外独立部署、启动）
      (_ref7 = _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
        error: Error()
      }), logger) : logger) == null || _ref7.log("matchClusterServer.port:", (yield (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
        error: Error()
      }), getServerConfig) : getServerConfig)()).matchServerCluster.port);
      matchServerClusterMgr = new (_crd && MatchServerClusterMgr === void 0 ? (_reportPossibleCrUseOfMatchServerClusterMgr({
        error: Error()
      }), MatchServerClusterMgr) : MatchServerClusterMgr)( /*#__PURE__*/_asyncToGenerator(function* () {
        //每次都从配置中读取
        return (yield (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
          error: Error()
        }), getServerConfig) : getServerConfig)()).matchServerCluster.nodeList;
      }), /*#__PURE__*/_asyncToGenerator(function* () {
        //每次都从配置中读取
        return (yield (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
          error: Error()
        }), getServerConfig) : getServerConfig)()).matchServerCluster.terminalList;
      }), {
        port: (yield (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
          error: Error()
        }), getServerConfig) : getServerConfig)()).matchServerCluster.port,
        json: false,
        logger: _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
          error: Error()
        }), logger) : logger
      }, /*#__PURE__*/_asyncToGenerator(function* (reuseClient) {
        if (reuseClient === void 0) {
          reuseClient = true;
        }

        return yield (_crd && getServerRedisClient === void 0 ? (_reportPossibleCrUseOfgetServerRedisClient({
          error: Error()
        }), getServerRedisClient) : getServerRedisClient)(reuseClient);
      }));
      yield matchServerClusterMgr.start();
      (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
        error: Error()
      }), logger) : logger).log("匹配集群管理服务启动成功!");
    });
    return _startMatchServerClusterMgr.apply(this, arguments);
  }

  function stopMatchServerClusterMgr() {
    return _stopMatchServerClusterMgr.apply(this, arguments);
  }

  function _stopMatchServerClusterMgr() {
    _stopMatchServerClusterMgr = _asyncToGenerator(function* () {
      var _matchServerClusterMg;

      yield (_matchServerClusterMg = matchServerClusterMgr) == null ? void 0 : _matchServerClusterMg.stop();
    });
    return _stopMatchServerClusterMgr.apply(this, arguments);
  }

  function startGameServer() {
    return _startGameServer.apply(this, arguments);
  }

  function _startGameServer() {
    _startGameServer = _asyncToGenerator(function* () {
      var _ref11;

      var serverCfg = yield (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
        error: Error()
      }), getServerConfig) : getServerConfig)();
      (_ref11 = _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
        error: Error()
      }), logger) : logger) == null || _ref11.log("gameServer: port:", serverCfg.gameServer.port);
      gameServer = new (_crd && GameServer === void 0 ? (_reportPossibleCrUseOfGameServer({
        error: Error()
      }), GameServer) : GameServer)(_crd && getServerRedisClient === void 0 ? (_reportPossibleCrUseOfgetServerRedisClient({
        error: Error()
      }), getServerRedisClient) : getServerRedisClient, serverCfg.gameServer, /*#__PURE__*/_asyncToGenerator(function* () {
        return (yield (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
          error: Error()
        }), getServerConfig) : getServerConfig)()).gameServer;
      }));
      yield gameServer.start();
      (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
        error: Error()
      }), logger) : logger).log("游戏服务启动成功!");
    });
    return _startGameServer.apply(this, arguments);
  }

  function stopGameServer() {
    return _stopGameServer.apply(this, arguments);
  }

  function _stopGameServer() {
    _stopGameServer = _asyncToGenerator(function* () {
      var _gameServer;

      yield (_gameServer = gameServer) == null ? void 0 : _gameServer.stop();
    });
    return _stopGameServer.apply(this, arguments);
  }

  function startMatchServer() {
    return _startMatchServer.apply(this, arguments);
  }

  function _startMatchServer() {
    _startMatchServer = _asyncToGenerator(function* () {
      var _ref13;

      var serverCfg = yield (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
        error: Error()
      }), getServerConfig) : getServerConfig)();
      (_ref13 = _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
        error: Error()
      }), logger) : logger) == null || _ref13.log("matchServer:", serverCfg.matchServer.clusterNodeId, serverCfg.matchServer.serverName);
      matchServer = new (_crd && MatchServer === void 0 ? (_reportPossibleCrUseOfMatchServer({
        error: Error()
      }), MatchServer) : MatchServer)(_crd && getServerRedisClient === void 0 ? (_reportPossibleCrUseOfgetServerRedisClient({
        error: Error()
      }), getServerRedisClient) : getServerRedisClient, serverCfg.matchServer);
      yield matchServer.start();
      (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
        error: Error()
      }), logger) : logger).log("匹配处理服务启动成功!");
    });
    return _startMatchServer.apply(this, arguments);
  }

  function stopMatchServer() {
    return _stopMatchServer.apply(this, arguments);
  }

  function _stopMatchServer() {
    _stopMatchServer = _asyncToGenerator(function* () {
      var _matchServer;

      yield (_matchServer = matchServer) == null ? void 0 : _matchServer.stop();
    });
    return _stopMatchServer.apply(this, arguments);
  }

  function startDemoServer() {
    return _startDemoServer.apply(this, arguments);
  }

  function _startDemoServer() {
    _startDemoServer = _asyncToGenerator(function* () {
      demoServer = new (_crd && HttpServer === void 0 ? (_reportPossibleCrUseOfHttpServer({
        error: Error()
      }), HttpServer) : HttpServer)(_crd && demoServiceProto === void 0 ? (_reportPossibleCrUseOfdemoServiceProto({
        error: Error()
      }), demoServiceProto) : demoServiceProto, {
        port: (yield (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
          error: Error()
        }), getServerConfig) : getServerConfig)()).demoServer.port,
        json: true,
        logger: _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
          error: Error()
        }), logger) : logger
      });
      demoServer.flows.preRecvDataFlow.push(v => {
        var conn = v.conn; //解决HTTP请求跨域问题

        conn.httpRes.setHeader("Access-Control-Allow-Origin", "*");
        return v;
      });
      yield demoServer.autoImplementApi(path.resolve(__dirname, 'demoServer/api'));
      yield demoServer.start();
      (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
        error: Error()
      }), logger) : logger).log("示例应用的用户系统模拟服务启动成功!");
    });
    return _startDemoServer.apply(this, arguments);
  }

  function stopDemoServer() {
    return _stopDemoServer.apply(this, arguments);
  }
  /**启动当前选用的所有服务*/


  function _stopDemoServer() {
    _stopDemoServer = _asyncToGenerator(function* () {
      var _demoServer;

      yield (_demoServer = demoServer) == null ? void 0 : _demoServer.stop();
    });
    return _stopDemoServer.apply(this, arguments);
  }

  function startServers() {
    return _startServers.apply(this, arguments);
  }

  function _startServers() {
    _startServers = _asyncToGenerator(function* () {
      var rs = (yield (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
        error: Error()
      }), getServerConfig) : getServerConfig)()).runServer;

      if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
        error: Error()
      }), RunServerKey) : RunServerKey).GameServerCluster)) {
        yield startGameServerClusterMgr();
      }

      if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
        error: Error()
      }), RunServerKey) : RunServerKey).MatchServerCluster)) {
        yield startMatchServerClusterMgr();
      }

      if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
        error: Error()
      }), RunServerKey) : RunServerKey).GameServer)) {
        yield startGameServer();
      }

      if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
        error: Error()
      }), RunServerKey) : RunServerKey).MatchServer)) {
        yield startMatchServer();
      }

      if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
        error: Error()
      }), RunServerKey) : RunServerKey).HallServer)) {
        yield startHallServer();
      }

      if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
        error: Error()
      }), RunServerKey) : RunServerKey).DemoServer)) {
        yield startDemoServer();
      }
    });
    return _startServers.apply(this, arguments);
  }

  function stopServers() {
    return _stopServers.apply(this, arguments);
  }

  function _stopServers() {
    _stopServers = _asyncToGenerator(function* () {
      var rs = (yield (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
        error: Error()
      }), getServerConfig) : getServerConfig)()).runServer;

      if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
        error: Error()
      }), RunServerKey) : RunServerKey).DemoServer)) {
        yield stopDemoServer();
      }

      if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
        error: Error()
      }), RunServerKey) : RunServerKey).GameServer)) {
        yield stopGameServer();
      }

      if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
        error: Error()
      }), RunServerKey) : RunServerKey).MatchServer)) {
        yield stopMatchServer();
      }

      if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
        error: Error()
      }), RunServerKey) : RunServerKey).HallServer)) {
        yield stopHallServer();
      }

      if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
        error: Error()
      }), RunServerKey) : RunServerKey).GameServerCluster)) {
        yield stopGameServerClusterMgr();
      }

      if (rs.includes((_crd && RunServerKey === void 0 ? (_reportPossibleCrUseOfRunServerKey({
        error: Error()
      }), RunServerKey) : RunServerKey).MatchServerCluster)) {
        yield stopMatchServerClusterMgr();
      }
    });
    return _stopServers.apply(this, arguments);
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