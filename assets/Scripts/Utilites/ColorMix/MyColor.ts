import { _decorator, Component, error, math, Node } from 'cc';
import { ColorManager } from './ColorManager';
const { ccclass, property } = _decorator;

export class MyColor {
    public colorHEX:string;
    public colorRGB: number[] = [];
    public colorMix: boolean[] = [];

    // #region 构造函数
    /**
     * 最好如果不是三个都有，那就不要手动构造，直接调用MyColor的creat系列函数来创建。
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
            console.error("Creat_Mix错误，无法获取到对应的color");
        }
        return new MyColor(color.colorHEX,color.colorRGB,colorMix);
    }
    // #endregion

    // #region 运算方法（ts无等于类的运算符重载，故为了统一，全部用函数封装）
    static operator_add(c1: MyColor, c2: MyColor):MyColor {
        this.FixMixBools(c1);
        this.FixMixBools(c2);

        if (c1.colorMix == null || c2.colorMix == null) {
            console.error("Mix为空");
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
            console.error("Mix为空");
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
            console.error("Mix为空");
            return false;
        }
        if (c1 == c2) {
            return false;
        }
        else {
            return true;
        }
    }

    // #endregin


    // #region 修补colorRgb在ts中通过number[]实现时，使用原V3的函数的问题

    static colorRgb_Distance(rgb1:number[],rgb2:number[]):number {
        let ans: number = 0;

        for (let i = 0; i < rgb1.length; i++) {
            ans += Math.pow(rgb1[1] - rgb2[1], 2);
        }

        return Math.sqrt(ans);
    }



    // #endregin

    /** 修补可能出现的没对mix赋值的情况 */
    static FixMixBools(c: MyColor) {
        if (c.colorHEX == "") {
            error("错误，HEX为空");
        }

        if (c.colorMix == null) {
            let bools:boolean[] = ColorManager._Instance.TryGetColorMix_ByHEX(c.colorHEX);
            if (bools == null) {
                console.error("错误，HEX有误");
            }
            else {
                c.colorMix = bools;
            }
        }
    }

        /// <summary>
        /// 打印MyColor的信息
        /// </summary>
    public Print(): void
    {
        MyColor.FixMixBools(this);
        MyColor.FixMixBools(this);

        if (this.colorMix == null) {
            console.error("Mix为空");
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

//public class MyColor222 {
//    public string colorHEX;
//    public Vector3 colorRGB;
//    public bool[] colorMix;

//    #region 构造函数
//    public MyColor() {

//    }

//    public MyColor(string colorHEX) {
//        this.colorHEX = colorHEX;
//        this.colorRGB = ColorManager._Instance.Convert_HEX2RGB(colorHEX);
//        this.colorMix = ColorManager._Instance.TryGetColorMix(colorHEX);
//    }

//    public MyColor(Vector3 colorRGB) {
//        this.colorRGB = colorRGB / 255;
//        this.colorHEX = ColorManager._Instance.Convert_RGB2HEX(colorRGB);
//        this.colorMix = ColorManager._Instance.TryGetColorMix(colorRGB);
//    }

//    public MyColor(string colorHEX, bool[] colorMix) {
//        this.colorHEX = colorHEX;
//        this.colorMix = colorMix;
//        this.colorRGB = ColorManager._Instance.Convert_HEX2RGB(colorHEX);
//    }

//    public MyColor(Vector3 colorRGB, bool[] colorMix) {
//        this.colorRGB = colorRGB / 255;
//        this.colorMix = colorMix;
//        this.colorHEX = ColorManager._Instance.TryGetColor(colorMix).colorHEX;
//    }

//    public MyColor(string colorHEX, Vector3 colorRGB, bool[] colorMix) {
//        this.colorHEX = colorHEX;
//        this.colorRGB = colorRGB / 255;
//        this.colorMix = colorMix;
//    }
//    #endregion

//    #region 运算符重载
//    public static MyColor operator +(MyColor c1, MyColor c2)
//{
//    FixMixBools(c1);
//    FixMixBools(c2);

//    if (c1.colorMix == null || c2.colorMix == null) {
//        Debug.LogError("Mix为空");
//        return null;
//    }

//    if (c1.colorHEX == ColorManager._Instance.black.colorHEX || c2.colorHEX == ColorManager._Instance.black.colorHEX) {
//        return ColorManager._Instance.black;
//    }

//    bool[] mixColor = new bool[c1.colorMix.Length];

//    if (c1.colorHEX == "#9C816B" || c2.colorHEX == "#9C816B") {
//        return ColorManager._Instance.black;
//    }

//    for (int i = 0; i < mixColor.Length; i++)
//    {
//        mixColor[i] = (c1.colorMix[i] == true | c2.colorMix[i] == true) ? true : false;
//    }

//    return ColorManager._Instance.TryGetColor(mixColor);
//}

//    public static bool operator == (MyColor c1, MyColor c2)
//{
//    FixMixBools(c1);
//    FixMixBools(c2);

//    if (c1.colorMix == null || c2.colorMix == null) {
//        Debug.LogError("Mix为空");
//        return false;
//    }

//    for (int i = 0; i < c1.colorMix.Length; i++)
//    {
//        if (c1.colorMix[i] != c2.colorMix[i]) {
//            return false;
//        }
//    }

//    if (c1.colorHEX != c2.colorHEX) {
//        return false;
//    }

//    return true;
//}

//    public static bool operator != (MyColor c1, MyColor c2)
//{
//    FixMixBools(c1);
//    FixMixBools(c2);

//    if (c1.colorMix == null || c2.colorMix == null) {
//        Debug.LogError("Mix为空");
//        return false;
//    }

//    if (c1 == c2) {
//        return false;
//    }
//    else {
//        return true;
//    }
//}
//#endregion


//    /// <summary>
//    /// 修补可能出现的没对mix赋值的情况
//    /// </summary>
//    /// <param name="c"></param>
//    public static void FixMixBools(MyColor c)
//{
//    if (c.colorHEX == "") {
//        Debug.LogError("错误，HEX为空");
//    }

//    if (c.colorMix == null) {
//        bool[] bools = ColorManager._Instance.TryGetColorMix(c.colorHEX);
//        if (bools == null) {
//            Debug.LogError("错误，HEX有误");
//        }
//        else {
//            c.colorMix = bools;
//        }
//    }
//}

//    /// <summary>
//    /// 打印MyColor的信息
//    /// </summary>
//    public void Print()
//{
//    FixMixBools(this);
//    FixMixBools(this);

//    if (this.colorMix == null) {
//        Debug.LogError("Mix为空");
//        return;
//    }

//        string temp;
//    temp = "hex: " + colorHEX + " , rgb: " + colorRGB + " , mix: ";

//    foreach(bool myBool in colorMix)
//    {
//        temp = temp + myBool.ToString();
//    }

//    Debug.Log(temp);
//}

//}

