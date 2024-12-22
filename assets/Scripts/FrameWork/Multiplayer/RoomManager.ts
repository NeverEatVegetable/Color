class RoomManager {
    public room: GOBE.Room;
    public playerList: GOBE.Player[] = [];
    public CreateRoom(client: GOBE.Client, createRoomConfig: GOBE.CreateRoomConfig, playerConfig?: GOBE.PlayerConfig) {
        //创建房间
        // createRoom(createRoomConfig: CreateRoomConfig, playerConfig?: PlayerConfig): Promise<Room>;
        if (!client) {
            console.error("client is null");
            return;
        }

        client.createRoom(createRoomConfig, playerConfig).then((room) => {
            // 创建房间中
            this.room = room ;
            this.playerList.fill(room.player);
            console.log("创建房间中")
        }).catch((e) => {
            // 创建房间失败
            console.log("创建房间失败")
            console.error(e);
        })

    }

    public getRoomList() {
        if (this.room) {
            console.log(this.room);
        } else {
            console.error("room is null");
        }
    }
    public static instance = new RoomManager();
}
(window as any).RoomManager = RoomManager;  //无需import，全局使用该类