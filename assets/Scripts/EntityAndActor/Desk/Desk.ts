import { _decorator, Component, Node, Sprite, Collider2D, Color, Button } from 'cc';
import { ActorMannager } from '../ActorMannager';
import DataManager from '../../Global/DataManager';
import { ColorManager } from '../../Utilites/ColorMix/ColorManager';
import { MyColor } from '../../Utilites/ColorMix/MyColor';
const { ccclass, property } = _decorator;

@ccclass('Desk')
export class Desk extends Component {
    @property({ type: [Node] })
    private sprites: Sprite[] = [];

    @property(Button)
    private stampButton: Button = null; // 盖章按钮
    private playerColors: Map<number, MyColor> = new Map(); // 存储玩家ID和对应的颜色
    private stampStatus: number[] = [0, 0, 0, 0];//台子


    start() {
        if (this.stampButton) {
            this.stampButton.node.on(Button.EventType.CLICK, this.onStampButtonPressed, this);
        }
    }

    onTriggerEnter2D(other: Collider2D) {
        const actorMannager = other.getComponent(ActorMannager);
        if (actorMannager) {
            const id = actorMannager.getID();
            const color = actorMannager.getColor();
            this.playerColors.set(id, color); // 存储玩家颜色和ID
        }
    }

    onTriggerExit2D(other: Collider2D) {
        const actorMannager = other.getComponent(ActorMannager);
        if (actorMannager) {
            this.playerColors.delete(actorMannager.getID()); // 移除玩家颜色和ID
        }
    }

    // 盖章按钮按下事件
    onStampButtonPressed() {
        // 获取玩家颜色的迭代器
        const playerColorsIterator = this.playerColors.entries();
        for (let i = 0; i < this.stampStatus.length; i++) {
            if (this.stampStatus[i] === 0) { // 检查数组中有没有为0的
                // 获取下一个玩家颜色
                const { value } = playerColorsIterator.next();
                if (value) {
                    const [playerID, playerColor] = value;
                    this.updateSpriteColor(this.sprites[i], playerColor); // 更新对应Sprite的颜色
                    this.stampStatus[i] = 1; // 将数组改成1
                    this.playerColors.delete(playerID); // 删除已经使用的颜色
                } else {
                    // 如果没有更多的玩家颜色，退出循环
                    break;
                }
            }
        }
    }

    // 更新Sprite的颜色
    private updateSpriteColor(sprite: Sprite, color: MyColor) {
        if (sprite) {
            sprite.color = new Color(color.colorRGB[0], color.colorRGB[1], color.colorRGB[2], 255)
        }
    }

    onDestroy() {
        // 清理盖章按钮事件监听
        if (this.stampButton) {
            this.stampButton.node.off(Button.EventType.CLICK, this.onStampButtonPressed, this);
        }
    }
}