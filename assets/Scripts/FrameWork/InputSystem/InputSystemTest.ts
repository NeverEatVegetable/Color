import { _decorator, Component, input, Input, EventKeyboard, KeyCode } from 'cc';
const { ccclass } = _decorator;

@ccclass("InputSystemTest")
export class InputSystemTest extends Component {
    onLoad () {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    onDestroy () {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    onKeyDown (event: EventKeyboard) {
        switch(event.keyCode) {
            case KeyCode.KEY_W:
                console.log('Press a key W');
                break;
            case KeyCode.KEY_A:
                console.log('Press a key A');
                break;
            case KeyCode.KEY_S:
                console.log('Press a key S');
                break;
            case KeyCode.KEY_D:
                console.log('Press a key D');
            break;
        }
    }

    onKeyUp (event: EventKeyboard) {
        switch(event.keyCode) {
            case KeyCode.KEY_W:
                console.log('Release a key W');
                break;
            case KeyCode.KEY_A:
                console.log('Release a key A');
                break;
            case KeyCode.KEY_S:
                console.log('Release a key S');
                break;
            case KeyCode.KEY_D:
                console.log('Release a key D');
            break;
        }
    }
}