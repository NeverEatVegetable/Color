import { _decorator, Component, EventKeyboard, EventTouch, Input, input, KeyCode, Node } from 'cc';
import { OrderManager } from './Utilites/Order/OrderManager';
import { ScoreManager } from './Utilites/Score/ScoreManager';
const { ccclass, property } = _decorator;

//游戏总控
@ccclass('GameManager')
export class GameManager extends Component {
    start() {
        NotifyManager.instance.addListener(GlobalNotify.LOCAL_DATA_LOAD_SUCESS, this.InitOrder.bind(this));
        NotifyManager.instance.addListener(GlobalNotify.LOCAL_DATA_LOAD_SUCESS, this.InitScore.bind(this));

        input.on(Input.EventType.KEY_DOWN, this.onTouchStart, this);
    }

    onTouchStart(event: EventKeyboard) {
        switch (event.keyCode) {
            //提交订单，增加分数，生成新订单
            case KeyCode.SPACE:
                OrderManager._Instance.CheckOrder();
                OrderManager._Instance.UpdateOrder();
                OrderManager._Instance.OrderDataPrint();
                break;
            default:
                break;
        }
    }

    InitOrder() {
        OrderManager._Instance.orderNode = this.node.getChildByName("orderNode");
        OrderManager._Instance.orderTipNode = this.node.getChildByName("orderTipNode");
        OrderManager._Instance.Init();

        OrderManager._Instance.UpdateOrder();
        OrderManager._Instance.OrderDataPrint();
    }

    InitScore() {
        ScoreManager._Instance.scoreNode = this.node.getChildByName("scoreNode");
        ScoreManager._Instance.Init();
    }
}


