import { AnimationClip, Prefab, Sprite, SpriteFrame } from "cc";
import Singleton from "../Base/Singleton";
import { EntityTypeEnum, IActor, IActorMove, IState } from "../Common";
import { JoyStickManager } from "../UI/JoyStickManager";
import { ActorMannager } from "../EntityAndActor/ActorMannager";
import { ColorManager } from "../Utilites/ColorMix/ColorManager";
import { MyColor } from "../Utilites/ColorMix/MyColor";

const ACTOR_SPEED=100

export default class DataManager extends Singleton {
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
                transparency: 255,
            },

        ],
    };

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


