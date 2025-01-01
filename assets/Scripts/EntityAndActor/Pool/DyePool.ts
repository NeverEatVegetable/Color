import { _decorator, Component, Node, Sprite, error, Collider2D, color, Button, BoxCollider2D,Contact2DType } from 'cc';
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

    private colliderBox:BoxCollider2D=null

    onLoad() {
        this.colliderBox=this.node.getComponent(BoxCollider2D)
        if (this.colliderBox) {
            this.colliderBox.on(Contact2DType.BEGIN_CONTACT, this.onTriggerEnter2D, this);
            this.colliderBox.on(Contact2DType.END_CONTACT, this.onTriggerExit2D, this);
        }
        
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

    onTriggerEnter2D(selfCollider: Collider2D, otherCollider: Collider2D) {
        const otherNode = otherCollider.node;
        const actorMannager = otherNode.getComponent(ActorMannager);
        if (actorMannager) {
            // 记录玩家ID和颜色
            this.actorColors.set(actorMannager.getID(), actorMannager.getColor());
        }
    }

    onTriggerExit2D(selfCollider: Collider2D, otherCollider: Collider2D) {
        const otherNode = otherCollider.node;
        const actorMannager = otherNode.getComponent(ActorMannager);
        if (actorMannager) {
            // 清除玩家ID和颜色
            this.actorColors.delete(actorMannager.getID());
        }
    }

    onButtonPressed() {
        const myPlayerId = DataManager.Instance.getMyPlayerId();
        if (myPlayerId === null) return;
        // 找到当前玩家ID对应的颜色
        const myPlayerColor = this.actorColors.get(myPlayerId);
        if (myPlayerColor) {
            // 混合颜色
            const newColor = MyColor.operator_add(myPlayerColor, this.dyeColor);
            // 更新玩家颜色
            DataManager.Instance.updateActorColor(myPlayerId, newColor, 255);
            // 清除当前玩家的颜色记录
            this.actorColors.delete(myPlayerId);
        }
    }

    // 清理按钮事件监听
    onDestroy() {
        if (this.ColorBtn) {
            this.ColorBtn.node.off(Button.EventType.CLICK, this.onButtonPressed, this);
        }
    }
}