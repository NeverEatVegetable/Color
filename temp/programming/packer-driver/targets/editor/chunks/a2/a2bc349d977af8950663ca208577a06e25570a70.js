System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EPlayerInputFrameType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70d9d+lZ+FFlLTbbKAH2kaI", "IGameFrame", undefined);

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
//# sourceMappingURL=a2bc349d977af8950663ca208577a06e25570a70.js.map