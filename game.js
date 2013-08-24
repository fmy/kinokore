function startGameScene() {
    var scene = new Scene();
    // ここから、クマのキャラクターを表示する処理
    bear = new Sprite(PLAYER_SIZE, PLAYER_SIZE);  // Sprite オブジェクトを生成
    bear.x = (SCREEN_WIDTH - PLAYER_SIZE) / 2;    // Sprite の左上のx座標を指定
    bear.y = 380;               // Sprite の左上のy座標を指定
    bear.width = PLAYER_SIZE;
    bear.height = PLAYER_SIZE;

    bear.image = game.assets['img/chara1.gif']; // 画像を指定
    bear.frame = 0;
    // 「chara1.gif」を32x32の格子で切り取ったのち、0番目(=左上)のものを用いる
    // ゲーム中に frame の値を操作することで、アニメーションを表現できる

    // 背景の生成
    CreateBackground();

    load = new Sprite(SCREEN_WIDTH, 400);
    load.image = game.assets['img/bg-load.png']; // 画像を指定
    load.frame = 0;
    load.x = 0;
    load.y = 80;

    // タッチしたときにクマを移動させる
    scene.addEventListener('touchstart', function(e){
        bear.x = e.localX - PLAYER_SIZE/2;
    });

    // タッチ座標が動いたときにクマを移動させる
    scene.addEventListener('touchmove', function(e){
        bear.x = e.localX - PLAYER_SIZE/2;
    });

    game.score = 0;

    scene.addEventListener('enterframe',function(){
    if (bShowUI == false && game._activated) {
            bShowUI = true;
            //佐野が追加
            //タイマー生成
            CreateTimer();
            //スコア生成
            CreateScore();
        }
        if(game.frame % 20 == 0){
            // 6フレームごとにバナナを増やす関数を実行
            addKinoko(scene);
        }
        if(scene.age > game.fps * 20){
            game.replaceScene(startGameScene());
            // 結果を表示 (スコア, 結果のテキストの順で)
        }
    });

    scene.addChild(load);
    scene.addChild(bear);

    return scene;
}