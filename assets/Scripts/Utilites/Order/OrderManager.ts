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
//             //��ʼ����������
//             GameEventManager._Instance.RegisterEventListener("InitAllData", InitOrder);

//             //�������ύ������ϵͳ���ɵĶ���
//             GameEventManager._Instance.RegisterEventListener("UploadOrder", CheckOrder);

//             //��������ύ����ɫ
//             //GameEventManager._Instance.RegisterEventListener<MyColor>("UploadColor", AddPlayerColor);
//         });
//     }

//     #region ������صĵ��ú���
//     /// <summary>
//     /// �����������ݵĳ�ʼ��
//     /// </summary>
//     public void InitOrder()
//     {
//         SystemOrder._Instance.ClearPlayerDate();
//     }

//     /// <summary>
//     /// �������ύ��������ȷ���������·���
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
//                     //��ȷһ��צ��+5������Ͳ���
//                     //GameEventManager._Instance.EventTrigger("Score+5");
//                     score += 5;
//                     break;
//                 }
//             }
//         }
//         ScoreManager._Instance.ChangeScore(score);
//         //�����µĶ���
//         GameEventManager._Instance.EventTrigger("UpdateOrderSystem");
//     }

//     /// <summary>
//     /// ��������ύ��ɫ�б�
//     /// </summary>
//     /// <param name="playerColor"></param>
//     public void AddPlayerColor(MyColor GiveOrder)
//     {
//         SystemOrder._Instance.playerColorOrder.Add(GiveOrder);
//     }

//     #endregion
// }