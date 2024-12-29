import { _decorator, Component, Node } from 'cc';
import { OrderManager } from './Utilites/Order/OrderManager';
const { ccclass, property } = _decorator;

//游戏总控
@ccclass('GameManager')
export class GameManager extends Component {
    start() {
        //演示案例
        NotifyManager.instance.addListener(GlobalNotify.LOCAL_DATA_LOAD_SUCESS, this.callBack.bind(this));

        //let node = this.node.getChildByName("orderNode");
        //node.addChild(new Node("node33"));

        //ColorManager._Instance.test();

    }

    callBack() {
        //this.sp1.color = new Color("#0371C7");
        //let c1 = MyColor.Creat_ByHEX("#0371C7");

        //let c2 = MyColor.Creat_ByHEX("#F2EB00");
        //this.sp2.color = new Color(c2.colorRGB[0], c2.colorRGB[1], c2.colorRGB[2]);

        //let c3 = MyColor.operator_add(c1, c2);
        //this.sp3.color = new Color(c3.colorHEX);

        OrderManager._instance.orderNode = this.node.getChildByName("orderNode");
        OrderManager._instance.orderTipNode = this.node.getChildByName("orderTipNode");
        OrderManager._Instance.InitData();
        
        OrderManager._Instance.UpdateOrder();
        OrderManager._Instance.OrderDataPrint();

    }
}


