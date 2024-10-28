System.register(["__unresolved_0", "cc", "path", "tsrpc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, path, HttpServer, hallServiceProto, MatchRequestTerminal, AppCrypto, PlayerAuthHelper, ENetworkState, ErrorCodes, GameClusterTerminal, logger, HallServer, _crd;

  function _reportPossibleCrUseOfApiCall(extras) {
    _reporterNs.report("ApiCall", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpConnection(extras) {
    _reporterNs.report("HttpConnection", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpServer(extras) {
    _reporterNs.report("HttpServer", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhallServiceProto(extras) {
    _reporterNs.report("hallServiceProto", "../shared/hallClient/protocols/serviceProto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallServiceType(extras) {
    _reporterNs.report("HallServiceType", "../shared/hallClient/protocols/serviceProto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRedisClient(extras) {
    _reporterNs.report("IRedisClient", "../shared/tsgfServer/redisHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatchRequestTerminal(extras) {
    _reporterNs.report("MatchRequestTerminal", "../shared/tsgfServer/match/MatchRequestTerminal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseConf(extras) {
    _reporterNs.report("BaseConf", "../shared/hallClient/protocols/base", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayer(extras) {
    _reporterNs.report("IPlayer", "../shared/tsgfServer/auth/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIApiCrypto(extras) {
    _reporterNs.report("IApiCrypto", "../shared/tsgfServerEDB/apiCrypto/IApiCrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppCrypto(extras) {
    _reporterNs.report("AppCrypto", "../shared/tsgfServerEDB/apiCrypto/AppCrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerAuthHelper(extras) {
    _reporterNs.report("PlayerAuthHelper", "../shared/tsgfServer/auth/PlayerAuthHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENetworkState(extras) {
    _reporterNs.report("ENetworkState", "../shared/tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayerInfo(extras) {
    _reporterNs.report("IPlayerInfo", "../shared/tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameClusterTerminal(extras) {
    _reporterNs.report("GameClusterTerminal", "../shared/tsgfServer/gameCluster/GameClusterTerminal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIHallServerCfg(extras) {
    _reporterNs.report("IHallServerCfg", "../ServerConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOflogger(extras) {
    _reporterNs.report("logger", "../shared/tsgf/logger", _context.meta, extras);
  }

  _export("HallServer", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_path) {
      path = _path;
    }, function (_tsrpc) {
      HttpServer = _tsrpc.HttpServer;
    }, function (_unresolved_2) {
      hallServiceProto = _unresolved_2.serviceProto;
    }, function (_unresolved_3) {
      MatchRequestTerminal = _unresolved_3.MatchRequestTerminal;
    }, function (_unresolved_4) {
      AppCrypto = _unresolved_4.AppCrypto;
    }, function (_unresolved_5) {
      PlayerAuthHelper = _unresolved_5.PlayerAuthHelper;
    }, function (_unresolved_6) {
      ENetworkState = _unresolved_6.ENetworkState;
    }, function (_unresolved_7) {
      ErrorCodes = _unresolved_7.ErrorCodes;
    }, function (_unresolved_8) {
      GameClusterTerminal = _unresolved_8.GameClusterTerminal;
    }, function (_unresolved_9) {
      logger = _unresolved_9.logger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "abf0dOlZilMlKdpBqvSEWqj", "HallServer", undefined);

      /**
       * 大厅服务器API专用的ApiCall类型，可用于获取大厅服务对象
       * @date 2022/4/26 - 16:21:57
       *
       * @typedef {HallApiCall}
       * @typeParam req
       * @typeParam res
       */

      /**
       * 大厅服务器，可直接部署多台（本服务中的所有功能都是直接支持多台部署），由nginx这样的组件来实现负载均衡。
       * @date 2022/4/26 - 15:06:38
       *
       * @class HallServer
       * @typedef {HallServer}
       */
      _export("HallServer", HallServer = class HallServer {
        constructor(getRedisClient, hallServerCfg, getHallServerCfg) {
          this.server = void 0;
          this.getRedisClient = void 0;
          this.gameClusterTerminal = void 0;
          this.matchRequestTerminal = void 0;

          /**api加解密实现字典*/
          this.apiCryptoImpls = {
            "AppReqDes": new (_crd && AppCrypto === void 0 ? (_reportPossibleCrUseOfAppCrypto({
              error: Error()
            }), AppCrypto) : AppCrypto)()
          };
          this.getRedisClient = getRedisClient;
          this.server = new (_crd && HttpServer === void 0 ? (_reportPossibleCrUseOfHttpServer({
            error: Error()
          }), HttpServer) : HttpServer)(_crd && hallServiceProto === void 0 ? (_reportPossibleCrUseOfhallServiceProto({
            error: Error()
          }), hallServiceProto) : hallServiceProto, {
            port: hallServerCfg.port,
            json: true,
            logger: _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger
          });
          this.server.flows.preRecvDataFlow.push(v => {
            let conn = v.conn; //解决HTTP请求跨域问题

            conn.httpRes.setHeader("Access-Control-Allow-Origin", "*");
            return v;
          });
          this.server.flows.preApiCallFlow.push(async v => {
            let conf = v.service.conf;

            if (!conf.skipPlayerAuth) {
              //接口没定义"不认证",则需要进行身份认证
              if (!v.req.playerToken) {
                v.error("需要 playerToken !", {
                  code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                    error: Error()
                  }), ErrorCodes) : ErrorCodes).ParamsError
                });
                return null;
              }

              let vRet = await (_crd && PlayerAuthHelper === void 0 ? (_reportPossibleCrUseOfPlayerAuthHelper({
                error: Error()
              }), PlayerAuthHelper) : PlayerAuthHelper).verification(v.req.playerToken);

              if (!vRet.succ) {
                v.error(vRet.err, {
                  code: vRet.code
                });
                return null;
              }

              let authInfo = vRet.data;
              let playerInfo = {
                playerId: authInfo.playerId,
                showName: authInfo.showName,
                customPlayerStatus: 0,
                customPlayerProfile: '',
                isRobot: false,
                networkState: (_crd && ENetworkState === void 0 ? (_reportPossibleCrUseOfENetworkState({
                  error: Error()
                }), ENetworkState) : ENetworkState).ONLINE
              };
              let player = {
                authInfo: authInfo,
                playerInfo: playerInfo,
                roomRobotPlayers: new Map(),
                roomWaitReconnectTime: 0 // 大厅中这个时间没意义,随意设置为0即可

              };
              v.conn.currPlayer = player;
            }

            let apiCryptoImpl = this.apiCryptoImpls[conf.cryptoMode];

            if (apiCryptoImpl) {
              let ret = await apiCryptoImpl.decryptionReq(v.req);

              if (!ret.succ) {
                v.error(ret.err, {
                  code: ret.code
                });
                return null;
              }
            }

            v.getHallServer = () => this;

            return v;
          });
          this.gameClusterTerminal = new (_crd && GameClusterTerminal === void 0 ? (_reportPossibleCrUseOfGameClusterTerminal({
            error: Error()
          }), GameClusterTerminal) : GameClusterTerminal)(hallServerCfg.gameClusterServerUrl, hallServerCfg.gameClusterTerminalId, hallServerCfg.gameClusterTerminalKey);
          this.matchRequestTerminal = new (_crd && MatchRequestTerminal === void 0 ? (_reportPossibleCrUseOfMatchRequestTerminal({
            error: Error()
          }), MatchRequestTerminal) : MatchRequestTerminal)(getRedisClient, false);
        }
        /**
         * 启动服务
         *
         * @public
         * @returns
         */


        async start() {
          await this.matchRequestTerminal.start();
          await this.server.autoImplementApi(path.resolve(__dirname, 'api'));
          await this.server.start();
          let joinErr = await this.gameClusterTerminal.joinCluster();

          if (joinErr) {
            var _ref;

            (_ref = _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger) == null || _ref.error("HallServer: 游戏集群终端连接失败:" + joinErr + '. 即将停止服务!');
            await this.stop();
            return;
          } else {
            var _ref2;

            (_ref2 = _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger) == null || _ref2.log("HallServer: 游戏集群终端连接成功!");
          }
        }
        /**停止服务*/


        async stop() {
          await this.gameClusterTerminal.disconnectCluster();
          await this.server.stop();
          await this.matchRequestTerminal.stop();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b46333090ecc64f5cb750150df7a66fd4cc8039f.js.map