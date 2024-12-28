enum GlobalNotify {
    /** 客户端创建成功 */
    ClientCreateSuccess,

    /** 客户端初始化成功 */
    ClientInitSuccess,

    /** 客户端启动成功 */
    ClientExitSuccess,

    /** 房间创建成功 */
    RoomCreateSuccess,

    /** 房间创建失败 */
    RoomCreateFailed,

    /** 加入房间成功 */
    RoomJoinSuccess,

    /** 加入房间失败 */
    RoomJoinFailed,

    /** 有玩家进入房间 */
    RoomMemberComeIn,

    /** 有玩家离开房间 */
    RoomMemberLeave,

    /** 获取房间信息列表成功 */
    GetRoomInfosSuccessRes,

    /** 房间开始帧同步 */
    RoomStartFrameSync,

    /** 房间停止帧同步 */
    RoomStopFrameSync,

    /** 发送房间信息异常 */
    SendMsgToRoomMemberFailed,

    /** 收到帧同步信息 */
    RecvRoomFrameRecvMsg,

    /** 收到房间成员消息 */
    RecvRoomMemberMsg,

    /** 收到服务器信息 */
    RecvRoomServerMsg,

    /** 本地配置加载完毕 */
    LOCAL_DATA_LOAD_SUCESS,

    /** 打开界面 */
    OpenView,

    /** 关闭界面 */
    CloseView,

    /** 进入游戏 */
    GameEnter,

    /** 退出游戏 */
    GameExit,

    /** 游戏暂停 */
    GamePause,

    /** 游戏恢复 */
    GameResume,

    /** 重开游戏 */
    GameRestart,
}

(window as any).GlobalNotify = GlobalNotify;