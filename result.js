//============================================//
//                   result.js                //
//                Create ResultScene
//                By. S.Yamaguchi
// ===========================================//

var TEXNAME_RESULT = 'img/result.png';
var RESULT_SIZE_X = 151;
var RESULT_SIZE_Y = 44;

var TEXNAME_RECIPE_1 = 'img/recipe1.jpg' ;
var RECIPE_1_SIZE_X = 256;
var RECIPE_1_SIZE_Y = 144;
var RECIPE_1_NAME = "焼き松茸"
var RECIPE_1_DIS = "焼いて食べると美味しい"


var TEXNAME_RECIPE_2 = 'img/recipe2.jpg';
var RECIPE_2_SIZE_X = 256;
var RECIPE_2_SIZE_Y = 144;
var RECIPE_2_NAME = "えのきのベーコン巻き"
var RECIPE_2_DIS = "安くてうまい"


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

    var ResultGraph = new Sprite(RESULT_SIZE_X,RESULT_SIZE_Y);
    ResultGraph.image     =   game.assets[TEXNAME_RESULT];
    ResultGraph.width     =   RESULT_SIZE_X;
    ResultGraph.height    =   RESULT_SIZE_Y;
    ResultGraph.x         =   (SCREEN_WIDTH - RESULT_SIZE_X)/2;
    ResultGraph.y         =   30;
    ResultGraph.flame     =   0;
    scene.addChild(ResultGraph);
            
 //========================
 //SCORE の表示
 //========================            
    var ScoreString = new Label("null");
   ScoreString.font = "16px Tahoma";
   ScoreString.font.bold();
            ScoreString.text = game.score + "茸pt";
            ScoreString.x = (SCREEN_WIDTH - 90)/2;
            ScoreString.y = 80;
            scene.addChild(ScoreString);

//========================
//キノコ料理画像
//========================
var OsusumeString = new Label("あなたにおすすめのレシピ");
OsusumeString.font = "24px Tahoma";
            OsusumeString.x = (SCREEN_WIDTH - 250)/2;
            OsusumeString.y = 140;
            scene.addChild(OsusumeString);
    
 //茸判定
    if(game.score > 3000){
        recipename = RECIPE_1_NAME;
        recipetex  = TEXNAME_RECIPE_1;
        recipedis  = RECIPE_1_DIS;
    }
    else{
        recipename = RECIPE_2_NAME;
        recipetex  = TEXNAME_RECIPE_2;
        recipedis  = RECIPE_2_DIS;
    }
    
    var RecipeString = new Label("レシピ");
            RecipeString.text = recipename;
            RecipeString.x = (SCREEN_WIDTH - 90)/2;
            RecipeString.y = 110;
            scene.addChild(RecipeString);

            
    var RecipeGraph = new Sprite(RECIPE_1_SIZE_X,RECIPE_1_SIZE_Y);
    RecipeGraph.image     =   game.assets[recipetex];
    RecipeGraph.width     =   RECIPE_1_SIZE_X;
    RecipeGraph.height    =   RECIPE_1_SIZE_Y;
    RecipeGraph.x         =   (SCREEN_WIDTH - RECIPE_1_SIZE_X)/2;
    RecipeGraph.y         =   180;
    RecipeGraph.flame     =   0;
    scene.addChild(RecipeGraph);
    
    var detail = new Label("焼く\n食べる");
            detail.text = recipedis;
            detail.x = 10;
            detail.y = 390;
            scene.addChild(detail);
    
    scene.addEventListener('touchstart', function(e){
        
        game.replaceScene(startTitleScene());
    });

    return scene;
}