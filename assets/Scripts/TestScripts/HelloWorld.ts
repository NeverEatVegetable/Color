import { _decorator, Color, Component, math, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HelloWorld')
export class HelloWorld extends Component {

    @property({ type: Sprite })
    public spriteNode:Sprite;

    start() {
        this.spriteNode.color = new Color(99,99,99);
    }


    update(deltaTime: number) {
        
    }
}


