System.register(["__unresolved_0", "cc", "crypto-js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CryptoJS, CryptoHelper, _crd;

  function _reportPossibleCrUseOfCryptoJS(extras) {
    _reporterNs.report("CryptoJS", "crypto-js", _context.meta, extras);
  }

  _export("CryptoHelper", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_cryptoJs) {
      CryptoJS = _cryptoJs.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "07774X2CTFO0rr9viSh5uWs", "CryptoHelper", undefined);

      _export("CryptoHelper", CryptoHelper = class CryptoHelper {
        /**
         * 字符串MD5加密
         * @param str 
         * @returns md5 
         */
        static md5(str) {
          var wordArray = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).MD5(str);
          return (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).enc.Hex.stringify(wordArray);
        }
        /**
         * des加密，ECB模式，PKCS7填充，密钥用UTF8提取前8个字节，输入字符串使用UTF8编码解析，输出加密后的base64编码字符串
         *
         * @public
         * @param input 要加密的字符串（明文）
         * @param strKey 长度超过8个字节即可，只会取前8个字节
         * @returns
         */


        static desEncryptECB_PKCS7_Base64(input, strKey) {
          //转为utf8字节,并只取前8个字节
          var keyBytes = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).lib.WordArray.create((_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).enc.Utf8.parse(strKey).words.slice(0, 8), 8);
          var inputBytes = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).enc.Utf8.parse(input);
          var enResult = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).DES.encrypt(inputBytes, keyBytes, {
            mode: (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
              error: Error()
            }), CryptoJS) : CryptoJS).mode.ECB,
            padding: (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
              error: Error()
            }), CryptoJS) : CryptoJS).pad.Pkcs7
          });
          var retStr = enResult.ciphertext.toString((_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).enc.Base64);
          return retStr;
        }
        /**
         * des解密，ECB模式，PKCS7填充，密钥用UTF8提取前8个字节，输入字符串使用UTF8编码解析，输出加密后的base64编码字符串
         *
         * @public
         * @param inputBase64 密文（base64格式）
         * @param strKey
         * @returns
         */


        static desDecryptECB_PKCS7_Base64(inputBase64, strKey) {
          //转为utf8字节,并只取前8个字节
          var keyBytes = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).lib.WordArray.create((_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).enc.Utf8.parse(strKey).words.slice(0, 8), 8);
          var inputBytes = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).enc.Base64.parse(inputBase64);
          var cipherParams = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).lib.CipherParams.create({
            ciphertext: inputBytes
          });
          var enResult = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).DES.decrypt(cipherParams, keyBytes, {
            mode: (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
              error: Error()
            }), CryptoJS) : CryptoJS).mode.ECB,
            padding: (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
              error: Error()
            }), CryptoJS) : CryptoJS).pad.Pkcs7
          });
          var retStr = enResult.toString((_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).enc.Utf8);
          return retStr;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d768a5c3210ce145d0259fdb4caf760f17d7800a.js.map