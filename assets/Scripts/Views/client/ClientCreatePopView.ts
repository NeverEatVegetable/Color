import { _decorator, Button, Component, EditBox, Node, Toggle } from 'cc'

const { ccclass, property } = _decorator;

@ccclass('ClientCreatePopView')
export class ClientCreatePopView extends Component {
    // UI 组件
    private btnCreate: Button
    private btnCancel: Button
    private openId: EditBox
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
        this.openId = this.node.getChildByPath('name/txtInput').getComponent(EditBox)
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
        NotifyManager.instance.removeListener(GlobalNotify.ClientInitSuccess, this._onClientInitSuccess.bind(this))
        
    }

    private onEnter() {
        NotifyManager.instance.addListener(GlobalNotify.ClientInitSuccess, this._onClientInitSuccess.bind(this))
    }

    private _onClickBtnCreate() {
        console.log('点击 注册 按钮')
        ClientManager.instance.bindOpenId(this.openId.string)
        ClientManager.instance.createClient()
        ClientManager.instance.initClient()
        var client = ClientManager.instance.getClient()
        console.log('注册成功:',client)
    }

    private _onClickBtnCancel() {
        // 关闭界面
        NotifyManager.instance.dispatch(GlobalNotify.CloseView, this.node.name)
    }
    
    private _onClientInitSuccess() {
        //加载 Prefab
        NotifyManager.instance.dispatch(GlobalNotify.OpenView,"clientcreateresultpopview",this.node.name)
    }
}
