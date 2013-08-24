//=============================================================================
//
//		背景画像の処理	[ background.js ]
//		author	:	KOICHI HIROYAMA
//
//=============================================================================


//=========================================================
//	背景生成
//=========================================================
function CreateBackground(){

	// 背景の生成
        background = new Sprite(BACKGROUND_WIDTH, BACKGROUND_HEIGHT);	// 320x1320 サイズの Sprite オブジェクトを生成
        background.x = background.y = 0;    				// Sprite の左上の x, y 座標を指定
        background.image = game.assets[TEXNAME_BACKGROUND] // bg.png を指定


		background.onenterframe = function() {
            // スクロール
            this.x -= 4;

 	    // 端まで行ったら戻す
            if ( this.x <= -( BACKGROUND_WIDTH - SCREEN_WIDTH ) ) {
                background.moveTo(0, 0);
            }
        };
        

		// シーンへの登録
		game.rootScene.addChild(background);
}


/* End of File */