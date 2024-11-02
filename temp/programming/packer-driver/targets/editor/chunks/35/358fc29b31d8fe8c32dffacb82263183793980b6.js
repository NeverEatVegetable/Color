System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EFrameSyncState, EPrivateRoomJoinMode, ERoomCreateType, GameServerHelper, buildGuid, RoomHelper, _crd, ERoomRegChangedType;

  function _reportPossibleCrUseOfIGameServerInfo(extras) {
    _reporterNs.report("IGameServerInfo", "../../hallClient/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICancelable(extras) {
    _reporterNs.report("ICancelable", "../../tsgf/ICancelable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEFrameSyncState(extras) {
    _reporterNs.report("EFrameSyncState", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEPrivateRoomJoinMode(extras) {
    _reporterNs.report("EPrivateRoomJoinMode", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfERoomCreateType(extras) {
    _reporterNs.report("ERoomCreateType", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICreateRoomPara(extras) {
    _reporterNs.report("ICreateRoomPara", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomInfo(extras) {
    _reporterNs.report("IRoomInfo", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomOnlineInfo(extras) {
    _reporterNs.report("IRoomOnlineInfo", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITeamInfo(extras) {
    _reporterNs.report("ITeamInfo", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameServerHelper(extras) {
    _reporterNs.report("GameServerHelper", "../game/GameServerHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRedisClient(extras) {
    _reporterNs.report("IRedisClient", "../redisHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbuildGuid(extras) {
    _reporterNs.report("buildGuid", "../ServerUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomRegInfo(extras) {
    _reporterNs.report("IRoomRegInfo", "./Models", _context.meta, extras);
  }

  _export("RoomHelper", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EFrameSyncState = _unresolved_2.EFrameSyncState;
      EPrivateRoomJoinMode = _unresolved_2.EPrivateRoomJoinMode;
      ERoomCreateType = _unresolved_2.ERoomCreateType;
    }, function (_unresolved_3) {
      GameServerHelper = _unresolved_3.GameServerHelper;
    }, function (_unresolved_4) {
      buildGuid = _unresolved_4.buildGuid;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "23669dQH7ZGeYVUTa22lTaD", "RoomHelper", undefined);

      /**房间注册信息和房间信息的结合体*/

      /*
      export interface IRoomRegChanged {
          regInfo: IRoomGameServerRegInfo;
          isCreateOrChange: boolean;
          isDelete: boolean;
      }
      */
      _export("ERoomRegChangedType", ERoomRegChangedType = /*#__PURE__*/function (ERoomRegChangedType) {
        ERoomRegChangedType[ERoomRegChangedType["Create"] = 1] = "Create";
        ERoomRegChangedType[ERoomRegChangedType["Delete"] = 2] = "Delete";
        ERoomRegChangedType[ERoomRegChangedType["PlayerJoinRoom"] = 3] = "PlayerJoinRoom";
        ERoomRegChangedType[ERoomRegChangedType["PlayerLeaveRoom"] = 4] = "PlayerLeaveRoom";
        ERoomRegChangedType[ERoomRegChangedType["PlayerChangeTeam"] = 5] = "PlayerChangeTeam";
        ERoomRegChangedType[ERoomRegChangedType["ChangeInfo"] = 6] = "ChangeInfo";
        return ERoomRegChangedType;
      }({}));

      /**房间公共操作（跨服务器）*/
      _export("RoomHelper", RoomHelper = class RoomHelper {
        static init(getRedisClient) {
          RoomHelper.getRedisClient = getRedisClient;
        }
        /**
         * 构建创建房间的相关信息（房间注册信息和初始的房间信息）
         *
         * @public
         * @param appId
         * @param gameServerNodeId
         * @param para
         * @returns
         */


        static buildRoomInfo(appId, gameServerInfo, para) {
          var _fixedTeamList, _fixedTeamList2, _para$retainOwnSeat;

          let roomId = para.roomId || (_crd && buildGuid === void 0 ? (_reportPossibleCrUseOfbuildGuid({
            error: Error()
          }), buildGuid) : buildGuid)('Room_');
          let fixedTeamList = null;

          if (para.fixedTeamInfoList && para.fixedTeamInfoList.length) {
            //指定的队伍信息列表
            fixedTeamList = para.fixedTeamInfoList;
          } else if (para.fixedTeamCount) {
            //指定固定的队伍数量来生成
            fixedTeamList = [];

            for (let i = 0; i < para.fixedTeamCount; i++) {
              var _para$fixedTeamMinPla, _para$fixedTeamMaxPla;

              let id = (i + 1).toString();
              fixedTeamList.push({
                id: (i + 1).toString(),
                name: '队伍' + id,
                minPlayers: (_para$fixedTeamMinPla = para.fixedTeamMinPlayers) != null ? _para$fixedTeamMinPla : 1,
                maxPlayers: (_para$fixedTeamMaxPla = para.fixedTeamMaxPlayers) != null ? _para$fixedTeamMaxPla : para.maxPlayers
              });
            }
          }

          let regInfo = {
            appId: appId,
            roomId: roomId,
            roomName: para.roomName,
            roomType: para.roomType,
            maxPlayers: para.maxPlayers,
            emptySeats: para.maxPlayers,
            expireTime: 0,
            ownerPlayerId: para.ownerPlayerId,
            gameServerNodeId: gameServerInfo.serverNodeId,
            createTime: Date.now(),
            teamsPlayerIds: [],
            isPrivate: para.isPrivate ? 1 : 0
          };
          let roomInfo = {
            roomId: roomId,
            roomName: para.roomName,
            roomType: para.roomType,
            createType: (_crd && ERoomCreateType === void 0 ? (_reportPossibleCrUseOfERoomCreateType({
              error: Error()
            }), ERoomCreateType) : ERoomCreateType).COMMON_CREATE,
            maxPlayers: para.maxPlayers,
            customProperties: para.customProperties,
            ownerPlayerId: para.ownerPlayerId,
            isPrivate: para.isPrivate,
            matcherKey: para.matcherKey,
            playerList: [],
            teamList: (_fixedTeamList = fixedTeamList) != null ? _fixedTeamList : [],
            fixedTeamCount: (_fixedTeamList2 = fixedTeamList) == null ? void 0 : _fixedTeamList2.length,
            freeTeamMinPlayers: para.freeTeamMinPlayers,
            freeTeamMaxPlayers: para.freeTeamMaxPlayers,
            frameRate: 30,
            frameSyncState: (_crd && EFrameSyncState === void 0 ? (_reportPossibleCrUseOfEFrameSyncState({
              error: Error()
            }), EFrameSyncState) : EFrameSyncState).STOP,
            createTime: Date.now(),
            startGameTime: 0,
            retainEmptyRoomTime: para.retainEmptyRoomTime,
            retainOwnSeat: (_para$retainOwnSeat = para.retainOwnSeat) != null ? _para$retainOwnSeat : false,
            randomRequirePlayerSyncStateInvMs: para.randomRequirePlayerSyncStateInvMs
          };

          if (para.isPrivate) {
            // 私有房间, 先默认房间id可加入的模式
            roomInfo.privateRoomJoinMode = (_crd && EPrivateRoomJoinMode === void 0 ? (_reportPossibleCrUseOfEPrivateRoomJoinMode({
              error: Error()
            }), EPrivateRoomJoinMode) : EPrivateRoomJoinMode).roomIdJoin;
            regInfo.privateRoomJoinMode = (_crd && EPrivateRoomJoinMode === void 0 ? (_reportPossibleCrUseOfEPrivateRoomJoinMode({
              error: Error()
            }), EPrivateRoomJoinMode) : EPrivateRoomJoinMode).roomIdJoin;

            if (para.privateRoomJoinMode === (_crd && EPrivateRoomJoinMode === void 0 ? (_reportPossibleCrUseOfEPrivateRoomJoinMode({
              error: Error()
            }), EPrivateRoomJoinMode) : EPrivateRoomJoinMode).password && para.privateRoomPassword) {
              // 有指定密码
              roomInfo.privateRoomJoinMode = (_crd && EPrivateRoomJoinMode === void 0 ? (_reportPossibleCrUseOfEPrivateRoomJoinMode({
                error: Error()
              }), EPrivateRoomJoinMode) : EPrivateRoomJoinMode).password;
              regInfo.privateRoomJoinMode = (_crd && EPrivateRoomJoinMode === void 0 ? (_reportPossibleCrUseOfEPrivateRoomJoinMode({
                error: Error()
              }), EPrivateRoomJoinMode) : EPrivateRoomJoinMode).password;
              regInfo.privateRoomPassword = para.privateRoomPassword;
            }
          }

          let roomOnlineInfo = (_crd && GameServerHelper === void 0 ? (_reportPossibleCrUseOfGameServerHelper({
            error: Error()
          }), GameServerHelper) : GameServerHelper).buildRoomOnlineInfo(regInfo, gameServerInfo);
          return {
            regInfo,
            roomInfo,
            roomOnlineInfo
          };
        }
        /**
         * 开始侦听全局的房间注册信息变更事件(跨服务器), 返回取消侦听的对象,需要自行保存!
         *
         * @deprecated 准备废弃！
         * @public
         * @param listen
         * @returns
         */


        static async startListenRoomRegInfoChanged(listen) {
          let subscribeClient = await this.getRedisClient(false);
          await subscribeClient.subscribeObject("RoomRegInfoChanged", listen);
          return {
            async cancel() {
              await subscribeClient.disconnect();
            }

          };
        }
        /**
         * 根据房间情况，算出剩余空位数返回
         * @param roomInfo 
         * @returns room empty seats 
         */


        static getRoomEmptySeats(roomInfo) {
          let v = roomInfo.maxPlayers - roomInfo.playerList.length;

          if (roomInfo.ownerPlayerId && roomInfo.retainOwnSeat && !roomInfo.playerList.find(p => p.playerId === roomInfo.ownerPlayerId)) {
            v--;
          }

          return v;
        }

      });

      RoomHelper.getRedisClient = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=358fc29b31d8fe8c32dffacb82263183793980b6.js.map