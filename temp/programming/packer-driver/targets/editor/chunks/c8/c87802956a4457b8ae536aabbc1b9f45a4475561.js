System.register(["__unresolved_0", "cc", "path", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, path, ClusterMgr, GameServerHelper, Result, gameClusterServiceProto, GameServerRoomMgr, arrWinner, GameServerClusterMgr, _crd;

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

  function _reportPossibleCrUseOfWsServerOptions(extras) {
    _reporterNs.report("WsServerOptions", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClusterMgr(extras) {
    _reporterNs.report("ClusterMgr", "../shared/tsgfServer/cluster/ClusterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIClusterNodeInfo(extras) {
    _reporterNs.report("IClusterNodeInfo", "../shared/tsgfServer/cluster/ClusterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetRedisClient(extras) {
    _reporterNs.report("GetRedisClient", "../shared/tsgfServer/redisHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameServerInfoInServer(extras) {
    _reporterNs.report("IGameServerInfoInServer", "../shared/tsgfServer/game/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameServerHelper(extras) {
    _reporterNs.report("GameServerHelper", "../shared/tsgfServer/game/GameServerHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIClusterNodeCfg(extras) {
    _reporterNs.report("IClusterNodeCfg", "../ServerConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIClusterTerminalCfg(extras) {
    _reporterNs.report("IClusterTerminalCfg", "../ServerConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICancelable(extras) {
    _reporterNs.report("ICancelable", "../shared/tsgf/ICancelable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomRegInfo(extras) {
    _reporterNs.report("IRoomRegInfo", "../shared/tsgfServer/room/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameClusterServiceType(extras) {
    _reporterNs.report("GameClusterServiceType", "../shared/tsgfServer/gameCluster/protocols/serviceProto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameClusterServiceProto(extras) {
    _reporterNs.report("gameClusterServiceProto", "../shared/tsgfServer/gameCluster/protocols/serviceProto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameServerRoomMgr(extras) {
    _reporterNs.report("GameServerRoomMgr", "./GameServerRoomMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICreateRoomPara(extras) {
    _reporterNs.report("ICreateRoomPara", "../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomOnlineInfo(extras) {
    _reporterNs.report("IRoomOnlineInfo", "../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfarrWinner(extras) {
    _reporterNs.report("arrWinner", "../shared/tsgf/Utils", _context.meta, extras);
  }

  _export("GameServerClusterMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_path) {
      path = _path;
    }, function (_unresolved_2) {
      ClusterMgr = _unresolved_2.ClusterMgr;
    }, function (_unresolved_3) {
      GameServerHelper = _unresolved_3.GameServerHelper;
    }, function (_unresolved_4) {
      Result = _unresolved_4.Result;
    }, function (_unresolved_5) {
      gameClusterServiceProto = _unresolved_5.serviceProto;
    }, function (_unresolved_6) {
      GameServerRoomMgr = _unresolved_6.GameServerRoomMgr;
    }, function (_unresolved_7) {
      arrWinner = _unresolved_7.arrWinner;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1219SvUX9N8oxTrH7yna0R", "GameServerClusterMgr", undefined);

      /**
       * 游戏集群服务器API专用的ApiCall类型，可用于获取Game集群服务对象
       * @date 2022/4/26 - 16:21:57
       *
       * @typeParam req
       * @typeParam res
       */

      /**
       * 游戏集群服务器Msg专用的MsgCall类型，可用于获取Game集群服务对象
       * @date 2022/4/26 - 16:21:57
       *
       * @typedef {GameClusterMsgCall}
       * @typeParam msg
       */

      /**游戏服务端的客户端连接*/

      /**游戏的websocket服务类型*/

      /**游戏服务器管理节点，依赖redis功能*/
      _export("GameServerClusterMgr", GameServerClusterMgr = class GameServerClusterMgr extends (_crd && ClusterMgr === void 0 ? (_reportPossibleCrUseOfClusterMgr({
        error: Error()
      }), ClusterMgr) : ClusterMgr) {
        constructor(getNodesCfg, getTerminalCfg, serverOption, getRedisClient) {
          super(_crd && gameClusterServiceProto === void 0 ? (_reportPossibleCrUseOfgameClusterServiceProto({
            error: Error()
          }), gameClusterServiceProto) : gameClusterServiceProto, (_crd && GameServerHelper === void 0 ? (_reportPossibleCrUseOfGameServerHelper({
            error: Error()
          }), GameServerHelper) : GameServerHelper).clusterTypeKey, getNodesCfg, getTerminalCfg, serverOption, getRedisClient); //让Call能获取到本服务实例

          this.gameServerTaskCancel = void 0;
          this.roomMgr = new (_crd && GameServerRoomMgr === void 0 ? (_reportPossibleCrUseOfGameServerRoomMgr({
            error: Error()
          }), GameServerRoomMgr) : GameServerRoomMgr)(this);
          this.server.flows.preApiCallFlow.push(v => {
            v.getGameClusterServer = () => this;

            return v;
          });
          this.server.flows.preMsgCallFlow.push(v => {
            v.getGameClusterServer = () => this;

            return v;
          });
          this.server.flows.postDisconnectFlow.push(v => {
            if (v.conn.nodeId) {
              this.roomMgr.dismissServerRooms(v.conn.nodeId);
            }

            return v;
          });
        }

        async start() {
          //额外注册api目录下的接口
          await this.autoImplementApi(_crd && gameClusterServiceProto === void 0 ? (_reportPossibleCrUseOfgameClusterServiceProto({
            error: Error()
          }), gameClusterServiceProto) : gameClusterServiceProto, path.resolve(__dirname, 'api'));
          await super.start();
        }

        async stop() {
          var _this$gameServerTaskC;

          await ((_this$gameServerTaskC = this.gameServerTaskCancel) == null ? void 0 : _this$gameServerTaskC.cancel());
          await super.stop();
        }
        /**
         * 通知游戏服务器解散房间
         */


        async notifyGameServerDismissRoom(roomRegInfo) {
          let ret = await this.assignTask(roomRegInfo.gameServerNodeId, 'DismissRoom', roomRegInfo.roomId);
          if (!ret.succ) return ret;
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(null);
        }
        /**
         * 按规则自动分配一个合适的服务器, 没有合适的返回null
         * @param createRoomPara 指定分配规则标识, 放空则分配最少客户端的服务器
         * @returns game server 
         */


        async allotGameServerByInfos(allServerNodeList, getServerRooms, createRoomPara) {
          let canAllotNodes = []; //按在线客户端升序

          allServerNodeList = allServerNodeList.sort((a, b) => a.info.clientCount - b.info.clientCount);

          for (const s of allServerNodeList) {
            var _s$info$allotRules;

            // 根据各服务器配置的分配规则进行筛选
            if ((_s$info$allotRules = s.info.allotRules) != null && (_s$info$allotRules = _s$info$allotRules.limitRoomCountRules) != null && _s$info$allotRules.length) {
              // 有配置限制房间数规则, 则根据当前创建房间请求匹配规则
              let rules = s.info.allotRules.limitRoomCountRules.filter(r => {
                // 有配置且不符合的过滤
                if (r.roomType && r.roomType !== createRoomPara.roomType) return false;
                if (r.maxPlayers && r.maxPlayers !== createRoomPara.maxPlayers) return false; // 其他的视为匹配的规则

                return true;
              });

              if (!rules.length) {
                // 没匹配中的规则,视本服务器不可分配
                continue;
              } // 取限制房间数最小的那个配置


              let minLimit = (_crd && arrWinner === void 0 ? (_reportPossibleCrUseOfarrWinner({
                error: Error()
              }), arrWinner) : arrWinner)(rules, (winner, item) => winner.limitRoomCount < item.limitRoomCount ? winner : item); // 检查现有房间符合规则的数量

              let rooms = await getServerRooms(s.info.serverNodeId);
              if (!rooms) continue;
              let currRoomCount = rooms.count(room => {
                if (minLimit.roomType && minLimit.roomType !== room.roomType) return false;
                if (minLimit.maxPlayers && minLimit.maxPlayers !== room.maxPlayers) return false;
                return true;
              });

              if (currRoomCount >= minLimit.limitRoomCount) {
                // 本创建房间请求匹配的规则,对应现有的房间已经满额了, 本服务器不可分配
                continue;
              }
            } // 上面规则都没配置, 或者都通过了检测, 则可以分配!


            canAllotNodes.push(s);
          }

          if (!canAllotNodes.length) {
            // 没有可以分配的服务器
            return null;
          } // 如果多个,则取一个连接数最少的


          let allotGameServer = (_crd && arrWinner === void 0 ? (_reportPossibleCrUseOfarrWinner({
            error: Error()
          }), arrWinner) : arrWinner)(canAllotNodes, (winner, item) => winner.info.clientCount > item.info.clientCount ? item : winner);
          return allotGameServer.info;
        }
        /**
         * 生成房间在线信息，如果房间指向的服务器不可用，则房间在线信息里的服务器连接地址为undefined
         * @param roomRegInfo 
         * @returns room online info 
         */


        buildRoomOnlineInfo(roomRegInfo) {
          let gameServerInfo = this.getNodeById(roomRegInfo.gameServerNodeId);
          let roomOnlineInfo = (_crd && GameServerHelper === void 0 ? (_reportPossibleCrUseOfGameServerHelper({
            error: Error()
          }), GameServerHelper) : GameServerHelper).buildRoomOnlineInfo(roomRegInfo, gameServerInfo == null ? void 0 : gameServerInfo.info);
          return roomOnlineInfo;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c87802956a4457b8ae536aabbc1b9f45a4475561.js.map