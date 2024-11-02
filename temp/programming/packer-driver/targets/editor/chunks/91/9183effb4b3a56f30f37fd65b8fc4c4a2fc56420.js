System.register(["__unresolved_0", "cc", "tsrpc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, WsClient, logger, EClusterClientType, ClusterNodeClient, _crd;

  function _reportPossibleCrUseOfServiceProto(extras) {
    _reporterNs.report("ServiceProto", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWsClient(extras) {
    _reporterNs.report("WsClient", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOflogger(extras) {
    _reporterNs.report("logger", "../../tsgf/logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClusterServiceType(extras) {
    _reporterNs.report("ClusterServiceType", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEClusterClientType(extras) {
    _reporterNs.report("EClusterClientType", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqClusterLogin(extras) {
    _reporterNs.report("ReqClusterLogin", "./Models", _context.meta, extras);
  }

  _export("ClusterNodeClient", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_tsrpc) {
      WsClient = _tsrpc.WsClient;
    }, function (_unresolved_2) {
      logger = _unresolved_2.logger;
    }, function (_unresolved_3) {
      EClusterClientType = _unresolved_3.EClusterClientType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5fe173HRsNA3pUb+jstX5FS", "ClusterNodeClient", undefined);

      /**
       * 集群节点客户端
       * @date 2022/4/19 - 16:50:02
       *
       * @class ClusterNodeClient
       * @typedef {ClusterNodeClient}
       * @typeParam NodeInfo 节点信息的类型，可自定义
       */
      _export("ClusterNodeClient", ClusterNodeClient = class ClusterNodeClient {
        constructor(clusterServiceProto, clusterServerUrl, clientType, id, key, getNodeInfo) {
          this.clientType = void 0;
          this.id = void 0;
          this.key = void 0;
          this.getNodeInfo = void 0;
          this.clusterServerUrl = void 0;
          this.clusterCAutoReconnectHD = void 0;
          this.clusterClient = void 0;
          this.autoSyncInfoHD = 0;

          /**当前所有进行中的任务，任务ID=>任务数据*/
          this.allTasks = new Map();

          /**事件: 当接受了一个新任务(来自集群管理)*/
          this.onAssignTask = void 0;

          /**事件: 当取消了一个任务(来自集群管理)*/
          this.onCancelTask = void 0;
          this.clusterServerUrl = clusterServerUrl;
          this.clientType = clientType;
          this.id = id;
          this.key = key;
          this.getNodeInfo = getNodeInfo;
          this.clusterClient = new (_crd && WsClient === void 0 ? (_reportPossibleCrUseOfWsClient({
            error: Error()
          }), WsClient) : WsClient)(clusterServiceProto, {
            server: this.clusterServerUrl,
            json: false,
            logger: _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger
          }); //断开操作

          this.clusterClient.flows.postDisconnectFlow.push(v => {
            //只要断开, 就清理自动同步定时器
            if (this.autoSyncInfoHD) clearInterval(this.autoSyncInfoHD);
            this.autoSyncInfoHD = 0;

            if (!v.isManual) {
              //如果非手动断开,则自动开始重连
              (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                error: Error()
              }), logger) : logger).error('集群服务器-连接断开,等待2秒后自动重连');
              clearTimeout(this.clusterCAutoReconnectHD);
              this.clusterCAutoReconnectHD = setTimeout(() => this.reJoinCluster(true), 2000);
            }

            return v;
          }); //监听各种需要的消息

          this.clusterClient.listenMsg("AssignTask", msg => {
            var _this$onAssignTask;

            this.allTasks.set(msg.taskId, msg.taskData);
            (_this$onAssignTask = this.onAssignTask) == null || _this$onAssignTask.call(this, msg.taskId, msg.taskData);
          });
          this.clusterClient.listenMsg("CancelTask", msg => {
            var _this$onCancelTask;

            this.allTasks.delete(msg.taskId);
            (_this$onCancelTask = this.onCancelTask) == null || _this$onCancelTask.call(this, msg.taskId);
          });
        }
        /**
         * 连接集群服务器,失败返回错误消息，连上了之后如果非手动断开，则会自动重连
         * @returns 
         */


        async joinCluster() {
          if (!this.clusterClient) {
            throw new Error('本对象已经被释放!');
          }

          if (this.clusterClient.isConnected === true) {
            //已经连上的,则直接返回成功
            return null;
          }

          let connectRet = await this.clusterClient.connect();

          if (!connectRet.isSucc) {
            return "连接失败:" + connectRet.errMsg;
          }

          let req;

          if (this.clientType === (_crd && EClusterClientType === void 0 ? (_reportPossibleCrUseOfEClusterClientType({
            error: Error()
          }), EClusterClientType) : EClusterClientType).Node) {
            var _this$getNodeInfo;

            req = {
              clientType: (_crd && EClusterClientType === void 0 ? (_reportPossibleCrUseOfEClusterClientType({
                error: Error()
              }), EClusterClientType) : EClusterClientType).Node,
              nodeId: this.id,
              clusterKey: this.key,
              nodeInfo: await ((_this$getNodeInfo = this.getNodeInfo) == null ? void 0 : _this$getNodeInfo.call(this))
            };
          } else {
            req = {
              clientType: (_crd && EClusterClientType === void 0 ? (_reportPossibleCrUseOfEClusterClientType({
                error: Error()
              }), EClusterClientType) : EClusterClientType).Terminal,
              terminalId: this.id,
              terminalKey: this.key
            };
          }

          let ret = await this.clusterClient.callApi("ClusterLogin", req);

          if (!ret.isSucc) {
            return ret.err.message;
          }

          if (this.clientType === (_crd && EClusterClientType === void 0 ? (_reportPossibleCrUseOfEClusterClientType({
            error: Error()
          }), EClusterClientType) : EClusterClientType).Node) {
            //成功连上了,开始自动同步信息给集群
            if (this.autoSyncInfoHD) clearInterval(this.autoSyncInfoHD);
            this.autoSyncInfoHD = setInterval(async () => {
              var _this$clusterClient, _this$getNodeInfo2;

              if (((_this$clusterClient = this.clusterClient) == null ? void 0 : _this$clusterClient.isConnected) !== true) {
                //发现断开,但还进定时器了,则取消自动重连 (正常断开就不会进定时器了)
                if (this.autoSyncInfoHD) clearInterval(this.autoSyncInfoHD);
                return;
              } //发送信息


              this.clusterClient.sendMsg("ClusterSyncNodeInfo", {
                nodeInfo: await ((_this$getNodeInfo2 = this.getNodeInfo) == null ? void 0 : _this$getNodeInfo2.call(this))
              });
            }, 1000);
          }

          return null;
        }
        /**
         * 当集群断开后用于重新连接集群
         * @param failReTry
         * @returns 
         */


        async reJoinCluster(failReTry = true) {
          const err = await this.joinCluster(); // 重连也错误，弹出错误提示

          if (!err) {
            (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger).log('集群服务器-重连成功!');
            return true;
          }

          if (failReTry) {
            (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger).error('集群服务器-重连失败:' + err + '  2秒后自动重连!');
            clearTimeout(this.clusterCAutoReconnectHD);
            this.clusterCAutoReconnectHD = setTimeout(() => this.reJoinCluster(failReTry), 2000);
          } else {
            (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger).error('集群服务器-重连失败:' + err);
          }

          return false;
        }

        async disconnectCluster() {
          try {
            var _this$clusterClient2;

            clearTimeout(this.clusterCAutoReconnectHD);
            clearInterval(this.autoSyncInfoHD);
            await ((_this$clusterClient2 = this.clusterClient) == null ? void 0 : _this$clusterClient2.disconnect());
          } catch {}
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9183effb4b3a56f30f37fd65b8fc4c4a2fc56420.js.map