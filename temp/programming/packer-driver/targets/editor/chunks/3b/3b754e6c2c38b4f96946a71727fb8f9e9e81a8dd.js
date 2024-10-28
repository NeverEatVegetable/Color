System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ERoomMsgRecvType, _crd;

  async function ApiSendRoomMsg(call) {
    let gameServer = call.getGameServer();
    let roomInfo = await gameServer.roomMgr.getRoomInfo(call.conn.currPlayer);
    if (!roomInfo) return await call.error('玩家不在房间中！');
    let fromPlayerInfo;

    if (call.req.robotPlayerId) {
      fromPlayerInfo = call.conn.currPlayer.roomRobotPlayers.get(call.req.robotPlayerId);

      if (!fromPlayerInfo) {
        return await call.error('非可控玩家!');
      }
    } else {
      fromPlayerInfo = call.conn.currPlayer.playerInfo;
    }

    let playerInfos;
    let roomMsg = call.req.roomMsg;

    switch (roomMsg.recvType) {
      case (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
        error: Error()
      }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_ALL:
        playerInfos = roomInfo.playerList;
        break;

      case (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
        error: Error()
      }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_OTHERS:
        playerInfos = roomInfo.playerList.filter(p => p.playerId !== fromPlayerInfo.playerId);
        break;

      case (_crd && ERoomMsgRecvType === void 0 ? (_reportPossibleCrUseOfERoomMsgRecvType({
        error: Error()
      }), ERoomMsgRecvType) : ERoomMsgRecvType).ROOM_SOME:
        if (!roomMsg.recvPlayerList || roomMsg.recvPlayerList.length <= 0) {
          return await call.error('指定玩家接收，则需要定义recvPlayerList字段');
        }

        let pidList = roomMsg.recvPlayerList;
        playerInfos = roomInfo.playerList.filter(p => pidList.includes(p.playerId));
        break;
    }

    if (playerInfos.length > 0) {
      let connList = [];

      for (let playerInfo of playerInfos) {
        let conn = gameServer.gameConnMgr.getPlayerConn(playerInfo.playerId);
        if (!conn) continue;
        connList.push(conn);
      }

      gameServer.server.broadcastMsg("NotifyRoomMsg", {
        recvRoomMsg: {
          msg: roomMsg.msg,
          recvType: roomMsg.recvType,
          fromPlayerInfo: fromPlayerInfo
        }
      }, connList);
    }

    return await call.succ({});
  }

  function _reportPossibleCrUseOfIPlayerInfo(extras) {
    _reporterNs.report("IPlayerInfo", "../../shared/tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfERoomMsgRecvType(extras) {
    _reporterNs.report("ERoomMsgRecvType", "../../shared/tsgf/room/IRoomMsg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqSendRoomMsg(extras) {
    _reporterNs.report("ReqSendRoomMsg", "../../shared/gameClient/protocols/PtlSendRoomMsg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResSendRoomMsg(extras) {
    _reporterNs.report("ResSendRoomMsg", "../../shared/gameClient/protocols/PtlSendRoomMsg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientConnection(extras) {
    _reporterNs.report("ClientConnection", "../GameServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameApiCall(extras) {
    _reporterNs.report("GameApiCall", "../GameServer", _context.meta, extras);
  }

  _export("ApiSendRoomMsg", ApiSendRoomMsg);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ERoomMsgRecvType = _unresolved_2.ERoomMsgRecvType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f3d9cPtzP1DfJndPSYsP8lW", "ApiSendRoomMsg", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3b754e6c2c38b4f96946a71727fb8f9e9e81a8dd.js.map