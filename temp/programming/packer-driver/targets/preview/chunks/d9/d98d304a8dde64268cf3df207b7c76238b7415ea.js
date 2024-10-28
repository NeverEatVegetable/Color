System.register(["__unresolved_0", "cc", "chai", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, assert, CryptoHelper, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfassert(extras) {
    _reporterNs.report("assert", "chai", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCryptoHelper(extras) {
    _reporterNs.report("CryptoHelper", "../../../src/shared/tsgfServer/CryptoHelper", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_chai) {
      assert = _chai.assert;
    }, function (_unresolved_2) {
      CryptoHelper = _unresolved_2.CryptoHelper;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bed33gFVUtKcJiNTaY5LNg2", "CryptoHelper.test", undefined);

      describe('CryptoHelper', function () {
        test('des加解密', /*#__PURE__*/_asyncToGenerator(function* () {
          var keyStr = "我是密钥，长度超过8个字节即可，只会取前8个字节";
          var inputText = "我是要加密的原文我是要加密的原文我是要加密的原文我是要加密的原文我是要加密的原文我是要加密的原文我是要加密的原文";
          var enText = (_crd && CryptoHelper === void 0 ? (_reportPossibleCrUseOfCryptoHelper({
            error: Error()
          }), CryptoHelper) : CryptoHelper).desEncryptECB_PKCS7_Base64(inputText, keyStr);
          console.log(enText);
          var deText = (_crd && CryptoHelper === void 0 ? (_reportPossibleCrUseOfCryptoHelper({
            error: Error()
          }), CryptoHelper) : CryptoHelper).desDecryptECB_PKCS7_Base64(enText, keyStr);
          console.log(deText);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(deText === inputText, "\u6709\u95EE\u9898:\u4E0D\u4E00\u81F4\uFF1A" + inputText + "\r\n" + deText);
        }));
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d98d304a8dde64268cf3df207b7c76238b7415ea.js.map