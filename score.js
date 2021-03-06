﻿//===============================================================================
// File
//	ファイル名	：score.js
//	内容		：スコア処理
//
// Author
//	所属	    ：HAL東京ゲーム制作学科
//	名前　　　　：佐野槙哉
//===============================================================================//

//定数定義
var SCORE_LIMIT = 99999;    // ゲームのリミットタイム
var SCORE_DIGIT = 5;        // スコアの桁数
var TEXNAME_SCORE = 'img/score.png'

//スコア生成とか更新とか
function CreateScore(scene) {

    var scoreLogo = new Sprite(80, 16);
    scoreLogo.x = 20;    // Sprite の左上のx座標を指定
    scoreLogo.y = 10;               // Sprite の左上のy座標を指定
    scoreLogo.width = 80;
    scoreLogo.height = 16;
    scoreLogo.scaleX = 1.5;
    scoreLogo.scaleY = 1.5;
    scoreLogo.image = game.assets[TEXNAME_SCORE]; // 画像を指定

    scene.addChild(scoreLogo);

    //変数宣言
    var score = new Array();    //スコアの数字画像

    //各数字の初期化
    for (var i = 0; i < SCORE_DIGIT; i++) {

        score[i] = new Sprite(16, 16);
        score[i].x = 10 + (i * 32);   
        score[i].y = 40;             
        score[i].width = 16;
        score[i].height = 16;
        score[i].scaleX = 2.0;
        score[i].scaleY = 2.0;

        score[i].image = game.assets[TEXNAME_NUMBER]; // 画像を指定
        score[i].frame = i;

        scene.addChild(score[i]);
    }

    //スコア更新
    score[0].addEventListener('enterframe', function (e) {
        // ゲーム開始中だったら更新
        if (game._activated) {
            var workScore = game.score;     //ワークにスコア保存
            if (workScore > SCORE_LIMIT) {  //最大値超えてないかチェック
                workScore = SCORE_LIMIT;
            }
            //各桁に数字を割り当て
            for (var i = SCORE_DIGIT - 1; i >= 0; i--) {
                score[i].frame = workScore % 10;
                workScore /= 10;
            }
        }
    });
}

//End of File...