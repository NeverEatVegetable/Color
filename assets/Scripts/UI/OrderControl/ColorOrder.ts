import { _decorator, Color, Component, Node, Sprite } from 'cc';
import { MyColor } from '../../Utilites/ColorMix/MyColor';
const { ccclass, property } = _decorator;

@ccclass('ColorOrder')
export class ColorOrder extends Component {

    private _colorData: Color[];

    setData(colors: MyColor[]) {
        this.node.active = false;
        let tmp: Sprite;
        for (let i = 0; i < colors.length; i++) {
            this._colorData.push(new Color(colors[i].colorHEX));
        }
    }

    draw() {
        this.node.active = true;
        for (let i = 0; i < this._colorData.length; i++) {
            this.node.getChildByName("n" + i).getComponent(Sprite).color = this._colorData[i];
        }
    }
}


