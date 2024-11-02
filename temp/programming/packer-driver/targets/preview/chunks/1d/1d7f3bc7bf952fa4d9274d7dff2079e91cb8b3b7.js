System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  /**
   * 对象里是否有属性,通常用于判断将object当作键值对来使用的场景
   *
   * @param object
   * @returns
   */

  /**
   * 异步延时
   *
   * @param ms
   * @returns
   */

  /**
   * 可取消的异步延时
   *
   * @param ms
   * @returns
   */

  /**
   * 提取数组中最符合条件的元素 O(n)
   *
   * @typeParam T
   * @param arr
   * @param compareFn 数组中每个元素对比，返回最符合条件的元素
   * @param filter 先筛选,通过筛选的元素再进行提取最符合的
   * @returns
   */

  /**
   * 原数组直接删除符合条件的元素，返回删除的数量
   *
   * @typeParam T
   * @param arr
   * @param itemCanRemove
   * @returns
   */

  /**
   * 分组
   *
   * @typeParam Item
   * @param arr
   * @param grouper
   * @returns
   */

  /**
   *合并数组中对象元素中的数组!
   *
   * @typeParam ArrItem
   * @typeParam ItemArrItem
   * @param arr
   * @param itemArrGet 获取元素中的数组
   * @param mergeProc 合并操作(返回false表示不继续),merge为最终合并的数组, 需要自行往里面操作(连接或者去重等)
   * @returns
   */

  /**
   * 连接数组中对象元素中的数组!
   *
   * @typeParam ArrItem
   * @typeParam ItemArrItem
   * @param arr
   * @param itemArrGet 获取元素中的数组
   * @returns
   */

  /**
   * 数组元素值累加
   *
   * @typeParam Item
   * @param arr
   * @param mapper
   * @returns
   */

  /**
   * 数组元素满足条件的数量
   *
   * @typeParam Item
   * @param arr
   * @param filter
   * @returns
   */

  /**
   * 应用skip+limit到数组实现
   * @template T 
   * @param arr 
   * @param [skip] 
   * @param [limit] 
   * @returns skip limit to slice 
   */

  /**
   *将两个一样长度的数值数组相加,输出到另外一个一样长度的数值数组
   *
   * @param out
   * @param a
   * @param b
   */

  /**
   * 给数组的每个元素更新值
   *
   * @param out
   * @param set
   */

  /**
   * 解析进程入口参数为一个对象, 格式为 -配置名1=配置值1 -配置名2="带有空格 的配置值", 转为 \{ 配置名1:"配置值1",配置名2:"带有空格 的配置值" \}
   *
   * @param args 进程传入参数列表
   * @param configNamePrefix
   */

  /**
   * 提取 process.argv 中 "ARGV_" 开头的值 转为配置对象
   *
   * @param env 配置名列表
   */
  function hasProperty(object) {
    if (!object) return false;

    for (var key in object) {
      return true;
    }

    return false;
  }

  function delay(_x) {
    return _delay.apply(this, arguments);
  }

  function _delay() {
    _delay = _asyncToGenerator(function* (ms) {
      yield delayCanCancel(ms).waitResult();
    });
    return _delay.apply(this, arguments);
  }

  function delayCanCancel(ms) {
    var tHD = 0;
    var task = new Promise(resolve => {
      tHD = setTimeout(resolve, ms);
    });
    return {
      waitResult() {
        return task;
      },

      cancel() {
        clearTimeout(tHD);
        return Promise.resolve();
      }

    };
  }

  function arrWinner(arr, compareFn, filter) {
    var winner = null;

    for (var _item of arr) {
      if ((filter == null ? void 0 : filter.call(null, _item)) === false) continue;

      if (!winner) {
        winner = _item;
        continue;
      }

      winner = compareFn(winner, _item);
    }

    return winner;
  }

  function arrRemoveItems(arr, itemCanRemove) {
    var deleteCount = 0;

    for (var i = 0; i < arr.length; i++) {
      if (itemCanRemove(arr[i])) {
        arr.splice(i, 1);
        i--;
        deleteCount++;
        continue;
      }
    }

    return deleteCount;
  }

  function arrGroup(arr, grouper) {
    var groups = new Map();

    for (var _item2 of arr) {
      var key = grouper(_item2);
      var list = groups.get(key);

      if (!list) {
        list = [];
        groups.set(key, list);
      }

      list.push(_item2);
    }

    return groups;
  }

  function arrItemArrMerge(arr, itemArrGet, mergeProc) {
    var merge = [];

    for (var _item3 of arr) {
      var itemArr = itemArrGet(_item3);
      if (mergeProc(merge, itemArr) === false) return merge;
    }

    return merge;
  }

  function arrItemArrMergeConcat(arr, itemArrGet) {
    return arrItemArrMerge(arr, itemArrGet, (m, curr) => {
      m = m.concat(...curr);
    });
  }

  function arrSum(arr, mapper) {
    var sum = 0;

    for (var _item4 of arr) {
      sum += mapper(_item4);
    }

    return sum;
  }

  function arrCount(arr, filter) {
    var count = 0;

    for (var _item5 of arr) {
      if (filter(_item5)) count++;
    }

    return count;
  }

  function arrSkipAndLimit(arr, skip, limit) {
    var start = skip !== undefined ? skip : 0; // 如果跳过数量剩下没了，直接返回空数组

    if (start >= arr.length) return [];
    var end = limit !== undefined ? start + limit : arr.length;
    if (end > arr.length) end = arr.length;
    return arr.slice(start, end);
  }

  function numbersAdd(out, a, b) {
    for (var _index = 0; _index < a.length; _index++) {
      out[_index] = a[_index] + b[_index];
    }
  }

  function arrUpdateItems(out, set) {
    for (var _index2 = 0; _index2 < out.length; _index2++) {
      out[_index2] = set(out[_index2], _index2);
    }
  }

  function parseProcessArgv(args, configNamePrefix) {
    if (configNamePrefix === void 0) {
      configNamePrefix = '-';
    }

    var setOption = {};

    for (var arg of args) {
      var argStr = arg.trim();

      if (argStr.startsWith(configNamePrefix)) {
        var dIndex = argStr.indexOf('=');
        var key = dIndex > -1 ? argStr.substring(1, dIndex) : argStr.substring(1);
        var val = dIndex > -1 ? argStr.substring(dIndex + 1) : ''; //支持值头尾有双引号

        val = val.replace(/^"?(.*?)"?$/ig, ($0, $1) => $1);
        setOption[key] = val;
      }
    }

    return setOption;
  }

  function parseProcessEnv(env) {
    var setOption = {};

    for (var key in env) {
      if (key.startsWith('ARGV_')) {
        var argvName = key.substring('ARGV_'.length);
        setOption[argvName] = env[key];
      }
    }

    return setOption;
  }

  function _reportPossibleCrUseOfICancelableExec(extras) {
    _reporterNs.report("ICancelableExec", "./ICancelable", _context.meta, extras);
  }

  _export({
    hasProperty: hasProperty,
    delay: delay,
    delayCanCancel: delayCanCancel,
    arrWinner: arrWinner,
    arrRemoveItems: arrRemoveItems,
    arrGroup: arrGroup,
    arrItemArrMerge: arrItemArrMerge,
    arrItemArrMergeConcat: arrItemArrMergeConcat,
    arrSum: arrSum,
    arrCount: arrCount,
    arrSkipAndLimit: arrSkipAndLimit,
    numbersAdd: numbersAdd,
    arrUpdateItems: arrUpdateItems,
    parseProcessArgv: parseProcessArgv,
    parseProcessEnv: parseProcessEnv
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6315d6hQ2tIEZh0xh20LqIG", "Utils", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1d7f3bc7bf952fa4d9274d7dff2079e91cb8b3b7.js.map