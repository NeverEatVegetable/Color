System.register(["__unresolved_0", "cc", "tsrpc-miniapp"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HttpClient, WsClient, _crd;

  /**
   * 获取当前实现的SDK供应商实现
   */
  function buildSDKProvider() {
    return {
      env: {
        getHttpClient: (proto, options) => {
          return new (_crd && HttpClient === void 0 ? (_reportPossibleCrUseOfHttpClient({
            error: Error()
          }), HttpClient) : HttpClient)(proto, options);
        },
        getWsClient: (proto, options) => {
          return new (_crd && WsClient === void 0 ? (_reportPossibleCrUseOfWsClient({
            error: Error()
          }), WsClient) : WsClient)(proto, options);
        }
      }
    };
  }

  function _reportPossibleCrUseOfHttpClient(extras) {
    _reporterNs.report("HttpClient", "tsrpc-miniapp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWsClient(extras) {
    _reporterNs.report("WsClient", "tsrpc-miniapp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISDKProvider(extras) {
    _reporterNs.report("ISDKProvider", "tsgf-sdk", _context.meta, extras);
  }

  _export("buildSDKProvider", buildSDKProvider);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_tsrpcMiniapp) {
      HttpClient = _tsrpcMiniapp.HttpClient;
      WsClient = _tsrpcMiniapp.WsClient;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cb41e4hFFlMd69fJVGx9Bc0", "index", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7bb4ef3a1287917d9dcee7ae0e42189f22c63500.js.map