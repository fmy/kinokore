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
var GAME_LIMIT_TIME = 30;   // ゲームのリミットタイム
var TIMER_DIGIT = 2;        // タイマーの数字の桁数

//タイマー生成とか更新とか
function CreateTimer(scene) {

    //変数宣言
    var timer = new Array();    //タイマーの数字の配列
    var nCntTime = 0;           //タイマーカウント

    for (var i = 0; i < TIMER_DIGIT; i++) {

        timer[i] = new Sprite(16, 16);
        timer[i].x = 250 + (i * 16);    // Sprite の左上のx座標を指定
        timer[i].y = 10;               // Sprite の左上のy座標を指定
        timer[i].width = 16;
        timer[i].height = 16;

        timer[i].image = game.assets[TEXNAME_NUMBER]; // 画像を指定
        timer[i].frame = i;

        scene.addChild(timer[i]);
    }

    timer[0].addEventListener('enterframe', function (e) {
        // タイマー更新
        if (game._activated) {
            nCntTime++;
            var time = GAME_LIMIT_TIME - Math.floor(nCntTime / game.fps);
            for (var i = TIMER_DIGIT - 1; i >= 0; i--) {
                timer[i].frame = time % 10;
                time /= 10;
            }
        }
    });

   /* --- 以前のテキスト表示のタイマー ---
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
    */
}

//End of File...