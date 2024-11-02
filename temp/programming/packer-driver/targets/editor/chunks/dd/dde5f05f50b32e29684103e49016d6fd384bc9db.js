System.register(["__unresolved_0", "cc", "tsgf-sdk", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AHttpClient, Result, demoServiceProto, DemoClient, _crd;

  function _reportPossibleCrUseOfAHttpClient(extras) {
    _reporterNs.report("AHttpClient", "tsgf-sdk", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "tsgf-sdk", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "tsgf-sdk", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdemoServiceProto(extras) {
    _reporterNs.report("demoServiceProto", "./protocols/serviceProto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDemoServiceType(extras) {
    _reporterNs.report("DemoServiceType", "./protocols/serviceProto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqPlayerAuth(extras) {
    _reporterNs.report("ReqPlayerAuth", "./protocols/PtlPlayerAuth", _context.meta, extras);
  }

  _export("DemoClient", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_tsgfSdk) {
      AHttpClient = _tsgfSdk.AHttpClient;
      Result = _tsgfSdk.Result;
    }, function (_unresolved_2) {
      demoServiceProto = _unresolved_2.serviceProto;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7547fV9AZxPxZNEqOGXSZhr", "DemoClient", undefined);

      /**demo服务器的客户端封装*/
      _export("DemoClient", DemoClient = class DemoClient extends (_crd && AHttpClient === void 0 ? (_reportPossibleCrUseOfAHttpClient({
        error: Error()
      }), AHttpClient) : AHttpClient) {
        constructor(serverUrl) {
          super(_crd && demoServiceProto === void 0 ? (_reportPossibleCrUseOfdemoServiceProto({
            error: Error()
          }), demoServiceProto) : demoServiceProto, {
            server: serverUrl,
            json: true,
            logger: console
          });
        }
        /**
         * 玩家使用自定义的用户ID和昵称去TSGF认证, 本质是模拟接入应用自己的用户系统对接TSGF的玩家体系
         * @param playerOpenId 玩家唯一ID,自定义
         * @param playerShowName 玩家显示名,自定义
         */


        async playerAuth(playerOpenId, playerShowName) {
          let para = {
            showName: playerShowName,
            openId: playerOpenId
          };
          const ret = await this.client.callApi("PlayerAuth", para);

          if (!ret.isSucc) {
            var _ret$err$code;

            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr(ret.err.message, (_ret$err$code = ret.err.code) != null ? _ret$err$code : 1);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(ret.res);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dde5f05f50b32e29684103e49016d6fd384bc9db.js.map