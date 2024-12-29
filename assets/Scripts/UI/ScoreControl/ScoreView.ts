import { _decorator, CCFloat, CCInteger, Color, Component, Label, Node } from 'cc';
import { ScoreManager } from '../../Utilites/Score/ScoreManager';
const { ccclass, property } = _decorator;

@ccclass('ScoreView')
export class ScoreView extends Component {
    @property({ type: CCFloat })
    move: number;
    @property({ type: CCInteger })
    deltaAlpha: number;
    @property({ type: CCInteger })
    deltaMove: number;

    @property({ type: Label })
    scoreLabel: Label;
    @property({ type: Label })
    addLabel: Label;
    @property({ type: Label })
    op_add: Label;
    @property({ type: Node })
    addScoreObj: Node;

    private _score: number;
    private _addScore: number;

    private _isOpen: boolean = false;

    Init() {
        this._score = ScoreManager._Instance.getScore();
        this.scoreLabel.string = this._score + "";
        this._addScore = ScoreManager._Instance.getAddScore();
        
        this.addLabel.string = this._score + "";

        let pos = this.addLabel.node.getPosition();
        this.addLabel.node.setPosition(pos.x, this.move * -1, pos.z);
        let color = this.addLabel.color;
        this.addLabel.color = new Color(color.r, color.g, color.b, 0);
        this.op_add.color = new Color(color.r, color.g, color.b, 0);
        this.addLabel.string = this._addScore + "";

        this.addScoreObj.active = false;
    }

    update(deltaTime: number) {
        if (this._isOpen) {
            this.UpdateAddAni(deltaTime);
        }
    }

    PlayAddAni() {
        this.Init();
        this._isOn = true;
        this._isOut = false;
        this._isOpen = true;
        this.addScoreObj.active = true;
    }

    private UpdateAddAni(deltaTime: number) {
        if (this._isOn) {
            this.FadeOn(deltaTime);
        }
        else if (this._isOut) {
            this.FadeOut(deltaTime);
        }
    }

    private _isOn;
    private _isOut;
    private FadeOn(deltaTime: number) {
        if (this.addLabel.node.position.y < this.move) {
            let pos = this.addLabel.node.getPosition();
            this.addLabel.node.setPosition(pos.x, pos.y + deltaTime < 0 ? pos.y + deltaTime * this.deltaMove : 0, pos.z);
        }

        let color;
        if (this.addLabel.color.a < 255) {
            color = this.addLabel.color;
            this.addLabel.color = new Color(color.r, color.g, color.b, color.a + this.deltaAlpha < 255 ? color.a + this.deltaAlpha : 255);
        }

        if (this.op_add.color.a<255) {
            color = this.op_add.color;
            this.op_add.color = new Color(color.r, color.g, color.b, color.a + this.deltaAlpha < 255 ? color.a + this.deltaAlpha : 255);
        }

        if (this.addLabel.node.position.y >= 0 && this.addLabel.color.a >= 255 && this.op_add.color.a >= 255) {
            this._isOn = false;
            this._isOut = true;
        }
    }

    private FadeOut(deltaTime: number) {
        if (this.addLabel.node.position.y < this.move) {
            let pos = this.addLabel.node.getPosition();
            this.addLabel.node.setPosition(pos.x, pos.y + deltaTime < this.move ? pos.y + deltaTime * this.deltaMove : this.move, pos.z);
        }

        let color;
        if (this.addLabel.color.a >0) {
            color = this.addLabel.color;
            this.addLabel.color = new Color(color.r, color.g, color.b, color.a - this.deltaAlpha >=0 ? color.a - this.deltaAlpha : 0);
        }

        if (this.op_add.color.a >0) {
            color = this.op_add.color;
            this.op_add.color = new Color(color.r, color.g, color.b, color.a - this.deltaAlpha >=0 ? color.a - this.deltaAlpha : 0);
        }

        if (this.addLabel.node.position.y >= this.move && this.addLabel.color.a <=0 && this.op_add.color.a <=0) {
            this._isOut = false;
            this._isOpen = false;
            this.addScoreObj.active = false;
        }
    }

}


