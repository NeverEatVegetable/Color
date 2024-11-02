System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ConnectionCollection, _crd;

  function _reportPossibleCrUseOfClientConnection(extras) {
    _reporterNs.report("ClientConnection", "./GameServer", _context.meta, extras);
  }

  _export("ConnectionCollection", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8744zGTNRPWbIUtLa3mvvI", "ConnectionCollection", undefined);

      /**连接的集合*/
      _export("ConnectionCollection", ConnectionCollection = class ConnectionCollection {
        /**集合内的连接数组*/
        get connections() {
          return this._conns;
        }
        /**集合内的连接字典,连接标识=>连接对象*/


        get connectionMap() {
          return this._connMap;
        }
        /**
         *
         * @param getConnKey 获取连接标识,可以用connId也可以用其他
         */


        constructor(getConnKey) {
          this._conns = [];
          this._connMap = new Map();
          this.getConnKey = void 0;
          this.getConnKey = getConnKey;
        }
        /**
         * 加入连接
         * @param conn 
         */


        addConnection(conn) {
          var k = this.getConnKey(conn);
          if (!k) return;
          this.removeConnection(k);

          this._connMap.set(k, conn);

          this._conns.push(conn);
        }
        /**
         * 移除指定连接
         * @param conn 
         */


        removeConnection(connKey) {
          this._connMap.delete(connKey);

          this._conns.remove(c => this.getConnKey(c) === connKey);
        }
        /**清除所有连接*/


        clearAllConnections() {
          this._connMap.clear();

          this._conns = [];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cd26d5084224dd9af59fb0ce83f815e03a24f70d.js.map