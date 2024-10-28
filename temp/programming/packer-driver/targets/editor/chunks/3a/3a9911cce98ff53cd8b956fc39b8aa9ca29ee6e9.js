System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, logger;

  function formatObj(obj) {
    if (obj.stack) {
      return obj.stack;
    } else if (typeof obj === 'object') {
      return JSON.stringify(obj, null, 4);
    }

    return obj;
  }

  function objArrJoin(arr) {
    let str = "",
        sp = "";

    for (let i = 0; i < arr.length; i++) {
      str += sp;
      str += formatObj(arr[i]);
      sp = "\n";
    }

    return str;
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f0960iXDzpIubVx/lSKzhME", "logger", undefined);

      _export("logger", logger = {
        ignoreKeys: ["SyncFrame", "ClusterSyncNodeInfo", "InpFrame", "AfterFrames", "SyncState"],

        debug(...args) {// 什么也不做，相当于隐藏了日志
        },

        log(...args) {
          if (!args || args.length <= 0) return; // 让日志仍然输出到控制台

          if (args.find(a => a && a.indexOf && this.ignoreKeys.find(k => a.indexOf(k) > -1))) {
            //有忽略的关键字，跳过
            return;
          }

          console.log(new Date().toLocaleString() + "|" + objArrJoin(args)); //console.log(...args);
        },

        warn(...args) {
          if (!args || args.length <= 0) return;
          console.warn(new Date().toLocaleString() + "|" + objArrJoin(args)); //console.warn(...args);
        },

        error(...args) {
          if (!args || args.length <= 0) return;
          console.error(new Date().toLocaleString() + "|" + objArrJoin(args)); //console.error(...args);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3a9911cce98ff53cd8b956fc39b8aa9ca29ee6e9.js.map