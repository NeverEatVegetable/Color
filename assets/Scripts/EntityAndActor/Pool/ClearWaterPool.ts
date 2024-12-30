import { _decorator, Component, Node, Sprite, Collider2D, Button } from 'cc';
import { MyColor } from '../../Utilites/ColorMix/MyColor';
import { ColorManager } from '../../Utilites/ColorMix/ColorManager';
import { ActorMannager } from '../ActorMannager';
import DataManager from '../../Global/DataManager';
const { ccclass, property } = _decorator;

@ccclass('ClearWaterPool')
export class ClearWaterPool extends Component {
    @property(Button)
    private ColorBtn: Button = null;

    // 临时存储玩家ID
    private actorIDs: number[] = [];

    start() {
        if (this.ColorBtn) {
            this.ColorBtn.node.on(Button.EventType.CLICK, this.onButtonPressed, this);
        }
    }

    onTriggerEnter2D(other: Collider2D) {
        const actorMannager = other.getComponent(ActorMannager);
        if (actorMannager) {
            // 记录玩家ID
            this.actorIDs.push(actorMannager.getID());
        }
    }

    onTriggerExit2D(other: Collider2D) {
        const actorMannager = other.getComponent(ActorMannager);
        if (actorMannager) {
            const index = this.actorIDs.indexOf(actorMannager.getID());
            if (index !== -1) {
                this.actorIDs.splice(index, 1);
            }

        }
    }

    onButtonPressed() {
        // 遍历所有在清水池中的玩家并更新颜色
        this.actorIDs.forEach((id) => {
            const targetColor = ColorManager._Instance.monoLess;
            DataManager.Instance.updateActorColor(id, targetColor, 0);
        });
        // 清空数组
        this.actorIDs = [];
    }

    // 清理按钮事件监听
    onDestroy() {
        if (this.ColorBtn) {
            this.ColorBtn.node.off(Button.EventType.CLICK, this.onButtonPressed, this);
        }
    }
}