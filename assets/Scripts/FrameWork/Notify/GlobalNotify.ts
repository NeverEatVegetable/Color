enum GlobalNotify{
    // 客户端相关
    ClientCreateSuccess,    //客户端创建成功
    ClientInitSuccess,      //客户端初始化成功
    ClientExitSuccess,      //客户端退出成功

    /** 本地配置加载完毕 */
    LOCAL_DATA_LOAD_SUCESS,

}

(window as any).GlobalNotify = GlobalNotify;