enchant();

//=========================================================
//  定数定義
//=========================================================
/*----- 画面 -----*/
var SCREEN_WIDTH    	= 320;      // 画面の幅
var SCREEN_HEIGHT   	= 480;      // 画面の高さ

/*----- 背景 -----*/
var BACKGROUND_WIDTH	= 1320;	    // 背景画像の幅
var BACKGROUND_HEIGHT	= 80;	    // 背景画像の高さ

/*----- テクスチャ -----*/
var TEXNAME_PLAYER      = 'img/chara1.gif';		// プレイヤー
var TEXNAME_BACKGROUND  = 'img/background.png'; // 背景
var PLAYER_SIZE         = 32; // プレイヤー

//佐野 - ひとまず置いておく
var bShowUI = false;

window.onload = function() {
    game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);
    game.fps = 24;
    game.preload(['img/chara1.gif','img/icon0.gif','img/background.png','img/bg.png','img/bg-load.png',
        'img/shiitake.png','img/dokukinoko.png','img/enoki.png','img/matsutake.png', 'img/number.png']);
    //プリロードする画像を相対パスで指定

    game.onload = function() {
    // プリロード終了後に呼ばれる関数を指定する
        var scene = new Scene();
        scene.image = game.assets['img/start.png'];
        scene.addEventListener('touchend', function() {
            game.replaceScene(startGameScene()); // startEndScene()に変える
        });
        game.replaceScene(scene);
    }
    game.start();
    // プリロードをスタート
}

// 引数 num を受け取って、0 から (num - 1) までの乱数を返す関数
function rand(num){
    return Math.floor(Math.random() * num);
}