System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, ERoomCreateType, EFrameSyncState, EPrivateRoomJoinMode;

  function _reportPossibleCrUseOfIPlayerInfo(extras) {
    _reporterNs.report("IPlayerInfo", "../player/IPlayerInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a919TzjxRFsaxVBbLF1mWr", "IRoomInfo", undefined);

      /**创建房间的方式*/
      _export("ERoomCreateType", ERoomCreateType = /*#__PURE__*/function (ERoomCreateType) {
        ERoomCreateType[ERoomCreateType["COMMON_CREATE"] = 0] = "COMMON_CREATE";
        ERoomCreateType[ERoomCreateType["MATCH_CREATE"] = 1] = "MATCH_CREATE";
        return ERoomCreateType;
      }({}));
      /**帧同步状态*/


      _export("EFrameSyncState", EFrameSyncState = /*#__PURE__*/function (EFrameSyncState) {
        EFrameSyncState[EFrameSyncState["STOP"] = 0] = "STOP";
        EFrameSyncState[EFrameSyncState["START"] = 1] = "START";
        return EFrameSyncState;
      }({}));
      /**私有房间的加入模式*/


      _export("EPrivateRoomJoinMode", EPrivateRoomJoinMode = /*#__PURE__*/function (EPrivateRoomJoinMode) {
        EPrivateRoomJoinMode[EPrivateRoomJoinMode["roomIdJoin"] = 0] = "roomIdJoin";
        EPrivateRoomJoinMode[EPrivateRoomJoinMode["forbidJoin"] = 1] = "forbidJoin";
        EPrivateRoomJoinMode[EPrivateRoomJoinMode["password"] = 2] = "password";
        return EPrivateRoomJoinMode;
      }({}));
      /**房间信息*/

      /**队伍的配置参数*/

      /**创建房间的参数*/

      /**房间列表的筛选参数*/

      /**房间筛选结果*/

      /**获取符合条件的房间或创建一个*/

      /**获取符合条件的房间或创建一个的结果数据*/

      /**加入房间参数*/

      /**房间在线信息, 给未加入房间的客户端的房间基本信息*/

      /**修改房间信息的参数*/

      /**队伍的玩家id列表*/


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c0a8643ea79c068f06642a3ca56b971aa198e167.js.map