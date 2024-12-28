import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SystemScore')
export class SystemScore extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }
}


//using UnityEngine;

//[CreateAssetMenu(fileName = "SystemScore", menuName = "MySO/SystemScore")]
//public class SystemScore: SingleScriptableObject<SystemScore>
//{
//    public int nowScore;
//    public int addScore;

//    private void OnEnable()
//    {
//        InitScore();
//    }

//    #region 调用函数

//    /// <summary>
//    /// 增加分数
//    /// </summary>
//    /// <param name="score"></param>
//    public void AddScore(int score)
//    {
//        addScore = score;
//        nowScore += score;
//    }

//    /// <summary>
//    /// 分数清零
//    /// </summary>
//    /// <returns></returns>
//    public void InitScore()
//    {
//        nowScore = 0;
//    }

//    #endregion

//}
