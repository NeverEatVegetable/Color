System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

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

    for (let key in object) {
      return true;
    }

    return false;
  }

  async function delay(ms) {
    await delayCanCancel(ms).waitResult();
  }

  function delayCanCancel(ms) {
    let tHD = 0;
    let task = new Promise(resolve => {
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
    let winner = null;

    for (let item of arr) {
      if ((filter == null ? void 0 : filter.call(null, item)) === false) continue;

      if (!winner) {
        winner = item;
        continue;
      }

      winner = compareFn(winner, item);
    }

    return winner;
  }

  function arrRemoveItems(arr, itemCanRemove) {
    let deleteCount = 0;

    for (let i = 0; i < arr.length; i++) {
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
    let groups = new Map();

    for (let item of arr) {
      let key = grouper(item);
      let list = groups.get(key);

      if (!list) {
        list = [];
        groups.set(key, list);
      }

      list.push(item);
    }

    return groups;
  }

  function arrItemArrMerge(arr, itemArrGet, mergeProc) {
    let merge = [];

    for (let item of arr) {
      let itemArr = itemArrGet(item);
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
    let sum = 0;

    for (let item of arr) {
      sum += mapper(item);
    }

    return sum;
  }

  function arrCount(arr, filter) {
    let count = 0;

    for (let item of arr) {
      if (filter(item)) count++;
    }

    return count;
  }

  function arrSkipAndLimit(arr, skip, limit) {
    let start = skip !== undefined ? skip : 0; // 如果跳过数量剩下没了，直接返回空数组

    if (start >= arr.length) return [];
    let end = limit !== undefined ? start + limit : arr.length;
    if (end > arr.length) end = arr.length;
    return arr.slice(start, end);
  }

  function numbersAdd(out, a, b) {
    for (let index = 0; index < a.length; index++) {
      out[index] = a[index] + b[index];
    }
  }

  function arrUpdateItems(out, set) {
    for (let index = 0; index < out.length; index++) {
      out[index] = set(out[index], index);
    }
  }

  function parseProcessArgv(args, configNamePrefix = '-') {
    let setOption = {};

    for (let arg of args) {
      let argStr = arg.trim();

      if (argStr.startsWith(configNamePrefix)) {
        let dIndex = argStr.indexOf('=');
        let key = dIndex > -1 ? argStr.substring(1, dIndex) : argStr.substring(1);
        let val = dIndex > -1 ? argStr.substring(dIndex + 1) : ''; //支持值头尾有双引号

        val = val.replace(/^"?(.*?)"?$/ig, ($0, $1) => $1);
        setOption[key] = val;
      }
    }

    return setOption;
  }

  function parseProcessEnv(env) {
    let setOption = {};

    for (let key in env) {
      if (key.startsWith('ARGV_')) {
        let argvName = key.substring('ARGV_'.length);
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

      _cclegacy._RF.push({}, "ada5fi1GRFAXb1lnHdYwHIr", "Utils", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4cb4b15a0dfdc4d200fb1013c7fbb3c311e34aa5.js.map