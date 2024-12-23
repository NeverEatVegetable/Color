import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('OrderTipControl')
export class OrderTipControl extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }
}


//using System.Collections.Generic;
//using UnityEngine;

//public class OrderTipControl : MonoBehaviour
//{
//    public List < GameObject > tipPrefab;

//    [Header("测试用")]
//    [SerializeField] List < GameObject > colorTipObjs;

//    private void Start()
//    {
//        GameEventManager._Instance.RegisterEventListener("InitAllEvent", () => {
//            GameEventManager._Instance.RegisterEventListener("InitAllData", () => {
//                UpdateTips();
//            });

//            GameEventManager._Instance.RegisterEventListener("UpdateOrderSystem", () => {
//                ClearColorTip();
//                UpdateTips();
//            });
//        });

//        //UpdateTips();
//    }

//    /// <summary>
//    /// 更新颜色提示公式们
//    /// </summary>
//    public void UpdateTips()
//    {
//        int prefabIndex = 4, tipNum = 0;
//        while (prefabIndex > 1) {
//            for (int i = 0; i < 4; i++)
//            {
//                if (SystemOrder._Instance.nowOrderMixNum[i] == prefabIndex) {
//                    //Debug.Log(prefabIndex +  ":" + SystemOrder._Instance.nowColorOrder[i].colorHEX);
//                    //去重
//                    if (tipNum > 0 && SystemOrder._Instance.nowColorOrder[i].colorHEX == colorTipObjs[tipNum - 1].GetComponent<ColorTip>().hex) {
//                        //Debug.LogError("颜色相同，后遍历的这趟不实例化.(" + i + ": " + SystemOrder._Instance.nowColorOrder[i].colorHEX + ","
//                        //     + (tipNum - 1) + ": " + SystemOrder._Instance.nowColorOrder[tipNum - 1].colorHEX + ")");
//                    }
//                    else {
//                        //Debug.LogError("实例化" + SystemOrder._Instance.nowColorOrder[i].colorHEX);
//                        //SystemOrder._Instance.isTip[i] = true;
//                        InstancePrefab(prefabIndex, tipNum++, SystemOrder._Instance.nowColorOrder[i].colorMix);
//                    }

//                    //InstancePrefab(prefabIndex, tipNum++, SystemOrder._Instance.nowColorOrder[i].colorMix);
//                }
//            }
//            prefabIndex--;
//        }
//    }


//    /// <summary>
//    /// 实例化猫爪提示预制体
//    /// </summary>
//    /// <param name="mixNum">混合的颜色</param>
//    /// <param name="index">第几条提示</param>
//    public void InstancePrefab(int mixNum, int index, bool[] mixBools)
//    {
//        GameObject obj;
//        switch (mixNum) {
//            case 2:
//                obj = Instantiate(tipPrefab[0], gameObject.transform);
//                break;
//            case 3:
//                obj = Instantiate(tipPrefab[1], gameObject.transform);
//                break;
//            case 4:
//                obj = Instantiate(tipPrefab[2], gameObject.transform);
//                break;
//            default:
//                Debug.LogError("InstancePrefab错误，输入了:" + mixNum);
//                return;
//        }
//        colorTipObjs.Add(obj);

//        //设置位置
//        obj.GetComponent<RectTransform>().anchoredPosition = new Vector2(500, 100 - index * 75);
//        obj.GetComponent<RectTransform>().localScale = new Vector3(1, 1, 1);

//        //设置ColorTip的属性和内容
//        obj.GetComponent<ColorTip>().mixBools = mixBools;
//        obj.GetComponent<ColorTip>().InitColorTip();
//    }

//    /// <summary>
//    /// 清空所有colortip
//    /// </summary>
//    public void ClearColorTip()
//    {
//        foreach(GameObject obj in colorTipObjs)
//        {
//            Destroy(obj);
//        }
//        colorTipObjs.Clear();
//    }
//}
