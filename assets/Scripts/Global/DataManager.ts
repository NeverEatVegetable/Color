import { AnimationClip, Prefab, Sprite, SpriteFrame } from "cc";
import Singleton from "../Base/Singleton";
import { EntityTypeEnum, FrameData, IActor, IActorMove, IState } from "../Common";
import { JoyStickManager } from "../UI/JoyStickManager";
import { ActorMannager } from "../EntityAndActor/ActorMannager";
import { ColorManager } from "../Utilites/ColorMix/ColorManager";
import { MyColor } from "../Utilites/ColorMix/MyColor";


const ACTOR_SPEED=100

export default class DataManager extends Singleton implements BaseModel {
    static get Instance() {
        return super.GetInstance<DataManager>();
    }

    //登陆数据
    myPlayerId = 1;

    jm: JoyStickManager

    actorMap: Map<number, ActorMannager> = new Map()
    prefabMap: Map<string, Prefab> = new Map()
    //animMap: Map<string, AnimationClip> = new Map()
    //spriteFrameMap: Map<string, SpriteFrame> = new Map();

    state: IState = {
        actors: [
            {
                id: 1,
                type: EntityTypeEnum.Actor1,
                position: {
                    x: -200,
                    y: -200,
                },
                direction: {
                    x: 1,
                    y: 0,
                },
                velocity: false,
                color: ColorManager._Instance.monoLess ,
                transparency: 0,
            },
            {
                id: 2,
                type: EntityTypeEnum.Actor1,
                position: {
                    x: -200,
                    y: -200,
                },
                direction: {
                    x: 1,
                    y: 0,
                },
                velocity: false,
                color: ColorManager._Instance.monoLess ,
                transparency: 0,
            },

        ],
    };


    // 将actors数组转换为Map<string, Data>
    getPropToMap(): Map<string, any> {
        const map = new Map<string, any>();
        this.state.actors.forEach((actor, index) => {
            const data = new Data();
            data.setValue(actor); // 将IActor对象赋值给Data的value
            data.setNeeSend(true); // 假设我们总是需要发送这个数据
            map.set(`actor_${index}`, data); // 使用字符串键
        });
        return map;
    }

    applyInput(input: IActorMove) {
        const {
            direction: { x, y },
            dt,
            id,
        } = input;
        const actor = this.state.actors.find((e) => e.id === id);
        actor.direction.x = x;
        actor.direction.y = y;

        actor.velocity = true

        actor.position.x += x * dt * ACTOR_SPEED;
        actor.position.y += y * dt * ACTOR_SPEED;
    }

    noInput(id:number){
        const actor = this.state.actors.find((e) => e.id === id);
        actor.velocity = false
    }

    updateActorColor(actorId: number, newColor: MyColor, newTransparency: number) {
        const actor = this.state.actors.find((actor) => actor.id === actorId);
        if (actor) {
            actor.color = newColor;
            actor.transparency = newTransparency;
        }
    }

    getMyPlayerId(){
        return this.myPlayerId;
    }

    processFrameData(frameDataMap: Map<number, IActor>) {
        frameDataMap.forEach((actorData, id) => {
            const actor = this.state.actors.find((actor) => actor.id === id);
            if (actor && actor.id !== this.getMyPlayerId()) {
                actor.position = actorData.position;
                actor.direction = actorData.direction;
                actor.velocity = actorData.velocity;
                actor.color = actorData.color;
                actor.transparency = actorData.transparency;
            }
        });
    }
}


