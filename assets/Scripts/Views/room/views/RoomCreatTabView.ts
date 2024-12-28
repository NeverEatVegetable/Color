import { _decorator, Button, Component, EditBox, Node, Toggle } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RoomCreateTabView')
export class RoomCreateTabView extends Component {
    // UI 组件
    private btnCreate: Button
    private roomName: EditBox
    private goPassWord: Node
    private roomPassword: EditBox
    private tgNeedPw: Toggle
    private memberNum: EditBox

    buildUI() {
        this.btnCreate = this.node.getChildByPath('btnCreate').getComponent(Button)
        this.roomName = this.node.getChildByPath('content/name/txtInput').getComponent(EditBox)
        this.memberNum = this.node.getChildByPath('content/member/txtInput').getComponent(EditBox)
        this.tgNeedPw = this.node.getChildByPath('content/needpw/toggle').getComponent(Toggle)
        this.goPassWord = this.node.getChildByPath('content/password')
        this.roomPassword = this.node.getChildByPath('content/password/txtInput').getComponent(EditBox)
    }

    bindEvent() {
        this.btnCreate.node.on('click', this._onClickBtnCreate, this)
        this.tgNeedPw.node.on('toggle', this._onChecktgNeedPw, this)
    }

    start() {
        this.buildUI()
        this.bindEvent()
        this._initViewUI()
    }

    private _initViewUI() {
        this.goPassWord.active = false
        this.tgNeedPw.isChecked = false
    }

    private _onClickBtnCreate() {
        console.log('点击 创建房间 按钮')
        var client: GOBE.Client = ClientManager.instance.getClient();
        if (!client) {
            console.error('未连接到服务器，创建房间失败')
            return
        }

        var nums = parseInt(this.memberNum.textLabel.string)
        if (nums <= 2 || nums > 500) {
            console.error('房间人数不合法，创建房间失败')
            return
        }

        let createRoomConfig: GOBE.CreateRoomConfig = {
            maxPlayers: nums, // 房间最大人数，最大支持500人
            // isPrivate: this.tgNeedPw.isChecked ? 1 : 0, // 是否私有，0表示公开，1表示私有
            isPrivate: 0,
            roomName: this.roomName.string,
            // matchParams: { // 自定义匹配参数，最多支持5条
            //     param1: '{param1}',
            //     param2: '{param2}',
            // }
        }
        let playerConfig: GOBE.PlayerConfig = { customPlayerStatus: 0, customPlayerProperties: '' }

        // 请求创建房间
        RoomManager.instance.CreateRoom(client, createRoomConfig, playerConfig)
    }

    private _onChecktgNeedPw() {
        console.log('点击 房间私有 toggle')
        this.goPassWord.active = this.tgNeedPw.isChecked
    }
}


