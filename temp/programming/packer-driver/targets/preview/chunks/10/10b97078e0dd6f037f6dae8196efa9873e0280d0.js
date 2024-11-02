System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, arrRemoveItems, _crd;

  /**基础的房间注册信息*/

  /**
   * 给队伍玩家数组添加另一个队伍玩家数组, 结果放在 targetTeams 中
   *
   * @param targetTeams
   * @param add
   */

  /**
   * 给队伍玩家数组添加一个单个队伍玩家, 结果放在 targetTeams 中
   *
   * @param targetTeams
   * @param addTeamId 如果无队伍则会使用''
   * @param addPlayerId
   */

  /**
   * 从一个队伍玩家数组中移除另一个队伍玩家数组的数据
   *
   * @param targetTeams
   * @param subtract
   * @param removeEmptyTeam=true
   */

  /**
   *从一个队伍玩家数组中移除一个单个的队伍玩家
   *
   * @param targetTeams
   * @param subtractTeamId 如果无队伍则会使用''
   * @param subtractPlayerId
   * @param removeEmptyTeam=true
   */
  function teamPlayerIdsAdd(targetTeams, add) {
    var _loop = function _loop(team) {
      var targetTeam = targetTeams.find(t => {
        var _ref;

        return (_ref = t.teamId === team.teamId) != null ? _ref : '';
      });

      if (!targetTeam) {
        var _team$teamId;

        targetTeam = {
          teamId: (_team$teamId = team.teamId) != null ? _team$teamId : '',
          playerIds: team.playerIds.slice()
        };
        targetTeams.push(targetTeam);
      } else {
        for (var appPid of team.playerIds) {
          if (!targetTeam.playerIds.includes(appPid)) {
            targetTeam.playerIds.push(appPid);
          }
        }
      }
    };

    for (var team of add) {
      _loop(team);
    }
  }

  function teamPlayerIdsAddSingle(targetTeams, addPlayerId, addTeamId) {
    if (!addTeamId) addTeamId = '';
    var targetTeam = targetTeams.find(t => t.teamId === addTeamId);

    if (!targetTeam) {
      targetTeam = {
        teamId: addTeamId,
        playerIds: [addPlayerId]
      };
      targetTeams.push(targetTeam);
    } else {
      if (!targetTeam.playerIds.includes(addPlayerId)) {
        targetTeam.playerIds.push(addPlayerId);
      }
    }
  }

  function teamPlayerIdsSubtract(targetTeams, subtract, removeEmptyTeam) {
    if (removeEmptyTeam === void 0) {
      removeEmptyTeam = true;
    }

    var _loop2 = function _loop2(team) {
      var targetTeamI = targetTeams.findIndex(t => {
        var _ref2;

        return (_ref2 = t.teamId === team.teamId) != null ? _ref2 : '';
      });
      var targetTeam = targetTeams[targetTeamI];

      if (targetTeam) {
        var _loop3 = function _loop3(appPid) {
          (_crd && arrRemoveItems === void 0 ? (_reportPossibleCrUseOfarrRemoveItems({
            error: Error()
          }), arrRemoveItems) : arrRemoveItems)(targetTeam.playerIds, p => p === appPid);
        };

        for (var appPid of team.playerIds) {
          _loop3(appPid);
        }

        if (removeEmptyTeam && targetTeam.playerIds.length <= 0) {
          //这个队伍下的玩家都没了直接删除
          targetTeams.splice(targetTeamI, 1);
        }
      }
    };

    for (var team of subtract) {
      _loop2(team);
    }
  }

  function teamPlayerIdsSubtractSingle(targetTeams, subtractPlayerId, subtractTeamId, removeEmptyTeam) {
    if (removeEmptyTeam === void 0) {
      removeEmptyTeam = true;
    }

    var targetTeamI = targetTeams.findIndex(t => {
      var _ref3;

      return (_ref3 = t.teamId === subtractTeamId) != null ? _ref3 : '';
    });
    var targetTeam = targetTeams[targetTeamI];

    if (targetTeam) {
      (_crd && arrRemoveItems === void 0 ? (_reportPossibleCrUseOfarrRemoveItems({
        error: Error()
      }), arrRemoveItems) : arrRemoveItems)(targetTeam.playerIds, p => p === subtractPlayerId);

      if (removeEmptyTeam && targetTeam.playerIds.length <= 0) {
        //这个队伍下的玩家都没了直接删除
        targetTeams.splice(targetTeamI, 1);
      }
    }
  }

  function _reportPossibleCrUseOfEPrivateRoomJoinMode(extras) {
    _reporterNs.report("EPrivateRoomJoinMode", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITeamPlayerIds(extras) {
    _reporterNs.report("ITeamPlayerIds", "../../tsgf/room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfarrRemoveItems(extras) {
    _reporterNs.report("arrRemoveItems", "../../tsgf/Utils", _context.meta, extras);
  }

  _export({
    teamPlayerIdsAdd: teamPlayerIdsAdd,
    teamPlayerIdsAddSingle: teamPlayerIdsAddSingle,
    teamPlayerIdsSubtract: teamPlayerIdsSubtract,
    teamPlayerIdsSubtractSingle: teamPlayerIdsSubtractSingle
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      arrRemoveItems = _unresolved_2.arrRemoveItems;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b81a2BNIdlHNpsuob1SYme2", "Models", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=10b97078e0dd6f037f6dae8196efa9873e0280d0.js.map