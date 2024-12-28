enum GlobalNotify {
    /** 客户端创建成功 */
    ClientCreateSuccess,

    /** 客户端初始化成功 */
    ClientInitSuccess,

    /** 客户端启动成功 */
    ClientExitSuccess,

    /** 房间创建成功 */
    RoomCreateSuccess,

    /** 加入房间成功 */
    RoomJoinSuccess,
    
    /** 获取房间信息列表成功 */
    GetRoomInfosSuccessRes,


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