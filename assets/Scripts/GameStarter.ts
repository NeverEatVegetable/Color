import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameStarter')
export class GameStarter extends Component {
    start() {
        console.log("Game started");
    }

    update(deltaTime: number) {

    }
    protected onDestroy(): void {
        console.log("Game destroyed");
    }
}


