var kinokos = [
  {
    img: "img/kinoko0.gif",
    name: "しめじ",
    point: 2
  },
  {
    img: "img/kinoko1.gif",
    name: "毒キノコ",
    point: -1
  },
  {
    img: "img/kinoko2.gif",
    name: "えのき",
    point: 1
  }
];

function addKinoko() {
  var kinoko = new Sprite(16, 16);
  kinoko.type = rand(3);
  kinoko.x = rand(320);
  kinoko.y = 0;
  kinoko.image = game.assets['icon0.gif'];

  kinoko.frame = 36 + kinoko.type;
  // icon0.gif を 16x16 サイズの格子に区切ったとき、左上を 0番目として数えて
  // 16番目にある画像 (バナナ) を指定

  kinoko.addEventListener('enterframe', function(e) {
      if(this.intersect(bear)){       // bearとの当たり判定
          game.rootScene.removeChild(this); // 画面から消去
          game.score ++;                    // スコアを加算
      }else{
          this.y += 3;                // y座標を増やす (落下)
      }
  });
  game.rootScene.addChild(kinoko);
  // バナナを画面に追加

}
