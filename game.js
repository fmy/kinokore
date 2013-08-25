var TEXNAME_PLAYER      = 'img/player.png';     // プレイヤー
var PLAYER_SIZE         = 48; // プレイヤー

function startGameScene() {
    var scene = new Scene();
    var bShowUI = false;
    // ここから、クマのキャラクターを表示する処理
    player = new Sprite(PLAYER_SIZE, PLAYER_SIZE);  // Sprite オブジェクトを生成
    player.x = (SCREEN_WIDTH - PLAYER_SIZE) / 2;    // Sprite の左上のx座標を指定
    player.y = 380;               // Sprite の左上のy座標を指定
    player.width = PLAYER_SIZE;
    player.height = PLAYER_SIZE;

    player.image = game.assets[TEXNAME_PLAYER]; // 画像を指定
    player.frame = 0;
    // 「chara1.gif」を32x32の格子で切り取ったのち、0番目(=左上)のものを用いる
    // ゲーム中に frame の値を操作することで、アニメーションを表現できる

    // 背景の生成	----- 廣山が追加 ----- 
	CreateField( scene );
    CreateBackground( scene );
	CreateMountain( scene );

    // タッチしたときにクマを移動させる
    scene.addEventListener('touchstart', function(e){
        if (e.localX > PLAYER_SIZE/2 && e.localX < SCREEN_WIDTH - PLAYER_SIZE/2) {
            player.x = e.localX - PLAYER_SIZE/2;
        }
    });

    // タッチ座標が動いたときにクマを移動させる
    scene.addEventListener('touchmove', function(e){
        if (e.localX > PLAYER_SIZE/2 && e.localX < SCREEN_WIDTH - PLAYER_SIZE/2) {
            if (e.localX - PLAYER_SIZE/2 > player.x) {
                player.scaleX = -1;
            } else {
                player.scaleX = 1;
            }
            player.x = e.localX - PLAYER_SIZE/2;
        }
    });

    // ←ボタン
    scene.addEventListener(Event.LEFT_BUTTON_DOWN, function(e) {
        if (player.x > PLAYER_SIZE/2) {
            player.x -= 10;
            player.scaleX = 1;
        }
    });

    // →ボタン
    scene.addEventListener(Event.RIGHT_BUTTON_DOWN, function(e) {
        if (player.x < SCREEN_WIDTH - PLAYER_SIZE/2) {
            player.x += 10;
            player.scaleX = -1;
        }
    });
    game.score = 0;

    scene.addEventListener('enterframe',function(){
    if (bShowUI == false && game._activated) {
            bShowUI = true;
            //佐野が追加
            //タイマー生成
            CreateTimer(scene);
            //スコア生成
            CreateScore(scene);
        }
        if(game.frame % 20 == 0){
            // 20フレームごとにキノコを増やす関数を実行
            addKinoko(scene);
        }
        if (game.frame % 40 == 10) {
            addTree(scene, true); // 左
        }
        if (game.frame % 40 == 30) {
            addTree(scene, false); // 右
        }
        if (game.frame % 40 == 0) {
            addGlass(scene, true); // 左
        }
        if (game.frame % 40 == 20) {
            addGlass(scene, false); // 右
        }
		// 25フレームごとに石を生成　廣山が追加
		if( game.frame % 25 == 0 ) {
			AddStone( scene );
		}
        if (game.frame % 4 == 0) {
            player.frame++;
        }
        if (scene.age > game.fps * PLAY_TIME) {
            game.replaceScene(startResultScene());
            // 結果を表示 (スコア, 結果のテキストの順で)
        }
        
        //デバッグ用－Resultへ飛びます
	if (game.input.up)
        {
            game.replaceScene(startResultScene());
	}
    });

    scene.addChild(player);
    var dash = SetEffectDash(scene);
    return scene;
}