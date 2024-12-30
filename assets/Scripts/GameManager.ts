import { _decorator, Component, Event, EventKeyboard, EventTouch, Input, input, instantiate, KeyCode, Node, NodeEventType, Prefab } from 'cc';
import { OrderManager } from './Utilites/Order/OrderManager';
import { ScoreManager } from './Utilites/Score/ScoreManager';
const { ccclass, property } = _decorator;

//��Ϸ�ܿ�
@ccclass('GameManager')
export class GameManager extends Component {
    static _Instance: GameManager;

    public viewPrefabs: any = {};   //keyΪprefab�����֣�valueΪprefab

    private _startView:Node;
    private _pauseView:Node;

    onLoad() {
        GameManager._Instance = this;
    }

    start() {
        NotifyManager.instance.addListener(GlobalNotify.LOCAL_DATA_LOAD_SUCESS, () => {
            this.InitOrder.bind(this);
            this.InitScore.bind(this);

            
        });

        input.on(Input.EventType.KEY_DOWN, this.onTouchStart, this);
    }

    // #region ����
    InitStartView() {
        this._startView = instantiate(this.viewPrefabs["startView"]);
        this._startView.setParent(this.node);
        this._startView.setPosition(-640, -360);
        this._startView.on(Node.EventType.TOUCH_END, this.onStartView,this);
    }

    onStartView() {
        this._startView.active = false;
        this._startView.destroy();
    }

    InitPauseView() {
        this._startView = instantiate(this.viewPrefabs["startView"]);
        this._startView.setParent(this.node);
        this._startView.setPosition(-640, -360);
        //���¼�
    }

    closePauseView() {
        this._startView.active = false;
    }

    openPauseView() {
        this._startView.active = true;
    }
    // #endregion


    onTouchStart(event: EventKeyboard) {
        switch (event.keyCode) {
            //�ύ���������ӷ����������¶���
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


