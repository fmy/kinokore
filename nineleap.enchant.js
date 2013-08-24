enchant.nineleap = { assets: ['img/start.png', 'img/end.png'] };
enchant.nineleap.Game = enchant.Class.create(enchant.Game, {
    initialize: function(width, height) {
        enchant.Game.call(this, width, height);
        this.addEventListener('load', function() {
            var game = this;
            this.startScene = new SplashScene();
            this.startScene.image = this.assets['img/start.png'];
            this.startScene.addEventListener('touchend', function() {
                if (game.currentScene == this) game.popScene();
            });
            this.addEventListener('keydown', function() {
                if (this.currentScene == this.startScene) this.popScene();
                this.removeEventListener('keydown', arguments.callee);
            });
            this.pushScene(this.startScene);

            this.endScene = new SplashScene();
            this.endScene.image = this.assets['img/end.png'];
        });
    },
    end: function(score, result) {
        this.pushScene(this.endScene);
    }
});

enchant.nineleap.SplashScene = enchant.Class.create(enchant.Scene, {
    image: {
        get: function() {
            return this._image;
        },
        set: function(image) {
            this._image = image;

            while (this.firstChild) {
                this.removeChild(this.firstChild);
            }
            var sprite = new Sprite(image.width, image.height);
            sprite.image = image;
            sprite.x = (this.width - image.width) / 2;
            sprite.y = (this.height - image.height) / 2;
            this.addChild(sprite);
        }
    }
});
