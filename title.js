//----------------------------------------------//
//                Title Scene                   //
//             This class makes titlescene.     //
//           by S.Yamaguchi                     //
//----------------------------------------------//

var TEXNAME_TITLE       = 'img/title.png';
var TITLE_SIZE_X = 256;
var TITLE_SIZE_Y = 256;

var TEXNAME_TITLESTRING = 'img/title_string.png';
var TITLESTRING_SIZE_X = 225;
var TITLESTRING_SIZE_Y = 40;
//----------------------------------------------//
//
//起動後すぐに呼ばれるシーン
function startTitleScene() {
//タイトル画像のサイズを定義しておく
//まだ仮画像
    var TITLE_SIZE_X = 256;
    var TITLE_SIZE_Y = 256;
    
    var scene = new Scene();
    
//メインのタイトル画像定義部分
    var TitleGraph = new Sprite(TITLE_SIZE_X,TITLE_SIZE_Y);
    TitleGraph.image     =   game.assets[TEXNAME_TITLE];
    TitleGraph.width     =   TITLE_SIZE_X;
    TitleGraph.height    =   TITLE_SIZE_Y;
    TitleGraph.x         =   (SCREEN_WIDTH - TITLE_SIZE_X)/2;
    TitleGraph.flame     =   0;

//押したらスタートするよ的な文字の定義部分
    var TitleStringGraph    = new Sprite(TITLE_SIZE_X,TITLE_SIZE_Y);
    TitleStringGraph.image  = game.assets[TEXNAME_TITLESTRING];
    TitleStringGraph.width  = TITLESTRING_SIZE_X;
    TitleStringGraph.height = TITLESTRING_SIZE_Y;
    TitleStringGraph.x      = (SCREEN_WIDTH - TITLESTRING_SIZE_X)/2;
    TitleStringGraph.y      = 320;
    TitleStringGraph.flame  = 0;
    
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