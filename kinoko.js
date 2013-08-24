var KINOKO_SIZE = 64;

var DATA = [
  {
    img: "img/shiitake.png",
    name: "しいたけ",
    score: 2
  },
  {
    img: "img/dokukinoko.png",
    name: "毒キノコ",
    score: -1
  },
  {
    img: "img/matsutake.png",
    name: "まつたけ",
    score: 5
  },
  {
    img: "img/bad_matsutake.png",
    name: "悪いまつたけ",
    score: -1
  },
  {
    img: "img/enoki.png",
    name: "えのき",
    score: 1
  }
];

function addKinoko(scene) {
  var kinoko = new Sprite(KINOKO_SIZE, KINOKO_SIZE);
  kinoko.type = rand(5);
  kinoko.x = 80 + rand(170 - KINOKO_SIZE);
  kinoko.y = 80 - KINOKO_SIZE*0.75;
  kinoko.grad = (kinoko.x - 160) / 400;
  kinoko.image = game.assets[DATA[kinoko.type].img];
  kinoko.scaleX = 0.5;
  kinoko.scaleY = 0.5;

  kinoko.frame = 0;

  kinoko.addEventListener('enterframe', function(e) {
    switch (kinoko.frame) {
      case 3:
        if (this.within(player, 30)) { // playerとの当たり判定
            if (DATA[kinoko.type].score < 0) {
              game.replaceScene(startEndScene()); // startEndScene()に変える
            } else {
              scene.removeChild(this); // 画面から消去
              game.score += DATA[kinoko.type].score; // スコアを加算
            }
        }else{
            this.y += 4; // y座標を増やす (落下)
            this.x += this.grad * 4;
            if (game.frame % 4 == 0) {
              this.scaleX += 0.005;
              this.scaleY += 0.005;
            }
        }
        break;
      case 0:
      case 1:
      case 2:
        if (game.frame % 4 == 0) {
          kinoko.frame += 1;
        }
        break;
    }
  });
  scene.addChild(kinoko);
}
