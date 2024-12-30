
import { _decorator, Animation, Component, AnimationClip, Vec3, Sprite, SpriteFrame } from 'cc';
import { EntityTypeEnum } from "../Common/Enum";
import { EntityStateEnum, ImagePatEnum, ParamsNameEnum } from "../Enum";
import { AnimationPathEnum } from "../Enum";
import { IActor, IVec2 } from "../Common/State";
import DataManager from "../Global/DataManager";
const { ccclass, property } = _decorator;

@ccclass("ActorStateMachine")

export class ActorStateMachine extends Component {
    private isRunning: boolean = false;
    private velocity: IVec2
    private animation: Animation;
    private sprite: Sprite;
    private leastName:string
    @property([SpriteFrame])
    sprites: SpriteFrame[] = []

    init(data: IActor) {
        this.animationState(data)
    }


    // 传入index 绑定的图片序号 直接进行赋值给this.node节点的sptite
    getSprites(index: number) {
        this.node.getComponent(Sprite).spriteFrame = this.sprites[index]
    }
    // 传入Name动画的 文件名 如 run  立即播放在this.node中播放该动画
    getAnim(Name: string) {
        
        if(this.leastName!==Name){
            const animNode = this.node.getChildByName('Anim');
            const nodeAnim = animNode.getComponent(Animation);
            const state = nodeAnim.getState(Name);
            nodeAnim.play(Name);
            this.leastName=Name
        }

    }

    handleAnimation(direction: IVec2) {
        let animationState;
        if (direction.y < 0 && Math.abs(direction.y) > Math.abs(direction.x)) {
            animationState = this.isRunning ? AnimationPathEnum.DownRun : AnimationPathEnum.DownIdle;
            this.getSprites(0)
        }
        else if (direction.y > 0 && Math.abs(direction.y) > Math.abs(direction.x)) {
            animationState = this.isRunning ? AnimationPathEnum.UpRun : AnimationPathEnum.UpIdle;
            this.getSprites(2)
        }

        else {
            animationState = this.isRunning ? AnimationPathEnum.RightRun : AnimationPathEnum.RightIdle;
            this.getSprites(1)
        }
        this.getAnim(animationState);
    }

    // 更新动画状态
    animationState(data: IActor) {
        const { direction, velocity } = data;
        this.isRunning = velocity; // 判断是否有输入
        this.handleAnimation(direction); // 调用handleAnimation来播放动画
        //console.log("direction.x,direction.y,isRunning>>>>",direction.x,direction.y,velocity)

    }
}


