﻿import { _decorator, Component, Node, Sprite, Collider2D, Button, BoxCollider2D, Contact2DType } from 'cc';
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
    }

    onTriggerEnter2D(selfCollider: Collider2D, otherCollider: Collider2D){
        const otherNode = otherCollider.node;
        const actorMannager = otherNode.getComponent(ActorMannager);
        if (actorMannager) {
            // 记录玩家ID
            this.actorIDs.push(actorMannager.getID());
        }
    }

    onTriggerExit2D(selfCollider: Collider2D, otherCollider: Collider2D) {
        const otherNode = otherCollider.node;
        const actorMannager = otherNode.getComponent(ActorMannager);
        if (actorMannager) {
            const index = this.actorIDs.indexOf(actorMannager.getID());
            if (index !== -1) {
                this.actorIDs.splice(index, 1);
            }

        }
    }

    onButtonPressed() {
        // 遍历所有在清水池中的玩家并更新颜色
        const myPlayerId = DataManager.Instance.getMyPlayerId();
        if (myPlayerId === null) return;
        const index = this.actorIDs.indexOf(myPlayerId);
        if (index !== -1) {
            // 使用ColorManager中定义的清水颜色
            const clearWaterColor = ColorManager._Instance.monoLess;
            DataManager.Instance.updateActorColor(myPlayerId, clearWaterColor, 0);
            // 从数组中移除当前玩家的ID
            this.actorIDs.splice(index, 1);
            NotifyManager.instance.dispatch(GlobalNotify.EFFECT_PLAY,2);
        }
    }

    // 清理按钮事件监听
    onDestroy() {
        if (this.ColorBtn) {
            this.ColorBtn.node.off(Button.EventType.CLICK, this.onButtonPressed, this);
        }
    }
}