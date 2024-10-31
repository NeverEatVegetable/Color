System.register(["__unresolved_0", "cc", "chai", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, assert, FrameSyncExecutor, EPlayerInputFrameType, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfassert(extras) {
    _reporterNs.report("assert", "chai", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFrameSyncExecutor(extras) {
    _reporterNs.report("FrameSyncExecutor", "../../../src/gameServer/FrameSyncExecutor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgNotifySyncFrame(extras) {
    _reporterNs.report("MsgNotifySyncFrame", "../../../src/shared/gameClient/protocols/MsgNotifySyncFrame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEPlayerInputFrameType(extras) {
    _reporterNs.report("EPlayerInputFrameType", "../../../src/shared/tsgf/room/IGameFrame", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_chai) {
      assert = _chai.assert;
    }, function (_unresolved_2) {
      FrameSyncExecutor = _unresolved_2.FrameSyncExecutor;
    }, function (_unresolved_3) {
      EPlayerInputFrameType = _unresolved_3.EPlayerInputFrameType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "95e42d29MlCtaU7HapYHne+", "FrameSyncExecutor.test", undefined);

      describe('FrameSyncExecutor', function () {
        test('同步1个空帧', /*#__PURE__*/_asyncToGenerator(function* () {
          var onSyncOneFrame = null;
          var fse = new (_crd && FrameSyncExecutor === void 0 ? (_reportPossibleCrUseOfFrameSyncExecutor({
            error: Error()
          }), FrameSyncExecutor) : FrameSyncExecutor)(msg => {
            if (onSyncOneFrame) onSyncOneFrame(msg);
          });
          fse._syncing = true; //模拟已经开始同步

          onSyncOneFrame = msg => {
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(msg.syncFrame.frameIndex === 0, "\u5E94\u8BE5\u4E3A0, \u5B9E\u9645\u4E3A" + msg.syncFrame.frameIndex);
          }; //运行1帧后


          fse._syncOneFrameHandler(); //验证相关索引是否正确


          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(fse.nextSyncFrameIndex === 1, "\u5E94\u4E3A1,\u5B9E\u9645\u4E3A" + fse.nextSyncFrameIndex);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(fse.maxSyncFrameIndex === 0, "\u5E94\u4E3A0,\u5B9E\u9645\u4E3A" + fse.maxSyncFrameIndex);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(fse.allFrames.length == 0, "\u5E94\u4E3A0,\u5B9E\u9645\u4E3A" + fse.allFrames.length);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(fse.prevSyncFrameIndexArrIndex === -1, "\u5E94\u4E3A-1,\u5B9E\u9645\u4E3A" + fse.maxSyncFrameIndex); //验证追帧信息是否正确

          var afterFramesMsg = fse.buildAfterFrames();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(afterFramesMsg.afterEndFrameIndex === 0, "应为0,实际为" + afterFramesMsg.afterEndFrameIndex);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(afterFramesMsg.stateFrameIndex === -1, "应为-1,实际为" + afterFramesMsg.stateFrameIndex);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(afterFramesMsg.afterFrames.length === 0, "应为0,实际为" + afterFramesMsg.afterFrames.length);
        }));
        test('同步1空帧,输入,再同步1帧', /*#__PURE__*/_asyncToGenerator(function* () {
          var onSyncOneFrame = null;
          var fse = new (_crd && FrameSyncExecutor === void 0 ? (_reportPossibleCrUseOfFrameSyncExecutor({
            error: Error()
          }), FrameSyncExecutor) : FrameSyncExecutor)(msg => {
            if (onSyncOneFrame) onSyncOneFrame(msg);
          });
          fse._syncing = true; //模拟已经开始同步

          onSyncOneFrame = msg => {
            //第一个空帧
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(msg.syncFrame.frameIndex === 0, "\u5E94\u8BE5\u4E3A0, \u5B9E\u9645\u4E3A" + msg.syncFrame.frameIndex);
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(msg.syncFrame.playerInputs === null, "\u5E94\u8BE5\u4E3Anull, \u5B9E\u9645\u4E3A" + msg.syncFrame.playerInputs);
          }; //同步第1个帧


          fse._syncOneFrameHandler(); //验证相关索引是否正确


          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(fse.nextSyncFrameIndex === 1, "\u5E94\u4E3A1,\u5B9E\u9645\u4E3A" + fse.nextSyncFrameIndex);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(fse.maxSyncFrameIndex === 0, "\u5E94\u4E3A0,\u5B9E\u9645\u4E3A" + fse.maxSyncFrameIndex);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(fse.prevSyncFrameIndexArrIndex === -1, "\u5E94\u4E3A-1,\u5B9E\u9645\u4E3A" + fse.maxSyncFrameIndex);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(fse.allFrames.length == 0, "\u5E94\u4E3A0,\u5B9E\u9645\u4E3A" + fse.allFrames.length); //验证追帧信息是否正确

          var afterFramesMsg = fse.buildAfterFrames();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(afterFramesMsg.afterEndFrameIndex === 0, "应为0,实际为" + afterFramesMsg.afterEndFrameIndex);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(afterFramesMsg.stateFrameIndex === -1, "应为-1,实际为" + afterFramesMsg.stateFrameIndex);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(afterFramesMsg.afterFrames.length === 0, "应为0,实际为" + afterFramesMsg.afterFrames.length);
          fse.addPlayerInpFrame("1", (_crd && EPlayerInputFrameType === void 0 ? (_reportPossibleCrUseOfEPlayerInputFrameType({
            error: Error()
          }), EPlayerInputFrameType) : EPlayerInputFrameType).Operates, inp => inp.operates = [{
            test: "t1"
          }]);

          onSyncOneFrame = msg => {
            //第2个,应该为输入帧
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(msg.syncFrame.frameIndex == 1, "\u5E94\u4E3A1,\u5B9E\u9645\u4E3A" + msg.syncFrame.frameIndex);
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(msg.syncFrame.playerInputs, "\u5E94\u4E0D\u4E3Anull,\u5B9E\u9645\u4E3A" + msg.syncFrame.playerInputs);
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(msg.syncFrame.playerInputs.length === 1, "\u5E94\u4E3A1,\u5B9E\u9645\u4E3A" + msg.syncFrame.playerInputs.length);
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(msg.syncFrame.playerInputs[0].playerId === '1', "\u5E94\u4E3A1,\u5B9E\u9645\u4E3A" + msg.syncFrame.playerInputs[0].playerId);
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(msg.syncFrame.playerInputs[0].operates.length === 1, "\u5E94\u4E3A1,\u5B9E\u9645\u4E3A" + msg.syncFrame.playerInputs[0].operates.length);
            (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
              error: Error()
            }), assert) : assert).ok(msg.syncFrame.playerInputs[0].operates[0].test === 't1', "\u5E94\u4E3At1,\u5B9E\u9645\u4E3A" + msg.syncFrame.playerInputs[0].operates[0].test);
          }; //同步第2个帧


          fse._syncOneFrameHandler(); //验证帧执行器的相关索引是否正确


          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(fse.nextSyncFrameIndex === 2, "应为2,实际为" + fse.nextSyncFrameIndex);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(fse.maxSyncFrameIndex === 1, "应为1,实际为" + fse.maxSyncFrameIndex);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(fse.allFrames.length == 1, "\u5E94\u4E3A1,\u5B9E\u9645\u4E3A" + fse.allFrames.length);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(fse.prevSyncFrameIndexArrIndex === 0, "\u5E94\u4E3A0,\u5B9E\u9645\u4E3A" + fse.maxSyncFrameIndex); //验证追帧信息是否正确

          afterFramesMsg = fse.buildAfterFrames();
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(afterFramesMsg.afterEndFrameIndex === 1, "应为1,实际为" + afterFramesMsg.afterEndFrameIndex);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(afterFramesMsg.stateFrameIndex === -1, "应为-1,实际为" + afterFramesMsg.stateFrameIndex);
          (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
            error: Error()
          }), assert) : assert).ok(afterFramesMsg.afterFrames.length === 1, "应为1,实际为" + afterFramesMsg.afterFrames.length);
        }));
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2ebd872823b57417825079fddfbd52be3cfa7a42.js.map