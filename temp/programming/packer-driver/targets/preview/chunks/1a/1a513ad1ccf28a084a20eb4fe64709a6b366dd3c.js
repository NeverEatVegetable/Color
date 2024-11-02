System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  function apiErrorThenClose(_x, _x2, _x3, _x4) {
    return _apiErrorThenClose.apply(this, arguments);
  }

  function _apiErrorThenClose() {
    _apiErrorThenClose = _asyncToGenerator(function* (call, msg, info, closeReason) {
      yield call.error(msg, info);
      call.conn.close(closeReason);
    });
    return _apiErrorThenClose.apply(this, arguments);
  }

  function apiSuccThenClose(_x5, _x6, _x7) {
    return _apiSuccThenClose.apply(this, arguments);
  }

  function _apiSuccThenClose() {
    _apiSuccThenClose = _asyncToGenerator(function* (call, res, closeReason) {
      yield call.succ(res);
      call.conn.close(closeReason);
    });
    return _apiSuccThenClose.apply(this, arguments);
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