import { _decorator, CCFloat, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ClockItem')
export class ClockItem extends Component {
    @property({ type: CCFloat })
    public gameTime: number;

    private _startTime: number;

    setGameTime(time: number) {
        this.gameTime = time;
    }


    //// 开始倒计时
    //startTimeCutDown(time:number) {
    //    let allTime = time;
    //    let startOsTime = util.os.time();
    //    this.timeNode.getComponent(cc.Label).string = allTime;
    //    let scheduleCallback = function () {
    //        let nowOsTime = util.os.time();
    //        let nowTime = allTime - Math.floor((nowOsTime - startOsTime));
    //        if (nowTime <= 0) {
    //            this.stopTimeCutDown();
    //        }
    //        this.timeNode.getComponent(cc.Label).string = nowTime;
    //    }.bind(this);
    //    this.timeNode.active = true;
    //    this.sprShaoDeng.active = true;
    //    this.timeNode.getComponent(cc.Label).schedule(scheduleCallback, 1);
    //}


    //// 停止倒计时
    //stopTimeCutDown() {
    //    this.timeNode.getComponent(cc.Label).unscheduleAllCallbacks();
    //    this.timeNode.active = false;
    //    this.sprShaoDeng.active = false;
    //}

}


