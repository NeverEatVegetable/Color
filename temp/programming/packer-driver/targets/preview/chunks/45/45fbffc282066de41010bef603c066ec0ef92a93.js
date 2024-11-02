System.register(["__unresolved_0", "cc", "tsrpc-browser"], function (_export, _context) {
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
    _reporterNs.report("HttpClient", "tsrpc-browser", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWsClient(extras) {
    _reporterNs.report("WsClient", "tsrpc-browser", _context.meta, extras);
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
    }, function (_tsrpcBrowser) {
      HttpClient = _tsrpcBrowser.HttpClient;
      WsClient = _tsrpcBrowser.WsClient;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1e50akgrMJGfZYGgiW8qpIX", "index", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=45fbffc282066de41010bef603c066ec0ef92a93.js.map