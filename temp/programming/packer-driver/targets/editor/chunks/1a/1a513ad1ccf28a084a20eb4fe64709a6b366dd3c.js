System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  /**
   * 返回错误并随后关闭连接
   * @typeParam req 
   * @typeParam res 
   * @param call 
   * @param msg 
   * @param info
   * @param closeReason
   * @returns
   */

  /**
   * 返回成功并随后关闭连接
   * @typeParam req 
   * @typeParam res 
   * @param call 
   * @param closeReason
   * @returns
   */
  async function apiErrorThenClose(call, msg, info, closeReason) {
    await call.error(msg, info);
    call.conn.close(closeReason);
  }

  async function apiSuccThenClose(call, res, closeReason) {
    await call.succ(res);
    call.conn.close(closeReason);
  }

  function _reportPossibleCrUseOfApiCall(extras) {
    _reporterNs.report("ApiCall", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseServiceType(extras) {
    _reporterNs.report("BaseServiceType", "tsrpc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTsrpcErrorData(extras) {
    _reporterNs.report("TsrpcErrorData", "tsrpc", _context.meta, extras);
  }

  _export({
    apiErrorThenClose: apiErrorThenClose,
    apiSuccThenClose: apiSuccThenClose
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "79943+bGuxAGLJ2S5L4GHoE", "ApiBase", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1a513ad1ccf28a084a20eb4fe64709a6b366dd3c.js.map