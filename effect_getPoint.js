//===============================================================================
// File
//	�t�@�C����	�Feffect_getPoint.js
//	���e		�F���_�Q�b�g�̃G�t�F�N�g����
//
// Author
//	����	    �FHAL�����Q�[������w��
//	���O�@�@�@�@�F���얊��
//===============================================================================//

//�萔��`
var POINT_DIGHT = 3;
var NUMBER_WIDTH = 16;
var NUMBER_HEIGHT = 16;

//�G�t�F�N�g�����Ƃ��X�V�Ƃ�
function SetEffectPoint(scene, posX, posY, point) {

    //�ϐ��錾
    var workPoint = point;

    //�e�����̐���
    for (var i = 0; i < POINT_DIGHT; i++) {

        var number = new Sprite(16, 16);
        number.x = (posX + NUMBER_WIDTH + (NUMBER_WIDTH / 2)) - (i * (NUMBER_WIDTH - 4));
        number.y = posY - 10;
        number.width = 16;
        number.height = 16;
        number.scaleX = 0.8;
        number.scaleY = 1.0;

        number.image = game.assets['img/number2.png']; // �摜���w��
        //���������蓖��
        number.frame = workPoint % 10;
        workPoint /= 10;
        console.log(number.frame);

        scene.addChild(number);

        //�X�V
        number.addEventListener('enterframe', function (e) {
            //�ʒu�X�V�ƃX�P�[�����A���t�@�X�V
            this.y -= 5;
            if (this.y <= 300) {
                scene.removeChild(this);
            }
        });
    }
}

//End of File...