import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScoreManager')
export class ScoreManager extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    public Init(): void {

    }
}


// public class ScoreManager : ManagerBase<ScoreManager>
// {
//     public void Init()
//     {
//         GameEventManager._Instance.RegisterEventListener("InitAllEvent", () =>
//         {
//             //��ʼ����������
//             GameEventManager._Instance.RegisterEventListener("InitAllData", InitScore);

//             ////�ı����
//             //GameEventManager._Instance.RegisterEventListener("Score+5", ()=>
//             //{
//             //    ChangeScore(5);
//             //});
//         });
//     }

//     #region ������صĵ��ú���
//     /// <summary>
//     /// �����������ݵĳ�ʼ��
//     /// </summary>
//     public void InitScore()
//     {
//         SystemScore._Instance.InitScore();
//     }

//     /// <summary>
//     /// �ı����
//     /// </summary>
//     /// <param name="value"></param>
//     public void ChangeScore(int value)
//     {
//         SystemScore._Instance.AddScore(value);
//     }
//     #endregion
// }

