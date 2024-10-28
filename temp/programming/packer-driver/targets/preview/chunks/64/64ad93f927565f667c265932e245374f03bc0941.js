System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, OrderBy, BaseDAL, BaseMySqlDAL, _crd, checkIdentifier;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  /**
   * 检查一个名称是否符合标识符命名规范，防止注入等
   * @date 2022/4/25 - 15:15:56
   *
   * @param name
   */
  function checkIdentifierConform(name) {
    return checkIdentifier.test(name);
  }

  function _reportPossibleCrUseOfIDbHelper(extras) {
    _reporterNs.report("IDbHelper", "./DbHelper", _context.meta, extras);
  }

  _export({
    OrderBy: void 0,
    BaseDAL: void 0,
    BaseMySqlDAL: void 0,
    checkIdentifierConform: checkIdentifierConform
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "df91cMQGaFHXKg9957FsMNO", "BaseDAL", undefined);

      _export("OrderBy", OrderBy = class OrderBy {
        constructor(tableName, colName, isAsc) {
          this.tableName = void 0;
          this.colName = void 0;
          this.isAsc = void 0;
          if (!checkIdentifierConform(tableName)) throw Error(tableName + "\u8868\u540D\u4E0D\u5408\u6CD5\uFF01");
          if (!checkIdentifierConform(colName)) throw Error(colName + "\u5B57\u6BB5\u540D\u4E0D\u5408\u6CD5\uFF01");
          this.tableName = tableName;
          this.colName = colName;
          this.isAsc = isAsc;
        }

        toString(reverseAsc) {
          if (reverseAsc === void 0) {
            reverseAsc = false;
          }

          var str = '';
          if (this.tableName) str += this.tableName + '.';
          str += this.colName;
          var asc = reverseAsc ? !this.isAsc : this.isAsc;
          str += asc ? ' asc' : ' desc';
          return '';
        }

      });

      _export("BaseDAL", BaseDAL = class BaseDAL {
        get currDbHelper() {
          return this._currDbHelper;
        }

        constructor(dbHelperFactory, tableName, idName) {
          this._currDbHelper = void 0;
          this.dbHelperFactory = void 0;
          this.tableName = void 0;
          this.idName = void 0;
          this.dbHelperFactory = dbHelperFactory;
          this.tableName = tableName;
          this.idName = idName;
        }

        getDbHelper() {
          if (!this._currDbHelper) {
            this._currDbHelper = this.dbHelperFactory();
          }

          return this._currDbHelper;
        }

        closeCurrDb() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this._currDbHelper) {
              yield _this._currDbHelper.close();
              _this._currDbHelper = undefined;
            }
          })();
        }
        /**
         * 基础生成select语句
         *
         * @protected
         * @param selectSql 不包含select关键字
         * @param fromSql 不包含from关键字
         * @param whereSql 可空，有则不包含where关键字
         * @param limitCount 读取条数
         * @param limitOffset 读取偏移（从0开始）
         * @param orderBySql 可空，有则不包含order by关键字
         */


        /**
         * 查询多行
         *
         * @public
         * @param selectSql="*"
         * @param fromSqlApp
         * @param whereSql
         * @param params
         * @param orderby
         * @param limitCount
         */
        selectAll(selectSql, fromSqlApp, whereSql, params, orderby, limitCount) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (selectSql === void 0) {
              selectSql = "*";
            }

            var fromSql = _this2.tableName;
            if (fromSqlApp) fromSql += " " + fromSqlApp;
            var orderBySql = null;
            if (orderby && orderby.length > 0) orderBySql = orderby.join(',');

            var sql = _this2.buildSelectSql(selectSql, fromSql, whereSql, orderBySql, limitCount);

            return yield _this2.getDbHelper().queryMulti(sql, params);
          })();
        }
        /**
         * 分页查询
         *
         * @public
         * @param pageSize 一页几条
         * @param pageIndex 页码，从1开始
         * @param selectSql="*"
         * @param fromSqlApp
         * @param whereSql
         * @param params
         * @param orderby
         */


        selectPages(pageSize, pageIndex, selectSql, fromSqlApp, whereSql, params, orderby) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (selectSql === void 0) {
              selectSql = "*";
            }

            var fromSql = _this3.tableName;
            if (fromSqlApp) fromSql += " " + fromSqlApp;
            var orderBySql = null;
            if (orderby && orderby.length > 0) orderBySql = orderby.join(',');

            var sql = _this3.buildSelectSql(selectSql, fromSql, whereSql, orderBySql, pageSize, (pageIndex - 1) * pageSize);

            return yield _this3.getDbHelper().queryMulti(sql, params);
          })();
        }
        /**
         * 查询单条
         *
         * @public
         * @param fromSqlApp
         * @param whereSql
         * @param params
         */


        selectSingle(fromSqlApp, whereSql, params) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var fromSql = _this4.tableName;
            if (fromSqlApp) fromSql += " " + fromSqlApp;

            var sql = _this4.buildSelectSql('*', fromSql, whereSql, undefined, 1);

            return yield _this4.getDbHelper().querySingle(sql, params);
          })();
        }

      });

      _export("BaseMySqlDAL", BaseMySqlDAL = class BaseMySqlDAL extends BaseDAL {
        /**
         * 基础生成select语句
         *
         * @protected
         * @param selectSql 不包含select关键字
         * @param fromSql 不包含from关键字
         * @param whereSql 可空，有则不包含where关键字
         * @param limitCount 读取条数
         * @param limitOffset 读取偏移（从0开始）
         * @param orderBySql 可空，有则不包含order by关键字
         */
        buildSelectSql(selectSql, fromSql, whereSql, orderBySql, limitCount, limitOffset) {
          var sql = "select " + selectSql + " from " + fromSql;
          if (whereSql) sql += " where " + whereSql;
          if (orderBySql) sql += " order by " + orderBySql;

          if (typeof limitCount !== "undefined" && limitCount !== null) {
            if (typeof limitOffset !== "undefined" && limitOffset !== null) {
              sql += " limit " + limitOffset + "," + limitCount;
            } else {
              sql += " limit " + limitCount;
            }
          }

          return sql;
        }

      });

      checkIdentifier = /^[0-9a-zA-Z\_]+$/ig;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=64ad93f927565f667c265932e245374f03bc0941.js.map