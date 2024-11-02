System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MatcherRequests, _crd;

  function _reportPossibleCrUseOfIMatchRequest(extras) {
    _reporterNs.report("IMatchRequest", "./Models", _context.meta, extras);
  }

  _export("MatcherRequests", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9b7c3Rmt5xNcYoQus1Mz5Q9", "MatcherRequests", undefined);

      /**同匹配器下的所有匹配请求*/
      _export("MatcherRequests", MatcherRequests = class MatcherRequests extends Array {
        get matcherKey() {
          return this._matcherKey;
        }
        /**集合内的请求字典,请求ID=>请求对象*/


        constructor(matchZoneKey) {
          super();

          /**匹配分区标识，不同分区之间数据不互通*/
          this._matcherKey = void 0;
          this.requestMap = new Map();
          this._matcherKey = matchZoneKey;
        }
        /**
         * 加入请求
         * @param matchReq 
         */


        addRequest(matchReq) {
          this.removeRequest(matchReq.matchReqId);
          this.requestMap.set(matchReq.matchReqId, matchReq);
          this.push(matchReq);
        }
        /**
         * 移除指定请求
         * @param matchReqId 
         */


        removeRequest(matchReqId) {
          this.requestMap.delete(matchReqId);
          this.remove(c => c.matchReqId == matchReqId);
        }
        /**清除所有请求*/


        clearAllRequests() {
          this.requestMap.clear();
          this.length = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=515f0175b8a3ba2fa2159471faa57e3aae50206d.js.map