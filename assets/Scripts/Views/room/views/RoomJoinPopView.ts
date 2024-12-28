import { _decorator, Component, Node ,EditBox, Button} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RoomJoinPopView')
export class RoomJoinPopView extends Component {
    private txtInput: EditBox
    private btnJoin: Button
    private btnCancel: Button
    private roomInfos: GOBE.RoomInfo[] = []
    private client: GOBE.Client
    protected onEnable(): void {
    
    }
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
        this.txtInput = this.node.getChildByPath('invite/txtInput').getComponent(EditBox)
        this.btnJoin = this.node.getChildByPath('btnJoin').getComponent(Button)
        this.btnCancel = this.node.getChildByPath('btnCancel').getComponent(Button)
    }
    bindEvent() {
        this.btnJoin.node.on('click', this.onClickBtnJoin, this)
        this.btnCancel.node.on('click', this.onClickBtnCancel, this)
    }

    unbindEvent() {
        this.btnJoin.node.off('click', this.onClickBtnJoin, this)
        this.btnCancel.node.off('click', this.onClickBtnCancel, this)
    }

    onExit() {
        NotifyManager.instance.removeListener(GlobalNotify.GetRoomInfosSuccessRes, this.onGetRoomInfosSuccess.bind(this))
        NotifyManager.instance.removeListener(GlobalNotify.RoomJoinSuccess, this.onJoinRoomSuccess.bind(this))
    }

    onEnter() {
        NotifyManager.instance.addListener(GlobalNotify.GetRoomInfosSuccessRes, this.onGetRoomInfosSuccess.bind(this))
        NotifyManager.instance.addListener(GlobalNotify.RoomJoinSuccess, this.onJoinRoomSuccess.bind(this))
        this.client = ClientManager.instance.getClient()
    }

    onClickBtnJoin() {
        console.log('join room by roomCode:', this.txtInput.string)
        if (this.client) {
            RoomManager.instance.getRoomListReq(this.client)
        }
    }

    onClickBtnCancel() {
        NotifyManager.instance.dispatch(GlobalNotify.CloseView,this.node.name)
    }

    onGetRoomInfosSuccess(roomInfos: GOBE.RoomInfo[]) {
        roomInfos.forEach((roomInfo, index) => {
            if (roomInfo.roomCode == this.txtInput.string) {
                RoomManager.instance.JoinRoom(this.client, roomInfo.roomCode)
            }
        })
    }
    onJoinRoomSuccess() {
        NotifyManager.instance.dispatch(GlobalNotify.OpenView,"roomjoinresultpopview",this.node.name)
    }
}