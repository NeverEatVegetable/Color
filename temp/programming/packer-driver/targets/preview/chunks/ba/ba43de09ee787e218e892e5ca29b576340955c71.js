System.register(["__unresolved_0", "cc", "tsrpc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ConnectionStatus, FrameSyncExecutor, EPlayerInputFrameType, FrameSyncGame, _crd;

  function _reportPossibleCrUseOfMsgNotifySyncFrame(extras) {
    _reporterNs.report("MsgNotifySyncFrame", "../shared/gameClient/protocols/MsgNotifySyncFrame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPlayerSendSyncState(extras) {
    _reporterNs.report("MsgPlayerSendSyncState", "../shared/gameClient/protocols/MsgPlayerSendSyncState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConnectionStatus(extras) {
    _reporterNs.report("ConnectionStatus", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFrameSyncExecutor(extras) {
    _reporterNs.report("FrameSyncExecutor", "./FrameSyncExecutor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientConnection(extras) {
    _reporterNs.report("ClientConnection", "./GameServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameWsServer(extras) {
    _reporterNs.report("GameWsServer", "./GameServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConnMgr(extras) {
    _reporterNs.report("GameConnMgr", "./GameConnMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomInfo(extras) {
    _reporterNs.report("IRoomInfo", "../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayer(extras) {
    _reporterNs.report("IPlayer", "../shared/tsgfServer/auth/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEPlayerInputFrameType(extras) {
    _reporterNs.report("EPlayerInputFrameType", "../shared/tsgf/room/IGameFrame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAfterFrames(extras) {
    _reporterNs.report("IAfterFrames", "../shared/tsgf/room/IGameFrame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameSyncFrame(extras) {
    _reporterNs.report("IGameSyncFrame", "../shared/tsgf/room/IGameFrame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFramePlayerInput(extras) {
    _reporterNs.report("IFramePlayerInput", "../shared/tsgf/room/IGameFrame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayerInfo(extras) {
    _reporterNs.report("IPlayerInfo", "../shared/tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  _export("FrameSyncGame", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_tsrpc) {
      ConnectionStatus = _tsrpc.ConnectionStatus;
    }, function (_unresolved_2) {
      FrameSyncExecutor = _unresolved_2.FrameSyncExecutor;
    }, function (_unresolved_3) {
      EPlayerInputFrameType = _unresolved_3.EPlayerInputFrameType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e7adINz2BKcZclOyu8d62U", "FrameSyncGame", undefined);

      /**帧同步游戏*/
      _export("FrameSyncGame", FrameSyncGame = class FrameSyncGame {
        /**是否已经开始了同步*/
        get inSync() {
          return this._inSync;
        }
        /**帧同步执行器*/


        /**当前是否在随机要求连接同步游戏状态数据到服务端*/
        get inRandomRequirePlayerSyncState() {
          return this._inRandomRequirePlayerSyncState;
        }
        /**随机要求连接同步游戏状态数据到服务端的 定时器句柄*/


        /**
         * 构造函数
         * @param syncFrameRate 同步帧率(每秒多少帧),默认每秒30帧
         * @param randomRequirePlayerSyncEnabled 是否启用随机要求玩家同步状态给服务端的功能【前提客户端要实现】,方便大大缩短追帧时间
         * @param randomRequirePlayerSyncStateInvMs 启用随机要求玩家同步状态功能的间隔
         */
        constructor(roomInfo, gameWsServer, gameConnMgr, getRoomAllPlayerConns, syncFrameRate, randomRequirePlayerSyncStateInvMs) {
          if (syncFrameRate === void 0) {
            syncFrameRate = 30;
          }

          this._inSync = false;
          this.frameSyncExecutor = void 0;
          this._inRandomRequirePlayerSyncState = false;
          this.randomRequirePlayerSyncStateHD = void 0;

          /**随机要求连接同步游戏状态数据到服务端的 定时间隔*/
          this.randomRequirePlayerSyncStateInvMs = void 0;

          /**当前要求同步状态的玩家ID,即不是所有客户端发来的同步状态都使用的*/
          this.requireSyncStatePlayerId = void 0;
          this.roomInfo = void 0;
          this.gameWsServer = void 0;
          this.gameConnMgr = void 0;
          this.getRoomAllPlayerConns = void 0;
          this.roomInfo = roomInfo;
          this.gameWsServer = gameWsServer;
          this.gameConnMgr = gameConnMgr;
          this.randomRequirePlayerSyncStateInvMs = randomRequirePlayerSyncStateInvMs;
          this.getRoomAllPlayerConns = getRoomAllPlayerConns;
          this.frameSyncExecutor = new (_crd && FrameSyncExecutor === void 0 ? (_reportPossibleCrUseOfFrameSyncExecutor({
            error: Error()
          }), FrameSyncExecutor) : FrameSyncExecutor)(msg => this.onSyncOneFrame(msg), syncFrameRate);
        }
        /**销毁游戏数据,方便快速回收*/


        dispose() {
          this.stopGame();
        }

        onSyncOneFrame(msg) {
          var playerConnList = this.getRoomAllPlayerConns();
          if (playerConnList.length <= 0) return; //广播给游戏中所有连接

          this.gameWsServer.broadcastMsg("NotifySyncFrame", msg, playerConnList);
        }
        /**
         * [同步中才有效]玩家输入操作帧
         *
         * @public
         * @param playerInfo
         * @param inpFrameType
         * @param setOthersProp 自行设置额外字段, 如帧输入类型是操作,则需要设置operates字段
         */


        playerInpFrame(playerInfo, inpFrameType, setOthersProp) {
          this.frameSyncExecutor.addPlayerInpFrame(playerInfo.playerId, inpFrameType, setOthersProp);
        }
        /**
         * 获取追帧数据(最后状态数据+追帧包)
         * @param startFrameIndex 使用指定的帧索引开始追帧. 不传则默认使用服务端状态同步所在帧索引开始,如果没有状态同步则从头开始
         */


        buildAfterFrames(startFrameIndex) {
          return this.frameSyncExecutor.buildAfterFrames(startFrameIndex);
        }
        /**
         * 请求帧数组
         *
         * @public
         * @param beginFrameIndex 起始帧索引(包含)
         * @param endFrameIndex 截止帧索引(包含)
         * @returns
         */


        requestFrames(beginFrameIndex, endFrameIndex) {
          return this.frameSyncExecutor.requestFrames(beginFrameIndex, endFrameIndex);
        }
        /**
         * 同步游戏状态数据
         * @param stateData 
         * @param stateFrameIndex 
         */


        syncStateData(stateData, stateFrameIndex) {
          this.frameSyncExecutor.syncStateData(stateData, stateFrameIndex);
        }
        /**
         * 停止随机要求连接同步游戏状态数据给服务端
         */


        stopRandomRequireConnSyncState() {
          this._inRandomRequirePlayerSyncState = false;
          clearInterval(this.randomRequirePlayerSyncStateHD);
        }
        /**
         * 开始随机要求连接同步游戏状态数据给服务端
         */


        startRandomRequireConnSyncState() {
          this.stopRandomRequireConnSyncState();

          if (this.randomRequirePlayerSyncStateInvMs) {
            this._inRandomRequirePlayerSyncState = true;
            this.randomRequirePlayerSyncStateHD = setInterval(this.onRandomRequireConnSyncState.bind(this), this.randomRequirePlayerSyncStateInvMs);
          }
        }
        /**玩家发送*/


        playerSendSyncState(player, msg) {
          var _player$playerInfo;

          if (!this._inRandomRequirePlayerSyncState) return; //必须是服务端当前指定的(信任的),否则不使用这同步数据

          if (this.requireSyncStatePlayerId !== (player == null || (_player$playerInfo = player.playerInfo) == null ? void 0 : _player$playerInfo.playerId)) return; //同步服务端状态数据

          this.frameSyncExecutor.syncStateData(msg.stateData, msg.stateFrameIndex);
        }
        /**
         * 处理随机要求连接同步游戏状态数据给服务端
         */


        onRandomRequireConnSyncState() {
          //如果当前没有连接,直接返回
          if (this.roomInfo.playerList.length <= 0) return;
          var conn;

          if (this.requireSyncStatePlayerId) {
            //已经指定过连接了,直接获取
            conn = this.gameConnMgr.getPlayerConn(this.requireSyncStatePlayerId);
          }

          if (!conn || conn.status != (_crd && ConnectionStatus === void 0 ? (_reportPossibleCrUseOfConnectionStatus({
            error: Error()
          }), ConnectionStatus) : ConnectionStatus).Opened) {
            //没指定过或者之前指定的不能用了,则重新随机一个
            var connIndex = Math.floor(Math.random() * this.roomInfo.playerList.length);
            this.requireSyncStatePlayerId = this.roomInfo.playerList[connIndex].playerId;
            conn = this.gameConnMgr.getPlayerConn(this.requireSyncStatePlayerId);
          }

          conn.sendMsg("RequirePlayerSyncState", {});
        }
        /**开始游戏,根据启用的功能,直接开始游戏服务支持*/


        startGame() {
          var _this = this;

          this.frameSyncExecutor.startSyncFrame();
          this.startRandomRequireConnSyncState();
          this._inSync = true;

          var _loop = function _loop(playerInfo) {
            _this.frameSyncExecutor.addPlayerInpFrame(playerInfo.playerId, (_crd && EPlayerInputFrameType === void 0 ? (_reportPossibleCrUseOfEPlayerInputFrameType({
              error: Error()
            }), EPlayerInputFrameType) : EPlayerInputFrameType).PlayerEnterGame, inpFrame => inpFrame.playerInfo = playerInfo);
          };

          for (var playerInfo of this.roomInfo.playerList) {
            _loop(playerInfo);
          }
        }
        /**停止游戏内相关功能,并回收或重置相关数据*/


        stopGame() {
          this._inSync = false;
          this.frameSyncExecutor.stopSyncFrame();
          this.stopRandomRequireConnSyncState();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ba43de09ee787e218e892e5ca29b576340955c71.js.map