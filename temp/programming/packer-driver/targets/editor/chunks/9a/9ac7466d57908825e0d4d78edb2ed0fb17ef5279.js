System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Game, EMatchFromType, ErrorCodes, Result, logger, Factory, EventEmitter, GroupRoomEvents, GroupRoom, _crd;

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "./Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoom(extras) {
    _reporterNs.report("Room", "./Room", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomEvents(extras) {
    _reporterNs.report("RoomEvents", "./Room", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEMatchFromType(extras) {
    _reporterNs.report("EMatchFromType", "./tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchParamsBase(extras) {
    _reporterNs.report("IMatchParamsBase", "./tsgf/match/Models", _context.meta, extras);
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

  function _reportPossibleCrUseOfICreateRoomPara(extras) {
    _reporterNs.report("ICreateRoomPara", "./tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomInfo(extras) {
    _reporterNs.report("IRoomInfo", "./tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOflogger(extras) {
    _reporterNs.report("logger", "./tsgf/logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFactory(extras) {
    _reporterNs.report("Factory", "./Factory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRecvRoomMsg(extras) {
    _reporterNs.report("IRecvRoomMsg", "./tsgf/room/IRoomMsg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomMsg(extras) {
    _reporterNs.report("IRoomMsg", "./tsgf/room/IRoomMsg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventEmitter(extras) {
    _reporterNs.report("EventEmitter", "./tsgf/EventEmitter", _context.meta, extras);
  }

  _export({
    GroupRoomEvents: void 0,
    GroupRoom: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Game = _unresolved_2.Game;
    }, function (_unresolved_3) {
      EMatchFromType = _unresolved_3.EMatchFromType;
    }, function (_unresolved_4) {
      ErrorCodes = _unresolved_4.ErrorCodes;
      Result = _unresolved_4.Result;
    }, function (_unresolved_5) {
      logger = _unresolved_5.logger;
    }, function (_unresolved_6) {
      Factory = _unresolved_6.Factory;
    }, function (_unresolved_7) {
      EventEmitter = _unresolved_7.EventEmitter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca652yx8txEVYEMo/U0wk7H", "GroupRoom", undefined);

      _export("GroupRoomEvents", GroupRoomEvents = class GroupRoomEvents {
        /**
         */
        constructor() {
          this.eventEmitter = void 0;
          this.eventEmitter = new (_crd && EventEmitter === void 0 ? (_reportPossibleCrUseOfEventEmitter({
            error: Error()
          }), EventEmitter) : EventEmitter)();
        }

        dispose() {
          this.eventEmitter.removeAllListeners();
        }
        /**
         * @internal
         */


        __emitLeaveGroup(roomInfo) {
          this.eventEmitter.emit('LeaveGroup', ...arguments);
        }
        /**当前玩家不管什么原因离开了组队(主动离开,主动解散,房间被解散等等),都会触发*/


        onLeaveGroup(fn) {
          this.eventEmitter.on('LeaveGroup', fn);
        }

        offLeaveGroup(fn) {
          this.eventEmitter.off('LeaveGroup', fn);
        }
        /**
         * @internal
         */


        __emitJoinGroup(roomInfo) {
          this.eventEmitter.emit('JoinGroup', ...arguments);
        }
        /**当前玩家加入到组队后触发*/


        onJoinGroup(fn) {
          this.eventEmitter.on('JoinGroup', fn);
        }

        offJoinGroup(fn) {
          this.eventEmitter.off('JoinGroup', fn);
        }
        /**
         * @internal
         */


        __emitGroupMatchStart(matchReqId, reqPlayerId, matchParams) {
          this.eventEmitter.emit('GroupMatchStart', ...arguments);
        }
        /**
         * 组队发起了匹配时触发
         * @param fn 
         */


        onGroupMatchStart(fn) {
          this.eventEmitter.on('GroupMatchStart', fn);
        }

        offGroupMatchStart(fn) {
          this.eventEmitter.off('GroupMatchStart', fn);
        }
        /**
         * @internal
         */


        __emitGroupMatchResult(errMsg, errCode, matchResult) {
          this.eventEmitter.emit('GroupMatchResult', ...arguments);
        }
        /**
         * 组队匹配有结果了触发
         * 
         * 注意: 如果是成功的, 则会自动进入房间 (事件: onGroupMatchEnterRoom )
         * @param fn 
         */


        onGroupMatchResult(fn) {
          this.eventEmitter.on('GroupMatchResult', fn);
        }

        offGroupMatchResult(fn) {
          this.eventEmitter.off('GroupMatchResult', fn);
        }
        /**
         * @internal
         */


        __emitGroupMatchEnterRoom(result) {
          this.eventEmitter.emit('GroupMatchEnterRoom', ...arguments);
        }
        /**
         * 当组队匹配成功并进入房间后触发
         * 
         * 如果进入匹配房间失败了就会再尝试回到组队, 可以使用 this.currGroupRoom 来判断是否成功回到组队房间
         * 
         * @param fn result.data === Room.ins.currRoomInfo
         */


        onGroupMatchEnterRoom(fn) {
          this.eventEmitter.on('GroupMatchEnterRoom', fn);
        }

        offGroupMatchEnterRoom(fn) {
          this.eventEmitter.off('GroupMatchEnterRoom', fn);
        }
        /**
         * @internal
         */


        __emitPlayerJoinGroup(player, roomInfo) {
          this.eventEmitter.emit('PlayerJoinGroup', ...arguments);
        }
        /**玩家加入当前组队（自己操作的不触发）*/


        onPlayerJoinGroup(fn) {
          this.eventEmitter.on('PlayerJoinGroup', fn);
        }

        offPlayerJoinGroup(fn) {
          this.eventEmitter.off('PlayerJoinGroup', fn);
        }
        /**
         * @internal
         */


        __emitPlayerLeaveGroup(player, roomInfo) {
          this.eventEmitter.emit('PlayerLeaveGroup', ...arguments);
        }
        /**玩家退出当前组队（自己操作的不触发）*/


        onPlayerLeaveGroup(fn) {
          this.eventEmitter.on('PlayerLeaveGroup', fn);
        }

        offPlayerLeaveGroup(fn) {
          this.eventEmitter.off('PlayerLeaveGroup', fn);
        }
        /**
         * @internal
         */


        __emitDismissGroup(roomInfo) {
          this.eventEmitter.emit('DismissGroup', ...arguments);
        }
        /**当前组队被解散（自己操作的不触发）*/


        onDismissGroupRoom(fn) {
          this.eventEmitter.on('DismissGroup', fn);
        }

        offDismissGroup(fn) {
          this.eventEmitter.off('DismissGroup', fn);
        }
        /**
         * @internal
         */


        __emitRecvGroupMsg(msg) {
          this.eventEmitter.emit('RecvGroupMsg', ...arguments);
        }
        /**收到组队中玩家发的自定义消息*/


        onRecvGroupMsg(fn) {
          this.eventEmitter.on('RecvGroupMsg', fn);
        }

        offRecvGroupMsg(fn) {
          this.eventEmitter.off('RecvGroupMsg', fn);
        }
        /**
         * @internal
         */


        __emitChangePlayerNetworkState(player) {
          this.eventEmitter.emit('RequirePlayerSyncState', ...arguments);
        }
        /**组队中其他玩家的网络状态变更(离线/上线)*/


        onChangePlayerNetworkState(fn) {
          this.eventEmitter.on('RequirePlayerSyncState', fn);
        }

        offChangePlayerNetworkState(fn) {
          this.eventEmitter.off('RequirePlayerSyncState', fn);
        }
        /**
         * @internal
         */


        __emitChangeCustomPlayerProfile(changeInfo) {
          this.eventEmitter.emit('ChangeCustomPlayerProfile', ...arguments);
        }
        /**有玩家修改了自定义属性(只要在房间,自己也会收到)*/


        onChangeCustomPlayerProfile(fn) {
          this.eventEmitter.on('ChangeCustomPlayerProfile', fn);
        }

        offChangeCustomPlayerProfile(fn) {
          this.eventEmitter.off('ChangeCustomPlayerProfile', fn);
        }
        /**
         * @internal
         */


        __emitChangeCustomPlayerStatus(changeInfo) {
          this.eventEmitter.emit('ChangeCustomPlayerStatus', ...arguments);
        }
        /**有玩家修改了自定义状态(只要在房间,自己也会收到)*/


        onChangeCustomPlayerStatus(fn) {
          this.eventEmitter.on('ChangeCustomPlayerStatus', fn);
        }

        offChangeCustomPlayerStatus(fn) {
          this.eventEmitter.off('ChangeCustomPlayerStatus', fn);
        }
        /**
         * @internal
         */


        __emitChangeGroup(roomInfo) {
          this.eventEmitter.emit('ChangeGroup', ...arguments);
        }
        /**组队房间信息有修改*/


        onChangeGroup(fn) {
          this.eventEmitter.on('ChangeGroup', fn);
        }

        offChangeGroup(fn) {
          this.eventEmitter.off('ChangeGroup', fn);
        }

      });
      /**
       * 组队房间功能模块
       * 
       * - 使用房间功能来实现的组队功能模块, 即: 同时只能在`组队房间`或者`普通房间`中
       * - 只要在组队房间中, 组队房间有的事件, 都将由组队房间接管, 房间事件不会触发
       *
       */


      _export("GroupRoom", GroupRoom = class GroupRoom {
        /**
         * 当前如果在组队房间中则能获取到房间信息, (即使在房间中,但不是组队房间依旧返回null)
         */
        get currGroupRoom() {
          if (!this._currGroupRoomId || !this._room.currRoomInfo) return null;
          if (this._room.currRoomInfo.roomId !== this._currGroupRoomId) return null;
          return this._room.currRoomInfo;
        }

        /**
         * @internal
         */
        constructor(game, room) {
          this._game = void 0;
          this._room = void 0;

          /**当前保留的组队房间id*/
          this._currGroupRoomId = null;

          /**当前保留的组队房间是否是房主*/
          this._currGroupRoomIsOwn = false;

          /**上一个组队房间id,因为触发顺序问题,需要保存一下最后一次的组队房间*/
          this._lastGroupRoomId = null;

          /**
           * 所有事件
           */
          this.events = new GroupRoomEvents();
          this._game = game;
          this._room = room; //hook, 区分组队房间和非组队房间, 消息各自走自己的事件

          this._hookRoomEmitHandler('__emitJoinRoom', roomInfo => this.events.__emitJoinGroup(roomInfo));

          this._hookRoomEmitHandler('__emitRecvRoomMsg', msg => this.events.__emitRecvGroupMsg(msg));

          this._hookRoomEmitHandler('__emitPlayerJoinRoom', (player, roomInfo) => this.events.__emitPlayerJoinGroup(player, roomInfo));

          this._hookRoomEmitHandler('__emitPlayerLeaveRoom', (player, roomInfo) => this.events.__emitPlayerLeaveGroup(player, roomInfo));

          this._hookRoomEmitHandler('__emitChangeRoom', roomInfo => this.events.__emitChangeGroup(roomInfo));

          this._hookRoomEmitHandler('__emitChangePlayerNetworkState', player => this.events.__emitChangePlayerNetworkState(player));

          this._hookRoomEmitHandler('__emitChangeCustomPlayerProfile', changeInfo => this.events.__emitChangeCustomPlayerProfile(changeInfo));

          this._hookRoomEmitHandler('__emitChangeCustomPlayerStatus', changeInfo => this.events.__emitChangeCustomPlayerStatus(changeInfo));

          this._hookRoomEmitHandler('__emitRoomAllPlayersMatchStart', (matchReqId, reqPlayerId, matchParams) => this.events.__emitGroupMatchStart(matchReqId, reqPlayerId, matchParams)); //下面的劫持过来后需要定制处理


          this._hookRoomEmitHandler('__emitRoomAllPlayersMatchResult', this._procRoomAllPlayersMatchResult); //下面是定制房间事件


          let emitLeaveRoomOld = this._room.events.__emitLeaveRoom;

          this._room.events.__emitLeaveRoom = roomInfo => {
            if (this._lastGroupRoomId === roomInfo.roomId) {
              this._currGroupRoomId = null;

              this.events.__emitLeaveGroup(roomInfo);
            } else {
              //离开的不是组队房间,则照常触发
              emitLeaveRoomOld.call(this._room.events, roomInfo);
            }
          };

          let emitDismissRoomOld = this._room.events.__emitDismissRoom;

          this._room.events.__emitDismissRoom = roomInfo => {
            if (this._lastGroupRoomId === roomInfo.roomId) {
              //因为可能触发顺序, 导致 this._currGroupRoomId 先被置空, 就用 _lastGroupRoomId 来判断
              this.events.__emitDismissGroup(roomInfo);
            } else {
              //解散的不是组队房间,则照常触发
              emitDismissRoomOld.call(this._room.events, roomInfo);
            }
          };
        }

        async dispose() {
          if (this._currGroupRoomId && this._currGroupRoomIsOwn) {
            // 如果已经在自己创建的组队房间中,则直接解散之前的
            this.dismissGroup();
          }

          this.events.dispose(); //@ts-ignore

          this.eventEmitter = undefined; //@ts-ignore

          this._game = undefined;
        }

        _hookRoomEmitHandler(key, bindGroupHandler) {
          let oldFn = this._room.events[key];
          let t = this;

          this._room.events[key] = async function () {
            const args = arguments;

            if (t.currGroupRoom) {
              bindGroupHandler.apply(t, args);
            } else {
              //@ts-ignore
              oldFn == null || oldFn.apply(t._room.events, args);
            }
          };
        }

        async _procRoomAllPlayersMatchResult(errMsg, errCode, matchResult) {
          //触发组队房间匹配结果事件
          this.events.__emitGroupMatchResult(errMsg, errCode, matchResult); //匹配不成功忽略


          if (!matchResult) return; //组队房间匹配成功了, 实现自动进入房间的逻辑

          let currGroupRoomId = this._currGroupRoomId;
          let playerPara = (_crd && Factory === void 0 ? (_reportPossibleCrUseOfFactory({
            error: Error()
          }), Factory) : Factory).buildPlayerParaFromInfo(this._room.__gameClient.currPlayerInfo); //使用保留房间的方式离开房间,便于之后再回到组队房间

          let leaveRet = await this._room.leaveRoom();

          if (!leaveRet.succ) {
            //离开组队房间还失败...这一般不可能, 除非通讯错误等
            //就当作还在组队房间
            this._currGroupRoomId = currGroupRoomId;

            this.events.__emitGroupMatchEnterRoom((_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).transition(leaveRet));

            return;
          } //因为离开操作会让标志被清理, 这里重新设置一下


          this._currGroupRoomId = currGroupRoomId; //离开组队房间后,进入匹配房间

          let joinRet = await this._room.joinRoomByServer(matchResult.gameServerUrl, playerPara, {
            roomId: matchResult.roomId,
            teamId: matchResult.teamId
          });

          if (!joinRet.succ) {
            //进入匹配房间失败了
            //准备回到组队房间
            let backGroupRoomRet = await this.joinGroup(playerPara, currGroupRoomId);

            if (!backGroupRoomRet.succ) {
              //回到组队房间还失败.那没办法了
              (_crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
                error: Error()
              }), logger) : logger).error('匹配成功,进入匹配房间失败:', joinRet, '尝试回到组队房间还失败:', backGroupRoomRet);
            }

            this.events.__emitGroupMatchEnterRoom((_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).transition(joinRet));

            return;
          }

          this.events.__emitGroupMatchEnterRoom(joinRet);
        }
        /**
         * 如果之前是组队匹配进入新房间的, 则可以离开房间并回到之前的组队房间
         * @returns group 
         */


        async backGroup() {
          if (!this._currGroupRoomId) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('已经离开组队房间', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNotIn);

          if (this._room.currRoomInfo && this._room.currRoomInfo.roomId === this._currGroupRoomId) {
            //当前已经在组队房间了,直接返回成功
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildSucc(this._room.currRoomInfo);
          }

          let playerPara = (_crd && Factory === void 0 ? (_reportPossibleCrUseOfFactory({
            error: Error()
          }), Factory) : Factory).buildPlayerParaFromInfo(this._room.__gameClient.currPlayerInfo);
          let ret = await this.joinGroup(playerPara, this._currGroupRoomId);
          return ret;
        }
        /**
         * 创建一个组队房间并进入, 之前有在其他房间将自动退出, 成功则 this.currGroupRoom 有值
         *
         * @param playerPara
         * @returns groupRoomId
         */


        async createGroup(playerPara) {
          if (this._currGroupRoomId && this._currGroupRoomIsOwn) {
            // 如果之前有在自己另外创建的组队房间中,则直接解散之前的(使用大厅房主接口,不管当前连接是否连着,最稳妥)
            (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game).ins.__hallClient.ownDismissRoom((_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game).ins.__myPlayerToken, this._currGroupRoomId);
          }

          let roomPara = {
            isPrivate: true,
            maxPlayers: 99,
            ownerPlayerId: this._game.__myPlayerId,
            roomName: '自定义组队房间',
            retainEmptyRoomTime: 5 * 60000 // 组队房间保留空房间5个小时, 方便全房间玩家匹配到其他房间去玩了还能回来

          };
          let ret = await this._game.__hallClient.createRoom(this._game.__myPlayerToken, roomPara);
          if (!ret.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).transition(ret);
          this._currGroupRoomId = ret.data.roomId;
          this._currGroupRoomIsOwn = true;
          this._lastGroupRoomId = ret.data.roomId;
          let joinRet = await this._room.joinRoom(playerPara, {
            roomId: this._currGroupRoomId
          });
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).transition(joinRet, () => ret.data.roomId);
        }
        /**
         * 加入指定组队房间, 成功则 this.currGroupRoom 有值
         *
         * @param playerPara 玩家信息参数
         * @param groupRoomId 组队房间ID
         */


        async joinGroup(playerPara, groupRoomId) {
          if (this._currGroupRoomId && this._currGroupRoomId !== groupRoomId && this._currGroupRoomIsOwn) {
            // 如果之前有在自己另外创建的组队房间中,则直接解散之前的(使用大厅房主接口,不管当前连接是否连着,最稳妥)
            (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game).ins.__hallClient.ownDismissRoom((_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game).ins.__myPlayerToken, this._currGroupRoomId);
          }

          this._currGroupRoomId = groupRoomId; //因为加入房间消息可能在下面返回前就收到了,所以提前设置好,发现失败后再移除

          this._currGroupRoomIsOwn = false;
          let ret = await this._room.joinRoom(playerPara, {
            roomId: groupRoomId
          });

          if (!ret.succ) {
            this._currGroupRoomId = null;
          } else {
            this._lastGroupRoomId = ret.data.roomId;
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).transition(ret, () => ret.data);
        }
        /**
         * 退出当前组队房间
         * @returns 
         */


        async leaveGroup() {
          if (!this.currGroupRoom) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('当前不在组队房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNotIn);
          let ret = await this._room.leaveRoom();
          return ret;
        }
        /**
         * 【仅房主】解散当前组队房间
         * @returns  
         */


        async dismissGroup() {
          if (!this.currGroupRoom) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('当前不在组队房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNotIn);
          let ret = await this._room.dismissRoom();
          return ret;
        }
        /**
         * [**在组队房间中才可以发起**] 发起组队匹配请求(请求成功即返回), 后续匹配成功则组队中所有玩家会自动进入匹配的房间
         * 
         * - 成功发起匹配通知: onGroupMatchStart
         * - 匹配结果的通知: onGroupMatchResult
         * - 匹配成功开始进入匹配房间的通知: onGroupMatchEnterRoom
         * 
         * 另外: 可由一个玩家(仅一个)调用 queryMatch 等待完整匹配结果(即房间所有玩家各自的匹配结果信息)
         *
         * @param matchParams
         * @returns 匹配请求id
         */


        async requestMatch(matchParams) {
          if (!this.currGroupRoom) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('当前不在组队房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNotIn);
          let matchP = matchParams;
          matchP.matchFromType = (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
            error: Error()
          }), EMatchFromType) : EMatchFromType).RoomAllPlayers;
          matchP.matchFromInfo = {};
          let ret = await this._room.__gameClient.requestMatch(matchP);
          return ret;
        }
        /**
         * [**在组队房间中才可以发起**] 取消组队匹配请求
         * 
         * 可能发生并发,导致虽然取消成功了,但还是收到了匹配成功的通知
         *
         * @returns
         */


        async cancelMatch() {
          if (!this.currGroupRoom) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('当前不在组队房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNotIn);
          let ret = await this._room.__gameClient.cancelMatch();
          return ret;
        }
        /**
         * [在组队房间中才可以发起] 查询完整的组队匹配结果
         * 
         * 会等到有结果了才返回!
         * 
         * 注意: 同时只能只有一个玩家进行查询等待,一般使用相关事件来获取结果即可
         *
         * @returns
         */


        async queryMatch() {
          if (!this.currGroupRoom) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('当前不在组队房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNotIn);
          let ret = await this._room.__gameClient.queryMatch();
          return ret;
        }
        /**
         * 发送组队内消息（自定义消息），可以指定全部玩家或部分玩家或其他玩家 来接收
         *
         * @public
         * @param roomMsg 
         */


        async sendGroupMsg(roomMsg) {
          if (!this.currGroupRoom) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('当前不在组队房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNotIn);
          let ret = await this._room.sendRoomMsg(roomMsg);
          return ret;
        }
        /**
         * 修改自己的玩家自定义属性,如果当前在房间中会同时会触发通知(房间中所有玩家)
         *
         * @param customPlayerProfile
         */


        async changeCustomPlayerProfile(customPlayerProfile) {
          if (!this.currGroupRoom) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('当前不在组队房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNotIn);
          let ret = await this._room.changeCustomPlayerProfile(customPlayerProfile);
          return ret;
        }
        /**
         * 修改自己的玩家自定义状态,如果当前在房间中会同时会触发通知(房间中所有玩家)
         *
         * @param customPlayerStatus
         */


        async changeCustomPlayerStatus(customPlayerStatus) {
          if (!this.currGroupRoom) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('当前不在组队房间中!', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).RoomNotIn);
          let ret = await this._room.changeCustomPlayerStatus(customPlayerStatus);
          return ret;
        }

      });

      /**单例*/
      GroupRoom.ins = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ac7466d57908825e0d4d78edb2ed0fb17ef5279.js.map