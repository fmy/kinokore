﻿//=============================================================================
//
//		山の処理	[ mountain.js ]
//		author		:		KOICHI HIROYAMA
//
//=============================================================================

//=========================================================
//	定数定義
//=========================================================
var MOUNTAIN_WIDTH			= 1320;					// 山の幅
var MOUNTAIN_HEIGHT			= 60;					// 山の高さ
var MOUNTAIN_SCROLLSPEED	= 0.3;					// 山のスクロールスピード
var TEXNAME_MOUNTAIN		= 'img/mountain.png';	// テクスチャ

//=========================================================
// 山の処理
//=========================================================
function CreateMountain( scene ) {
	// 山の生成
	mountain = new Sprite( MOUNTAIN_WIDTH, MOUNTAIN_HEIGHT );

	// プロパティの設定
	mountain.x = mountain.y = 0;						// Sprite の左上の x, y 座標を指定
	mountain.image = game.assets[ TEXNAME_MOUNTAIN ]	// background.png を指定
	mountain.moveTo( 0, 100 );

	// 山のスクロール処理
	mountain.onenterframe = function() {
		// スクロール
		this.x -= MOUNTAIN_SCROLLSPEED;

		// 端まで行ったら戻す
		if ( this.x <= -( MOUNTAIN_WIDTH - SCREEN_WIDTH ) ) {
			mountain.moveTo(0, 0);
		}
	};

	// シーンへの登録
	scene.addChild( mountain );
}

/* End of File */
