import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('OrderManager')
export class OrderManager extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }
}









// using UnityEngine;

// public class OrderManager : ManagerBase<OrderManager>
// {
//     public void Init()
//     {
//         GameEventManager._Instance.RegisterEventListener("InitAllEvent", () =>
//         {
//             //初始化订单数据
//             GameEventManager._Instance.RegisterEventListener("InitAllData", InitOrder);

//             //检测玩家提交订单和系统生成的订单
//             GameEventManager._Instance.RegisterEventListener("UploadOrder", CheckOrder);

//             //增加玩家提交的颜色
//             //GameEventManager._Instance.RegisterEventListener<MyColor>("UploadColor", AddPlayerColor);
//         });
//     }

//     #region 订单相关的调用函数
//     /// <summary>
//     /// 订单方面数据的初始化
//     /// </summary>
//     public void InitOrder()
//     {
//         SystemOrder._Instance.ClearPlayerDate();
//     }

//     /// <summary>
//     /// 检测玩家提交订单的正确数量并更新分数
//     /// </summary>
//     public void CheckOrder()
//     {
//         int score = 0;
//         foreach (MyColor c in SystemOrder._Instance.nowColorOrder)
//         {
//             foreach (MyColor p in SystemOrder._Instance.playerColorOrder)
//             {
//                 Debug.Log("check: " + c.colorHEX + ", " +  p.colorHEX);
//                 if (c == p)
//                 {
//                     //正确一个爪子+5，否则就不加
//                     //GameEventManager._Instance.EventTrigger("Score+5");
//                     score += 5;
//                     break;
//                 }
//             }
//         }
//         ScoreManager._Instance.ChangeScore(score);
//         //生成新的订单
//         GameEventManager._Instance.EventTrigger("UpdateOrderSystem");
//     }

//     /// <summary>
//     /// 更新玩家提交颜色列表
//     /// </summary>
//     /// <param name="playerColor"></param>
//     public void AddPlayerColor(MyColor GiveOrder)
//     {
//         SystemOrder._Instance.playerColorOrder.Add(GiveOrder);
//     }

//     #endregion
// }