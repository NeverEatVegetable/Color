System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ApiCryptoHelper, ErrorCodes, Result, SimpleAppHelper, AppCrypto, _crd;

  function _reportPossibleCrUseOfApiCryptoHelper(extras) {
    _reporterNs.report("ApiCryptoHelper", "../../tsgfServer/apiCrypto/ApiCryptoHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAppEncryptRequest(extras) {
    _reporterNs.report("IAppEncryptRequest", "../../tsgf/apiCrypto/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBaseEncryptRequest(extras) {
    _reporterNs.report("IBaseEncryptRequest", "../../tsgf/apiCrypto/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBaseEncryptRequestData(extras) {
    _reporterNs.report("IBaseEncryptRequestData", "../../tsgf/apiCrypto/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleAppHelper(extras) {
    _reporterNs.report("SimpleAppHelper", "../BLL", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIApiCrypto(extras) {
    _reporterNs.report("IApiCrypto", "./IApiCrypto", _context.meta, extras);
  }

  _export("AppCrypto", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ApiCryptoHelper = _unresolved_2.ApiCryptoHelper;
    }, function (_unresolved_3) {
      ErrorCodes = _unresolved_3.ErrorCodes;
      Result = _unresolved_3.Result;
    }, function (_unresolved_4) {
      SimpleAppHelper = _unresolved_4.SimpleAppHelper;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a462bet1QVKl7+FuQ7g2pyl", "AppCrypto", undefined);

      _export("AppCrypto", AppCrypto = class AppCrypto {
        /**
         * 解密应用加密请求为原始请求对象, 成功则赋值给appReq.req
         *
         * @public
         * @typeParam T
         * @param appReq
         * @param appSecret
         * @returns
         */
        async decryptionReq(req) {
          let appEnReq = req;

          if (!appEnReq.appId) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr("需要 appId !", (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).ParamsError);
          } //let appRet = await AppBLL.Ins.selectSingle({ appId: appEnReq.appId }).waitResult();


          let appRet = await (_crd && SimpleAppHelper === void 0 ? (_reportPossibleCrUseOfSimpleAppHelper({
            error: Error()
          }), SimpleAppHelper) : SimpleAppHelper).selectSingleByAppId(appEnReq.appId).waitResult();

          if (!appRet.succ) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(appRet.err, appRet.code);
          }

          if (!appRet.data) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr("错误的 appId !", (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).ParamsError);
          }

          let ret = (_crd && ApiCryptoHelper === void 0 ? (_reportPossibleCrUseOfApiCryptoHelper({
            error: Error()
          }), ApiCryptoHelper) : ApiCryptoHelper).appCryptoDecryption(appRet.data.appSecret, appEnReq);

          if (!ret.succ) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err, ret.code);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.data.data);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=11b53cf3e04382b58f3d0bab533cccbe4de497b8.js.map