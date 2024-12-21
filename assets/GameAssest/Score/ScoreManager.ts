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
//             //初始化分数数据
//             GameEventManager._Instance.RegisterEventListener("InitAllData", InitScore);

//             ////改变分数
//             //GameEventManager._Instance.RegisterEventListener("Score+5", ()=>
//             //{
//             //    ChangeScore(5);
//             //});
//         });
//     }

//     #region 分数相关的调用函数
//     /// <summary>
//     /// 分数方面数据的初始化
//     /// </summary>
//     public void InitScore()
//     {
//         SystemScore._Instance.InitScore();
//     }

//     /// <summary>
//     /// 改变分数
//     /// </summary>
//     /// <param name="value"></param>
//     public void ChangeScore(int value)
//     {
//         SystemScore._Instance.AddScore(value);
//     }
//     #endregion
// }

