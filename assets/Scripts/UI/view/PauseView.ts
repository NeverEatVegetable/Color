import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PauseView')
export class PauseView extends Component {

    onClose() {
        this.node.active = false;
    }
}


