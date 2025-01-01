import { _decorator, Component, Button, RichText, Label } from 'cc';
import DataManager from '../../Global/DataManager';

const { ccclass, property } = _decorator;

@ccclass('ClientCreateResultPopView')
export class ClientCreateResultPopView extends Component {
    private title: RichText
    private desc: RichText
    private txtConfirm: Label
    private btnJoin: Button
    private btnCreate: Button
    private btnClose: Button

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
        // this.txtCancel = this.node.getChildByPath('btnJoin/txt').getComponent(Label)
        this.txtConfirm = this.node.getChildByPath('btnCreate/txt').getComponent(Label)

        this.btnJoin = this.node.getChildByPath('btnJoin').getComponent(Button)
        this.btnCreate = this.node.getChildByPath('btnCreate').getComponent(Button)
        this.btnClose = this.node.getChildByPath('btnClose').getComponent(Button)
    }

    bindEvent() {
        this.btnJoin.node.on('click', this._onClickBtnJoin, this)
        this.btnCreate.node.on('click', this._onClickCreate, this)
        this.btnClose.node.on('click', this._onClickBtnClose, this)
    }

    unbindEvent() {
        this.btnJoin.node.off('click', this._onClickBtnJoin, this)
        this.btnCreate.node.off('click', this._onClickCreate, this)
        this.btnClose.node.off('click', this._onClickBtnClose, this)

    }

    onEnter() {
        var openId = ClientManager.instance.getOpenId()
        this.desc.string = `玩家${openId},\n注册成功！`
        DataManager.Instance.myPlayerId = parseInt(openId)
    }

    private _onClickBtnClose() {
        this.close()
    }

    private _onClickCreate() {
        console.log('创建房间')
        NotifyManager.instance.dispatch(GlobalNotify.OpenView, 'roomcreatepopview', this.node.name)
        // this.close()
    }

    private _onClickBtnJoin() {
        console.log('加入房间')
        NotifyManager.instance.dispatch(GlobalNotify.OpenView, 'roomjoinpopview', this.node.name)
        // this.close()
    }

    private close() {
        NotifyManager.instance.dispatch(GlobalNotify.CloseView, this.node.name)
    }
}


