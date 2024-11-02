System.register(["__unresolved_0", "cc", "__unresolved_1", "crypto-js", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Result, CryptoJS, Game, Room, GroupRoom, HallClient, initSDK, buildSDKProvider, ApiHelper, _crd, hallServerUrl, hallClient;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  /**模拟应用在服务端授权拿到token后, 初始化SDK客户端*/
  function initGame(_x, _x2) {
    return _initGame.apply(this, arguments);
  }
  /**模拟应用在服务端获取玩家授权*/


  function _initGame() {
    _initGame = _asyncToGenerator(function* (openId, showName) {
      var ret = yield authPlayerToken(openId, showName);
      if (!ret.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
        error: Error()
      }), Result) : Result).transition(ret);
      var game = new (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
        error: Error()
      }), Game) : Game)();
      var room = new (_crd && Room === void 0 ? (_reportPossibleCrUseOfRoom({
        error: Error()
      }), Room) : Room)(game);
      var group = new (_crd && GroupRoom === void 0 ? (_reportPossibleCrUseOfGroupRoom({
        error: Error()
      }), GroupRoom) : GroupRoom)(game, room);
      game.init(hallServerUrl, ret.data.playerId, ret.data.playerToken);
      return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
        error: Error()
      }), Result) : Result).buildSucc({
        game,
        room,
        group,
        playerId: ret.data.playerId,
        playerToken: ret.data.playerToken,

        dispose() {
          return _asyncToGenerator(function* () {
            yield group.dispose();
            yield room.dispose();
            yield game.dispose();
          })();
        }

      });
    });
    return _initGame.apply(this, arguments);
  }

  function authPlayerToken(_x3, _x4) {
    return _authPlayerToken.apply(this, arguments);
  }

  function _authPlayerToken() {
    _authPlayerToken = _asyncToGenerator(function* (openId, showName) {
      var _ret1$err, _ret1$err$code, _ret1$err2;

      var req1 = ApiHelper.appCryptoEncrypt("default", "FDGWPRET345-809RGKFER43SKGF", {
        openId: openId,
        showName: showName,
        authTokenDay: 1
      });
      var ret1 = yield hallClient.client.callApi("Authorize", req1);
      if (ret1.isSucc) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
        error: Error()
      }), Result) : Result).buildSucc(ret1.res);
      return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
        error: Error()
      }), Result) : Result).buildErr((_ret1$err = ret1.err) == null ? void 0 : _ret1$err.message, (_ret1$err$code = (_ret1$err2 = ret1.err) == null ? void 0 : _ret1$err2.code) != null ? _ret1$err$code : 1);
    });
    return _authPlayerToken.apply(this, arguments);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../../src/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../../src/tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAppEncryptRequest(extras) {
    _reporterNs.report("IAppEncryptRequest", "../../src/tsgf/apiCrypto/Models", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCryptoJS(extras) {
    _reporterNs.report("CryptoJS", "crypto-js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResAuthorize(extras) {
    _reporterNs.report("ResAuthorize", "../../src/hallClient/protocols/PtlAuthorize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "../../src/Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoom(extras) {
    _reporterNs.report("Room", "../../src/Room", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupRoom(extras) {
    _reporterNs.report("GroupRoom", "../../src/GroupRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallClient(extras) {
    _reporterNs.report("HallClient", "../../src/hallClient/HallClient", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitSDK(extras) {
    _reporterNs.report("initSDK", "../../src/SDK", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbuildSDKProvider(extras) {
    _reporterNs.report("buildSDKProvider", "./env", _context.meta, extras);
  }

  _export({
    initGame: initGame,
    authPlayerToken: authPlayerToken
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Result = _unresolved_2.Result;
    }, function (_cryptoJs) {
      CryptoJS = _cryptoJs.default;
    }, function (_unresolved_3) {
      Game = _unresolved_3.Game;
    }, function (_unresolved_4) {
      Room = _unresolved_4.Room;
    }, function (_unresolved_5) {
      GroupRoom = _unresolved_5.GroupRoom;
    }, function (_unresolved_6) {
      HallClient = _unresolved_6.HallClient;
    }, function (_unresolved_7) {
      initSDK = _unresolved_7.initSDK;
    }, function (_unresolved_8) {
      buildSDKProvider = _unresolved_8.buildSDKProvider;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "295d5Ne79hNLKHunYHVTBom", "TestUnit", undefined);

      ApiHelper = class ApiHelper {
        /**
         * des加密，ECB模式，PKCS7填充，密钥用UTF8提取前8个字节，输入字符串使用UTF8编码解析，输出加密后的base64编码字符串
         *
         * @public
         * @param input 要加密的字符串（明文）
         * @param strKey 长度超过8个字节即可，只会取前8个字节
         * @returns
         */
        static desEncryptECB_PKCS7_Base64(input, strKey) {
          //转为utf8字节,并只取前8个字节
          var keyBytes = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).lib.WordArray.create((_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).enc.Utf8.parse(strKey).words.slice(0, 8), 8);
          var inputBytes = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).enc.Utf8.parse(input);
          var enResult = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).DES.encrypt(inputBytes, keyBytes, {
            mode: (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
              error: Error()
            }), CryptoJS) : CryptoJS).mode.ECB,
            padding: (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
              error: Error()
            }), CryptoJS) : CryptoJS).pad.Pkcs7
          });
          var retStr = enResult.ciphertext.toString((_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).enc.Base64);
          return retStr;
        }
        /**
         * des解密，ECB模式，PKCS7填充，密钥用UTF8提取前8个字节，输入字符串使用UTF8编码解析，输出加密后的base64编码字符串
         *
         * @public
         * @param inputBase64 密文（base64格式）
         * @param strKey
         * @returns
         */


        static desDecryptECB_PKCS7_Base64(inputBase64, strKey) {
          //转为utf8字节,并只取前8个字节
          var keyBytes = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).lib.WordArray.create((_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).enc.Utf8.parse(strKey).words.slice(0, 8), 8);
          var inputBytes = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).enc.Base64.parse(inputBase64);
          var cipherParams = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).lib.CipherParams.create({
            ciphertext: inputBytes
          });
          var enResult = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).DES.decrypt(cipherParams, keyBytes, {
            mode: (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
              error: Error()
            }), CryptoJS) : CryptoJS).mode.ECB,
            padding: (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
              error: Error()
            }), CryptoJS) : CryptoJS).pad.Pkcs7
          });
          var retStr = enResult.toString((_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).enc.Utf8);
          return retStr;
        }
        /**
         * 调用AppCrypto协议的加密接口
         *
         * @param appId
         * @param appSecret
         * @param reqData
         * @returns
         */


        static appCryptoEncrypt(appId, appSecret, reqData) {
          reqData.ts = Date.now();
          var json = JSON.stringify(reqData);
          var cText = ApiHelper.desEncryptECB_PKCS7_Base64(json, appSecret);
          var req = {
            appId: appId,
            ciphertext: cText
          };
          return req;
        }

      };
      (_crd && initSDK === void 0 ? (_reportPossibleCrUseOfinitSDK({
        error: Error()
      }), initSDK) : initSDK)((_crd && buildSDKProvider === void 0 ? (_reportPossibleCrUseOfbuildSDKProvider({
        error: Error()
      }), buildSDKProvider) : buildSDKProvider)());

      _export("hallServerUrl", hallServerUrl = 'http://127.0.0.1:7100');

      hallClient = new (_crd && HallClient === void 0 ? (_reportPossibleCrUseOfHallClient({
        error: Error()
      }), HallClient) : HallClient)(hallServerUrl);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e74bfcf13e990dd49801059f3b5cba15715d7cdc.js.map