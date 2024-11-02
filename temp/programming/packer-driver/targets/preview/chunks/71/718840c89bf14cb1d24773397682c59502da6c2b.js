System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  /**获取全局供应商实现*/
  function getGlobalSDKProvider() {
    return globalThis.tsgfSDKProvider;
  }

  /**
   * 初始化全局供应商实现
   * @param provider 
   */
  function initSDKProvider(provider) {
    globalThis.tsgfSDKProvider = provider;
  }

  function _reportPossibleCrUseOfBaseHttpClient(extras) {
    _reporterNs.report("BaseHttpClient", "tsrpc-base-client", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseHttpClientOptions(extras) {
    _reporterNs.report("BaseHttpClientOptions", "tsrpc-base-client", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseWsClient(extras) {
    _reporterNs.report("BaseWsClient", "tsrpc-base-client", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseWsClientOptions(extras) {
    _reporterNs.report("BaseWsClientOptions", "tsrpc-base-client", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseServiceType(extras) {
    _reporterNs.report("BaseServiceType", "tsrpc-proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServiceProto(extras) {
    _reporterNs.report("ServiceProto", "tsrpc-proto", _context.meta, extras);
  }

  _export({
    getGlobalSDKProvider: getGlobalSDKProvider,
    initSDKProvider: initSDKProvider
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a83d1Ub6oZEfaUC5iCBgeh8", "Provider", undefined);
      /**
       * 环境相关接口
       */

      /**
       * 全局供应商接口定义
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=718840c89bf14cb1d24773397682c59502da6c2b.js.map