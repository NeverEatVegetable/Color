System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, serviceProto;

  function _reportPossibleCrUseOfServiceProto(extras) {
    _reporterNs.report("ServiceProto", "tsrpc-proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgAssignTask(extras) {
    _reporterNs.report("MsgAssignTask", "./MsgAssignTask", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgCancelTask(extras) {
    _reporterNs.report("MsgCancelTask", "./MsgCancelTask", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgClusterSyncNodeInfo(extras) {
    _reporterNs.report("MsgClusterSyncNodeInfo", "./MsgClusterSyncNodeInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqClusterLogin(extras) {
    _reporterNs.report("ReqClusterLogin", "./PtlClusterLogin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResClusterLogin(extras) {
    _reporterNs.report("ResClusterLogin", "./PtlClusterLogin", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fb737DigltFwrnArRWJv5E+", "serviceProto", undefined);

      _export("serviceProto", serviceProto = {
        "version": 1,
        "services": [{
          "id": 0,
          "name": "AssignTask",
          "type": "msg"
        }, {
          "id": 1,
          "name": "CancelTask",
          "type": "msg"
        }, {
          "id": 2,
          "name": "ClusterSyncNodeInfo",
          "type": "msg"
        }, {
          "id": 3,
          "name": "ClusterLogin",
          "type": "api"
        }],
        "types": {
          "MsgAssignTask/MsgAssignTask": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../../cluster/Models/MsgAssignTask"
              }
            }]
          },
          "../../cluster/Models/MsgAssignTask": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "taskId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "taskData",
              "type": {
                "type": "Any"
              }
            }]
          },
          "MsgCancelTask/MsgCancelTask": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../../cluster/Models/MsgCancelTask"
              }
            }]
          },
          "../../cluster/Models/MsgCancelTask": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "taskId",
              "type": {
                "type": "String"
              }
            }]
          },
          "MsgClusterSyncNodeInfo/MsgClusterSyncNodeInfo": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../../cluster/Models/MsgClusterSyncNodeInfo"
              }
            }]
          },
          "../../cluster/Models/MsgClusterSyncNodeInfo": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "nodeInfo",
              "type": {
                "type": "Any"
              }
            }]
          },
          "PtlClusterLogin/ReqClusterLogin": {
            "type": "Reference",
            "target": "../../cluster/Models/ReqClusterLogin"
          },
          "../../cluster/Models/ReqClusterLogin": {
            "type": "Union",
            "members": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../../cluster/Models/ReqClusterLoginByTerminal"
              }
            }, {
              "id": 1,
              "type": {
                "type": "Reference",
                "target": "../../cluster/Models/ReqClusterLoginByNode"
              }
            }]
          },
          "../../cluster/Models/ReqClusterLoginByTerminal": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "clientType",
              "type": {
                "type": "Literal",
                "literal": "Terminal"
              }
            }, {
              "id": 1,
              "name": "terminalId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "terminalKey",
              "type": {
                "type": "String"
              }
            }]
          },
          "../../cluster/Models/EClusterClientType": {
            "type": "Enum",
            "members": [{
              "id": 0,
              "value": "Node"
            }, {
              "id": 1,
              "value": "Terminal"
            }]
          },
          "../../cluster/Models/ReqClusterLoginByNode": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "clientType",
              "type": {
                "type": "Literal",
                "literal": "Node"
              }
            }, {
              "id": 1,
              "name": "nodeId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "clusterKey",
              "type": {
                "type": "String"
              }
            }, {
              "id": 3,
              "name": "nodeInfo",
              "type": {
                "type": "Any"
              }
            }]
          },
          "PtlClusterLogin/ResClusterLogin": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../../cluster/Models/ResClusterLogin"
              }
            }]
          },
          "../../cluster/Models/ResClusterLogin": {
            "type": "Interface"
          }
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e6b9a686df6083be382cf3a23f0bbee4df76b061.js.map