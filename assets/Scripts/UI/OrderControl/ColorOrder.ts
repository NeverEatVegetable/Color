import { _decorator, Color, Component, Node, Sprite } from 'cc';
import { MyColor } from '../../Utilites/ColorMix/MyColor';
const { ccclass, property } = _decorator;

@ccclass('ColorOrder')
export class ColorOrder extends Component {

    private _colorData: Color[] = [];

    /** 初始化*/
    /**
     * 
     * @param data 要么不传，传了就传：[colors:Mycolor[]]
     */
    Init(data?: any) {
        if (data && data[0]) {
            this.setData(data[0]);
        }
        else {
            this._colorData = [];
            this.node.active = false;
        }
    }

    setData(colors: MyColor[]) {
        this.Init();
        for (let i = 0; i < colors.length; i++) {
            this._colorData.push(new Color(colors[i].colorHEX));
        }
    }

    draw() {
        this.node.active = true;
        for (let i = 0; i < this._colorData.length; i++) {
            this.node.getChildByName("n" + (i+1)).getComponent(Sprite).color = this._colorData[i];
        }
    }
}


