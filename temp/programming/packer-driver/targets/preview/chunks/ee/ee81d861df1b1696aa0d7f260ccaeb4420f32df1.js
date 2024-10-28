System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, serviceProto;

  function _reportPossibleCrUseOfServiceProto(extras) {
    _reporterNs.report("ServiceProto", "tsrpc-proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqPlayerAuth(extras) {
    _reporterNs.report("ReqPlayerAuth", "./PtlPlayerAuth", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResPlayerAuth(extras) {
    _reporterNs.report("ResPlayerAuth", "./PtlPlayerAuth", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "61c72qMQx1Ie5FPxNPbWuR+", "serviceProto", undefined);

      _export("serviceProto", serviceProto = {
        "version": 1,
        "services": [{
          "id": 0,
          "name": "PlayerAuth",
          "type": "api"
        }],
        "types": {
          "PtlPlayerAuth/ReqPlayerAuth": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "showName",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "openId",
              "type": {
                "type": "String"
              }
            }]
          },
          "PtlPlayerAuth/ResPlayerAuth": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "playerId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "playerToken",
              "type": {
                "type": "String"
              }
            }]
          }
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ee81d861df1b1696aa0d7f260ccaeb4420f32df1.js.map