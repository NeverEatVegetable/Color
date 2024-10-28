System.register(["__unresolved_0", "cc", "worker_threads", "chai", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Worker, isMainThread, parentPort, workerData, assert, Result, delay, authPlayerToken, createAndEnterRoom, joinRoomUseGameServerResult, setLogEnabled, _crd, playerCount, inputFS, frameSyncSec;

  function createWorkerState() {
    return {
      isEnd: false,
      isReady: false,
      fsList: [],
      fsAverage: 0,
      inputFsList: [],
      inputFsAverage: 0,
      calculateInputFS: 0
    };
  }

  async function createPlayerJoin(openId, roomId, gameServerUrl) {
    let auth = await (_crd && authPlayerToken === void 0 ? (_reportPossibleCrUseOfauthPlayerToken({
      error: Error()
    }), authPlayerToken) : authPlayerToken)(openId, openId);
    if (!auth) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
      error: Error()
    }), Result) : Result).buildErr(`auth失败：${openId}`);
    let ret = await (_crd && joinRoomUseGameServerResult === void 0 ? (_reportPossibleCrUseOfjoinRoomUseGameServerResult({
      error: Error()
    }), joinRoomUseGameServerResult) : joinRoomUseGameServerResult)(gameServerUrl, auth.playerToken, roomId, openId);
    return ret;
  }

  async function createRoomRet(openId, count) {
    let auth = await (_crd && authPlayerToken === void 0 ? (_reportPossibleCrUseOfauthPlayerToken({
      error: Error()
    }), authPlayerToken) : authPlayerToken)(openId, openId);
    (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
      error: Error()
    }), assert) : assert).isOk(auth, `auth失败：zum1`);
    let createRet = await (_crd && createAndEnterRoom === void 0 ? (_reportPossibleCrUseOfcreateAndEnterRoom({
      error: Error()
    }), createAndEnterRoom) : createAndEnterRoom)(auth.playerToken, auth.playerId, 'zum1', {
      maxPlayers: count
    });
    (_crd && assert === void 0 ? (_reportPossibleCrUseOfassert({
      error: Error()
    }), assert) : assert).isOk(createRet.succ, createRet.err);
    return createRet.data;
  }

  async function workerRun({
    id,
    roomId,
    gameServerUrl,
    inputFS
  }) {
    var _ref5;

    let ret = await createPlayerJoin(`open${id}`, roomId, gameServerUrl);

    if (!ret.succ) {
      var _ref;

      (_ref = _crd && parentPort === void 0 ? (_reportPossibleCrUseOfparentPort({
        error: Error()
      }), parentPort) : parentPort) == null || _ref.postMessage({
        step: 'error',
        ret
      });
      process.exit(0);
    }

    let gameClient = ret.data;
    let mockInputFS = null;
    let frameBatchCount = 0;
    let framePrevTime = 0;

    gameClient.onStartFrameSync = () => {
      var _ref3;

      framePrevTime = Date.now();
      mockInputFS = startInputFrame(id, gameClient, inputFS, {
        test: '测试我是个输入帧'
      }, rtInputFS => {
        var _ref2;

        (_ref2 = _crd && parentPort === void 0 ? (_reportPossibleCrUseOfparentPort({
          error: Error()
        }), parentPort) : parentPort) == null || _ref2.postMessage({
          step: 'rtInputFS',
          ret: {
            data: {
              rtInputFS
            }
          }
        });
      });
      (_ref3 = _crd && parentPort === void 0 ? (_reportPossibleCrUseOfparentPort({
        error: Error()
      }), parentPort) : parentPort) == null || _ref3.postMessage({
        step: 'startInputFrame',
        ret: {
          data: {
            calculateInputFS: mockInputFS.calculateInputFS
          }
        }
      });
    };

    gameClient.onRecvFrame = () => {
      frameBatchCount++;

      if (frameBatchCount >= 10) {
        var _ref4;

        let useTime = Date.now() - framePrevTime;
        let fs = frameBatchCount / useTime * 1000;
        (_ref4 = _crd && parentPort === void 0 ? (_reportPossibleCrUseOfparentPort({
          error: Error()
        }), parentPort) : parentPort) == null || _ref4.postMessage({
          step: 'frameState',
          ret: {
            data: {
              fs
            }
          }
        });
        frameBatchCount = 0;
        framePrevTime = Date.now();
      }
    };

    gameClient.onStopFrameSync = async () => {
      var _mockInputFS;

      (_mockInputFS = mockInputFS) == null || _mockInputFS.cancel();
      await gameClient.disconnect();
      endFn == null || endFn();
      endFn = null;
    };

    let endFn = null;
    (_ref5 = _crd && parentPort === void 0 ? (_reportPossibleCrUseOfparentPort({
      error: Error()
    }), parentPort) : parentPort) == null || _ref5.postMessage({
      step: 'ready'
    });
    await new Promise(res => {
      endFn = d => res(d);
    });
  }

  function runWorker(id, cb, workerData) {
    const worker = new (_crd && Worker === void 0 ? (_reportPossibleCrUseOfWorker({
      error: Error()
    }), Worker) : Worker)(__filename, {
      workerData
    });
    worker.on('message', d => cb({ ...d,
      id
    }));
    worker.on('error', err => cb({
      id,
      step: 'initError',
      ret: {
        err: err.message
      }
    }));
    worker.on('exit', exitCode => {
      if (exitCode === 0) {
        return null;
      }

      cb({
        id,
        step: 'exitError',
        ret: {
          id,
          err: `Worker has stopped with code ${exitCode}`
        }
      });
    });
    return worker;
  }
  /**
   * 开始模拟输入帧率额
   * @param gameClient 
   * @param inputFS 计划的输入帧，因为是会换算成每多少毫秒发送一次，如果不能整除，将会替换为最接近的帧率来模拟
   * @param frameData 发送的帧数据
   * @param outRTInputFS 间隔通知外部实际输入帧率
   * @returns mock input frame 
   */


  function startInputFrame(id, gameClient, inputFS, frameData, outRTInputFS) {
    // 计算出期望间隔时间
    let expectInterval = Math.floor(1000 / inputFS);
    if (expectInterval < 4) expectInterval = 4; //定时任务实际最小间隔为4ms
    // 再反算出这个间隔时间对应的输入帧率,叫做计算输入帧率

    let calculateInputFS = Math.floor(1000 / expectInterval);
    let prev = Date.now();
    let timerHandler = null;
    let rtBatchCount = 0;
    let rtPrevTime = Date.now();

    let next = async () => {
      if (!timerHandler) return;
      if (!gameClient.client || !gameClient.client.isConnected) return;
      await gameClient.playerInpFrame([frameData]);
      if (!timerHandler) return; //await回来，可能外部取消了，直接返回

      rtBatchCount++;

      if (rtBatchCount >= 10) {
        //每10次发送，计算一次实际输入帧率   
        let useTime = Date.now() - rtPrevTime;
        let rtFS = rtBatchCount / useTime * 1000;
        outRTInputFS(rtFS); //通知外部收集

        rtPrevTime = Date.now();
        rtBatchCount = 0;
      } //距离上次定时过去的时间,正常情况下应该超过interval，毕竟是间隔+发送数据的开销


      let prevSendInvTime = Date.now() - prev; //动态计算下次间隔

      let nextInv = 2 * expectInterval - prevSendInvTime; //实际耗时都超过想要的间隔了, 按最少4ms来计算

      if (nextInv < 4) nextInv = 4;
      prev = Date.now();
      timerHandler = setTimeout(next, nextInv);
      return timerHandler;
    };

    timerHandler = setTimeout(next, expectInterval);
    return {
      calculateInputFS,

      cancel() {
        clearTimeout(timerHandler);
        timerHandler = null;
      }

    };
  }

  async function runOnline(allPlayerCount, inputFS, syncFrameSec) {
    let workerCount = allPlayerCount - 1;
    let roomId = '';
    let gameServerUrl = '';
    let allFsAverage = 0;
    let allInputFsAverage = 0;
    let allCalculateInputFSAverage = 0;
    let ret = await createRoomRet('zum1', allPlayerCount);
    roomId = ret.roomId;
    gameServerUrl = ret.gameServerUrl;
    let gameClient = ret.gameClient;

    gameClient.client.logger.log = () => {}; //将普通日志都停掉，防止消息太多


    let waitAllReady = null;
    let workerRet = new Map();
    let workers = [];

    for (let id = 1; id <= workerCount; id++) {
      let worker = runWorker(id, ({
        id,
        step,
        ret
      }) => {
        let d = workerRet.get(id);

        if (!d) {
          d = createWorkerState();
          workerRet.set(id, d);
        }

        switch (step) {
          case 'ready':
            {
              console.log(`id:${id} [${step}]`);
              d.isReady = true;
              break;
            }

          case 'startInputFrame':
            {
              d.calculateInputFS = ret.data.calculateInputFS;
              break;
            }

          case 'frameState':
            {
              d.fsList.push(ret.data.fs);
              break;
            }

          case 'rtInputFS':
            {
              d.inputFsList.push(ret.data.rtInputFS);
              break;
            }

          default:
            {
              console.log(`id:${id} [${step}]`, ret);
              d.isEnd = true;
              break;
            }
        }

        if (workerRet.size === workerCount) {
          waitAllReady == null || waitAllReady();
          waitAllReady = null;
        }
      }, {
        id,
        roomId,
        gameServerUrl,
        inputFS
      });
      workers.push(worker);
    }

    await new Promise(res => {
      waitAllReady = args => res(args);
    });
    let tmpWorkers = [...workerRet.values()];

    if (tmpWorkers.count(d => d.isReady) !== workerCount) {
      // 说明有问题，停止
      console.log('线程等待时间完成'); // 后续改成主线程通知完成才退出

      await gameClient.disconnect();
      return {
        allState: workerRet,
        allFsAverage,
        allInputFsAverage,
        allCalculateInputFSAverage
      };
    } // 如果都是准备的状态，则正常开始


    console.log(`开始帧同步（运行${syncFrameSec}秒）`);
    await gameClient.startFrameSync(); //在都准备好后，帧同步运行10秒

    await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
      error: Error()
    }), delay) : delay)(syncFrameSec * 1000);
    await gameClient.stopFrameSync();
    console.log('停止帧同步');
    let allFsCount = 0;
    let allInputFsCount = 0;
    let allCalculateInputFSCount = 0;

    for (let [id, d] of workerRet) {
      if (d.fsList.length) {
        d.fsAverage = d.fsList.sum() / d.fsList.length;
        d.fsList.length = 0;
        allFsAverage += d.fsAverage;
        allFsCount++;
      }

      if (d.inputFsList.length) {
        d.inputFsAverage = d.inputFsList.sum() / d.inputFsList.length;
        d.inputFsList.length = 0;
        allInputFsAverage += d.inputFsAverage;
        allInputFsCount++;
      }

      if (d.calculateInputFS) {
        allCalculateInputFSAverage += d.calculateInputFS;
        allCalculateInputFSCount++;
      }
    }

    if (allFsCount && allFsAverage) {
      allFsAverage = allFsAverage / allFsCount;
    }

    if (allInputFsAverage && allInputFsCount) {
      allInputFsAverage = allInputFsAverage / allInputFsCount;
    }

    if (allCalculateInputFSAverage && allCalculateInputFSCount) {
      allCalculateInputFSAverage = allCalculateInputFSAverage / allCalculateInputFSCount;
    }

    return {
      allState: workerRet,
      allFsAverage,
      allInputFsAverage,
      allCalculateInputFSAverage
    };
  } //要把通讯的日志关掉，不然太多会出问题


  function _reportPossibleCrUseOfWorker(extras) {
    _reporterNs.report("Worker", "worker_threads", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisMainThread(extras) {
    _reporterNs.report("isMainThread", "worker_threads", _context.meta, extras);
  }

  function _reportPossibleCrUseOfparentPort(extras) {
    _reporterNs.report("parentPort", "worker_threads", _context.meta, extras);
  }

  function _reportPossibleCrUseOfworkerData(extras) {
    _reporterNs.report("workerData", "worker_threads", _context.meta, extras);
  }

  function _reportPossibleCrUseOfassert(extras) {
    _reporterNs.report("assert", "chai", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameClient(extras) {
    _reporterNs.report("GameClient", "../../src/shared/gameClient/GameClient", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../../src/shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../../src/shared/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../../src/shared/tsgf/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfauthPlayerToken(extras) {
    _reporterNs.report("authPlayerToken", "../unitTest/api/ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateAndEnterRoom(extras) {
    _reporterNs.report("createAndEnterRoom", "../unitTest/api/ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICreateAndEnterResult(extras) {
    _reporterNs.report("ICreateAndEnterResult", "../unitTest/api/ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfjoinRoomUseGameServerResult(extras) {
    _reporterNs.report("joinRoomUseGameServerResult", "../unitTest/api/ApiUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetLogEnabled(extras) {
    _reporterNs.report("setLogEnabled", "../unitTest/api/ApiUtils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_worker_threads) {
      Worker = _worker_threads.Worker;
      isMainThread = _worker_threads.isMainThread;
      parentPort = _worker_threads.parentPort;
      workerData = _worker_threads.workerData;
    }, function (_chai) {
      assert = _chai.assert;
    }, function (_unresolved_2) {
      Result = _unresolved_2.Result;
    }, function (_unresolved_3) {
      delay = _unresolved_3.delay;
    }, function (_unresolved_4) {
      authPlayerToken = _unresolved_4.authPlayerToken;
      createAndEnterRoom = _unresolved_4.createAndEnterRoom;
      joinRoomUseGameServerResult = _unresolved_4.joinRoomUseGameServerResult;
      setLogEnabled = _unresolved_4.setLogEnabled;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "12424y/IzZBA5KN2+z1av/z", "onlineTest", undefined);

      (_crd && setLogEnabled === void 0 ? (_reportPossibleCrUseOfsetLogEnabled({
        error: Error()
      }), setLogEnabled) : setLogEnabled)(false);
      playerCount = 50; //再大话，目前的机制，worker内部的通讯效率会变成瓶颈，除非数据在worker内部算好，结束后一次性推送

      inputFS = 10;
      frameSyncSec = 20;

      if (!(_crd && isMainThread === void 0 ? (_reportPossibleCrUseOfisMainThread({
        error: Error()
      }), isMainThread) : isMainThread)) {
        workerRun(_crd && workerData === void 0 ? (_reportPossibleCrUseOfworkerData({
          error: Error()
        }), workerData) : workerData);
      } else {
        console.log(`开始运行${playerCount}人在线,${inputFS}输入帧率`);
        runOnline(playerCount, inputFS, frameSyncSec).then(function (res) {
          console.log(`结束运行`, res);
          process.exit(0);
        });
      }

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ad98b5df5591399cb58531dabe941c0fd20788de.js.map