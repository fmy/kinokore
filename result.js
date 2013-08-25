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
var RECIPE_1_SIZE_Y = 100;


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
            ResultString.x = (SCREEN_WIDTH - 100)/2;
            ResultString.y = 0;
            scene.addChild(ResultString);
            
 //========================
 //SCORE の表示
 //========================            
    var ScoreString = new Label("null");
            ScoreString.text = game.score + "キノコpt";
            ScoreString.x = (SCREEN_WIDTH - 100)/2;
            ScoreString.y = 50;
            scene.addChild(ScoreString);

//========================
//キノコ料理画像
//========================
var OsusumeString = new Label("あなたにおすめのレシピ");
            OsusumeString.x = (SCREEN_WIDTH - 100)/2;
            OsusumeString.y = 100;
            scene.addChild(OsusumeString);
            
    var RecipeString = new Label("レシピA");
            RecipeString.x = (SCREEN_WIDTH - 100)/2;
            RecipeString.y = 150;
            scene.addChild(RecipeString);

            
    var RecipeGraph = new Sprite(RECIPE_1_SIZE_X,RECIPE_1_SIZE_Y);
    RecipeGraph.image     =   game.assets[TEXNAME_RECIPE_1];
    RecipeGraph.width     =   RECIPE_1_SIZE_X;
    RecipeGraph.height    =   RECIPE_1_SIZE_Y;
    RecipeGraph.x         =   (SCREEN_WIDTH - RECIPE_1_SIZE_X)/2;
    RecipeGraph.y         =   200;
    RecipeGraph.flame     =   0;
    scene.addChild(RecipeGraph);
    
    var detail = new Label("焼く\n食べる");
            detail.x = 10;
            detail.y = 360;
            scene.addChild(detail);
    

    

  
    return scene;
}