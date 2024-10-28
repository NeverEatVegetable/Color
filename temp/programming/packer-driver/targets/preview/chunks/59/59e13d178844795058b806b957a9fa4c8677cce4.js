System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseBLL, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfICancelableExec(extras) {
    _reporterNs.report("ICancelableExec", "../tsgf/ICancelable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseDAL(extras) {
    _reporterNs.report("BaseDAL", "./BaseDAL", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrderBy(extras) {
    _reporterNs.report("OrderBy", "./BaseDAL", _context.meta, extras);
  }

  _export("BaseBLL", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c8aa8fttKlMda/DWs823+nk", "BaseBLL", undefined);

      _export("BaseBLL", BaseBLL = class BaseBLL {
        exec(run) {
          var dal = this.getDAL();
          return {
            waitResult: () => {
              return run(dal);
            },
            cancel: function () {
              var _cancel = _asyncToGenerator(function* () {
                yield dal.closeCurrDb();
              });

              function cancel() {
                return _cancel.apply(this, arguments);
              }

              return cancel;
            }()
          };
        }
        /**
         * 查询多行
         *
         * @public
         * @param orderby
         * @param limitCount
         */


        selectAll(search, orderby, limitCount) {
          var where = this.buildWhereSql(search);
          return this.exec( /*#__PURE__*/_asyncToGenerator(function* (dal) {
            return yield dal.selectAll('*', null, where.whereSql, where.params, orderby, limitCount);
          }));
        }
        /**
         * 分页查询
         *
         * @public
         * @param pageSize 一页几条
         * @param pageIndex 页码，从1开始
         * @param orderby
         */


        selectPages(pageSize, pageIndex, search, orderby) {
          var where = this.buildWhereSql(search);
          return this.exec( /*#__PURE__*/_asyncToGenerator(function* (dal) {
            return yield dal.selectPages(pageSize, pageIndex, '*', null, where.whereSql, where.params, orderby);
          }));
        }
        /**
         * 查询单条
         *
         * @public
         * @param fromSqlApp
         * @param whereSql
         * @param params
         */


        selectSingle(search) {
          var where = this.buildWhereSql(search);
          return this.exec( /*#__PURE__*/_asyncToGenerator(function* (dal) {
            return yield dal.selectSingle(null, where.whereSql, where.params);
          }));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=59e13d178844795058b806b957a9fa4c8677cce4.js.map