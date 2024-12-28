import { _decorator, Component, Node } from 'cc';
import { IActor } from '../Common/State';
import DataManager from '../Global/DataManager';
import { InputTypeEnum } from '../Common/Enum';
const { ccclass, property } = _decorator;

@ccclass('ActorMannager')
export class ActorMannager extends Component {
    init(data:IActor) {

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
        
    }

    render(data: IActor) {
        const { direction,position}=data
        this.node.setPosition(data.position.x, data.position.y)

        if (direction.x !== 0) {
            this.node.setScale(direction.x > 0 ? 1 : -1, 1)

        }
    }
}


