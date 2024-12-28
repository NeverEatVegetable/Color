import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import DataManager from '../Global/DataManager';
import { JoyStickManager } from '../UI/JoyStickManager';
import { ResourceManager } from '../Global/ResourceManager';
import { PrefabPatEnum } from '../Enum';
import { ActorMannager } from '../EntityAndActor/ActorMannager';
import { EntityTypeEnum } from '../Common';
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
        this.initMap()
        this.shouldUpdate = true
    }

    async loadRes() {
        const list = []
        for (const type in PrefabPatEnum) {
            const p = ResourceManager.Instance.loadRes(PrefabPatEnum[type], Prefab).then((prefab) => {
                DataManager.Instance.prefabMap.set(type, prefab)
            })
            list.push(p)
        }
        await Promise.all(list)
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


