class RoomManager {
    private _room: GOBE.Room
    private _player: GOBE.Player
    // public playerList: GOBE.Player[] = []

    /**
     * @function CreateRoom 创建房间
     * @param client 客户端
     * @param createRoomConfig 创建房间的配置
     * @param playerConfig 玩家配置
     */
    public CreateRoom(client: GOBE.Client, createRoomConfig: GOBE.CreateRoomConfig, playerConfig?: GOBE.PlayerConfig) {
        //创建房间
        // createRoom(createRoomConfig: CreateRoomConfig, playerConfig?: PlayerConfig): Promise<Room>
        if (!client) {
            console.error("client is null")
            return
        }

        client.createRoom(createRoomConfig, playerConfig).then((room) => {
            // 创建房间中
            this._room = room
            this._player = room.player
            console.log("创建房间成功")
            NotifyManager.instance.dispatch(GlobalNotify.RoomCreateSuccess)
            this._room.onJoin((playerInfo) => {
                // 判断是否为当前玩家加入房间
                if (playerInfo.playerId === this._room.playerId) {
                    // 加入房间成功，做相关游戏逻辑处理
                    console.log("加入房间成功")
                    console.log(playerInfo)
                }
            })
        }).catch((e) => {
            // 创建房间失败
            console.log("创建房间失败")
            console.error(e)
        })
    }

    /**
     * @function JoinRoom 加入房间
     * @param client 客户端
     * @param roomIdentity 房间ID或者房间短码
     */
    public JoinRoom(client: GOBE.Client, roomIdentity: string) {
        //加入房间
        // 当加入房间失败时，该玩家可通过如下方法收到失败事件通知
        client.onJoinRoomFailed((error) => {
            // 加入房间失败通知
        })
        client.joinRoom(roomIdentity,
            { customPlayerStatus: 0, customPlayerProperties: '' }).then((_room) => {
                // 加入房间中
                this._room = _room
                this._player = _room.player
            }).catch((e) => {
                // 加入房间失败
                console.error("加入房间失败:", e)
            })
    }

    public getRoomList(client: GOBE.Client) {
        let roomInfos = []
        let getAvailableRoomsConfig = {
            //    roomType: '蓝队',              // 房间类型
            //    roomTypeList: ['蓝队','红队'], // 房间类型列表
            offset: '0',                  // 偏移量
            limit: 30,                    // 单次请求获取的房间数量
            sync: true,                   // 是否返回帧同步中的房间
        }
        if (!client) {
            console.error("client is null")
            return
        }
        client.getAvailableRooms(getAvailableRoomsConfig).then((infos) => {
            console.log("search rooms success:", infos)
            // 查询房间列表成功
            roomInfos = infos.rooms
            // 记录下次查询房间的偏移量
            getAvailableRoomsConfig.offset = infos.offset.toString()
        }).catch((e) => {
            // 查询房间列表失败
            roomInfos = []
            console.log("search rooms failed:", e)
        })
        return roomInfos
    }

    /**
     * getMyRoonInviteCode 获取房间邀请码
     */
    public getMyRoonInfo() {
        if (!this._room) {
            console.error("room is null")
            return
        }
        let info = {
            "name" : this._room.roomName, // 房间名称
            "id" : this._room.roomId, // 房间ID
            "inviteCode" : this._room.roomCode, // 房间邀请码
        }
        return info
    }
    public static instance = new RoomManager()
}
(window as any).RoomManager = RoomManager  //无需import，全局使用该类