import { _decorator, CCInteger, Color, color, Component, Node, resources, Sprite } from 'cc';
import { MyColor } from '../../Utilites/ColorMix/MyColor';
const { ccclass, property } = _decorator;

//������ʾ����(һ��)
@ccclass('ColorTip')
export class ColorTip extends Component {
    @property({ type: CCInteger })
    mixColorsNum: number;

    private _colorTipData: Color[];

    ///**
    // *
    // * @param data Ҫô���������˾ʹ���[targetColor colors]
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

    /** ��ʼ��*/
    /**
     * 
     * @param data Ҫô���������˾ʹ���[targetColor colors]
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
     * ���ö�����ʾ����
     * @param targetColor
     * @param colors
     */
    setData(targetColor: MyColor, colors: MyColor[]) {
        this.Init();
        this.setColors(colors);
        this.setTargetColor(targetColor);       
    }

    private setColors(colors: MyColor[]) {
        let tmp: Sprite;
        for (let i = 0; i < colors.length; i++) {
            //�򵥴ֱ���ȥ��
            for (let j = i; j >= 0; j--) {
                if (colors[i].colorHEX == colors[j].colorHEX) {
                    continue;
                }
            }
            this._colorTipData.push(new Color(colors[i].colorHEX));
        }
    }

    private setTargetColor(targetColor: MyColor) {
        this._colorTipData.push(new Color(targetColor.colorHEX));
    }

    /** ��ʼ����*/
    draw() {
        this.node.active = true;

        for (let i = 0; i < this._colorTipData.length - 1; i++) {
            this.node.getChildByName("n" + i).getComponent(Sprite).color = this._colorTipData[i];
        }

        this.node.getChildByName("target").getComponent(Sprite).color = this._colorTipData[this._colorTipData.length - 1];
    }
}

