System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, ERoomMsgRecvType;

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

      _cclegacy._RF.push({}, "dbb6bRMG4JJqJN7RGvM6Gjn", "IRoomMsg", undefined);

      /**房间消息接收类型*/
      _export("ERoomMsgRecvType", ERoomMsgRecvType = /*#__PURE__*/function (ERoomMsgRecvType) {
        ERoomMsgRecvType[ERoomMsgRecvType["ROOM_ALL"] = 1] = "ROOM_ALL";
        ERoomMsgRecvType[ERoomMsgRecvType["ROOM_OTHERS"] = 2] = "ROOM_OTHERS";
        ERoomMsgRecvType[ERoomMsgRecvType["ROOM_SOME"] = 3] = "ROOM_SOME";
        return ERoomMsgRecvType;
      }({}));
      /**房间消息*/

      /**接收到的房间消息*/


      /*
      let a: IRoomMsg = {
          recvType: ERoomMsgRecvType.ROOM_SOME,
          msg: "",
          recvPlayerList: []
      };
      let b: IRoomMsg = {
          recvType: ERoomMsgRecvType.ROOM_ALL,
          msg: "",
      };
      
      let c!: IRoomMsg;
      if (c.recvType == ERoomMsgRecvType.ROOM_SOME) {
          c.recvPlayerList.length;
      }
      */
      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4fd109f8df046563368733a1865a49a4e98f6672.js.map