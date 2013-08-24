//===============================================================================
// File
//	ファイル名	：timer.js
//	内容		：タイマー処理
//
// Author
//	所属	    ：HAL東京ゲーム制作学科
//	名前　　　　：佐野槙哉
//===============================================================================//

//定数定義
var GAME_LIMIT_TIME = 30; // ゲームのリミットタイム

//タイマー生成とか更新とか
function CreateTimer() {
    // タイマーラベルを生成, 表示
    var timerLabel = new Label();
    var nCntTime = 0;
    game.rootScene.addChild(timerLabel);
    timerLabel.x = 250;
    timerLabel.y = 10;
//    timerLabel.moveTo(250, 10);
    timerLabel.color = "white";
    timerLabel.font = "11px 'Consolas', 'Monaco', 'ＭＳ ゴシック'";
    timerLabel.text = "Timer : ";

    timerLabel.addEventListener('enterframe', function (e) {
        // タイマー更新
        if (game._activated) {
            nCntTime++;
            var time = GAME_LIMIT_TIME - Math.floor(nCntTime / game.fps);
            timerLabel.text = "Timer : " + time;
            if (time < 10) {
                timerLabel.color = "red";
            }
        }
    });
}

//End of File...