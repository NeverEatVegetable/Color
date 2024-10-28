System.register(["__unresolved_0", "cc", "tsrpc", "__unresolved_1", "path", "uuid", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, WsServer, GameConnMgr, path, v4, GameServiceProto, logger, GameServerAppRoomMgr, MatchRequestTerminal, GameClusterNodeClient, GameServer, _crd;

  function _reportPossibleCrUseOfApiCallWs(extras) {
    _reporterNs.report("ApiCallWs", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgCallWs(extras) {
    _reporterNs.report("MsgCallWs", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWsConnection(extras) {
    _reporterNs.report("WsConnection", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWsServer(extras) {
    _reporterNs.report("WsServer", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConnMgr(extras) {
    _reporterNs.report("GameConnMgr", "./GameConnMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv(extras) {
    _reporterNs.report("v4", "uuid", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameServiceProto(extras) {
    _reporterNs.report("GameServiceProto", "../shared/gameClient/protocols/serviceProto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameServiceType(extras) {
    _reporterNs.report("GameServiceType", "../shared/gameClient/protocols/serviceProto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetRedisClient(extras) {
    _reporterNs.report("GetRedisClient", "../shared/tsgfServer/redisHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOflogger(extras) {
    _reporterNs.report("logger", "../shared/tsgf/logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameServerAppRoomMgr(extras) {
    _reporterNs.report("GameServerAppRoomMgr", "./GameServerAppRoomMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatchRequestTerminal(extras) {
    _reporterNs.report("MatchRequestTerminal", "../shared/tsgfServer/match/MatchRequestTerminal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameServerCfg(extras) {
    _reporterNs.report("IGameServerCfg", "../ServerConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomInfo(extras) {
    _reporterNs.report("IRoomInfo", "../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameClusterNodeClient(extras) {
    _reporterNs.report("GameClusterNodeClient", "../shared/tsgfServer/gameCluster/GameClusterNodeClient", _context.meta, extras);
  }

  _export("GameServer", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_tsrpc) {
      WsServer = _tsrpc.WsServer;
    }, function (_unresolved_2) {
      GameConnMgr = _unresolved_2.GameConnMgr;
    }, function (_path) {
      path = _path;
    }, function (_uuid) {
      v4 = _uuid.v4;
    }, function (_unresolved_3) {
      GameServiceProto = _unresolved_3.serviceProto;
    }, function (_unresolved_4) {
      logger = _unresolved_4.logger;
    }, function (_unresolved_5) {
      GameServerAppRoomMgr = _unresolved_5.GameServerAppRoomMgr;
    }, function (_unresolved_6) {
      MatchRequestTerminal = _unresolved_6.MatchRequestTerminal;
    }, function (_unresolved_7) {
      GameClusterNodeClient = _unresolved_7.GameClusterNodeClient;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5c96ReSBBGiLUsbsYnBtrG", "GameServer", undefined);

      /**
       * 游戏服务器API专用的ApiCall类型，可用于获取Game服务对象
       * @date 2022/4/26 - 16:21:57
       *
       * @typedef {GameApiCall}
       * @typeParam req
       * @typeParam res
       */

      /**
       * 游戏服务器Msg专用的MsgCall类型，可用于获取Game服务对象
       * @date 2022/4/26 - 16:21:57
       *
       * @typedef {GameMsgCall}
       * @typeParam msg
       */

      /**游戏服务端的客户端连接*/

      /**游戏的websocket服务类型*/
      _export("GameServer", GameServer = class GameServer {
        constructor(getRedisClient, currGameServerCfg, getGameServerCfg) {
          this.server = void 0;
          this.getRedisClient = void 0;
          this.getGameServerCfg = void 0;
          this.gameConnMgr = void 0;
          this.roomMgr = void 0;
          this.matchReqTerminal = void 0;
          this.gameClusterClient = void 0;
          this.getRedisClient = getRedisClient;
          this.getGameServerCfg = getGameServerCfg; //固定值的使用 tmpGameServerCfg, 每次都获取配置的则用 this.getGameServerCfg()

          this.server = new (_crd && WsServer === void 0 ? (_reportPossibleCrUseOfWsServer({
            error: Error()
          }), WsServer) : WsServer)(_crd && GameServiceProto === void 0 ? (_reportPossibleCrUseOfGameServiceProto({
            error: Error()
          }), GameServiceProto) : GameServiceProto, {
            port: currGameServerCfg.port,
            json: false,
            logger: _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger
          }); //让Call能获取到本服务实例

          this.server.flows.preApiCallFlow.push(v => {
            v.getGameServer = () => this;

            return v;
          });
          this.server.flows.preMsgCallFlow.push(v => {
            v.getGameServer = () => this;

            return v;
          }); //设置游戏服务连接ID

          this.server.flows.postConnectFlow.push(async v => {
            v.connectionId = (_crd && v4 === void 0 ? (_reportPossibleCrUseOfv({
              error: Error()
            }), v4) : v4)();
            return v;
          }); //集群

          this.gameClusterClient = new (_crd && GameClusterNodeClient === void 0 ? (_reportPossibleCrUseOfGameClusterNodeClient({
            error: Error()
          }), GameClusterNodeClient) : GameClusterNodeClient)(currGameServerCfg, this.getGameServerCfg, () => this.server.connections.length);

          this.gameClusterClient.onAssignTask = (taskId, taskData) => {
            switch (taskId) {
              case 'DismissRoom':
                let roomId = taskData;
                this.procTaskDismissRoom(roomId);
                break;
            }
          }; //游戏服务器各管理模块启动


          this.matchReqTerminal = new (_crd && MatchRequestTerminal === void 0 ? (_reportPossibleCrUseOfMatchRequestTerminal({
            error: Error()
          }), MatchRequestTerminal) : MatchRequestTerminal)(this.getRedisClient, true);
          this.gameConnMgr = new (_crd && GameConnMgr === void 0 ? (_reportPossibleCrUseOfGameConnMgr({
            error: Error()
          }), GameConnMgr) : GameConnMgr)(this.server, this.getGameServerCfg);
          this.roomMgr = new (_crd && GameServerAppRoomMgr === void 0 ? (_reportPossibleCrUseOfGameServerAppRoomMgr({
            error: Error()
          }), GameServerAppRoomMgr) : GameServerAppRoomMgr)(this.server, this.gameConnMgr, this.gameClusterClient, this.matchReqTerminal, currGameServerCfg.clusterNodeId);
        }

        async start() {
          var _this$server$logger;

          await this.server.autoImplementApi(path.resolve(__dirname, 'api'));
          await this.server.start();
          (_this$server$logger = this.server.logger) == null || _this$server$logger.log("GameServer: 服务启动成功!");
          await this.matchReqTerminal.start();
          let joinErr = await this.gameClusterClient.joinCluster();

          if (joinErr) {
            var _this$server$logger2;

            (_this$server$logger2 = this.server.logger) == null || _this$server$logger2.log("GameServer: 加入集群服务器失败:" + joinErr + ". 即将停止服务!");
            await this.stop();
            return;
          } else {
            var _this$server$logger3;

            (_this$server$logger3 = this.server.logger) == null || _this$server$logger3.log("GameServer: 加入集群服务器成功!");
          }
        }

        async stop() {
          await this.gameClusterClient.disconnectCluster();
          await this.matchReqTerminal.stop();
          await this.server.stop();
        }

        async procTaskDismissRoom(roomId) {
          return await this.roomMgr.dismissRoom(undefined, roomId);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ca8841713064d08a3baeb716aabb091134b5dd08.js.map