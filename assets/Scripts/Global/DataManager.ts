import { AnimationClip, Prefab, Sprite, SpriteFrame } from "cc";
import Singleton from "../Base/Singleton";
import { EntityTypeEnum, IActor, IActorMove, IState } from "../Common";
import { JoyStickManager } from "../UI/JoyStickManager";
import { ActorMannager } from "../EntityAndActor/ActorMannager";
import { ColorManager } from "../Utilites/ColorMix/ColorManager";
import { MyColor } from "../Utilites/ColorMix/MyColor";

const ACTOR_SPEED=100

export default class DataManager extends Singleton implements BaseModel {
    static get Instance() {
        return super.GetInstance<DataManager>();
    }

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


    getPropToMap(): Map<string, any> {
        const map = new Map<string, any>();
        // 将state对象中的actors数组中的每个元素转换为Data对象，并添加到map中
        this.state.actors.forEach((actor) => {
            const data = new Data(); // Data类有一个构造函数接受actor对象？
            data.setValue(actor);
            data.setNeeSend(true); // 设置为需要发送
            map.set(actor.id.toString(), data); // 将Data对象添加到map中，以actor.id为键
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
}


