import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ColorTip')
export class ColorTip extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }
}




//using System.Collections.Generic;
//using UnityEngine;
//using UnityEngine.UI;

//public class ColorTip : MonoBehaviour
//{
//    [Header("外界要赋值的")]
//    [Tooltip("目标颜色的混合数组")]
//    public bool[] mixBools;
//    public string hex;

//    [Header("自身调节")]
//    [Tooltip("目标颜色混合的颜色数量")]
//    public int mixNum;
//    public Image[] imges;
//    [SerializeField] List < Vector3 > colorList;


//    public void InitColorTip()
//    {
//        //将外界提供的提示颜色转化成V3列表
//        for (int i = 0; i < mixBools.Length; i++)
//        {
//            if (mixBools[i]) {
//                colorList.Add(ColorManager._Instance.TryGetMonoChrome(i).colorRGB);
//            }
//        }

//        //利用V3列表，给等式左侧的颜色赋值
//        for (int i = 0; i < mixNum; i++)
//        {
//            imges[i].color = new Color(colorList[i].x, colorList[i].y, colorList[i].z, 1f);
//        }

//        //给等式右侧的结果颜色赋值
//        MyColor mc = ColorManager._Instance.TryGetColor(mixBools);
//        hex = mc.colorHEX;
//        imges[mixNum].color = new Color(mc.colorRGB.x, mc.colorRGB.y, mc.colorRGB.z, 1f);
//    }
//}
