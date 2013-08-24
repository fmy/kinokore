//============================================//
//                   end.js                   //
//                Create EndScene
//                By. S.Yamaguchi
// ===========================================//

//ゲームが終わったあとの画面とか処理とか
//！仮実装！//
function startEndScene() {
    var scene = new Scene();
    var GameOverImage = new Sprite(189, 97);
    GameOverImage.image = game.assets[TEXNAME_END];
    GameOverImage.width = 189;
    GameOverImage.height = 97;
    GameOverImage.flame = 0;
    GameOverImage.x = (SCREEN_WIDTH - 189) / 2;
    GameOverImage.y = 150;
    GameOverImage.opacity = 0.0;
    
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