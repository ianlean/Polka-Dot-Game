class Batman {

    constructor(game) {
        this.game = game;
        
        this.animator = new Animator(ASSET_MANAGER.getAsset("./theBat.png"), 0, 0,243,430,5,0.18);
        this.x = 0;
        this.y = 0;
        this.speed = 145;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick,ctx,this.x,270);
    };
};