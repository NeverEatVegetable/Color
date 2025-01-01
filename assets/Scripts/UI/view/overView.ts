import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('overView')
export class overView extends Component {
    onClose() {
        this.node.active = false;
    }
}


