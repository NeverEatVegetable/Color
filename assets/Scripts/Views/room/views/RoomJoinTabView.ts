import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RoomJoinTabView')
export class RoomJoinTabView extends Component {
    private content: Node
    private baseRoom: Node
    private roomList: Node[] = []
    start() {
        this.buildUI()
        this.bindEvent()
        this.onEnter()
    }

    buildUI() {
        this.content = this.node.getChildByPath('content')
        this.baseRoom = this.content.getChildByPath('room')
    }

    bindEvent() {

    }

    unbindEvent() {

    }

    onExit() {

    }

    onEnter() {
        RoomManager.instance.getRoomList()
    }
}


