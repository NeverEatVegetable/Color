import { _decorator, AnimationClip, Component, instantiate, JsonAsset, Node, Prefab, resources, SpriteFrame } from 'cc';
import DataManager from '../Global/DataManager';
import { JoyStickManager } from '../UI/JoyStickManager';
import { ResourceManager } from '../Global/ResourceManager';
import { AnimationPathEnum, ImagePatEnum, PrefabPatEnum,GameUIPrefabEnum } from '../Enum';
import { ActorMannager } from '../EntityAndActor/ActorMannager';
import { EntityTypeEnum } from '../Common/Enum';
import { OrderManager } from '../Utilites/Order/OrderManager';
import { ColorManager } from '../Utilites/ColorMix/ColorManager';
import { ScoreManager } from '../Utilites/Score/ScoreManager';
import { GameManager } from '../GameManager';
const { ccclass, property } = _decorator;

@ccclass('BattleManager')
export class BattleManager extends Component {
    private stage: Node
    private ui: Node

    private shouldUpdate = false
    onLoad() {

        this.stage = this.node.getChildByName("Stage")
        this.ui = this.node.getChildByName("UI")
        this.stage.destroyAllChildren()
        DataManager.Instance.jm = this.ui.getComponentInChildren(JoyStickManager)
    }

    async start() {
        await this.loadRes()

        NotifyManager.instance.addListener(GlobalNotify.GameEnter, this.onGameEnter.bind(this));
        NotifyManager.instance.addListener(GlobalNotify.GameRestart, this.onGameRestart.bind(this));
        NotifyManager.instance.addListener(GlobalNotify.GamePause, this.onGamePause.bind(this));
        NotifyManager.instance.addListener(GlobalNotify.GameResume, this.onGameResume.bind(this));
    }

    onGameEnter() {
        this.initMap()
        this.shouldUpdate = true;
    }

    onGameRestart() {
        this.shouldUpdate = true;
    }

    onGamePause() {
        this.shouldUpdate = false;
    }

    onGameResume() {
        this.shouldUpdate = true;
    }

    async loadRes() {
        ResourceManager.Instance.loadRes("Data/ColorMix", JsonAsset).then(ColorManager._Instance.loadFun.bind(ColorManager._Instance));
        const list = []
        for (const type in PrefabPatEnum) {
            const p = ResourceManager.Instance.loadRes(PrefabPatEnum[type], Prefab).then((prefab) => {
                DataManager.Instance.prefabMap.set(type, prefab)
            })
            list.push(p)
        }


        for (let i = 2; i <= 4; i++) {
            ResourceManager.Instance.loadRes("Prefabs/order/orderTip_" + i, Prefab).then(OrderManager._Instance.loadOrderTip.bind(OrderManager._Instance));
        }
        ResourceManager.Instance.loadRes("Prefabs/order/order", Prefab).then(OrderManager._Instance.loadOrder.bind(OrderManager._Instance));
        ResourceManager.Instance.loadRes("Prefabs/score/score", Prefab).then(ScoreManager._Instance.loadScore.bind(ScoreManager._Instance));

        for (let tmp in GameUIPrefabEnum) {
            ResourceManager.Instance.loadRes(GameUIPrefabEnum[tmp], Prefab).then((prefab) => {
                GameManager._Instance.viewPrefabs[prefab.name] = prefab;
            });
        }


        await Promise.all(list);
        //NotifyManager.instance.dispatch(GlobalNotify.LOCAL_DATA_LOAD_SUCESS);
    }

    initMap() {
        const prefab = DataManager.Instance.prefabMap.get(EntityTypeEnum.Map)
        const map = instantiate(prefab)
        map.setParent(this.stage)
    }
    //统一管理更新
    update(dt) {
        if (!this.shouldUpdate) {
            return
        }
        this.render()
        this.tick(dt)
    }

    tick(dt) {
        this.tickActor(dt)
    }

    tickActor(dt) {
        for (const data of DataManager.Instance.state.actors) {
            const { id } = data
            let am = DataManager.Instance.actorMap.get(id)
            am.tick(dt)
        }
    }

    render() {
        this.renderActor()
    }

    async renderActor() {
        for (const data of DataManager.Instance.state.actors) {
            const {id,type}=data
            let am = DataManager.Instance.actorMap.get(id)
            if (!am) {
                const prefab = DataManager.Instance.prefabMap.get(type)
                const actor = instantiate(prefab)
                actor.setParent(this.stage)
                am = actor.addComponent(ActorMannager)
                DataManager.Instance.actorMap.set(data.id, am)
                am.init(data)
            } else {
                am.render(data)
            }
        }
    }
    
}


