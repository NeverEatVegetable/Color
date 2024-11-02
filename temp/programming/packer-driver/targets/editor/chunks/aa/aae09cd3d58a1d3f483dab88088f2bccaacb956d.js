System.register(["__unresolved_0", "cc", "__unresolved_1", "chai", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, assert, GameClient, HallClient, ApiCryptoHelper, EMatchFromType, MatcherKeys, Result, _crd, enabledLog, hallClient;

  function setLogEnabled(enabled) {
    enabledLog = enabled;
  }

  function createHallClient(hallServerUrl) {
    let c = new (_crd && HallClient === void 0 ? (_reportPossibleCrUseOfHallClient({
      error: Error()
    }), HallClient) : HallClient)(hallServerUrl, 90000000);

    if (!enabledLog) {
      c.client.logger.log = () => {};
    }

    return c;
  }

  function createGameClient(playerToken, serverUrl, roomWaitReconnectTime) {
    let gameClient = new (_crd && GameClient === void 0 ? (_reportPossibleCrUseOfGameClient({
      error: Error()
    }), GameClient) : GameClient)(serverUrl, playerToken, 90000000, roomWaitReconnectTime);

    if (!enabledLog) {
      gameClient.client.logger.log = () => {};
    }

    return gameClient;
  }

  function testEachBuild(maxPlayerCount) {
    //@ts-ignore
    let data = {};
    beforeEach(async () => {
      let auth1Task = maxPlayerCount < 1 ? null : authPlayerToken("zum0001_ApiCreateRoomAndJoin_MaxPlayers2", "zum1");
      let auth2Task = maxPlayerCount < 2 ? null : authPlayerToken("zum0002_ApiCreateRoomAndJoin_MaxPlayers2", "zum2");
      let auth3Task = maxPlayerCount < 3 ? null : authPlayerToken("zum0003_ApiCreateRoomAndJoin_MaxPlayers2", "zum3");
      let auth4Task = maxPlayerCount < 4 ? null : authPlayerToken("zum0004_ApiCreateRoomAndJoin_MaxPlayers2", "zum4");
      let auth5Task = maxPlayerCount < 5 ? null : authPlayerToken("zum0005_ApiCreateRoomAndJoin_MaxPlayers2", "zum5");
      let auth1 = maxPlayerCount < 1 ? null : await auth1Task;
      let auth2 = maxPlayerCount < 2 ? null : await auth2Task;
      let auth3 = maxPlayerCount < 3 ? null : await auth3Task;
      let auth4 = maxPlayerCount < 4 ? null : await auth4Task;
      let auth5 = maxPlayerCount < 5 ? null : await auth5Task;
      if (auth1) data.playerToken1 = auth1.playerToken;
      if (auth1) data.playerId1 = auth1.playerId;
      if (auth2) data.playerToken2 = auth2.playerToken;
      if (auth2) data.playerId2 = auth2.playerId;
      if (auth3) data.playerToken3 = auth3.playerToken;
      if (auth3) data.playerId3 = auth3.playerId;
      if (auth4) data.playerToken4 = auth4.playerToken;
      if (auth4) data.playerId4 = auth4.playerId;
      if (auth5) data.playerToken5 = auth5.playerToken;
      if (auth5) data.playerId5 = auth5.playerId;
    });
    afterEach(async () => {
      var _data$gameClient, _data$gameClient2, _data$gameClient3, _data$gameClient4, _data$gameClient5;

      await Promise.all([(_data$gameClient = data.gameClient1) == null ? void 0 : _data$gameClient.disconnect(), (_data$gameClient2 = data.gameClient2) == null ? void 0 : _data$gameClient2.disconnect(), (_data$gameClient3 = data.gameClient3) == null ? void 0 : _data$gameClient3.disconnect(), (_data$gameClient4 = data.gameClient4) == null ? void 0 : _data$gameClient4.disconnect(), (_data$gameClient5 = data.gameClient5) == null ? void 0 : _data$gameClient5.disconnect()]);
    });
    return data;
  }
  /**模拟服务端获取玩家的token*/


  async function authPlayerToken(openId, showName) {
    return await authPlayerTokenByHallClient(hallClient, openId, showName);
  }

  async function authPlayerTokenByHallClient(hallClient, openId, showName) {
    var _ret1$err;

    let req1 = (_crd && ApiCryptoHelper === void 0 ? (_reportPossibleCrUseOfApiCryptoHelper({
      error: Error()
    }), ApiCryptoHelper) : ApiCryptoHelper).appCryptoEncrypt("default", "FDGWPRET345-809RGKFER43SKGF", {
      openId: openId,
      showName: showName,
      authTokenDay: 1
    });
    const ret1 = await hallClient.client.callApi("Authorize", req1);
    (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
      error: Error()
    }), assert) : assert).ok(ret1.isSucc, (_ret1$err = ret1.err) == null ? void 0 : _ret1$err.message);
    (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
      error: Error()
    }), assert) : assert).ok(ret1.res, 'res为空');
    return ret1.res;
  }
  /**模拟服务端调用大厅强制解散房间*/


  async function appDismissRoom(roomId) {
    var _ret1$err2;

    let req1 = (_crd && ApiCryptoHelper === void 0 ? (_reportPossibleCrUseOfApiCryptoHelper({
      error: Error()
    }), ApiCryptoHelper) : ApiCryptoHelper).appCryptoEncrypt("default", "FDGWPRET345-809RGKFER43SKGF", {
      roomId
    });
    const ret1 = await hallClient.client.callApi("AppDismissRoom", req1);
    if (!ret1.isSucc) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
      error: Error()
    }), Result) : Result).buildErr(((_ret1$err2 = ret1.err) == null ? void 0 : _ret1$err2.message) || '失败', ret1.err.code || 1);
    return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
      error: Error()
    }), Result) : Result).buildSucc(ret1.res);
  }

  async function requestMatchOneSingle(playerToken, playerId, maxPlayers = 8, minPlayers = 3) {
    let retM1 = await hallClient.requestMatch(playerToken, {
      matchFromType: (_crd && EMatchFromType === void 0 ? (_reportPossibleCrUseOfEMatchFromType({
        error: Error()
      }), EMatchFromType) : EMatchFromType).Player,
      matchFromInfo: {
        playerIds: [playerId]
      },
      maxPlayers: maxPlayers,
      matcherKey: (_crd && MatcherKeys === void 0 ? (_reportPossibleCrUseOfMatcherKeys({
        error: Error()
      }), MatcherKeys) : MatcherKeys).Single,
      matcherParams: {
        minPlayers: minPlayers,
        resultsContinueRoomJoinUsMatch: true
      }
    });
    (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
      error: Error()
    }), assert) : assert).ok(retM1.succ, retM1.err);
    let matchReqId = retM1.data;
    return matchReqId;
  }

  async function cancelMatch(playerToken, matchReqId) {
    let retM1 = await hallClient.cancelMatch(playerToken, matchReqId);
    (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
      error: Error()
    }), assert) : assert).ok(retM1.succ, retM1.err);
  }
  /**查询匹配结果,要求自行延时,里面断言一定会获取到结果!*/


  async function queryMatch(playerToken, matchReqId) {
    let retM1 = await hallClient.queryMatch(playerToken, matchReqId);
    (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
      error: Error()
    }), assert) : assert).ok(!!retM1, "结果应该要出了,但没出！");
    (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
      error: Error()
    }), assert) : assert).ok((retM1 == null ? void 0 : retM1.succ) === true, retM1 == null ? void 0 : retM1.err);
    return retM1.data;
  }

  async function authToGameServer(playerShowName, playerToken, gameServerUrl, roomWaitReconnectTime) {
    let gameClient1 = createGameClient(playerToken, gameServerUrl, roomWaitReconnectTime);
    let gameRet = await gameClient1.authorize({
      showName: playerShowName
    });
    (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
      error: Error()
    }), assert) : assert).ok(gameRet.succ, gameRet.err);

    gameClient1.onRecvRoomMsg = msg => {//console.log(`${playerShowName}: 收到【${msg.fromPlayerInfo.showName}】房间消息[${msg.recvType}]：${msg.msg}`);
    };

    gameClient1.onPlayerJoinRoom = (playerInfo, roomInfo) => {//console.log(`${playerShowName}: 有玩家进入房间：${playerInfo.showName}`);
    };

    gameClient1.onPlayerLeaveRoom = (playerInfo, roomInfo) => {//console.log(`${playerShowName}: 有玩家退出房间：${playerInfo.showName}`);
    };

    gameClient1.onDismissRoom = roomInfo => {//console.log(`${playerShowName}: 房间被解散`);
    };

    return gameClient1;
  }

  async function authToGameServerResult(playerShowName, playerToken, gameServerUrl, roomWaitReconnectTime) {
    let gameClient1 = createGameClient(playerToken, gameServerUrl, roomWaitReconnectTime);
    let gameRet = await gameClient1.authorize({
      showName: playerShowName
    });
    if (!gameRet.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
      error: Error()
    }), Result) : Result).transition(gameRet);

    gameClient1.onRecvRoomMsg = msg => {//console.log(`${playerShowName}: 收到【${msg.fromPlayerInfo.showName}】房间消息[${msg.recvType}]：${msg.msg}`);
    };

    gameClient1.onPlayerJoinRoom = (playerInfo, roomInfo) => {//console.log(`${playerShowName}: 有玩家进入房间：${playerInfo.showName}`);
    };

    gameClient1.onPlayerLeaveRoom = (playerInfo, roomInfo) => {//console.log(`${playerShowName}: 有玩家退出房间：${playerInfo.showName}`);
    };

    gameClient1.onDismissRoom = roomInfo => {//console.log(`${playerShowName}: 房间被解散`);
    };

    return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
      error: Error()
    }), Result) : Result).buildSucc(gameClient1);
  }

  async function createAndEnterRoom(playerToken, playerId, playerShowName, createRoomPara, teamId, roomWaitReconnectTime) {
    if (!createRoomPara) createRoomPara = {};
    if (!createRoomPara.roomName) createRoomPara.roomName = '测试的房间';
    if (!createRoomPara.maxPlayers) createRoomPara.maxPlayers = 4;
    if (!createRoomPara.ownerPlayerId) createRoomPara.ownerPlayerId = playerId;
    if (createRoomPara.isPrivate === undefined) createRoomPara.isPrivate = false;
    let createRet = await hallClient.createRoom(playerToken, createRoomPara);
    if (!createRet.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
      error: Error()
    }), Result) : Result).transition(createRet);
    let roomOnlineInfo = createRet.data; //连接游戏服务器

    let gameClient = await authToGameServer(playerShowName, playerToken, roomOnlineInfo.gameServerUrl, roomWaitReconnectTime); //加入自己创建的房间

    let joinRet = await gameClient.joinRoom({
      roomId: roomOnlineInfo.roomId,
      teamId
    });
    if (!joinRet.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
      error: Error()
    }), Result) : Result).transition(joinRet);
    return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
      error: Error()
    }), Result) : Result).buildSucc({
      gameClient: gameClient,
      roomId: roomOnlineInfo.roomId,
      gameServerUrl: roomOnlineInfo.gameServerUrl,
      roomOnlineInfo
    });
  }
  /**根据房间ID认证进入游戏服务器,返回游戏客户端(并未加入房间)*/


  async function authToGameServerByRoomId(playerToken, roomId, playerShowName, roomWaitReconnectTime) {
    let regRet = await hallClient.getRoomOnlineInfo(playerToken, roomId);
    (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
      error: Error()
    }), assert) : assert).ok(regRet.succ, regRet.err);
    let gameClient = await authToGameServer(playerShowName, playerToken, regRet.data.gameServerUrl, roomWaitReconnectTime);
    return gameClient;
  }
  /**直接加入房间,要求成功!*/


  async function joinRoom(playerToken, roomId, playerShowName, teamId) {
    let gameClient = await authToGameServerByRoomId(playerToken, roomId, playerShowName);
    let joinRet = await gameClient.joinRoom({
      roomId,
      teamId
    });
    (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
      error: Error()
    }), assert) : assert).ok(joinRet.succ, joinRet.err);
    return gameClient;
  }
  /**直接加入房间*/


  async function joinRoomResult(playerToken, roomId, playerShowName, teamId) {
    let gameClient = await authToGameServerByRoomId(playerToken, roomId, playerShowName);
    let joinRet = await gameClient.joinRoom({
      roomId,
      teamId
    });
    if (!joinRet.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
      error: Error()
    }), Result) : Result).transition(joinRet);
    return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
      error: Error()
    }), Result) : Result).buildSucc(gameClient);
  }
  /**根据指定的游戏服务器.连接并加入房间*/


  async function joinRoomUseGameServer(gameServerUrl, playerToken, roomId, playerShowName, roomWaitReconnectTime) {
    let gameClient = await authToGameServer(playerShowName, playerToken, gameServerUrl, roomWaitReconnectTime);
    let joinRet = await gameClient.joinRoom({
      roomId
    });
    (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
      error: Error()
    }), assert) : assert).ok(joinRet.succ, joinRet.err);
    return gameClient;
  }
  /**根据指定的游戏服务器.连接并加入房间*/


  async function joinRoomUseGameServerResult(gameServerUrl, playerToken, roomId, playerShowName, roomWaitReconnectTime) {
    let gameClientRet = await authToGameServerResult(playerShowName, playerToken, gameServerUrl, roomWaitReconnectTime);
    if (!gameClientRet.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
      error: Error()
    }), Result) : Result).transition(gameClientRet);
    let gameClient = gameClientRet.data;
    let joinRet = await gameClient.joinRoom({
      roomId
    });
    if (!joinRet.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
      error: Error()
    }), Result) : Result).transition(joinRet);
    return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
      error: Error()
    }), Result) : Result).buildSucc(gameClient);
  }

  function _reportPossibleCrUseOfassert(extras) {
    _reporterNs.report("assert", "chai", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameClient(extras) {
    _reporterNs.report("GameClient", "../../../src/shared/gameClient/GameClient", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallClient(extras) {
    _reporterNs.report("HallClient", "../../../src/shared/hallClient/HallClient", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResAuthorize(extras) {
    _reporterNs.report("ResAuthorize", "../../../src/shared/hallClient/protocols/PtlAuthorize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiCryptoHelper(extras) {
    _reporterNs.report("ApiCryptoHelper", "../../../src/shared/tsgfServer/apiCrypto/ApiCryptoHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEMatchFromType(extras) {
    _reporterNs.report("EMatchFromType", "../../../src/shared/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISingleMatcherParams(extras) {
    _reporterNs.report("ISingleMatcherParams", "../../../src/shared/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchResult(extras) {
    _reporterNs.report("IMatchResult", "../../../src/shared/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatcherKeys(extras) {
    _reporterNs.report("MatcherKeys", "../../../src/shared/tsgf/match/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../../../src/shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../../../src/shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICreateRoomPara(extras) {
    _reporterNs.report("ICreateRoomPara", "../../../src/shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomOnlineInfo(extras) {
    _reporterNs.report("IRoomOnlineInfo", "../../../src/shared/tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResAppDismissRoom(extras) {
    _reporterNs.report("ResAppDismissRoom", "../../../src/shared/hallClient/protocols/PtlAppDismissRoom", _context.meta, extras);
  }

  _export({
    setLogEnabled: setLogEnabled,
    createHallClient: createHallClient,
    createGameClient: createGameClient,
    testEachBuild: testEachBuild,
    authPlayerToken: authPlayerToken,
    authPlayerTokenByHallClient: authPlayerTokenByHallClient,
    appDismissRoom: appDismissRoom,
    requestMatchOneSingle: requestMatchOneSingle,
    cancelMatch: cancelMatch,
    queryMatch: queryMatch,
    authToGameServer: authToGameServer,
    authToGameServerResult: authToGameServerResult,
    createAndEnterRoom: createAndEnterRoom,
    authToGameServerByRoomId: authToGameServerByRoomId,
    joinRoom: joinRoom,
    joinRoomResult: joinRoomResult,
    joinRoomUseGameServer: joinRoomUseGameServer,
    joinRoomUseGameServerResult: joinRoomUseGameServerResult
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {}, function (_chai) {
      assert = _chai.assert;
    }, function (_unresolved_3) {
      GameClient = _unresolved_3.GameClient;
    }, function (_unresolved_4) {
      HallClient = _unresolved_4.HallClient;
    }, function (_unresolved_5) {
      ApiCryptoHelper = _unresolved_5.ApiCryptoHelper;
    }, function (_unresolved_6) {
      EMatchFromType = _unresolved_6.EMatchFromType;
      MatcherKeys = _unresolved_6.MatcherKeys;
    }, function (_unresolved_7) {
      Result = _unresolved_7.Result;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a391aoaYG1CQKZQUbMMSEcB", "ApiUtils", undefined);

      enabledLog = true;

      _export("hallClient", hallClient = createHallClient('http://127.0.0.1:7100'));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aae09cd3d58a1d3f483dab88088f2bccaacb956d.js.map