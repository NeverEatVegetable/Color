System.register(["__unresolved_0", "cc", "uuid", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, v4, ErrorCodes, Result, buildPlayerId, PlayerAuthHelper, _crd;

  function _reportPossibleCrUseOfv(extras) {
    _reporterNs.report("v4", "uuid", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodes(extras) {
    _reporterNs.report("ErrorCodes", "../../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResult(extras) {
    _reporterNs.report("IResult", "../../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../../tsgf/Result", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetRedisClient(extras) {
    _reporterNs.report("GetRedisClient", "../redisHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbuildPlayerId(extras) {
    _reporterNs.report("buildPlayerId", "../ServerUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayerAuthInfo(extras) {
    _reporterNs.report("IPlayerAuthInfo", "./Models", _context.meta, extras);
  }

  _export("PlayerAuthHelper", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_uuid) {
      v4 = _uuid.v4;
    }, function (_unresolved_2) {
      ErrorCodes = _unresolved_2.ErrorCodes;
      Result = _unresolved_2.Result;
    }, function (_unresolved_3) {
      buildPlayerId = _unresolved_3.buildPlayerId;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b9f86bsE3RG6LgLZ0ui9EY3", "PlayerAuthHelper", undefined);

      /**玩家认证工具, 使用本模块需要初始化*/
      _export("PlayerAuthHelper", PlayerAuthHelper = class PlayerAuthHelper {
        static init(getRedisClient) {
          PlayerAuthHelper.getRedisClient = getRedisClient;
        }

        static buildLastPlayerTokenKey(playerId) {
          return `PlayerAuth:playerIdToLastToken:playerId_${playerId}`;
        }

        static buildPlayerKey(playerToken) {
          return `PlayerAuth:Player:token_${playerToken}`;
        }
        /**
         * 玩家认证,成功则返回playerToken
         *
         * @public
         * @param appId
         * @param openId
         * @param showName
         * @param authTokenDay 授权有效天数
         */


        static async authorize(appId, openId, showName, authTokenDay) {
          var _openId$match;

          if (!appId) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('错误的参数 appId');
          }

          if (!openId) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('错误的参数 playerId');
          }

          if (((_openId$match = openId.match(PlayerAuthHelper.openIdCheckRegex)) == null ? void 0 : _openId$match.length) === 2) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('参数 openId 只能由数字、字母、下划线、连接线组成');
          }

          if (!showName) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('错误的参数 showName');
          }

          if (authTokenDay <= 0) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('错误的参数 authTokenDay');
          } //正常应该走数据库，这里简单哈希一下


          let playerId = (_crd && buildPlayerId === void 0 ? (_reportPossibleCrUseOfbuildPlayerId({
            error: Error()
          }), buildPlayerId) : buildPlayerId)(appId, openId);
          let redisClient = await PlayerAuthHelper.getRedisClient();
          let redisLastPlayerTokenKey = PlayerAuthHelper.buildLastPlayerTokenKey(playerId);
          let oldPToken = await redisClient.getString(redisLastPlayerTokenKey);

          if (oldPToken) {
            //存在之前授权的token
            let oldPlayerRedisKey = PlayerAuthHelper.buildPlayerKey(oldPToken);
            let oldPlayer = await redisClient.getObject(oldPlayerRedisKey);

            if (oldPlayer) {
              oldPlayer.invalid = true; //重新设置进去，并且设置redis一天后过期

              await redisClient.setObject(oldPlayerRedisKey, oldPlayer, PlayerAuthHelper.oneDaySec);
            }
          }

          let playerToken = (_crd && v4 === void 0 ? (_reportPossibleCrUseOfv({
            error: Error()
          }), v4) : v4)();
          let exSec = authTokenDay * PlayerAuthHelper.oneDaySec;
          let authInfo = {
            playerId: playerId,
            appId: appId,
            openId: openId,
            showName: showName,
            playerToken: playerToken,
            invalid: false,
            expireDate: Date.now() + exSec * 1000
          }; //redis里的多放一天

          let redisExSec = exSec + PlayerAuthHelper.oneDaySec;
          let redisPlayerKey = PlayerAuthHelper.buildPlayerKey(playerToken);
          await redisClient.setObject(redisPlayerKey, authInfo, redisExSec);
          await redisClient.setString(redisLastPlayerTokenKey, playerToken, exSec + redisExSec);
          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(authInfo);
        }
        /**
         * 身份认证，成功则返回玩家对象
         *
         * @public
         * @param playerToken
         * @returns
         */


        static async verification(playerToken) {
          let redisKey = PlayerAuthHelper.buildPlayerKey(playerToken);
          let player = await (await PlayerAuthHelper.getRedisClient()).getObject(redisKey);

          if (!player || !player.playerToken) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('token过期或不存在！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).AuthPlayerTokenNotFound);
          }

          if (player.invalid) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('token已经失效！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).AuthPlayerTokenInvalid);
          }

          if (player.expireDate < Date.now()) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('token已经过期！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).AuthPlayerTokenExpire);
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(player);
        }
        /**
         * 使用id+token进行身份认证，成功则返回玩家对象
         *
         * @public
         * @param playerId
         * @param playerToken
         * @param updateShowName 可更新玩家显示名
         * @returns
         */


        static async verificationFromId(playerId, playerToken, updateShowName) {
          let redisClient = await PlayerAuthHelper.getRedisClient();
          let redisLastPlayerTokenKey = PlayerAuthHelper.buildLastPlayerTokenKey(playerId);
          let oldPToken = await redisClient.getString(redisLastPlayerTokenKey);

          if (oldPToken !== playerToken) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('token已失效！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).AuthPlayerTokenInvalid);
          }

          let redisKey = PlayerAuthHelper.buildPlayerKey(playerToken);
          let playerAuth = await redisClient.getObject(redisKey);

          if (!playerAuth || !playerAuth.playerToken) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('token过期或不存在！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).AuthPlayerTokenNotFound);
          }

          if (playerAuth.invalid) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('token已经失效！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).AuthPlayerTokenInvalid);
          }

          if (playerAuth.expireDate < Date.now()) {
            return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
              error: Error()
            }), Result) : Result).buildErr('token已经过期！', (_crd && ErrorCodes === void 0 ? (_reportPossibleCrUseOfErrorCodes({
              error: Error()
            }), ErrorCodes) : ErrorCodes).AuthPlayerTokenExpire);
          }

          if (updateShowName) {
            //有更新玩家信息，则更新进redis
            playerAuth.showName = updateShowName;
            await redisClient.setObject(redisKey, playerAuth, playerAuth.expireDate - Date.now());
          }

          return (_crd && Result === void 0 ? (_reportPossibleCrUseOfResult({
            error: Error()
          }), Result) : Result).buildSucc(playerAuth);
        }
        /**
         * 更新玩家的当前所在房间id
         * @param playerToken 
         * @param [roomId] 
         * @returns  
         */


        static async updatePlayerCurrRoomId(playerToken, roomId) {
          let redisClient = await PlayerAuthHelper.getRedisClient();
          let redisKey = PlayerAuthHelper.buildPlayerKey(playerToken);
          let playerAuth = await redisClient.getObject(redisKey);
          if (!playerAuth) return;
          playerAuth.currRoomId = roomId;
          await redisClient.setObject(redisKey, playerAuth, playerAuth.expireDate - Date.now());
        }

      });

      /**需要全局初始化时设置*/
      PlayerAuthHelper.getRedisClient = void 0;
      PlayerAuthHelper.openIdCheckRegex = /^[0-9a-zA-Z\-_]+$/ig;
      PlayerAuthHelper.oneDaySec = 24 * 60 * 60;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7180dc360a5c45f45b9fdd0d899edf4c4f300bda.js.map