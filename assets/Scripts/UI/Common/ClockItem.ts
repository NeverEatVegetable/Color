import { _decorator, CCFloat, Component, macro, Node, ProgressBar, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ClockItem')
export class ClockItem extends Component {
    @property({ type: CCFloat })
    public gameTime: number;

    @property({ type: Sprite })
    public viewFill: Sprite;

    /** ʱ��� */
    private _startTime: number;

    private _nowTime: number;

    private _isOpen: boolean = false;

    setGameTime(time: number) {
        this.gameTime = time;
    }

    setStartTime(time: number) {
        this._startTime = time;
        this._isOpen = true;
    }

    update() {
        this.UpdateClock();
    }

    UpdateClock() {
        if (this._isOpen) {
            this._nowTime = new Date().getTime();
            let time:number = this._nowTime - this._startTime;
            this.viewFill.fillRange = time / (this.gameTime * 1000) * (-1);
            if (time >= this.gameTime * 1000) {
                NotifyManager.instance.dispatch(GlobalNotify.GameOver);
                this._isOpen = false;
            }
            //console.log("starttime:" + this._startTime + "|||gameTime:" + this.gameTime * 1000 + "|||time:" + time + "|||viewFill.fillRange:" + this.viewFill.fillRange);
            //console.log("time/gametime*1000:" + (time / (this.gameTime * 1000)) + "|||viewFill.fillRange:" + this.viewFill.fillRange);
        }
    }
}


