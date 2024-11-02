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

  function _reportPossibleCrUseOfReqNodeDismissRoom(extras) {
    _reporterNs.report("ReqNodeDismissRoom", "./PtlNodeDismissRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResNodeDismissRoom(extras) {
    _reporterNs.report("ResNodeDismissRoom", "./PtlNodeDismissRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqNodeExtractRoom(extras) {
    _reporterNs.report("ReqNodeExtractRoom", "./PtlNodeExtractRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResNodeExtractRoom(extras) {
    _reporterNs.report("ResNodeExtractRoom", "./PtlNodeExtractRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqNodeUpdateRoom(extras) {
    _reporterNs.report("ReqNodeUpdateRoom", "./PtlNodeUpdateRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResNodeUpdateRoom(extras) {
    _reporterNs.report("ResNodeUpdateRoom", "./PtlNodeUpdateRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqTerminalCreateRoom(extras) {
    _reporterNs.report("ReqTerminalCreateRoom", "./PtlTerminalCreateRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResTerminalCreateRoom(extras) {
    _reporterNs.report("ResTerminalCreateRoom", "./PtlTerminalCreateRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqTerminalDismissRoom(extras) {
    _reporterNs.report("ReqTerminalDismissRoom", "./PtlTerminalDismissRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResTerminalDismissRoom(extras) {
    _reporterNs.report("ResTerminalDismissRoom", "./PtlTerminalDismissRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqTerminalFilterRoom(extras) {
    _reporterNs.report("ReqTerminalFilterRoom", "./PtlTerminalFilterRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResTerminalFilterRoom(extras) {
    _reporterNs.report("ResTerminalFilterRoom", "./PtlTerminalFilterRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqTerminalGetOrCreateRoom(extras) {
    _reporterNs.report("ReqTerminalGetOrCreateRoom", "./PtlTerminalGetOrCreateRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResTerminalGetOrCreateRoom(extras) {
    _reporterNs.report("ResTerminalGetOrCreateRoom", "./PtlTerminalGetOrCreateRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqTerminalGetRoomOnlineInfo(extras) {
    _reporterNs.report("ReqTerminalGetRoomOnlineInfo", "./PtlTerminalGetRoomOnlineInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResTerminalGetRoomOnlineInfo(extras) {
    _reporterNs.report("ResTerminalGetRoomOnlineInfo", "./PtlTerminalGetRoomOnlineInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3ba4fzhNU1BT4r0WZn3TNyr", "serviceProto", undefined);

      _export("serviceProto", serviceProto = {
        "version": 9,
        "services": [{
          "id": 7,
          "name": "AssignTask",
          "type": "msg"
        }, {
          "id": 8,
          "name": "CancelTask",
          "type": "msg"
        }, {
          "id": 9,
          "name": "ClusterSyncNodeInfo",
          "type": "msg"
        }, {
          "id": 10,
          "name": "ClusterLogin",
          "type": "api"
        }, {
          "id": 3,
          "name": "NodeDismissRoom",
          "type": "api",
          "conf": {
            "clientType": "Node"
          }
        }, {
          "id": 6,
          "name": "NodeExtractRoom",
          "type": "api",
          "conf": {
            "clientType": "Node"
          }
        }, {
          "id": 4,
          "name": "NodeUpdateRoom",
          "type": "api",
          "conf": {
            "clientType": "Node"
          }
        }, {
          "id": 5,
          "name": "TerminalCreateRoom",
          "type": "api",
          "conf": {
            "clientType": "Terminal"
          }
        }, {
          "id": 11,
          "name": "TerminalDismissRoom",
          "type": "api",
          "conf": {
            "clientType": "Terminal"
          }
        }, {
          "id": 15,
          "name": "TerminalFilterRoom",
          "type": "api",
          "conf": {
            "clientType": "Terminal"
          }
        }, {
          "id": 12,
          "name": "TerminalGetOrCreateRoom",
          "type": "api",
          "conf": {
            "clientType": "Terminal"
          }
        }, {
          "id": 13,
          "name": "TerminalGetRoomOnlineInfo",
          "type": "api",
          "conf": {
            "clientType": "Terminal"
          }
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
          },
          "PtlNodeDismissRoom/ReqNodeDismissRoom": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "roomId",
              "type": {
                "type": "String"
              }
            }]
          },
          "PtlNodeDismissRoom/ResNodeDismissRoom": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "roomRegInfo",
              "type": {
                "type": "Reference",
                "target": "../../room/Models/IRoomRegInfo"
              }
            }]
          },
          "../../room/Models/IRoomRegInfo": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "appId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "roomId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "roomName",
              "type": {
                "type": "String"
              }
            }, {
              "id": 3,
              "name": "roomType",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 4,
              "name": "ownerPlayerId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 5,
              "name": "maxPlayers",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 6,
              "name": "emptySeats",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 7,
              "name": "createTime",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 8,
              "name": "expireTime",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 9,
              "name": "isPrivate",
              "type": {
                "type": "Union",
                "members": [{
                  "id": 0,
                  "type": {
                    "type": "Literal",
                    "literal": 0
                  }
                }, {
                  "id": 1,
                  "type": {
                    "type": "Literal",
                    "literal": 1
                  }
                }]
              }
            }, {
              "id": 10,
              "name": "privateRoomJoinMode",
              "type": {
                "type": "Reference",
                "target": "../../../tsgf/room/IRoomInfo/EPrivateRoomJoinMode"
              },
              "optional": true
            }, {
              "id": 11,
              "name": "privateRoomPassword",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 12,
              "name": "teamsPlayerIds",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "../../../tsgf/room/IRoomInfo/ITeamPlayerIds"
                }
              }
            }, {
              "id": 13,
              "name": "gameServerNodeId",
              "type": {
                "type": "String"
              }
            }]
          },
          "../../../tsgf/room/IRoomInfo/EPrivateRoomJoinMode": {
            "type": "Enum",
            "members": [{
              "id": 0,
              "value": 0
            }, {
              "id": 1,
              "value": 1
            }, {
              "id": 2,
              "value": 2
            }]
          },
          "../../../tsgf/room/IRoomInfo/ITeamPlayerIds": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "teamId",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "playerIds",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "String"
                }
              }
            }]
          },
          "PtlNodeExtractRoom/ReqNodeExtractRoom": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "roomId",
              "type": {
                "type": "String"
              }
            }]
          },
          "PtlNodeExtractRoom/ResNodeExtractRoom": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "roomRegInfo",
              "type": {
                "type": "Reference",
                "target": "../../room/Models/IRoomRegInfo"
              }
            }, {
              "id": 1,
              "name": "roomInfo",
              "type": {
                "type": "Reference",
                "target": "../../../tsgf/room/IRoomInfo/IRoomInfo"
              }
            }]
          },
          "../../../tsgf/room/IRoomInfo/IRoomInfo": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "roomId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "roomName",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "ownerPlayerId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 3,
              "name": "isPrivate",
              "type": {
                "type": "Boolean"
              }
            }, {
              "id": 4,
              "name": "privateRoomJoinMode",
              "type": {
                "type": "Reference",
                "target": "../../../tsgf/room/IRoomInfo/EPrivateRoomJoinMode"
              },
              "optional": true
            }, {
              "id": 5,
              "name": "matcherKey",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 6,
              "name": "createType",
              "type": {
                "type": "Reference",
                "target": "../../../tsgf/room/IRoomInfo/ERoomCreateType"
              }
            }, {
              "id": 7,
              "name": "maxPlayers",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 8,
              "name": "roomType",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 9,
              "name": "customProperties",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 10,
              "name": "allPlayerMatchReqId",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 11,
              "name": "playerList",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "../../../tsgf/player/IPlayerInfo/IPlayerInfo"
                }
              }
            }, {
              "id": 12,
              "name": "teamList",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "../../../tsgf/room/IRoomInfo/ITeamInfo"
                }
              }
            }, {
              "id": 13,
              "name": "fixedTeamCount",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 14,
              "name": "freeTeamMinPlayers",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 15,
              "name": "freeTeamMaxPlayers",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 16,
              "name": "frameRate",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 17,
              "name": "frameSyncState",
              "type": {
                "type": "Reference",
                "target": "../../../tsgf/room/IRoomInfo/EFrameSyncState"
              }
            }, {
              "id": 18,
              "name": "createTime",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 19,
              "name": "startGameTime",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 20,
              "name": "retainEmptyRoomTime",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 21,
              "name": "retainOwnSeat",
              "type": {
                "type": "Boolean"
              }
            }, {
              "id": 22,
              "name": "randomRequirePlayerSyncStateInvMs",
              "type": {
                "type": "Number"
              },
              "optional": true
            }]
          },
          "../../../tsgf/room/IRoomInfo/ERoomCreateType": {
            "type": "Enum",
            "members": [{
              "id": 0,
              "value": 0
            }, {
              "id": 1,
              "value": 1
            }]
          },
          "../../../tsgf/player/IPlayerInfo/IPlayerInfo": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "playerId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "showName",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "teamId",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 3,
              "name": "customPlayerStatus",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 4,
              "name": "customPlayerProfile",
              "type": {
                "type": "String"
              }
            }, {
              "id": 5,
              "name": "networkState",
              "type": {
                "type": "Reference",
                "target": "../../../tsgf/player/IPlayerInfo/ENetworkState"
              }
            }, {
              "id": 6,
              "name": "isRobot",
              "type": {
                "type": "Boolean"
              }
            }, {
              "id": 7,
              "name": "roomRobotIds",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "String"
                }
              },
              "optional": true
            }]
          },
          "../../../tsgf/player/IPlayerInfo/ENetworkState": {
            "type": "Enum",
            "members": [{
              "id": 0,
              "value": 0
            }, {
              "id": 1,
              "value": 1
            }]
          },
          "../../../tsgf/room/IRoomInfo/ITeamInfo": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "id",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "name",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "minPlayers",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "maxPlayers",
              "type": {
                "type": "Number"
              }
            }]
          },
          "../../../tsgf/room/IRoomInfo/EFrameSyncState": {
            "type": "Enum",
            "members": [{
              "id": 0,
              "value": 0
            }, {
              "id": 1,
              "value": 1
            }]
          },
          "PtlNodeUpdateRoom/ReqNodeUpdateRoom": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "roomRegInfo",
              "type": {
                "type": "Reference",
                "target": "../../room/Models/IRoomRegInfo"
              }
            }, {
              "id": 1,
              "name": "changedType",
              "type": {
                "type": "Reference",
                "target": "../../room/RoomHelper/ERoomRegChangedType"
              }
            }, {
              "id": 2,
              "name": "playerId",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 3,
              "name": "oldTeamId",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 4,
              "name": "teamId",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "../../room/RoomHelper/ERoomRegChangedType": {
            "type": "Enum",
            "members": [{
              "id": 0,
              "value": 1
            }, {
              "id": 1,
              "value": 2
            }, {
              "id": 2,
              "value": 3
            }, {
              "id": 3,
              "value": 4
            }, {
              "id": 4,
              "value": 5
            }, {
              "id": 5,
              "value": 6
            }]
          },
          "PtlNodeUpdateRoom/ResNodeUpdateRoom": {
            "type": "Interface"
          },
          "PtlTerminalCreateRoom/ReqTerminalCreateRoom": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../../../tsgf/room/IRoomInfo/ICreateRoomPara"
              }
            }],
            "properties": [{
              "id": 0,
              "name": "appId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "createType",
              "type": {
                "type": "Reference",
                "target": "../../../tsgf/room/IRoomInfo/ERoomCreateType"
              }
            }]
          },
          "../../../tsgf/room/IRoomInfo/ICreateRoomPara": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../../../tsgf/room/IRoomInfo/ITeamParams"
              }
            }],
            "properties": [{
              "id": 0,
              "name": "roomName",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "ownerPlayerId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "maxPlayers",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 3,
              "name": "isPrivate",
              "type": {
                "type": "Boolean"
              }
            }, {
              "id": 4,
              "name": "privateRoomJoinMode",
              "type": {
                "type": "Reference",
                "target": "../../../tsgf/room/IRoomInfo/EPrivateRoomJoinMode"
              },
              "optional": true
            }, {
              "id": 5,
              "name": "privateRoomPassword",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 6,
              "name": "matcherKey",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 7,
              "name": "customProperties",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 8,
              "name": "roomType",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 9,
              "name": "roomId",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 10,
              "name": "retainEmptyRoomTime",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 11,
              "name": "retainOwnSeat",
              "type": {
                "type": "Boolean"
              },
              "optional": true
            }, {
              "id": 12,
              "name": "randomRequirePlayerSyncStateInvMs",
              "type": {
                "type": "Number"
              },
              "optional": true
            }]
          },
          "../../../tsgf/room/IRoomInfo/ITeamParams": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "fixedTeamCount",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "fixedTeamMinPlayers",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "fixedTeamMaxPlayers",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 3,
              "name": "fixedTeamInfoList",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "../../../tsgf/room/IRoomInfo/ITeamInfo"
                }
              },
              "optional": true
            }, {
              "id": 4,
              "name": "freeTeamMinPlayers",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 5,
              "name": "freeTeamMaxPlayers",
              "type": {
                "type": "Number"
              },
              "optional": true
            }]
          },
          "PtlTerminalCreateRoom/ResTerminalCreateRoom": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "roomOnlineInfo",
              "type": {
                "type": "Reference",
                "target": "../../../tsgf/room/IRoomInfo/IRoomOnlineInfo"
              }
            }]
          },
          "../../../tsgf/room/IRoomInfo/IRoomOnlineInfo": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "roomId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 9,
              "name": "ownerPlayerId",
              "type": {
                "type": "String"
              }
            }, {
              "id": 1,
              "name": "roomName",
              "type": {
                "type": "String"
              }
            }, {
              "id": 2,
              "name": "roomType",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 3,
              "name": "maxPlayers",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 4,
              "name": "emptySeats",
              "type": {
                "type": "Number"
              }
            }, {
              "id": 5,
              "name": "isPrivate",
              "type": {
                "type": "Boolean"
              }
            }, {
              "id": 6,
              "name": "privateRoomJoinMode",
              "type": {
                "type": "Reference",
                "target": "../../../tsgf/room/IRoomInfo/EPrivateRoomJoinMode"
              },
              "optional": true
            }, {
              "id": 7,
              "name": "gameServerUrl",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 8,
              "name": "currGameServerPlayers",
              "type": {
                "type": "Number"
              }
            }]
          },
          "PtlTerminalDismissRoom/ReqTerminalDismissRoom": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "roomId",
              "type": {
                "type": "String"
              }
            }]
          },
          "PtlTerminalDismissRoom/ResTerminalDismissRoom": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "roomOnlineInfo",
              "type": {
                "type": "Reference",
                "target": "../../../tsgf/room/IRoomInfo/IRoomOnlineInfo"
              }
            }]
          },
          "PtlTerminalFilterRoom/ReqTerminalFilterRoom": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "filter",
              "type": {
                "type": "Reference",
                "target": "../../../tsgf/room/IRoomInfo/IRoomsFilterPara"
              }
            }, {
              "id": 1,
              "name": "skip",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "limit",
              "type": {
                "type": "Number"
              },
              "optional": true
            }]
          },
          "../../../tsgf/room/IRoomInfo/IRoomsFilterPara": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "roomType",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "maxPlayers",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "roomNameLike",
              "type": {
                "type": "String"
              },
              "optional": true
            }, {
              "id": 3,
              "name": "roomNameFullMatch",
              "type": {
                "type": "String"
              },
              "optional": true
            }]
          },
          "PtlTerminalFilterRoom/ResTerminalFilterRoom": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../../../tsgf/room/IRoomInfo/IRoomsFilterRes"
              }
            }]
          },
          "../../../tsgf/room/IRoomInfo/IRoomsFilterRes": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "rooms",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "../../../tsgf/room/IRoomInfo/IRoomOnlineInfo"
                }
              }
            }, {
              "id": 1,
              "name": "count",
              "type": {
                "type": "Number"
              }
            }]
          },
          "PtlTerminalGetOrCreateRoom/ReqTerminalGetOrCreateRoom": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../../../tsgf/room/IRoomInfo/IGetOrCreateRoomPara"
              }
            }],
            "properties": [{
              "id": 0,
              "name": "appId",
              "type": {
                "type": "String"
              }
            }]
          },
          "../../../tsgf/room/IRoomInfo/IGetOrCreateRoomPara": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "matchRoomType",
              "type": {
                "type": "Boolean"
              },
              "optional": true
            }, {
              "id": 1,
              "name": "matchMaxPlayers",
              "type": {
                "type": "Boolean"
              },
              "optional": true
            }, {
              "id": 2,
              "name": "matchLimitRoomCount",
              "type": {
                "type": "Number"
              },
              "optional": true
            }, {
              "id": 3,
              "name": "createRoomPara",
              "type": {
                "type": "Reference",
                "target": "../../../tsgf/room/IRoomInfo/ICreateRoomPara"
              }
            }]
          },
          "PtlTerminalGetOrCreateRoom/ResTerminalGetOrCreateRoom": {
            "type": "Interface",
            "extends": [{
              "id": 0,
              "type": {
                "type": "Reference",
                "target": "../../../tsgf/room/IRoomInfo/IGetOrCreateRoomRsp"
              }
            }]
          },
          "../../../tsgf/room/IRoomInfo/IGetOrCreateRoomRsp": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "matchRoomOnlineInfoList",
              "type": {
                "type": "Array",
                "elementType": {
                  "type": "Reference",
                  "target": "../../../tsgf/room/IRoomInfo/IRoomOnlineInfo"
                }
              },
              "optional": true
            }, {
              "id": 1,
              "name": "createRoomOnlineInfo",
              "type": {
                "type": "Reference",
                "target": "../../../tsgf/room/IRoomInfo/IRoomOnlineInfo"
              },
              "optional": true
            }]
          },
          "PtlTerminalGetRoomOnlineInfo/ReqTerminalGetRoomOnlineInfo": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "roomId",
              "type": {
                "type": "String"
              }
            }]
          },
          "PtlTerminalGetRoomOnlineInfo/ResTerminalGetRoomOnlineInfo": {
            "type": "Interface",
            "properties": [{
              "id": 0,
              "name": "roomOnlineInfo",
              "type": {
                "type": "Reference",
                "target": "../../../tsgf/room/IRoomInfo/IRoomOnlineInfo"
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
//# sourceMappingURL=c15a1c42b4e714d816c567f0f973a4cd0febefbf.js.map