//=============================================================================
//
//		背景画像の処理	[ background.js ]
//		author	:	KOICHI HIROYAMA
//
//=============================================================================


//=========================================================
//	背景生成
//=========================================================
function CreateBackground(scene){

	// 背景の生成
	background = new Sprite(BACKGROUND_WIDTH, BACKGROUND_HEIGHT);

	// プロパティの設定
	background.x = background.y = 0;					// Sprite の左上の x, y 座標を指定
	background.image = game.assets[TEXNAME_BACKGROUND]	// bg.png を指定


	// 背景のスクロール処理
	background.onenterframe = function() {
		// スクロール
		this.x -= 0.5;

		// 端まで行ったら戻す
		if ( this.x <= -( BACKGROUND_WIDTH - SCREEN_WIDTH ) ) {
			background.moveTo(0, 0);
		}
	};

	// シーンへの登録
	scene.addChild(background);
}


/* End of File */