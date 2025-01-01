import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CommonViewTool')
export class CommonViewTool extends Component {
    onClose() {
        this.node.active = false;
    }

    onOpen() {
        this.node.active = true;
    }
}


