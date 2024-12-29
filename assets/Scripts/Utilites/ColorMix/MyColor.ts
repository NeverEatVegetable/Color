import { _decorator, Component, error, math, Node } from 'cc';
import { ColorManager } from './ColorManager';
const { ccclass, property } = _decorator;

@ccclass('MyColor')
export class MyColor {
    public colorHEX:string;
    public colorRGB: number[] = [];
    public colorMix: boolean[] = [];

    // #region ���캯��
    /**
     * �����������������У��ǾͲ�Ҫ�ֶ����죬ֱ�ӵ���MyColor��creatϵ�к�����������
     * @param colorHEX
     * @param colorRGB
     * @param colorMix
     */
    constructor(colorHEX?: string, colorRGB?: number[], colorMix?: boolean[]) {
        this.colorHEX = colorHEX ? colorHEX:null;
        //this.colorRGB = colorRGB ? [Math.floor(colorRGB[0] / 255), Math.floor(colorRGB[1] / 255), Math.floor(colorRGB[2] / 255)]:null;
        this.colorRGB = colorRGB ? [colorRGB[0], colorRGB[1], colorRGB[2]] : null;
        this.colorMix = colorMix ? colorMix :null;
    }

    static Creat_ByHEX(colorHEX: string): MyColor {
        //this.colorHEX = colorHEX;
        //this.colorRGB = ColorManager._Instance.Convert_HEX2RGB(colorHEX);
        //this.colorMix = ColorManager._Instance.TryGetColorMix(colorHEX);
        return new MyColor(colorHEX, ColorManager._Instance.Convert_HEX2RGB(colorHEX), ColorManager._Instance.TryGetColorMix_ByHEX(colorHEX));
    }

    static Creat_ByRGB(colorRGB: number[]): MyColor {
        
        //this.colorRGB = colorRGB / 255;
        //this.colorHEX = ColorManager._Instance.Convert_RGB2HEX(colorRGB);
        //this.colorMix = ColorManager._Instance.TryGetColorMix(colorRGB);
        return new MyColor(
            ColorManager._Instance.Convert_RGB2HEX(colorRGB),
            [Math.floor(colorRGB[0] / 255), Math.floor(colorRGB[1] / 255), Math.floor(colorRGB[2] / 255)],
            ColorManager._Instance.TryGetColorMix_ByRGB(colorRGB));
    }

    static Creat_ByMix(colorMix: boolean[]): MyColor {
        //this.colorHEX = colorHEX;
        //this.colorMix = colorMix;
        //this.colorRGB = ColorManager._Instance.Convert_HEX2RGB(colorHEX);
        let color: MyColor = ColorManager._Instance.TryGetColor_ByMix(colorMix);
        if (color == null) {
            console.error("Creat_Mix�����޷���ȡ����Ӧ��color");
        }
        return new MyColor(color.colorHEX,color.colorRGB,colorMix);
    }
    // #endregion

    // #region ���㷽����ts�޵��������������أ���Ϊ��ͳһ��ȫ���ú�����װ��
    static operator_add(c1: MyColor, c2: MyColor):MyColor {
        this.FixMixBools(c1);
        this.FixMixBools(c2);

        if (c1.colorMix == null || c2.colorMix == null) {
            console.error("MixΪ��");
            return null;
        }

        if (c1.colorHEX == ColorManager._Instance.black.colorHEX || c2.colorHEX == ColorManager._Instance.black.colorHEX) {
            return ColorManager._Instance.black;
        }
         
        if (c1.colorHEX == "#9C816B" || c2.colorHEX == "#9C816B") {
            return ColorManager._Instance.black;
        }

        let mixColor: Array<boolean> = [];
        for (let i = 0; i < ColorManager._Instance.baseNum; i++)
        {
            mixColor[i] = (c1.colorMix[i] == true || c2.colorMix[i] == true) ? true : false;
        }

        return ColorManager._Instance.TryGetColor_ByMix(mixColor);
    }


    static operator_equal(c1: MyColor, c2: MyColor): boolean {
        this.FixMixBools(c1);
        this.FixMixBools(c2);

        if (c1.colorMix == null || c2.colorMix == null) {
            console.error("MixΪ��");
            return false;
        }

        for (let i = 0; i < ColorManager._Instance.baseNum; i++){
            if (c1.colorMix[i] != c2.colorMix[i]) {
                return false;
            }
        }

        if (c1.colorHEX != c2.colorHEX) {
            return false;
        }

        return true;

    }

    static operator_unequal(c1: MyColor, c2: MyColor): boolean{
        this.FixMixBools(c1);
        this.FixMixBools(c2);

        if (c1.colorMix == null || c2.colorMix == null) {
            console.error("MixΪ��");
            return false;
        }
        if (c1 == c2) {
            return false;
        }
        else {
            return true;
        }
    }

    // #endregion


    // #region �޲�

    /**
     * �޲�colorRgb��ts��ͨ��number[]ʵ��ʱ��ʹ��ԭV3�ĺ���������
     * @param rgb1
     * @param rgb2
     * @returns
     */
    static colorRgb_Distance(rgb1:number[],rgb2:number[]):number {
        let ans: number = 0;

        for (let i = 0; i < rgb1.length; i++) {
            ans += Math.pow(rgb1[1] - rgb2[1], 2);
        }

        return Math.sqrt(ans);
    }

    /** �޲����ܳ��ֵ�û��mix��ֵ����� */
    static FixMixBools(c: MyColor) {
        if (c.colorHEX == "") {
            error("����HEXΪ��");
        }

        if (c.colorMix == null) {
            let bools: boolean[] = ColorManager._Instance.TryGetColorMix_ByHEX(c.colorHEX);
            if (bools == null) {
                console.error("����HEX����");
            }
            else {
                c.colorMix = bools;
            }
        }
    }

    // #endregion

    

        /// <summary>
        /// ��ӡMyColor����Ϣ
        /// </summary>
    public Print(): void
    {
        MyColor.FixMixBools(this);
        MyColor.FixMixBools(this);

        if (this.colorMix == null) {
            console.error("MixΪ��");
            return;
        }

        let temp: string;
        temp = "hex: " + this.colorHEX + " , rgb: " + this.colorRGB + " , mix: ";

        for (let tmp in this.colorMix) {
            temp = temp + this.colorMix[tmp];
        }

        console.log(temp);
    }

}

