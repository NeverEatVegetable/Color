// 客户端Manager类，用于管理客户端的创建、初始化、销毁等操作
class ClientManager {
    // 必须参数: _appId - 应用ID; _clientId - 客户端ID; _clientSecret - 客户端密钥;[<--随项目固定参数] _openId - 玩家ID;
    // _cerPath - 证书绝对路径（选填）; _platform - 平台类型（选填）; _accessToken - AGC接入凭证(推荐)
    private _appId: string = '5765880207855782829'
    private _clientId: string = '9FCB7CDA93F39E30DB444504E68E2C9582BFA87562E165ED99AE34040AB07A92'
    private _clientSecret: string = '9FCB7CDA93F39E30DB444504E68E2C9582BFA87562E165ED99AE34040AB07A92'
    private _accessToken: string;
    private _platform: string;
    private _cerPath: string;
    private _openId: string = "#admin";
    private _client: any;

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

    // 绑定玩家ID
    public getOpenId() {
        return this._openId
    }

    public createClient() {
        // 创建客户端
        this._client = new window.GOBE.Client({
            appId: this._appId,
            clientId: this._clientId,
            clientSecret: this._clientSecret,
            openId: this._openId,
        })

        this._client.onInitResult((resultCode) => {
            if (resultCode === 0) {
                console.log('初始化成功')
                //做游戏逻辑处理
            } else {
                console.error('初始化失败，重新初始化或联系华为技术支持')
            }
        });
    }

    public initClient() {
        let playerId = '';
        // 调用Client.init方法进行初始化
        this._client.init().then((client) => {
            // 已完成初始化请求，具体初始化结果通过onInitResult回调获取
            NotifyManager.instance.dispatch('客户端初始化成功！');
            playerId = client.playerId;
        }).catch((err) => {
            console.error('初始化失败，重新初始化或联系华为技术支持,err:' + err)
        });
    }

    public exitClient() {
        this._client.destroy();
    }
    public static instance = new ClientManager();
}
(window as any).ClientManager = ClientManager;
