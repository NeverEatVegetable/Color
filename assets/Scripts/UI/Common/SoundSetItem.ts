import { _decorator, CCInteger, Component, Enum, Label, Node, ProgressBar, Slider, Sprite, Toggle } from 'cc';
const { ccclass, property } = _decorator;

enum SoundItemEvent {
    music = GlobalNotify.MUSIC_SETTING_UPDATE,
    audio = GlobalNotify.AUDIO_SETTING_UPDATE,
}

@ccclass('SoundSetItem')
export class SoundSetItem extends Component {
    @property({ type: Enum(SoundItemEvent)})
    itemEvent: SoundItemEvent = SoundItemEvent.music;
    value: number = 0.5;
    @property({ type: Toggle})
    toggle: Toggle;
    @property({ type: ProgressBar })
    fill: ProgressBar;
    @property({ type: Slider })
    fillTip: Slider;

    start() {
        this.SetVolume(0.5);
    }

    onToggle() {
        if (this.toggle.isChecked) {
            this.CloseSound();
        }
        else {
            this.OpenSound();
        }
    }

    onSlider(slider: Slider, customEventData: string) {
        //这里 event 是一个 Touch Event 对象，你可以通过 event.target 取到事件的发送节点
        // 这里的 customEventData 参数就等于之前设置的 'foobar'
        if (slider.progress!=this.value) {
            this.SetVolume(slider.progress);
        }
    }


    SetVolume(value?: number) {
        if (value) {
            this.value = value;
        }
        this.fill.progress = this.value;
        this.fillTip.progress = this.value;
        NotifyManager.instance.dispatch(this.itemEvent, this.value);
    }

    CloseSound() {
        NotifyManager.instance.dispatch(this.itemEvent, 0);
    }

    OpenSound() {
        this.SetVolume()
    }


    
}


