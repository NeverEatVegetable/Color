import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RoomJoinTabView')
export class RoomJoinTabView extends Component {
    private content: Node
    private baseRoom: Node
    private roomList: Node[] = []
    private roomInfos: GOBE.RoomInfo[] = []
    protected onEnable(): void {
        this.onEnter()
    }
    start() {
        this.buildUI()
        this.bindEvent()
        this._onInit()
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

    }

    _onInit(){
        let client = ClientManager.instance.getClient()
        if (client) {
            this.roomInfos = RoomManager.instance.getRoomList(client)
        }
    }
}


