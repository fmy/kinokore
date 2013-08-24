//=============================================================================
//
//		木の処理
//		author		:		KOICHI HIROYAMA
//
//=============================================================================

//=========================================================
//	定数定義
//=========================================================
var TREE_WIDTH		= 32;
var TREE_HEIGHT		= 64;
var TEXNAME_TREE	= 'img/tree.png';

//=========================================================
//	木の処理
//=========================================================
function addTree(scene) {
	// 木を生成
	var tree = new Sprite(TREE_WIDTH, TREE_HEIGHT);

	// 木を道の左と右どちらに表示するかを決める
	if(rand(2)){	// 左の場合
		tree.x = 30;
	}else{	// 右の場合
		tree.x = SCREEN_WIDTH - 30 - TREE_WIDTH;
	}

	// プロパティを設定
	tree.y		= BACKGROUND_HEIGHT - TREE_HEIGHT;
	tree.grad	= (tree.x + TREE_WIDTH/2 - SCREEN_WIDTH/2) / (SCREEN_HEIGHT - BACKGROUND_HEIGHT);
	tree.image	= game.assets[TEXNAME_TREE];

	tree.frame = 0;

	tree.addEventListener( 'enterframe', function( e ) {
		switch( tree.frame ) {
			case 3:
				this.y += 4; 				// y座標を増やす (落下)
				this.x += this.grad * 4;	// x座標を増やす（横に移動）

				// スケールを増加
				if (game.frame % 4 == 0) {
					this.scaleX += 0.01;
					this.scaleY += 0.01;
				}
				break;

			case 0:
			case 1:
			case 2:
				// 4フレームに1回フレームを更新
				if (game.frame % 4 == 0) {
					tree.frame += 1;
				}
				break; 
		}
	});

	// ゲームシーンに登録
	scene.addChild(tree);
}

/* End of File */

