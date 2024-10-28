System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, Result, ClusterNodeClient, EClusterClientType, gameClusterServiceProto, GameClusterTerminal, _crd;

  function _reportPossibleCrUseOfWsClient(extras) {
    _reporterNs.report("WsClient", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfERoomCreateType(extras) {
    _reporterNs.report("ERoomCreateType", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICreateRoomPara(extras) {
    _reporterNs.report("ICreateRoomPara", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGetOrCreateRoomPara(extras) {
    _reporterNs.report("IGetOrCreateRoomPara", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGetOrCreateRoomRsp(extras) {
    _reporterNs.report("IGetOrCreateRoomRsp", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomOnlineInfo(extras) {
    _reporterNs.report("IRoomOnlineInfo", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomsFilterPara(extras) {
    _reporterNs.report("IRoomsFilterPara", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomsFilterRes(extras) {
    _reporterNs.report("IRoomsFilterRes", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClusterNodeClient(extras) {
    _reporterNs.report("ClusterNodeClient", "../cluster/ClusterNodeClient", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEClusterClientType(extras) {
    _reporterNs.report("EClusterClientType", "../cluster/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameServerInfoInServer(extras) {
    _reporterNs.report("IGameServerInfoInServer", "../game/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameClusterServiceType(extras) {
    _reporterNs.report("GameClusterServiceType", "./protocols/serviceProto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameClusterServiceProto(extras) {
    _reporterNs.report("gameClusterServiceProto", "./protocols/serviceProto", _context.meta, extras);
  }

  _export("GameClusterTerminal", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ErrorCodes = _unresolved_2.ErrorCodes;
      Result = _unresolved_2.Result;
    }, function (_unresolved_3) {
      ClusterNodeClient = _unresolved_3.ClusterNodeClient;
    }, function (_unresolved_4) {
      EClusterClientType = _unresolved_4.EClusterClientType;
    }, function (_unresolved_5) {
      gameClusterServiceProto = _unresolved_5.serviceProto;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fe8b9hqRIxKdJ5DC7pXmI37", "GameClusterTerminal", undefined);

      _export("GameClusterTerminal", GameClusterTerminal = class GameClusterTerminal extends (_crd && ClusterNodeClient === void 0 ? (_reportPossibleCrUseOfClusterNodeClient({
        error: Error()
      }), ClusterNodeClient) : ClusterNodeClient) {
        get terminalClient() {
          return this.clusterClient;
        }

        constructor(clusterServerUrl, terminalId, terminalKey) {
          super(_crd && gameClusterServiceProto === void 0 ? (_reportPossibleCrUseOfgameClusterServiceProto({
            error: Error()
          }), gameClusterServiceProto) : gameClusterServiceProto, clusterServerUrl, (_crd && EClusterClientType === void 0 ? (_reportPossibleCrUseOfEClusterClientType({
            error: Error()
          }), EClusterClientType) : EClusterClientType).Terminal, terminalId, terminalKey);
        }

        async createRoom(appId, createRoomPara, createType) {
          if (!this.terminalClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('当前服务器断开！请稍后再试！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).AuthUnverified);
          let ret = await this.terminalClient.callApi('TerminalCreateRoom', { ...createRoomPara,
            appId,
            createType
          });

          if (!ret.isSucc) {
            var _ret$err$code, _ret$err;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code = (_ret$err = ret.err) == null ? void 0 : _ret$err.code) != null ? _ret$err$code : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res.roomOnlineInfo);
        }
        /**
         * 要求集群解散房间
         * @param roomId 
         * @returns room 
         */


        async dismissRoom(roomId) {
          if (!this.terminalClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('当前服务器断开！请稍后再试！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).AuthUnverified);
          let ret = await this.terminalClient.callApi('TerminalDismissRoom', {
            roomId
          });

          if (!ret.isSucc) {
            var _ret$err$code2, _ret$err2;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code2 = (_ret$err2 = ret.err) == null ? void 0 : _ret$err2.code) != null ? _ret$err$code2 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res.roomOnlineInfo);
        }
        /**
         * 获取房间在线信息
         * @param roomId 
         * @returns room 
         */


        async getRoomOnlineInfo(roomId) {
          if (!this.terminalClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('当前服务器断开！请稍后再试！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).AuthUnverified);
          let ret = await this.terminalClient.callApi('TerminalGetRoomOnlineInfo', {
            roomId
          });

          if (!ret.isSucc) {
            var _ret$err$code3, _ret$err3;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code3 = (_ret$err3 = ret.err) == null ? void 0 : _ret$err3.code) != null ? _ret$err$code3 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res.roomOnlineInfo);
        }
        /**
         * Gets or create room
         * @param appId 
         * @param getOrCreateRoomPara 
         * @returns or create room 
         */


        async getOrCreateRoom(appId, getOrCreateRoomPara) {
          if (!this.terminalClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('当前服务器断开！请稍后再试！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).AuthUnverified);
          let ret = await this.terminalClient.callApi('TerminalGetOrCreateRoom', { ...getOrCreateRoomPara,
            appId
          });

          if (!ret.isSucc) {
            var _ret$err$code4, _ret$err4;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code4 = (_ret$err4 = ret.err) == null ? void 0 : _ret$err4.code) != null ? _ret$err$code4 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res);
        }
        /**
         * Filters rooms
         * @param filter 
         * @param [skip] 
         * @param [limit] 
         * @returns rooms 
         */


        async filterRooms(filter, skip, limit) {
          if (!this.terminalClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('当前服务器断开！请稍后再试！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).AuthUnverified);
          let ret = await this.terminalClient.callApi('TerminalFilterRoom', {
            filter,
            skip,
            limit
          });

          if (!ret.isSucc) {
            var _ret$err$code5, _ret$err5;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code5 = (_ret$err5 = ret.err) == null ? void 0 : _ret$err5.code) != null ? _ret$err$code5 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=93ef5c9d9fa88095c545f7fded087f82b3d1370c.js.map