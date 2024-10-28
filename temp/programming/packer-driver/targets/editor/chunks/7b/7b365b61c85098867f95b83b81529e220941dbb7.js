System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, RunServerKey;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68a518JnQ9AKp5tjAJqcnpL", "ServerConfig", undefined);
      /**servers的总配置对象*/

      /** redis连接配置 */

      /**集群节点配置*/

      /**集群终端配置*/


      /**所有服务器类型标识*/
      _export("RunServerKey", RunServerKey = /*#__PURE__*/function (RunServerKey) {
        RunServerKey["HallServer"] = "HallServer";
        RunServerKey["GameServerCluster"] = "GameServerCluster";
        RunServerKey["MatchServerCluster"] = "MatchServerCluster";
        RunServerKey["GameServer"] = "GameServer";
        RunServerKey["MatchServer"] = "MatchServer";
        RunServerKey["DemoServer"] = "DemoServer";
        return RunServerKey;
      }({}));
      /**
       * 游戏服务器配置
       */

      /**限制房间数量的规则*/

      /**各分配规则定义*/

      /**匹配服务器配置*/


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b365b61c85098867f95b83b81529e220941dbb7.js.map