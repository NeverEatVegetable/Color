System.register(["__unresolved_0", "cc", "tsrpc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HttpClient, WsClient, initSDKProvider, _crd;

  function _reportPossibleCrUseOfHttpClient(extras) {
    _reporterNs.report("HttpClient", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWsClient(extras) {
    _reporterNs.report("WsClient", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitSDKProvider(extras) {
    _reporterNs.report("initSDKProvider", "./shared/tsgf/Provider", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_tsrpc) {
      HttpClient = _tsrpc.HttpClient;
      WsClient = _tsrpc.WsClient;
    }, function (_unresolved_2) {
      initSDKProvider = _unresolved_2.initSDKProvider;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9c79fmqdWNHr646zErdIzHO", "env", undefined);

      //服务器使用的供应商, 使用原生版本实现
      (_crd && initSDKProvider === void 0 ? (_reportPossibleCrUseOfinitSDKProvider({
        error: Error()
      }), initSDKProvider) : initSDKProvider)({
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
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e087727157f2185a8b5823d18f277663103d8a30.js.map