System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, OrderBy, BaseDAL, BaseMySqlDAL, _crd, checkIdentifier;

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
          if (!checkIdentifierConform(tableName)) throw Error(`${tableName}表名不合法！`);
          if (!checkIdentifierConform(colName)) throw Error(`${colName}字段名不合法！`);
          this.tableName = tableName;
          this.colName = colName;
          this.isAsc = isAsc;
        }

        toString(reverseAsc = false) {
          let str = '';
          if (this.tableName) str += this.tableName + '.';
          str += this.colName;
          let asc = reverseAsc ? !this.isAsc : this.isAsc;
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

        async closeCurrDb() {
          if (this._currDbHelper) {
            await this._currDbHelper.close();
            this._currDbHelper = undefined;
          }
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
        async selectAll(selectSql = "*", fromSqlApp, whereSql, params, orderby, limitCount) {
          let fromSql = this.tableName;
          if (fromSqlApp) fromSql += ` ${fromSqlApp}`;
          let orderBySql = null;
          if (orderby && orderby.length > 0) orderBySql = orderby.join(',');
          let sql = this.buildSelectSql(selectSql, fromSql, whereSql, orderBySql, limitCount);
          return await this.getDbHelper().queryMulti(sql, params);
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


        async selectPages(pageSize, pageIndex, selectSql = "*", fromSqlApp, whereSql, params, orderby) {
          let fromSql = this.tableName;
          if (fromSqlApp) fromSql += ` ${fromSqlApp}`;
          let orderBySql = null;
          if (orderby && orderby.length > 0) orderBySql = orderby.join(',');
          let sql = this.buildSelectSql(selectSql, fromSql, whereSql, orderBySql, pageSize, (pageIndex - 1) * pageSize);
          return await this.getDbHelper().queryMulti(sql, params);
        }
        /**
         * 查询单条
         *
         * @public
         * @param fromSqlApp
         * @param whereSql
         * @param params
         */


        async selectSingle(fromSqlApp, whereSql, params) {
          let fromSql = this.tableName;
          if (fromSqlApp) fromSql += ` ${fromSqlApp}`;
          let sql = this.buildSelectSql('*', fromSql, whereSql, undefined, 1);
          return await this.getDbHelper().querySingle(sql, params);
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
          let sql = `select ${selectSql} from ${fromSql}`;
          if (whereSql) sql += ` where ${whereSql}`;
          if (orderBySql) sql += ` order by ${orderBySql}`;

          if (typeof limitCount !== "undefined" && limitCount !== null) {
            if (typeof limitOffset !== "undefined" && limitOffset !== null) {
              sql += ` limit ${limitOffset},${limitCount}`;
            } else {
              sql += ` limit ${limitCount}`;
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