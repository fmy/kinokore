//============================================//
//                   end.js                   //
//                Create EndScene
//                By. S.Yamaguchi
// ===========================================//

//ゲームが終わったあとの画面とか処理とか
//！仮実装！//

var TEXNAME_BENITENGU = 'img/benitengu.jpg';

function startEndScene() {
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
            dokukinoko.image = game.assets[TEXNAME_BENITENGU];
            dokukinoko.x = 10;
            dokukinoko.y = 130;
            scene.addChild(dokukinoko);

            var kinoko_name = new Label("ベニテングダケ");
            kinoko_name.x = 100;
            kinoko_name.y = 340;
            scene.addChild(kinoko_name);

            var desc = new Label("長野県などでよく見られる。高原のシラカバ・シラビソ・マツなどの林に発生し、時に菌輪をなす（多数が輪を描くように生える）。");
            desc.x = 10;
            desc.y = 360;
            scene.addChild(desc);
        }
    });
    return scene;
}