//============================================//
//                   result.js                //
//                Create ResultScene
//                By. S.Yamaguchi
// ===========================================//

var TEXNAME_RESULT = 'result.png';
var RESULT_SIZE_X = 100;
var RESULT_SIZE_Y = 100;

var TEXNAME_RECIPE_1 = 'recipe1.png' ;
var RECIPE_1_SIZE_X = 100;
var RECIPE_1_SIZE_Z = 100;


var TEXNAME_RECIPIE_2 = 'recipe2.png';
var RECIPIE_2_SIZE_X = 100;
var RECIPIE_2_SIZE_Y = 100;


var TEXNAME_FLAME = 'frame.png';
var FLAME_SIZE_X = 100;
var FLAME_SIZE_Y - 100;

//死なずに終了した時
//レシピとか表示します
function startResultScene(score) {
    var scene = new Scene();
    
//=====================
//RESULTの文字画像
//=====================
    var ResultString = new Sprite(RESULT_SIZE_X, RESULT_SIZE_Y);
    ResultString.image = game.assets[TEXNAME_END];
    ResultString.width = RESULT_SIZE_X;
    ResultString.height = RESULT_SIZE_Y;
    ResultString.flame = 0;
    ResultString.x = (SCREEN_WIDTH - RESULT_SIZE_X) / 2;
    ResultString.y = 150;
    ResultString.opacity = 1.0;
    
 //========================
 //SCORE の表示
    
    scene.addChild(GameOverImage);
    scene.addEventListener('touchstart', function(e){
         game.replaceScene(startTitleScene());
    });
    GameOverImage.addEventListener('enterframe', function(e){
        if(GameOverImage.opacity <= 1.0)
            {
                GameOverImage.y += 0.5;
                GameOverImage.opacity += 0.1
            }   
    });
    return scene;
}