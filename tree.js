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
function AddTree() {
	// 木を生成
	var tree = new Sprite( TREE_WIDTH, TREE_HEIGHT );
	
	// ランダムで数字を生成
	var i = rand( 1 );

	// 木を道の左と右どちらに表示するかを決める
	if( i = 0 ){	// 左の場合
		tree.x = rand( 170 - TREE_WIDTH );
	}else{	// 右の場合
		tree.x = SCREEN_WIDTH - rand( 170 - TREE_WIDTH );
	}

	// プロパティを設定
	tree.y		= 80 - TREE_HEIGHT * 0.75;
	tree.grad	= ( tree.x - 160 ) / 400;
	tree.image	= TEXNAME_TREE;
	tree.scaleX	= 0.5;
	tree.scaleY	= 0.5;

	tree.frame = 0;

	tree.addEventListener( 'enterframe', function( e ) {
		switch( tree.frame ) {
			case 3:
				this.y += 4; // y座標を増やす (落下)
				this.x += this.grad * 4;
				if (game.frame % 4 == 0) {
				this.scaleX += 0.005;
				this.scaleY += 0.005;
				break;

			case 0:
			case 1:
			case 2:
				break;

		}
	} );
}

/* End of File */

