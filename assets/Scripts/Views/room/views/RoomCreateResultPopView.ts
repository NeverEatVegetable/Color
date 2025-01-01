import { _decorator, Component, Button, Node, RichText, Label, resources, instantiate, Prefab, find } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RoomCreateResultPopView')
export class RoomCreateResultPopView extends Component {
    private title: RichText
    private desc: RichText
    // private txtCancel: Label
    private txtConfirm: Label
    private btnCancel: Button
    private btnConfirm: Button

    private cancelFunc: Function
    private confirmFunc: Function

    start() {
        this.buildUI()
        this.bindEvent()
        this.onEnter()
    }

    protected onDestroy(): void {
        this.unbindEvent()
    }
    buildUI() {
        this.title = this.node.getChildByPath('title').getComponent(RichText)
        this.desc = this.node.getChildByPath('desc').getComponent(RichText)
        // this.txtCancel = this.node.getChildByPath('btnCancel/txt').getComponent(Label)
        this.txtConfirm = this.node.getChildByPath('btnConfirm/txt').getComponent(Label)

        this.btnCancel = this.node.getChildByPath('btnCancel').getComponent(Button)
        this.btnConfirm = this.node.getChildByPath('btnConfirm').getComponent(Button)
    }

    bindEvent() {
        this.btnCancel.node.on('click', this._onClickBtnCancel, this)
    }

    unbindEvent() {
        this.btnCancel.node.off('click', this._onClickBtnCancel, this)
    }

    onEnter() {
        var roomInfo = RoomManager.instance.getMyRoomInfo()
        if (!roomInfo) {
            this.title.node.active = false
            this.desc.string = '房间创建失败！请重试'
            this.txtConfirm.string = '重新创建'
            this.btnConfirm.node.on('click', this.onClickRetry, this)
        }
        this.title.string = `${roomInfo.name}#${roomInfo.id}`
        this.desc.string = `房间创建成功！\n房间邀请码为：${roomInfo.roomCode}\n快邀请好友进入房间吧~`
        this.txtConfirm.string = '进入游戏'
        this.btnConfirm.node.on('click', this.onClickConfirm, this)

    }

    private _onClickBtnCancel() {
        this.close()
    }

    private onClickConfirm() {
        // 进入游戏逻辑
        console.log('进入游戏')
        NotifyManager.instance.dispatch(GlobalNotify.GameEnter, new Date().getTime())
         this.close()
        //NotifyManager.instance.dispatch(GlobalNotify.OpenView, 'clientcreatepopview', this.node.name)
    }

    private onClickRetry() {
        // 加载 Prefab
        NotifyManager.instance.dispatch(GlobalNotify.OpenView, 'roomcreatepopview', this.node.name)
    }

    private close() {
        NotifyManager.instance.dispatch(GlobalNotify.CloseView, this.node.name)
    }
}


