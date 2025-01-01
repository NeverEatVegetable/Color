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
    private _pauseView: Node;
    private _overView: Node;

    onLoad() {
        GameManager._Instance = this;
    }

    start() {
        NotifyManager.instance.addListener(GlobalNotify.GameEnter, this.onGameStart.bind(this));
        NotifyManager.instance.addListener(GlobalNotify.GameRestart, this.onGameStart.bind(this));
        NotifyManager.instance.addListener(GlobalNotify.GamePause, this.onGamePause.bind(this));
        NotifyManager.instance.addListener(GlobalNotify.GameResume, this.onGameResume.bind(this));

    }

    onGameStart() {
        this.InitOrder();
        this.InitScore();

        this.InitStartView();
        this.InitPauseView();
        this.InitOverView()
    }

    onGamePause() {
        this._pauseView.active = true;
    }

    onGameResume() {
        this._pauseView.active = false;
    }


    // #region ui����

    InitStartView() {
        this._startView = instantiate(this.viewPrefabs["startView"]);
        this._startView.setParent(this.node);
        this._startView.setPosition(-640, -360);
        this._startView.on(Node.EventType.TOUCH_END, this.onStartView, this);
        this._startView.active = false;
    }

    onStartView() {
        this._startView.active = false;
        this._startView.destroy();
    }

    InitPauseView() {
        this._pauseView = instantiate(this.viewPrefabs["pauseView"]);
        this._pauseView.setParent(this.node);
        this._pauseView.setPosition(-640, -360);
        this._pauseView.active = false;
        //���¼�
    }

    InitOverView() {
        this._overView = instantiate(this.viewPrefabs["overView"]);
        this._overView.setParent(this.node);
        this._overView.setPosition(-640, -360);
        this._overView.active = false;
    }
    // #endregion

    // #region ϵͳ

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

    // #endregion
}


