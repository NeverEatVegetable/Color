System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EClusterClientType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27e654oOM5NFIfxZ0Duh5ha", "Models", undefined);

      /**集群客户端的类型*/
      _export("EClusterClientType", EClusterClientType = /*#__PURE__*/function (EClusterClientType) {
        EClusterClientType["Node"] = "Node";
        EClusterClientType["Terminal"] = "Terminal";
        return EClusterClientType;
      }({}));
      /**终端登录集群rpc*/

      /**节点登录集群rpc*/

      /**客户端登录集群rpc*/

      /**管理分配任务给节点*/

      /**管理取消已经分配给节点的任务*/

      /**节点定时同步自身信息给管理*/


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f3cf4df375c6605cd2793644cd839a914224c86.js.map