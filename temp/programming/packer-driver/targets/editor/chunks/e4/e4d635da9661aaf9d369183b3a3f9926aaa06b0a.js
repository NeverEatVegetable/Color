System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, hasProperty, PlayerAuthHelper, ErrorCodes, Result, ENetworkState, GameConnMgr, _crd;

  function _reportPossibleCrUseOfWsServer(extras) {
    _reporterNs.report("WsServer", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientConnection(extras) {
    _reporterNs.report("ClientConnection", "./GameServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMsgCall(extras) {
    _reporterNs.report("GameMsgCall", "./GameServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameServiceType(extras) {
    _reporterNs.report("GameServiceType", "../shared/gameClient/protocols/serviceProto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgDisconnect(extras) {
    _reporterNs.report("MsgDisconnect", "../shared/gameClient/protocols/MsgDisconnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhasProperty(extras) {
    _reporterNs.report("hasProperty", "../shared/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayer(extras) {
    _reporterNs.report("IPlayer", "../shared/tsgfServer/auth/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerAuthHelper(extras) {
    _reporterNs.report("PlayerAuthHelper", "../shared/tsgfServer/auth/PlayerAuthHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENetworkState(extras) {
    _reporterNs.report("ENetworkState", "../shared/tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayerInfoPara(extras) {
    _reporterNs.report("IPlayerInfoPara", "../shared/tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayerInfo(extras) {
    _reporterNs.report("IPlayerInfo", "../shared/tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameServerCfg(extras) {
    _reporterNs.report("IGameServerCfg", "../ServerConfig", _context.meta, extras);
  }

  _export("GameConnMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      hasProperty = _unresolved_2.hasProperty;
    }, function (_unresolved_3) {
      PlayerAuthHelper = _unresolved_3.PlayerAuthHelper;
    }, function (_unresolved_4) {
      ErrorCodes = _unresolved_4.ErrorCodes;
      Result = _unresolved_4.Result;
    }, function (_unresolved_5) {
      ENetworkState = _unresolved_5.ENetworkState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "575f11tBSNNgYXvYL0QJFQ9", "GameConnMgr", undefined);

      /**连接认证通过前事件处理器参数定义*/

      /**连接认证通过事件处理器参数定义, 断开重连也会走这里*/

      /**玩家断线事件处理器参数定义, 返回是否支持断线重连*/

      /**[断线时返回支持重连才有]玩家断线重连上事件处理器参数定义, 返回是否支持断线重连*/

      /**(认证过的)玩家断开连接并不再重连事件处理器参数定义*/

      /**游戏服务器的连接管理*/
      _export("GameConnMgr", GameConnMgr = class GameConnMgr {
        constructor(gameServer, getGameServerCfg) {
          /**默认的房间中断线等待重连的秒数(超过这个时间不再等待重连,即要求重连会被踢掉要求重新登陆)*/
          this.defaultWaitReconnectTime = 60000;
          this.connAuthingHandlers = [];
          this.connAuthedHandlers = [];
          this.connDisconnectHandlers = [];
          this.connReconnectHandlers = [];
          this.authedPlayerDisconnectHandlers = [];

          /**所有认证过的玩家信息(完全断开后才清除)*/
          this.allConnectionPlayer = new Map();

          /**当前认证过的连接, playerId => conn */
          this.currConnections = new Map();

          /**当前认证过的玩家信息, playerId => player */
          this.currConnectionplayer = new Map();

          /**等待断线重连的玩家, playerId => player */
          this.waitConnectionPlayer = new Map();

          /**等待断线重连的定时器, playerId => NodeJS.Timeout | number */
          this.waitConnectionTimeHD = new Map();

          /**等待认证的连接，超时不认证则踢掉, playerId => conn */
          this.waitAuthConnections = new Map();

          /**等待认证的定时器，超时不认证则踢掉, playerId => NodeJS.Timeout | number */
          this.waitAuthConnectionsTimeHD = new Map();
          this.gameServer = void 0;
          this.getGameServerCfg = void 0;
          this.gameServer = gameServer;
          this.getGameServerCfg = getGameServerCfg; //定义连接断开后的数据清理

          this.gameServer.flows.postDisconnectFlow.push(v => {
            //先停止等待认证（都断开了）
            this.clearWaitAuth(v.conn.connectionId); //判断之前是否认证过(即是否有玩家信息)

            let player = v.conn.currPlayer;

            if (player) {
              //@ts-ignore
              v.conn.currPlayer = undefined; //直接删除当前连接的相关数据, 不管有没重连, 都断开了

              this.currConnections.delete(player.authInfo.playerId);
              this.currConnectionplayer.delete(player.authInfo.playerId); //有玩家信息的断开，则判断是否要断线重连

              if (this.triggerConnDisconnect(v.conn.connectionId, player)) {
                //所有中间件都允许断线重连，则直接开始流程
                this.startWaitReconnect(v.conn.connectionId, player);
                return v;
              }
            }

            this.disconnectClearData(v.conn.connectionId, player, true);
            return v;
          }); //定义所有消息请求都要再认证通过之后才会受理

          this.gameServer.flows.preApiCallFlow.push(call => {
            if (call.service.name == "Reconnect" || call.service.name == "Authorize") {
              return call;
            }

            if (!call.conn.currPlayer) {
              //发送所有消息前必须通过认证
              call.error('You need Authorize before do this', {
                code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                  error: Error()
                }), ErrorCodes) : ErrorCodes).AuthUnverified
              });
              return undefined;
            }

            return call;
          });
          this.gameServer.flows.preMsgCallFlow.push(call => {
            if (call.service.name == "Reconnect" || call.service.name == "Authorize" || call.service.name == "Disconnect") {
              return call;
            }

            if (!call.conn.currPlayer) {
              //发送所有消息前必须通过认证
              call.logger.log('You need Authorize before do this', {
                code: (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                  error: Error()
                }), ErrorCodes) : ErrorCodes).AuthUnverified
              });
              return undefined;
            }

            return call;
          });
          this.gameServer.listenMsg('Disconnect', call => {
            //主动要求断开的,直接清理数据
            if (call.conn.currPlayer) this.disconnectClearData(call.conn.connectionId, call.conn.currPlayer, true);
            call.conn.close();
          });
        }
        /**连接断开的清理数据*/


        disconnectClearData(connId, player, triggerEvent = true) {
          if (player) {
            //有玩家才清理的数据
            //清理等待断线重连
            this.clearWaitReconnect(player.authInfo.playerId); //清理当前在线的连接

            this.currConnections.delete(player.authInfo.playerId);
            this.currConnectionplayer.delete(player.authInfo.playerId); //清理所有认证过的玩家

            this.allConnectionPlayer.delete(player.authInfo.playerId); //确认是否触发认证用户断开事件

            if (triggerEvent) this.triggerAuthedPlayerDisconnect(connId, player);
          }

          this.clearWaitAuth(connId);
        }
        /**开始连接等待认证定时器, 固定等待3秒*/


        startWaitAuth(conn) {
          let hd = this.waitAuthConnectionsTimeHD.get(conn.connectionId);
          if (hd) clearTimeout(hd);
          this.waitAuthConnections.set(conn.connectionId, conn);
          this.waitAuthConnectionsTimeHD.set(conn.connectionId, setTimeout(conn => {
            if (conn) {
              this.disconnectClearData(conn.connectionId, null, false);
              conn.close();
              conn = undefined;
            }
          }, 3000, conn));
        }
        /**清理连接的等待认证定时器*/


        clearWaitAuth(connId) {
          let hd = this.waitAuthConnectionsTimeHD.get(connId);
          if (hd) clearTimeout(hd);
          this.waitAuthConnections.delete(connId);
          this.waitAuthConnectionsTimeHD.delete(connId);
        }
        /**
         * 检查新连接通过认证,是否有阻止的
         * @param conn 
         * @param player 
         */


        checkConnAuthorizing(conn, player) {
          return this.triggerConnAuthing(conn, player);
        }
        /**
         * 设置新连接通过认证, 新认证的或者断线重连的，都要调用本方法，设置认证状态
         * @param conn 
         * @param player 
         */


        setConnAuthorized(conn, player) {
          conn.currPlayer = player;
          conn.playerId = player.playerInfo.playerId;
          this.clearWaitAuth(conn.connectionId);
          this.clearWaitReconnect(player.authInfo.playerId);
          this.currConnections.set(player.authInfo.playerId, conn);
          this.currConnectionplayer.set(player.authInfo.playerId, player);
          this.allConnectionPlayer.set(player.authInfo.playerId, player);
          this.triggerConnAuthed(conn);
        }
        /**开始等待断线重连流程*/


        startWaitReconnect(connId, player) {
          let hd = this.waitConnectionTimeHD.get(player.authInfo.playerId);
          if (hd) clearTimeout(hd);
          this.waitConnectionPlayer.set(player.authInfo.playerId, player);
          this.waitConnectionTimeHD.set(player.authInfo.playerId, setTimeout((connId, player) => {
            this.disconnectClearData(connId, player, true);
            player = undefined;
          }, player.roomWaitReconnectTime, connId, player));
        }
        /**清理连接的等待认证定时器*/


        clearWaitReconnect(playerId) {
          let hd = this.waitConnectionTimeHD.get(playerId);
          if (hd) clearTimeout(hd);
          this.waitConnectionPlayer.delete(playerId);
          this.waitConnectionTimeHD.delete(playerId);
        }
        /**尝试完成重连,清理等待数据,并返回这个连接之前用户信息,如果为null则表示已经不再等待重连,需要重新登陆*/


        tryReconnect(playerId) {
          let waitPlayer = this.waitConnectionPlayer.get(playerId);
          if (!waitPlayer) return null;
          let hd = this.waitConnectionTimeHD.get(playerId);
          if (hd) clearTimeout(hd);
          this.waitConnectionPlayer.delete(playerId);
          this.waitConnectionTimeHD.delete(playerId);
          this.allConnectionPlayer.delete(playerId);
          return waitPlayer;
        }
        /**
         * 连接重连
         * @param conn 
         * @param playerToken 
         * @param roomWaitReconnectTime 可设置房间中断线后等待重连的毫秒数,默认为60000ms(60秒),设成0表示断线后直接清理(按退出房间处理)不等待重连 
         * @returns 成功null或者失败的错误消息 
         */


        async connReconnect(conn, playerToken, roomWaitReconnectTime) {
          //先验证token
          let authInfoRet = await (_crd && PlayerAuthHelper === void 0 ? (_reportPossibleCrUseOfPlayerAuthHelper({
            error: Error()
          }), PlayerAuthHelper) : PlayerAuthHelper).verification(playerToken);
          if (!authInfoRet.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr(authInfoRet.err, authInfoRet.code);
          let authInfo = authInfoRet.data; //通过以及拿到playerId,尝试断线重连数据获取

          let player = this.tryReconnect(authInfo.playerId);

          if (!player) {
            //已经被等待清理,则返回重连失败
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('请重新登陆!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).AuthReconnectionFail);
          } //刷新玩家显示名


          player.authInfo.showName = authInfo.showName;
          player.playerInfo.showName = authInfo.showName;
          let err = this.checkConnAuthorizing(conn, player);

          if (err) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(err, (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).AuthForbid);
          }

          if (roomWaitReconnectTime !== undefined) player.roomWaitReconnectTime;
          this.setConnAuthorized(conn, player);
          this.triggerConnReconnect(conn, player);
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(player);
        }
        /**
         * 连接认证
         * @param conn 
         * @param playerToken 
         * @param roomWaitReconnectTime 可设置房间中断线后等待重连的毫秒数,默认为60000ms(60秒),设成0表示断线后直接清理(按退出房间处理)不等待重连 
         * @returns 成功null或者失败的错误消息 
         */


        async connAuthorize(conn, playerToken, authPlayerPara, roomWaitReconnectTime) {
          var _authPlayerPara$showN, _authPlayerPara$custo, _authPlayerPara$custo2;

          let authInfoRet = await (_crd && PlayerAuthHelper === void 0 ? (_reportPossibleCrUseOfPlayerAuthHelper({
            error: Error()
          }), PlayerAuthHelper) : PlayerAuthHelper).verification(playerToken);
          if (!authInfoRet.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr(authInfoRet.err, authInfoRet.code);
          let authInfo = authInfoRet.data;
          if (roomWaitReconnectTime === undefined) roomWaitReconnectTime = this.defaultWaitReconnectTime;
          let playerInfo = {
            playerId: authInfo.playerId,
            showName: (_authPlayerPara$showN = authPlayerPara.showName) != null ? _authPlayerPara$showN : authInfo.showName,
            customPlayerStatus: (_authPlayerPara$custo = authPlayerPara.customPlayerStatus) != null ? _authPlayerPara$custo : 0,
            customPlayerProfile: (_authPlayerPara$custo2 = authPlayerPara.customPlayerProfile) != null ? _authPlayerPara$custo2 : '',
            isRobot: false,
            networkState: (_crd && ENetworkState === void 0 ? (_reportPossibleCrUseOfENetworkState({
              error: Error()
            }), ENetworkState) : ENetworkState).ONLINE
          };
          let player = {
            authInfo: authInfo,
            playerInfo: playerInfo,
            roomRobotPlayers: new Map(),
            roomWaitReconnectTime: roomWaitReconnectTime
          };
          let err = this.checkConnAuthorizing(conn, player);

          if (err) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(err, (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).AuthForbid);
          }

          this.setConnAuthorized(conn, player);
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(player);
        }
        /**
         * 当前是否还有玩家(包含等待断线重连的)
         */


        hasUser() {
          return (_crd && hasProperty === void 0 ? (_reportPossibleCrUseOfhasProperty({
            error: Error()
          }), hasProperty) : hasProperty)(this.allConnectionPlayer);
        }
        /**
         * 获取玩家信息（包含暂时离线的）
         */


        getPlayer(playerId) {
          return this.allConnectionPlayer.get(playerId);
        }
        /**
         * 获取玩家连接（只有在线的才有连接）
         */


        getPlayerConn(playerId) {
          return this.currConnections.get(playerId);
        }
        /**
         * 获取玩家连接列表（只有在线的才有连接）
         */


        getPlayersConn(playerIds) {
          let connList = [];

          for (let playerId of playerIds) {
            let conn = this.currConnections.get(playerId);
            if (conn) connList.push(conn);
          }

          return connList;
        }
        /**
         * 获取玩家连接列表（只有在线的才有连接）
         */


        getPlayersConnFromPlayerInfos(playerInfos) {
          let connList = [];

          for (let p of playerInfos) {
            let conn = this.currConnections.get(p.playerId);
            if (conn) connList.push(conn);
          }

          return connList;
        }

        triggerConnAuthing(conn, player) {
          for (let i = 0; i < this.connAuthingHandlers.length; i++) {
            try {
              let err = this.connAuthingHandlers[i](conn, player);
              if (err) return err;
            } catch (e) {
              var _this$gameServer$logg;

              (_this$gameServer$logg = this.gameServer.logger) == null || _this$gameServer$logg.error("triggerConnAuthed:", e);
            }
          }

          return null;
        }

        triggerConnAuthed(conn) {
          //延时1毫秒,让原始授权流程完整走完后再触发事件
          setTimeout(conn => {
            if (conn) {
              for (let i = 0; i < this.connAuthedHandlers.length; i++) {
                try {
                  this.connAuthedHandlers[i](conn);
                } catch (e) {
                  var _this$gameServer$logg2;

                  (_this$gameServer$logg2 = this.gameServer.logger) == null || _this$gameServer$logg2.error("triggerConnAuthed:", e);
                }
              }

              conn = undefined;
            }
          }, 1, conn);
        }

        triggerAuthedPlayerDisconnect(connId, player) {
          //延时1毫秒,让原始流程完整走完后再触发事件
          setTimeout((connId, player) => {
            if (connId && player) {
              for (let i = 0; i < this.authedPlayerDisconnectHandlers.length; i++) {
                try {
                  this.authedPlayerDisconnectHandlers[i](connId, player);
                } catch (e) {
                  var _this$gameServer$logg3;

                  (_this$gameServer$logg3 = this.gameServer.logger) == null || _this$gameServer$logg3.error("triggerConnDisconnect:", e);
                }
              }

              connId = undefined;
              player = undefined;
            }
          }, 1, connId, player);
        }

        triggerConnDisconnect(connId, player) {
          for (let i = 0; i < this.connDisconnectHandlers.length; i++) {
            try {
              let wait = this.connDisconnectHandlers[i](connId, player);
              if (!wait) return false;
            } catch (e) {
              var _this$gameServer$logg4;

              (_this$gameServer$logg4 = this.gameServer.logger) == null || _this$gameServer$logg4.error("triggerConnDisconnect:", e);
            }
          }

          return true;
        }

        triggerConnReconnect(conn, player) {
          for (let i = 0; i < this.connReconnectHandlers.length; i++) {
            try {
              this.connReconnectHandlers[i](conn, player);
            } catch (e) {
              var _this$gameServer$logg5;

              (_this$gameServer$logg5 = this.gameServer.logger) == null || _this$gameServer$logg5.error("triggerConnReconnect:", e);
            }
          }

          return true;
        }
        /**
         * 注册验证连接授权事件,新连接和断线重连都走这里
         * @param handler 
         */


        onConnAuthing(handler) {
          this.connAuthingHandlers.push(handler);
        }
        /**
         * 取消注册连接授权事件
         * @param handler 
         */


        offConnAuthing(handler) {
          this.connAuthingHandlers.remove(h => h == handler);
        }
        /**
         * 注册连接授权事件,新连接和断线重连成功都走这里
         * @param handler 
         */


        onConnAuthed(handler) {
          this.connAuthedHandlers.push(handler);
        }
        /**
         * 取消注册连接授权事件
         * @param handler 
         */


        offConnAuthed(handler) {
          this.connAuthedHandlers.remove(h => h == handler);
        }
        /**
         * 注册连接断开事件(非服务端主动断开), 返回是否允许等待断线重连! 只有返回true, 才支持 onConnReconnect 事件!
         *  (彻底断开不再重连则使用 onAuthedPlayerDisconnect)
         * @param handler 
         */


        onConnDiconnect(handler) {
          this.connDisconnectHandlers.push(handler);
        }
        /**
         * 取消注册连接断开事件
         * @param handler 
         */


        offConnDiconnect(handler) {
          this.connDisconnectHandlers.remove(h => h == handler);
        }
        /**
         * 注册断线重连上事件, 只有对应玩家的 onConnDiconnect 事件返回true才支持重连!
         *  (彻底断开不再重连则使用 onAuthedPlayerDisconnect)
         * @param handler 
         */


        onConnReconnect(handler) {
          this.connReconnectHandlers.push(handler);
        }
        /**
         * 取消注册连接重新连上事件
         * @param handler 
         */


        offConnReconnect(handler) {
          this.connReconnectHandlers.remove(h => h == handler);
        }
        /**
         * 注册玩家断开事件(连接断开并且不再等待重连后触发)
         * @param handler 
         */


        onAuthedPlayerDisconnect(handler) {
          this.authedPlayerDisconnectHandlers.push(handler);
        }
        /**
         * 取消注册玩家断开事件
         * @param handler 
         */


        offAuthedPlayerDisconnect(handler) {
          this.authedPlayerDisconnectHandlers.remove(h => h == handler);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e4d635da9661aaf9d369183b3a3f9926aaa06b0a.js.map