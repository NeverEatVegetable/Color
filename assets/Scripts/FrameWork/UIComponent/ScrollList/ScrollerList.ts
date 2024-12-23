import { _decorator, Component, Node, ScrollViewComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScrollerList')
export class ScrollerList extends ScrollViewComponent {
    public ScrollerCell: Node = null;
    start() {
    }

    update(deltaTime: number) {
        
    }
}


