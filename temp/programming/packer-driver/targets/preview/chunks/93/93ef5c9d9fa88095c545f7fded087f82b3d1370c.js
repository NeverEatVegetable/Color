System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ErrorCodes, Result, ClusterNodeClient, EClusterClientType, gameClusterServiceProto, GameClusterTerminal, _crd;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

        createRoom(appId, createRoomPara, createType) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.terminalClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前服务器断开！请稍后再试！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).AuthUnverified);
            var ret = yield _this.terminalClient.callApi('TerminalCreateRoom', _extends({}, createRoomPara, {
              appId,
              createType
            }));

            if (!ret.isSucc) {
              var _ret$err$code, _ret$err;

              return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildErr(ret.err.message, (_ret$err$code = (_ret$err = ret.err) == null ? void 0 : _ret$err.code) != null ? _ret$err$code : 1);
            }

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildSucc(ret.res.roomOnlineInfo);
          })();
        }
        /**
         * 要求集群解散房间
         * @param roomId 
         * @returns room 
         */


        dismissRoom(roomId) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (!_this2.terminalClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前服务器断开！请稍后再试！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).AuthUnverified);
            var ret = yield _this2.terminalClient.callApi('TerminalDismissRoom', {
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
          })();
        }
        /**
         * 获取房间在线信息
         * @param roomId 
         * @returns room 
         */


        getRoomOnlineInfo(roomId) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (!_this3.terminalClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前服务器断开！请稍后再试！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).AuthUnverified);
            var ret = yield _this3.terminalClient.callApi('TerminalGetRoomOnlineInfo', {
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
          })();
        }
        /**
         * Gets or create room
         * @param appId 
         * @param getOrCreateRoomPara 
         * @returns or create room 
         */


        getOrCreateRoom(appId, getOrCreateRoomPara) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            if (!_this4.terminalClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前服务器断开！请稍后再试！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).AuthUnverified);
            var ret = yield _this4.terminalClient.callApi('TerminalGetOrCreateRoom', _extends({}, getOrCreateRoomPara, {
              appId
            }));

            if (!ret.isSucc) {
              var _ret$err$code4, _ret$err4;

              return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildErr(ret.err.message, (_ret$err$code4 = (_ret$err4 = ret.err) == null ? void 0 : _ret$err4.code) != null ? _ret$err$code4 : 1);
            }

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildSucc(ret.res);
          })();
        }
        /**
         * Filters rooms
         * @param filter 
         * @param [skip] 
         * @param [limit] 
         * @returns rooms 
         */


        filterRooms(filter, skip, limit) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            if (!_this5.terminalClient) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('当前服务器断开！请稍后再试！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).AuthUnverified);
            var ret = yield _this5.terminalClient.callApi('TerminalFilterRoom', {
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
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=93ef5c9d9fa88095c545f7fded087f82b3d1370c.js.map