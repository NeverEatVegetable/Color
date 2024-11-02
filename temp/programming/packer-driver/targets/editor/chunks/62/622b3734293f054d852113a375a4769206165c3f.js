System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HallClient, Game, _crd;

  function _reportPossibleCrUseOfHallClient(extras) {
    _reporterNs.report("HallClient", "./hallClient/HallClient", _context.meta, extras);
  }

  _export("Game", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      HallClient = _unresolved_2.HallClient;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6d58f2rXy9FpYY4+eUfvhe3", "Game", undefined);

      /**
       *游戏管理对象
       */
      _export("Game", Game = class Game {
        constructor() {
          /**
           * @internal
           */
          this.__hallClient = void 0;

          /**
           * @internal
           */
          this.__myPlayerId = void 0;

          /**
           * @internal
           */
          this.__myPlayerToken = void 0;
        }

        /**
         * 初始化
         *
         * @param hallServerUrl
         * @param myPlayerId
         * @param myPlayerToken
         */
        init(hallServerUrl, myPlayerId, myPlayerToken) {
          this.__hallClient = new (_crd && HallClient === void 0 ? (_reportPossibleCrUseOfHallClient({
            error: Error()
          }), HallClient) : HallClient)(hallServerUrl);
          this.__myPlayerId = myPlayerId;
          this.__myPlayerToken = myPlayerToken;
        }

        async dispose() {
          //@ts-ignore
          this.__hallClient = undefined;
        }

      });

      /**单例*/
      Game.ins = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=622b3734293f054d852113a375a4769206165c3f.js.map