import { _decorator, Button, Component, Node } from 'cc';
import { CommonViewTool } from './CommonViewTool';
const { ccclass, property } = _decorator;

@ccclass('PauseView')
export class PauseView extends Component {

    onLoad() {
        this.node.parent.getChildByName("UI").getChildByName("Settings").on(Button.EventType.CLICK, this.onOpen, this);
    }

    onClose() {
        this.node.active = false;
        NotifyManager.instance.dispatch(GlobalNotify.GameResume);
    }

    onOpen() {
        this.node.active = true;
        NotifyManager.instance.dispatch(GlobalNotify.GamePause);
        NotifyManager.instance.dispatch(GlobalNotify.EFFECT_PLAY,0);
    }
}


