import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('OrderControl')
export class OrderControl extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }
}


//using System.Collections.Generic;
//using UnityEngine;
//using UnityEngine.UI;

//public class OrderControl : MonoBehaviour
//{
//    public Image[] imges;
//    MyColor color;
//    public List < Vector3 > colorList;

//    private void Start()
//    {
//        GameEventManager._Instance.RegisterEventListener("InitAllEvent", () => {
//            GameEventManager._Instance.RegisterEventListener("InitAllData", () => {
//                SystemOrder._Instance.RandomOrder();
//                UpdateOrder();
//            });

//            GameEventManager._Instance.RegisterEventListener("UpdateOrderSystem", () => {
//                SystemOrder._Instance.RandomOrder();
//                UpdateOrder();
//            });
//        });

//        //SystemOrder._Instance.RandomOrder();
//        //UpdateOrder();
//    }

//    /// <summary>
//    /// 更新订单界面
//    /// </summary>
//    public void UpdateOrder()
//    {
//        for (int i = 0; i < imges.Length; i++)
//        {
//            color = SystemOrder._Instance.nowColorOrder[i];
//            imges[i].color = new Color(color.colorRGB.x, color.colorRGB.y, color.colorRGB.z);
//            colorList.Add(color.colorRGB);
//        }
//    }
//}
