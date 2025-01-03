import { _decorator, Color, Component, EventTouch, input, Input, Node, Sprite, UITransform, Vec2 } from 'cc';
import { GameStarter } from '../GameStarter';
const { ccclass, property } = _decorator;

@ccclass('JoyStickManager')
export class JoyStickManager extends Component {
    input: Vec2=Vec2.ZERO

    private body: Node
    private stick: Node
    private base: Node
    private defaultPos: Vec2
    private radius: number
    private stickcolor: Sprite
    private basecolor: Sprite

    private _isStickOpen = true;

    onLoad() {
        this.body = this.node.getChildByName("Body")
        this.stick = this.body.getChildByName("Stick")
        this.base = this.body.getChildByName("Base")
        this.stickcolor=this.stick.getComponent(Sprite)
        this.basecolor=this.base.getComponent(Sprite)
        //console.log(this.body)
        //console.log(this.stick)
        this.radius = this.body.getComponent(UITransform).contentSize.x/2
        this.defaultPos = new Vec2(this.body.position.x, this.body.position.y)
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);

        NotifyManager.instance.addListener(GlobalNotify.GamePause, () => { this.setStickOpen(false); });
        NotifyManager.instance.addListener(GlobalNotify.GameResume, () => { this.setStickOpen(true); });
        NotifyManager.instance.addListener(GlobalNotify.GameRestart, () => { this.setStickOpen(true); });
        NotifyManager.instance.addListener(GlobalNotify.GameEnter, () => { this.setStickOpen(true); });
    }

    onDestroy() {
        input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onTouchStart(e: EventTouch) {
        if (this._isStickOpen) {
            const touchPos = e.getUILocation()
            this.body.setPosition(touchPos.x, touchPos.y)
            this.setSpriteOpacity(255); // 设置透明度为255
        }
    }

    onTouchMove(e: EventTouch) {
        if (this._isStickOpen) {
            const touchPos = e.getUILocation()
            const stickPos = new Vec2(touchPos.x - this.body.position.x, touchPos.y - this.body.position.y)
            if (stickPos.length() > this.radius) {
                stickPos.multiplyScalar(this.radius / stickPos.length())
            }
            this.stick.setPosition(stickPos.x, stickPos.y)
            this.input = stickPos.clone().normalize()
        /*console.log(this.input)*/
        }
    }

    onTouchEnd() {
        if (this._isStickOpen) {
            this.body.setPosition(this.defaultPos.x, this.defaultPos.y)
            this.stick.setPosition(0, 0)
            this.input = Vec2.ZERO
            this.setSpriteOpacity(100); // 设置透明度为100
        }
    }

    setStickOpen(isopen: boolean = false) {
        this._isStickOpen = isopen;
    }

    // 新增方法，用于设置stick和base节点的Sprite透明度
    private setSpriteOpacity(value: number) {
        if (this.stickcolor) {
            this.stickcolor.color = new Color(255, 255, 255, value);
        }
        if (this.basecolor) {
            this.basecolor.color = new Color(255, 255, 255, value);
        }
    }
}


