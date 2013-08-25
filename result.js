//============================================//
//                   result.js                //
//                Create ResultScene
//                By. S.Yamaguchi
// ===========================================//

var TEXNAME_RESULT = 'img/end.png';
var RESULT_SIZE_X = 100;
var RESULT_SIZE_Y = 100;

var TEXNAME_RECIPE_1 = 'img/end.png' ;
var RECIPE_1_SIZE_X = 100;
var RECIPE_1_SIZE_Z = 100;


var TEXNAME_RECIPE_2 = 'img/end.png';
var RECIPIE_2_SIZE_X = 100;
var RECIPIE_2_SIZE_Y = 100;


var TEXNAME_FLAME = 'img/end.png';
var FLAME_SIZE_X = 100;
var FLAME_SIZE_Y = 100;

//死なずに終了した時
//レシピとか表示します
function startResultScene(score) {
    var scene = new Scene();
    
//=====================
//RESULTの文字画像
//=====================
//    var ResultString = new Sprite(RESULT_SIZE_X, RESULT_SIZE_Y);
//    ResultString.image = game.assets[TEXNAME_END];
//    ResultString.width = RESULT_SIZE_X;
//    ResultString.height = RESULT_SIZE_Y;
//    ResultString.flame = 0;
//    ResultString.x = (SCREEN_WIDTH - RESULT_SIZE_X) / 2;
//    ResultString.y = 150;
//    ResultString.opacity = 1.0;

var ResultString = new Label("Result");
            ResultString.x = 100;
            ResultString.y = 340;
            scene.addChild(ResultString);
    
 //========================
 //SCORE の表示
 //========================
    

  
    return scene;
}