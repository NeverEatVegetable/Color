import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RoomJoinTabView')
export class RoomJoinTabView extends Component {
    private content: Node
    private baseRoom: Node
    private roomList: Node[] = []
    private roomInfos: GOBE.RoomInfo[] = []
    
    protected onEnable(): void {
    
    }
    start() {
        this.buildUI()
        this.bindEvent()
        this.onEnter()
    }

    buildUI() {
        this.content = this.node.getChildByPath('Scroll View/view/content')
        this.baseRoom = this.content.getChildByPath('room')
    }

    bindEvent() {

    }

    unbindEvent() {

    }

    onExit() {

    }

    onEnter() {
        let client = ClientManager.instance.getClient()
        if (client) {
            this.roomInfos = RoomManager.instance.getRoomList(client)
        }
    }

}


