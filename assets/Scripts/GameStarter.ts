import { _decorator, Component, find, Node } from 'cc';
import { ColorManager } from './Utilites/ColorMix/ColorManager';
import { ViewManager } from './FrameWork/View/ViewManager';
import { OrderManager } from './Utilites/Order/OrderManager';
const { ccclass, property } = _decorator;

/**
 * 游戏启动器
 * 作用：初始化整个游戏，如：资源加载、添加必要组件等工作。
 * 生命周期：整个游戏
 */
@ccclass('GameStarter')
export class GameStarter extends Component {
    private _viewManager: ViewManager
    protected onEnable(): void {
        NotifyManager.instance.addListener(GlobalNotify.ClientInitSuccess, this._onClientInitSuccess.bind(this))
    }

    start() {
        console.log("Game started");
        this._viewManager = find("Canvas").getComponent(ViewManager);
        // 打开初始界面，如：登录界面、主界面等，这里测试填了创建账号界面，记得手动改一下
        this._viewManager.openView("clientcreatepopview")

        //初始化客户端，先放着，后面封装
        // ClientManager.instance.createClient()
        // NotifyManager.instance.getNotifyListenerCount(GlobalNotify.ClientInitSuccess)
        // ClientManager.instance.initClient()
    }

    update(deltaTime: number) {
        // TODO: 游戏更新
    }

    protected onDisable(): void {
        NotifyManager.instance.removeListener(GlobalNotify.ClientInitSuccess)
    }

    protected onDestroy(): void {
        this.onDisable()
        ClientManager.instance.exitClient()
        RoomManager.instance.leaveRoom()

        var playerInfo = RoomManager.instance.getMyInfos()
        var roomInfo = RoomManager.instance.getMyRoomInfo()
        if ((playerInfo != null && roomInfo != null) && (roomInfo.ownerId == playerInfo.playerId)) {
            // 仅房主可解散房间
            if (roomInfo.players.length == 1) {
            RoomManager.instance.dismissRoom()
            } else {
                // 房主离开房间，将房间交给下一个玩家
                var nextOwnerId = roomInfo.players[1].playerId
                roomInfo.ownerId = nextOwnerId
            }
        }

        console.log("Game destroyed")
    }

    // 获取需要发送的数据
    // private _getNeedSendData() {
    //     // TODO: 获取需要发送的数据
    //     // 如：玩家信息、订单信息、游戏状态等
    //     return
    // }

    /**
     * 客户端初始化成功的回调
     */
    private _onClientInitSuccess() {
        this.node.addComponent("InputSystemTest")
        // TODO: 客户端初始化成功后的操作
    }
}