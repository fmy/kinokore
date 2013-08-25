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
var TIMER_DIGIT = 2;        // タイマーの数字の桁数
var TEXNAME_TIMER = 'img/time.png'

//タイマー生成とか更新とか
function CreateTimer(scene) {

    //変数宣言
    var timerLogo = new Sprite(64, 16);
    timerLogo.x = 236;    // Sprite の左上のx座標を指定
    timerLogo.y = 10;               // Sprite の左上のy座標を指定
    timerLogo.width = 64;
    timerLogo.height = 16;
    timerLogo.scaleX = 1.5;
    timerLogo.scaleY = 1.5;
    timerLogo.image = game.assets[TEXNAME_TIMER]; // 画像を指定

    scene.addChild(timerLogo);

    var timer = new Array();    //タイマーの数字の配列
    var nCntTime = 0;           //タイマーカウント

    for (var i = 0; i < TIMER_DIGIT; i++) {

        timer[i] = new Sprite(16, 16);
        timer[i].x = 260 + (i * 32);    // Sprite の左上のx座標を指定
        timer[i].y = 40;               // Sprite の左上のy座標を指定
        timer[i].width = 16;
        timer[i].height = 16;
        timer[i].scaleX = 2.0;
        timer[i].scaleY = 2.0;

        timer[i].image = game.assets[TEXNAME_NUMBER]; // 画像を指定
        timer[i].frame = i;

        scene.addChild(timer[i]);
    }

    timer[0].addEventListener('enterframe', function (e) {
        // タイマー更新
        if (game._activated) {
            nCntTime++;
            var time = PLAY_TIME - Math.floor(nCntTime / game.fps);
            for (var i = TIMER_DIGIT - 1; i >= 0; i--) {
                timer[i].frame = time % 10;
                time /= 10;
            }
        }
    });
}

//End of File...