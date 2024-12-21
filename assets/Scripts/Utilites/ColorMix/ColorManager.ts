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
    /**json������ */
    public colorDates: boolean[][] = [];

    /**��ɫ������� */
    public colorList: Array<MyColor> = new Array<MyColor>();

    /**���յ���ɫ����ɫ */
    public black: MyColor = new MyColor("#000001", [0, 0, 0], [true, true, true, true]);

    /**�������ɫ�����κλ��ɫ */
    public monoLess: MyColor = new MyColor("#000000", [1, 1, 1], [false, false, false, false]);

    /**��������ɫ�ĸ���*/
    public baseNum: number;

    // #region ����������


    // #endregion

    // #region ���ýӿڹ���
    /**
     * �ж������MyColor�����Ƿ�����ɫ����
     * @param color
     * @returns ���ͣ���ʾ������ɫ�����е��±�λ��
     */
    GetContains_ByMyColor(color: MyColor): number {
        let tmpcolor: MyColor;
        for (let tmp in this.colorList)
            //���ǵ�ַ���ݣ�ֱ�ӱȽϱȽϵ��ǵ�ַ


            for (let i = 0; i < this.colorList.length; i++) {
                if (color.colorHEX == this.colorList[i].colorHEX && color.colorRGB == this.colorList[i].colorRGB)
                    return i;
            }

        return -1;
    }

    /**
     * �ж�����Ļ�Ϸ�ʽ�Ƿ�����ɫ����
     * @param colorMix
     * @returns ���ͣ���ʾ������ɫ�����е��±�λ��
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
     * ���Ի�ȡ��mix����ɫ�䷽�ж�Ӧ����ɫ�����û�м�¼����ɫ���У��͵õ�null��
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
     * ���Ի�ȡ��ɫ��ϵ���ɫ���������û�м�¼����ɫ���У��͵õ�-1
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
     * ���Ի�ȡ��ɫ��ϵ���ɫ���������û�м�¼����ɫ���У��͵õ�-1
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
     * ���Ի�ȡ��ɫ����ɫ�����û�м�¼����ɫ���У��͵õ�null
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
                console.error("TryGetMonoChrome����");
                return null;

        }
    }

    /**
     * ���Ի�ȡ��ɫ������顣���û�м�¼����ɫ���У��͵õ�null
     * @param hex ����#��
     * @returns
     */
    TryGetColorMix_ByHEX(hex: string):boolean[] {
        for (let i = 0; i < this.colorList.length; i++)
        {
            if (this.colorList[i].colorHEX == hex) {
                return this.colorList[i].colorMix;
            }
        }

        console.error("TryGetColorMix���Ҳ���");
        return null;
    }

    /**
     * ���Ի�ȡ��ɫ������顣���û�м�¼����ɫ���У��͵õ�null
     * @param RGB cocos�е�rgbȡֵ��255
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

        console.error("TryGetColorMix���Ҳ���");
        return null;
    }

    // #endregion

    // #region ��Դ����

    /**
     * �첽����JSON
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

    // #region ת������
    /**
     * 16����ת10����
     * @param math_16 ʮ�����Ƶ��ַ������ͣ��磺F ��16��
     * @returns
     */
    public Convert_16to10(math_16: string):number {
        return parseInt(math_16, 16);
    }
    
    /**
     * HEXתRGB
     * @param HEX ��#��HEX�ַ���
     * @returns rgb(cocos�е�rgbȡֵ��255)
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
     * RGBתHEX
     * @param rgb cocos�е�rgbȡֵ��255
     * @returns
     */
    public Convert_RGB2HEX(rgb: number[]): string {
        return this.TryGetColor_ByMix(this.TryGetColorMix_ByRGB(rgb)).colorHEX;
    }
    // #endregion

    // #region ������
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
//    //��ɫ��
//    List < MyColor > colorList;

//    //���յ���ɫ����ɫ
//    public MyColor black = new MyColor("#000001", new Vector3(0, 0, 0), new bool[] { true, true, true, true});

//    //�������ɫ�����κλ��ɫ
//    public MyColor monoLess = new MyColor("#000000", new Vector3(1, 1, 1), new bool[] { false, false, false, false });

//    public ColorManager()
//    {
//        InitColorDic("ColorMix.xlsx");


//        //colorList.Add(black);
//        //colorList.Add(monoLess);

//        //test();
//        //test2();
//    }

//    #region ���ýӿڹ���

//    /// <summary>
//    /// �ж�����Ļ�Ϸ�ʽ�Ƿ�����ɫ����
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

//    #region ת������

//    /// <summary>
//    /// HEXתRGB
//    /// </summary>
//    /// <param name="HEX">��#��HEX�ַ���</param>
//    /// <returns></returns>
//    public Vector3 Convert_HEX2RGB(string HEX)
//    {
//        return new Vector3(
//            (float)Convert_16to10(HEX.Substring(1, 2)) / 255,
//            (float)Convert_16to10(HEX.Substring(3, 2)) / 255,
//            (float)Convert_16to10(HEX.Substring(5, 2)) / 255
//        );

//        //16����ת10����(ʮ�����Ƶ��ַ������ͣ��磺F��16��)
//        int Convert_16to10(string math_16)
//        {
//            return Convert.ToInt32(math_16, 16);
//        }

//    }

//    /// <summary>
//    /// RGBתHEX
//    /// </summary>
//    /// <param name="rgb">unity��ʽ��v3��ȡֵ��0f-1f</param>
//    /// <returns></returns>
//    public string Convert_RGB2HEX(Vector3 rgb)
//    {
//        return TryGetColor(TryGetColorMix(rgb)).colorHEX;
//    }

//    ///// <summary>
//    ///// 16����ת10����
//    ///// </summary>
//    ///// <param name="math_16">ʮ�����Ƶ��ַ������ͣ��磺F��16��</param>
//    ///// <returns></returns>
//    //int Convert_16to10(string math_16)
//    //{
//    //    return Convert.ToInt32(math_16,16);
//    //}

//    #endregion

//    #region ������
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

