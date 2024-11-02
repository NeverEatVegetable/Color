System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AppMatchRequestHandler, logger, ErrorCodes, ClusterNodeClient, MatcherSingle, MatchRequestHelper, RoomHelper, EClusterClientType, matchClusterServiceProto, GameClusterTerminal, MatchServer, _crd;

  function _reportPossibleCrUseOfAppMatchRequestHandler(extras) {
    _reporterNs.report("AppMatchRequestHandler", "../shared/tsgfServer/match/AppMatchRequestHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICancelable(extras) {
    _reporterNs.report("ICancelable", "../shared/tsgf/ICancelable", _context.meta, extras);
  }

  function _reportPossibleCrUseOflogger(extras) {
    _reporterNs.report("logger", "../shared/tsgf/logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClusterNodeClient(extras) {
    _reporterNs.report("ClusterNodeClient", "../shared/tsgfServer/cluster/ClusterNodeClient", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAppMatchTaskData(extras) {
    _reporterNs.report("IAppMatchTaskData", "../shared/tsgfServer/match/IAppMatchTaskData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchServerInfo(extras) {
    _reporterNs.report("IMatchServerInfo", "../shared/tsgfServer/match/IMatchServerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatcherSingle(extras) {
    _reporterNs.report("MatcherSingle", "../shared/tsgfServer/match/MatcherSingle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatchRequestHelper(extras) {
    _reporterNs.report("MatchRequestHelper", "../shared/tsgfServer/match/MatchRequestHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetRedisClient(extras) {
    _reporterNs.report("GetRedisClient", "../shared/tsgfServer/redisHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomHelper(extras) {
    _reporterNs.report("RoomHelper", "../shared/tsgfServer/room/RoomHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEClusterClientType(extras) {
    _reporterNs.report("EClusterClientType", "../shared/tsgfServer/cluster/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatchClusterServiceType(extras) {
    _reporterNs.report("MatchClusterServiceType", "../shared/tsgfServer/matchCluster/protocols/serviceProto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmatchClusterServiceProto(extras) {
    _reporterNs.report("matchClusterServiceProto", "../shared/tsgfServer/matchCluster/protocols/serviceProto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameClusterTerminal(extras) {
    _reporterNs.report("GameClusterTerminal", "../shared/tsgfServer/gameCluster/GameClusterTerminal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchServerCfg(extras) {
    _reporterNs.report("IMatchServerCfg", "../ServerConfig", _context.meta, extras);
  }

  _export("MatchServer", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AppMatchRequestHandler = _unresolved_2.AppMatchRequestHandler;
    }, function (_unresolved_3) {
      logger = _unresolved_3.logger;
    }, function (_unresolved_4) {
      ErrorCodes = _unresolved_4.ErrorCodes;
    }, function (_unresolved_5) {
      ClusterNodeClient = _unresolved_5.ClusterNodeClient;
    }, function (_unresolved_6) {
      MatcherSingle = _unresolved_6.MatcherSingle;
    }, function (_unresolved_7) {
      MatchRequestHelper = _unresolved_7.MatchRequestHelper;
    }, function (_unresolved_8) {
      RoomHelper = _unresolved_8.RoomHelper;
    }, function (_unresolved_9) {
      EClusterClientType = _unresolved_9.EClusterClientType;
    }, function (_unresolved_10) {
      matchClusterServiceProto = _unresolved_10.serviceProto;
    }, function (_unresolved_11) {
      GameClusterTerminal = _unresolved_11.GameClusterTerminal;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5d744acPc9LE50ZSdDXgxag", "MatchServer", undefined);

      /**匹配服务器, 由匹配集群分配负责匹配的应用, 具体由应用匹配请求处理器负责处理*/
      _export("MatchServer", MatchServer = class MatchServer extends (_crd && ClusterNodeClient === void 0 ? (_reportPossibleCrUseOfClusterNodeClient({
        error: Error()
      }), ClusterNodeClient) : ClusterNodeClient) {
        //clusterServerUrl: string, serverNodeId: string, clusterKey: string, getRedisClient: GetRedisClient
        constructor(getRedisClient, matchServerCfg) {
          super(_crd && matchClusterServiceProto === void 0 ? (_reportPossibleCrUseOfmatchClusterServiceProto({
            error: Error()
          }), matchClusterServiceProto) : matchClusterServiceProto, matchServerCfg.clusterWSUrl, (_crd && EClusterClientType === void 0 ? (_reportPossibleCrUseOfEClusterClientType({
            error: Error()
          }), EClusterClientType) : EClusterClientType).Node, matchServerCfg.clusterNodeId, matchServerCfg.clusterKey, async () => {
            return Promise.resolve({
              serverId: matchServerCfg.clusterNodeId,
              matchAppCount: this.appMatchRequestMgrs.size
            });
          });
          // 公共的匹配请求工具实例
          this.matchRequestHelper = void 0;
          // 所有分配到本服务实例处理的应用下匹配请求处理器
          this.appMatchRequestMgrs = new Map();
          this.getRedisClient = void 0;
          this.roomRegChangedCancel = void 0;
          this.gameClusterTerminal = void 0;

          /**有新的应用匹配任务被接受后触发*/
          this.onNewAppMatchTask = void 0;

          /**应用匹配任务被取消后触发*/
          this.onCancelAppMatchTask = void 0;
          this.getRedisClient = getRedisClient;
          this.matchRequestHelper = new (_crd && MatchRequestHelper === void 0 ? (_reportPossibleCrUseOfMatchRequestHelper({
            error: Error()
          }), MatchRequestHelper) : MatchRequestHelper)(this.getRedisClient); //匹配服务的任务，就是负责处理应用的匹配，所以把应用ID当作任务ID使用

          this.onAssignTask = (taskId, taskData) => {
            var _this$onNewAppMatchTa;

            let appId = taskId;
            let data = taskData;
            let mgr = this.appMatchRequestMgrs.get(appId);

            if (!mgr) {
              mgr = new (_crd && AppMatchRequestHandler === void 0 ? (_reportPossibleCrUseOfAppMatchRequestHandler({
                error: Error()
              }), AppMatchRequestHandler) : AppMatchRequestHandler)(appId, this.matchRequestHelper, this.gameClusterTerminal);
              this.appMatchRequestMgrs.set(appId, mgr);
            }

            mgr.matchers.clear(); //先加入内置匹配器

            let matcher = new (_crd && MatcherSingle === void 0 ? (_reportPossibleCrUseOfMatcherSingle({
              error: Error()
            }), MatcherSingle) : MatcherSingle)();
            mgr.matchers.set(matcher.matcherKey, matcher); //再加入自定义匹配器
            //TODO: 未实现自定义匹配器的传递方案/动态加载方案

            (_this$onNewAppMatchTa = this.onNewAppMatchTask) == null || _this$onNewAppMatchTa.call(this, appId, mgr);
          };

          this.onCancelTask = taskId => {
            var _this$onCancelAppMatc;

            let appId = taskId;
            let mgr = this.appMatchRequestMgrs.get(appId);
            if (!mgr) return;

            for (let reqs of mgr.allMatcherReqs.values()) {
              mgr.faildMatchRequests(reqs, '匹配服务器调整，请再次匹配', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).MatchRequestCancelled);
            }

            (_this$onCancelAppMatc = this.onCancelAppMatchTask) == null || _this$onCancelAppMatc.call(this, appId, mgr);
          };

          this.gameClusterTerminal = new (_crd && GameClusterTerminal === void 0 ? (_reportPossibleCrUseOfGameClusterTerminal({
            error: Error()
          }), GameClusterTerminal) : GameClusterTerminal)(matchServerCfg.gameClusterServerUrl, matchServerCfg.gameClusterTerminalId, matchServerCfg.gameClusterTerminalKey);
        }

        async start() {
          //订阅房间注册信息变更事件,更新到应用匹配管理下的房间注册信息缓存,方便匹配使用
          this.roomRegChangedCancel = await (_crd && RoomHelper === void 0 ? (_reportPossibleCrUseOfRoomHelper({
            error: Error()
          }), RoomHelper) : RoomHelper).startListenRoomRegInfoChanged(changedInfo => {
            let mgr = this.appMatchRequestMgrs.get(changedInfo.regInfo.appId);
            if (!mgr) return;
            mgr.roomRegInfoChanged(changedInfo);
          });
          let joinErr = await this.joinCluster();

          if (joinErr) {
            var _ref;

            (_ref = _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger) == null || _ref.error("MatchServer: 加入集群服务器失败:" + joinErr + '. 即将停止服务!');
            await this.stop();
            return;
          } else {
            var _ref2;

            (_ref2 = _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger) == null || _ref2.log("MatchServer: 加入集群服务器成功!");
          }

          joinErr = await this.gameClusterTerminal.joinCluster();

          if (joinErr) {
            var _ref3;

            (_ref3 = _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger) == null || _ref3.error("MatchServer: 游戏集群终端连接失败:" + joinErr + '. 即将停止服务!');
            await this.stop();
            return;
          } else {
            var _ref4;

            (_ref4 = _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger) == null || _ref4.log("MatchServer: 游戏集群终端连接成功!");
          }
        }

        async stop() {
          var _this$roomRegChangedC;

          await ((_this$roomRegChangedC = this.roomRegChangedCancel) == null ? void 0 : _this$roomRegChangedC.cancel());
          await this.disconnectCluster();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=89ebffcee1552fc09b0795aeb44861f5c8ad08c6.js.map