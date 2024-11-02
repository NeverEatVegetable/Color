System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, Result, ClusterNodeClient, EClusterClientType, gameClusterServiceProto, GameClusterNodeClient, _crd;

  function _reportPossibleCrUseOfWsClient(extras) {
    _reporterNs.report("WsClient", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameServerCfg(extras) {
    _reporterNs.report("IGameServerCfg", "../../../ServerConfig", _context.meta, extras);
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

  function _reportPossibleCrUseOfIRoomInfo(extras) {
    _reporterNs.report("IRoomInfo", "../../tsgf/room/IRoomInfo", _context.meta, extras);
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

  function _reportPossibleCrUseOfIRoomRegInfo(extras) {
    _reporterNs.report("IRoomRegInfo", "../room/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfERoomRegChangedType(extras) {
    _reporterNs.report("ERoomRegChangedType", "../room/RoomHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameClusterServiceType(extras) {
    _reporterNs.report("GameClusterServiceType", "./protocols/serviceProto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameClusterServiceProto(extras) {
    _reporterNs.report("gameClusterServiceProto", "./protocols/serviceProto", _context.meta, extras);
  }

  _export("GameClusterNodeClient", void 0);

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

      _cclegacy._RF.push({}, "1f20aCm/PBFxYAwUrXBg15I", "GameClusterNodeClient", undefined);

      _export("GameClusterNodeClient", GameClusterNodeClient = class GameClusterNodeClient extends (_crd && ClusterNodeClient === void 0 ? (_reportPossibleCrUseOfClusterNodeClient({
        error: Error()
      }), ClusterNodeClient) : ClusterNodeClient) {
        get nodeClient() {
          return this.clusterClient;
        }

        constructor(gameServerCfg, getGameServerCfg, getServerClientCount) {
          super(_crd && gameClusterServiceProto === void 0 ? (_reportPossibleCrUseOfgameClusterServiceProto({
            error: Error()
          }), gameClusterServiceProto) : gameClusterServiceProto, gameServerCfg.clusterWSUrl, (_crd && EClusterClientType === void 0 ? (_reportPossibleCrUseOfEClusterClientType({
            error: Error()
          }), EClusterClientType) : EClusterClientType).Node, gameServerCfg.clusterNodeId, gameServerCfg.clusterKey, async () => {
            let cfg = await getGameServerCfg();
            let serverInfo = {
              serverNodeId: gameServerCfg.clusterNodeId,
              serverName: cfg.serverName,
              serverUrl: cfg.serverUrl,
              clientCount: getServerClientCount(),
              extendData: cfg.extendData,
              allotRules: gameServerCfg.allotRules
            };
            return serverInfo;
          });
        }

        async extractRoom(roomId) {
          if (!this.nodeClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('当前服务器断开！请稍后再试！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).AuthUnverified);
          let ret = await this.nodeClient.callApi('NodeExtractRoom', {
            roomId
          });

          if (!ret.isSucc) {
            var _ret$err$code, _ret$err;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code = (_ret$err = ret.err) == null ? void 0 : _ret$err.code) != null ? _ret$err$code : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc({
            regInfo: ret.res.roomRegInfo,
            roomInfo: ret.res.roomInfo
          });
        }

        async updateRoom(roomRegInfo, changedType, playerId, teamId, oldTeamId) {
          if (!this.nodeClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('当前服务器断开！请稍后再试！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).AuthUnverified);
          let ret = await this.nodeClient.callApi('NodeUpdateRoom', {
            roomRegInfo,
            changedType,
            playerId,
            teamId,
            oldTeamId
          });

          if (!ret.isSucc) {
            var _ret$err$code2, _ret$err2;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code2 = (_ret$err2 = ret.err) == null ? void 0 : _ret$err2.code) != null ? _ret$err$code2 : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(null);
        }

        async dismissRoom(roomId) {
          if (!this.nodeClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildErr('当前服务器断开！请稍后再试！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
            error: Error()
          }), ErrorCodes) : ErrorCodes).AuthUnverified);
          let ret = await this.nodeClient.callApi('NodeDismissRoom', {
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
          }), Result) : Result).buildSucc(ret.res.roomRegInfo);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6162cd37f3a0767ddb2c908fb0a892a9cedb42b5.js.map