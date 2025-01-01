import { _decorator, Component, Event, EventKeyboard, EventTouch, Input, input, instantiate, KeyCode, Node, NodeEventType, Prefab } from 'cc';
import { OrderManager } from './Utilites/Order/OrderManager';
import { ScoreManager } from './Utilites/Score/ScoreManager';
import { ClockItem } from './UI/Common/ClockItem';
const { ccclass, property } = _decorator;

//游戏总控(兼顾uimanager，懒得再写了)
@ccclass('GameManager')
export class GameManager extends Component {
    static _Instance: GameManager;

    public viewPrefabs: any = {};   //key为prefab的名字，value为prefab

    private _startView:Node;
    private _pauseView: Node;
    private _overView: Node;
    private _clockItem: Node;

    onLoad() {
        GameManager._Instance = this;
    }

    start() {
        NotifyManager.instance.addListener(GlobalNotify.GameEnter, this.onGameEnter.bind(this));
        NotifyManager.instance.addListener(GlobalNotify.GameRestart, this.onGameRestart.bind(this));
        //NotifyManager.instance.addListener(GlobalNotify.GamePause, this.onGamePause.bind(this));
        //NotifyManager.instance.addListener(GlobalNotify.GameResume, this.onGameResume.bind(this));
        NotifyManager.instance.addListener(GlobalNotify.GameOver, this.onGameOver.bind(this));

        //this.schedule(this.test, 0, 0, 2);
    }

    //test() {
    //    let time = new Date().getTime();
    //    console.log("gameenter:" + time);
    //    NotifyManager.instance.dispatch(GlobalNotify.GameEnter, time);
    //}

    onGameEnter(time?:number) {
        this.node.getChildByName("UI").active = true;
        this.node.getChildByName("Desk").active = true;
        OrderManager._Instance.orderNode = this.node.getChildByName("orderNode");
        OrderManager._Instance.orderTipNode = this.node.getChildByName("orderTipNode");
        OrderManager._Instance.Init();
        OrderManager._Instance.UpdateOrder();
        OrderManager._Instance.OrderDataPrint();

        ScoreManager._Instance.scoreNode = this.node.getChildByName("scoreNode");
        ScoreManager._Instance.Init();

        this._clockItem = instantiate(this.viewPrefabs["clock"]);
        this._clockItem.setParent(this.node.getChildByName("UI"));
        this._clockItem.getComponent(ClockItem).setStartTime(time ? time : new Date().getTime());

        this._startView = instantiate(this.viewPrefabs["startView"]);
        this._startView.setParent(this.node);
        this._startView.setPosition(-640, -360);
        this._startView.on(Node.EventType.TOUCH_END, this.onStartView, this);

        this._pauseView = instantiate(this.viewPrefabs["pauseView"]);
        this._pauseView.setParent(this.node);
        this._pauseView.setPosition(0, 0);

        this._overView = instantiate(this.viewPrefabs["overView"]);
        this._overView.setParent(this.node);
        this._overView.setPosition(0, 0);
        this._overView.on(Node.EventType.TOUCH_END, this.onOverView, this);

        this.onGameRestart();
    }

    onGameRestart(time?:number) {
        this.InitUIDat();
        this.node.getChildByName("UI").active = true;
        this.node.getChildByName("Desk").active = true;
        this._clockItem.getComponent(ClockItem).setStartTime(time ? time : new Date().getTime());
    }

    onGameOver() {
        this.node.getChildByName("UI").active = false;
        this.node.getChildByName("Desk").active = false;
        this._overView.active = true;
    }

    onStartView() {
        this._startView.active = false;
        this._startView.destroy();
    }
    onOverView() {
        this._overView.active = false;
        NotifyManager.instance.dispatch(GlobalNotify.GameRestart, new Date().getTime());
    }

    InitUIDat() {
        this._startView.active = false;
        this._pauseView.active = false;
        this._overView.active = false;
    }

    //onGamePause() {
    //    this._pauseView.active = true;
    //}

    //onGameResume() {
    //    this._pauseView.active = false;
    //}
    
}


