System.register(["__unresolved_0", "cc", "tsrpc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "path", "fs"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseConnection, WsServer, apiErrorThenClose, ErrorCodes, Result, EClusterClientType, path, fs, ClusterMgr, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
          return "ClusterMgr:" + clusterTypeKey + ":Nodes";
        }
        /**
         * Creates an instance of ClusterMgr.
         *
         * @param clusterTypeKey 集群类型标识，用在各种场合进行区分的，需要唯一定义
         * @param getNodesCfg
         * @param serverOption
         */


        constructor(clusterServiceProto, clusterTypeKey, getNodesCfg, getTerminalCfg, serverOption, getRedisClient) {
          var _this = this;

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
              call.logger.error("need Login before do this (" + call.service.name + ", msg:" + JSON.stringify(call.msg) + ")");
              call.conn.close();
              return;
            }

            return call;
          });
          this.server.implementApi("ClusterLogin", /*#__PURE__*/_asyncToGenerator(function* (call) {
            yield _this.apiLogin(call);
          }));
          this.server.listenMsg("ClusterSyncNodeInfo", /*#__PURE__*/_asyncToGenerator(function* (call) {
            yield _this.msgSyncNodeInfo(call);
          }));
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
          var match = svcName.match(/^(.+\/)*(.+)$/);

          if (!match) {
            return null;
          }

          var handlerPath = match[1] || '';
          var handlerName = match[2]; // try import

          var modulePath = (_crd && path === void 0 ? (_reportPossibleCrUseOfpath({
            error: Error()
          }), path) : path).resolve(apiPath, handlerPath, 'Api' + handlerName);
          return modulePath;
        }

        autoImplementApi(serviceProto, apiPath) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var output = {
              succ: [],
              fail: []
            };

            var _loop = function* _loop() {
              //@ts-ignore
              if (_this2.server._apiHandlers[svc.name]) {
                return 0; // continue
              } // 如果api文件不存在，则直接忽略！


              var apiModulePath = _this2.buildApiModulePath(apiPath, svc.name);

              if (!apiModulePath) {
                return 0; // continue
              }

              var apiModuleDir = (_crd && path === void 0 ? (_reportPossibleCrUseOfpath({
                error: Error()
              }), path) : path).dirname(apiModulePath);
              var apiModuleName = (_crd && path === void 0 ? (_reportPossibleCrUseOfpath({
                error: Error()
              }), path) : path).basename(apiModulePath);
              var matchFiles = (_crd && fs === void 0 ? (_reportPossibleCrUseOffs({
                error: Error()
              }), fs) : fs).readdirSync(apiModuleDir);

              if (!(matchFiles != null && matchFiles.find(f => f === apiModuleName + (_crd && path === void 0 ? (_reportPossibleCrUseOfpath({
                error: Error()
              }), path) : path).extname(f)))) {
                return 0; // continue
              } //@ts-ignore


              var {
                handler
              } = yield _this2.server.getApiHandler(svc, apiPath, _this2.server.logger);

              if (!handler) {
                return 0; // continue
              } //@ts-ignore


              _this2.server.implementApi(svc.name, handler);
            },
                _ret;

            for (var svc of serviceProto.services) {
              _ret = yield* _loop();
              if (_ret === 0) continue;
            }

            return output;
          })();
        }

        start() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            yield _this3.server.start();
          })();
        }

        stop() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            yield _this4.server.stop();
          })();
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

          var apiClientType = (_call$service$conf = call.service.conf) == null ? void 0 : _call$service$conf.clientType;

          if (apiClientType) {
            if (apiClientType !== call.conn.clientType) return false;
          }

          return true;
        }

        apiLogin(call) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            var _this5$onNodeConnecte;

            if (call.req.clientType === (_crd && EClusterClientType === void 0 ? (_reportPossibleCrUseOfEClusterClientType({
              error: Error()
            }), EClusterClientType) : EClusterClientType).Terminal) {
              return yield _this5.clientLoginByTerminal(call);
            }

            var req = call.req;
            var cfg = (yield _this5.getNodesCfg()).find(c => c.clusterNodeId === req.nodeId);

            if (!cfg) {
              return yield (_crd && apiErrorThenClose === void 0 ? (_reportPossibleCrUseOfapiErrorThenClose({
                error: Error()
              }), apiErrorThenClose) : apiErrorThenClose)(call, "\u8BA4\u8BC1\u5931\u8D25\uFF01\u4E0D\u5B58\u5728nodeId=" + req.nodeId);
            }

            if (cfg.clusterKey !== req.clusterKey) {
              return yield (_crd && apiErrorThenClose === void 0 ? (_reportPossibleCrUseOfapiErrorThenClose({
                error: Error()
              }), apiErrorThenClose) : apiErrorThenClose)(call, "\u8BA4\u8BC1\u5931\u8D25\uFF01\u9519\u8BEF\u7684clusterKey");
            }

            cfg = undefined;
            var node = {
              nodeInfo: {
                clusterNodeId: req.nodeId,
                info: req.nodeInfo,
                expires: Date.now() + 3 * 60 * 1000 //3分钟过期时间

              },
              nodeConn: call.conn
            };

            _this5.nodes.set(node.nodeInfo.clusterNodeId, node);

            _this5.syncNodeInfoToRedis(node.nodeInfo);

            call.conn.clientType = (_crd && EClusterClientType === void 0 ? (_reportPossibleCrUseOfEClusterClientType({
              error: Error()
            }), EClusterClientType) : EClusterClientType).Node;
            call.conn.nodeId = node.nodeInfo.clusterNodeId;
            yield call.succ({});
            (_this5$onNodeConnecte = _this5.onNodeConnected) == null || _this5$onNodeConnecte.call(_this5, node);
          })();
        }

        clientLoginByTerminal(call) {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            var _yield$_this6$getTerm;

            var req = call.req;
            var cfg = (_yield$_this6$getTerm = yield _this6.getTerminalCfg()) == null ? void 0 : _yield$_this6$getTerm.find(c => c.terminalId === req.terminalId);

            if (!cfg) {
              return yield (_crd && apiErrorThenClose === void 0 ? (_reportPossibleCrUseOfapiErrorThenClose({
                error: Error()
              }), apiErrorThenClose) : apiErrorThenClose)(call, "\u8BA4\u8BC1\u5931\u8D25\uFF01\u4E0D\u5B58\u5728terminalId=" + req.terminalId);
            }

            if (cfg.terminalKey !== req.terminalKey) {
              return yield (_crd && apiErrorThenClose === void 0 ? (_reportPossibleCrUseOfapiErrorThenClose({
                error: Error()
              }), apiErrorThenClose) : apiErrorThenClose)(call, "\u8BA4\u8BC1\u5931\u8D25\uFF01\u9519\u8BEF\u7684clusterKey");
            }

            cfg = undefined;
            call.conn.clientType = (_crd && EClusterClientType === void 0 ? (_reportPossibleCrUseOfEClusterClientType({
              error: Error()
            }), EClusterClientType) : EClusterClientType).Terminal;
            call.conn.terminalId = req.terminalId;
            return yield call.succ({});
          })();
        }

        msgSyncNodeInfo(call) {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            if (!call.conn.nodeId) return;

            var node = _this7.nodes.get(call.conn.nodeId);

            if (!node) {
              call.logger.error("\u8FDE\u63A5\u9519\u8BEF\u5C06\u88AB\u8E22\u51FA");
              call.conn.close();
              return;
            }

            node.nodeInfo.info = call.msg.nodeInfo;
            node.nodeInfo.expires = Date.now() + 3 * 60 * 1000; //3分钟过期时间

            _this7.syncNodeInfoToRedis(node.nodeInfo);
          })();
        }

        nodeDisconnect(conn) {
          if (conn.nodeId) {
            var _this$onNodeDisconnec;

            this.nodes.delete(conn.nodeId);
            this.delNodeInfoToRedis(conn.nodeId);
            (_this$onNodeDisconnec = this.onNodeDisconnected) == null || _this$onNodeDisconnec.call(this, conn.nodeId);
          }
        }

        syncNodeInfoToRedis(nodeInfo) {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            yield (yield _this8.getRedisClient()).setHashObject(ClusterMgr.buildNodesHashKey(_this8.clusterTypeKey), nodeInfo.clusterNodeId, nodeInfo);
          })();
        }

        delNodeInfoToRedis(nodeId) {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            yield (yield _this9.getRedisClient()).removeHashValue("ClusterMgr:" + _this9.clusterTypeKey + ":Nodes", nodeId);
          })();
        }

        getNodeInfos() {
          var infos = [];

          for (var [_, _node] of this.nodes) {
            infos.push(_node.nodeInfo);
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


        static getNodeInfosFromRedis(clusterTypeKey, getRedisClient) {
          return _asyncToGenerator(function* () {
            var hashKey = ClusterMgr.buildNodesHashKey(clusterTypeKey);
            var allKv = yield (yield getRedisClient(true)).getHashObjects(hashKey);
            var nodes = [];
            var now = Date.now();

            for (var key in allKv) {
              var nodeInfo = allKv[key];
              if (nodeInfo.expires < now) continue;
              nodes.push(nodeInfo);
            }

            return nodes;
          })();
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


        static getNodeInfoFromRedis(clusterTypeKey, clusterNodeId, getRedisClient) {
          return _asyncToGenerator(function* () {
            var hashKey = ClusterMgr.buildNodesHashKey(clusterTypeKey);
            var node = yield (yield getRedisClient(true)).getHashObject(hashKey, clusterNodeId);
            if (!node) return null;
            if (node.expires < Date.now()) return null;
            return node;
          })();
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


        assignTask(nodeId, taskId, taskData) {
          var _this10 = this;

          return _asyncToGenerator(function* () {
            var node = _this10.nodes.get(nodeId);

            if (!node) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr("nodeId=" + nodeId + "\u4E0D\u5B58\u5728\uFF01");
            var ret = yield node.nodeConn.sendMsg('AssignTask', {
              taskId: taskId,
              taskData: taskData
            });
            if (!ret.isSucc) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.errMsg);
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildSucc(null);
          })();
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


        cancelTask(nodeId, taskId) {
          var _this11 = this;

          return _asyncToGenerator(function* () {
            var node = _this11.nodes.get(nodeId);

            if (!node) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr("\u8282\u70B9ID" + nodeId + "\u4E0D\u5B58\u5728\uFF01");
            var ret = yield node.nodeConn.sendMsg('CancelTask', {
              taskId: taskId
            });
            if (!ret.isSucc) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.errMsg);
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildSucc(null);
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2f516fbb1b8310146725e8228af9edb48068309f.js.map