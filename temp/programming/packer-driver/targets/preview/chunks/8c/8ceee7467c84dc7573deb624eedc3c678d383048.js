System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Result, _crd, ErrorCodes;

  _export("Result", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8bcc5rl94hKi50dqJKeEUR8", "Result", undefined);
      /**结果是成功的*/

      /**结果是失败的*/

      /**通用结果对象*/


      /**通用结果对象的生成类*/
      _export("Result", Result = class Result {
        /**
         * 构建一个错误的结果对象
         *
         * @public
         * @typeParam T
         * @param errRet
         * @returns
         */

        /**
         * 构建一个错误的结果对象
         *
         * @public
         * @typeParam T
         * @param errMsg
         * @param code=0
         * @returns
         */

        /**
         * 构建一个错误的结果对象
         *
         * @public
         * @typeParam T
         * @param errMsgOrErrRet
         * @param code=1
         * @returns
         */
        static buildErr(errMsgOrErrRet, code) {
          if (code === void 0) {
            code = 1;
          }

          if (typeof errMsgOrErrRet === 'string') {
            return {
              succ: false,
              err: errMsgOrErrRet,
              code: code
            };
          } else {
            var _errMsgOrErrRet$err;

            return {
              succ: false,
              err: (_errMsgOrErrRet$err = errMsgOrErrRet.err) != null ? _errMsgOrErrRet$err : '',
              code: errMsgOrErrRet.code
            };
          }
        }
        /**
         * 构建一个成功的结果对象
         *
         * @public
         * @typeParam T
         * @param data
         * @returns
         */


        static buildSucc(data) {
          return {
            succ: true,
            code: 0,
            data: data
          };
        }
        /**
         *将一个类型的成功结果转为另外一个
         *
         * @typeParam TSource
         * @typeParam TTarget
         * @param source 成功的对象, 注意必须传入ifSuccGetData参数!
         * @param ifSuccGetData 如果结果是正确的则需要换一个目标类型的data
         * @returns
         */

        /**
        *将一个类型的失败结果转为另外一个
        *
        * @typeParam TSource
        * @typeParam TTarget
        * @param source 失败的对象
        * @returns
        */

        /**
         *将一个类型的结果转为另外一个类型
         *
         * @typeParam TSource
         * @typeParam TTarget
         * @param source 成功的对象, 注意必须传入ifSuccGetData参数!
         * @param ifSuccGetData 如果结果是正确的则需要换一个目标类型的data
         * @returns
         */


        static transition(source, ifSuccGetData) {
          if (source.succ) {
            return {
              succ: true,
              code: 0,
              data: ifSuccGetData()
            };
          } else {
            var _source$err;

            return {
              succ: false,
              err: (_source$err = source.err) != null ? _source$err : '',
              code: source.code
            };
          }
        }

      });
      /**错误码表*/


      _export("ErrorCodes", ErrorCodes = /*#__PURE__*/function (ErrorCodes) {
        ErrorCodes[ErrorCodes["ParamsError"] = 9001] = "ParamsError";
        ErrorCodes[ErrorCodes["Exception"] = 9005] = "Exception";
        ErrorCodes[ErrorCodes["RoomNotIn"] = 1000] = "RoomNotIn";
        ErrorCodes[ErrorCodes["RoomNotFound"] = 1001] = "RoomNotFound";
        ErrorCodes[ErrorCodes["RoomServerClosed"] = 1002] = "RoomServerClosed";
        ErrorCodes[ErrorCodes["RoomNoServerAvailable"] = 1003] = "RoomNoServerAvailable";
        ErrorCodes[ErrorCodes["RoomForbidJoin"] = 1004] = "RoomForbidJoin";
        ErrorCodes[ErrorCodes["RoomNeedLeavePrevious"] = 1005] = "RoomNeedLeavePrevious";
        ErrorCodes[ErrorCodes["RoomHasDismiss"] = 1006] = "RoomHasDismiss";
        ErrorCodes[ErrorCodes["RoomPlayersFull"] = 1007] = "RoomPlayersFull";
        ErrorCodes[ErrorCodes["RoomTeamNotFound"] = 1008] = "RoomTeamNotFound";
        ErrorCodes[ErrorCodes["RoomTeamPlayersFull"] = 1009] = "RoomTeamPlayersFull";
        ErrorCodes[ErrorCodes["RoomPermissionDenied"] = 1010] = "RoomPermissionDenied";
        ErrorCodes[ErrorCodes["RoomNotInSync"] = 1011] = "RoomNotInSync";
        ErrorCodes[ErrorCodes["RoomMustPassword"] = 1012] = "RoomMustPassword";
        ErrorCodes[ErrorCodes["RoomPasswordWrong"] = 1013] = "RoomPasswordWrong";
        ErrorCodes[ErrorCodes["RoomIdExists"] = 1014] = "RoomIdExists";
        ErrorCodes[ErrorCodes["MatchUnknown"] = 2000] = "MatchUnknown";
        ErrorCodes[ErrorCodes["MatchRequestCancelled"] = 2001] = "MatchRequestCancelled";
        ErrorCodes[ErrorCodes["MatchServerBusy"] = 2002] = "MatchServerBusy";
        ErrorCodes[ErrorCodes["MatchQueryTimeout"] = 2003] = "MatchQueryTimeout";
        ErrorCodes[ErrorCodes["MatchTimeout"] = 2004] = "MatchTimeout";
        ErrorCodes[ErrorCodes["MatchPermissionDenied"] = 2100] = "MatchPermissionDenied";
        ErrorCodes[ErrorCodes["MatchMatcherNotFound"] = 2101] = "MatchMatcherNotFound";
        ErrorCodes[ErrorCodes["AuthPlayerTokenNotFound"] = 4001] = "AuthPlayerTokenNotFound";
        ErrorCodes[ErrorCodes["AuthPlayerTokenInvalid"] = 4002] = "AuthPlayerTokenInvalid";
        ErrorCodes[ErrorCodes["AuthPlayerTokenExpire"] = 4003] = "AuthPlayerTokenExpire";
        ErrorCodes[ErrorCodes["AuthReconnectionFail"] = 4004] = "AuthReconnectionFail";
        ErrorCodes[ErrorCodes["AuthForbid"] = 4005] = "AuthForbid";
        ErrorCodes[ErrorCodes["AuthUnverified"] = 4006] = "AuthUnverified";
        return ErrorCodes;
      }({}));

      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8ceee7467c84dc7573deb624eedc3c678d383048.js.map