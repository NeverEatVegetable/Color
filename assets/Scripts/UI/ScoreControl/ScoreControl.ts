import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScoreControl')
export class ScoreControl extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }
}


//using TMPro;
//using UnityEngine;

//public class ScoreControl : MonoBehaviour
//{
//    public TextMeshProUGUI scoreText;

//    private void Start()
//    {
//        GameEventManager._Instance.RegisterEventListener("InitAllEvent", () => {
//            GameEventManager._Instance.RegisterEventListener("InitAllData", () => {
//                scoreText.text = "0";
//            });
//        });
//    }
//    private void Update()
//    {
//        scoreText.text = SystemScore._Instance.nowScore + "";
//    }
//}
