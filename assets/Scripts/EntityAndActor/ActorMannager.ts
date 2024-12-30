import { _decorator, color, Color, Component, Sprite } from 'cc';
import { IActor } from '../Common/State';
import DataManager from '../Global/DataManager';
import { InputTypeEnum } from '../Common/Enum';
import { ActorStateMachine } from './ActorStateMachine';
import { MyColor } from '../Utilites/ColorMix/MyColor';
const { ccclass, property } = _decorator;

@ccclass('ActorMannager')
export class ActorMannager extends Component {
    private id: number
    private mycolor: MyColor
    private transparency: number
    init(data: IActor) {
        //console.log("ActorMannager>>>datainit")
        this.id=data.id
        const spriteComponent = this.getComponent(Sprite);
        if (data.color && data.color.colorRGB && data.color.colorRGB.length === 3) {
            spriteComponent.color = new Color(data.color.colorRGB[0], data.color.colorRGB[1], data.color.colorRGB[2], data.transparency);
            this.mycolor = data.color;
            this.transparency = data.transparency;
        }
        const am= this.node.getComponent(ActorStateMachine)
        am.init(data)

    }

    tick(dt) {
        if (DataManager.Instance.jm.input.length()) {
            const { x, y } = DataManager.Instance.jm.input
            DataManager.Instance.applyInput({
                id:1,
                type: InputTypeEnum.ActorMove,
                direction: {
                    x,
                    y,
                },
                dt,
            })

            /*console.log(DataManager.Instance.state.actors[0])*/
        }
        else{
            DataManager.Instance.noInput(1)
        }
        
    }

    render(data: IActor) {
        //console.log("ActorMannager>>>data")
        const { direction,position}=data
        this.node.setPosition(data.position.x, data.position.y)

        if (direction.x !== 0) {
            this.node.setScale(direction.x > 0 ? 1 : -1, 1)

        }
        const am = this.getComponent(ActorStateMachine);
        if (am) {
            am.animationState(data);
        }

        const spriteComponent = this.getComponent(Sprite);
        if (data.color && data.color.colorRGB && data.color.colorRGB.length === 3) {
            spriteComponent.color = new Color(data.color.colorRGB[0], data.color.colorRGB[1], data.color.colorRGB[2], data.transparency);
            this.mycolor = data.color
            this.transparency = data.transparency
        }
    }

    getID() {
        return this.id;
    }

    getColor() {
        return this.mycolor;
    }

    getTransparency() {
        return this.transparency;
    }
}
