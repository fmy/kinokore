var data = [
  {
    img: "img/kinoko0.gif",
    name: "しめじ",
    score: 2
  },
  {
    img: "img/kinoko1.gif",
    name: "毒キノコ",
    score: -1
  },
  {
    img: "img/kinoko2.gif",
    name: "えのき",
    score: 1
  }
];

function addKinoko() {
  var kinoko = new Sprite(16, 16);
  kinoko.type = rand(3);
  kinoko.x = rand(320);
  kinoko.y = 0;
  kinoko.image = game.assets['icon0.gif'];

  kinoko.frame = 36;

  kinoko.addEventListener('enterframe', function(e) {
    switch (kinoko.frame) {
      case 39:
        if (this.intersect(bear)) { // bearとの当たり判定
            game.rootScene.removeChild(this); // 画面から消去
            game.score += data[kinoko.type].score; // スコアを加算
        }else{
            this.y += 4; // y座標を増やす (落下)
        }
        break;
      case 36:
      case 37:
      case 38:
        if (game.frame % 4 == 0) {
          kinoko.frame += 1;
        }
        break;
    }
  });
  game.rootScene.addChild(kinoko);
  // バナナを画面に追加

}
