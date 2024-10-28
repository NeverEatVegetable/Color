System.register(["__unresolved_0", "cc", "chai", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, assert, delay, arrGroup, arrSkipAndLimit, _crd;

  function _reportPossibleCrUseOfassert(extras) {
    _reporterNs.report("assert", "chai", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../../../src/shared/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfarrGroup(extras) {
    _reporterNs.report("arrGroup", "../../../src/shared/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfarrSkipAndLimit(extras) {
    _reporterNs.report("arrSkipAndLimit", "../../../src/shared/tsgf/Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_chai) {
      assert = _chai.assert;
    }, function (_unresolved_2) {
      delay = _unresolved_2.delay;
      arrGroup = _unresolved_2.arrGroup;
      arrSkipAndLimit = _unresolved_2.arrSkipAndLimit;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c32d8shTE5De6wiVO6JCY36", "Utils.test", undefined);

      describe("基础方法", () => {
        test('delay', async () => {
          console.log(new Date().toLocaleString());
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(5000);
          console.log(new Date().toLocaleString());
        }, 60000);
        test('groupByArr', async () => {
          var _r$get, _r$get2, _r$get3, _r$get4;

          let r = (_crd && arrGroup === void 0 ? (_reportPossibleCrUseOfarrGroup({
            error: Error()
          }), arrGroup) : arrGroup)([{
            key: '1',
            name: 'a'
          }, {
            key: '1',
            name: 'b'
          }, {
            key: '2',
            name: 'c'
          }], i => i.key);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(r.size === 2, '应为2实为' + r.size);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_r$get = r.get('1')) == null ? void 0 : _r$get.length) === 2, '应为2实为' + ((_r$get2 = r.get('1')) == null ? void 0 : _r$get2.length));
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(((_r$get3 = r.get('2')) == null ? void 0 : _r$get3.length) === 1, '应为1实为' + ((_r$get4 = r.get('2')) == null ? void 0 : _r$get4.length));
        }, 60000);
        test('arrSkipAndLimit', async () => {
          let r = (_crd && arrSkipAndLimit === void 0 ? (_reportPossibleCrUseOfarrSkipAndLimit({
            error: Error()
          }), arrSkipAndLimit) : arrSkipAndLimit)([1, 2, 3], undefined, undefined);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(r.length === 3, '应为3实为' + r.length);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(r.join(',') === '1,2,3', '应为1,2,3实为' + r.join(','));
          r = (_crd && arrSkipAndLimit === void 0 ? (_reportPossibleCrUseOfarrSkipAndLimit({
            error: Error()
          }), arrSkipAndLimit) : arrSkipAndLimit)([1, 2, 3], 0, undefined);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(r.length === 3, '应为3实为' + r.length);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(r.join(',') === '1,2,3', '应为1,2,3实为' + r.join(','));
          r = (_crd && arrSkipAndLimit === void 0 ? (_reportPossibleCrUseOfarrSkipAndLimit({
            error: Error()
          }), arrSkipAndLimit) : arrSkipAndLimit)([1, 2, 3], 1, undefined);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(r.length === 2, '应为2实为' + r.length);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(r.join(',') === '2,3', '应为2,3实为' + r.join(','));
          r = (_crd && arrSkipAndLimit === void 0 ? (_reportPossibleCrUseOfarrSkipAndLimit({
            error: Error()
          }), arrSkipAndLimit) : arrSkipAndLimit)([1, 2, 3], undefined, 1);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(r.length === 1, '应为1实为' + r.length);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(r.join(',') === '1', '应为1实为' + r.join(','));
          r = (_crd && arrSkipAndLimit === void 0 ? (_reportPossibleCrUseOfarrSkipAndLimit({
            error: Error()
          }), arrSkipAndLimit) : arrSkipAndLimit)([1, 2, 3], 1, 1);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(r.length === 1, '应为1实为' + r.length);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(r.join(',') === '2', '应为2实为' + r.join(','));
          r = (_crd && arrSkipAndLimit === void 0 ? (_reportPossibleCrUseOfarrSkipAndLimit({
            error: Error()
          }), arrSkipAndLimit) : arrSkipAndLimit)([1, 2, 3], 1, 3);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(r.length === 2, '应为2实为' + r.length);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(r.join(',') === '2,3', '应为2,3实为' + r.join(','));
          r = (_crd && arrSkipAndLimit === void 0 ? (_reportPossibleCrUseOfarrSkipAndLimit({
            error: Error()
          }), arrSkipAndLimit) : arrSkipAndLimit)([1, 2, 3], 3, 1);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(r.length === 0, '应为0实为' + r.length);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(r.join(',') === '', '应为""实为' + r.join(','));
        }, 60000);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e534ab6da4707a9f3159df16a380e0bb7c102f79.js.map