//===============================================================================
// File
//	ファイル名	：score.js
//	内容		：スコア処理
//
// Author
//	所属	    ：HAL東京ゲーム制作学科
//	名前　　　　：佐野槙哉
//===============================================================================//

//定数定義
var SCORE_LIMIT = 99999; // ゲームのリミットタイム

//スコア生成とか更新とか
function CreateScore() {
    // スコアラベルを生成, 表示
    var scoreLabel = new Label();
    game.rootScene.addChild(scoreLabel);
    scoreLabel.x = 10;
    scoreLabel.y = 10;
//    scoreLabel.moveTo(250, 10);
    scoreLabel.color = "white";
    scoreLabel.font = "11px 'Consolas', 'Monaco', 'ＭＳ ゴシック'";
    scoreLabel.text = "Score : ";

    scoreLabel.addEventListener('enterframe', function (e) {
        //スコア更新
        if (game.score < SCORE_LIMIT) {
            scoreLabel.text = "Score : " + game.score;
        }
        else {
            scoreLabel.text = "Score : " + SCORE_LIMIT;
        }
    });
}

//End of File...