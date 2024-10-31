System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EApiCryptoMode;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c9e0A+vkZJ0pjtisZPw8jq", "Models", undefined);
      /**加密请求的基类*/

      /**加密请求的数据对象基类*/


      /**接口加密模式*/
      _export("EApiCryptoMode", EApiCryptoMode = /*#__PURE__*/function (EApiCryptoMode) {
        EApiCryptoMode["None"] = "None";
        EApiCryptoMode["AppReqDes"] = "AppReqDes";
        return EApiCryptoMode;
      }({}));
      /*============app加密通讯基类=============*/

      /**应用加密请求的原始请求对象的基类, 如果有加密外的参数附加, 可以拓展接口补充*/

      /**应用加密请求的解密后的请求数据的基类, 拓展加密数据对象*/


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=276d3010da4c8512835b542168fd81cac1ef7983.js.map