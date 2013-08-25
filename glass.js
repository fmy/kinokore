//=============================================================================
//
//    木の処理
//    author    :   KOICHI HIROYAMA
//
//=============================================================================

//=========================================================
//  定数定義
//=========================================================
var GLASS_WIDTH    = 32;
var GLASS_HEIGHT   = 32;
var TEXNAME_GLASS  = 'img/glass.png';

//=========================================================
//  木の処理
//=========================================================
function addGlass(scene, left) {
  // 木を生成
  var glass = new Sprite(GLASS_WIDTH, GLASS_HEIGHT);

  // 木を道の左と右どちらに表示するかを決める
  if(left){ // 左の場合
    glass.x = 30;
  }else{  // 右の場合
    glass.x = SCREEN_WIDTH - 30 - GLASS_WIDTH;
  }

  // プロパティを設定
  glass.y    = BACKGROUND_HEIGHT - GLASS_HEIGHT;
  glass.grad = (glass.x + GLASS_WIDTH/2 - SCREEN_WIDTH/2) / (SCREEN_HEIGHT - BACKGROUND_HEIGHT);
  glass.image  = game.assets[TEXNAME_GLASS];

  glass.frame = 0;

  glass.addEventListener( 'enterframe', function( e ) {
    switch( glass.frame ) {
      case 3:
        this.y += 4;        // y座標を増やす (落下)
        this.x += this.grad * 4;  // x座標を増やす（横に移動）

        // スケールを増加
        if (game.frame % 4 == 0) {
          this.scaleX += 0.0125;
          this.scaleY += 0.0125;
        }
        break;

      case 0:
      case 1:
      case 2:
        // 4フレームに1回フレームを更新
        if (game.frame % 2 == 0) {
          glass.frame += 1;
        }
        break; 
    }
  });

  // ゲームシーンに登録
  scene.addChild(glass);
}

/* End of File */

