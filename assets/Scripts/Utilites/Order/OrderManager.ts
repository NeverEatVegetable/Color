import { _decorator, Component, instantiate, Node, Prefab, resources } from 'cc';
import { MyColor } from '../ColorMix/MyColor';
import { ColorOrder } from '../../UI/OrderControl/ColorOrder';
import { ColorTip } from '../../UI/OrderControl/ColorTip';
import { OrderData } from '../../UI/OrderControl/OrderData';
import { ColorManager } from '../ColorMix/ColorManager';
const { ccclass, property } = _decorator;

@ccclass('OrderManager')
export class OrderManager{
    private static _instance: OrderManager = null;
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

    public orderNode: Node;
    public orderTipNode: Node;

    /** 加载资源/数据*/
    LoadResources() {
        for (let i = 2; i <= 4; i++) {
            resources.load("Prefabs/views/orderTip_" + i, Prefab, this.loadOrderTip.bind(this));
        }
        resources.load("Prefabs/views/order", Prefab, this.loadOrder.bind(this));
    }

    loadOrder(prefab: Prefab) {
        if (!prefab) {
            console.log('Prefab error');
            return;
        }
        this._orderColorPrefab = prefab;
    }

    loadOrderTip(prefab: Prefab) {
        if (!prefab) {
            console.log('Prefab error');
            return;
        }
        this._colorTipPrefabs[parseInt(prefab.name.charAt(9))] = prefab;
    }

    /** 初始化 */
    Init() {
        this.InitDat();
        this.orderNode.setPosition(0, 0);
        this._orderObj = instantiate(this._orderColorPrefab);
        this._orderObj.parent = this.orderNode;
        this._orderObj.setPosition(450, 250);

        this.orderTipNode.setPosition(0, 0);

        NotifyManager.instance.addListener(GlobalNotify.ORDER_DATA_UPDATE, (playerorder: MyColor[]) => {
            this._playerColorOrder = playerorder;
            this.CheckOrder();
            this.UpdateOrder();
        });

        NotifyManager.instance.addListener(GlobalNotify.GameOver, () => {
            this.orderNode.active = false;
            this.orderTipNode.active = false;
        });

        NotifyManager.instance.addListener(GlobalNotify.GameRestart, () => {
            this.InitDat();
            this.UpdateOrder();
            this.OrderDataPrint();
            this.orderNode.active = true;
            this.orderTipNode.active = true;
        });
    }

    InitDat() {
        this._orderData.ClearSystemDate();

        this._isTip = [false, false, false, false];

        this._playerColorOrder = [];
    }

    // #region 订单相关的调用函数
    /** 生成订单和订单提示。猫猫模块直接调用吧。*/
    UpdateOrder() {
        //处理数据
        this._orderData.ClearSystemDate();
        this._orderData.RandomOrder();

        let length = this._orderData.nowColorOrder.length;

        //订单颜色要求显示
        let comp = this._orderObj.getComponent(ColorOrder);
        comp.setData(this._orderData.nowColorOrder);
        comp.draw();

        //颜色混合提示
        this.orderTipNode.removeAllChildren();
        this._tipObj = [];

        //排序（订单不用，这里提示从多到少）
        //this._orderData.nowColorOrder.sort(this.sort);

        let index = 0;
        for (let i = 0; i < length; i++) {
            let mixNum = this._orderData.nowOrderMixNum[i];
            //去单色
            if (mixNum <= 1) continue;
            //简单除暴去重
            let flag = false;
            let j;
            for (j = i-1; j >= 0; j--) {
                if (this._orderData.nowColorOrder[i].colorHEX == this._orderData.nowColorOrder[j].colorHEX) {
                    flag = true;
                    break;
                }
            }

            if (flag) continue;

            let targetData: MyColor = this._orderData.nowColorOrder[i];
            let hexData = [];
            for (j = 0; j < 4; j++) {
                if (targetData.colorMix[j]) {
                    hexData.push(ColorManager._Instance.TryGetMonoChrome_ByIndex(j).colorHEX);
                }
            }
            this._tipObj[i] = instantiate(this._colorTipPrefabs[mixNum]);
            this._tipObj[i].parent = this.orderTipNode;
            this._tipObj[i].setPosition(500, 180 - index++ * 75);

            let comp = this._tipObj[i].getComponent(ColorTip);
            comp.setData(targetData.colorHEX, hexData.slice(0, length));
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

        //score = 5; //测试用
        if (score > 0) {
            NotifyManager.instance.dispatch(GlobalNotify.SCORE_DATA_UPDATE, score);
        }
    }

    /** 更新玩家提交颜色列表 */
    UpdatePlayerColor(GiveOrder: MyColor){
        this._playerColorOrder.push(GiveOrder);
    }

    sort(a: MyColor, b: MyColor): number {
        return ColorManager._Instance.TryGetColorMixNum_ByMyColor(a) - ColorManager._Instance.TryGetColorMixNum_ByMyColor(b);
    }
    // #endregion

    // #region 测试用
    OrderDataPrint() {
        this._orderData.Print();
    }
    // #endregion
}