//============================================//
//                   end.js                   //
//                Create EndScene
//                By. S.Yamaguchi
// ===========================================//

//ゲームが終わったあとの画面とか処理とか
//！仮実装！//


function startEndScene(type) {
    var scene = new Scene();
    var GameOverImage = new Sprite(189, 97);
    GameOverImage.image = game.assets[TEXNAME_END];
    GameOverImage.x = (SCREEN_WIDTH - 189) / 2;
    GameOverImage.y = 20;
    GameOverImage.opacity = 0.0;
    
    scene.addChild(GameOverImage);
    scene.addEventListener('touchstart', function(e){
         game.replaceScene(startTitleScene());
    });
    GameOverImage.addEventListener('enterframe', function(e){
        if (GameOverImage.opacity < 1.0) {
            GameOverImage.y += 0.5;
            GameOverImage.opacity += 0.1
        } else {
            var dokukinoko = new Sprite(300, 200);
            dokukinoko.image = game.assets[DATA[type].pic];
            dokukinoko.x = 10;
            dokukinoko.y = 130;
            scene.addChild(dokukinoko);

            var kinoko_name = new Label(DATA[type].name);
            kinoko_name.x = 80;
            kinoko_name.y = 340;
            kinoko_name.font = "20px sans-serif";
            scene.addChild(kinoko_name);

            var desc = new Label(DATA[type].desc);
            desc.x = 10;
            desc.y = 370;
            desc.font = "15px sans-serif";
            scene.addChild(desc);
        }
    });
    return scene;
}