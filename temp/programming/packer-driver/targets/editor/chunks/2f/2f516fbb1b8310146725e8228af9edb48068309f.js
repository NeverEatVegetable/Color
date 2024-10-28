System.register(["__unresolved_0", "cc", "tsrpc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "path", "fs"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseConnection, WsServer, apiErrorThenClose, ErrorCodes, Result, EClusterClientType, path, fs, ClusterMgr, _crd;

  function _reportPossibleCrUseOfApiCall(extras) {
    _reporterNs.report("ApiCall", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCall(extras) {
    _reporterNs.report("BaseCall", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseConnection(extras) {
    _reporterNs.report("BaseConnection", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseServiceType(extras) {
    _reporterNs.report("BaseServiceType", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgCall(extras) {
    _reporterNs.report("MsgCall", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServiceProto(extras) {
    _reporterNs.report("ServiceProto", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWsServer(extras) {
    _reporterNs.report("WsServer", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWsServerOptions(extras) {
    _reporterNs.report("WsServerOptions", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfapiErrorThenClose(extras) {
    _reporterNs.report("apiErrorThenClose", "../ApiBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetRedisClient(extras) {
    _reporterNs.report("GetRedisClient", "../redisHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRedisClient(extras) {
    _reporterNs.report("IRedisClient", "../redisHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIClusterNodeCfg(extras) {
    _reporterNs.report("IClusterNodeCfg", "../../../ServerConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIClusterTerminalCfg(extras) {
    _reporterNs.report("IClusterTerminalCfg", "../../../ServerConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClusterServiceType(extras) {
    _reporterNs.report("ClusterServiceType", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEClusterClientType(extras) {
    _reporterNs.report("EClusterClientType", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgClusterSyncNodeInfo(extras) {
    _reporterNs.report("MsgClusterSyncNodeInfo", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqClusterLogin(extras) {
    _reporterNs.report("ReqClusterLogin", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqClusterLoginByTerminal(extras) {
    _reporterNs.report("ReqClusterLoginByTerminal", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResClusterLogin(extras) {
    _reporterNs.report("ResClusterLogin", "./Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpath(extras) {
    _reporterNs.report("path", "path", _context.meta, extras);
  }

  function _reportPossibleCrUseOffs(extras) {
    _reporterNs.report("fs", "fs", _context.meta, extras);
  }

  _export("ClusterMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_tsrpc) {
      BaseConnection = _tsrpc.BaseConnection;
      WsServer = _tsrpc.WsServer;
    }, function (_unresolved_2) {
      apiErrorThenClose = _unresolved_2.apiErrorThenClose;
    }, function (_unresolved_3) {
      ErrorCodes = _unresolved_3.ErrorCodes;
      Result = _unresolved_3.Result;
    }, function (_unresolved_4) {
      EClusterClientType = _unresolved_4.EClusterClientType;
    }, function (_path) {
      path = _path.default;
    }, function (_fs) {
      fs = _fs.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "40424Yy9fdEhq2V6Flgg0Ml", "ClusterMgr", undefined);

      /**集群节点*/

      /**集群节点信息*/

      /**
       * 集群管理类
       * @date 2022/4/19 - 16:48:53
       *
       * @class ClusterMgr
       * @typedef {ClusterMgr}
       * @typeParam NodeInfo 节点信息的类型，可自定义
       */
      _export("ClusterMgr", ClusterMgr = class ClusterMgr {
        static buildNodesHashKey(clusterTypeKey) {
          return `ClusterMgr:${clusterTypeKey}:Nodes`;
        }
        /**
         * Creates an instance of ClusterMgr.
         *
         * @param clusterTypeKey 集群类型标识，用在各种场合进行区分的，需要唯一定义
         * @param getNodesCfg
         * @param serverOption
         */


        constructor(clusterServiceProto, clusterTypeKey, getNodesCfg, getTerminalCfg, serverOption, getRedisClient) {
          /**获取所有可以加入集群的配置 */
          this.getNodesCfg = void 0;
          this.getTerminalCfg = void 0;

          /**集群类型标识*/
          this.clusterTypeKey = void 0;

          /**服务*/
          this.server = void 0;

          /**所有节点，nodeId=>IClusterNode*/
          this.nodes = new Map();
          this.getRedisClient = void 0;
          this.onNodeConnected = void 0;
          this.onNodeDisconnected = void 0;
          this.clusterTypeKey = clusterTypeKey;
          this.getNodesCfg = getNodesCfg;
          this.getTerminalCfg = getTerminalCfg;
          this.getRedisClient = getRedisClient;
          this.server = new (_crd && WsServer === void 0 ? (_reportPossibleCrUseOfWsServer({
            error: Error()
          }), WsServer) : WsServer)(clusterServiceProto, serverOption); //所有消息和api请求，都必须在认证通过之后

          this.server.flows.preApiCallFlow.push(call => {
            if (!this.prefixCheck(call)) {
              (_crd && apiErrorThenClose === void 0 ? (_reportPossibleCrUseOfapiErrorThenClose({
                error: Error()
              }), apiErrorThenClose) : apiErrorThenClose)(call, 'need Login before do this', {
                code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                  error: Error()
                }), ErrorCodes) : ErrorCodes).AuthUnverified
              });
              return;
            }

            return call;
          });
          this.server.flows.preMsgCallFlow.push(call => {
            if (!this.prefixCheck(call)) {
              call.logger.error(`need Login before do this (${call.service.name}, msg:${JSON.stringify(call.msg)})`);
              call.conn.close();
              return;
            }

            return call;
          });
          this.server.implementApi("ClusterLogin", async call => {
            await this.apiLogin(call);
          });
          this.server.listenMsg("ClusterSyncNodeInfo", async call => {
            await this.msgSyncNodeInfo(call);
          });
          this.server.flows.postDisconnectFlow.push(v => {
            this.nodeDisconnect(v.conn);
            return v;
          });
        }
        /**
         * 生成api的模块路径（不含文件后缀）
         * @param apiPath 
         * @param svcName 
         * @returns api module path 
         */


        buildApiModulePath(apiPath, svcName) {
          let match = svcName.match(/^(.+\/)*(.+)$/);

          if (!match) {
            return null;
          }

          let handlerPath = match[1] || '';
          let handlerName = match[2]; // try import

          let modulePath = (_crd && path === void 0 ? (_reportPossibleCrUseOfpath({
            error: Error()
          }), path) : path).resolve(apiPath, handlerPath, 'Api' + handlerName);
          return modulePath;
        }

        async autoImplementApi(serviceProto, apiPath) {
          let output = {
            succ: [],
            fail: []
          };

          for (let svc of serviceProto.services) {
            //@ts-ignore
            if (this.server._apiHandlers[svc.name]) {
              continue;
            } // 如果api文件不存在，则直接忽略！


            let apiModulePath = this.buildApiModulePath(apiPath, svc.name);

            if (!apiModulePath) {
              continue;
            }

            let apiModuleDir = (_crd && path === void 0 ? (_reportPossibleCrUseOfpath({
              error: Error()
            }), path) : path).dirname(apiModulePath);
            let apiModuleName = (_crd && path === void 0 ? (_reportPossibleCrUseOfpath({
              error: Error()
            }), path) : path).basename(apiModulePath);
            let matchFiles = (_crd && fs === void 0 ? (_reportPossibleCrUseOffs({
              error: Error()
            }), fs) : fs).readdirSync(apiModuleDir);

            if (!(matchFiles != null && matchFiles.find(f => f === apiModuleName + (_crd && path === void 0 ? (_reportPossibleCrUseOfpath({
              error: Error()
            }), path) : path).extname(f)))) {
              continue;
            } //@ts-ignore


            let {
              handler
            } = await this.server.getApiHandler(svc, apiPath, this.server.logger);

            if (!handler) {
              continue;
            } //@ts-ignore


            this.server.implementApi(svc.name, handler);
          }

          return output;
        }

        async start() {
          await this.server.start();
        }

        async stop() {
          await this.server.stop();
        }

        prefixCheck(call) {
          var _call$service$conf;

          if (call.service.name == "ClusterLogin") {
            return true;
          }

          if (call.conn.clientType === (_crd && EClusterClientType === void 0 ? (_reportPossibleCrUseOfEClusterClientType({
            error: Error()
          }), EClusterClientType) : EClusterClientType).Node) {
            if (!call.conn.nodeId) {
              return false;
            }
          }

          if (call.conn.clientType === (_crd && EClusterClientType === void 0 ? (_reportPossibleCrUseOfEClusterClientType({
            error: Error()
          }), EClusterClientType) : EClusterClientType).Terminal) {
            if (!call.conn.terminalId) {
              return false;
            }
          }

          let apiClientType = (_call$service$conf = call.service.conf) == null ? void 0 : _call$service$conf.clientType;

          if (apiClientType) {
            if (apiClientType !== call.conn.clientType) return false;
          }

          return true;
        }

        async apiLogin(call) {
          var _this$onNodeConnected;

          if (call.req.clientType === (_crd && EClusterClientType === void 0 ? (_reportPossibleCrUseOfEClusterClientType({
            error: Error()
          }), EClusterClientType) : EClusterClientType).Terminal) {
            return await this.clientLoginByTerminal(call);
          }

          let req = call.req;
          let cfg = (await this.getNodesCfg()).find(c => c.clusterNodeId === req.nodeId);

          if (!cfg) {
            return await (_crd && apiErrorThenClose === void 0 ? (_reportPossibleCrUseOfapiErrorThenClose({
              error: Error()
            }), apiErrorThenClose) : apiErrorThenClose)(call, `认证失败！不存在nodeId=${req.nodeId}`);
          }

          if (cfg.clusterKey !== req.clusterKey) {
            return await (_crd && apiErrorThenClose === void 0 ? (_reportPossibleCrUseOfapiErrorThenClose({
              error: Error()
            }), apiErrorThenClose) : apiErrorThenClose)(call, `认证失败！错误的clusterKey`);
          }

          cfg = undefined;
          let node = {
            nodeInfo: {
              clusterNodeId: req.nodeId,
              info: req.nodeInfo,
              expires: Date.now() + 3 * 60 * 1000 //3分钟过期时间

            },
            nodeConn: call.conn
          };
          this.nodes.set(node.nodeInfo.clusterNodeId, node);
          this.syncNodeInfoToRedis(node.nodeInfo);
          call.conn.clientType = (_crd && EClusterClientType === void 0 ? (_reportPossibleCrUseOfEClusterClientType({
            error: Error()
          }), EClusterClientType) : EClusterClientType).Node;
          call.conn.nodeId = node.nodeInfo.clusterNodeId;
          await call.succ({});
          (_this$onNodeConnected = this.onNodeConnected) == null || _this$onNodeConnected.call(this, node);
        }

        async clientLoginByTerminal(call) {
          var _await$this$getTermin;

          let req = call.req;
          let cfg = (_await$this$getTermin = await this.getTerminalCfg()) == null ? void 0 : _await$this$getTermin.find(c => c.terminalId === req.terminalId);

          if (!cfg) {
            return await (_crd && apiErrorThenClose === void 0 ? (_reportPossibleCrUseOfapiErrorThenClose({
              error: Error()
            }), apiErrorThenClose) : apiErrorThenClose)(call, `认证失败！不存在terminalId=${req.terminalId}`);
          }

          if (cfg.terminalKey !== req.terminalKey) {
            return await (_crd && apiErrorThenClose === void 0 ? (_reportPossibleCrUseOfapiErrorThenClose({
              error: Error()
            }), apiErrorThenClose) : apiErrorThenClose)(call, `认证失败！错误的clusterKey`);
          }

          cfg = undefined;
          call.conn.clientType = (_crd && EClusterClientType === void 0 ? (_reportPossibleCrUseOfEClusterClientType({
            error: Error()
          }), EClusterClientType) : EClusterClientType).Terminal;
          call.conn.terminalId = req.terminalId;
          return await call.succ({});
        }

        async msgSyncNodeInfo(call) {
          if (!call.conn.nodeId) return;
          let node = this.nodes.get(call.conn.nodeId);

          if (!node) {
            call.logger.error(`连接错误将被踢出`);
            call.conn.close();
            return;
          }

          node.nodeInfo.info = call.msg.nodeInfo;
          node.nodeInfo.expires = Date.now() + 3 * 60 * 1000; //3分钟过期时间

          this.syncNodeInfoToRedis(node.nodeInfo);
        }

        nodeDisconnect(conn) {
          if (conn.nodeId) {
            var _this$onNodeDisconnec;

            this.nodes.delete(conn.nodeId);
            this.delNodeInfoToRedis(conn.nodeId);
            (_this$onNodeDisconnec = this.onNodeDisconnected) == null || _this$onNodeDisconnec.call(this, conn.nodeId);
          }
        }

        async syncNodeInfoToRedis(nodeInfo) {
          await (await this.getRedisClient()).setHashObject(ClusterMgr.buildNodesHashKey(this.clusterTypeKey), nodeInfo.clusterNodeId, nodeInfo);
        }

        async delNodeInfoToRedis(nodeId) {
          await (await this.getRedisClient()).removeHashValue(`ClusterMgr:${this.clusterTypeKey}:Nodes`, nodeId);
        }

        getNodeInfos() {
          let infos = [];

          for (let [_, node] of this.nodes) {
            infos.push(node.nodeInfo);
          }

          return infos;
        }

        getNodeById(nodeId) {
          var _this$nodes$get$nodeI, _this$nodes$get;

          return (_this$nodes$get$nodeI = (_this$nodes$get = this.nodes.get(nodeId)) == null ? void 0 : _this$nodes$get.nodeInfo) != null ? _this$nodes$get$nodeI : null;
        }
        /**
         * 从redis中获取所有节点列表, 分布式时，大厅服务器和游戏服务器管理节点，可能不是同个实例，所以使用本方法来获取
         *
         * @public
         * @typeParam NodeInfo
         * @param clusterTypeKey 集群类型标识，用在各种场合进行区分的。需要和构造ClussterMgr时的值一致
         * @returns
         */


        static async getNodeInfosFromRedis(clusterTypeKey, getRedisClient) {
          let hashKey = ClusterMgr.buildNodesHashKey(clusterTypeKey);
          let allKv = await (await getRedisClient(true)).getHashObjects(hashKey);
          let nodes = [];
          let now = Date.now();

          for (let key in allKv) {
            let nodeInfo = allKv[key];
            if (nodeInfo.expires < now) continue;
            nodes.push(nodeInfo);
          }

          return nodes;
        }
        /**
         * 从redis中获取指定节点信息, 分布式时，大厅服务器和游戏服务器管理节点，可能不是同个实例，所以使用本方法来获取
         *
         * @public
         * @typeParam NodeInfo
         * @param clusterTypeKey 集群类型标识，用在各种场合进行区分的。需要和构造ClussterMgr时的值一致
         * @param clusterNodeId 节点ID
         * @returns
         */


        static async getNodeInfoFromRedis(clusterTypeKey, clusterNodeId, getRedisClient) {
          let hashKey = ClusterMgr.buildNodesHashKey(clusterTypeKey);
          let node = await (await getRedisClient(true)).getHashObject(hashKey, clusterNodeId);
          if (!node) return null;
          if (node.expires < Date.now()) return null;
          return node;
        }
        /**
         * 给节点分配任务
         *
         * @public
         * @typeParam T
         * @param nodeId
         * @param taskId 任务ID需要集群内唯一
         * @param taskData
         * @returns
         */


        async assignTask(nodeId, taskId, taskData) {
          let node = this.nodes.get(nodeId);
          if (!node) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr(`nodeId=${nodeId}不存在！`);
          let ret = await node.nodeConn.sendMsg('AssignTask', {
            taskId: taskId,
            taskData: taskData
          });
          if (!ret.isSucc) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr(ret.errMsg);
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(null);
        }
        /**
         * 给节点取消已经分配的任务
         *
         * @public
         * @typeParam T
         * @param nodeId
         * @param taskId 任务ID需要集群内唯一
         * @param taskData
         * @returns
         */


        async cancelTask(nodeId, taskId) {
          let node = this.nodes.get(nodeId);
          if (!node) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr(`节点ID${nodeId}不存在！`);
          let ret = await node.nodeConn.sendMsg('CancelTask', {
            taskId: taskId
          });
          if (!ret.isSucc) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr(ret.errMsg);
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(null);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2f516fbb1b8310146725e8228af9edb48068309f.js.map