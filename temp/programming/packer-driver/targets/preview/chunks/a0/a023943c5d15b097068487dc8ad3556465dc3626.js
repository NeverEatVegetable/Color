System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Game, GroupRoom, Room, initSDKProvider, _crd;

  /**
   * Inits sdk
   * @param provider 由 import \{ buildSDKProvider \} from "tsgf-sdk-*" 提供, 如: tsgf-sdk-browser, tsgf-sdk-miniapp
   */
  function initSDK(provider) {
    (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
      error: Error()
    }), Game) : Game).ins = new (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
      error: Error()
    }), Game) : Game)();
    (_crd && Room === void 0 ? (_reportPossibleCrUseOfRoom({
      error: Error()
    }), Room) : Room).ins = new (_crd && Room === void 0 ? (_reportPossibleCrUseOfRoom({
      error: Error()
    }), Room) : Room)((_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
      error: Error()
    }), Game) : Game).ins);
    (_crd && GroupRoom === void 0 ? (_reportPossibleCrUseOfGroupRoom({
      error: Error()
    }), GroupRoom) : GroupRoom).ins = new (_crd && GroupRoom === void 0 ? (_reportPossibleCrUseOfGroupRoom({
      error: Error()
    }), GroupRoom) : GroupRoom)((_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
      error: Error()
    }), Game) : Game).ins, (_crd && Room === void 0 ? (_reportPossibleCrUseOfRoom({
      error: Error()
    }), Room) : Room).ins);
    (_crd && initSDKProvider === void 0 ? (_reportPossibleCrUseOfinitSDKProvider({
      error: Error()
    }), initSDKProvider) : initSDKProvider)(provider);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "./Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupRoom(extras) {
    _reporterNs.report("GroupRoom", "./GroupRoom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoom(extras) {
    _reporterNs.report("Room", "./Room", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitSDKProvider(extras) {
    _reporterNs.report("initSDKProvider", "./tsgf/Provider", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISDKProvider(extras) {
    _reporterNs.report("ISDKProvider", "./tsgf/Provider", _context.meta, extras);
  }

  _export("initSDK", initSDK);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Game = _unresolved_2.Game;
    }, function (_unresolved_3) {
      GroupRoom = _unresolved_3.GroupRoom;
    }, function (_unresolved_4) {
      Room = _unresolved_4.Room;
    }, function (_unresolved_5) {
      initSDKProvider = _unresolved_5.initSDKProvider;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "11e5eWGrRFFn44GlqwbzvVd", "SDK", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a023943c5d15b097068487dc8ad3556465dc3626.js.map