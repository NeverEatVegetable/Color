System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, hallServiceProto, Result, AHttpClient, logger, HallClient, _crd;

  function _reportPossibleCrUseOfhallServiceProto(extras) {
    _reporterNs.report("hallServiceProto", "./protocols/serviceProto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServiceType(extras) {
    _reporterNs.report("ServiceType", "./protocols/serviceProto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAHttpClient(extras) {
    _reporterNs.report("AHttpClient", "../tsgf/AClient", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchParamsFromPlayer(extras) {
    _reporterNs.report("IMatchParamsFromPlayer", "../tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchResult(extras) {
    _reporterNs.report("IMatchResult", "../tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqCreateRoom(extras) {
    _reporterNs.report("ReqCreateRoom", "./protocols/PtlCreateRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICreateRoomPara(extras) {
    _reporterNs.report("ICreateRoomPara", "../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGetOrCreateRoomPara(extras) {
    _reporterNs.report("IGetOrCreateRoomPara", "../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGetOrCreateRoomRsp(extras) {
    _reporterNs.report("IGetOrCreateRoomRsp", "../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomOnlineInfo(extras) {
    _reporterNs.report("IRoomOnlineInfo", "../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomsFilterPara(extras) {
    _reporterNs.report("IRoomsFilterPara", "../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomsFilterRes(extras) {
    _reporterNs.report("IRoomsFilterRes", "../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOflogger(extras) {
    _reporterNs.report("logger", "../tsgf/logger", _context.meta, extras);
  }

  _export("HallClient", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      hallServiceProto = _unresolved_2.serviceProto;
    }, function (_unresolved_3) {
      Result = _unresolved_3.Result;
    }, function (_unresolved_4) {
      AHttpClient = _unresolved_4.AHttpClient;
    }, function (_unresolved_5) {
      logger = _unresolved_5.logger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "63fb3fyghhHW6SLo1N90xK5", "HallClient", undefined);

      /**
       * 基础的大厅服务器api的客户端封装
       */
      _export("HallClient", HallClient = class HallClient extends (_crd && AHttpClient === void 0 ? (_reportPossibleCrUseOfAHttpClient({
        error: Error()
      }), AHttpClient) : AHttpClient) {
        constructor(serverUrl, timeout) {
          super(_crd && hallServiceProto === void 0 ? (_reportPossibleCrUseOfhallServiceProto({
            error: Error()
          }), hallServiceProto) : hallServiceProto, {
            server: serverUrl,
            json: true,
            logger: _crd && logger === void 0 ? (_reportPossibleCrUseOflogger({
              error: Error()
            }), logger) : logger,
            timeout
          });
          this.client.flows.preCallApiFlow.push(v => {
            return v;
          });
        }
        /**
         * 认证并返回尝试恢复玩家房间信息，如果玩家还被保留在房间中,则返回之前所在房间id,需要再调用GameClient的重连方法
         * @param playerId 
         * @param playerToken 
         * @param updateShowName 可更新玩家显示名 
         * @returns player room 
         */


        async recoverPlayerRoom(playerId, playerToken, updateShowName) {
          const ret = await this.client.callApi("RecoverPlayerRoom", {
            playerId: playerId,
            playerToken: playerToken,
            updateShowName: updateShowName
          });

          if (!ret.isSucc) {
            var _ret$err$code;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code = ret.err.code) != null ? _ret$err$code : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res.roomOnlineInfo);
        }
        /**
         * 创建房间，并获得分配的游戏服务器，得到后用游戏服务器客户端进行连接
         * @param playerToken 
         * @param createPa 
         * @returns 返回是否有错误消息,null表示成功
         */


        async createRoom(playerToken, createPa) {
          let para = createPa;
          para.playerToken = playerToken;
          const ret = await this.client.callApi("CreateRoom", para);

          if (!ret.isSucc) {
            var _ret$err$code2;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code2 = ret.err.code) != null ? _ret$err$code2 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res.roomOnlineInfo);
        }
        /**
         * 获取房间的在线信息，然后需要用游戏服务器客户端连接再加入房间
         * @param playerToken 
         * @param createPa 
         * @returns 返回是否有错误消息,null表示成功
         */


        async getRoomOnlineInfo(playerToken, roomId) {
          const ret = await this.client.callApi("GetRoomOnlineInfo", {
            playerToken: playerToken,
            roomId: roomId
          });

          if (!ret.isSucc) {
            var _ret$err$code3;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code3 = ret.err.code) != null ? _ret$err$code3 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res.roomOnlineInfo);
        }
        /**
         * 获取或创建符合条件的房间
         * @param playerToken 
         * @param createPa 
         * @returns 返回是否有错误消息,null表示成功
         */


        async getOrCreateRoom(playerToken, para) {
          const ret = await this.client.callApi("GetOrCreateRoom", { ...para,
            playerToken
          });

          if (!ret.isSucc) {
            var _ret$err$code4;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code4 = ret.err.code) != null ? _ret$err$code4 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res);
        }
        /**
         * 请求匹配，返回匹配请求ID，用queryMatch查询匹配结果，建议2秒一次查询
         * @param playerToken 
         * @param matchParams 
         * @returns 返回是否有错误消息,null表示成功
         */


        async requestMatch(playerToken, matchParams) {
          const ret = await this.client.callApi("RequestMatch", {
            playerToken: playerToken,
            matchParams: matchParams
          });

          if (!ret.isSucc) {
            var _ret$err$code5;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code5 = ret.err.code) != null ? _ret$err$code5 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res.matchReqId);
        }
        /**
         * 查询匹配结果, null表示结果还没出. 建议2秒一次查询. 因为请求时超时时间已知，所以客户端要做好请求超时判断
         * @param matchReqId 
         * @returns 返回结果对象
         */


        async queryMatch(playerToken, matchReqId) {
          const ret = await this.client.callApi("QueryMatch", {
            playerToken: playerToken,
            matchReqId: matchReqId
          });

          if (!ret.isSucc) {
            var _ret$err$code6;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code6 = ret.err.code) != null ? _ret$err$code6 : 1);
          }

          if (!ret.res.hasResult) return null;

          if (ret.res.errMsg) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.res.errMsg, ret.res.errCode);
          }

          if (ret.res.matchResult) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildSucc(ret.res.matchResult);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr("未知结果！");
        }
        /**
         * 取消匹配请求
         * @param matchReqId 
         * @returns 返回结果对象
         */


        async cancelMatch(playerToken, matchReqId) {
          const ret = await this.client.callApi("CancelMatch", {
            playerToken: playerToken,
            matchReqId: matchReqId
          });

          if (!ret.isSucc) {
            var _ret$err$code7;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code7 = ret.err.code) != null ? _ret$err$code7 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(null);
        }
        /**
         * 筛选在线房间列表
         * @param playerToken 
         * @param filter 
         * @param [skip] 
         * @param [limit] 
         */


        async filterRooms(playerToken, filter, skip, limit) {
          const ret = await this.client.callApi("FilterRooms", {
            playerToken,
            filter,
            skip,
            limit
          });

          if (!ret.isSucc) {
            var _ret$err$code8;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code8 = ret.err.code) != null ? _ret$err$code8 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res);
        }
        /**
         * 房主直接解散自己的房间
         * @param playerToken 
         * @param roomId 
         */


        async ownDismissRoom(playerToken, roomId) {
          const ret = await this.client.callApi("OwnDismissRoom", {
            playerToken: playerToken,
            roomId: roomId
          });

          if (!ret.isSucc) {
            var _ret$err$code9;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code9 = ret.err.code) != null ? _ret$err$code9 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res.roomOnlineInfo);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4cd071c5845000821bad373de58f673d4dc3ed27.js.map