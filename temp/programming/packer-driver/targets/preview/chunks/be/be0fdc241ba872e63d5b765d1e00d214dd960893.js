System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CryptoHelper, ErrorCodes, Result, ApiCryptoHelper, _crd;

  function _reportPossibleCrUseOfCryptoHelper(extras) {
    _reporterNs.report("CryptoHelper", "../CryptoHelper", _context.meta, extras);
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

  function _reportPossibleCrUseOfIAppEncryptRequest(extras) {
    _reporterNs.report("IAppEncryptRequest", "../../tsgf/apiCrypto/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAppEncryptRequestT(extras) {
    _reporterNs.report("IAppEncryptRequestT", "../../tsgf/apiCrypto/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBaseEncryptRequestData(extras) {
    _reporterNs.report("IBaseEncryptRequestData", "../../tsgf/apiCrypto/Models", _context.meta, extras);
  }

  _export("ApiCryptoHelper", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      CryptoHelper = _unresolved_2.CryptoHelper;
    }, function (_unresolved_3) {
      ErrorCodes = _unresolved_3.ErrorCodes;
      Result = _unresolved_3.Result;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1584aMoCDRMiLMC4hUS7Uil", "ApiCryptoHelper", undefined);

      _export("ApiCryptoHelper", ApiCryptoHelper = class ApiCryptoHelper {
        /**
         * 调用AppCrypto协议的加密接口
         *
         * @param appId
         * @param appSecret
         * @param reqData
         * @returns
         */
        static appCryptoEncrypt(appId, appSecret, reqData) {
          reqData.ts = Date.now();
          var json = JSON.stringify(reqData);
          var cText = (_crd && CryptoHelper === void 0 ? (_reportPossibleCrUseOfCryptoHelper({
            error: Error()
          }), CryptoHelper) : CryptoHelper).desEncryptECB_PKCS7_Base64(json, appSecret);
          var req = {
            appId: appId,
            ciphertext: cText
          };
          return req;
        }
        /**
         * 调用AppCrypto协议的解密接口
         *
         * @param appSecret
         * @param req
         * @returns
         */


        static appCryptoDecryption(appSecret, appReq) {
          if (!appReq.ciphertext) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr("需要 ciphertext !", (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).ParamsError);
          }

          try {
            var json = (_crd && CryptoHelper === void 0 ? (_reportPossibleCrUseOfCryptoHelper({
              error: Error()
            }), CryptoHelper) : CryptoHelper).desDecryptECB_PKCS7_Base64(appReq.ciphertext, appSecret);
            var data = JSON.parse(json);

            if (!data) {
              return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildErr("接口解析失败", (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).ParamsError);
            }

            if (!data.ts || data.ts + 3600000 < Date.now()) {
              return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildErr("接口过期", (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
                error: Error()
              }), ErrorCodes) : ErrorCodes).ParamsError);
            }

            appReq.data = data;
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildSucc(appReq);
          } catch (err) {
            var _ref, _err$message;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr("接口解析失败:" + ((_ref = (_err$message = err == null ? void 0 : err.message) != null ? _err$message : err) != null ? _ref : '解析失败!'), (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).ParamsError);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=be0fdc241ba872e63d5b765d1e00d214dd960893.js.map