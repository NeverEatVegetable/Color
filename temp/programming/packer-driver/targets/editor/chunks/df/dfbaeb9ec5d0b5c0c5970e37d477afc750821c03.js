System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, logger, EMatchFromType, ENetworkState, ErrorCodes, Result, EPlayerInputFrameType, EFrameSyncState, EPrivateRoomJoinMode, arrCount, arrGroup, arrRemoveItems, PlayerAuthHelper, ERoomRegChangedType, RoomHelper, buildPlayerRobotId, ConnectionCollection, FrameSyncGame, GameRoom, _crd;

  function _reportPossibleCrUseOfMatchRequestTerminal(extras) {
    _reporterNs.report("MatchRequestTerminal", "../shared/tsgfServer/match/MatchRequestTerminal", _context.meta, extras);
  }

  function _reportPossibleCrUseOflogger(extras) {
    _reporterNs.report("logger", "../shared/tsgf/logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEMatchFromType(extras) {
    _reporterNs.report("EMatchFromType", "../shared/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchParamsFromRoomAllPlayer(extras) {
    _reporterNs.report("IMatchParamsFromRoomAllPlayer", "../shared/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchResult(extras) {
    _reporterNs.report("IMatchResult", "../shared/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchPlayerResultWithServer(extras) {
    _reporterNs.report("IMatchPlayerResultWithServer", "../shared/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENetworkState(extras) {
    _reporterNs.report("ENetworkState", "../shared/tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayerInfo(extras) {
    _reporterNs.report("IPlayerInfo", "../shared/tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayerInfoPara(extras) {
    _reporterNs.report("IPlayerInfoPara", "../shared/tsgf/player/IPlayerInfo", _context.meta, extras);
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

  function _reportPossibleCrUseOfEPlayerInputFrameType(extras) {
    _reporterNs.report("EPlayerInputFrameType", "../shared/tsgf/room/IGameFrame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFramePlayerInput(extras) {
    _reporterNs.report("IFramePlayerInput", "../shared/tsgf/room/IGameFrame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEFrameSyncState(extras) {
    _reporterNs.report("EFrameSyncState", "../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEPrivateRoomJoinMode(extras) {
    _reporterNs.report("EPrivateRoomJoinMode", "../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIChangeRoomPara(extras) {
    _reporterNs.report("IChangeRoomPara", "../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIJoinRoomPara(extras) {
    _reporterNs.report("IJoinRoomPara", "../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomInfo(extras) {
    _reporterNs.report("IRoomInfo", "../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITeamPlayerIds(extras) {
    _reporterNs.report("ITeamPlayerIds", "../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfarrCount(extras) {
    _reporterNs.report("arrCount", "../shared/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfarrGroup(extras) {
    _reporterNs.report("arrGroup", "../shared/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfarrRemoveItems(extras) {
    _reporterNs.report("arrRemoveItems", "../shared/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayer(extras) {
    _reporterNs.report("IPlayer", "../shared/tsgfServer/auth/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerAuthHelper(extras) {
    _reporterNs.report("PlayerAuthHelper", "../shared/tsgfServer/auth/PlayerAuthHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchFromRoomAllPlayersOnServer(extras) {
    _reporterNs.report("IMatchFromRoomAllPlayersOnServer", "../shared/tsgfServer/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchRequest(extras) {
    _reporterNs.report("IMatchRequest", "../shared/tsgfServer/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomRegInfo(extras) {
    _reporterNs.report("IRoomRegInfo", "../shared/tsgfServer/room/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfERoomRegChangedType(extras) {
    _reporterNs.report("ERoomRegChangedType", "../shared/tsgfServer/room/RoomHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomHelper(extras) {
    _reporterNs.report("RoomHelper", "../shared/tsgfServer/room/RoomHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbuildPlayerRobotId(extras) {
    _reporterNs.report("buildPlayerRobotId", "../shared/tsgfServer/ServerUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConnectionCollection(extras) {
    _reporterNs.report("ConnectionCollection", "./ConnectionCollection", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFrameSyncGame(extras) {
    _reporterNs.report("FrameSyncGame", "./FrameSyncGame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConnMgr(extras) {
    _reporterNs.report("GameConnMgr", "./GameConnMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientConnection(extras) {
    _reporterNs.report("ClientConnection", "./GameServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameWsServer(extras) {
    _reporterNs.report("GameWsServer", "./GameServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameClusterNodeClient(extras) {
    _reporterNs.report("GameClusterNodeClient", "../shared/tsgfServer/gameCluster/GameClusterNodeClient", _context.meta, extras);
  }

  _export("GameRoom", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      logger = _unresolved_2.logger;
    }, function (_unresolved_3) {
      EMatchFromType = _unresolved_3.EMatchFromType;
    }, function (_unresolved_4) {
      ENetworkState = _unresolved_4.ENetworkState;
    }, function (_unresolved_5) {
      ErrorCodes = _unresolved_5.ErrorCodes;
      Result = _unresolved_5.Result;
    }, function (_unresolved_6) {
      EPlayerInputFrameType = _unresolved_6.EPlayerInputFrameType;
    }, function (_unresolved_7) {
      EFrameSyncState = _unresolved_7.EFrameSyncState;
      EPrivateRoomJoinMode = _unresolved_7.EPrivateRoomJoinMode;
    }, function (_unresolved_8) {
      arrCount = _unresolved_8.arrCount;
      arrGroup = _unresolved_8.arrGroup;
      arrRemoveItems = _unresolved_8.arrRemoveItems;
    }, function (_unresolved_9) {
      PlayerAuthHelper = _unresolved_9.PlayerAuthHelper;
    }, function (_unresolved_10) {
      ERoomRegChangedType = _unresolved_10.ERoomRegChangedType;
      RoomHelper = _unresolved_10.RoomHelper;
    }, function (_unresolved_11) {
      buildPlayerRobotId = _unresolved_11.buildPlayerRobotId;
    }, function (_unresolved_12) {
      ConnectionCollection = _unresolved_12.ConnectionCollection;
    }, function (_unresolved_13) {
      FrameSyncGame = _unresolved_13.FrameSyncGame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3c87uD2exC1YEsfq7nM4yu", "GameRoom", undefined);

      /**游戏房间操作对象*/
      _export("GameRoom", GameRoom = class GameRoom {
        constructor(roomRegInfo, roomInfo, gameWsServer, gameConnMgr, matchReqTerminal, gameClusterClient) {
          this.gameWsServer = void 0;
          this.gameConnMgr = void 0;
          this.matchReqTerminal = void 0;
          this.gameClusterClient = void 0;

          /**在线的玩家连接,连接标识使用的是玩家ID*/
          this.onlinePlayerConns = void 0;
          this.roomRegInfo = void 0;
          this.roomInfo = void 0;
          this.game = void 0;
          this.isDismiss = false;

          /**招人匹配请求id,如果开启了则有值*/
          this.joinUsMatchReqId = void 0;

          /**内部设置当房间所有玩家发起匹配的结果回调*/
          this.onRoomAllPlayersMatchResult = void 0;
          this.onRoomAllPlayersMatchResultOther = void 0;
          this.roomRegInfo = roomRegInfo;
          this.roomInfo = roomInfo;
          this.gameConnMgr = gameConnMgr;
          this.gameWsServer = gameWsServer;
          this.matchReqTerminal = matchReqTerminal;
          this.gameClusterClient = gameClusterClient;
          this.onlinePlayerConns = new (_crd && ConnectionCollection === void 0 ? (_reportPossibleCrUseOfConnectionCollection({
            error: Error()
          }), ConnectionCollection) : ConnectionCollection)(c => c.playerId);
          this.game = new (_crd && FrameSyncGame === void 0 ? (_reportPossibleCrUseOfFrameSyncGame({
            error: Error()
          }), FrameSyncGame) : FrameSyncGame)(this.roomInfo, gameWsServer, this.gameConnMgr, () => this.onlinePlayerConns.connections, roomInfo.frameRate, roomInfo.randomRequirePlayerSyncStateInvMs);
        }

        dispose() {
          //如果还没解散就释放,则先执行解散
          if (!this.isDismiss) {
            //执行实际的解散逻辑（数据操作）
            this.internalDismissRoom(); //触发事件

            this.triggerDismissRoomNotify(this.roomInfo.playerList);
          }

          this.game.dispose();
          this.onlinePlayerConns.clearAllConnections();
        }
        /**触发玩家进入房间事件的通知, 不会通知当前玩家*/


        async triggerPlayerJoinRoomNotify(joinPlayerInfo) {
          await this.gameWsServer.broadcastMsg('NotifyJoinRoom', {
            joinPlayerId: joinPlayerInfo.playerId,
            roomInfo: this.roomInfo
          }, this.onlinePlayerConns.connections.filter(c => c.playerId !== joinPlayerInfo.playerId));
        }
        /**触发玩家离开房间事件的通知, 不会通知当前玩家*/


        async triggerPlayerLeaveRoomNotify(leavePlayerInfo) {
          await this.gameWsServer.broadcastMsg('NotifyLeaveRoom', {
            leavePlayerInfo: leavePlayerInfo,
            roomInfo: this.roomInfo
          }, this.onlinePlayerConns.connections.filter(c => c.playerId !== leavePlayerInfo.playerId));
        }

        async triggerDismissRoomNotify(playerInfos) {
          let connList = [];

          for (let playerInfo of playerInfos) {
            let playerConn = this.gameConnMgr.getPlayerConn(playerInfo.playerId);
            if (!playerConn) continue;
            connList.push(playerConn);
          }

          await this.gameWsServer.broadcastMsg('NotifyDismissRoom', {
            roomInfo: this.roomInfo
          }, connList);
        }

        async triggerStartFrameSyncNotify(startPlayerInfo) {
          await this.gameWsServer.broadcastMsg('NotifyStartFrameSync', {
            startPlayerId: startPlayerInfo.playerId,
            roomInfo: this.roomInfo
          }, this.onlinePlayerConns.connections);
        }

        async triggerStopFrameSyncNotify(stopPlayerInfo) {
          await this.gameWsServer.broadcastMsg('NotifyStopFrameSync', {
            stopPlayerId: stopPlayerInfo.playerId,
            roomInfo: this.roomInfo
          }, this.onlinePlayerConns.connections);
        }

        async triggerChangePlayerNetworkState(playerInfo) {
          await this.gameWsServer.broadcastMsg('NotifyChangePlayerNetworkState', {
            roomInfo: this.roomInfo,
            changePlayerId: playerInfo.playerId,
            networkState: playerInfo.networkState
          }, this.onlinePlayerConns.connections);
        }

        async triggerChangeRoomNotify() {
          await this.gameWsServer.broadcastMsg('NotifyChangeRoom', {
            roomInfo: this.roomInfo
          }, this.onlinePlayerConns.connections);
        }

        async triggerChangeCustomPlayerStatus(playerInfo, oldVal) {
          await this.gameWsServer.broadcastMsg('NotifyChangeCustomPlayerStatus', {
            roomInfo: this.roomInfo,
            changePlayerId: playerInfo.playerId,
            customPlayerStatus: playerInfo.customPlayerStatus,
            oldCustomPlayerStatus: oldVal
          }, this.onlinePlayerConns.connections);
        }

        async triggerChangeCustomPlayerProfile(playerInfo, oldVal) {
          await this.gameWsServer.broadcastMsg('NotifyChangeCustomPlayerProfile', {
            roomInfo: this.roomInfo,
            changePlayerId: playerInfo.playerId,
            customPlayerProfile: playerInfo.customPlayerProfile,
            oldCustomPlayerProfile: oldVal
          }, this.onlinePlayerConns.connections);
        }

        async triggerChangePlayerTeam(playerInfo, oldVal) {
          await this.gameWsServer.broadcastMsg('NotifyChangePlayerTeam', {
            roomInfo: this.roomInfo,
            changePlayerId: playerInfo.playerId,
            teamId: playerInfo.customPlayerProfile,
            oldTeamId: oldVal
          }, this.onlinePlayerConns.connections);
        }
        /**自动设置(开启或停止)房间招人匹配*/


        async autoSetRoomJoinUsMatch(mustNew = false) {
          if (!this.roomInfo || this.isDismiss || this.roomInfo.isPrivate || !this.roomInfo.matcherKey || this.roomInfo.maxPlayers <= this.roomInfo.playerList.length || this.roomInfo.frameSyncState === (_crd && EFrameSyncState === void 0 ? (_reportPossibleCrUseOfEFrameSyncState({
            error: Error()
          }), EFrameSyncState) : EFrameSyncState).START) {
            //这里应该关闭匹配
            this.disabledRoomJoinUsMatch();
          } else {
            //这里应该启用招人匹配
            if (!mustNew && this.joinUsMatchReqId) {
              //已经开启则忽略
              return;
            } //请求匹配,并记录请求id


            let ret = await this.matchReqTerminal.requestMatch(this.roomRegInfo.appId, {
              matchTimeoutSec: 120,
              //最长2分钟轮询一次, 防止
              matchFromType: (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
                error: Error()
              }), EMatchFromType) : EMatchFromType).RoomJoinUs,
              matchFromInfo: {
                roomId: this.roomInfo.roomId,
                currPlayerCount: this.roomInfo.playerList.length,
                teamsPlayerIds: this.roomRegInfo.teamsPlayerIds.slice()
              },
              matcherKey: this.roomInfo.matcherKey,
              maxPlayers: this.roomInfo.maxPlayers,
              matcherParams: {}
            }, _ => {
              //到这里应该是超时, 需要轮询状态, 防止中间有错误, 服务器内存就无限挂着一个无法连接的匹配房间!
              this.autoSetRoomJoinUsMatch(true);
            }, false);

            if (!ret.succ) {
              (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                error: Error()
              }), logger) : logger).error(`GameRoom.enabledRoomJoinUsMatch.requestMatch失败:${ret.err}  roomInfo:`, this.roomInfo);
              return;
            }

            this.joinUsMatchReqId = ret.data;
          }
        }
        /**停止房间招人匹配*/


        async disabledRoomJoinUsMatch() {
          if (this.joinUsMatchReqId) {
            await this.matchReqTerminal.cancelMatch(this.roomRegInfo.appId, this.joinUsMatchReqId);
            this.joinUsMatchReqId = undefined;
          }
        }
        /**生成队伍玩家id结构*/


        buildTeamsPlayerIds(playerInfos) {
          let arr = [];
          let group = (_crd && arrGroup === void 0 ? (_reportPossibleCrUseOfarrGroup({
            error: Error()
          }), arrGroup) : arrGroup)(playerInfos, p => p.teamId);

          for (let groupList of group) {
            var _groupList$;

            arr.push({
              teamId: (_groupList$ = groupList[0]) != null ? _groupList$ : '',
              playerIds: groupList[1].map(p => p.playerId)
            });
          }

          return arr;
        }
        /**
         * [实际的数据操作] 解散房间
         *
         * @protected
         * @returns
         */


        async internalDismissRoom() {
          if (this.isDismiss) return; //删除房间注册信息, 截断后续新加入的人(存在失败的可能，集群可能先清理掉了，可以忽略)

          await this.gameClusterClient.dismissRoom(this.roomInfo.roomId); //停止游戏

          this.game.stopGame(); //如果有开启招人匹配则停止

          await this.disabledRoomJoinUsMatch(); //拷贝一份遍历,因为循环时会操作玩家数组

          const tmpArr = [...this.roomInfo.playerList];

          for (let playerInfo of tmpArr) {
            let roomPlayer = this.gameConnMgr.getPlayer(playerInfo.playerId); //机器人玩家没有连接, 忽略

            if (!roomPlayer) continue;
            await this.internalLeaveRoom(roomPlayer, false);
          }

          this.roomInfo.playerList.length = 0;
          this.isDismiss = true;
        }
        /**
         * [实际的数据操作] 玩家离开房间
         *
         * @public
         * @param player
         * @returns 返回实际离开的玩家数组(如果有会包含机器人玩家)
         */


        async internalLeaveRoom(player, canUpdateRegInfo = true) {
          var _player$roomRobotPlay;

          let teamId = player.playerInfo.teamId; //当前房间id设置为未定义

          player.authInfo.currRoomId = undefined;
          (_crd && PlayerAuthHelper === void 0 ? (_reportPossibleCrUseOfPlayerAuthHelper({
            error: Error()
          }), PlayerAuthHelper) : PlayerAuthHelper).updatePlayerCurrRoomId(player.authInfo.playerToken, player.authInfo.currRoomId);
          const leavePlayers = [];

          if ((_player$roomRobotPlay = player.roomRobotPlayers) != null && _player$roomRobotPlay.size) {
            //玩家如果有连接机器人, 则先处理退出
            player.roomRobotPlayers.forEach(robitPlayer => {
              //自己的房间机器人操作离开房间数据
              this.internalLeaveRoomData(robitPlayer);
              leavePlayers.push(robitPlayer);
            }); //清理房间机器人

            player.roomRobotPlayers.clear();
          } //自己操作离开房间数据


          this.internalLeaveRoomData(player.playerInfo);
          leavePlayers.push(player.playerInfo); //同步信息给房间注册信息

          this.roomRegInfo.teamsPlayerIds = this.buildTeamsPlayerIds(this.roomInfo.playerList);
          this.roomRegInfo.emptySeats = (_crd && RoomHelper === void 0 ? (_reportPossibleCrUseOfRoomHelper({
            error: Error()
          }), RoomHelper) : RoomHelper).getRoomEmptySeats(this.roomInfo);

          if (canUpdateRegInfo) {
            await Promise.all([this.gameClusterClient.updateRoom(this.roomRegInfo, (_crd && ERoomRegChangedType === void 0 ? (_reportPossibleCrUseOfERoomRegChangedType({
              error: Error()
            }), ERoomRegChangedType) : ERoomRegChangedType).PlayerLeaveRoom, player.playerInfo.playerId, teamId), //根据当前房间情况去自动开启或关闭招人匹配
            this.autoSetRoomJoinUsMatch()]);
          } //移除房间在线玩家连接


          this.onlinePlayerConns.removeConnection(player.playerInfo.playerId);
          return leavePlayers;
        }
        /**
         * [内部实现] 玩家退出队伍的数据操作
         * @param playerInfo 
         */


        internalPlayerLeaveTeam(playerInfo) {
          let oldTeamId = playerInfo.teamId;
          playerInfo.teamId = undefined;

          if (oldTeamId) {
            let oldTeamIndex = this.roomInfo.teamList.findIndex(t => t.id === oldTeamId);

            if (oldTeamIndex > -1) {
              //如果之前有在队伍中,需要处理
              if (this.roomInfo.freeTeamMinPlayers && this.roomInfo.freeTeamMaxPlayers) {
                //是自由队伍的房间
                if ((_crd && arrCount === void 0 ? (_reportPossibleCrUseOfarrCount({
                  error: Error()
                }), arrCount) : arrCount)(this.roomInfo.playerList, p => p.teamId === oldTeamId) <= 0) {
                  //之前队伍已经没人了,则销毁该队伍
                  (_crd && arrRemoveItems === void 0 ? (_reportPossibleCrUseOfarrRemoveItems({
                    error: Error()
                  }), arrRemoveItems) : arrRemoveItems)(this.roomInfo.teamList, t => t.id === oldTeamId);
                  this.roomInfo.teamList.splice(oldTeamIndex, 1);
                }
              }
            }
          }
        }
        /**玩家退出房间的数据操作*/


        internalLeaveRoomData(playerInfo) {
          //玩家退出队伍数据操作
          this.internalPlayerLeaveTeam(playerInfo); //移除房间的玩家列表中该玩家对象

          (_crd && arrRemoveItems === void 0 ? (_reportPossibleCrUseOfarrRemoveItems({
            error: Error()
          }), arrRemoveItems) : arrRemoveItems)(this.roomInfo.playerList, p => p.playerId === playerInfo.playerId); //离开房间了就清空当前房间控制的机器人列表(不管有没有)

          playerInfo.roomRobotIds = undefined; //玩家退出房间帧

          this.game.playerInpFrame(playerInfo, (_crd && EPlayerInputFrameType === void 0 ? (_reportPossibleCrUseOfEPlayerInputFrameType({
            error: Error()
          }), EPlayerInputFrameType) : EPlayerInputFrameType).LeaveRoom, inpFrame => inpFrame.playerInfo = playerInfo);
        }
        /**玩家加入房间的内部操作, 同时会操作连接和通知, 成功的data===true则要求直接返回(如已经在房间中)*/


        async internalJoinRoom(playerInfo, joinPara, robotOwnPlayerInfo) {
          let existsPlayerInfo = this.roomInfo.playerList.find(p => p.playerId === playerInfo.playerId);

          if (existsPlayerInfo) {
            //这个玩家已经在房间中了，直接成功！
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildSucc(true);
          }

          let playerConn;

          if (!robotOwnPlayerInfo) {
            //不是机器人,则需要处理连接
            playerConn = this.gameConnMgr.getPlayerConn(playerInfo.playerId);

            if (!playerConn) {
              return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildErr('玩家不在线！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).Exception);
            }
          } // 空位判断


          if (this.roomRegInfo.emptySeats <= 0) {
            // 但排除一种情况, 房主要进来由设置了保留空位, 则可以进!
            if (playerInfo.playerId !== this.roomInfo.ownerPlayerId || !this.roomInfo.retainOwnSeat) {
              //不是房主或者没设置给房主保留,则真满房~
              return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildErr('房间人数已满！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).RoomPlayersFull);
            }
          }

          if (this.roomInfo.isPrivate && this.roomInfo.ownerPlayerId !== playerInfo.playerId) {
            // 私有房间,且加入的不是房主, 则需要验证一波
            if (robotOwnPlayerInfo) {
              //私有房的加机器人操作必须是房主
              if (this.roomInfo.ownerPlayerId !== robotOwnPlayerInfo.playerId) {
                return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                  error: Error()
                }), Result) : Result).buildErr('房间不可加入！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                  error: Error()
                }), ErrorCodes) : ErrorCodes).RoomForbidJoin);
              }
            } else {
              //正常玩家加入私有房的限制判断
              switch (this.roomInfo.privateRoomJoinMode) {
                case (_crd && EPrivateRoomJoinMode === void 0 ? (_reportPossibleCrUseOfEPrivateRoomJoinMode({
                  error: Error()
                }), EPrivateRoomJoinMode) : EPrivateRoomJoinMode).forbidJoin:
                  //房间不可加入时
                  return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                    error: Error()
                  }), Result) : Result).buildErr('房间不可加入！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                    error: Error()
                  }), ErrorCodes) : ErrorCodes).RoomForbidJoin);

                case (_crd && EPrivateRoomJoinMode === void 0 ? (_reportPossibleCrUseOfEPrivateRoomJoinMode({
                  error: Error()
                }), EPrivateRoomJoinMode) : EPrivateRoomJoinMode).password:
                  // 密码加入则需要提供密码
                  if (!joinPara.password) {
                    return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                      error: Error()
                    }), Result) : Result).buildErr('房间需要密码！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                      error: Error()
                    }), ErrorCodes) : ErrorCodes).RoomMustPassword);
                  }

                  if (joinPara.password !== this.roomRegInfo.privateRoomPassword) {
                    return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                      error: Error()
                    }), Result) : Result).buildErr('房间密码不正确！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                      error: Error()
                    }), ErrorCodes) : ErrorCodes).RoomPasswordWrong);
                  }

                  break;
              }
            }
          }

          let changeTeamResult = await this.internalChangePlayerTeam(playerInfo, joinPara.teamId);

          if (!changeTeamResult.succ) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(changeTeamResult.err, changeTeamResult.code);
          }

          this.roomInfo.playerList.push(playerInfo);

          if (robotOwnPlayerInfo) {
            var _robotOwnPlayerInfo$r;

            //是机器人, 则需要加到玩家拥有机器人数组上
            robotOwnPlayerInfo.roomRobotIds = Array.from(new Set([...((_robotOwnPlayerInfo$r = robotOwnPlayerInfo.roomRobotIds) != null ? _robotOwnPlayerInfo$r : []), playerInfo.playerId]));
          } //加入房间先触发事件


          await this.triggerPlayerJoinRoomNotify(playerInfo);

          if (!robotOwnPlayerInfo) {
            //不是机器人,则这个时候再把连接加入
            this.onlinePlayerConns.addConnection(playerConn);
          } //再给所有人发玩家加入房间的输入帧


          this.game.playerInpFrame(playerInfo, (_crd && EPlayerInputFrameType === void 0 ? (_reportPossibleCrUseOfEPlayerInputFrameType({
            error: Error()
          }), EPlayerInputFrameType) : EPlayerInputFrameType).JoinRoom, inpFrame => inpFrame.playerInfo = playerInfo); //更新房间注册信息

          this.roomRegInfo.teamsPlayerIds = this.buildTeamsPlayerIds(this.roomInfo.playerList);
          this.roomRegInfo.emptySeats = (_crd && RoomHelper === void 0 ? (_reportPossibleCrUseOfRoomHelper({
            error: Error()
          }), RoomHelper) : RoomHelper).getRoomEmptySeats(this.roomInfo);
          await Promise.all([this.gameClusterClient.updateRoom(this.roomRegInfo, (_crd && ERoomRegChangedType === void 0 ? (_reportPossibleCrUseOfERoomRegChangedType({
            error: Error()
          }), ERoomRegChangedType) : ERoomRegChangedType).PlayerJoinRoom, playerInfo.playerId, joinPara.teamId), //根据当前房间情况去自动开启或关闭招人匹配
          this.autoSetRoomJoinUsMatch()]);
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(false);
        }
        /**内置变更玩家所在队伍, 只有实际变更了才会更新和推送, 有指定队伍会根据房间配置来初始化*/


        async internalChangePlayerTeam(playerInfo, newTeamId) {
          if (newTeamId) {
            //有指定队伍
            let team = this.roomInfo.teamList.find(t => t.id === newTeamId);

            if (!team) {
              //不存在队伍需要判断情况
              if (this.roomInfo.fixedTeamCount) {
                //又是固定队伍,所以直接返回失败!
                return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                  error: Error()
                }), Result) : Result).buildErr(`要加入的队伍id不存在[${newTeamId}]`, (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                  error: Error()
                }), ErrorCodes) : ErrorCodes).RoomTeamNotFound);
              }

              if (!this.roomInfo.freeTeamMinPlayers || !this.roomInfo.freeTeamMaxPlayers) {
                //但又没定义自由队伍的参数,所以直接返回失败!
                return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                  error: Error()
                }), Result) : Result).buildErr(`房间未定义自动创建队伍参数!`, (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                  error: Error()
                }), ErrorCodes) : ErrorCodes).RoomTeamNotFound);
              }

              team = {
                id: newTeamId,
                name: newTeamId,
                minPlayers: this.roomInfo.freeTeamMinPlayers,
                maxPlayers: this.roomInfo.freeTeamMaxPlayers
              };
            }

            if ((_crd && arrCount === void 0 ? (_reportPossibleCrUseOfarrCount({
              error: Error()
            }), arrCount) : arrCount)(this.roomInfo.playerList, p => p.teamId === newTeamId) >= team.maxPlayers) {
              return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildErr(`要加入的队伍已满!`, (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).RoomTeamPlayersFull);
            }
          }

          let oldTeamId = playerInfo.teamId;

          if (playerInfo.teamId !== newTeamId) {
            //和之前队伍不一样才需要更新和推送
            this.internalPlayerLeaveTeam(playerInfo);
            playerInfo.teamId = newTeamId;

            if (oldTeamId) {
              let oldTeamIndex = this.roomInfo.teamList.findIndex(t => t.id === oldTeamId);

              if (oldTeamIndex > -1) {
                //如果之前有在队伍中,需要处理
                if (this.roomInfo.freeTeamMinPlayers && this.roomInfo.freeTeamMaxPlayers) {
                  //是自由队伍的房间
                  if ((_crd && arrCount === void 0 ? (_reportPossibleCrUseOfarrCount({
                    error: Error()
                  }), arrCount) : arrCount)(this.roomInfo.playerList, p => p.teamId === oldTeamId) <= 0) {
                    //之前队伍已经没人了,则销毁该队伍
                    (_crd && arrRemoveItems === void 0 ? (_reportPossibleCrUseOfarrRemoveItems({
                      error: Error()
                    }), arrRemoveItems) : arrRemoveItems)(this.roomInfo.teamList, t => t.id === oldTeamId);
                    this.roomInfo.teamList.splice(oldTeamIndex, 1);
                  }
                }
              }
            }

            this.roomRegInfo.emptySeats = (_crd && RoomHelper === void 0 ? (_reportPossibleCrUseOfRoomHelper({
              error: Error()
            }), RoomHelper) : RoomHelper).getRoomEmptySeats(this.roomInfo);
            await Promise.all([this.gameClusterClient.updateRoom(this.roomRegInfo, (_crd && ERoomRegChangedType === void 0 ? (_reportPossibleCrUseOfERoomRegChangedType({
              error: Error()
            }), ERoomRegChangedType) : ERoomRegChangedType).PlayerChangeTeam, playerInfo.playerId, newTeamId, oldTeamId), this.triggerChangePlayerTeam(playerInfo, oldTeamId)]);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(null);
        }

        async intenalChangeCustomPlayerStatus(playerId, newCustomPlayerStatus) {
          let playerInfo = this.roomInfo.playerList.find(p => p.playerId === playerId);
          if (!playerInfo) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('玩家不在房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).Exception);

          if (playerInfo.customPlayerStatus !== newCustomPlayerStatus) {
            let oldVal = playerInfo.customPlayerStatus;
            playerInfo.customPlayerStatus = newCustomPlayerStatus; //无需等待通知结果,直接返回操作成功

            this.triggerChangeCustomPlayerStatus(playerInfo, oldVal);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(playerInfo);
        }

        async intenalChangeCustomPlayerProfile(playerId, newCustomPlayerProfile) {
          let playerInfo = this.roomInfo.playerList.find(p => p.playerId === playerId);
          if (!playerInfo) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('玩家不在房间中!');

          if (playerInfo.customPlayerProfile !== newCustomPlayerProfile) {
            let oldVal = playerInfo.customPlayerProfile;
            playerInfo.customPlayerProfile = newCustomPlayerProfile;
            this.triggerChangeCustomPlayerProfile(playerInfo, oldVal);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(playerInfo);
        }
        /**
         * 玩家加入房间，会根据房间等的规则判断是否可以加入
         *
         * @public
         * @param player
         * @returns
         */


        async joinRoom(player, joinPara) {
          const ret = await this.internalJoinRoom(player.playerInfo, joinPara); //加入失败,直接返回

          if (!ret.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr(ret); //加入成功并且要求直接返回成功

          if (ret.data) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(this.roomInfo); //当前玩家的数据操作

          player.authInfo.currRoomId = this.roomInfo.roomId;
          (_crd && PlayerAuthHelper === void 0 ? (_reportPossibleCrUseOfPlayerAuthHelper({
            error: Error()
          }), PlayerAuthHelper) : PlayerAuthHelper).updatePlayerCurrRoomId(player.authInfo.playerToken, player.authInfo.currRoomId);
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(this.roomInfo);
        }
        /**
         * 离开玩家当前所在的房间,如果离开后没人了,房间将被解散，返回房间是否被解散
         *
         * @public
         * @param player
         * @returns
         */


        async leaveRoom(player) {
          const leavePlayerInfos = await this.internalLeaveRoom(player);

          if (this.roomInfo.playerList.length <= 0) {
            //房间没人了
            if (!this.roomInfo.retainEmptyRoomTime) {
              //没设置保留空房间,则直接解散
              await this.internalDismissRoom();
            }
          } else {
            //还有人，才需要触发事件
            leavePlayerInfos.forEach(async playerInfo => {
              await this.triggerPlayerLeaveRoomNotify(playerInfo);
            });
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(null);
        }
        /**
         * 解散房间
         *
         * @public
         * @param player 当前玩家,如果是定时解散等没有当前玩家时,可以不传
         * @returns
         */


        async dismissRoom(player) {
          if (player && this.roomInfo.ownerPlayerId !== player.playerInfo.playerId) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('只有房主才可以解散房间！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomPermissionDenied);
          } //拷贝一份原有的玩家信息列表(排除自己)，用于做事件通知


          let notifyPlayerInfos = player ? this.roomInfo.playerList.filter(p => p.playerId !== player.playerInfo.playerId) : [...this.roomInfo.playerList]; //执行实际的解散逻辑（数据操作）

          await this.internalDismissRoom(); //触发事件(不等待)

          this.triggerDismissRoomNotify(notifyPlayerInfos);
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(this.roomInfo);
        }
        /**
         * 房主修改房间属性
         *
         * @public
         * @param player 当前玩家
         * @returns
         */


        async changeRoom(player, changePara) {
          if (this.roomInfo.ownerPlayerId !== player.playerInfo.playerId) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('只有房主才可以修改房间信息！');
          }

          let changed = false;
          let regChange = false;

          if (changePara.roomName) {
            this.roomInfo.roomName = changePara.roomName;
            this.roomRegInfo.roomName = changePara.roomName;
            changed = true;
          }

          if (typeof changePara.isPrivate !== 'undefined') {
            this.roomInfo.isPrivate = changePara.isPrivate;
            this.roomRegInfo.isPrivate = this.roomInfo.isPrivate ? 1 : 0;
            changed = true;
            regChange = true;
          }

          if (typeof changePara.privateRoomJoinMode !== 'undefined') {
            this.roomInfo.privateRoomJoinMode = changePara.privateRoomJoinMode;
            this.roomRegInfo.privateRoomJoinMode = changePara.privateRoomJoinMode;
            changed = true;
            regChange = true;
          }

          if (typeof changePara.privateRoomPassword !== 'undefined') {
            this.roomRegInfo.privateRoomPassword = changePara.privateRoomPassword;
            changed = true;
            regChange = true;
          }

          if (typeof changePara.customProperties !== 'undefined') {
            this.roomInfo.customProperties = changePara.customProperties;
            changed = true;
          }

          if (changed) {
            if (regChange) {
              await Promise.all([this.gameClusterClient.updateRoom(this.roomRegInfo, (_crd && ERoomRegChangedType === void 0 ? (_reportPossibleCrUseOfERoomRegChangedType({
                error: Error()
              }), ERoomRegChangedType) : ERoomRegChangedType).ChangeInfo)]);
            } //触发事件


            this.triggerChangeRoomNotify();
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(this.roomInfo);
        }
        /**
         *玩家修改自己的自定义状态
         *
         * @param player
         * @param newCustomPlayerStatus
         * @param [robotPlayerId] 可以指定自己的房间机器人
         * @returns
         */


        async changeCustomPlayerStatus(player, newCustomPlayerStatus, robotPlayerId) {
          let playerId;

          if (robotPlayerId) {
            if (!player.roomRobotPlayers.has(robotPlayerId)) {
              return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildErr('非可操作玩家!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).Exception);
            }

            playerId = robotPlayerId;
          } else {
            playerId = player.playerInfo.playerId;
          }

          return await this.intenalChangeCustomPlayerStatus(playerId, newCustomPlayerStatus);
        }
        /**
         *玩家修改自己的自定义属性
         *
         * @param player
         * @param newCustomPlayerProfile
         * @param [robotPlayerId] 可以指定自己的房间机器人
         * @returns
         */


        async changeCustomPlayerProfile(player, newCustomPlayerProfile, robotPlayerId) {
          let playerId;

          if (robotPlayerId) {
            if (!player.roomRobotPlayers.has(robotPlayerId)) {
              return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildErr('非可操作玩家!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).Exception);
            }

            playerId = robotPlayerId;
          } else {
            playerId = player.playerInfo.playerId;
          }

          return await this.intenalChangeCustomPlayerProfile(playerId, newCustomPlayerProfile);
        }
        /**
         *玩家修改自己所在队伍
         *
         * @param player
         * @param newTeamId
         * @param [robotPlayerId] 可以指定自己的房间机器人
         * @returns
         */


        async changePlayerTeam(player, newTeamId, robotPlayerId) {
          let playerInfo;

          if (robotPlayerId) {
            playerInfo = player.roomRobotPlayers.get(robotPlayerId);

            if (!playerInfo) {
              return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildErr('非可操作玩家!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).Exception);
            }
          } else {
            playerInfo = player.playerInfo;
          }

          let ret = await this.internalChangePlayerTeam(playerInfo, newTeamId);
          if (!ret.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr(ret.err, ret.code);
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(this.roomInfo);
        }
        /**
         * 开始游戏帧同步
         *
         * @public
         */


        async startGameFrameSync(player) {
          this.roomInfo.startGameTime = Date.now();
          this.roomInfo.frameSyncState = (_crd && EFrameSyncState === void 0 ? (_reportPossibleCrUseOfEFrameSyncState({
            error: Error()
          }), EFrameSyncState) : EFrameSyncState).START; //await等通知消息都发了,再启动游戏的帧同步

          await this.triggerStartFrameSyncNotify(player.playerInfo);
          this.game.startGame(); //根据当前房间情况去自动开启或关闭招人匹配

          await this.autoSetRoomJoinUsMatch();
        }
        /**
         * 停止游戏帧同步
         *
         * @public
         */


        async stopGameFrameSync(player) {
          this.game.stopGame();
          this.roomInfo.frameSyncState = (_crd && EFrameSyncState === void 0 ? (_reportPossibleCrUseOfEFrameSyncState({
            error: Error()
          }), EFrameSyncState) : EFrameSyncState).STOP;
          await this.triggerStopFrameSyncNotify(player.playerInfo); //根据当前房间情况去自动开启或关闭招人匹配

          await this.autoSetRoomJoinUsMatch();
        }
        /**
         * 玩家输入帧
         * @param player 
         * @param inpFrameType 
         * @param [setOthersProp] 
         * @param [robotPlayerId] 可以指定自己的房间机器人
         * @returns  
         */


        playerInpFrame(player, inpFrameType, setOthersProp, robotPlayerId) {
          let playerInfo;

          if (robotPlayerId) {
            playerInfo = player.roomRobotPlayers.get(robotPlayerId);

            if (!playerInfo) {
              return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildErr('非可操作玩家!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).Exception);
            }
          } else {
            playerInfo = player.playerInfo;
          }

          return this.game.playerInpFrame(playerInfo, inpFrameType, setOthersProp);
        }
        /**
         * 发起房间所有玩家匹配请求
         * 请求成功即返回,同时房间中的所有玩家会收到通知
         * 匹配有结果了还会收到消息通知, 并且可由一个玩家调用QueryMatch等待完整匹配结果
         *
         * @public
         * @param player
         * @param matchParams
         * @returns
         */


        async requestMatch(player, matchParams) {
          if (this.roomInfo.allPlayerMatchReqId) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前在匹配中!要重新请求必须先取消!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).MatchRequestCancelled);
          } //TODO: 发起后又加入玩家怎么算? 还是改成房间发起请求后是否停止加人? 如果停止加人是否设置一个停止原因?用于有人加入时返回消息


          if (!matchParams.matchFromInfo) matchParams.matchFromInfo = {};
          let matchReq = matchParams;
          let matchFromInfo = matchReq.matchFromInfo; //这里需要把当前房间中所有玩家id更新进去,对于服务器来说是多玩家匹配

          matchFromInfo.playerIds = this.roomInfo.playerList.map(p => p.playerId);

          this.onRoomAllPlayersMatchResult = async matchResult => {
            var _this$onRoomAllPlayer;

            this.onRoomAllPlayersMatchResult = undefined;
            this.roomInfo.allPlayerMatchReqId = undefined;

            if (matchResult.succ) {
              //匹配结果是成功的,需要通知单独通知每个玩家自己的结果
              let notifyTasks = [];

              for (let playerResult of matchResult.data.matchPlayerResults) {
                let conn = this.gameConnMgr.getPlayerConn(playerResult.playerId);
                if (!conn) continue;
                let playerMatchResult = {
                  gameServerUrl: matchResult.data.gameServerUrl,
                  roomId: matchResult.data.roomId,
                  teamId: playerResult.teamId
                };
                notifyTasks.push(conn.sendMsg('NotifyRoomAllPlayersMatchResult', {
                  roomInfo: this.roomInfo,
                  matchResult: playerMatchResult
                }));
              }

              await Promise.all(notifyTasks);
            } else {
              //匹配失败的,则结果一样,直接广播
              await this.gameWsServer.broadcastMsg('NotifyRoomAllPlayersMatchResult', {
                roomInfo: this.roomInfo,
                errMsg: matchResult.err,
                errCode: matchResult.code
              }, this.onlinePlayerConns.connections);
            }

            (_this$onRoomAllPlayer = this.onRoomAllPlayersMatchResultOther) == null || _this$onRoomAllPlayer.call(this, matchResult);
          };

          let reqRet = await this.matchReqTerminal.requestMatch(player.authInfo.appId, matchReq, async matchResult => {
            var _this$onRoomAllPlayer2;

            //匹配结果返回了(成功或失败)
            (_this$onRoomAllPlayer2 = this.onRoomAllPlayersMatchResult) == null || _this$onRoomAllPlayer2.call(this, matchResult);
          });

          if (!reqRet.succ) {
            //请求匹配失败了,直接返回失败
            return reqRet;
          }

          this.roomInfo.allPlayerMatchReqId = reqRet.data; //匹配请求正常发起了,通知相关玩家

          await this.gameWsServer.broadcastMsg('NotifyRoomAllPlayersMatchStart', {
            roomInfo: this.roomInfo,
            matchReqId: reqRet.data,
            matchParams: matchParams,
            reqPlayerId: player.playerInfo.playerId
          }, this.onlinePlayerConns.connections);
          return reqRet;
        }
        /**
         * 取消匹配请求
         * 如果提交成功, 将会由匹配服务器根据请求顺序来决定是否成功取消
         * 如果成功取消,则会触发匹配结果(通知+queryMatch),结果为"请求被取消"[code=ErrorCodes.MatchRequestCancelled]
         * 如果没取消成功,说明在取消之前,匹配服务器已经匹配完成,通知过来并发了,所以紧接着会收到成功的匹配结果(通知+queryMatch)
         *
         * @param player
         * @returns
         */


        async cancelMatch(player) {
          if (!this.roomInfo.allPlayerMatchReqId) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前房间未发起匹配!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).MatchRequestCancelled);
          }

          let reqRet = await this.matchReqTerminal.cancelMatch(player.authInfo.appId, this.roomInfo.allPlayerMatchReqId, player.playerInfo.playerId);
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).transition(reqRet, () => null);
        }
        /**
         * 查询匹配结果, 会等到有结果了才返回!
         * 注意: 同时只能只有一个玩家进行查询等待,一般使用通知来获取结果即可
         *
         * @param player
         * @returns 
         */


        async queryMatch(player) {
          if (!this.roomInfo.allPlayerMatchReqId) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前房间没发起匹配!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).MatchRequestCancelled);
          }

          if (this.onRoomAllPlayersMatchResultOther) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('同时只能一个玩家等待完整匹配结果!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).MatchRequestCancelled);
          }

          let queryTask = new Promise(async resolve => {
            let timeout = setTimeout(() => {
              var _this$onRoomAllPlayer3;

              //防止之后各种意外导致都没触发,这里保底
              (_this$onRoomAllPlayer3 = this.onRoomAllPlayersMatchResult) == null || _this$onRoomAllPlayer3.call(this, (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildErr('查询超时!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).MatchQueryTimeout));
            }, 70000);

            this.onRoomAllPlayersMatchResultOther = matchResult => {
              //防止重复触发,置空
              this.onRoomAllPlayersMatchResultOther = undefined;
              clearTimeout(timeout);
              resolve(matchResult);
            };

            let resultRet = await this.matchReqTerminal.queryMatch(player.authInfo.appId, this.roomInfo.allPlayerMatchReqId);

            if (resultRet) {
              var _this$onRoomAllPlayer4;

              //既然直接查询出结果,那么直接触发吧
              (_this$onRoomAllPlayer4 = this.onRoomAllPlayersMatchResult) == null || _this$onRoomAllPlayer4.call(this, resultRet);
            }
          });
          let queryRet = await queryTask;
          return queryRet;
        }
        /**
         * 玩家创建房间机器人(退出房间会同步退出)
         * @param player 
         * @param createPa 
         * @param [teamId] 
         * @returns room robot 
         */


        async createRoomRobot(player, createPa, teamId) {
          var _createPa$showName, _createPa$customPlaye, _createPa$customPlaye2;

          let robotInfo = {
            playerId: (_crd && buildPlayerRobotId === void 0 ? (_reportPossibleCrUseOfbuildPlayerRobotId({
              error: Error()
            }), buildPlayerRobotId) : buildPlayerRobotId)(player.playerInfo.playerId),
            showName: (_createPa$showName = createPa.showName) != null ? _createPa$showName : `${player.authInfo.showName}R${player.roomRobotPlayers.size}`,
            customPlayerStatus: (_createPa$customPlaye = createPa.customPlayerStatus) != null ? _createPa$customPlaye : 0,
            customPlayerProfile: (_createPa$customPlaye2 = createPa.customPlayerProfile) != null ? _createPa$customPlaye2 : '',
            isRobot: true,
            networkState: (_crd && ENetworkState === void 0 ? (_reportPossibleCrUseOfENetworkState({
              error: Error()
            }), ENetworkState) : ENetworkState).ONLINE
          };
          const ret = await this.internalJoinRoom(robotInfo, {
            roomId: this.roomInfo.roomId,
            teamId
          }, player.playerInfo); //加入失败,直接返回

          if (!ret.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr(ret); //机器人加入到玩家连接的房间机器人里

          player.roomRobotPlayers.set(robotInfo.playerId, robotInfo);
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(robotInfo);
        }
        /**
         * 玩家的指定房间机器人退出房间(即销毁)
         * @param player 
         * @param robotPlayerId 
         * @returns  
         */


        async roomRobotLeave(player, robotPlayerId) {
          var _player$playerInfo$ro;

          const robotInfo = player.roomRobotPlayers.get(robotPlayerId);
          if (!robotInfo) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('非可操作机器人!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).Exception);
          const teamId = robotInfo.teamId;
          this.internalLeaveRoomData(robotInfo); //移掉这个机器人

          let tmpIds = new Set([...((_player$playerInfo$ro = player.playerInfo.roomRobotIds) != null ? _player$playerInfo$ro : [])]);
          tmpIds.delete(robotPlayerId);
          player.playerInfo.roomRobotIds = Array.from(tmpIds); //通知玩家退出

          await this.triggerPlayerLeaveRoomNotify(robotInfo); //更新房间注册信息

          this.roomRegInfo.teamsPlayerIds = this.buildTeamsPlayerIds(this.roomInfo.playerList);
          this.roomRegInfo.emptySeats = (_crd && RoomHelper === void 0 ? (_reportPossibleCrUseOfRoomHelper({
            error: Error()
          }), RoomHelper) : RoomHelper).getRoomEmptySeats(this.roomInfo);
          await Promise.all([this.gameClusterClient.updateRoom(this.roomRegInfo, (_crd && ERoomRegChangedType === void 0 ? (_reportPossibleCrUseOfERoomRegChangedType({
            error: Error()
          }), ERoomRegChangedType) : ERoomRegChangedType).PlayerJoinRoom, robotPlayerId, teamId), //根据当前房间情况去自动开启或关闭招人匹配
          this.autoSetRoomJoinUsMatch()]);
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(robotInfo);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dfbaeb9ec5d0b5c0c5970e37d477afc750821c03.js.map