System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, gameServiceProto, AWsClient, logger, ErrorCodes, Result, GameClient, _crd;

  function _reportPossibleCrUseOfgameServiceProto(extras) {
    _reporterNs.report("gameServiceProto", "./protocols/serviceProto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServiceType(extras) {
    _reporterNs.report("ServiceType", "./protocols/serviceProto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAWsClient(extras) {
    _reporterNs.report("AWsClient", "../tsgf/AClient", _context.meta, extras);
  }

  function _reportPossibleCrUseOflogger(extras) {
    _reporterNs.report("logger", "../tsgf/logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIChangeCustomPlayerProfile(extras) {
    _reporterNs.report("IChangeCustomPlayerProfile", "../tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIChangeCustomPlayerStatus(extras) {
    _reporterNs.report("IChangeCustomPlayerStatus", "../tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIChangePlayerTeam(extras) {
    _reporterNs.report("IChangePlayerTeam", "../tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayerInfoPara(extras) {
    _reporterNs.report("IPlayerInfoPara", "../tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayerInfo(extras) {
    _reporterNs.report("IPlayerInfo", "../tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqAuthorize(extras) {
    _reporterNs.report("ReqAuthorize", "./protocols/PtlAuthorize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIChangeRoomPara(extras) {
    _reporterNs.report("IChangeRoomPara", "../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIJoinRoomPara(extras) {
    _reporterNs.report("IJoinRoomPara", "../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomInfo(extras) {
    _reporterNs.report("IRoomInfo", "../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRecvRoomMsg(extras) {
    _reporterNs.report("IRecvRoomMsg", "../tsgf/room/IRoomMsg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomMsg(extras) {
    _reporterNs.report("IRoomMsg", "../tsgf/room/IRoomMsg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAfterFrames(extras) {
    _reporterNs.report("IAfterFrames", "../tsgf/room/IGameFrame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameSyncFrame(extras) {
    _reporterNs.report("IGameSyncFrame", "../tsgf/room/IGameFrame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayerInputOperate(extras) {
    _reporterNs.report("IPlayerInputOperate", "../tsgf/room/IGameFrame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchParamsFromRoomAllPlayer(extras) {
    _reporterNs.report("IMatchParamsFromRoomAllPlayer", "../tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchResult(extras) {
    _reporterNs.report("IMatchResult", "../tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchPlayerResultWithServer(extras) {
    _reporterNs.report("IMatchPlayerResultWithServer", "../tsgf/match/Models", _context.meta, extras);
  }

  _export("GameClient", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      gameServiceProto = _unresolved_2.serviceProto;
    }, function (_unresolved_3) {
      AWsClient = _unresolved_3.AWsClient;
    }, function (_unresolved_4) {
      logger = _unresolved_4.logger;
    }, function (_unresolved_5) {
      ErrorCodes = _unresolved_5.ErrorCodes;
      Result = _unresolved_5.Result;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a2f8enVVRhEn5bpbxCjIbDC", "GameClient", undefined);

      /**游戏服务器的通讯类型定义*/

      /**
       * 基础的游戏服务器api的客户端封装
       */
      _export("GameClient", GameClient = class GameClient extends (_crd && AWsClient === void 0 ? (_reportPossibleCrUseOfAWsClient({
        error: Error()
      }), AWsClient) : AWsClient) {
        get playerToken() {
          return this._playerToken;
        }

        get playerId() {
          return this._playerId;
        }

        /**当前所在的房间, 各种操作会自动维护本属性值为最新*/
        get currRoomInfo() {
          return this._currRoomInfo;
        }

        set currRoomInfo(roomInfo) {
          var _this$_currRoomInfo$p, _this$_currRoomInfo;

          this._currRoomInfo = roomInfo;
          this._currPlayerInfo = (_this$_currRoomInfo$p = (_this$_currRoomInfo = this._currRoomInfo) == null ? void 0 : _this$_currRoomInfo.playerList.find(p => p.playerId === this._playerId)) != null ? _this$_currRoomInfo$p : null;
        }

        /**当前玩家信息对象*/
        get currPlayerInfo() {
          return this._currPlayerInfo;
        }
        /**是否启用断线重连*/


        /**
         *
         * @param _playerToken 服务端调用大厅授权接口，获得玩家授权令牌
         * @param reqTimeout 请求超时毫秒数
         * @param roomWaitReconnectTime 可设置房间中断线后等待重连的毫秒数(认证和重连时使用),默认为60000ms(60秒),设成0表示断线后直接清理(按退出房间处理)不等待重连
         * @param serverUrl
         */
        constructor(serverUrl, _playerToken, reqTimeout, roomWaitReconnectTime) {
          super(_crd && gameServiceProto === void 0 ? (_reportPossibleCrUseOfgameServiceProto({
            error: Error()
          }), gameServiceProto) : gameServiceProto, {
            server: serverUrl,
            json: false,
            logger: _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger,
            timeout: reqTimeout
          });
          this._playerToken = void 0;
          this._playerId = void 0;
          this._currRoomInfo = null;
          this._currPlayerInfo = null;
          this.enabledReconnect = true;

          /**
           * 断线重连等待秒数
           */
          this.reconnectWaitSec = 2;
          this.reconnectTimerHD = void 0;

          /**可设置房间中断线后等待重连的毫秒数(认证和重连时使用),默认为60000ms(60秒),设成0表示断线后直接清理(按退出房间处理)不等待重连*/
          this.roomWaitReconnectTime = void 0;

          /**
           * [需启用断线重连:enabledReconnect]每次开始断线重连时触发, [reconnectWaitSec]秒后开始重连
           * @param currTryCount 已经重试了几次了, 首次断线重连则为0
           */
          this.onReconnectStart = void 0;

          /**
           * 彻底断开触发, 如下情况:
           * 1. 断开连接时没启用断线重连则触发
           * 2. 主动断开时触发, reason='ManualDisconnect'
           * 3. 断线重连失败并不再重连时触发, reason='ReconnectFailed'
           * 4. 认证失败时会断开连接, 同时触发, reason='AuthorizeFailed'
           * @param reason 断开原因
           */
          this.onDisconnected = void 0;

          /**当前玩家不管什么原因离开了房间都会触发(主动离开,主动解散,房间被解散等等)*/
          this.onLeaveRoom = void 0;

          /**当前玩家加入到房间后触发*/
          this.onJoinRoom = void 0;

          /**断线重连最终有结果时触发(终于连上了,或者返回不继续尝试了)*/
          this.onReconnectResult = void 0;

          /**当接收到房间消息时触发*/
          this.onRecvRoomMsg = void 0;

          /**【在房间中才能收到】玩家加入当前房间（自己操作的不触发）*/
          this.onPlayerJoinRoom = void 0;

          /**【在房间中才能收到】玩家退出当前房间（自己操作的不触发）*/
          this.onPlayerLeaveRoom = void 0;

          /**【在房间中才能收到】当前房间被解散（自己操作的不触发）*/
          this.onDismissRoom = void 0;

          /**【在房间中才能收到】房间中开始帧同步了*/
          this.onStartFrameSync = void 0;

          /**【在房间中才能收到】房间中停止帧同步了*/
          this.onStopFrameSync = void 0;

          /**【在房间中才能收到】房间中收到一个同步帧*/
          this.onRecvFrame = void 0;

          /**【在房间中才能收到】服务端要求玩家上传状态同步数据 (调用 playerSendSyncState 方法)*/
          this.onRequirePlayerSyncState = void 0;

          /**【在房间中才能收到】玩家加入当前房间（自己操作的不触发）*/
          this.onChangePlayerNetworkState = void 0;

          /**【在房间中才能收到】有玩家修改了自定义属性(只要在房间,自己也会收到)*/
          this.onChangeCustomPlayerProfile = void 0;

          /**【在房间中才能收到】有玩家修改了自定义状态(只要在房间,自己也会收到)*/
          this.onChangeCustomPlayerStatus = void 0;

          /**【在房间中才能收到】有玩家修改了自定义属性(只要在房间,自己也会收到)*/
          this.onChangeRoom = void 0;

          /**【在房间中才能收到】有玩家修改了所在队伍(只要在房间,自己也会收到)*/
          this.onChangePlayerTeam = void 0;

          /**【在房间中才能收到】有玩家发起了全房间玩家匹配(自己也会收到)*/
          this.onRoomAllPlayersMatchStart = void 0;

          /**【在房间中才能收到】全房间玩家匹配有结果了(自己也会收到) */
          this.onRoomAllPlayersMatchResult = void 0;
          this._playerToken = _playerToken;
          this._playerId = "";
          this.roomWaitReconnectTime = roomWaitReconnectTime; //设置断线重连的中间件

          this.client.flows.postDisconnectFlow.push(async v => {
            //如果都没连上过就断开,那么忽略
            if (!this._playerId) return v; //判断是否需要重连

            if (!v.isManual) {
              var _this$onDisconnected;

              if (this.enabledReconnect) {
                var _this$onReconnectStar;

                //启用断线重连
                (_this$onReconnectStar = this.onReconnectStart) == null || _this$onReconnectStar.call(this, 0);
                if (this.reconnectTimerHD) clearTimeout(this.reconnectTimerHD);
                this.reconnectTimerHD = setTimeout(async () => this.startReconnect(0, true), this.reconnectWaitSec * 1000);
                return v;
              } //被断开,并且没启用断线重连


              if (this.currRoomInfo) {
                var _this$onLeaveRoom;

                //如果被断开时,有在房间中,则先触发离开房间
                (_this$onLeaveRoom = this.onLeaveRoom) == null || _this$onLeaveRoom.call(this, this.currRoomInfo);
              }

              (_this$onDisconnected = this.onDisconnected) == null || _this$onDisconnected.call(this, v.reason);
            } else {
              var _this$onDisconnected2, _v$reason;

              //主动断开
              (_this$onDisconnected2 = this.onDisconnected) == null || _this$onDisconnected2.call(this, (_v$reason = v.reason) != null ? _v$reason : 'ManualDisconnect');
            } //确认彻底断开了,清理数据


            this.clearData();
            return v;
          });
          this.client.listenMsg("NotifyRoomMsg", msg => {
            var _this$onRecvRoomMsg;

            (_this$onRecvRoomMsg = this.onRecvRoomMsg) == null || _this$onRecvRoomMsg.call(this, msg.recvRoomMsg);
          });
          this.client.listenMsg("NotifyJoinRoom", msg => {
            var _this$onPlayerJoinRoo;

            this.currRoomInfo = msg.roomInfo;
            let joinPlayer = this.currRoomInfo.playerList.find(p => p.playerId === msg.joinPlayerId);
            (_this$onPlayerJoinRoo = this.onPlayerJoinRoom) == null || _this$onPlayerJoinRoo.call(this, joinPlayer, this.currRoomInfo);
          });
          this.client.listenMsg("NotifyLeaveRoom", msg => {
            var _this$onPlayerLeaveRo;

            this.currRoomInfo = msg.roomInfo;
            (_this$onPlayerLeaveRo = this.onPlayerLeaveRoom) == null || _this$onPlayerLeaveRo.call(this, msg.leavePlayerInfo, this.currRoomInfo);
          });
          this.client.listenMsg("NotifyDismissRoom", msg => {
            var _this$onDismissRoom;

            if (this.currRoomInfo) {
              var _this$onLeaveRoom2;

              (_this$onLeaveRoom2 = this.onLeaveRoom) == null || _this$onLeaveRoom2.call(this, this.currRoomInfo);
            }

            this.currRoomInfo = null;
            (_this$onDismissRoom = this.onDismissRoom) == null || _this$onDismissRoom.call(this, msg.roomInfo);
          });
          this.client.listenMsg("NotifyStartFrameSync", msg => {
            var _this$onStartFrameSyn;

            this.currRoomInfo = msg.roomInfo;
            (_this$onStartFrameSyn = this.onStartFrameSync) == null || _this$onStartFrameSyn.call(this, this.currRoomInfo, this.currRoomInfo.playerList.find(p => p.playerId === msg.startPlayerId));
          });
          this.client.listenMsg("NotifyStopFrameSync", msg => {
            var _this$onStopFrameSync;

            this.currRoomInfo = msg.roomInfo;
            (_this$onStopFrameSync = this.onStopFrameSync) == null || _this$onStopFrameSync.call(this, this.currRoomInfo, this.currRoomInfo.playerList.find(p => p.playerId === msg.stopPlayerId));
          });
          this.client.listenMsg("NotifySyncFrame", msg => {
            var _this$onRecvFrame;

            (_this$onRecvFrame = this.onRecvFrame) == null || _this$onRecvFrame.call(this, msg.syncFrame, msg.dt);
          });
          this.client.listenMsg("RequirePlayerSyncState", msg => {
            var _this$onRequirePlayer;

            (_this$onRequirePlayer = this.onRequirePlayerSyncState) == null || _this$onRequirePlayer.call(this);
          });
          this.client.listenMsg("NotifyChangeRoom", msg => {
            var _this$onChangeRoom;

            this.currRoomInfo = msg.roomInfo;
            (_this$onChangeRoom = this.onChangeRoom) == null || _this$onChangeRoom.call(this, this.currRoomInfo);
          });
          this.client.listenMsg("NotifyChangePlayerNetworkState", msg => {
            var _this$onChangePlayerN;

            this.currRoomInfo = msg.roomInfo;
            let player = this.currRoomInfo.playerList.find(p => p.playerId === msg.changePlayerId);
            (_this$onChangePlayerN = this.onChangePlayerNetworkState) == null || _this$onChangePlayerN.call(this, player);
          });
          this.client.listenMsg("NotifyChangeCustomPlayerProfile", msg => {
            var _this$onChangeCustomP;

            this.currRoomInfo = msg.roomInfo;
            (_this$onChangeCustomP = this.onChangeCustomPlayerProfile) == null || _this$onChangeCustomP.call(this, msg);
          });
          this.client.listenMsg("NotifyChangeCustomPlayerStatus", msg => {
            var _this$onChangeCustomP2;

            this.currRoomInfo = msg.roomInfo;
            (_this$onChangeCustomP2 = this.onChangeCustomPlayerStatus) == null || _this$onChangeCustomP2.call(this, msg);
          });
          this.client.listenMsg("NotifyChangePlayerTeam", msg => {
            var _this$onChangePlayerT;

            this.currRoomInfo = msg.roomInfo;
            (_this$onChangePlayerT = this.onChangePlayerTeam) == null || _this$onChangePlayerT.call(this, msg);
          });
          this.client.listenMsg("NotifyRoomAllPlayersMatchStart", msg => {
            var _this$onRoomAllPlayer;

            this.currRoomInfo = msg.roomInfo;
            (_this$onRoomAllPlayer = this.onRoomAllPlayersMatchStart) == null || _this$onRoomAllPlayer.call(this, msg.matchReqId, msg.reqPlayerId, msg.matchParams);
          });
          this.client.listenMsg("NotifyRoomAllPlayersMatchResult", msg => {
            var _this$onRoomAllPlayer2;

            this.currRoomInfo = msg.roomInfo;
            (_this$onRoomAllPlayer2 = this.onRoomAllPlayersMatchResult) == null || _this$onRoomAllPlayer2.call(this, msg.errMsg, msg.errCode, msg.matchResult);
          });
        }
        /**
         * Disconnects game client
         * @param reason websocket的关闭原因字符串,可自定义
         * @param code websocket的关闭原因代码, 取值范围: [1000,3000-4999]
         * @returns disconnect 
         */


        async disconnect(reason = 'ManualDisconnect') {
          this.stopReconnect();

          if (this._playerId || this.client.isConnected) {
            if (this.currRoomInfo) {
              var _this$onLeaveRoom3;

              //如果断开时,有在房间中,则先触发离开房间事件
              (_this$onLeaveRoom3 = this.onLeaveRoom) == null || _this$onLeaveRoom3.call(this, this.currRoomInfo);
            }

            this.clearData();
            await this.client.sendMsg("Disconnect", {});
            await this.client.disconnect(1000, reason);
          }
        }

        async clearData() {
          this._playerId = '';
          this._playerToken = '';
          this._currRoomInfo = null;
          this._currPlayerInfo = null;
          this.onReconnectStart = undefined;
          this.onDisconnected = undefined;
          this.onReconnectResult = undefined;
          this.onLeaveRoom = undefined;
          this.onRecvRoomMsg = undefined;
          this.onPlayerJoinRoom = undefined;
          this.onPlayerLeaveRoom = undefined;
          this.onDismissRoom = undefined;
          this.onStartFrameSync = undefined;
          this.onStopFrameSync = undefined;
          this.onRecvFrame = undefined;
          this.onRequirePlayerSyncState = undefined;
          this.onChangePlayerNetworkState = undefined;
          this.onChangeCustomPlayerProfile = undefined;
          this.onChangeCustomPlayerStatus = undefined;
          this.onChangeRoom = undefined;
          this.onChangePlayerTeam = undefined;
          this.onRoomAllPlayersMatchStart = undefined;
          this.onRoomAllPlayersMatchResult = undefined;
        }

        stopReconnect() {
          if (this.reconnectTimerHD) {
            clearTimeout(this.reconnectTimerHD);
            this.reconnectTimerHD = null;
          }
        }
        /**
         * Starts reconnect
         * @param currTryCount 当前重试次数
         * @param failReTry 本次失败后是否继续重试
         * @returns reconnect 
         */


        async startReconnect(currTryCount = 0, failReTry = true) {
          const result = await this.reconnect();

          if (!this._playerToken) {
            //重连异步回来,发现已经取消
            return false;
          } // 重连也错误，弹出错误提示


          if (result.succ) {
            var _this$client$logger, _this$onReconnectResu;

            (_this$client$logger = this.client.logger) == null || _this$client$logger.log('重连成功!');
            (_this$onReconnectResu = this.onReconnectResult) == null || _this$onReconnectResu.call(this, true, null);
            return true;
          } //如果是逻辑拒绝则不需要重连


          if (!this._playerToken || result.code == (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).AuthReconnectionFail) failReTry = false;

          if (failReTry && this.enabledReconnect) {
            var _this$onReconnectStar2, _this$client$logger2;

            currTryCount++;
            (_this$onReconnectStar2 = this.onReconnectStart) == null || _this$onReconnectStar2.call(this, currTryCount);
            (_this$client$logger2 = this.client.logger) == null || _this$client$logger2.error('重连失败:' + result.err + ' ' + this.reconnectWaitSec + '秒后自动重连!');
            if (this.reconnectTimerHD) clearTimeout(this.reconnectTimerHD);
            this.reconnectTimerHD = setTimeout(() => this.startReconnect(currTryCount, failReTry), this.reconnectWaitSec * 1000);
          } else {
            var _this$client$logger3;

            (_this$client$logger3 = this.client.logger) == null || _this$client$logger3.error('重连失败:' + result.err);
            let tmpOnRecRet = this.onReconnectResult; //因为disconnect会清理数据，所以这里临时记录一下，用于接着触发

            await this.disconnect('ReconnectFailed');
            tmpOnRecRet == null || tmpOnRecRet.call(this, false, result.err);
          }

          return false;
        }
        /**
         * 断线重连, 失败的话要看code, ErrorCodes.AuthReconnectionFail 表示逻辑拒绝,不需要重连
         * @returns  
         */


        async reconnect() {
          const connectRet = await this.client.connect();

          if (!connectRet.isSucc) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr("连接失败:" + connectRet.errMsg);
          }

          if (!this._playerToken) {
            //重连异步回来,发现已经取消
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('取消', 1);
          }

          const loginRet = await this.client.callApi("Reconnect", {
            playerToken: this._playerToken,
            roomWaitReconnectTime: this.roomWaitReconnectTime
          });

          if (!this._playerToken) {
            //重连异步回来,发现已经取消
            await this.client.disconnect();
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('取消', 1);
          }

          if (!loginRet.isSucc) {
            var _loginRet$err$code, _loginRet$err;

            // 连上了, 但重连认证失败, 直接断开
            await this.client.disconnect();
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(loginRet.err.message, (_loginRet$err$code = (_loginRet$err = loginRet.err) == null ? void 0 : _loginRet$err.code) != null ? _loginRet$err$code : 1);
          }

          this._playerId = loginRet.res.playerId;
          this.currRoomInfo = loginRet.res.currRoomInfo;
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(null);
        }
        /**
         * 登录到游戏服务器, 失败则断开连接并清理数据
         * @param infoPara 
         * @returns  
         */


        async authorize(infoPara) {
          var _ref;

          const connectRet = await this.client.connect();

          if (!connectRet.isSucc) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr("连接失败:" + connectRet.errMsg);
          }

          let req = (_ref = infoPara) != null ? _ref : {};
          req.playerToken = this._playerToken;
          req.roomWaitReconnectTime = this.roomWaitReconnectTime;
          const loginRet = await this.client.callApi("Authorize", req);

          if (!loginRet.isSucc) {
            var _loginRet$err$code2, _loginRet$err2;

            let errCode = (_loginRet$err$code2 = (_loginRet$err2 = loginRet.err) == null ? void 0 : _loginRet$err2.code) != null ? _loginRet$err$code2 : 1;
            this.disconnect('AuthorizeFailed');
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(loginRet.err.message, errCode);
          }

          this._playerId = loginRet.res.playerInfo.playerId;
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(null);
        }
        /**
         * [兼容旧版本保留]进房间
         * @param roomId 
         * @param teamId 同时加入指定队伍 
         * @returns  
         * @deprecated 本重载已弃用, 将在下个版本移除!!
         */

        /**
         * 进房间
         * @param joinRoomPara 加入房间参数, 根据房间的加入模式需要传入对应的数据
         * @returns  
         */


        /**
         * 进房间
         * @param roomId 
         * @param teamId 同时加入指定队伍 
         * @returns  
         */
        async joinRoom(para, teamId) {
          var _this$onJoinRoom;

          let joinRoomPara;

          if (typeof para === 'string') {
            joinRoomPara = {
              roomId: para,
              teamId
            };
          } else {
            joinRoomPara = para;
          }

          const ret = await this.client.callApi("JoinRoom", joinRoomPara);

          if (!ret.isSucc) {
            var _ret$err$code, _ret$err;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code = (_ret$err = ret.err) == null ? void 0 : _ret$err.code) != null ? _ret$err$code : 1);
          }

          this.currRoomInfo = ret.res.roomInfo;
          (_this$onJoinRoom = this.onJoinRoom) == null || _this$onJoinRoom.call(this, this.currRoomInfo);
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res.roomInfo);
        }
        /**
         * 退出当前房间
         * @returns  
         */


        async leaveRoom() {
          const ret = await this.client.callApi("LeaveRoom", {});

          if (!ret.isSucc) {//离开房间失败? 没事, 本地当作成功
            //return Result.buildErr(ret.err.message, (ret.err?.code ?? 1) as number);
          }

          if (this.currRoomInfo) {
            var _this$onLeaveRoom4;

            (_this$onLeaveRoom4 = this.onLeaveRoom) == null || _this$onLeaveRoom4.call(this, this.currRoomInfo);
          }

          this.currRoomInfo = null;
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(null);
        }
        /**
         * 【仅房主】解散当前房间
         * @returns  
         */


        async dismissRoom() {
          if (!this.currRoomInfo) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('当前不在房间中！');
          const ret = await this.client.callApi("DismissRoom", {
            roomId: this.currRoomInfo.roomId
          });

          if (!ret.isSucc) {//解散失败? 本地当作成功!
            //return Result.buildErr(ret.err.message, (ret.err?.code ?? 1) as number);
          }

          if (this.currRoomInfo) {
            var _this$onLeaveRoom5;

            (_this$onLeaveRoom5 = this.onLeaveRoom) == null || _this$onLeaveRoom5.call(this, this.currRoomInfo);
          }

          this.currRoomInfo = null;
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(null);
        }
        /**
         * 修改房间信息(注意,只能房主操作),同时同步更新本地当前房间信息
         *
         * @param changePara
         * @returns
         */


        async changeRoom(changePara) {
          const ret = await this.client.callApi("ChangeRoom", changePara);

          if (!ret.isSucc) {
            var _ret$err$code2, _ret$err2;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code2 = (_ret$err2 = ret.err) == null ? void 0 : _ret$err2.code) != null ? _ret$err$code2 : 1);
          }

          this.currRoomInfo = ret.res.roomInfo;
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res.roomInfo);
        }
        /**
         * 修改自己的玩家自定义属性,如果当前在房间中会同时会触发通知(房间中所有玩家)
         *
         * @param customPlayerProfile
         * @param [robotPlayerId] 可以指定自己的房间机器人
         * @returns
         */


        async changeCustomPlayerProfile(customPlayerProfile, robotPlayerId) {
          const ret = await this.client.callApi("ChangeCustomPlayerProfile", {
            customPlayerProfile,
            robotPlayerId
          });

          if (!ret.isSucc) {
            var _ret$err$code3, _ret$err3;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code3 = (_ret$err3 = ret.err) == null ? void 0 : _ret$err3.code) != null ? _ret$err$code3 : 1);
          }

          let changePlayerInfo;

          if (robotPlayerId) {
            var _this$currRoomInfo;

            changePlayerInfo = (_this$currRoomInfo = this.currRoomInfo) == null ? void 0 : _this$currRoomInfo.playerList.find(p => p.playerId === robotPlayerId);
          } else {
            changePlayerInfo = this._currPlayerInfo;
          }

          if (changePlayerInfo) changePlayerInfo.customPlayerProfile = customPlayerProfile;
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(null);
        }
        /**
         * 修改自己的玩家自定义状态,如果当前在房间中会同时会触发通知(房间中所有玩家)
         *
         * @param customPlayerStatus
         * @param [robotPlayerId] 可以指定自己的房间机器人
         * @returns
         */


        async changeCustomPlayerStatus(customPlayerStatus, robotPlayerId) {
          const ret = await this.client.callApi("ChangeCustomPlayerStatus", {
            customPlayerStatus,
            robotPlayerId
          });

          if (!ret.isSucc) {
            var _ret$err$code4, _ret$err4;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code4 = (_ret$err4 = ret.err) == null ? void 0 : _ret$err4.code) != null ? _ret$err$code4 : 1);
          }

          let changePlayerInfo;

          if (robotPlayerId) {
            var _this$currRoomInfo2;

            changePlayerInfo = (_this$currRoomInfo2 = this.currRoomInfo) == null ? void 0 : _this$currRoomInfo2.playerList.find(p => p.playerId === robotPlayerId);
          } else {
            changePlayerInfo = this._currPlayerInfo;
          }

          if (changePlayerInfo) changePlayerInfo.customPlayerStatus = customPlayerStatus;
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(null);
        }
        /**
         *变更自己所在队伍
         *
         * @param newTeamId 传undefined表示改为无队伍; 如果有指定队伍, 但房间不存在该队伍id, 则需要房间开启自由队伍选项
         * @param [robotPlayerId] 可以指定自己的房间机器人
         * @returns 
         */


        async changePlayerTeam(newTeamId, robotPlayerId) {
          const ret = await this.client.callApi("ChangePlayerTeam", {
            newTeamId,
            robotPlayerId
          });

          if (!ret.isSucc) {
            var _ret$err$code5, _ret$err5;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code5 = (_ret$err5 = ret.err) == null ? void 0 : _ret$err5.code) != null ? _ret$err$code5 : 1);
          }

          this.currRoomInfo = ret.res.roomInfo;
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(null);
        }
        /**
         * 发送房间消息（自定义消息），可以指定房间里的全部玩家或部分玩家或其他玩家
         *
         * @public
         * @param roomMsg 
         * @param [robotPlayerId] 可以指定自己的房间机器人
         * @returns
         */


        async sendRoomMsg(roomMsg, robotPlayerId) {
          const ret = await this.client.callApi("SendRoomMsg", {
            roomMsg,
            robotPlayerId
          });

          if (!ret.isSucc) {
            var _ret$err$code6, _ret$err6;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code6 = (_ret$err6 = ret.err) == null ? void 0 : _ret$err6.code) != null ? _ret$err$code6 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(null);
        }
        /**
         * 开始帧同步
         *
         * @public
         * @returns
         */


        async startFrameSync() {
          const ret = await this.client.callApi("StartFrameSync", {});

          if (!ret.isSucc) {
            var _ret$err$code7, _ret$err7;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code7 = (_ret$err7 = ret.err) == null ? void 0 : _ret$err7.code) != null ? _ret$err$code7 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(null);
        }
        /**
         * 停止帧同步
         *
         * @public
         * @returns
         */


        async stopFrameSync() {
          const ret = await this.client.callApi("StopFrameSync", {});

          if (!ret.isSucc) {
            var _ret$err$code8, _ret$err8;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code8 = (_ret$err8 = ret.err) == null ? void 0 : _ret$err8.code) != null ? _ret$err$code8 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(null);
        }
        /**
         * 发送玩家输入帧(加入到下一帧的操作列表)
         *
         * @public
         * @param inpOperates 
         * @param [robotPlayerId] 可以指定自己的房间机器人
         * @returns
         */


        async playerInpFrame(inpOperates, robotPlayerId) {
          const ret = await this.client.sendMsg("PlayerInpFrame", {
            operates: inpOperates,
            robotPlayerId
          });

          if (!ret.isSucc) {
            var _ret$err$code9, _ret$err9;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code9 = (_ret$err9 = ret.err) == null ? void 0 : _ret$err9.code) != null ? _ret$err$code9 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(null);
        }
        /**
         * 请求追帧数据(当前的所有帧数据[+同步状态数据])
         *
         * @public
         * @returns
         */


        async requestAfterFrames() {
          const ret = await this.client.callApi("RequestAfterFrames", {});

          if (!ret.isSucc) {
            var _ret$err$code10, _ret$err10;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code10 = (_ret$err10 = ret.err) == null ? void 0 : _ret$err10.code) != null ? _ret$err$code10 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res);
        }
        /**
         * 自主请求帧数组
         *
         * @public
         * @param beginFrameIndex 起始帧索引(包含)
         * @param endFrameIndex 结束帧索引(包含)
         * @returns
         */


        async requestFrames(beginFrameIndex, endFrameIndex) {
          const ret = await this.client.callApi("RequestFrames", {
            beginFrameIndex: beginFrameIndex,
            endFrameIndex: endFrameIndex
          });

          if (!ret.isSucc) {
            var _ret$err$code11, _ret$err11;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code11 = (_ret$err11 = ret.err) == null ? void 0 : _ret$err11.code) != null ? _ret$err$code11 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res.frames);
        }
        /**
         * 玩家发送本地的同步状态数据(有启用状态同步的时候才可以用)
         *
         * @public
         * @param stateData
         * @param stateFrameIndex
         * @returns
         */


        async playerSendSyncState(stateData, stateFrameIndex) {
          const ret = await this.client.sendMsg("PlayerSendSyncState", {
            stateData: stateData,
            stateFrameIndex: stateFrameIndex
          });

          if (!ret.isSucc) {
            var _ret$err$code12, _ret$err12;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code12 = (_ret$err12 = ret.err) == null ? void 0 : _ret$err12.code) != null ? _ret$err$code12 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(null);
        }
        /**
         * 发起房间所有玩家匹配请求
         * 请求成功即返回,同时房间中的所有玩家会收到通知
         * 匹配有结果了还会收到消息通知, 并且可由一个玩家调用QueryMatch等待完整匹配结果
         *
         * @param matchParams
         * @returns 匹配请求id
         */


        async requestMatch(matchParams) {
          const ret = await this.client.callApi("RequestMatch", {
            matchParams: matchParams
          });

          if (!ret.isSucc) {
            var _ret$err$code13, _ret$err13;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code13 = (_ret$err13 = ret.err) == null ? void 0 : _ret$err13.code) != null ? _ret$err$code13 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res.matchReqId);
        }
        /**
         * 取消匹配请求
         * 可能发生并发,导致虽然请求成功了,但还是收到了成功结果的通知
         *
         * @returns 匹配请求id
         */


        async cancelMatch() {
          const ret = await this.client.callApi("CancelMatch", {});

          if (!ret.isSucc) {
            var _ret$err$code14, _ret$err14;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code14 = (_ret$err14 = ret.err) == null ? void 0 : _ret$err14.code) != null ? _ret$err$code14 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(null);
        }
        /**
         * 查询完整匹配结果
         * 会等到有结果了才返回!
         * 注意: 同时只能只有一个玩家进行查询等待,一般使用通知来获取结果即可
         *
         * @returns
         */


        async queryMatch() {
          const ret = await this.client.callApi("QueryMatch", {}, {
            timeout: 0
          });

          if (!ret.isSucc) {
            var _ret$err$code15, _ret$err15;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code15 = (_ret$err15 = ret.err) == null ? void 0 : _ret$err15.code) != null ? _ret$err$code15 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res.matchResult);
        }
        /**
         * 玩家创建房间机器人(退出房间会同步退出)
         * @param createPa 
         * @param [teamId] 
         * @returns 创建的机器人信息
         */


        async createRoomRobot(createPa, teamId) {
          const ret = await this.client.callApi("CreateRoomRobot", {
            createPa,
            teamId
          });

          if (!ret.isSucc) {
            var _ret$err$code16, _ret$err16;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code16 = (_ret$err16 = ret.err) == null ? void 0 : _ret$err16.code) != null ? _ret$err$code16 : 1);
          }

          if (this._currPlayerInfo) {
            var _this$_currPlayerInfo;

            this._currPlayerInfo.roomRobotIds = Array.from(new Set([...((_this$_currPlayerInfo = this._currPlayerInfo.roomRobotIds) != null ? _this$_currPlayerInfo : []), ret.res.robotInfo.playerId]));
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res.robotInfo);
        }
        /**
         * 玩家的指定房间机器人退出房间(即销毁)
         * @param robotPlayerId 
         * @returns 销毁的机器人信息
         */


        async roomRobotLeave(robotPlayerId) {
          const ret = await this.client.callApi("RoomRobotLeave", {
            robotPlayerId
          });

          if (!ret.isSucc) {
            var _ret$err$code17, _ret$err17;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code17 = (_ret$err17 = ret.err) == null ? void 0 : _ret$err17.code) != null ? _ret$err$code17 : 1);
          }

          if (this._currPlayerInfo) {
            var _this$_currPlayerInfo2;

            let tmpIds = new Set([...((_this$_currPlayerInfo2 = this._currPlayerInfo.roomRobotIds) != null ? _this$_currPlayerInfo2 : [])]);
            tmpIds.delete(ret.res.robotInfo.playerId);
            this._currPlayerInfo.roomRobotIds = Array.from(tmpIds);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res.robotInfo);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=17f08eec79c25d2474e91d056070188b50c5e326.js.map