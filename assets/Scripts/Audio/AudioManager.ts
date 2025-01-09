import { _decorator, Component, AudioSource, AudioClip, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AudioManager')
export class AudioManager extends Component {
    @property(Node)
    private musicNode: Node | null = null;

    @property(Node)
    private effectNode: Node | null = null;

    @property({ type: [AudioClip] })
    private musicClips: AudioClip[] = [];

    @property({ type: [AudioClip] })
    private effectClips: AudioClip[] = [];

    private musicAudioSource: AudioSource | null = null;
    private effectAudioSource: AudioSource | null = null;

    onLoad() {
        this.musicAudioSource = this.musicNode ? this.musicNode.getComponent(AudioSource) : null;
        this.effectAudioSource = this.effectNode ? this.effectNode.getComponent(AudioSource) : null;
        if(this.effectAudioSource){
            console.log("effectAudioSource",this.effectAudioSource.name)
        }
        // 注册事件监听
        NotifyManager.instance.addListener(GlobalNotify.MUSIC_PLAY, this.playMusicclip.bind(this));
        NotifyManager.instance.addListener(GlobalNotify.EFFECT_PLAY, this.playEffectclip.bind(this));
        // NotifyManager.instance.addListener(GlobalNotify.ORDER_DATA_UPDATE,this.playEffectclip.bind())
        NotifyManager.instance.addListener(GlobalNotify.AUDIO_SETTING_UPDATE, (vo) => { this.setVolumn(1, vo); });
        NotifyManager.instance.addListener(GlobalNotify.MUSIC_SETTING_UPDATE, (vo) => { this.setVolumn(0, vo); });
    }



    // 播放背景音乐
    playMusicclip(index: number,ty:boolean = true) {
        if (ty){
            if (this.musicAudioSource && index >= 0 && index < this.musicClips.length) {
                this.musicAudioSource.clip = this.musicClips[index];
                this.musicAudioSource.play();
            }
        }
        else{
            if (this.musicAudioSource) {
                this.musicAudioSource.stop();
            }
        }
        
    }

    // 停止背景音乐
    // stopMusic() {
    //     if (this.musicAudioSource) {
    //         this.musicAudioSource.stop();
    //     }
    // }

    // 播放音效
    playEffectclip(index: number) {
        if(this.effectAudioSource){
            // console.log("11111111111111111")
            console.log("play: " + this.effectAudioSource);
        }
        console.log("11111>>>>",index)
        if (this.effectAudioSource && index >= 0 && index < this.effectClips.length) {
            this.effectAudioSource.clip = this.effectClips[index];
            this.effectAudioSource.play();
            console.log("play2: " + this.effectAudioSource);
        }
    }

    // 停止音效
    stopEffect() {
        if (this.effectAudioSource) {
            this.effectAudioSource.stop();
        }
    }

    //typ:0为音乐喇叭、1为音效喇叭
    //volumn：音量
    setVolumn(typ: number, volumn: number) {
        if (typ == 0) {
            this.musicAudioSource.volume = volumn;
        }
        else {
            this.effectAudioSource.volume = volumn;
        }
    }

    //typ:0为音乐喇叭、1为音效喇叭
    //true:pause   false:play
    closeVolumn(typ: number,isClose:boolean) {
        if (typ == 0) {
            if (isClose) {
                this.musicAudioSource.pause();
            }
            else {
                this.musicAudioSource.play();
            }
        }
        else {
            if (isClose) {
                this.effectAudioSource.pause();
            }
            else {
                this.effectAudioSource.play();
            }
        }
    }
}