import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 游戏启动器
 * 作用：初始化整个游戏，如：资源加载、添加必要组件等工作。
 * 生命周期：整个游戏
 */
@ccclass('GameStarter')
export class GameStarter extends Component {
    start() {
        console.log("Game started");
        //初始化客户端，先放着，后面封装
        // ClientManager.instance.createClient()
        // ClientManager.instance.initClient()
        NotifyManager.instance.addListener("GameStart", (a, b) => { console.log(a, b) })
        NotifyManager.instance.dispatch("GameStart",1,2)
    }

    update(deltaTime: number) {
        /**目前感觉不要在这个脚本的Update中做文章
         * 因为目前没有需要每帧都执行的逻辑
         * 还没想好，再议
         */
    }
    protected onDestroy(): void {
        // ClientManager.instance.exitClient()
        NotifyManager.instance.removeListener("GameStart")
        console.log("Game destroyed");
    }
}


