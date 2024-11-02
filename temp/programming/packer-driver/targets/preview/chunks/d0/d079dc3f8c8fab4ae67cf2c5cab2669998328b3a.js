System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, Result, arrSkipAndLimit, GameServerHelper, ERoomRegChangedType, RoomHelper, GameServerRoomMgr, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICreateRoomPara(extras) {
    _reporterNs.report("ICreateRoomPara", "../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGetOrCreateRoomPara(extras) {
    _reporterNs.report("IGetOrCreateRoomPara", "../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomInfo(extras) {
    _reporterNs.report("IRoomInfo", "../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomOnlineInfo(extras) {
    _reporterNs.report("IRoomOnlineInfo", "../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomsFilterPara(extras) {
    _reporterNs.report("IRoomsFilterPara", "../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomsFilterRes(extras) {
    _reporterNs.report("IRoomsFilterRes", "../shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfarrSkipAndLimit(extras) {
    _reporterNs.report("arrSkipAndLimit", "../shared/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameServerHelper(extras) {
    _reporterNs.report("GameServerHelper", "../shared/tsgfServer/game/GameServerHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameServerInfoInServer(extras) {
    _reporterNs.report("IGameServerInfoInServer", "../shared/tsgfServer/game/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqNodeUpdateRoom(extras) {
    _reporterNs.report("ReqNodeUpdateRoom", "../shared/tsgfServer/gameCluster/protocols/PtlNodeUpdateRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomRegInfo(extras) {
    _reporterNs.report("IRoomRegInfo", "../shared/tsgfServer/room/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfERoomRegChangedType(extras) {
    _reporterNs.report("ERoomRegChangedType", "../shared/tsgfServer/room/RoomHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomRegChanged(extras) {
    _reporterNs.report("IRoomRegChanged", "../shared/tsgfServer/room/RoomHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomHelper(extras) {
    _reporterNs.report("RoomHelper", "../shared/tsgfServer/room/RoomHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameServerClusterMgr(extras) {
    _reporterNs.report("GameServerClusterMgr", "./GameServerClusterMgr", _context.meta, extras);
  }

  _export("GameServerRoomMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ErrorCodes = _unresolved_2.ErrorCodes;
      Result = _unresolved_2.Result;
    }, function (_unresolved_3) {
      arrSkipAndLimit = _unresolved_3.arrSkipAndLimit;
    }, function (_unresolved_4) {
      GameServerHelper = _unresolved_4.GameServerHelper;
    }, function (_unresolved_5) {
      ERoomRegChangedType = _unresolved_5.ERoomRegChangedType;
      RoomHelper = _unresolved_5.RoomHelper;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e9ef2JTeLRE55Rg5RaHxkn4", "GameServerRoomMgr", undefined);

      /**游戏服务器的房间管理*/
      _export("GameServerRoomMgr", GameServerRoomMgr = class GameServerRoomMgr {
        constructor(clusterMgr) {
          this.clusterMgr = void 0;

          /**所有房间的字典*/
          this.rooms = new Map();

          /**游戏服务器下的房间集合*/
          this.serverRooms = new Map();

          /**所有等待游戏服务器提取的房间信息*/
          this.waitExtractRooms = new Map();
          this.clusterMgr = clusterMgr;
        }

        getRoomRegInfo(roomId) {
          var regInfo = this.rooms.get(roomId);
          if (!regInfo) return null;
          return regInfo;
        }

        getRoomOnlineInfo(roomId) {
          var roomRegInfo = this.rooms.get(roomId);
          if (!roomRegInfo) return null;
          return this.clusterMgr.buildRoomOnlineInfo(roomRegInfo);
        }

        createRoomByGameServer(appId, createRoomPara, allotGameServerInfo) {
          var createInfo = (_crd && RoomHelper === void 0 ? (_reportPossibleCrUseOfRoomHelper({
            error: Error()
          }), RoomHelper) : RoomHelper).buildRoomInfo(appId, allotGameServerInfo, createRoomPara);
          this.rooms.set(createInfo.regInfo.roomId, createInfo.regInfo);
          var serverRooms = this.serverRooms.get(allotGameServerInfo.serverNodeId);

          if (!serverRooms) {
            serverRooms = new Map();
            this.serverRooms.set(allotGameServerInfo.serverNodeId, serverRooms);
          }

          serverRooms.set(createInfo.regInfo.roomId, createInfo.regInfo); //将房间信息放到等待提取

          var waitExtractHd = setTimeout(() => {
            this.dismissRoom(createInfo.regInfo.roomId);
          }, 5000);
          this.waitExtractRooms.set(createInfo.regInfo.roomId, {
            roomInfo: createInfo.roomInfo,
            waitHD: waitExtractHd
          }); // 推送变更给所有侦听器

          (_crd && RoomHelper === void 0 ? (_reportPossibleCrUseOfRoomHelper({
            error: Error()
          }), RoomHelper) : RoomHelper).getRedisClient(true).then(client => {
            client.publishObject('RoomRegInfoChanged', {
              changedType: (_crd && ERoomRegChangedType === void 0 ? (_reportPossibleCrUseOfERoomRegChangedType({
                error: Error()
              }), ERoomRegChangedType) : ERoomRegChangedType).Create,
              regInfo: createInfo.regInfo
            });
          });
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(createInfo.roomOnlineInfo);
        }
        /**
         * Creates room
         * @param appId 
         * @param createRoomPara 
         * @returns room 
         */


        createRoom(appId, createRoomPara) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (createRoomPara.roomId && _this.rooms.get(createRoomPara.roomId)) {
              return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildErr('roomId已存在！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).RoomIdExists);
            }

            var allotGameServerInfo = yield _this.allotGameServer(createRoomPara);

            if (!allotGameServerInfo) {
              return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildErr('服务器爆满！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).RoomNoServerAvailable);
            }

            return _this.createRoomByGameServer(appId, createRoomPara, allotGameServerInfo);
          })();
        }
        /**
         * 让集群创建房间后，游戏服务器来提取房间信息（只能提取一次），超时未提取释放也会返回为null
         * @param roomId 
         * @returns room 
         */


        extractRoom(roomId) {
          var regInfo = this.rooms.get(roomId);
          if (!regInfo) return null;
          var waitExInfo = this.waitExtractRooms.get(roomId);
          if (!waitExInfo) return null;
          clearTimeout(waitExInfo.waitHD);
          this.waitExtractRooms.delete(roomId);
          var roomInfo = waitExInfo.roomInfo;
          return {
            regInfo,
            roomInfo
          };
        }
        /**
         * Updates room info
         * @param roomRegInfo 
         * @returns true if room info 
         */


        updateRoomInfo(updateInfo) {
          var regInfo = this.rooms.get(updateInfo.roomRegInfo.roomId);
          if (!regInfo) return false;
          Object.assign(regInfo, updateInfo.roomRegInfo); // 推送变更给所有侦听器

          (_crd && RoomHelper === void 0 ? (_reportPossibleCrUseOfRoomHelper({
            error: Error()
          }), RoomHelper) : RoomHelper).getRedisClient(true).then(client => {
            client.publishObject('RoomRegInfoChanged', {
              changedType: updateInfo.changedType,
              regInfo: regInfo,
              joinRoomPlayerId: updateInfo.playerId,
              leaveRoomPlayerId: updateInfo.playerId,
              changePlayerId: updateInfo.playerId,
              teamId: updateInfo.teamId,
              newTeamId: updateInfo.teamId,
              oldTeamId: updateInfo.oldTeamId
            });
          });
          return true;
        }
        /**
         * （清理）解散指定房间
         * @param roomId 
         * @param [clearServerRooms] 
         * @returns  
         */


        dismissRoom(roomId, clearServerRooms) {
          if (clearServerRooms === void 0) {
            clearServerRooms = true;
          }

          var regInfo = this.rooms.get(roomId);
          if (!regInfo) return null;
          this.rooms.delete(roomId);
          var waitExInfo = this.waitExtractRooms.get(roomId);

          if (waitExInfo) {
            clearTimeout(waitExInfo.waitHD);
            this.waitExtractRooms.delete(roomId);
          }

          if (clearServerRooms) {
            var serverRooms = this.serverRooms.get(regInfo.gameServerNodeId);
            if (serverRooms) serverRooms.delete(roomId);
          }

          (_crd && RoomHelper === void 0 ? (_reportPossibleCrUseOfRoomHelper({
            error: Error()
          }), RoomHelper) : RoomHelper).getRedisClient(true).then(client => {
            client.publishObject('RoomRegInfoChanged', {
              changedType: (_crd && ERoomRegChangedType === void 0 ? (_reportPossibleCrUseOfERoomRegChangedType({
                error: Error()
              }), ERoomRegChangedType) : ERoomRegChangedType).Delete,
              regInfo: regInfo
            });
          });
          return regInfo;
        }
        /**
         * （清理）解散服务器下所有房间
         * @param serverNodeId 
         * @returns  
         */


        dismissServerRooms(serverNodeId) {
          var serverRooms = this.serverRooms.get(serverNodeId);
          if (!serverRooms) return;
          this.serverRooms.delete(serverNodeId);

          for (var [roomId, regInfo] of serverRooms) {
            this.dismissRoom(roomId, false);
          }

          serverRooms.clear();
        }

        allotGameServer(createRoomPara) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var nodeInfos = _this2.clusterMgr.getNodeInfos();

            var result = yield _this2.clusterMgr.allotGameServerByInfos(nodeInfos, snid => {
              var _this2$serverRooms$ge;

              var rooms = (_this2$serverRooms$ge = _this2.serverRooms.get(snid)) == null ? void 0 : _this2$serverRooms$ge.values();
              if (!rooms) return Promise.resolve([]);
              return Promise.resolve([...rooms]);
            }, createRoomPara);
            return result;
          })();
        }
        /**
         * 按规则匹配一个服务器下的房间,没有则自动分配一个合适的服务器用来创建房间, 没有合适的返回null
         * @param getOrCreateRoomPara 指定分配规则标识, 放空则分配最少客户端的服务器
         * @returns match 开头的为匹配到的房间对应所属服务器
         */


        getOrAllotGameServer(appId, getOrCreateRoomPara) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (!getOrCreateRoomPara.matchLimitRoomCount || getOrCreateRoomPara.matchLimitRoomCount <= 0) {
              getOrCreateRoomPara.matchLimitRoomCount = 3;
            }

            var serverList = _this3.clusterMgr.getNodeInfos();

            var getServerRooms = /*#__PURE__*/function () {
              var _ref = _asyncToGenerator(function* (snid) {
                var _this3$serverRooms$ge;

                var rooms = (_this3$serverRooms$ge = _this3.serverRooms.get(snid)) == null ? void 0 : _this3$serverRooms$ge.values();
                if (!rooms) return Promise.resolve([]);
                return Promise.resolve([...rooms]);
              });

              return function getServerRooms(_x) {
                return _ref.apply(this, arguments);
              };
            }(); //先遍历看是否存在匹配的房间可用


            var matchRoomOnlineInfoList = [];

            var _loop = function* _loop(s) {
              // 检查现有房间符合规则的数量
              var rooms = yield getServerRooms(s.info.serverNodeId); // 筛选本服务器下匹配条件的房间

              var matchRooms = rooms.filter(r => {
                //满人的房间先剔除
                if (r.emptySeats <= 0) return false; //其他看筛选条件

                if (getOrCreateRoomPara.matchRoomType && getOrCreateRoomPara.createRoomPara.roomType !== r.roomType) return false;
                if (getOrCreateRoomPara.matchMaxPlayers && getOrCreateRoomPara.createRoomPara.maxPlayers !== r.maxPlayers) return false; //都符合,则匹配

                return true;
              });

              if (matchRooms.length) {
                var limit = getOrCreateRoomPara.matchLimitRoomCount - matchRoomOnlineInfoList.length;

                if (matchRooms.length > limit) {
                  matchRooms = matchRooms // 排序一下, 空位多的放前面
                  .sort((a, b) => b.emptySeats - a.emptySeats).slice(0, limit);
                }

                matchRoomOnlineInfoList.push(...matchRooms.map(r => (_crd && GameServerHelper === void 0 ? (_reportPossibleCrUseOfGameServerHelper({
                  error: Error()
                }), GameServerHelper) : GameServerHelper).buildRoomOnlineInfo(r, s.info)));

                if (matchRoomOnlineInfoList.length >= getOrCreateRoomPara.matchLimitRoomCount) {
                  //要的数量已满
                  return 1; // break
                }
              }
            };

            for (var s of serverList) {
              if (yield* _loop(s)) break;
            }

            if (matchRoomOnlineInfoList.length) {
              // 有匹配到的房间
              return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildSucc({
                matchRoomOnlineInfoList
              });
            }

            var createRet = yield _this3.createRoom(appId, getOrCreateRoomPara.createRoomPara);

            if (!createRet.succ) {
              return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).transition(createRet);
            }

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildSucc({
              createRoomOnlineInfo: createRet.data
            });
          })();
        }
        /**
         * Filters rooms by list
         * @param regInfos 
         * @param filter 
         * @param [skip] 
         * @param [limit] 
         * @returns rooms by list 
         */


        filterRoomsByList(regInfos, filter, skip, limit) {
          var matchRegInfos = [];

          for (var regInfo of regInfos) {
            if (filter.roomType !== undefined && filter.roomType !== regInfo.roomType) continue;
            if (filter.maxPlayers !== undefined && filter.maxPlayers !== regInfo.maxPlayers) continue;
            if (filter.roomNameFullMatch !== undefined && filter.roomNameFullMatch !== regInfo.roomName) continue;
            if (filter.roomNameLike !== undefined && !regInfo.roomName.includes(filter.roomNameLike)) continue;
            matchRegInfos.push(regInfo);
          }

          var rooms = (_crd && arrSkipAndLimit === void 0 ? (_reportPossibleCrUseOfarrSkipAndLimit({
            error: Error()
          }), arrSkipAndLimit) : arrSkipAndLimit)(matchRegInfos, skip, limit).map(r => this.clusterMgr.buildRoomOnlineInfo(r));
          return {
            count: matchRegInfos.length,
            rooms
          };
        }
        /**
         * Filters rooms
         * @param filter 
         * @param [skip] 
         * @param [limit] 
         * @returns rooms 
         */


        filterRooms(filter, skip, limit) {
          return this.filterRoomsByList(this.rooms.values(), filter, skip, limit);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d079dc3f8c8fab4ae67cf2c5cab2669998328b3a.js.map