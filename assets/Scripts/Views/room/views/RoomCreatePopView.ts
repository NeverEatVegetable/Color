import { _decorator, Button, Component, EditBox, Node, Toggle, resources, find, Prefab, instantiate } from 'cc'
const { ccclass, property } = _decorator

@ccclass('RoomCreatePopView')
export class RoomCreatePopView extends Component {
    // UI 组件
    private btnCreate: Button
    private btnCancel: Button
    private roomName: EditBox
    private goPassWord: Node
    private roomPassword: EditBox
    private tgNeedPw: Toggle
    private memberNum: EditBox

    start() {
        this.buildUI()
        this.bindEvent()
        this.onEnter()
    }

    protected onDestroy(): void {
        this.unbindEvent()
        this.onExit()
    }

    buildUI() {
        this.btnCreate = this.node.getChildByPath('btnCreate').getComponent(Button)
        this.btnCancel = this.node.getChildByPath('btnCancel').getComponent(Button)
        this.roomName = this.node.getChildByPath('name/txtInput').getComponent(EditBox)
    }

    bindEvent() {
        this.btnCreate.node.on('click', this._onClickBtnCreate, this)
        this.btnCancel.node.on('click', this._onClickBtnCancel, this)
    }

    unbindEvent() {
        this.btnCreate.node.off('click', this._onClickBtnCreate, this)
        this.btnCancel.node.off('click', this._onClickBtnCancel, this)
    }

    private onExit() {
        NotifyManager.instance.removeListener(GlobalNotify.RoomCreateSuccess, this._onRoomCreateSuccess.bind(this))
        
    }
    private onEnter() {
        NotifyManager.instance.addListener(GlobalNotify.RoomCreateSuccess, this._onRoomCreateSuccess.bind(this))
    }

    private close() {
        // 关闭界面逻辑
        NotifyManager.instance.dispatch(GlobalNotify.CloseView, this.node.name)
    }

    private _onClickBtnCreate() {
        console.log('点击 创建房间 按钮')
        var client: GOBE.Client = ClientManager.instance.getClient()
        if (!client) {
            console.error('未连接到服务器，创建房间失败')
            return
        }

        let createRoomConfig: GOBE.CreateRoomConfig = {
            maxPlayers: 2, // 房间最大人数，最大支持500人
            isPrivate: 0,
            roomName: this.roomName.string,
        }
        let playerConfig: GOBE.PlayerConfig = { customPlayerStatus: 0, customPlayerProperties: '' }

        // 请求创建房间
        RoomManager.instance.CreateRoom(client, createRoomConfig, playerConfig)
    }

    private _onClickBtnCancel() {
        this.close()
    }
    
    private _onRoomCreateSuccess() {
        //加载 Prefab
        NotifyManager.instance.dispatch(GlobalNotify.OpenView,"roomcreateresultpopview",this.node.name)
    }

}