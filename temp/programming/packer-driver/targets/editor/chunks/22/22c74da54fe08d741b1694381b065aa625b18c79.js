System.register(["__unresolved_0", "cc", "__unresolved_1", "mysql"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Result, mysql, MySqlDbHelper, MySqlFactory, _crd;

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmysql(extras) {
    _reporterNs.report("mysql", "mysql", _context.meta, extras);
  }

  _export({
    MySqlDbHelper: void 0,
    MySqlFactory: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Result = _unresolved_2.Result;
    }, function (_mysql) {
      mysql = _mysql.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e821cSR63lAO6C3fxdJ7KGJ", "DbHelper", undefined);

      /**数据库连接实例*/
      _export("MySqlDbHelper", MySqlDbHelper = class MySqlDbHelper {
        constructor(pool) {
          this.pool = void 0;
          this.conn = void 0;
          this.autoClose = true;
          this.pool = pool;
        }

        setManualClose(manual) {
          this.autoClose = !manual;
        }

        open() {
          return new Promise(resolve => {
            if (!this.pool) return resolve((_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr("从连接池中获取连接失败：连接池为空!"));
            this.pool.getConnection((err, connection) => {
              if (err) {
                return resolve((_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                  error: Error()
                }), Result) : Result).buildErr("从连接池中获取连接失败：" + err.message));
              } //支持sql的参数名方式的参数化


              connection.config.queryFormat = function (query, values) {
                if (!values) return query;
                return query.replace(/\:(\w+)/g, (txt, key) => {
                  if (values.hasOwnProperty(key)) {
                    return connection.escape(values[key]);
                  }

                  return txt;
                });
              };

              this.conn = connection;
              return resolve((_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildSucc(null));
            });
          });
        }

        close() {
          var _this$conn;

          (_this$conn = this.conn) == null || _this$conn.release();
          this.conn = undefined;
          return Promise.resolve();
        }

        queryMulti(sql, params) {
          return new Promise(async resolve => {
            if (!this.conn) {
              let openRet = await this.open();

              if (!openRet.succ) {
                return resolve((_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                  error: Error()
                }), Result) : Result).buildErr(openRet.err));
              }
            }

            this.conn.query(sql, params, async (err, result) => {
              if (this.autoClose) await this.close();

              if (err) {
                return resolve((_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                  error: Error()
                }), Result) : Result).buildErr(err.message));
              }

              if (result && result.length) {
                return resolve((_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                  error: Error()
                }), Result) : Result).buildSucc(result));
              }

              return resolve((_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildSucc([]));
            });
          });
        }

        querySingle(sql, params) {
          return new Promise(async resolve => {
            if (!this.conn) {
              let openRet = await this.open();

              if (!openRet.succ) {
                return resolve((_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                  error: Error()
                }), Result) : Result).buildErr(openRet.err));
              }
            }

            this.conn.query(sql, params, async (err, result) => {
              if (this.autoClose) await this.close();

              if (err) {
                return resolve((_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                  error: Error()
                }), Result) : Result).buildErr(err.message));
              }

              if (result && result.length) {
                return resolve((_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                  error: Error()
                }), Result) : Result).buildSucc(result[0]));
              }

              return resolve((_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
                error: Error()
              }), Result) : Result).buildSucc(null));
            });
          });
        }

      });
      /**mysql的连接工厂*/


      _export("MySqlFactory", MySqlFactory = class MySqlFactory {
        /**
         * 获取一个mysql的连接工具实例
         *
         * @public
         * @param connString
         * @returns
         */
        static getMySqlDbHelper(connString) {
          if (!MySqlFactory.mysqlPool) {
            MySqlFactory.mysqlPool = (_crd && mysql === void 0 ? (_reportPossibleCrUseOfmysql({
              error: Error()
            }), mysql) : mysql).createPool(connString);
          }

          return new MySqlDbHelper(MySqlFactory.mysqlPool);
        }

      });

      MySqlFactory.mysqlPool = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=22c74da54fe08d741b1694381b065aa625b18c79.js.map