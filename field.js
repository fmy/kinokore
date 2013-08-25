//=============================================================================
//
//		地面の処理	[ field.js ]
//		author	:	KOICHI HIROYAMA
//
//=============================================================================

//=========================================================
//	定数定義
//=========================================================
var FIELD_WIDTH		= SCREEN_WIDTH;		// 画像の幅
var FIELD_HEIGHT	= 320;	   		 	// 画像の高さ
var TEXNAME_FIELD  	= 'img/road2.png';	// テクスチャ

//=========================================================
//	地面生成
//=========================================================
function CreateField( scene ) {

	// 地面の生成
	field = new Sprite( FIELD_WIDTH, FIELD_HEIGHT );

	// プロパティの設定
	field.x = field.y = 0;						// Sprite の左上の x, y 座標を指定
	field.image = game.assets[ TEXNAME_FIELD ];	// テクスチャの指定
	field.moveTo( 0, 160 );

	// 石の生成処理
	field.onenterframe = function() {
		
	};

	// シーンへの登録
	scene.addChild( field );
}

/* End of File */
