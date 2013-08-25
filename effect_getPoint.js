var POINT_DIGHT = 3;
var NUMBER_WIDTH = 16;
var NUMBER_HEIGHT = 16;

function SetEffectPoint(scene, posX, posY, point) {

    var workPoint = point;

    for (var i = 0; i < POINT_DIGHT; i++) {

        var number = new Sprite(16, 16);
        number.x = (posX + NUMBER_WIDTH + (NUMBER_WIDTH / 2)) - (i * (NUMBER_WIDTH - 4));
        number.y = posY - 10;
        number.width = 16;
        number.height = 16;
        number.scaleX = 0.8;
        number.scaleY = 1.0;

        number.image = game.assets[TEXNAME_NUMBER];
        number.frame = workPoint % 10;
        if (point >= 500) {
            number.frame += 10;
            number.scaleX += 0.2;
            number.scaleY += 0.2;
        }
        workPoint /= 10;
        console.log(number.frame);

        scene.addChild(number);

        number.addEventListener('enterframe', function (e) {
            this.y -= 5;
            if (this.y <= 300) {
                scene.removeChild(this);
            }
        });
    }
}

//End of File...