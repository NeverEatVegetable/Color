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
//    [Header("���Ҫ��ֵ��")]
//    [Tooltip("Ŀ����ɫ�Ļ������")]
//    public bool[] mixBools;
//    public string hex;

//    [Header("�������")]
//    [Tooltip("Ŀ����ɫ��ϵ���ɫ����")]
//    public int mixNum;
//    public Image[] imges;
//    [SerializeField] List < Vector3 > colorList;


//    public void InitColorTip()
//    {
//        //������ṩ����ʾ��ɫת����V3�б�
//        for (int i = 0; i < mixBools.Length; i++)
//        {
//            if (mixBools[i]) {
//                colorList.Add(ColorManager._Instance.TryGetMonoChrome(i).colorRGB);
//            }
//        }

//        //����V3�б�����ʽ������ɫ��ֵ
//        for (int i = 0; i < mixNum; i++)
//        {
//            imges[i].color = new Color(colorList[i].x, colorList[i].y, colorList[i].z, 1f);
//        }

//        //����ʽ�Ҳ�Ľ����ɫ��ֵ
//        MyColor mc = ColorManager._Instance.TryGetColor(mixBools);
//        hex = mc.colorHEX;
//        imges[mixNum].color = new Color(mc.colorRGB.x, mc.colorRGB.y, mc.colorRGB.z, 1f);
//    }
//}
