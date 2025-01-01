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
            this._onRoomCreateSuccess()
            NotifyManager.instance.dispatch(GlobalNotify.RoomCreateSuccess)
        }).catch((e) => {
            // 创建房间失败
            console.log("创建房间失败")
            console.error(e)
            NotifyManager.instance.dispatch(GlobalNotify.RoomCreateFailed)
        })
    }

    /**
     * @function JoinRoom 加入房间
     * @param client 客户端
     * @param roomIdentity 房间ID或者房间短码
     */
    public JoinRoom(client: GOBE.Client, roomIdentity: string) {
        //加入房间
        // 当加入房间失败时，该玩家可通过如下方法收到失败事件通知\
        console.log("加入房间")
        client.onJoinRoomFailed((error) => {
            // 加入房间失败通知
            console.error("加入房间失败:", error)
            NotifyManager.instance.dispatch(GlobalNotify.RoomJoinFailed)
        })
        client.joinRoom(roomIdentity).then((_room) => {
            this._room = _room
            this._player = _room.player
            console.log(`玩家：${this._player.playerId}，加入房间成功`)
            this._onRoomJoinSuccess()
            NotifyManager.instance.dispatch(GlobalNotify.RoomJoinSuccess)
        }).catch((e) => {
            // 加入房间失败
            console.error("加入房间失败:", e)
        })
    }

    /**
     * 获取我的玩家信息
     * @returns 玩家信息
     */
    public getMyInfos() {
        return this._player
    }
    
    /**
     * 获取可加入的房间列表
     * @param client 客户端
     * @returns 可加入的房间列表
     */
    public getRoomListReq(client: GOBE.Client) {
        let roomInfos = []
        let getAvailableRoomsConfig = {
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
            NotifyManager.instance.dispatch(GlobalNotify.GetRoomInfosSuccessRes, infos.rooms)
            // 记录下次查询房间的偏移量
            getAvailableRoomsConfig.offset = infos.offset.toString()
        }).catch((e) => {
            // 查询房间列表失败
            roomInfos = []
            console.log("search rooms failed:", e)
        })
    }

    /**
     * 获取房间信息
     * @returns 房间信息 = { 
     *  *   name : 房间名称, 
     *  *   id : 房间ID, 
     *  *   roomCode : 房间邀请码 , 
     *  *   owner : 房主ID,
     *  *   players : 房间内玩家信息列表 
     * }
     */
    public getMyRoomInfo() {
        if (!this._room) {
            console.error("room is null")
            return
        }
        let info = {
            "name": this._room.roomName, // 房间名称
            "id": this._room.roomId, // 房间ID
            "roomCode": this._room.roomCode, // 房间邀请码
            "ownerId": this._room.ownerId, // 房主ID
            "players": this._room.players, // 房间内玩家信息列表
        }
        return info
    }

    /**
     * 玩家创建房间成功后，添加房间相关通知回调
     */
    private _onRoomCreateSuccess() {
        // 额外的东西没想好，暂时先不处理
        this._onRoomJoinSuccess()
    }
    /**
     * 玩家加入房间成功后，添加房间相关通知回调
     */
    private _onRoomJoinSuccess() {
        // 添加玩家加入房间通知回调
        this._room.onJoin((playerInfo) => {
            // 非自身外的玩家加入房间才发消息
            if (playerInfo.playerId != this._player.playerId) {
                NotifyManager.instance.dispatch(GlobalNotify.RoomMemberComeIn, playerInfo)
            }
            console.log(`玩家：${playerInfo.playerId}，加入房间成功`)
        })

        // 添加帧同步开始通知回调
        this._room.onStartFrameSync(() => {
            NotifyManager.instance.dispatch(GlobalNotify.RoomStartFrameSync)
        });

        // 添加帧同步结束通知回调
        this._room.onStopFrameSync(() => {
            NotifyManager.instance.dispatch(GlobalNotify.RoomStopFrameSync)
        });

        // 添加接收帧同步信息回调
        this._room.onRecvFrame((msg: GOBE.RecvFrameMessage[] | GOBE.RecvFrameMessage) => {
            // 处理帧数据msg
            if (Array.isArray(msg)) {
                // 处理补帧数据，暂时先不处理
            } else {
                // 处理实时帧数据
                NotifyManager.instance.dispatch(GlobalNotify.RecvRoomFrameRecvMsg, msg)
            }
        })

        // 添加接收房间内成员消息回调
        this._room.onRecvFromClient((recvFromClientInfo) => {
            // recvFromClientInfo ：roomId, playerId, msg
            NotifyManager.instance.dispatch(GlobalNotify.RecvRoomMemberMsg, recvFromClientInfo)
        })

        // 添加接收房间内服务器消息回调
        // this._room.onRecvFromServer((msg) => {
        //     NotifyManager.instance.dispatch(GlobalNotify.RecvRoomServerMsg, msg)
        // })

        // 添加发送消息异常回调
        this._room.onSendToClientFailed((error) => {
            NotifyManager.instance.dispatch(GlobalNotify.SendMsgToRoomMemberFailed, error)
          });
    }

    /**
     * 开始帧同步
     */
    public startFrameSync() {
        try {
            this._room.startFrameSync()
        } catch (error) {
            console.log("开始帧同步 error:", error)
        }
    }

    /**
     * 结束帧同步
     */
    public stopFrameSync() {
        try {
            this._room.stopFrameSync()
        } catch (error) {
            console.log("结束帧同步 error:", error)
        }
    }

    /**
     * 玩家房间信息查询
     */
    public updateRoom() {
        try {
            this._room.update()
        } catch (error) {
            console.log("玩家房间信息查询 error:", error)
        }
    }

    /**
     * 离开房间
     */
    public leaveRoom() {
        try {
            this._room.leave()
        } catch (error) {
            console.log("离开房间 error:", error)
        }
    }

    /**
     * 解散房间
     * @remarks 房主才能解散房间
     */
    public dismissRoom() {
        try {
            this._room.dismiss()
        } catch (error) {
            console.log("解散房间 error:", error)
        }
    }

    /**
     * 移除房间内玩家
     * @param playerId - 被移除出的玩家ID
     * @remarks 只有房主有权限移除其他玩家
     * @remarks 房间在帧同步中，不能移除其他玩家
     */
    public removePlayer(playerId: string) {
        try {
            this._room.removePlayer(playerId)
        } catch (error) {
            console.log("移除房间内玩家 error:", error)
        }
    }

    /**
     * 查询房间帧同步状态
     * @returns true = 帧同步中，false = 帧同步未开始
     */
    public checkRoomIsSyncing() {
        return this._room && this._room.isSyncing
    }

    /**
     * 重置房间起始帧ID，调用场景：在加入房间后，开始游戏前调用,直接传0就完事了
     * @param frameId - 帧Id
     */
    public resetRoomFrameId(frameId: number) {
        try {
            this._room.resetRoomFrameId(frameId)
        } catch (e) {
            console.log("resetRoomFrameId error:", e)
        }
    }

    /**
     * 发送帧数据 ( string->实时帧数据 | string[]->补帧数据 )
     * @param frameData - 帧数据,要求string长度小于4096,数组长度小于100
     */
    public sendFrameData(frameData: string | string[]) {
        // 可通过监听GlobalNotify.RecvRoomFrameRecvMsg获得frameData
        try {
            this._room.sendFrame(frameData)
        } catch (e) {
            console.log("sendFrameData error:", e)
        }

    }

    /**
     * 发送消息给房间内玩家
    * @param type - number 房间状态 0：发送给房间内全部玩家，1：发送给房间内除本人外的其他所有玩家，2：发送给recvPlayerIdList的玩家
    * @param msg - string 消息内容
    * @param recvPlayerList - string[] 【可选】接收消息的玩家ID列表，玩家信息列表可调用接口获取
    * @public
    */
    public sendMsgToRoomMember(type: number, msg: string, recvPlayerList?: string[]) {
        try {
            let sendToClientInfo = {
                type: type,
                msg: msg,
                recvPlayerIdList: recvPlayerList
            }
            this._room.sendToClient(sendToClientInfo)
        } catch (e) {
            console.log("sendMessageToClient error:", e)
        }

    }

    // /**
    //  * 发送消息给实时服务器
    //  * @param msg - string 发送给实时服务器消息
    //  */
    // public sendMsgToServer(msg: string) {
    //     try {
    //         this._room.sendToServer(msg)
    //     } catch (e) {
    //         console.log("sendMessageToServer error:", e)
    //     }
    // }


    public static instance = new RoomManager()
}
(window as any).RoomManager = RoomManager  //无需import，全局使用该类