enchant();

//=========================================================
//  定数定義
//=========================================================
/*----- 画面 -----*/
var PLAY_TIME           = 30;
var SCREEN_WIDTH    	= 320;      // 画面の幅
var SCREEN_HEIGHT   	= 480;      // 画面の高さ
var TEXNAME_NUMBER      = 'img/number2.png';
var TEXNAME_START       = 'img/start.png';
var TEXNAME_END         = 'img/end.png';

window.onload = function() {
    game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);
    game.fps = 24;
    game.preload([TEXNAME_PLAYER, TEXNAME_BACKGROUND, TEXNAME_TREE, TEXNAME_ROAD,
        TEXNAME_NUMBER, TEXNAME_START, TEXNAME_END, TEXNAME_TITLE, TEXNAME_TITLESTRING]);
    for (var i = 0; i < DATA.length; i++) {
        game.preload(DATA[i].img);
    }
    //プリロードする画像を相対パスで指定

    game.onload = function() {
    // プリロード終了後に呼ばれる関数を指定する
        game.replaceScene(startTitleScene());
    }
    game.start();
    // プリロードをスタート
}

// 引数 num を受け取って、0 から (num - 1) までの乱数を返す関数
function rand(num){
    return Math.floor(Math.random() * num);
}