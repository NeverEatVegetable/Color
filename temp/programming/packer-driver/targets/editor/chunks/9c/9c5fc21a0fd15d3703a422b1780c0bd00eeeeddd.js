System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ClusterMgr, SimpleAppHelper, Result, arrWinner, matchClusterServiceProto, MatchServerClusterMgr, _crd;

  function _reportPossibleCrUseOfClusterMgr(extras) {
    _reporterNs.report("ClusterMgr", "../shared/tsgfServer/cluster/ClusterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIClusterNode(extras) {
    _reporterNs.report("IClusterNode", "../shared/tsgfServer/cluster/ClusterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWsServerOptions(extras) {
    _reporterNs.report("WsServerOptions", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetRedisClient(extras) {
    _reporterNs.report("GetRedisClient", "../shared/tsgfServer/redisHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIApp(extras) {
    _reporterNs.report("IApp", "../shared/tsgfServerEDB/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleAppHelper(extras) {
    _reporterNs.report("SimpleAppHelper", "../shared/tsgfServerEDB/BLL", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICancelableExec(extras) {
    _reporterNs.report("ICancelableExec", "../shared/tsgf/ICancelable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchServerInfo(extras) {
    _reporterNs.report("IMatchServerInfo", "../shared/tsgfServer/match/IMatchServerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfarrWinner(extras) {
    _reporterNs.report("arrWinner", "../shared/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIClusterNodeCfg(extras) {
    _reporterNs.report("IClusterNodeCfg", "../ServerConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIClusterTerminalCfg(extras) {
    _reporterNs.report("IClusterTerminalCfg", "../ServerConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatchClusterServiceType(extras) {
    _reporterNs.report("MatchClusterServiceType", "../shared/tsgfServer/matchCluster/protocols/serviceProto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmatchClusterServiceProto(extras) {
    _reporterNs.report("matchClusterServiceProto", "../shared/tsgfServer/matchCluster/protocols/serviceProto", _context.meta, extras);
  }

  _export("MatchServerClusterMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ClusterMgr = _unresolved_2.ClusterMgr;
    }, function (_unresolved_3) {
      SimpleAppHelper = _unresolved_3.SimpleAppHelper;
    }, function (_unresolved_4) {
      Result = _unresolved_4.Result;
    }, function (_unresolved_5) {
      arrWinner = _unresolved_5.arrWinner;
    }, function (_unresolved_6) {
      matchClusterServiceProto = _unresolved_6.serviceProto;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f8c2fh1aptNuqeo+lgi4iW6", "MatchServerClusterMgr", undefined);

      /**应用信息以及分配到哪个服务器处理*/

      /**服务器信息以及下面都有哪些应用*/

      /**匹配服务器管理节点， 依赖redis，mysql*/
      _export("MatchServerClusterMgr", MatchServerClusterMgr = class MatchServerClusterMgr extends (_crd && ClusterMgr === void 0 ? (_reportPossibleCrUseOfClusterMgr({
        error: Error()
      }), ClusterMgr) : ClusterMgr) {
        constructor(getNodesCfg, getTerminalCfg, serverOption, getRedisClient) {
          super(_crd && matchClusterServiceProto === void 0 ? (_reportPossibleCrUseOfmatchClusterServiceProto({
            error: Error()
          }), matchClusterServiceProto) : matchClusterServiceProto, "MatchServer", getNodesCfg, getTerminalCfg, serverOption, getRedisClient);
          this.getAppCancel = null;
          this.initAppsRunning = false;

          /**未分配服务器的应用*/
          this.unassignedApps = [];

          /**已经分配好服务器的应用*/
          this.apps = new Map();

          /**当前接入的匹配服务器，以及所负责的应用列表*/
          this.servers = new Map();

          this.onNodeConnected = node => {
            this.onMatchServerConnected(node);
          };

          this.onNodeDisconnected = nodeId => {
            this.onMatchServerDisconnected(nodeId);
          };
        }

        async start() {
          await super.start(); //启动应用初始化

          this.initAppsRunning = true;
          this.initApps(); //不用await，让他异步开始执行
        }

        async stop() {
          var _this$getAppCancel;

          await super.stop(); //中止应用初始化

          this.initAppsRunning = false;
          await ((_this$getAppCancel = this.getAppCancel) == null ? void 0 : _this$getAppCancel.cancel());
          this.getAppCancel = null;
        }

        async onMatchServerConnected(node) {
          //新匹配服务器连上来，加入服务列表
          this.servers.set(node.nodeInfo.clusterNodeId, {
            serverNode: node,
            apps: new Map()
          }); //开始异步处理所有未分配的应用

          this.procAllUnassignedApp();
        }

        async onMatchServerDisconnected(nodeId) {
          //匹配服务器断开, 需要将原本负责的应用转移到其他服务器
          let disconnectedServer = this.servers.get(nodeId); //移除服务列表

          this.servers.delete(nodeId);

          if (disconnectedServer) {
            //该服务下所有应用转到未分配应用之下
            disconnectedServer.apps.forEach(app => {
              this.apps.delete(app.appId);
              this.unassignedApps.push(app);
            });
          } //开始异步处理所有未分配的应用


          this.procAllUnassignedApp();
        }

        async initApps() {
          if (!this.initAppsRunning) return false; //this.getAppCancel = AppBLL.Ins.selectAll();

          this.getAppCancel = (_crd && SimpleAppHelper === void 0 ? (_reportPossibleCrUseOfSimpleAppHelper({
            error: Error()
          }), SimpleAppHelper) : SimpleAppHelper).selectAll();
          let allAppRet = await this.getAppCancel.waitResult();
          if (!this.initAppsRunning) return false;

          if (allAppRet.err) {
            this.server.logger.error("获取所有应用失败：", allAppRet.err, "服务即将停止！");
            await this.stop();
            return false;
          }

          this.apps.clear();
          this.servers.clear();
          this.unassignedApps.push(...allAppRet.data);
          await this.procAllUnassignedApp();
          return true;
        }

        async procAllUnassignedApp() {
          let uApp;

          while (uApp = this.unassignedApps.shift()) {
            let ret = await this.appAssignServer(uApp);

            if (!ret.succ) {
              //没分配成功，推入未分配，中断
              this.unassignedApps.push(uApp);
              break;
            }
          }
        }

        getLeastAppsServer() {
          /*
          let minKV: ServerApps | null = null;
          this.servers.forEach((server) => {
              if (!minKV || minKV.apps.size > server.apps.size) minKV = server;
          });
          */
          let minKV = (_crd && arrWinner === void 0 ? (_reportPossibleCrUseOfarrWinner({
            error: Error()
          }), arrWinner) : arrWinner)(this.servers.values(), (winner, item) => winner.apps.size > item.apps.size ? item : winner);
          return minKV;
        }

        async appAssignServer(app) {
          //如果已经分配过，则取消一下
          let appAS = this.apps.get(app.appId);

          if (appAS) {
            //如果已经分配，则取消一下(一般可能出现在转移上面)
            await this.appCancelAssignServer(appAS);
          } //现在的分配规则：负责应用少的服务器优先分配


          let server = this.getLeastAppsServer();

          if (!server) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('不存在匹配服务器！无法分配！');
          }

          server.apps.set(app.appId, app);
          this.apps.set(app.appId, {
            app: app,
            serverNodeId: server.serverNode.nodeInfo.clusterNodeId
          });
          return await this.assignTask(server.serverNode.nodeInfo.clusterNodeId, app.appId, app);
        }

        async appCancelAssignServer(appAS) {
          //不管是否成功，都删除掉
          this.apps.delete(appAS.app.appId);
          let server = this.servers.get(appAS.serverNodeId);

          if (!server) {
            //之前分配的服务器,已经下线,直接返回失败
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('之前分配的服务器已经离线');
          } //不管是否成功，都删除掉


          server.apps.delete(appAS.app.appId);
          return await this.cancelTask(server.serverNode.nodeInfo.clusterNodeId, appAS.app.appId);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9c5fc21a0fd15d3703a422b1780c0bd00eeeeddd.js.map