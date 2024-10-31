/**
 * 客户端Manager类，用于管理客户端的创建、初始化、销毁等操作
    @param:_appId - 应用ID
    @param:_clientId - 客户端ID
    @param:_clientSecret - 客户端密钥
    @param:_accessToken - AGC接入凭证(推荐)
    @param:_platform - 平台类型（选填）
    @param:_cerPath - 证书绝对路径（选填）
    @param:_openId - 玩家ID
    @param:_client - GOBE客户端
 */
class ClientManager{
    private _appId: string = '5765880207855782829'
    private _clientId: string = '9FCB7CDA93F39E30DB444504E68E2C9582BFA87562E165ED99AE34040AB07A92'
    private _clientSecret: string = '9FCB7CDA93F39E30DB444504E68E2C9582BFA87562E165ED99AE34040AB07A92'
    private _accessToken: string;
    private _platform: string;
    private _cerPath: string;
    private _openId: string = "#admin";
    private _client: GOBE.Client;

    private constructor() {
        // 私有构造函数
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
        this._client = new window.GOBE.Client({
            appId: this._appId,
            clientId: this._clientId,
            clientSecret: this._clientSecret,
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
            playerId = client.playerId;
        }).catch((err) => {
            console.error('初始化失败，重新初始化或联系华为技术支持,err:' + err)
        });
    }

    // 退出GOBE客户端
    public exitClient() {
        this._client.destroy();
    }
    public static instance = new ClientManager();
}

// (window as any).ClientManager = ClientManager;//无需import，全局使用该类
let clientManager = ClientManager.instance;
