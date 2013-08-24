﻿//=============================================================================
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
}

/* End of File */
