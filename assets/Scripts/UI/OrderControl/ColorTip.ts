import { _decorator, CCInteger, Color, color, Component, Node, resources, Sprite } from 'cc';
import { MyColor } from '../../Utilites/ColorMix/MyColor';
const { ccclass, property } = _decorator;

//订单提示对象(一条)
@ccclass('ColorTip')
export class ColorTip extends Component {
    @property({ type: CCInteger })
    mixColorsNum: number;

    private _colorTipData: Color[];

    ///**
    // *
    // * @param data 要么不传，传了就传：[targetColor colors]
    // */
    //constructor(data?:any) {
    //    super();
    //    if (data && data[0] && data[1]) {
    //        this.setData(data[0], data[1]);
    //    }
    //    else {
    //        this.Init();
    //    }
    //}

    /** 初始化*/
    /**
     * 
     * @param data 要么不传，传了就传：[targetColor colors]
     */
    Init(data?: any) {
        if (data && data[0] && data[1]) {
            this.setData(data[0], data[1]);
        }
        else {
            this._colorTipData = [];
            this.node.active = false;
        }
    }

    /**
     * 设置订单提示数据
     * @param targetHex 等号右侧
     * @param colorHexs 等号左侧
     */
    setData(targetHex: string, colorHexs: string[]) {
        this.Init();
        this.setColors(colorHexs);
        this.setTargetColor(targetHex);       
    }

    private setColors(colors: string[]) {
        let tmp: Sprite;
        for (let i = 0; i < colors.length; i++) {
            this._colorTipData.push(new Color(colors[i]));
        }
    }

    private setTargetColor(targetHex: string) {
        this._colorTipData.push(new Color(targetHex));
    }

    /** 开始绘制*/
    draw() {
        this.node.active = true;

        for (let i = 0; i < this._colorTipData.length - 1; i++) {
            this.node.getChildByName("n" + (i + 1)).getComponent(Sprite).color = this._colorTipData[i];
        }

        this.node.getChildByName("target").getComponent(Sprite).color = this._colorTipData[this._colorTipData.length - 1];
    }
}

