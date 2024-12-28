import { _decorator, Component, Node ,EditBox} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RoomJoinPopView')
export class RoomJoinPopView extends Component {
    private inviteCode: string
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
        this.inviteCode = this.node.getChildByPath('content/invite/txtInput').getComponent(EditBox).string
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

        if (this.roomInfos.length > 0) {
            this.roomInfos.forEach((roomInfo, index) => {
                console.log(roomInfo)
            })
        }
    }

}


