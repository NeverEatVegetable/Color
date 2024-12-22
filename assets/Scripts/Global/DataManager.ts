import { Prefab } from "cc";
import Singleton from "../Base/Singleton";
import { EntityTypeEnum, IActor, IActorMove, IState } from "../Common";
import { JoyStickManager } from "../UI/JoyStickManager";
import { ActorMannager } from "../EntityAndActor/ActorMannager";

const ACTOR_SPEED=100

export default class DataManager extends Singleton {
    static get Instance() {
        return super.GetInstance<DataManager>();
    }

    jm: JoyStickManager

    actorMap: Map<number, ActorMannager> = new Map()
    prefabMap: Map<string, Prefab> = new Map()

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
        actor.direction.x = x
        actor.direction.y = y

        actor.position.x += x * dt * ACTOR_SPEED
        actor.position.y += y * dt * ACTOR_SPEED
    }
}


