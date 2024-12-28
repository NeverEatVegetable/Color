enum GlobalNotify{
    // 客户端相关
    ClientCreateSuccess,    //客户端创建成功
    ClientInitSuccess,      //客户端初始化成功
    ClientExitSuccess,      //客户端退出成功

    /** 本地配置加载完毕 */
    LOCAL_DATA_LOAD_SUCESS,
    /** 本地游戏开始前初始化完毕*/
    GAME_INIT_SUCESS,
    /** 订单数据改变 */
    ORDER_DATA_UPDATE,
    /** 分数数据改变 */
    SCORE_DATA_UPDATE,

}

(window as any).GlobalNotify = GlobalNotify;