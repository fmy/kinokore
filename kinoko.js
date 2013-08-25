var KINOKO_SIZE = 32;
var TEXNAME_DAMAGE = 'img/effect0.png';
var DAMAGE_SIZE = 16;


var DATA = [
  {
    img: "img/shiitake.png",
    name: "しいたけ",
    score: 200
  },
  {
    img: "img/dokukinoko.png",
    name: "毒キノコ",
    score: -1
  },
  {
    img: "img/matsutake.png",
    name: "まつたけ",
    score: 500
  },
  {
    img: "img/bad_matsutake.png",
    name: "悪いまつたけ",
    score: -1
  },
  {
    img: "img/enoki.png",
    name: "えのき",
    score: 100
  }
];

function addKinoko(scene) {
  var kinoko = new Sprite(KINOKO_SIZE, KINOKO_SIZE);
  kinoko.type = rand(5);
  kinoko.x = SCREEN_WIDTH/4 + rand(SCREEN_WIDTH/2 - KINOKO_SIZE);
  kinoko.y = BACKGROUND_HEIGHT - KINOKO_SIZE;
  kinoko.grad = (kinoko.x + KINOKO_SIZE/2 - SCREEN_WIDTH/2) / (SCREEN_HEIGHT - BACKGROUND_HEIGHT);
  kinoko.image = game.assets[DATA[kinoko.type].img];

  kinoko.frame = 0;
  kinoko.addEventListener('enterframe', function(e) {
    switch (kinoko.frame) {
      case 3:
        if (this.within(player, 30)) { // playerとの当たり判定
            if (DATA[kinoko.type].score < 0) {
              var damage = new Sprite(DAMAGE_SIZE, DAMAGE_SIZE);
              damage.image = game.assets[TEXNAME_DAMAGE];
              damage.x = player.x + DAMAGE_SIZE;
              damage.y = player.y + DAMAGE_SIZE;
              damage.scaleX = 2;
              damage.scaleY = 2;
              damage.frame = 0;
              scene.addChild(damage);
              scene.removeChild(this);
              var interval = setInterval(function() {
                if (damage.frame < 4) {
                  damage.frame++;
                } else {
                  scene.removeChild(damage);
                  clearInterval(interval);
                  game.replaceScene(startEndScene());
                }
              }, 100);
              // game.replaceScene(startEndScene());
            } else {
              SetEffectPoint(scene, kinoko.x + 16, kinoko.y + 30, DATA[kinoko.type].score); //エフェクト設定
              scene.removeChild(this); // 画面から消去
              game.score += DATA[kinoko.type].score; // スコアを加算
            }
        }else{
            this.y += 4; // y座標を増やす (落下)
            this.x += this.grad * 4;
            if (game.frame % 4 == 0) {
              this.scaleX += 0.0125;
              this.scaleY += 0.0125;
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
