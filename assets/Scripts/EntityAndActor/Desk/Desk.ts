import { _decorator, Component, Node, Sprite, Collider2D, Color, Button, BoxCollider2D, Contact2DType, AudioClip } from 'cc';
import { ActorMannager } from '../ActorMannager';
import DataManager from '../../Global/DataManager';
import { ColorManager } from '../../Utilites/ColorMix/ColorManager';
import { MyColor } from '../../Utilites/ColorMix/MyColor';
import { AudioPatEnum } from '../../Enum';
const { ccclass, property } = _decorator;

@ccclass('Desk')
export class Desk extends Component {

    @property({ type: [Node] })
    private sprites: Sprite[] = [];

    @property(Button)
    private stampButton: Button = null; // 盖章按钮
    @property(Button)
    private SubmitButton: Button = null; // 提交按钮
    private playerColors: Map<number, MyColor> = new Map(); // 存储玩家ID和对应的颜色
    private stampStatus: number[] = [0, 0, 0, 0];//台子
    private Order:MyColor[] = [];
    private colliderBox:BoxCollider2D=null

    onLoad() {
        this.colliderBox=this.node.getComponent(BoxCollider2D)
        if (this.colliderBox) {
            this.colliderBox.on(Contact2DType.BEGIN_CONTACT, this.onTriggerEnter2D, this);
            this.colliderBox.on(Contact2DType.END_CONTACT, this.onTriggerExit2D, this);
        }

        if (this.stampButton) {
            this.stampButton.node.on(Button.EventType.CLICK, this.onStampButtonPressed, this);
        }
        if (this.SubmitButton) {
            this.SubmitButton.node.on(Button.EventType.CLICK, this.onSubmitButtonPressed, this);
        }

        // 初始化时，将所有sprites的透明度设置为0
        this.sprites.forEach(sprite => {
            const spriteComponent = sprite.getComponent(Sprite);
            if (spriteComponent) {
                spriteComponent.color = new Color(255, 255, 255, 0); // 设置颜色为255，透明度为0
            }
        });
    }

    onTriggerEnter2D(selfCollider: Collider2D, otherCollider: Collider2D) {
        const otherNode = otherCollider.node;
        const actorMannager = otherNode.getComponent(ActorMannager);
        if (actorMannager) {
            const id = actorMannager.getID();
            const color = actorMannager.getColor();
            this.playerColors.set(id, color); // 存储玩家颜色和ID
        }
    }

    onTriggerExit2D(selfCollider: Collider2D, otherCollider: Collider2D) {
        const otherNode = otherCollider.node;
        const actorMannager = otherNode.getComponent(ActorMannager);
        if (actorMannager) {
            this.playerColors.delete(actorMannager.getID()); // 移除玩家颜色和ID
        }
    }

    // 盖章按钮按下事件
    onStampButtonPressed() {
        const myPlayerId = DataManager.Instance.getMyPlayerId();
        if (myPlayerId === null) return;

        // 只处理当前玩家的颜色
        for (let i = 0; i < this.stampStatus.length; i++) {
            if (this.stampStatus[i] === 0) { // 检查数组中有没有为0的
                const playerColor = this.playerColors.get(myPlayerId);
                if (playerColor) {
                    this.Order[i] = playerColor;
                    this.updateSpriteColor(this.sprites[i], playerColor); // 更新对应Sprite的颜色
                    this.stampStatus[i] = 1; // 将数组改成1
                    this.playerColors.delete(myPlayerId); // 删除已经使用的颜色
                    break; // 处理完毕后退出循环
                }
            }
        }
        NotifyManager.instance.dispatch(GlobalNotify.EFFECT_PLAY, 3);
    }

    // 更新Sprite的颜色
    private updateSpriteColor(sprite: Sprite, color: MyColor) {
        const aa = sprite.getComponent(Sprite)
        //aa.color = new Color(150,150,150,255)
        if (aa) {
            aa.color = new Color(color.colorRGB[0], color.colorRGB[1], color.colorRGB[2], 255)
        }
    }

    onSubmitButtonPressed(){
        // 发送订单信息事件
        NotifyManager.instance.dispatch(GlobalNotify.ORDER_DATA_UPDATE,this.Order);
        NotifyManager.instance.dispatch(GlobalNotify.EFFECT_PLAY,4);

        // 清空订单数组
        this.Order = [];

        // 重置 stampStatus 数组
        this.stampStatus = [0, 0, 0, 0];

        this.sprites.forEach(sprite => {
            const spriteComponent = sprite.getComponent(Sprite);
            if (spriteComponent) {
                spriteComponent.color = new Color(255, 255, 255, 0); // 设置颜色为255，透明度为0
            }
        });
    }

    onDestroy() {
        // 清理盖章按钮事件监听
        if (this.stampButton) {
            this.stampButton.node.off(Button.EventType.CLICK, this.onStampButtonPressed, this);
        }
        if (this.SubmitButton) {
            this.SubmitButton.node.off(Button.EventType.CLICK, this.onSubmitButtonPressed, this);
        }
    }
}