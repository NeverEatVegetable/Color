System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HallClient, Game, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

        dispose() {
          var _this = this;

          return _asyncToGenerator(function* () {
            //@ts-ignore
            _this.__hallClient = undefined;
          })();
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