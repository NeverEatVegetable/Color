System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, ENetworkState;

  function _reportPossibleCrUseOfIRoomInfo(extras) {
    _reporterNs.report("IRoomInfo", "../room/IRoomInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "60e799GfWtP7oIoKM9T9VCD", "IPlayerInfo", undefined);

      /**网络状态*/
      _export("ENetworkState", ENetworkState = /*#__PURE__*/function (ENetworkState) {
        ENetworkState[ENetworkState["OFFLINE"] = 0] = "OFFLINE";
        ENetworkState[ENetworkState["ONLINE"] = 1] = "ONLINE";
        return ENetworkState;
      }({}));
      /**
       * 玩家信息
      */

      /**玩家信息参数*/

      /**玩家自定义信息的变更信息*/

      /**玩家自定义状态的变更信息*/

      /**玩家队伍的变更信息*/


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4d0dd3d087b7dabd9ddbf5350443d607839dcc2e.js.map