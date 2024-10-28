System.register(["__unresolved_0", "cc", "__unresolved_1", "crypto-js", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Result, CryptoJS, Game, Room, GroupRoom, HallClient, initSDK, buildSDKProvider, ApiHelper, _crd, hallServerUrl, hallClient;

  /**模拟应用在服务端授权拿到token后, 初始化SDK客户端*/
  async function initGame(openId, showName) {
    let ret = await authPlayerToken(openId, showName);
    if (!ret.succ) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
      error: Error()
    }), Result) : Result).transition(ret);
    let game = new (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
      error: Error()
    }), Game) : Game)();
    let room = new (_crd && Room === void 0 ? (_reportPossibleCrUseOfRoom({
      error: Error()
    }), Room) : Room)(game);
    let group = new (_crd && GroupRoom === void 0 ? (_reportPossibleCrUseOfGroupRoom({
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

      async dispose() {
        await group.dispose();
        await room.dispose();
        await game.dispose();
      }

    });
  }
  /**模拟应用在服务端获取玩家授权*/


  async function authPlayerToken(openId, showName) {
    var _ret1$err, _ret1$err$code, _ret1$err2;

    let req1 = ApiHelper.appCryptoEncrypt("default", "FDGWPRET345-809RGKFER43SKGF", {
      openId: openId,
      showName: showName,
      authTokenDay: 1
    });
    const ret1 = await hallClient.client.callApi("Authorize", req1);
    if (ret1.isSucc) return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
      error: Error()
    }), Result) : Result).buildSucc(ret1.res);
    return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
      error: Error()
    }), Result) : Result).buildErr((_ret1$err = ret1.err) == null ? void 0 : _ret1$err.message, (_ret1$err$code = (_ret1$err2 = ret1.err) == null ? void 0 : _ret1$err2.code) != null ? _ret1$err$code : 1);
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
          let keyBytes = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).lib.WordArray.create((_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).enc.Utf8.parse(strKey).words.slice(0, 8), 8);
          let inputBytes = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).enc.Utf8.parse(input);
          let enResult = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).DES.encrypt(inputBytes, keyBytes, {
            mode: (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
              error: Error()
            }), CryptoJS) : CryptoJS).mode.ECB,
            padding: (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
              error: Error()
            }), CryptoJS) : CryptoJS).pad.Pkcs7
          });
          let retStr = enResult.ciphertext.toString((_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
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
          let keyBytes = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).lib.WordArray.create((_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).enc.Utf8.parse(strKey).words.slice(0, 8), 8);
          let inputBytes = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).enc.Base64.parse(inputBase64);
          let cipherParams = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).lib.CipherParams.create({
            ciphertext: inputBytes
          });
          let enResult = (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
            error: Error()
          }), CryptoJS) : CryptoJS).DES.decrypt(cipherParams, keyBytes, {
            mode: (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
              error: Error()
            }), CryptoJS) : CryptoJS).mode.ECB,
            padding: (_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
              error: Error()
            }), CryptoJS) : CryptoJS).pad.Pkcs7
          });
          let retStr = enResult.toString((_crd && CryptoJS === void 0 ? (_reportPossibleCrUseOfCryptoJS({
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
          let json = JSON.stringify(reqData);
          let cText = ApiHelper.desEncryptECB_PKCS7_Base64(json, appSecret);
          let req = {
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