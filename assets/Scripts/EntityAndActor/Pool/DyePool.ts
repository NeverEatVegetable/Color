import { _decorator, Component, Node, Sprite, error, Collider2D, color, Button } from 'cc';
import { MyColor } from '../../Utilites/ColorMix/MyColor';
import DataManager from '../../Global/DataManager';
import { ActorMannager } from '../ActorMannager';
const { ccclass, property } = _decorator;

@ccclass('DyePool')
export class DyePool extends Component {
    private dyeColor: MyColor = null; // 染色池的颜色
    @property
    private num: number = 0;

    @property(Button)
    private ColorBtn: Button = null;

    // 临时存储玩家ID和对应的颜色
    private actorColors: Map<number, MyColor> = new Map();

    start() {
        if (this.ColorBtn) {
            this.ColorBtn.node.on(Button.EventType.CLICK, this.onButtonPressed, this);
        }

        switch (this.num) {
            case 1:
                // 用户选择了红色
                this.dyeColor = new MyColor("#EF231A");
                break;
            case 2:
                // 用户选择了黄色
                this.dyeColor = new MyColor("#F2EB00");
                break;
            case 3:
                // 用户选择了蓝色
                this.dyeColor = new MyColor("#0371C7");
                break;
            case 4:
                // 用户选择了白色
                this.dyeColor = new MyColor("#FFFFFF");
                break;
            default:
                error("Invalid color choice");
                break;
        }
    }

    onTriggerEnter2D(other: Collider2D) {
        const actorMannager = other.getComponent(ActorMannager);
        if (actorMannager) {
            // 记录玩家ID和颜色
            this.actorColors.set(actorMannager.getID(), actorMannager.getColor());
        }
    }

    onTriggerExit2D(other: Collider2D) {
        const actorMannager = other.getComponent(ActorMannager);
        if (actorMannager) {
            // 清除玩家ID和颜色
            this.actorColors.delete(actorMannager.getID());
        }
    }

    onButtonPressed() {
        // 遍历所有在染色池中的玩家并更新颜色
        this.actorColors.forEach((color, id) => {
            const newColor = MyColor.operator_add(color, this.dyeColor);
            DataManager.Instance.updateActorColor(id, newColor, 255);
        });
        // 清空Map
        this.actorColors.clear();
    }

    // 清理按钮事件监听
    onDestroy() {
        if (this.ColorBtn) {
            this.ColorBtn.node.off(Button.EventType.CLICK, this.onButtonPressed, this);
        }
    }
}