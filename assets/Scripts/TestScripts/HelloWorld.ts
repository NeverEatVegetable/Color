import { _decorator, color, Color, Component, math, Node, Sprite } from 'cc';
import { ColorManager } from '../Utilites/ColorMix/ColorManager';
import { MyColor } from '../Utilites/ColorMix/MyColor';
const { ccclass, property } = _decorator;

@ccclass('HelloWorld')
export class HelloWorld extends Component {

    @property({ type: Sprite })
    public sp1: Sprite;
    @property({ type: Sprite })
    public sp2: Sprite;
    @property({ type: Sprite })
    public sp3: Sprite;

    start() {
        NotifyManager.instance.addListener(GlobalNotify.LOCAL_DATA_LOAD_SUCESS, () => {
            this.sp1.color = new Color("#0371C7");
            let c1 = MyColor.Creat_ByHEX("#0371C7");

            let c2 = MyColor.Creat_ByHEX("#F2EB00");
            this.sp2.color = new Color(c2.colorRGB[0], c2.colorRGB[1], c2.colorRGB[2]);

            let c3 = MyColor.operator_add(c1, c2);
            this.sp3.color = new Color(c3.colorHEX);

            //console.log("本地配置加载完毕");
            //ColorManager._Instance.test();
        });

        

        
    }


    update(deltaTime: number) {
        
    }
}


