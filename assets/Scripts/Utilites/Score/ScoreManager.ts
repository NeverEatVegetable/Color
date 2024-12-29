import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { ScoreView } from '../../UI/ScoreControl/ScoreView';
const { ccclass, property } = _decorator;

@ccclass('ScoreManager')
export class ScoreManager {
    private static _instance: ScoreManager = null;
    public static get _Instance() {
        if (this._instance == null) { this._instance = new ScoreManager(); }
        return this._instance;
    }

    private _nowScore;
    private _addScore;

    public scoreNode: Node;

    private _scoreObj:Node;
    private _scorePrefab;

    Init() {
        this._scoreObj = instantiate(this._scorePrefab);
        this._scoreObj.parent = this.scoreNode;
        this._scoreObj.setPosition(-500, 300);
        this._scoreObj.getComponent(ScoreView).Init();

        this.ClearScore();

        NotifyManager.instance.addListener(GlobalNotify.SCORE_DATA_UPDATE, (addscore) => {
            this.AddScore(addscore);
            let com = this._scoreObj.getComponent(ScoreView);
            com.PlayAddAni();
        });
    }


    public getScore() {
        return this._nowScore;
    }

    public getAddScore() {
        return this._addScore;
    }

    loadScore(prefab: Prefab) {
        if (!prefab) {
            console.log('Prefab error');
            return;
        }
        this._scorePrefab = prefab;
    }

    /** 增加分数 */
    AddScore(score:number)
    {
        this._addScore = score;
        this._nowScore += score;
        //NotifyManager.instance.dispatch(GlobalNotify.SCORE_DATA_UPDATE, this._nowScore, this._addScore);
    }

    /** 分数清零 */
    ClearScore()
    {
        this._nowScore = 0;
        //NotifyManager.instance.dispatch(GlobalNotify.SCORE_DATA_UPDATE, 0,0);
    }

}