System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ClusterMgr, GameServerHelper, _crd;

  function _reportPossibleCrUseOfIGameServerInfo(extras) {
    _reporterNs.report("IGameServerInfo", "../../hallClient/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomOnlineInfo(extras) {
    _reporterNs.report("IRoomOnlineInfo", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClusterMgr(extras) {
    _reporterNs.report("ClusterMgr", "../cluster/ClusterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIClusterNodeInfo(extras) {
    _reporterNs.report("IClusterNodeInfo", "../cluster/ClusterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRedisClient(extras) {
    _reporterNs.report("IRedisClient", "../redisHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoomRegInfo(extras) {
    _reporterNs.report("IRoomRegInfo", "../room/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameServerInfoInServer(extras) {
    _reporterNs.report("IGameServerInfoInServer", "./Models", _context.meta, extras);
  }

  _export("GameServerHelper", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ClusterMgr = _unresolved_2.ClusterMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d38f0yGJ5LoYg4AJRmeOtd", "GameServerHelper", undefined);

      /**游戏服务器跨服操作类*/
      _export("GameServerHelper", GameServerHelper = class GameServerHelper {
        static init(getRedisClient) {
          GameServerHelper.getRedisClient = getRedisClient;
        }

        /**
         * 从redis中获取所有游戏服务器的分布式信息。分布式时，大厅服务器和游戏服务器管理节点，可能不在一个服务实例上，所以使用本方法来跨服获取
         *
         * @public
         * @typeParam NodeInfo
         * @param clusterTypeKey 集群类型标识，用在各种场合进行区分的。需要和构造ClussterMgr时的值一致
         * @returns
         */
        static async getAllServersClusterInfoFromRedis() {
          let list = await (_crd && ClusterMgr === void 0 ? (_reportPossibleCrUseOfClusterMgr({
            error: Error()
          }), ClusterMgr) : ClusterMgr).getNodeInfosFromRedis(GameServerHelper.clusterTypeKey, GameServerHelper.getRedisClient);
          return list;
        }
        /**
         * Builds online room info
         * @param roomRegInfo 
         * @param gameServerInfo 
         * @returns online room info 
         */


        static buildRoomOnlineInfo(roomRegInfo, gameServerInfo) {
          var _gameServerInfo$clien;

          return {
            roomId: roomRegInfo.roomId,
            ownerPlayerId: roomRegInfo.ownerPlayerId,
            roomName: roomRegInfo.roomName,
            roomType: roomRegInfo.roomType,
            maxPlayers: roomRegInfo.maxPlayers,
            emptySeats: roomRegInfo.emptySeats,
            privateRoomJoinMode: roomRegInfo.privateRoomJoinMode,
            isPrivate: roomRegInfo.isPrivate === 1,
            gameServerUrl: (gameServerInfo == null ? void 0 : gameServerInfo.serverUrl) || '',
            currGameServerPlayers: (_gameServerInfo$clien = gameServerInfo == null ? void 0 : gameServerInfo.clientCount) != null ? _gameServerInfo$clien : 0
          };
        }

      });

      GameServerHelper.getRedisClient = void 0;
      GameServerHelper.clusterTypeKey = 'GameServer';

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=684a0a444a36d1fa09f6e945cd71b41b8e014599.js.map