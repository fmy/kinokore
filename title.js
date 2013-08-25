//----------------------------------------------//
//                Title Scene                   //
//             This class makes titlescene.     //
//           by S.Yamaguchi                     //
//----------------------------------------------//

var TEXNAME_LOGO = 'img/logo.png';
var TITLE_SIZE = 300;
var TITLE_SIZE = 300;

var TEXNAME_TITLESTRING = 'img/title_string.png';
var TITLESTRING_SIZE_X = 143;
var TITLESTRING_SIZE_Y = 50;
//----------------------------------------------//
//
//起動後すぐに呼ばれるシーン
function startTitleScene() {
//タイトル画像のサイズを定義しておく
//まだ仮画像
    
    var scene = new Scene();
    
    var bg = new Sprite(SCREEN_WIDTH,SCREEN_HEIGHT);
    bg.image =   game.assets[TEXNAME_PAPER];
    bg.x = 0;
    bg.y = 0;

//メインのタイトル画像定義部分
    var TitleGraph = new Sprite(TITLE_SIZE,TITLE_SIZE);
    TitleGraph.image     =   game.assets[TEXNAME_LOGO];
    TitleGraph.x         =   (SCREEN_WIDTH - TITLE_SIZE)/2;
    TitleGraph.y         =   (SCREEN_WIDTH - TITLE_SIZE)/2;
    TitleGraph.flame     =   0;
    TitleGraph.rotate(-15);

//押したらスタートするよ的な文字の定義部分
    var TitleStringGraph    = new Sprite(TITLESTRING_SIZE_X,TITLESTRING_SIZE_Y);
    TitleStringGraph.image  = game.assets[TEXNAME_TITLESTRING];
    TitleStringGraph.x      = (SCREEN_WIDTH - TITLESTRING_SIZE_X)/2;
    TitleStringGraph.y      = 360;
    TitleStringGraph.scaleX = 1.5;
    TitleStringGraph.scaleY = 1.5;
    
    scene.addChild(bg);
    scene.addChild(TitleGraph);
    scene.addChild(TitleStringGraph);
    
    TitleStringGraph.addEventListener('enterframe', function(e){
         if(game.frame % 20 == 0){
            // 20フレーム間隔で点滅する文字
            if(TitleStringGraph.visible){
                TitleStringGraph.visible = false;
            }
            else{
                TitleStringGraph.visible = true;
            }
        } 
    });
    TitleStringGraph.visible = false;
    
    scene.addEventListener('touchstart', function(e){
         game.replaceScene(startGameScene());
    });
    return scene;
}