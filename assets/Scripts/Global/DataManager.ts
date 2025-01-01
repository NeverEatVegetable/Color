import { AnimationClip, Prefab, Sprite, SpriteFrame } from "cc";
import Singleton from "../Base/Singleton";
import { EntityTypeEnum, IActor, IActorMove, IState } from "../Common";
import { JoyStickManager } from "../UI/JoyStickManager";
import { ActorMannager } from "../EntityAndActor/ActorMannager";
import { ColorManager } from "../Utilites/ColorMix/ColorManager";
import { MyColor } from "../Utilites/ColorMix/MyColor";


const ACTOR_SPEED=100
const SEND_INTERVAL = 1000 / 30; //以30帧每秒的频率发送数据


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

    private lastSendTimestamp = 0; // 记录上一次发送数据的时间戳

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

    // 接收处理收到的数据
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

    // 发送数据的方法
    private sendActorData() {
        const dataMap = this.getPropToMap();
        // 将Map序列化为可以发送的JSON字符串
        const msg = JSON.stringify(Array.from(dataMap.values()));
        // 发送消息给房间内全部玩家,所以type为0
        RoomManager.instance.sendMsgToRoomMember(0, msg);
        this.lastSendTimestamp = Date.now(); // 更新上一次发送数据的时间戳
    }

    // Update方法，每帧调用
    update(dt: number) {
        const now = Date.now();
        if (now - this.lastSendTimestamp >= SEND_INTERVAL) {
            this.sendActorData();
        }
    }



    // 游戏进入时开启帧同步
    onGameEnter() {
        NotifyManager.instance.dispatch(GlobalNotify.RoomStartFrameSync);
    }

    // 游戏退出时关闭帧同步
    onGameExit() {
        NotifyManager.instance.dispatch(GlobalNotify.RoomStopFrameSync);
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

    constructor() {
        super();
        // 监听GameEnter和GameExit事件
        NotifyManager.instance.addListener(GlobalNotify.GameEnter, this.onGameEnter);
        NotifyManager.instance.addListener(GlobalNotify.GameOver, this.onGameExit);
        // 监听帧同步数据接收事件
        NotifyManager.instance.addListener(GlobalNotify.RecvRoomFrameRecvMsg, (frameDataMap) => {
            this.processFrameData(frameDataMap);
        });
    }



}


