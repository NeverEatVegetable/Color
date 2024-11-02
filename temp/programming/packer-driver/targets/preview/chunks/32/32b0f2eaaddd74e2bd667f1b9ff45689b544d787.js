System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EPlayerInputFrameType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fc085JnODtOGbaxtJJGQl10", "IGameFrame", undefined);

      /**玩家输入帧类型*/
      _export("EPlayerInputFrameType", EPlayerInputFrameType = /*#__PURE__*/function (EPlayerInputFrameType) {
        EPlayerInputFrameType[EPlayerInputFrameType["Operates"] = 1] = "Operates";
        EPlayerInputFrameType[EPlayerInputFrameType["JoinRoom"] = 2] = "JoinRoom";
        EPlayerInputFrameType[EPlayerInputFrameType["LeaveRoom"] = 3] = "LeaveRoom";
        EPlayerInputFrameType[EPlayerInputFrameType["PlayerEnterGame"] = 4] = "PlayerEnterGame";
        return EPlayerInputFrameType;
      }({}));
      /**游戏同步帧*/

      /**玩家输入(包含多个操作)*/

      /**玩家输入的操作内容*/

      /**追帧数据*/


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=32b0f2eaaddd74e2bd667f1b9ff45689b544d787.js.map