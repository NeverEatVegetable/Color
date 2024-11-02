System.register(["__unresolved_0", "tsrpc"], function (_export, _context) {
  "use strict";

  var _reporterNs, HttpClient, WsClient, _crd;

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
    _reporterNs.report("HttpClient", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWsClient(extras) {
    _reporterNs.report("WsClient", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISDKProvider(extras) {
    _reporterNs.report("ISDKProvider", "../../src/tsgf/Provider", _context.meta, extras);
  }

  _export("buildSDKProvider", buildSDKProvider);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_tsrpc) {
      HttpClient = _tsrpc.HttpClient;
      WsClient = _tsrpc.WsClient;
    }],
    execute: function () {
      _crd = true;
      _crd = false;
    }
  };
});
//# sourceMappingURL=949288eeafca6b5545116e5d3c2f0b5b60af0dda.js.map