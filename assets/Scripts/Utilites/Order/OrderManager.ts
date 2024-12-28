import { _decorator, Component, instantiate, Node, Prefab, resources } from 'cc';
import { MyColor } from '../ColorMix/MyColor';
import { OrderData } from '../../UI/OrderControl/OrderData';
import { ColorTip } from '../../UI/OrderControl/ColorTip';
import { ColorOrder } from '../../UI/OrderControl/ColorOrder';
const { ccclass, property } = _decorator;

@ccclass('OrderManager')
export class OrderManager{
    private static _instance: OrderManager = new OrderManager();
    public static get _Instance() {
        if (this._instance == null) { this._instance = new OrderManager(); }
        return this._instance;
    }

    /** 系统订单数据*/
    private _orderData: OrderData = new OrderData();

    /** 玩家提交的订单数据 */
    private _playerColorOrder: Array<MyColor> = [];

    /** 系统和玩家订单的比对结果 */
    private _isTip: Array<boolean> = [];


    /** 订单颜色提示*/
    //private _colorTip: any = {}; //key为目标颜色hex，value为colortip
    private _tipObj: Array<Node> = [];
    private _orderObj: Node;

    /** 订单颜色提示预制体*/
    private _colorTipPrefabs: any = {};//key为目标颜色混合个数，value为Prefab
    /** 订单需求预制体*/
    private _orderColorPrefab;

    private _orderNode: Node;
    private _orderTipNode: Node;

    // init(){
    //     GameEventManager._Instance.RegisterEventListener("InitAllEvent", () =>
    //     {
    //         //初始化订单数据
    //         GameEventManager._Instance.RegisterEventListener("InitAllData", InitOrder);

    //         //检测玩家提交订单和系统生成的订单
    //         GameEventManager._Instance.RegisterEventListener("UploadOrder", CheckOrder);

    //         //增加玩家提交的颜色
    //         //GameEventManager._Instance.RegisterEventListener<MyColor>("UploadColor", AddPlayerColor);
    //     });
    // }

    constructor() {
        //NotifyManager.instance.addListener(GlobalNotify.LOCAL_DATA_LOAD_SUCESS, () => {
        //    OrderManager._Instance.InitData();
        //    NotifyManager.instance.dispatch(GlobalNotify.GAME_INIT_SUCESS);
        //});
        this.LoadResources;
    }

    /** 加载资源/数据*/
    LoadResources() {
        for (let i = 2; i <= 4; i++) {
            resources.load("Prefabs/orderTip_" + i, Prefab, this.loadOrderTip.bind(this));
        }
        resources.load("Prefabs/order", Prefab, this.loadOrder.bind(this));
    }

    loadOrder(err, prefab: Prefab){
    if (err) {
        console.error('加载订单提示预制体出错:', err);
        return;
    }
    //OrderManager._instance._orderColorPrefab = prefab;
    this._orderColorPrefab = prefab;
}

    loadOrderTip(err, prefab: Prefab) {
        if (err) {
            console.error('加载订单提示预制体出错:', err);
            return;
        }
        //OrderManager._instance._colorTipPrefabs[parseInt(prefab.name.charAt(9))] = prefab;
        this._colorTipPrefabs[parseInt(prefab.name.charAt(9))] = prefab;
    }

    /** 数据初始化 */
    InitData() {
        this._orderData.ClearSystemDate();

        this._isTip = [false, false, false, false];

        this._playerColorOrder = [];

        this._orderNode = new Node("orderNode");
        this._orderObj = instantiate(this._orderColorPrefab);
        this._orderObj.parent = this._orderNode;

        this._orderTipNode = new Node("orderTipNode");
    }

    /** 事件初始化 */
    InitEve() {
        //发送事件
        //NotifyManager.instance.dispatch(GlobalNotify.ORDER_DATA_UPDATE, sss);
    }


    // #region 订单相关的调用函数
    /** 生成订单和订单提示*/
    UpdateOrder() {
        //处理数据
        this._orderData.ClearSystemDate();
        this._orderData.RandomOrder();
        let length = this._orderData.nowColorOrder.length;

        //订单颜色要求显示
        let comp = this._orderObj.getComponent(ColorOrder);
        comp.setData(this._orderData.nowColorOrder.slice(0, length - 2));

        //颜色混合提示
        this._orderTipNode.removeAllChildren();
        this._tipObj = [];
        for (let i = 0; i < length;i++) {
            this._tipObj[i] = instantiate(this._colorTipPrefabs[this._orderData.nowOrderMixNum[i]]);
            this._tipObj[i].parent = this._orderTipNode;
            this._tipObj[i].setPosition(500, 100 - i * 75);

            let comp = this._tipObj[i].getComponent(ColorTip);
            comp.setData(this._orderData.nowColorOrder[length - 1], this._orderData.nowColorOrder.slice(0, length - 2));
            comp.draw();
        }
    }

    /** 检测玩家提交订单的正确数量并更新分数 */
    CheckOrder(){
        let score = 0;
        for (let c of this._orderData.nowColorOrder)
        {
            for (let p of this._playerColorOrder)
            {
                console.log("check: " + c.colorHEX + ", " +  p.colorHEX);
                if (MyColor.operator_equal(c,p))
                {
                    //正确一个爪子+5，否则就不加
                    //GameEventManager._Instance.EventTrigger("Score+5");
                    score += 5;
                    break;
                }
            }   
        }

        //ScoreManager._Instance.ChangeScore(score);
        //生成新的订单
        //GameEventManager._Instance.EventTrigger("UpdateOrderSystem");
    }

    /// <summary>
    /// 更新玩家提交颜色列表
    /// </summary>
    /// <param name="playerColor"></param>
    AddPlayerColor(GiveOrder: MyColor){
        this._playerColorOrder.push(GiveOrder);
    }
    // #endregion
}