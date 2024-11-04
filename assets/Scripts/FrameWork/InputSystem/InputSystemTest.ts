import { _decorator, Component, input, Input, EventKeyboard, KeyCode, Vec2 } from 'cc';
const { ccclass } = _decorator;

@ccclass("InputSystemTest")
export class InputSystemTest extends Component {
    onLoad() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    onDestroy() {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.off(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    onKeyDown(event: EventKeyboard) {

    }

    onKeyPressing(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_W:
                this.node.setPosition(this.node.position.x, this.node.position.y + 10);
                break;
            case KeyCode.KEY_A:
                this.node.setPosition(this.node.position.x - 10, this.node.position.y);
                break;
            case KeyCode.KEY_S:
                this.node.setPosition(this.node.position.x, this.node.position.y - 10);
                break;
            case KeyCode.KEY_D:
                this.node.setPosition(this.node.position.x + 10, this.node.position.y);
                break;
        }
    }

    onKeyUp(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_W:
                break;
            case KeyCode.KEY_A:
                break;
            case KeyCode.KEY_S:
                break;
            case KeyCode.KEY_D:
                break;
        }
    }
}