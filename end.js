function startEndScene() {
    var scene = new Scene();
    var GameOverImage = new Sprite(PLAYER_SIZE, PLAYER_SIZE);
    GameOverImage.image = game.assets['img/chara1.gif'];
    GameOverImage.width = PLAYER_SIZE;
    GameOverImage.height = PLAYER_SIZE + 500;
    GameOverImage.flame = 0;
    scene.addChild(GameOverImage);
    return scene;
}