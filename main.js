enchant();

//=========================================================
//  定数定義
//=========================================================
/*----- 画面 -----*/
var SCREEN_WIDTH    	= 320;      // 画面の幅
var SCREEN_HEIGHT   	= 480;      // 画面の高さ

/*----- 背景 -----*/
var BACKGROUND_WIDTH	= 1320;	    // 背景画像の幅
var BACKGROUND_HEIGHT	= 480;	    // 背景画像の高さ

/*----- テクスチャ -----*/
var TEXNAME_PLAYER      = 'img/chara1.gif'; // プレイヤー
var TEXNAME_BANANA      = 'img/icon0.gif';  // バナナアイコン
var TEXNAME_BACKGROUND  = 'img/bg.png';     // 背景
var PLAYER_SIZE         = 32; // プレイヤー

//佐野 - ひとまず置いておく
var bShowUI = false;

window.onload = function() {
    game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);
    game.fps = 24;
    game.preload(['img/chara1.gif','img/icon0.gif','img/bg.png','img/bg-load.png',
        'img/shiitake.png','img/dokukinoko.png','img/enoki.png','img/matsutake.png', 'img/number.png']);
    //プリロードする画像を相対パスで指定

    game.onload = function() {
    // プリロード終了後に呼ばれる関数を指定する

        // ここから、クマのキャラクターを表示する処理
        bear = new Sprite(PLAYER_SIZE, PLAYER_SIZE);  // Sprite オブジェクトを生成
        bear.x = (SCREEN_WIDTH - PLAYER_SIZE) / 2;    // Sprite の左上のx座標を指定
        bear.y = 380;               // Sprite の左上のy座標を指定
        bear.width = PLAYER_SIZE;
        bear.height = PLAYER_SIZE;

        bear.image = game.assets['img/chara1.gif']; // 画像を指定
        bear.frame = 0;
        // 「chara1.gif」を32x32の格子で切り取ったのち、0番目(=左上)のものを用いる
        // ゲーム中に frame の値を操作することで、アニメーションを表現できる

		// 背景の生成
		CreateBackground();

        load = new Sprite(SCREEN_WIDTH, 400);
        load.image = game.assets['img/bg-load.png']; // 画像を指定
        load.frame = 0;
        load.x = 0;
        load.y = 80;

        // タッチしたときにクマを移動させる
        game.rootScene.addEventListener('touchstart', function(e){
            bear.x = e.localX
        });

        // タッチ座標が動いたときにクマを移動させる
        game.rootScene.addEventListener('touchmove', function(e){
            bear.x = e.localX
        });

        game.score = 0;

        game.rootScene.addEventListener('enterframe',function(){
        if (bShowUI == false && game._activated) {
                bShowUI = true;
                //佐野が追加
                //タイマー生成
                CreateTimer();
                //スコア生成
                CreateScore();
            }
            if(game.frame % 20 == 0){
                // 6フレームごとにバナナを増やす関数を実行
                addKinoko();
            }
            if(game.rootScene.age > game.fps * 20){
                game.end(game.score, game.score + " 本のバナナを取りました!");
                // 結果を表示 (スコア, 結果のテキストの順で)
            }
        });

        game.rootScene.addChild(load);
        game.rootScene.addChild(bear);

    }
    game.start();
    // プリロードをスタート
}

// 引数 num を受け取って、0 から (num - 1) までの乱数を返す関数
function rand(num){
    return Math.floor(Math.random() * num);
}