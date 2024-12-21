/**
 * 客户端Manager类，用于管理客户端的创建、初始化、销毁等操作
    @param:_appId - 应用ID（写死）
    @param:_clientId - 客户端ID（写死）
    @param:_clientSecret - 客户端密钥（写死）
    @param:_accessToken - AGC接入凭证(推荐)
    @param:_platform - 平台类型（选填）
    @param:_cerPath - 证书绝对路径（选填）
    @param:_openId - 玩家ID,默认为#admin
    @param:_client - GOBE客户端
 */
class ClientManager{
    private _appId: string = '5765880207855782829'
    private _clientId: string = '1542321410377030848'
    private _clientSecret: string = '9FCB7CDA93F39E30DB444504E68E2C9582BFA87562E165ED99AE34040AB07A92'
    private _accessToken: string;
    private _platform: string;
    private _cerPath: string;
    private _openId: string = "#admin";
    private _client: GOBE.Client;

    private constructor() {
        // 私有构造函数
    }

    // 注册事件监听
    private _initListener() {
        NotifyManager.instance.addListener(GlobalNotify.ClientInitSuccess,() => { this._client.onInitResult })
    }

    // 绑定玩家ID
    public bindOpenId(userId: string) {
        this._openId = userId;
    }

    // 获取玩家ID
    public getOpenId() {
        return this._openId
    }

    // 创建GOBE客户端
    public createClient() {
        this._initListener();
        this._client = new window.GOBE.Client({
            appId: this._getAppId(),
            clientId: this._getClientId(),
            clientSecret: this._getClientSecret(),
            openId: this.getOpenId(),
        })
        //注册初始化结果回调
        this._client.onInitResult((resultCode) => {
            if (resultCode === 0) {
                console.log('初始化成功')
                //做游戏逻辑处理
            } else {
                console.error('初始化失败，重新初始化或联系华为技术支持')
            }
        });
    }

    // 初始化GOBE客户端
    public initClient() {
        let playerId = '';
        // 调用Client.init方法进行初始化
        this._client.init().then((client) => {
            // 已完成初始化请求，具体初始化结果通过onInitRe功sult回调获取
            NotifyManager.instance.dispatch(GlobalNotify.ClientInitSuccess)
            playerId = client.playerId;
        }).catch((err) => {
            console.error('初始化失败，错误码 = ' + err + '请重新初始化！')
            console.error('错误码查询链接 https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gameobe-errorcode-0000001280943429')
        });
    }

    // 退出GOBE客户端
    public exitClient() {
        this._client.destroy();
    }


    // 设置接入凭证
    private _setAccessToken(accessToken: string) {
        this._accessToken = accessToken;
    }
    // 设置平台类型
    private _setPlatform(platform: string) {
        this._platform = platform;
    }
    // 设置证书路径
    private _setCerPath(cerPath: string) {
        this._cerPath = cerPath;
    }

    // 获取应用ID
    private _getAppId() {
        return this._appId;
    }
    // 获取客户端ID
    private _getClientId() {
        return this._clientId;
    }
    // 获取客户端密钥
    private _getClientSecret() {
        return this._clientSecret;
    }
    // 获取接入凭证
    private _getAccessToken() {
        return this._accessToken;
    }
    // 获取平台类型
    private _getPlatform() {
        return this._platform;
    }
    // 获取证书路径
    private _getCerPath() {
        return this._cerPath;
    }
    // 获取玩家ID
    private _getOpenId() {
        return this._openId;
    }
    // 获取GOBE客户端
    public getClient() {
        return this._client;
    }

    public static instance = new ClientManager();
}
(window as any).ClientManager = ClientManager;  //无需import，全局使用该类
