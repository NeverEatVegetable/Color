import { _decorator, Button, Component, EditBox, Node, Toggle } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RoomCreateTabView')
export class RoomCreateTabView extends Component {
    // UI 组件
    private btnCreate: Button
    private roomName: EditBox
    private goPassWord: Node
    private roomPassword: EditBox
    private tgPrivate: Toggle
    private maxPlayers: EditBox

    buildUI() {
        this.goPassWord = this.node.getChildByPath('content/password')
        this.btnCreate = this.node.getChildByPath('btnCreate').getComponent(Button)
        this.roomName = this.node.getChildByPath('content/name/txtInput').getComponent(EditBox)
        this.roomPassword = this.node.getChildByPath('content/password/txtInput').getComponent(EditBox)
        this.tgPrivate = this.node.getChildByPath('content/isPrivate/tg').getComponent(Toggle)
        this.maxPlayers = this.node.getChildByPath('content/maxPlayers/txtInput').getComponent(EditBox)
    }

    bindEvent() {
        this.btnCreate.node.on('click', this._onClickBtnCreate, this)
        this.tgPrivate.node.on('check', this._onCheckTgPrivate, this)
    }

    start() {
        this.buildUI()
        this.bindEvent()
    }

    private _onClickBtnCreate() {
        console.log('点击 创建房间 按钮')
        var client: GOBE.Client = ClientManager.instance.getClient();

        let createRoomConfig: GOBE.CreateRoomConfig = {
            maxPlayers: parseInt(this.maxPlayers.string),
            isPrivate: 0,
            roomName: this.roomName.string,
            matchParams: { // 自定义匹配参数，最多支持5条
                param1: '{param1}',
                param2: '{param2}',
            }
        }
        let playerConfig: GOBE.PlayerConfig = { customPlayerStatus: 0, customPlayerProperties: '' }

        // 请求创建房间
        RoomManager.instance.CreateRoom(client, createRoomConfig, playerConfig)
    }

    private _onCheckTgPrivate() {
        console.log('点击 房间私有 toggle')
        if (this.tgPrivate.isChecked) {
            this.goPassWord.active = true
        } else {
            this.goPassWord.active = false
        }
    }
}


