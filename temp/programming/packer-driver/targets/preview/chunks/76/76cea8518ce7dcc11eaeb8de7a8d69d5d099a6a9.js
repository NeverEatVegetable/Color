System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, EMatchFromType, MatcherKeys;

  function _reportPossibleCrUseOfITeamParams(extras) {
    _reporterNs.report("ITeamParams", "../room/IRoomInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITeamPlayerIds(extras) {
    _reporterNs.report("ITeamPlayerIds", "../room/IRoomInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30bddFNUptJR77T52/JGErw", "Models", undefined);

      /**匹配类型*/
      _export("EMatchFromType", EMatchFromType = /*#__PURE__*/function (EMatchFromType) {
        EMatchFromType["Player"] = "Player";
        EMatchFromType["RoomJoinUs"] = "RoomJoinUs";
        EMatchFromType["RoomAllPlayers"] = "RoomAllPlayers";
        return EMatchFromType;
      }({}));
      /**来自单个玩家提交的匹配信息*/

      /**来自房间所有玩家提交的配置信息*/

      /**匹配请求参数基础定义
       * 匹配器+最大玩家数+组队参数 全部一致才会匹配到一起
      */

      /**单独玩家发起的匹配参数*/

      /**房间全玩家发起的匹配参数*/

      /**匹配参数*/


      /**内置匹配器标识定义*/
      _export("MatcherKeys", MatcherKeys = {
        /**单人(无组队,忽视队伍参数), 支持多个玩家一起提交匹配,但匹配结果是没有组队的
         * matcherParams 类型对应为: ISingleMatcherParams*/
        Single: 'Single',

        /**固定队伍匹配器, 所有玩家都在同一个队伍中, 具体哪个队伍由匹配逻辑分配
         * matcherParams 类型对应为: IFixedTeamsMatcherParams*/
        FixedTeams: 'FixedTeams',

        /**指定固定队伍匹配器, 可以详细指定每个玩家的所属队伍
         * matcherParams 类型对应为: IFixedTeamsSpecifyMatcherParams*/
        FixedTeamsSpecify: 'FixedTeamsSpecify',

        /**自由队伍匹配器, matcherParams 类型对应为: IFreeTeamsMatcherParams*/
        FreeTeams: 'FreeTeams'
      });
      /**单人匹配器的匹配属性*/

      /**固定队伍匹配器 的匹配属性*/

      /**指定固定队伍匹配器 的匹配属性*/

      /**自由队伍匹配器 的匹配属性*/

      /*
      let a: IMatchParams = {
          matchFromType: EMatchFromType.Player,
          matchFromInfo: {
              playerIds:[],
          },
          matcherKey: MatcherKeys.Single,
          maxPlayers: 10,
          matcherParams: {},
      };
      let b: IMatchParams = {
          matchFromType: EMatchFromType.RoomAllPlayers,
          matchFromInfo: {
          },
          matcherKey: MatcherKeys.Single,
          maxPlayers: 10,
          matcherParams: {
              maxPlayer:1
          },
      };
      let c!: IMatchParams;
      if (c.matchFromType == EMatchFromType.RoomAllPlayers) {
          let room = c.matchFromInfo;
      } else if (c.matchFromType == EMatchFromType.Player) {
          let player = c.matchFromInfo;
      }
      */

      /**匹配请求的单个玩家结果*/

      /**给单个玩家的匹配结果(包含要加入的服务器信息)*/

      /**匹配请求的匹配结果*/


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=76cea8518ce7dcc11eaeb8de7a8d69d5d099a6a9.js.map