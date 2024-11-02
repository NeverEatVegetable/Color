System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HallClient, ApiCryptoHelper, getServerConfig, _crd, hallClient;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function getHallClient() {
    return _getHallClient.apply(this, arguments);
  }

  function _getHallClient() {
    _getHallClient = _asyncToGenerator(function* () {
      if (!hallClient) {
        hallClient = new (_crd && HallClient === void 0 ? (_reportPossibleCrUseOfHallClient({
          error: Error()
        }), HallClient) : HallClient)((yield (_crd && getServerConfig === void 0 ? (_reportPossibleCrUseOfgetServerConfig({
          error: Error()
        }), getServerConfig) : getServerConfig)()).demoServer.hallServerUrl);
      }

      return hallClient;
    });
    return _getHallClient.apply(this, arguments);
  }

  function ApiPlayerAuth(_x) {
    return _ApiPlayerAuth.apply(this, arguments);
  }

  function _ApiPlayerAuth() {
    _ApiPlayerAuth = _asyncToGenerator(function* (call) {
      var req1 = (_crd && ApiCryptoHelper === void 0 ? (_reportPossibleCrUseOfApiCryptoHelper({
        error: Error()
      }), ApiCryptoHelper) : ApiCryptoHelper).appCryptoEncrypt("default", "FDGWPRET345-809RGKFER43SKGF", {
        openId: call.req.openId,
        showName: call.req.showName,
        authTokenDay: 1
      });
      var ret1 = yield (yield getHallClient()).client.callApi("Authorize", req1);
      if (!ret1.isSucc) return call.error(ret1.err);
      return call.succ(ret1.res);
    });
    return _ApiPlayerAuth.apply(this, arguments);
  }

  function _reportPossibleCrUseOfApiCall(extras) {
    _reporterNs.report("ApiCall", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqPlayerAuth(extras) {
    _reporterNs.report("ReqPlayerAuth", "../../shared/demoClient/protocols/PtlPlayerAuth", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResPlayerAuth(extras) {
    _reporterNs.report("ResPlayerAuth", "../../shared/demoClient/protocols/PtlPlayerAuth", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallClient(extras) {
    _reporterNs.report("HallClient", "../../shared/hallClient/HallClient", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiCryptoHelper(extras) {
    _reporterNs.report("ApiCryptoHelper", "../../shared/tsgfServer/apiCrypto/ApiCryptoHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetServerConfig(extras) {
    _reporterNs.report("getServerConfig", "../../serverConfigMgr", _context.meta, extras);
  }

  _export("ApiPlayerAuth", ApiPlayerAuth);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      HallClient = _unresolved_2.HallClient;
    }, function (_unresolved_3) {
      ApiCryptoHelper = _unresolved_3.ApiCryptoHelper;
    }, function (_unresolved_4) {
      getServerConfig = _unresolved_4.getServerConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d15baHChJhFjak05FfyPdXu", "ApiPlayerAuth", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4b4557868053814e39b100df8d78f09d78cf1f9d.js.map