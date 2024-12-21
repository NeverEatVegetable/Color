import { _decorator, Button, Component, Node, assetManager, instantiate, error } from 'cc'
const { ccclass, property } = _decorator

@ccclass('RoomView')
export class RoomView extends Component {
    private container: Node
    private tabBtnGroup: Node
    private btnClose: Button
    buildUI() {
        this.tabBtnGroup = this.node.getChildByName('tabBtnGroup')
        this.container = this.node.getChildByName('container')
        this.btnClose = this.node.getChildByName('btnClose').getComponent(Button)
    }

    bindEvent() {
        for (let i = 0; i < this.tabBtnGroup.children.length; i++) {
            const btn = this.tabBtnGroup.children[i].getComponent(Button)
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
        for (let i = 0; i < this.container.children.length; i++) {
            this.container.children[i].active = i == tabId
        }
    }

    private _onClickClose() {
        console.log('close')
    }
}

