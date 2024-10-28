System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Result, BaseBLL, AppDAL, SimpleAppHelper, AppBLL, _class2, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfICancelableExec(extras) {
    _reporterNs.report("ICancelableExec", "../tsgf/ICancelable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseBLL(extras) {
    _reporterNs.report("BaseBLL", "../tsgfServer/BaseBLL", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppDAL(extras) {
    _reporterNs.report("AppDAL", "./DAL", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIApp(extras) {
    _reporterNs.report("IApp", "./Models", _context.meta, extras);
  }

  _export({
    SimpleAppHelper: void 0,
    AppBLL: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Result = _unresolved_2.Result;
    }, function (_unresolved_3) {
      BaseBLL = _unresolved_3.BaseBLL;
    }, function (_unresolved_4) {
      AppDAL = _unresolved_4.AppDAL;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98df7mVkl5LGLLYjGY/6LLF", "BLL", undefined);

      /**简单应用管理(不需要走数据库)*/
      _export("SimpleAppHelper", SimpleAppHelper = class SimpleAppHelper {
        static selectAll() {
          return {
            cancel() {
              return _asyncToGenerator(function* () {})();
            },

            waitResult() {
              return _asyncToGenerator(function* () {
                return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                  error: Error()
                }), Result) : Result).buildSucc(SimpleAppHelper.allApps);
              })();
            }

          };
        }

        static selectSingleByAppId(appId) {
          return {
            cancel() {
              return _asyncToGenerator(function* () {})();
            },

            waitResult() {
              return _asyncToGenerator(function* () {
                var _SimpleAppHelper$allA;

                return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                  error: Error()
                }), Result) : Result).buildSucc((_SimpleAppHelper$allA = SimpleAppHelper.allApps.find(a => a.appId == appId)) != null ? _SimpleAppHelper$allA : null);
              })();
            }

          };
        }

      });

      SimpleAppHelper.allApps = [{
        appId: 'default',
        appName: '默认应用',
        appSecret: 'FDGWPRET345-809RGKFER43SKGF',
        addTime: new Date(Date.parse('2022-01-01'))
      }];

      _export("AppBLL", AppBLL = class AppBLL extends (_crd && BaseBLL === void 0 ? (_reportPossibleCrUseOfBaseBLL({
        error: Error()
      }), BaseBLL) : BaseBLL) {
        getDAL() {
          return new (_crd && AppDAL === void 0 ? (_reportPossibleCrUseOfAppDAL({
            error: Error()
          }), AppDAL) : AppDAL)();
        }

        buildWhereSql(search) {
          var whereSql = null;
          var params = null;

          if (search) {
            whereSql = '';
            params = {};
            var hasA = false;

            if (search.appId) {
              if (hasA) whereSql += ' and ';
              whereSql += 'app.appId=:appId';
              params.appId = search.appId;
              hasA = true;
            }

            if (search.appNameLike) {
              if (hasA) whereSql += ' and ';
              whereSql += 'app.appName like :appNameLike';
              params.appNameLike = search.appNameLike;
              hasA = true;
            }
          }

          return {
            whereSql,
            params
          };
        }

      });

      _class2 = AppBLL;
      AppBLL.Ins = new _class2();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=912da9cb313a7590778b82770df3a74e19ff905d.js.map