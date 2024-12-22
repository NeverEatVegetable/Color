import { _decorator, Component, error, JsonAsset, Node, resources, Sprite } from 'cc';
import { MyColor } from './MyColor';
const { ccclass, property } = _decorator;

@ccclass('ColorManager')
export class ColorManager {
    private constructor() {
        //this.loadJsonData().then(dates => { this.colorDates = dates;  });
        //NotifyManager.instance.addListener(GlobalNotify.LOCAL_DATA_LOAD_SUCESS, () => {
            
        //});

    }

    private static _instance: ColorManager = new ColorManager();
    public static get _Instance() {
        if (this._instance == null) { this._instance = new ColorManager(); }
        return this._instance;
    }
    /**json表数据 */
    public colorDates: boolean[][] = [];

    /**颜色混合数据 */
    public colorList: Array<MyColor> = new Array<MyColor>();

    /**最终的颜色：黑色 */
    public black: MyColor = new MyColor("#000001", [0, 0, 0], [true, true, true, true]);

    /**最初的颜色：无任何混合色 */
    public monoLess: MyColor = new MyColor("#000000", [1, 1, 1], [false, false, false, false]);

    /**基础的颜色的个数*/
    public baseNum: number;

    // #region 管理器本身


    // #endregion

    // #region 调用接口工具
    /**
     * 判断输入的MyColor类型是否在颜色库中
     * @param color
     * @returns 整型，表示其在颜色数据中的下标位置
     */
    GetContains_ByMyColor(color: MyColor): number {
        let tmpcolor: MyColor;
        for (let tmp in this.colorList)
            //类是地址传递，直接比较比较的是地址


            for (let i = 0; i < this.colorList.length; i++) {
                if (color.colorHEX == this.colorList[i].colorHEX && color.colorRGB == this.colorList[i].colorRGB)
                    return i;
            }

        return -1;
    }

    /**
     * 判断输入的混合方式是否在颜色库中
     * @param colorMix
     * @returns 整型，表示其在颜色数据中的下标位置
     */
    GetContains_ByMix(colorMix: boolean[]): boolean {
        let flag: boolean;
        for (let tmp in this.colorList) {
            flag = true;
            for (let i = 0; i < colorMix.length; i++)
                if (colorMix[i] != this.colorList[tmp].colorMix[i])
                    flag = false;

            if (flag) return true;
        }

        return false;
    }

    /**
     * 尝试获取在mix的颜色配方中对应的颜色，如果没有记录在颜色库中，就得到null。
     * @param mix
     * @returns
     */
    TryGetColor_ByMix(mix: boolean[]): MyColor {
        let flag: boolean;
        for (let i = 0; i < this.colorList.length; i++) {
            flag = true;
            for (let j = 0; j < this.baseNum; j++) {
                if (this.colorList[i].colorMix[j] != mix[j]) {
                    flag = false;
                }
            }
            if (flag) return this.colorList[i];
        }
        return null;
    }

    /**
     * 尝试获取颜色混合的颜色数量。如果没有记录在颜色库中，就得到-1
     * @param mix
     * @returns
     */
    TryGetColorMixNum_ByMix(mix: boolean[]): number {
        if (mix == null) return -1;

        let s: number = 0;
        for (let i = 0; i < mix.length; i++) {
            if (mix[i]) {
                s++;
            }
        }
        return s;
    }

    /**
     * 尝试获取颜色混合的颜色数量。如果没有记录在颜色库中，就得到-1
     * @param MyColor
     * @param color
     * @returns
     */
    TryGetColorMixNum_ByMyColor(color: MyColor): number {
        if (color.colorMix == null) {
            return -1;
        }
        else {
            return this.TryGetColorMixNum_ByMix(color.colorMix);
        }

    }

    /**
     * 尝试获取单色的颜色。如果没有记录在颜色库中，就得到null
     * @param index
     * @returns
     */
    TryGetMonoChrome_ByIndex(index: number): MyColor {
        switch (index) {
            case 0:
                return this.TryGetColor_ByMix([true, false, false, false]);
            case 1:
                return this.TryGetColor_ByMix([false, true, false, false]);
            case 2:
                return this.TryGetColor_ByMix([false, false, true, false]);
            case 3:
                return this.TryGetColor_ByMix([false, false, false, true]);
            default:
                console.error("TryGetMonoChrome错误");
                return null;

        }
    }

    /**
     * 尝试获取颜色混合数组。如果没有记录在颜色库中，就得到null
     * @param hex 带“#”
     * @returns
     */
    TryGetColorMix_ByHEX(hex: string):boolean[] {
        for (let i = 0; i < this.colorList.length; i++)
        {
            if (this.colorList[i].colorHEX == hex) {
                return this.colorList[i].colorMix;
            }
        }

        console.error("TryGetColorMix查找不到");
        return null;
    }

    /**
     * 尝试获取颜色混合数组。如果没有记录在颜色库中，就得到null
     * @param RGB cocos中的rgb取值是255
     * @returns
     */
    TryGetColorMix_ByRGB(RGB: number[]): boolean[] {
        //for (let i = 0; i < RGB.length; i++) RGB[i] = RGB[i] * 255;

        for (let i = 0; i < this.colorList.length; i++)
        {
            if (MyColor.colorRgb_Distance(this.colorList[i].colorRGB,RGB) < 0.5)
            {
                return this.colorList[i].colorMix;
            }
        }

        console.error("TryGetColorMix查找不到");
        return null;
    }

    // #endregion

    // #region 资源加载

    /**
     * 异步加载JSON
     * @returns
     */
    public asynLoadJsonData(): Promise<boolean[][]> {
        return new Promise((resolve, reject) => {
            resources.load('Data/ColorMix', (err: any, res: JsonAsset) => {
                if (err) {
                    console.log('json error');
                    reject(err);
                    return;
                }
                let jsonData: { [key: string]: { [key: string]: boolean } } = res.json!;
                

                let dates: boolean[][] = [];
                for (let hang in jsonData) {
                    let row: boolean[] = [];
                    for (let lie in jsonData[hang]) {
                        row.push(jsonData[hang][lie]);
                    }
                    dates.push(row);
                }

                resolve(dates);
            });
        });
    }

    public loadJsonData() {
        resources.load('Data/ColorMix', this.loadFun);
    }

    loadFun(err: any, res: JsonAsset) {
        if (err) {
            console.log('json error');
            return;
        }
        let jsonData: { [key: string]: { [key: string]: boolean } } = res.json;

        let dates: boolean[][] = [];
        let lieName:Array<string> = [];
        for (let hang in jsonData) {
            let row: boolean[] = [];
            for (let lie in jsonData[hang]) {
                row.push(jsonData[hang][lie]);
            }
            lieName.push(hang);
            dates.push(row);
        }

        ColorManager._instance.colorDates = dates;

        let index = 0;
        let hex, rgb, mix;
        for (let name of lieName) {
            hex = name;
            rgb = ColorManager._instance.Convert_HEX2RGB(name);
            mix = dates[index++];
            ColorManager._instance.colorList.push(new MyColor(hex, rgb, mix));
        }
        ColorManager._instance.baseNum = dates[0].length;
        NotifyManager.instance.dispatch(GlobalNotify.LOCAL_DATA_LOAD_SUCESS);
    }
    

    // #endregion

    // #region 转换工具
    /**
     * 16进制转10进制
     * @param math_16 十六进制的字符串类型，如：F （16）
     * @returns
     */
    public Convert_16to10(math_16: string):number {
        return parseInt(math_16, 16);
    }
    
    /**
     * HEX转RGB
     * @param HEX 带#的HEX字符串
     * @returns rgb(cocos中的rgb取值是255)
     */
    public Convert_HEX2RGB(HEX: string): number[] {
        let ans: number[] = [
            this.Convert_16to10(HEX.substring(1, 3)),
            this.Convert_16to10(HEX.substring(3, 5)),
            this.Convert_16to10(HEX.substring(5, 7))
        ];
        return ans;
    }

    /**
     * RGB转HEX
     * @param rgb cocos中的rgb取值是255
     * @returns
     */
    public Convert_RGB2HEX(rgb: number[]): string {
        return this.TryGetColor_ByMix(this.TryGetColorMix_ByRGB(rgb)).colorHEX;
    }
    // #endregion

    // #region 测试用
    test(): void {
        console.log("in test");
        for (let tmp in ColorManager._instance.colorList) {
            this.colorList[tmp].Print();
        }
    }


    test2(): void {
        console.log("in test2");
        console.log(this.GetContains_ByMix([false, false, false, false]) ? "true" : "false");
        console.log(this.GetContains_ByMyColor(new MyColor("#FDFDFD", [253, 253, 253], [false, false, false, false] )) ? "true" : "false");
    }

// #endregion
    
}
//(window as any).ColorManager = ColorManager;

//public class ColorManager222: ManagerBase<ColorManager>
//{
//    //颜色库
//    List < MyColor > colorList;

//    //最终的颜色：黑色
//    public MyColor black = new MyColor("#000001", new Vector3(0, 0, 0), new bool[] { true, true, true, true});

//    //最初的颜色：无任何混合色
//    public MyColor monoLess = new MyColor("#000000", new Vector3(1, 1, 1), new bool[] { false, false, false, false });

//    public ColorManager()
//    {
//        InitColorDic("ColorMix.xlsx");


//        //colorList.Add(black);
//        //colorList.Add(monoLess);

//        //test();
//        //test2();
//    }

//    #region 调用接口工具

//    /// <summary>
//    /// 判断输入的混合方式是否在颜色库中
//    /// </summary>
//    /// <param name="color"></param>
//    /// <returns></returns>
//    public bool GetContains(bool[] mix, out int ans)
//    {
//        bool temBool;
//        for (int i = 0; i < colorList.Count; i++)
//        {
//            temBool = true;
//            for (int j = 0; j < colorList[i].colorMix.Length; j++)
//            {
//                if (mix[j] != colorList[i].colorMix[j]) {
//                    temBool = false;
//                    break;
//                }
//            }

//            if (temBool) {
//                ans = i;
//                return true;
//            }
//        }

//        ans = -1;
//        return false;
//    }



//    #endregion

//    #region 转换工具

//    /// <summary>
//    /// HEX转RGB
//    /// </summary>
//    /// <param name="HEX">带#的HEX字符串</param>
//    /// <returns></returns>
//    public Vector3 Convert_HEX2RGB(string HEX)
//    {
//        return new Vector3(
//            (float)Convert_16to10(HEX.Substring(1, 2)) / 255,
//            (float)Convert_16to10(HEX.Substring(3, 2)) / 255,
//            (float)Convert_16to10(HEX.Substring(5, 2)) / 255
//        );

//        //16进制转10进制(十六进制的字符串类型，如：F（16）)
//        int Convert_16to10(string math_16)
//        {
//            return Convert.ToInt32(math_16, 16);
//        }

//    }

//    /// <summary>
//    /// RGB转HEX
//    /// </summary>
//    /// <param name="rgb">unity形式的v3，取值在0f-1f</param>
//    /// <returns></returns>
//    public string Convert_RGB2HEX(Vector3 rgb)
//    {
//        return TryGetColor(TryGetColorMix(rgb)).colorHEX;
//    }

//    ///// <summary>
//    ///// 16进制转10进制
//    ///// </summary>
//    ///// <param name="math_16">十六进制的字符串类型，如：F（16）</param>
//    ///// <returns></returns>
//    //int Convert_16to10(string math_16)
//    //{
//    //    return Convert.ToInt32(math_16,16);
//    //}

//    #endregion

//    #region 测试用
//    void test()
//    {
//        foreach(MyColor myColor in colorList)
//        {
//            myColor.Print();
//        }
//    }

//    void test2()
//    {
//        Debug.Log(GetContains(new bool[] { false, false, false, false }, out _) ? "true" : "false");

//        Debug.Log(GetContains(new MyColor("#FDFDFD", new Vector3(253, 253, 253), new bool[] { false, false, false, false }), out _) ? "true" : "false");
//    }

//    #endregion
//}

