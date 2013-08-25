//=============================================================================
//
//		石の処理	[ stone.js ]
//		author		:		KOICHI HIROYAMA
//
//=============================================================================

//=========================================================
//	定数定義
//=========================================================
var STONE_SIZE		= 16;				// 石の大きさ
var TEXNAME_STONE	= 'img/stone.png';	// テクスチャ

//=========================================================
//	石の生成
//=========================================================
function AddStone( scene ) {
	// 石を生成
	var stone = new Sprite( STONE_SIZE, STONE_SIZE );

	// プロパティを設定
	stone.x		= SCREEN_WIDTH / 4 + rand( SCREEN_WIDTH/2 - STONE_SIZE );
	stone.y		= BACKGROUND_HEIGHT - STONE_SIZE;
	stone.grad	= (tree.x + STONE_SIZE/2 - SCREEN_WIDTH/2) / (SCREEN_HEIGHT - BACKGROUND_HEIGHT);
	stone.image	= TEXNAME_STONE;

	stone.frame = 0;

	// 石を下に流す
	stone.addEventListener( 'enterframe', function( e ) {
		this.y += 4; 				// y座標を増やす (落下)
		this.x += this.grad * 4;	// x座標を増やす（横に移動）

		// スケールを増加
		if (game.frame % 4 == 0) {
			this.scaleX += 0.0125;
			this.scaleY += 0.0125;
		}
	});

	// ゲームシーンに登録
	scene.addChild( stone );
}

/* End of File */

