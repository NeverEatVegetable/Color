System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameClient, EventEmitter, ErrorCodes, Result, delayCanCancel, RoomEvents, Room, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "./Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameClient(extras) {
    _reporterNs.report("GameClient", "./gameClient/GameClient", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventEmitter(extras) {
    _reporterNs.report("EventEmitter", "./tsgf/EventEmitter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICancelableExec(extras) {
    _reporterNs.report("ICancelableExec", "./tsgf/ICancelable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchParamsFromPlayer(extras) {
    _reporterNs.report("IMatchParamsFromPlayer", "./tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchParamsFromRoomAllPlayer(extras) {
    _reporterNs.report("IMatchParamsFromRoomAllPlayer", "./tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchPlayerResultWithServer(extras) {
    _reporterNs.report("IMatchPlayerResultWithServer", "./tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchResult(extras) {
    _reporterNs.report("IMatchResult", "./tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIChangeCustomPlayerProfile(extras) {
    _reporterNs.report("IChangeCustomPlayerProfile", "./tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIChangeCustomPlayerStatus(extras) {
    _reporterNs.report("IChangeCustomPlayerStatus", "./tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIChangePlayerTeam(extras) {
    _reporterNs.report("IChangePlayerTeam", "./tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayerInfo(extras) {
    _reporterNs.report("IPlayerInfo", "./tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayerInfoPara(extras) {
    _reporterNs.report("IPlayerInfoPara", "./tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "./tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "./tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "./tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAfterFrames(extras) {
    _reporterNs.report("IAfterFrames", "./tsgf/room/IGameFrame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameSyncFrame(extras) {
    _reporterNs.report("IGameSyncFrame", "./tsgf/room/IGameFrame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayerInputOperate(extras) {
    _reporterNs.report("IPlayerInputOperate", "./tsgf/room/IGameFrame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIChangeRoomPara(extras) {
    _reporterNs.report("IChangeRoomPara", "./tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICreateRoomPara(extras) {
    _reporterNs.report("ICreateRoomPara", "./tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGetOrCreateRoomPara(extras) {
    _reporterNs.report("IGetOrCreateRoomPara", "./tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIJoinRoomPara(extras) {
    _reporterNs.report("IJoinRoomPara", "./tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomInfo(extras) {
    _reporterNs.report("IRoomInfo", "./tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomOnlineInfo(extras) {
    _reporterNs.report("IRoomOnlineInfo", "./tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomsFilterPara(extras) {
    _reporterNs.report("IRoomsFilterPara", "./tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomsFilterRes(extras) {
    _reporterNs.report("IRoomsFilterRes", "./tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRecvRoomMsg(extras) {
    _reporterNs.report("IRecvRoomMsg", "./tsgf/room/IRoomMsg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomMsg(extras) {
    _reporterNs.report("IRoomMsg", "./tsgf/room/IRoomMsg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdelayCanCancel(extras) {
    _reporterNs.report("delayCanCancel", "./tsgf/Utils", _context.meta, extras);
  }

  _export({
    RoomEvents: void 0,
    Room: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GameClient = _unresolved_2.GameClient;
    }, function (_unresolved_3) {
      EventEmitter = _unresolved_3.EventEmitter;
    }, function (_unresolved_4) {
      ErrorCodes = _unresolved_4.ErrorCodes;
      Result = _unresolved_4.Result;
    }, function (_unresolved_5) {
      delayCanCancel = _unresolved_5.delayCanCancel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d230087bUVP0JAgxmyLTJ5q", "Room", undefined);

      _export("RoomEvents", RoomEvents = class RoomEvents {
        constructor() {
          this._eventEmitter = void 0;
          this._eventEmitter = new (_crd && EventEmitter === void 0 ? (_reportPossibleCrUseOfEventEmitter({
            error: Error()
          }), EventEmitter) : EventEmitter)();
        }

        dispose() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this._eventEmitter.removeAllListeners(); //@ts-ignore


            _this._eventEmitter = undefined;
          })();
        }
        /**
         * @internal
         */


        __emitDisconnected(reason) {
          this._eventEmitter.emit('Disconnect', ...arguments);
        }
        /**
         * 彻底断开触发, 如下情况:
         * 1. 断开连接时没启用断线重连则触发
         * 2. 主动断开时触发, reason='ManualDisconnect'
         * 3. 断线重连失败并不再重连时触发, reason='ReconnectFailed'
         * 4. 认证失败时会断开连接, 同时触发, reason='AuthorizeFailed'
         * @param fn reason:断开原因
         */


        onDisconnected(fn) {
          this._eventEmitter.on('Disconnected', fn);
        }

        offDisconnected(fn) {
          this._eventEmitter.off('Disconnected', fn);
        }
        /**
         * @internal
         */


        __emitReconnectStart(currTryCount) {
          this._eventEmitter.emit('ReconnectStart', ...arguments);
        }
        /**
         * [需启用断线重连:enabledReconnect]每次开始断线重连时触发, [reconnectWaitSec]秒后开始重连
         * @param fn currTryCount: 已经重试了几次了, 首次断线重连则为0
         * */


        onReconnectStart(fn) {
          this._eventEmitter.on('ReconnectStart', fn);
        }

        offReconnectStart(fn) {
          this._eventEmitter.off('ReconnectStart', fn);
        }
        /**
         * @internal
         */


        __emitReconnectResult(succ, err) {
          this._eventEmitter.emit('ReconnectResult', ...arguments);
        }
        /**断线重连最终有结果时触发(终于连上了,或者返回不继续尝试了)*/


        onReconnectResult(fn) {
          this._eventEmitter.on('ReconnectResult', fn);
        }

        offReconnectResult(fn) {
          this._eventEmitter.off('ReconnectResult', fn);
        }
        /**
         * @internal
         */


        __emitLeaveRoom(roomInfo) {
          this._eventEmitter.emit('LeaveRoom', ...arguments);
        }
        /**当前玩家不管什么原因离开了房间(主动离开,主动解散,房间被解散等等),都会触发*/


        onLeaveRoom(fn) {
          this._eventEmitter.on('LeaveRoom', fn);
        }

        offLeaveRoom(fn) {
          this._eventEmitter.off('LeaveRoom', fn);
        }
        /**
         * @internal
         */


        __emitJoinRoom(roomInfo) {
          this._eventEmitter.emit('JoinRoom', ...arguments);
        }
        /**当前玩家加入到房间后触发*/


        onJoinRoom(fn) {
          this._eventEmitter.on('JoinRoom', fn);
        }

        offJoinRoom(fn) {
          this._eventEmitter.off('JoinRoom', fn);
        }
        /**
         * @internal
         */


        __emitRecvRoomMsg(roomMsg) {
          this._eventEmitter.emit('RecvRoomMsg', ...arguments);
        }
        /**【在房间中才能收到】当接收到房间消息时触发*/


        onRecvRoomMsg(fn) {
          this._eventEmitter.on('RecvRoomMsg', fn);
        }

        offRecvRoomMsg(fn) {
          this._eventEmitter.off('RecvRoomMsg', fn);
        }
        /**
         * @internal
         */


        __emitPlayerJoinRoom(player, roomInfo) {
          this._eventEmitter.emit('PlayerJoinRoom', ...arguments);
        }
        /**【在房间中才能收到】玩家加入当前房间（自己操作的不触发）*/


        onPlayerJoinRoom(fn) {
          this._eventEmitter.on('PlayerJoinRoom', fn);
        }

        offPlayerJoinRoom(fn) {
          this._eventEmitter.off('PlayerJoinRoom', fn);
        }
        /**
         * @internal
         */


        __emitPlayerLeaveRoom(player, roomInfo) {
          this._eventEmitter.emit('PlayerLeaveRoom', ...arguments);
        }
        /**【在房间中才能收到】玩家退出当前房间（自己操作的不触发）*/


        onPlayerLeaveRoom(fn) {
          this._eventEmitter.on('PlayerLeaveRoom', fn);
        }

        offPlayerLeaveRoom(fn) {
          this._eventEmitter.off('PlayerLeaveRoom', fn);
        }
        /**
         * @internal
         */


        __emitDismissRoom(roomInfo) {
          this._eventEmitter.emit('DismissRoom', ...arguments);
        }
        /**【在房间中才能收到】当前房间被解散（自己操作的不触发）*/


        onDismissRoom(fn) {
          this._eventEmitter.on('DismissRoom', fn);
        }

        offDismissRoom(fn) {
          this._eventEmitter.off('DismissRoom', fn);
        }
        /**
         * @internal
         */


        __emitStartFrameSync(roomInfo, startPlayer) {
          this._eventEmitter.emit('StartFrameSync', ...arguments);
        }
        /**【在房间中才能收到】房间中开始帧同步了*/


        onStartFrameSync(fn) {
          this._eventEmitter.on('StartFrameSync', fn);
        }

        offStartFrameSync(fn) {
          this._eventEmitter.off('StartFrameSync', fn);
        }
        /**
         * @internal
         */


        __emitStopFrameSync(roomInfo, stopPlayer) {
          this._eventEmitter.emit('StopFrameSync', ...arguments);
        }
        /**【在房间中才能收到】房间中停止帧同步了*/


        onStopFrameSync(fn) {
          this._eventEmitter.on('StopFrameSync', fn);
        }

        offStopFrameSync(fn) {
          this._eventEmitter.off('StopFrameSync', fn);
        }
        /**
         * @internal
         */


        __emitRecvFrame(syncFrame, dt) {
          this._eventEmitter.emit('RecvFrame', ...arguments);
        }
        /**【在房间中才能收到】房间中收到一个同步帧*/


        onRecvFrame(fn) {
          this._eventEmitter.on('RecvFrame', fn);
        }

        offRecvFrame(fn) {
          this._eventEmitter.off('RecvFrame', fn);
        }
        /**
         * @internal
         */


        __emitRequirePlayerSyncState() {
          this._eventEmitter.emit('RequirePlayerSyncState', ...arguments);
        }
        /**【在房间中才能收到】服务端要求玩家上传状态同步数据 (调用 playerSendSyncState 方法)*/


        onRequirePlayerSyncState(fn) {
          this._eventEmitter.on('RequirePlayerSyncState', fn);
        }

        offRequirePlayerSyncState(fn) {
          this._eventEmitter.off('RequirePlayerSyncState', fn);
        }
        /**
         * @internal
         */


        __emitChangePlayerNetworkState(player) {
          this._eventEmitter.emit('RequirePlayerSyncState', ...arguments);
        }
        /**【在房间中才能收到】其他玩家的网络状态变更(离线/上线)*/


        onChangePlayerNetworkState(fn) {
          this._eventEmitter.on('RequirePlayerSyncState', fn);
        }

        offChangePlayerNetworkState(fn) {
          this._eventEmitter.off('RequirePlayerSyncState', fn);
        }
        /**
         * @internal
         */


        __emitChangeCustomPlayerProfile(changeInfo) {
          this._eventEmitter.emit('ChangeCustomPlayerProfile', ...arguments);
        }
        /**【在房间中才能收到】有玩家修改了自定义属性(只要在房间,自己也会收到)*/


        onChangeCustomPlayerProfile(fn) {
          this._eventEmitter.on('ChangeCustomPlayerProfile', fn);
        }

        offChangeCustomPlayerProfile(fn) {
          this._eventEmitter.off('ChangeCustomPlayerProfile', fn);
        }
        /**
         * @internal
         */


        __emitChangeCustomPlayerStatus(changeInfo) {
          this._eventEmitter.emit('ChangeCustomPlayerStatus', ...arguments);
        }
        /**【在房间中才能收到】有玩家修改了自定义状态(只要在房间,自己也会收到)*/


        onChangeCustomPlayerStatus(fn) {
          this._eventEmitter.on('ChangeCustomPlayerStatus', fn);
        }

        offChangeCustomPlayerStatus(fn) {
          this._eventEmitter.off('ChangeCustomPlayerStatus', fn);
        }
        /**
         * @internal
         */


        __emitChangeRoom(roomInfo) {
          this._eventEmitter.emit('ChangeRoom', ...arguments);
        }
        /**【在房间中才能收到】房间信息有修改*/


        onChangeRoom(fn) {
          this._eventEmitter.on('ChangeRoom', fn);
        }

        offChangeRoom(fn) {
          this._eventEmitter.off('ChangeRoom', fn);
        }
        /**
         * @internal
         */


        __emitChangePlayerTeam(changeInfo) {
          this._eventEmitter.emit('ChangePlayerTeam', ...arguments);
        }
        /**【在房间中才能收到】有玩家修改了所在队伍(只要在房间,自己也会收到)*/


        onChangePlayerTeam(fn) {
          this._eventEmitter.on('ChangePlayerTeam', fn);
        }

        offChangePlayerTeam(fn) {
          this._eventEmitter.off('ChangePlayerTeam', fn);
        }
        /**
         * @internal
         */


        __emitRoomAllPlayersMatchStart(matchReqId, reqPlayerId, matchParams) {
          this._eventEmitter.emit('RoomAllPlayersMatchStart', ...arguments);
        }
        /**
         * 【在房间中才能收到】有玩家发起了全房间玩家匹配(自己也会收到)
         * @internal
         */


        onRoomAllPlayersMatchStart(fn) {
          this._eventEmitter.on('RoomAllPlayersMatchStart', fn);
        }
        /**
         * @internal
         */


        offRoomAllPlayersMatchStart(fn) {
          this._eventEmitter.on('RoomAllPlayersMatchStart', fn);
        }
        /**
         * @internal
         */


        __emitRoomAllPlayersMatchResult(errMsg, errCode, matchResult) {
          this._eventEmitter.emit('RoomAllPlayersMatchResult', ...arguments);
        }
        /**【在房间中才能收到】全房间玩家匹配有结果了(自己也会收到)
         * @internal
         */


        onRoomAllPlayersMatchResult(fn) {
          this._eventEmitter.on('RoomAllPlayersMatchResult', fn);
        }
        /**
         * @internal
         */


        offRoomAllPlayersMatchResult(fn) {
          this._eventEmitter.on('RoomAllPlayersMatchResult', fn);
        }

      });
      /**
       * 房间功能模块
       * 
       * [同时只能在一个房间中] 
       * 
       * 如果用了 GroupRoom , 则在相关事件中需要使用 if(GroupRoom.ins.currGroupRoom) 来判断当前是在组队房间中
       *
       */


      _export("Room", Room = class Room {
        constructor(game) {
          this._game = void 0;

          /**
           * @internal
           */
          this.__gameClient = void 0;
          this._enabledReconnect = true;
          this._reconnectWaitSec = 2;
          this._roomWaitReconnectTime = void 0;

          /**
           * 房间的所有事件
           */
          this.events = new RoomEvents();
          this._game = game;
        }

        dispose() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var _this2$__gameClient;

            yield (_this2$__gameClient = _this2.__gameClient) == null ? void 0 : _this2$__gameClient.disconnect();
            _this2.__gameClient = undefined;
            yield _this2.events.dispose(); //@ts-ignore

            _this2._game = undefined;
          })();
        }

        /**
         * 是否启用断线重连,启用则在断开后,reconnectWaitSec秒后重连
         */
        get enabledReconnect() {
          return this._enabledReconnect;
        }

        set enabledReconnect(v) {
          this._enabledReconnect = v;
          if (this.__gameClient) this.__gameClient.enabledReconnect = v;
        }

        /**
         * 断线重连等待秒数
         */
        get reconnectWaitSec() {
          return this._reconnectWaitSec;
        }

        set reconnectWaitSec(v) {
          this._reconnectWaitSec = v;
          if (this.__gameClient) this.__gameClient.reconnectWaitSec = v;
        }

        /**可设置房间中断线后等待重连的毫秒数(认证和重连时使用),默认为60000ms(60秒),设成0表示断线后直接清理(按退出房间处理)不等待重连*/
        get roomWaitReconnectTime() {
          return this._roomWaitReconnectTime;
        }

        set roomWaitReconnectTime(v) {
          this._roomWaitReconnectTime = v;
          if (this.__gameClient) this.__gameClient.roomWaitReconnectTime = v;
        }

        /**
         * 获取当前所在房间信息
        */
        get currRoomInfo() {
          var _this$__gameClient$cu, _this$__gameClient;

          return (_this$__gameClient$cu = (_this$__gameClient = this.__gameClient) == null ? void 0 : _this$__gameClient.currRoomInfo) != null ? _this$__gameClient$cu : null;
        }
        /**
         * 在房间中才有的当前玩家信息对象, 请不要保存本属性, 因为每次数据有更新都会改变引用, 请每次都读取本属性
        */


        get myPlayerInfo() {
          var _this$__gameClient$cu2, _this$__gameClient2;

          return (_this$__gameClient$cu2 = (_this$__gameClient2 = this.__gameClient) == null ? void 0 : _this$__gameClient2.currPlayerInfo) != null ? _this$__gameClient$cu2 : null;
        }
        /**将事件注册到gameClient中*/


        _setGameClientHandler() {
          if (this.__gameClient) {
            this.__gameClient.enabledReconnect = this._enabledReconnect;
            this.__gameClient.reconnectWaitSec = this._reconnectWaitSec;

            this.__gameClient.onJoinRoom = r => this.events.__emitJoinRoom(r);

            this.__gameClient.onLeaveRoom = r => this.events.__emitLeaveRoom(r);

            this.__gameClient.onDisconnected = r => this.events.__emitDisconnected(r);

            this.__gameClient.onDisconnected = r => this.events.__emitDisconnected(r);

            this.__gameClient.onReconnectStart = r => this.events.__emitReconnectStart(r);

            this.__gameClient.onReconnectResult = (r, r2) => this.events.__emitReconnectResult(r, r2);

            this.__gameClient.onRecvRoomMsg = msg => this.events.__emitRecvRoomMsg(msg);

            this.__gameClient.onPlayerJoinRoom = (r, r2) => this.events.__emitPlayerJoinRoom(r, r2);

            this.__gameClient.onPlayerLeaveRoom = (r, r2) => this.events.__emitPlayerLeaveRoom(r, r2);

            this.__gameClient.onDismissRoom = r => this.events.__emitDismissRoom(r);

            this.__gameClient.onStartFrameSync = (r, r2) => this.events.__emitStartFrameSync(r, r2);

            this.__gameClient.onStopFrameSync = (r, r2) => this.events.__emitStopFrameSync(r, r2);

            this.__gameClient.onRecvFrame = (r, r2) => this.events.__emitRecvFrame(r, r2);

            this.__gameClient.onRequirePlayerSyncState = () => this.events.__emitRequirePlayerSyncState();

            this.__gameClient.onChangePlayerNetworkState = r => this.events.__emitChangePlayerNetworkState(r);

            this.__gameClient.onChangeCustomPlayerProfile = r => this.events.__emitChangeCustomPlayerProfile(r);

            this.__gameClient.onChangeCustomPlayerStatus = r => this.events.__emitChangeCustomPlayerStatus(r);

            this.__gameClient.onChangeRoom = r => this.events.__emitChangeRoom(r);

            this.__gameClient.onChangePlayerTeam = r => this.events.__emitChangePlayerTeam(r);

            this.__gameClient.onRoomAllPlayersMatchStart = (r, r2, r3) => this.events.__emitRoomAllPlayersMatchStart(r, r2, r3);

            this.__gameClient.onRoomAllPlayersMatchResult = (r, r2, r3) => this.events.__emitRoomAllPlayersMatchResult(r, r2, r3);
          }
        }
        /**关闭和释放gameClient*/


        _disposeGameClient() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (_this3.__gameClient) {
              yield _this3.__gameClient.disconnect();
              _this3.__gameClient = undefined;
            }
          })();
        }
        /**
         * 创建gameClient并连接和认证
         * @internal
        */


        __createGameClient(gameServerUrl, playerPara) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            yield _this4._disposeGameClient();
            _this4.__gameClient = new (_crd && GameClient === void 0 ? (_reportPossibleCrUseOfGameClient({
              error: Error()
            }), GameClient) : GameClient)(gameServerUrl, _this4._game.__myPlayerToken, undefined, _this4._roomWaitReconnectTime);
            var authRet = yield _this4.__gameClient.authorize(playerPara);

            if (!authRet.succ) {
              yield _this4._disposeGameClient();
              return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).transition(authRet);
            }

            _this4._setGameClientHandler();

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildSucc(null);
          })();
        }
        /**
         * 使用当前指定的玩家id和token，进行认证并尝试恢复之前所在房间(如果玩家之前在房间中断线的该房间还保留着玩家的信息才可以恢复)
         * @param updateShowName 可同时更新玩家显示名
         */


        recoverPlayerRoom(updateShowName) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            var ret = yield _this5._game.__hallClient.recoverPlayerRoom(_this5._game.__myPlayerId, _this5._game.__myPlayerToken, updateShowName); //这一步失败，一般是认证没通过

            if (!ret.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).transition(ret); //如果不在房间中，就没必要恢复房间数据了

            var roomOnlineInfo = ret.data;

            if (!roomOnlineInfo || !roomOnlineInfo.gameServerUrl) {
              return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildErr('当前不在房间中，请到大厅操作！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).RoomNotIn);
            } //开始游戏服务器的重连操作


            yield _this5._disposeGameClient();
            _this5.__gameClient = new (_crd && GameClient === void 0 ? (_reportPossibleCrUseOfGameClient({
              error: Error()
            }), GameClient) : GameClient)(roomOnlineInfo.gameServerUrl, _this5._game.__myPlayerToken, undefined, _this5._roomWaitReconnectTime);
            var reconnectRet = yield _this5.__gameClient.reconnect();

            if (!reconnectRet.succ) {
              yield _this5._disposeGameClient();
              return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).transition(reconnectRet);
            }

            _this5._setGameClientHandler(); //成功


            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildSucc(_this5.__gameClient.currRoomInfo);
          })();
        }
        /**
         * 获取房间在线信息（不进入房间也可以获取）
         *
         * @param roomId 房间ID
         */


        getOnlineRoomInfo(roomId) {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            var ret = yield _this6._game.__hallClient.getRoomOnlineInfo(_this6._game.__myPlayerToken, roomId);
            if (!ret.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).transition(ret);
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildSucc(ret.data);
          })();
        }
        /**
         * 筛选在线房间列表（不进入房间也可以获取）
         * @param filter 
         * @param [skip] 
         * @param [limit] 
         */


        filterRooms(filter, skip, limit) {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            var ret = yield _this7._game.__hallClient.filterRooms(_this7._game.__myPlayerToken, filter, skip, limit);
            if (!ret.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).transition(ret);
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildSucc(ret.data);
          })();
        }
        /**
         * 创建一个自定义房间并进入, 成功则可使用 this.currRoomInfo 可获取当前所在的房间信息
         *
         * @param playerPara 玩家信息参数
         * @param roomPara 房间信息参数
         * @param teamId 同时加入的队伍id
         */


        createRoom(playerPara, roomPara, teamId) {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            var ret = yield _this8._game.__hallClient.createRoom(_this8._game.__myPlayerToken, roomPara);
            if (!ret.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).transition(ret);
            var createRet = yield _this8.__createGameClient(ret.data.gameServerUrl, playerPara);
            if (!createRet.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).transition(createRet);
            var joinRet = yield _this8.__gameClient.joinRoom({
              roomId: ret.data.roomId,
              teamId
            });
            if (!joinRet.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).transition(joinRet);
            return joinRet;
          })();
        }
        /**
         * Determines whether join game server room 
         * @param gameServerUrl 
         * @param playerPara 
         * @param roomId 
         * @param teamId
         * @returns  join result
         * @internal
         */


        __joinGameServerRoom(gameServerUrl, playerPara, joinRoomPara) {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            var createRet = yield _this9.__createGameClient(gameServerUrl, playerPara);
            if (!createRet.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).transition(createRet);
            var joinRet = yield _this9.__gameClient.joinRoom(joinRoomPara);
            if (!joinRet.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).transition(joinRet);
            return joinRet;
          })();
        }
        /**
         * 加入指定房间, 成功则可使用 this.currRoomInfo 可获取当前所在的房间信息
         *
         * @param playerPara 玩家信息参数
         * @param roomId 房间ID
         * @param teamId 同时加入的队伍id
         * @deprecated 本重载已弃用, 将在下个版本移除!!
         */

        /**
         * 加入指定房间, 成功则可使用 this.currRoomInfo 可获取当前所在的房间信息
         *
         * @param playerPara 玩家信息参数
         * @param joinRoomPara 加入房间参数, 根据房间的加入模式需要传入对应的数据
         */


        /**
         * 加入指定房间, 成功则可使用 this.currRoomInfo 可获取当前所在的房间信息
         *
         * @param playerPara 玩家信息参数
         * @param roomId 房间ID
         * @param teamId 同时加入的队伍id
         */
        joinRoom(playerPara, para, teamId) {
          var _this10 = this;

          return _asyncToGenerator(function* () {
            var joinRoomPara;

            if (typeof para === 'string') {
              joinRoomPara = {
                roomId: para,
                teamId
              };
            } else {
              joinRoomPara = para;
            }

            var ret = yield _this10._game.__hallClient.getRoomOnlineInfo(_this10._game.__myPlayerToken, joinRoomPara.roomId);
            if (!ret.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).transition(ret);
            return yield _this10.__joinGameServerRoom(ret.data.gameServerUrl, playerPara, joinRoomPara);
          })();
        }
        /**
         * 加入指定游戏服务器的房间, 成功则可使用 this.currRoomInfo 可获取当前所在的房间信息
         * 
         * @deprecated 本重载已弃用, 将在下个版本移除!! 请使用 joinRoom
         *
         * @param gameServerUrl 游戏服务器地址
         * @param playerPara 玩家信息参数
         * @param roomId 房间ID
         * @param teamId 同时加入的队伍id
         */

        /**
         * 加入指定游戏服务器的房间, 成功则可使用 this.currRoomInfo 可获取当前所在的房间信息
         * 
         * @deprecated 本重载已弃用, 将在下个版本移除!! 请使用 joinRoom
         *
         * @param gameServerUrl 游戏服务器地址
         * @param playerPara 玩家信息参数
         * @param para 加入房间参数|房间ID
         * @param teamId 同时加入的队伍id
         */


        /**
         * 加入指定游戏服务器的房间, 成功则可使用 this.currRoomInfo 可获取当前所在的房间信息
         * 
         * @deprecated 本重载已弃用, 将在下个版本移除!! 请使用 joinRoom
         *
         * @param gameServerUrl 游戏服务器地址
         * @param playerPara 玩家信息参数
         * @param para 加入房间参数|房间ID
         * @param teamId 同时加入的队伍id
         */
        joinRoomByServer(gameServerUrl, playerPara, para, teamId) {
          var _this11 = this;

          return _asyncToGenerator(function* () {
            var joinRoomPara;

            if (typeof para === 'string') {
              joinRoomPara = {
                roomId: para,
                teamId
              };
            } else {
              joinRoomPara = para;
            }

            return yield _this11.__joinGameServerRoom(gameServerUrl, playerPara, joinRoomPara);
          })();
        }
        /**
         * 加入或创建指定条件的房间, 服务器存在指定条件并且未满房间, 则优先加入房间, 否则创建同条件的房间, 可能存在创建失败(匹配条件的房间超过服务器限额)
         * @param playerPara 
         * @param joinRoomPara 
         * @param matchOrCreateRoomPara 
         */


        joinOrCreateRoom(playerPara, joinRoomPara, matchOrCreateRoomPara) {
          var _this12 = this;

          return _asyncToGenerator(function* () {
            var _getOrCreateRet$data$;

            var getOrCreateRet = yield _this12._game.__hallClient.getOrCreateRoom(_this12._game.__myPlayerToken, matchOrCreateRoomPara);
            if (!getOrCreateRet.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).transition(getOrCreateRet);

            if (getOrCreateRet.data.createRoomOnlineInfo) {
              // 创建了房间, 则直接进入   
              return yield _this12.__joinGameServerRoom(getOrCreateRet.data.createRoomOnlineInfo.gameServerUrl, playerPara, joinRoomPara);
            }

            if ((_getOrCreateRet$data$ = getOrCreateRet.data.matchRoomOnlineInfoList) != null && _getOrCreateRet$data$.length) {
              // 匹配到房间了, 按顺序尝试加入
              for (var room of getOrCreateRet.data.matchRoomOnlineInfoList) {
                var joinRet = yield _this12.__joinGameServerRoom(room.gameServerUrl, playerPara, joinRoomPara);
                if (joinRet.succ) return joinRet;
              } // 都失败了,则客户端自行选择创建房间!


              return yield _this12.createRoom(playerPara, matchOrCreateRoomPara.createRoomPara, joinRoomPara.teamId);
            }

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('未知错误: 没有匹配的结果类型!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).Exception);
          })();
        }
        /**
         * 退出当前房间
         * @returns  
         */


        leaveRoom() {
          var _this13 = this;

          return _asyncToGenerator(function* () {
            if (!_this13.__gameClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前不在房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
            var ret = yield _this13.__gameClient.leaveRoom();
            return ret;
          })();
        }
        /**
         * 【仅房主】解散当前房间
         * @returns  
         */


        dismissRoom() {
          var _this14 = this;

          return _asyncToGenerator(function* () {
            if (!_this14.__gameClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前不在房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
            var ret = yield _this14.__gameClient.dismissRoom();
            return ret;
          })();
        }
        /**
         * 修改房间信息(注意,只能房主操作),同时同步更新本地当前房间信息
         *
         * @param changePara
         */


        changeRoom(changePara) {
          var _this15 = this;

          return _asyncToGenerator(function* () {
            if (!_this15.__gameClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前不在房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
            var ret = yield _this15.__gameClient.changeRoom(changePara);
            return ret;
          })();
        }
        /**
         * 修改自己的玩家自定义属性,如果当前在房间中会同时会触发通知(房间中所有玩家)
         *
         * @param customPlayerProfile
         * @param [robotPlayerId] 可以指定自己的房间机器人
         */


        changeCustomPlayerProfile(customPlayerProfile, robotPlayerId) {
          var _this16 = this;

          return _asyncToGenerator(function* () {
            if (!_this16.__gameClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前不在房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
            var ret = yield _this16.__gameClient.changeCustomPlayerProfile(customPlayerProfile, robotPlayerId);
            return ret;
          })();
        }
        /**
         * 修改自己的玩家自定义状态,如果当前在房间中会同时会触发通知(房间中所有玩家)
         *
         * @param customPlayerStatus
         * @param [robotPlayerId] 可以指定自己的房间机器人
         */


        changeCustomPlayerStatus(customPlayerStatus, robotPlayerId) {
          var _this17 = this;

          return _asyncToGenerator(function* () {
            if (!_this17.__gameClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前不在房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
            var ret = yield _this17.__gameClient.changeCustomPlayerStatus(customPlayerStatus, robotPlayerId);
            return ret;
          })();
        }
        /**
         *变更自己所在队伍
         *
         * @param newTeamId 传undefined表示改为无队伍; 如果有指定队伍, 但房间不存在该队伍id, 则需要房间开启自由队伍选项
         * @param [robotPlayerId] 可以指定自己的房间机器人
         */


        changePlayerTeam(newTeamId, robotPlayerId) {
          var _this18 = this;

          return _asyncToGenerator(function* () {
            if (!_this18.__gameClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前不在房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
            var ret = yield _this18.__gameClient.changePlayerTeam(newTeamId, robotPlayerId);
            return ret;
          })();
        }
        /**
         * 发送房间消息（自定义消息），可以指定房间里的全部玩家或部分玩家或其他玩家
         *
         * @public
         * @param roomMsg 
         * @param [robotPlayerId] 可以指定自己的房间机器人
         */


        sendRoomMsg(roomMsg, robotPlayerId) {
          var _this19 = this;

          return _asyncToGenerator(function* () {
            if (!_this19.__gameClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前不在房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
            var ret = yield _this19.__gameClient.sendRoomMsg(roomMsg, robotPlayerId);
            return ret;
          })();
        }
        /**
         * 开始帧同步
         *
         * @public
         */


        startFrameSync() {
          var _this20 = this;

          return _asyncToGenerator(function* () {
            if (!_this20.__gameClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前不在房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
            var ret = yield _this20.__gameClient.startFrameSync();
            return ret;
          })();
        }
        /**
         * 停止帧同步
         *
         * @public
         */


        stopFrameSync() {
          var _this21 = this;

          return _asyncToGenerator(function* () {
            if (!_this21.__gameClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前不在房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
            var ret = yield _this21.__gameClient.stopFrameSync();
            return ret;
          })();
        }
        /**
         * 发送玩家输入帧(加入到下一帧的操作列表)
         *
         * @public
         * @param inpOperates 
         * @param [robotPlayerId] 可以指定自己的房间机器人
         */


        sendFrame(inpOperates, robotPlayerId) {
          var _this22 = this;

          return _asyncToGenerator(function* () {
            if (!_this22.__gameClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前不在房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
            var ret = yield _this22.__gameClient.playerInpFrame(inpOperates, robotPlayerId);
            return ret;
          })();
        }
        /**
         * 请求追帧数据(当前的所有帧数据[+同步状态数据])
         *
         * @public
         */


        requestAfterFrames() {
          var _this23 = this;

          return _asyncToGenerator(function* () {
            if (!_this23.__gameClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前不在房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
            var ret = yield _this23.__gameClient.requestAfterFrames();
            return ret;
          })();
        }
        /**
         * 自主请求帧数组
         *
         * @public
         * @param beginFrameIndex 起始帧索引(包含)
         * @param endFrameIndex 结束帧索引(包含)
         */


        requestFrames(beginFrameIndex, endFrameIndex) {
          var _this24 = this;

          return _asyncToGenerator(function* () {
            if (!_this24.__gameClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前不在房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
            var ret = yield _this24.__gameClient.requestFrames(beginFrameIndex, endFrameIndex);
            return ret;
          })();
        }
        /**
         * 玩家发送本地的同步状态数据(有启用状态同步的时候才可以用)
         *
         * @public
         * @param stateData
         * @param stateFrameIndex
         */


        playerSendSyncState(stateData, stateFrameIndex) {
          var _this25 = this;

          return _asyncToGenerator(function* () {
            if (!_this25.__gameClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前不在房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
            var ret = yield _this25.__gameClient.playerSendSyncState(stateData, stateFrameIndex);
            return ret;
          })();
        }
        /**
         * [在或不在房间中都可以发起匹配] 发起单独的玩家匹配, 成功则返回 [匹配请求id, 即 matchReqId] , 指定匹配结果回调来获得本次匹配请求结果
         *
         * @param matchParamsFromPlayer 匹配参数, 注意,参与匹配的这些玩家不会收到服务器通知
         * @param matchResultCallback 可指定匹配结果回调
         */


        requestMatchFromPlayers(matchParamsFromPlayer, matchResultCallback) {
          var _this26 = this;

          return _asyncToGenerator(function* () {
            return yield _this26.requestPlayersMatch(matchParamsFromPlayer, matchResultCallback).waitResult();
          })();
        }
        /**
         * [在或不在房间中都可以发起匹配] 发起单独的玩家匹配, 成功则返回 [匹配请求id, 即 matchReqId] , 指定匹配结果回调来获得本次匹配请求结果
         *
         * @param matchParamsFromPlayer 匹配参数, 注意,参与匹配的这些玩家不会收到服务器通知
         * @param matchResultCallback 可指定匹配结果回调
         */


        requestPlayersMatch(matchParamsFromPlayer, matchResultCallback) {
          var _this27 = this;

          var waitCancel = null;
          var task = new Promise( /*#__PURE__*/_asyncToGenerator(function* (res) {
            var ret = yield _this27._game.__hallClient.requestMatch(_this27._game.__myPlayerToken, matchParamsFromPlayer);

            if (!ret.succ) {
              return res(ret);
            } //成功请求匹配, 开始异步等待结果


            waitCancel = _this27._startWaitMatchResultFromPlayers(matchParamsFromPlayer, ret.data);
            waitCancel.waitResult().then(matchResultCallback); //先把请求匹配结果返回

            return res(ret);
          }));
          return {
            waitResult() {
              return task;
            },

            cancel() {
              return _asyncToGenerator(function* () {
                var _waitCancel;

                yield (_waitCancel = waitCancel) == null ? void 0 : _waitCancel.cancel();
              })();
            }

          };
        }
        /**
         * 开始等待单独的玩家匹配结果, 有结果会触发回调
         *
         * @param matchParamsFromPlayer
         * @param matchReqId 匹配请求id
         */


        _startWaitMatchResultFromPlayers(matchParamsFromPlayer, matchReqId) {
          var _matchParamsFromPlaye,
              _this28 = this;

          var timeoutTS = Date.now() + ((_matchParamsFromPlaye = matchParamsFromPlayer.matchTimeoutSec) != null ? _matchParamsFromPlaye : 60) * 1000 + 2000;
          var isCancel = false;
          var currDelayCancel = null;
          var task = new Promise( /*#__PURE__*/_asyncToGenerator(function* (res) {
            while (Date.now() < timeoutTS) {
              if (isCancel) {
                break;
              }

              currDelayCancel = (_crd && delayCanCancel === void 0 ? (_reportPossibleCrUseOfdelayCanCancel({
                error: Error()
              }), delayCanCancel) : delayCanCancel)(500);
              yield currDelayCancel.waitResult();

              if (isCancel) {
                break;
              }

              var ret = yield _this28._game.__hallClient.queryMatch(_this28._game.__myPlayerToken, matchReqId);

              if (ret) {
                return res(ret);
              }
            }

            if (isCancel) {
              res((_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildErr('匹配取消', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).MatchRequestCancelled));
            } else {
              res((_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildErr('匹配超时', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).MatchQueryTimeout));
            }
          }));
          return {
            waitResult() {
              return task;
            },

            cancel() {
              return _asyncToGenerator(function* () {
                var _currDelayCancel;

                isCancel = true;
                yield (_currDelayCancel = currDelayCancel) == null ? void 0 : _currDelayCancel.cancel();
              })();
            }

          };
        }
        /**
         * 取消单独的玩家匹配, 也会触发匹配回调. 同时因为有并发可能, 即在结果已出即将收到时,提交取消成功,但还是会触发匹配成功的回调
         *
         * @param matchReqId 匹配请求id
         */


        cancelMatchFromPlayers(matchReqId) {
          var _this29 = this;

          return _asyncToGenerator(function* () {
            var ret = yield _this29._game.__hallClient.cancelMatch(_this29._game.__myPlayerToken, matchReqId);
            return ret;
          })();
        }
        /**
         * 玩家创建房间机器人(退出房间会同步退出)
         * @param createPa 
         * @param [teamId] 
         * @returns 创建的机器人信息
         */


        createRoomRobot(createPa, teamId) {
          var _this30 = this;

          return _asyncToGenerator(function* () {
            if (!_this30.__gameClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前不在房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
            var ret = yield _this30.__gameClient.createRoomRobot(createPa, teamId);
            return ret;
          })();
        }
        /**
         * 玩家的指定房间机器人退出房间(即销毁)
         * @param robotPlayerId 
         * @returns 销毁的机器人信息
         */


        roomRobotLeave(robotPlayerId) {
          var _this31 = this;

          return _asyncToGenerator(function* () {
            if (!_this31.__gameClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前不在房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
            var ret = yield _this31.__gameClient.roomRobotLeave(robotPlayerId);
            return ret;
          })();
        }

      });

      /**单例*/
      Room.ins = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=acf4b2380f0be3214a02958003eed41a60d71a26.js.map