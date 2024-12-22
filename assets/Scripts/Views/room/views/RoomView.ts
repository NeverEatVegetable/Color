import { _decorator, Button, Component, Node, assetManager, instantiate, error } from 'cc'
const { ccclass, property } = _decorator

@ccclass('RoomView')
export class RoomView extends Component {
    private container: Node
    private _tabs: Node
    private btnClose: Button
    buildUI() {
        this._tabs = this.node.getChildByName('tabs')
        this.btnClose = this.node.getChildByPath('leftTop/btnClose').getComponent(Button)
        this.container = this.node.getChildByPath('container')
    }

    bindEvent() {
        var content = this._tabs.getChildByPath('content')
        for (let i = 0; i < content.children.length; i++) {
            let btn = content.getChildByPath(`btn_${i+1}`).getComponent(Button)
            btn.node.on('click', () => {
                this._onClickTabBtn(i)
            })
        }
        this.btnClose.node.on('click',this._onClickClose)
    }

    start() {
        this.buildUI()
        this.bindEvent()
        this._onClickTabBtn(0)  // 默认打开第一个tab
    }

    private _onClickTabBtn(tabId) {
        console.log('tabId = ', tabId)
        if (tabId >= this.container.children.length) {
            console.log("tabId 超出范围，切换界面失败。")
            return
        }

        for (let i = 0; i < this.container.children.length; i++) {
            this.container.children[i].active = i == tabId
        }
    }

    private _onClickClose() {
        console.log('close')
    }
}


