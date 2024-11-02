System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Factory, _crd;

  function _reportPossibleCrUseOfIPlayerInfo(extras) {
    _reporterNs.report("IPlayerInfo", "./tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayerInfoPara(extras) {
    _reporterNs.report("IPlayerInfoPara", "./tsgf/player/IPlayerInfo", _context.meta, extras);
  }

  _export("Factory", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "042d6I95VNOu6P+uUKG7PjU", "Factory", undefined);

      /**
       * Factory
       */
      _export("Factory", Factory = class Factory {
        /**
         * 用玩家信息构建玩家参数, 用于连接服务器加入房间等操作
         * @param playerInfo 
         * @returns player para
         */
        static buildPlayerParaFromInfo(playerInfo) {
          return {
            showName: playerInfo.showName,
            customPlayerProfile: playerInfo.customPlayerProfile,
            customPlayerStatus: playerInfo.customPlayerStatus
          };
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e88b257f87732cf7b7debd75c2f5b5417d2a9243.js.map