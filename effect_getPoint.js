//===============================================================================
// File
//	ファイル名	：effect_getPoint.js
//	内容		：得点ゲットのエフェクト処理
//
// Author
//	所属	    ：HAL東京ゲーム制作学科
//	名前　　　　：佐野槙哉
//===============================================================================//

//定数定義
var POINT_DIGHT = 3;
var NUMBER_WIDTH = 16;
var NUMBER_HEIGHT = 16;

//エフェクト生成とか更新とか
function SetEffectPoint(scene, posX, posY, point) {

    //変数宣言
    var workPoint = point;

    //各数字の生成
    for (var i = 0; i < POINT_DIGHT; i++) {

        var number = new Sprite(16, 16);
        number.x = (posX + NUMBER_WIDTH + (NUMBER_WIDTH / 2)) - (i * (NUMBER_WIDTH - 4));
        number.y = posY - 10;
        number.width = 16;
        number.height = 16;
        number.scaleX = 0.8;
        number.scaleY = 1.0;

        number.image = game.assets['img/number2.png']; // 画像を指定
        //数字を割り当て
        number.frame = workPoint % 10;
        workPoint /= 10;
        console.log(number.frame);

        scene.addChild(number);

        //更新
        number.addEventListener('enterframe', function (e) {
            //位置更新とスケールかアルファ更新
            this.y -= 5;
            if (this.y <= 300) {
                scene.removeChild(this);
            }
        });
    }
}

//End of File...