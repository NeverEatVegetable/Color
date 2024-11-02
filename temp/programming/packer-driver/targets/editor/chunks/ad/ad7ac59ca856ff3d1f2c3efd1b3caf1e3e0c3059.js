System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ENetworkState, ErrorCodes, Result, EPlayerInputFrameType, PlayerAuthHelper, GameRoom, GameServerAppRoomMgr, _crd;

  function _reportPossibleCrUseOfMsgPlayerInpFrame(extras) {
    _reporterNs.report("MsgPlayerInpFrame", "../shared/gameClient/protocols/MsgPlayerInpFrame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgPlayerSendSyncState(extras) {
    _reporterNs.report("MsgPlayerSendSyncState", "../shared/gameClient/protocols/MsgPlayerSendSyncState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatchRequestTerminal(extras) {
    _reporterNs.report("MatchRequestTerminal", "../shared/tsgfServer/match/MatchRequestTerminal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchParamsFromRoomAllPlayer(extras) {
    _reporterNs.report("IMatchParamsFromRoomAllPlayer", "../shared/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchResult(extras) {
    _reporterNs.report("IMatchResult", "../shared/tsgf/match/Models", _context.meta, extras);
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

  function _reportPossibleCrUseOfIChangeRoomPara(extras) {
    _reporterNs.report("IChangeRoomPara", "../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIJoinRoomPara(extras) {
    _reporterNs.report("IJoinRoomPara", "../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomInfo(extras) {
    _reporterNs.report("IRoomInfo", "../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayer(extras) {
    _reporterNs.report("IPlayer", "../shared/tsgfServer/auth/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerAuthHelper(extras) {
    _reporterNs.report("PlayerAuthHelper", "../shared/tsgfServer/auth/PlayerAuthHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConnMgr(extras) {
    _reporterNs.report("GameConnMgr", "./GameConnMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRoom(extras) {
    _reporterNs.report("GameRoom", "./GameRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMsgCall(extras) {
    _reporterNs.report("GameMsgCall", "./GameServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameWsServer(extras) {
    _reporterNs.report("GameWsServer", "./GameServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameClusterNodeClient(extras) {
    _reporterNs.report("GameClusterNodeClient", "../shared/tsgfServer/gameCluster/GameClusterNodeClient", _context.meta, extras);
  }

  _export("GameServerAppRoomMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ENetworkState = _unresolved_2.ENetworkState;
    }, function (_unresolved_3) {
      ErrorCodes = _unresolved_3.ErrorCodes;
      Result = _unresolved_3.Result;
    }, function (_unresolved_4) {
      EPlayerInputFrameType = _unresolved_4.EPlayerInputFrameType;
    }, function (_unresolved_5) {
      PlayerAuthHelper = _unresolved_5.PlayerAuthHelper;
    }, function (_unresolved_6) {
      GameRoom = _unresolved_6.GameRoom;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac354rJmQJLqJsBhQP8mEn1", "GameServerAppRoomMgr", undefined);

      _export("GameServerAppRoomMgr", GameServerAppRoomMgr = class GameServerAppRoomMgr {
        getPlayerCurrGameRoom(player) {
          if (player != null && player.authInfo.currRoomId) {
            let rooms = this.appRooms.get(player.authInfo.appId);

            if (rooms) {
              let room = rooms.get(player.authInfo.currRoomId);
              return room != null ? room : null;
            }
          }

          return null;
        }

        constructor(gameWsServer, gameConnMgr, gameClusterClient, matchReqTerminal, gameServerNodeId) {
          this.gameWsServer = void 0;
          this.gameConnMgr = void 0;
          this.appRooms = new Map();
          this.gameServerNodeId = void 0;
          this.gameClusterClient = void 0;
          this.matchReqTerminal = void 0;

          /**保留空房间的定时器,超时没来人则解散房间*/
          this.retainEmptyRoomTimeout = new Map();
          this.gameWsServer = gameWsServer;
          this.gameConnMgr = gameConnMgr;
          this.gameClusterClient = gameClusterClient;
          this.matchReqTerminal = matchReqTerminal;
          this.gameServerNodeId = gameServerNodeId;
          this.gameConnMgr.onConnDiconnect((connId, player) => {
            //掉线, 通知房间的其他玩家
            player.playerInfo.networkState = (_crd && ENetworkState === void 0 ? (_reportPossibleCrUseOfENetworkState({
              error: Error()
            }), ENetworkState) : ENetworkState).OFFLINE;
            let room = this.getPlayerCurrGameRoom(player);

            if (room) {
              room.onlinePlayerConns.removeConnection(player.playerInfo.playerId);
              room.triggerChangePlayerNetworkState(player.playerInfo); // 有在房间中, 并且有设置断线重连等待时间,则允许等待

              if (player.roomWaitReconnectTime) return true;
            } // 默认不等待重连


            return false;
          });
          this.gameConnMgr.onConnReconnect(async (conn, player) => {
            //上线, 通知房间的其他玩家
            player.playerInfo.networkState = (_crd && ENetworkState === void 0 ? (_reportPossibleCrUseOfENetworkState({
              error: Error()
            }), ENetworkState) : ENetworkState).ONLINE;
            let room = this.getPlayerCurrGameRoom(player);

            if (room) {
              await room.triggerChangePlayerNetworkState(player.playerInfo);
              room.onlinePlayerConns.addConnection(conn);
            }
          });
          this.gameConnMgr.onAuthedPlayerDisconnect((connId, player) => {
            //玩家下线了，就执行退出房间操作
            this.leaveRoom(player);
          }); //统一侦听,并将消息传递给房间对象,而不是每个房间各自注册,因为房间变动太频繁

          this.gameWsServer.listenMsg('PlayerInpFrame', call => {
            let room = this.getPlayerCurrGameRoom(call.conn.currPlayer);
            room == null || room.playerInpFrame(call.conn.currPlayer, (_crd && EPlayerInputFrameType === void 0 ? (_reportPossibleCrUseOfEPlayerInputFrameType({
              error: Error()
            }), EPlayerInputFrameType) : EPlayerInputFrameType).Operates, inpFrame => inpFrame.operates = call.msg.operates, call.msg.robotPlayerId);
          });
          this.gameWsServer.listenMsg("PlayerSendSyncState", call => {
            var _call$conn$currPlayer;

            if ((_call$conn$currPlayer = call.conn.currPlayer) != null && _call$conn$currPlayer.authInfo.currRoomId) {
              let rooms = this.appRooms.get(call.conn.currPlayer.authInfo.appId);

              if (rooms) {
                let room = rooms.get(call.conn.currPlayer.authInfo.currRoomId);

                if (room) {
                  room.game.playerSendSyncState(call.conn.currPlayer, call.msg);
                }
              }
            }
          });
        }
        /**
         * 获取应用下的房间集合
         *
         * @protected
         * @param appId
         * @returns
         */


        getRooms(appId) {
          let rooms = this.appRooms.get(appId);

          if (!rooms) {
            rooms = new Map();
            this.appRooms.set(appId, rooms);
          }

          return rooms;
        }
        /**
         * 获取或初始化房间（只要房间ID确实是分配给本游戏服务器的）
         *
         * @public
         * @param roomId
         * @returns
         */


        async getOrInitRoom(rooms, roomId) {
          if (!roomId || roomId.length > 200) return null;
          let gameRoom = rooms.get(roomId);
          if (gameRoom) return gameRoom;
          let exRet = await this.gameClusterClient.extractRoom(roomId);

          if (!exRet.succ) {
            //这里可能并发,所以回来再获取一次,因为下面到设置到字典中都没异步,单线程node来说这一步是可靠的
            gameRoom = rooms.get(roomId);
            if (gameRoom) return gameRoom;
            return null;
          }

          let roomExInfo = exRet.data;
          gameRoom = new (_crd && GameRoom === void 0 ? (_reportPossibleCrUseOfGameRoom({
            error: Error()
          }), GameRoom) : GameRoom)(roomExInfo.regInfo, roomExInfo.roomInfo, this.gameWsServer, this.gameConnMgr, this.matchReqTerminal, this.gameClusterClient);
          rooms.set(roomId, gameRoom);
          return gameRoom;
        }

        internalDismissRoom(rooms, gameRoom) {
          let hd = this.retainEmptyRoomTimeout.get(gameRoom.roomInfo.roomId);

          if (hd) {
            clearTimeout(hd);
            this.retainEmptyRoomTimeout.delete(gameRoom.roomInfo.roomId);
          }

          rooms.delete(gameRoom.roomInfo.roomId);
          gameRoom.dispose();
        }
        /**
         * 获取玩家当前所在的房间信息
         *
         * @public
         * @param player
         * @returns
         */


        async getRoomInfo(player) {
          if (!player.authInfo.currRoomId) return null;
          let rooms = this.getRooms(player.authInfo.appId);
          let gameRoom = await this.getOrInitRoom(rooms, player.authInfo.currRoomId);
          if (!gameRoom) return null;
          return gameRoom.roomInfo;
        }
        /**
         * 获取玩家当前所在的房间操作对象
         *
         * @public
         * @param player
         * @returns
         */


        async getGameRoom(player) {
          if (!player.authInfo.currRoomId) return null;
          let rooms = this.getRooms(player.authInfo.appId);
          let gameRoom = await this.getOrInitRoom(rooms, player.authInfo.currRoomId);
          if (!gameRoom) return null;
          return gameRoom;
        }
        /**
         * 玩家加入房间，会根据房间等的规则判断是否可以加入
         *
         * @public
         * @param player
         * @param roomId
         * @returns
         */


        async joinRoom(player, joinPara) {
          if (player.authInfo.currRoomId && player.authInfo.currRoomId !== joinPara.roomId) {
            //之前已经在一个房间中的话,要先退出
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('请先退出之前的房间！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNeedLeavePrevious);
          }

          let rooms = this.getRooms(player.authInfo.appId);
          let gameRoom = await this.getOrInitRoom(rooms, joinPara.roomId);

          if (!gameRoom) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('加入房间失败：不存在的房间ID！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotFound);
          }

          let ret = await gameRoom.joinRoom(player, joinPara);

          if (ret.succ) {
            //加入成功
            //清理空房间保留的定时器
            let reHd = this.retainEmptyRoomTimeout.get(gameRoom.roomInfo.roomId);

            if (reHd) {
              clearTimeout(reHd);
              this.retainEmptyRoomTimeout.delete(reHd);
            }
          }

          return ret;
        }
        /**
         * 离开玩家当前所在的房间，如果没在或者房间已经关闭则是返回失败的结果
         *
         * @public
         * @param player
         * @returns
         */


        async leaveRoom(player) {
          if (!player.authInfo.currRoomId) {
            //当前不在房间中, 直接视为成功!
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildSucc(null);
          }

          let rooms = this.getRooms(player.authInfo.appId);
          let gameRoom = rooms.get(player.authInfo.currRoomId);

          if (!gameRoom) {
            player.authInfo.currRoomId = undefined;
            player.playerInfo.teamId = undefined;
            (_crd && PlayerAuthHelper === void 0 ? (_reportPossibleCrUseOfPlayerAuthHelper({
              error: Error()
            }), PlayerAuthHelper) : PlayerAuthHelper).updatePlayerCurrRoomId(player.authInfo.playerToken, player.authInfo.currRoomId);
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr("房间已经关闭，无需退出！");
          }

          let ret = await gameRoom.leaveRoom(player);
          if (!ret.succ) return ret;

          if (gameRoom.isDismiss) {
            //玩家离开后,房间被设置为解散,则房间管理释放这个房间
            this.internalDismissRoom(rooms, gameRoom);
          } else {
            //没解散看一下是否符合解散条件
            if (gameRoom.roomInfo.playerList.length <= 0 && gameRoom.roomInfo.retainEmptyRoomTime) {
              //房间没人可以解散.但要求保留空房间,则设置定时解散
              let hd = setTimeout(() => {
                gameRoom == null || gameRoom.dismissRoom();
                if (gameRoom) this.internalDismissRoom(rooms, gameRoom);
              }, gameRoom.roomInfo.retainEmptyRoomTime);
              this.retainEmptyRoomTimeout.set(gameRoom.roomInfo.roomId, hd);
            }
          }

          return ret;
        }
        /**
         * 解散房间
         *
         * @public
         * @param player 当前玩家,也可以放空
         * @param roomId 房间ID
         * @returns
         */


        async dismissRoom(player, roomId) {
          let appId = player == null ? void 0 : player.authInfo.appId;
          let rooms;
          let gameRoom;

          if (appId) {
            // 有提供appId,直接取
            rooms = this.getRooms(appId);
            gameRoom = rooms.get(roomId);
          } else {
            //没提供大不了遍历一下应用,应用能有几个对吧
            for (const rs of this.appRooms.values()) {
              gameRoom = rs.get(roomId);

              if (gameRoom) {
                rooms = rs;
                break;
              }
            }
          }

          if (!rooms || !gameRoom) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('解散房间失败：不存在的房间ID！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotFound);
          }

          let ret = await gameRoom.dismissRoom(player);
          if (!ret.succ) return ret;
          this.internalDismissRoom(rooms, gameRoom);
          return ret;
        }
        /**
         * 玩家修改当前房间,非房主则返回失败!
         *
         * @public
         * @param player 当前玩家
         * @param changePara 要修改的信息
         * @returns
         */


        async changeCurrRoom(player, changePara) {
          let gameRoom = this.getPlayerCurrGameRoom(player);

          if (!gameRoom) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('不在房间中！');
          }

          return await gameRoom.changeRoom(player, changePara);
        }
        /**
         * 修改自己的玩家自定义属性
         *
         * @public
         * @param player 当前玩家
         * @param customPlayerProfile 新值
         * @param [robotPlayerId] 
         * @returns
         */


        async changeCustomPlayerProfile(player, customPlayerProfile, robotPlayerId) {
          let gameRoom = this.getPlayerCurrGameRoom(player);

          if (!gameRoom) {
            //不在房间,直接修改
            player.playerInfo.customPlayerProfile = customPlayerProfile;
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildSucc(player.playerInfo);
          }

          return await gameRoom.changeCustomPlayerProfile(player, customPlayerProfile, robotPlayerId);
        }
        /**
         * 修改自己的玩家自定义状态
         *
         * @public
         * @param player 当前玩家
         * @param customPlayerStatus 新值
         * @param [robotPlayerId] 可以指定自己的房间机器人
         * @returns
         */


        async changeCustomPlayerStatus(player, customPlayerStatus, robotPlayerId) {
          let gameRoom = this.getPlayerCurrGameRoom(player);

          if (!gameRoom) {
            //不在房间,直接修改
            player.playerInfo.customPlayerStatus = customPlayerStatus;
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildSucc(player.playerInfo);
          }

          return await gameRoom.changeCustomPlayerStatus(player, customPlayerStatus, robotPlayerId);
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
          let gameRoom = this.getPlayerCurrGameRoom(player);

          if (!gameRoom) {
            //不在房间
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('不在房间中！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
          }

          let ret = await gameRoom.changePlayerTeam(player, newTeamId, robotPlayerId);
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).transition(ret, () => gameRoom.roomInfo);
        }
        /**
         * 玩家创建房间机器人(退出房间会同步退出)
         * @param player 
         * @param createPa 
         * @param [teamId] 
         * @returns room robot 
         */


        async createRoomRobot(player, createPa, teamId) {
          let gameRoom = this.getPlayerCurrGameRoom(player);

          if (!gameRoom) {
            //不在房间
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('不在房间中！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
          }

          let ret = await gameRoom.createRoomRobot(player, createPa, teamId);
          return ret;
        }
        /**
         * 玩家的指定房间机器人退出房间(即销毁)
         * @param player 
         * @param robotPlayerId 
         * @returns 返回该机器人信息
         */


        async roomRobotLeave(player, robotPlayerId) {
          let gameRoom = this.getPlayerCurrGameRoom(player);

          if (!gameRoom) {
            //不在房间
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('不在房间中！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
          }

          return await gameRoom.roomRobotLeave(player, robotPlayerId);
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
          let gameRoom = this.getPlayerCurrGameRoom(player);

          if (!gameRoom) {
            //不在房间
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('不在房间中！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
          }

          let ret = await gameRoom.requestMatch(player, matchParams);
          return ret;
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
          let gameRoom = this.getPlayerCurrGameRoom(player);

          if (!gameRoom) {
            //不在房间
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('不在房间中！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
          }

          let ret = await gameRoom.cancelMatch(player);
          return ret;
        }
        /**
         * 查询匹配结果, 会等到有结果了才返回!
         * 注意: 同时只能只有一个玩家进行查询等待,一般使用通知来获取结果即可
         *
         * @param player
         * @returns
         */


        async queryMatch(player) {
          let gameRoom = this.getPlayerCurrGameRoom(player);

          if (!gameRoom) {
            //不在房间
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('不在房间中！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).RoomNotIn);
          }

          let ret = await gameRoom.queryMatch(player);
          return ret;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ad7ac59ca856ff3d1f2c3efd1b3caf1e3e0c3059.js.map