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

//    #region ���ú���

//    /// <summary>
//    /// ���ӷ���
//    /// </summary>
//    /// <param name="score"></param>
//    public void AddScore(int score)
//    {
//        addScore = score;
//        nowScore += score;
//    }

//    /// <summary>
//    /// ��������
//    /// </summary>
//    /// <returns></returns>
//    public void InitScore()
//    {
//        nowScore = 0;
//    }

//    #endregion

//}
