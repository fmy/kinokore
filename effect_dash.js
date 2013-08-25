//===============================================================================
// File
//	ファイル名	：effect_dash.js
//	内容		：プレイヤーが走るエフェクト処理
//
// Author
//	所属	    ：HAL東京ゲーム制作学科
//	名前　　　　：佐野槙哉
//===============================================================================//

//定数定義
var TEXNAME_EFFECTDASH = 'img/dash.png'

//エフェクト生成とか更新とか
function SetEffectDash(scene) {

    var dash = new Sprite(80, 80);
    var nCntFrame = 0;
    dash.x = player.x - 10;
    dash.y = player.y + 5;
    dash.width = 80;
    dash.height = 80;
    dash.scaleX = 0.5;
    dash.scaleY = 0.5;

    dash.image = game.assets[TEXNAME_EFFECTDASH]; // 画像を指定
    dash.frame = 0;

    scene.addChild(dash);

    //更新
    dash.addEventListener('enterframe', function (e) {
        //位置更新とスケールかアルファ更新
        this.y += 6;
        this.scaleX -= 0.05;
        this.scaleY -= 0.05;
        nCntFrame++;
        if (nCntFrame % 1 == 0) {
            this.frame++;
            if (this.frame >= 8) {
                this.frame = 0;
                this.scaleX = 0.5;
                this.scaleY = 0.5;
                this.x = player.x - 10;
                this.y = player.y + 5;
            }
        }
    });
}

//End of File...