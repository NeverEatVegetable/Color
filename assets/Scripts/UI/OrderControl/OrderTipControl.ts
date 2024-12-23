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

//    [Header("������")]
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
//    /// ������ɫ��ʾ��ʽ��
//    /// </summary>
//    public void UpdateTips()
//    {
//        int prefabIndex = 4, tipNum = 0;
//        while (prefabIndex > 1) {
//            for (int i = 0; i < 4; i++)
//            {
//                if (SystemOrder._Instance.nowOrderMixNum[i] == prefabIndex) {
//                    //Debug.Log(prefabIndex +  ":" + SystemOrder._Instance.nowColorOrder[i].colorHEX);
//                    //ȥ��
//                    if (tipNum > 0 && SystemOrder._Instance.nowColorOrder[i].colorHEX == colorTipObjs[tipNum - 1].GetComponent<ColorTip>().hex) {
//                        //Debug.LogError("��ɫ��ͬ������������˲�ʵ����.(" + i + ": " + SystemOrder._Instance.nowColorOrder[i].colorHEX + ","
//                        //     + (tipNum - 1) + ": " + SystemOrder._Instance.nowColorOrder[tipNum - 1].colorHEX + ")");
//                    }
//                    else {
//                        //Debug.LogError("ʵ����" + SystemOrder._Instance.nowColorOrder[i].colorHEX);
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
//    /// ʵ����èצ��ʾԤ����
//    /// </summary>
//    /// <param name="mixNum">��ϵ���ɫ</param>
//    /// <param name="index">�ڼ�����ʾ</param>
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
//                Debug.LogError("InstancePrefab����������:" + mixNum);
//                return;
//        }
//        colorTipObjs.Add(obj);

//        //����λ��
//        obj.GetComponent<RectTransform>().anchoredPosition = new Vector2(500, 100 - index * 75);
//        obj.GetComponent<RectTransform>().localScale = new Vector3(1, 1, 1);

//        //����ColorTip�����Ժ�����
//        obj.GetComponent<ColorTip>().mixBools = mixBools;
//        obj.GetComponent<ColorTip>().InitColorTip();
//    }

//    /// <summary>
//    /// �������colortip
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
