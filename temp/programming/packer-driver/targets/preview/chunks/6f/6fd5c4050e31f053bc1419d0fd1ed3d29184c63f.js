System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, getGlobalSDKProvider, AHttpClient, AWsClient, _crd;

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

  function _reportPossibleCrUseOfgetGlobalSDKProvider(extras) {
    _reporterNs.report("getGlobalSDKProvider", "./Provider", _context.meta, extras);
  }

  _export({
    AHttpClient: void 0,
    AWsClient: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      getGlobalSDKProvider = _unresolved_2.getGlobalSDKProvider;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ee0f5Pk+6RBRad05IsAOjb8", "AClient", undefined);

      /**
       * 抽象的HTTP客户端,根据具体的环境,接入对应的客户端,让引用类型的地方不需要判断
       * @typeParam ServiceType 
       */
      _export("AHttpClient", AHttpClient = class AHttpClient {
        constructor(proto, options) {
          var _ref;

          this.client = void 0;
          var env = (_ref = (_crd && getGlobalSDKProvider === void 0 ? (_reportPossibleCrUseOfgetGlobalSDKProvider({
            error: Error()
          }), getGlobalSDKProvider) : getGlobalSDKProvider)()) == null ? void 0 : _ref.env;
          if (!env) throw new Error('GlobalProvider.env需要提供环境实现!');
          this.client = env.getHttpClient(proto, options);
        }

      });
      /**
       * 抽象的Websocket客户端,根据具体的环境,接入对应的客户端,让引用类型的地方不需要判断
       * @typeParam ServiceType 
       */


      _export("AWsClient", AWsClient = class AWsClient {
        constructor(proto, options) {
          var _ref2;

          this.client = void 0;
          var env = (_ref2 = (_crd && getGlobalSDKProvider === void 0 ? (_reportPossibleCrUseOfgetGlobalSDKProvider({
            error: Error()
          }), getGlobalSDKProvider) : getGlobalSDKProvider)()) == null ? void 0 : _ref2.env;
          if (!env) throw new Error('GlobalProvider.env需要提供环境实现!');
          this.client = env.getWsClient(proto, options);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6fd5c4050e31f053bc1419d0fd1ed3d29184c63f.js.map