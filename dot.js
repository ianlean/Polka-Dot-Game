class Dot {

    constructor(game) {
        Object.assign(this, {game});
        this.removeFromWorld = false;
        this.x = 750;
        this.y = 425;
        this.radius = 10;
        this.boundingcircle = new BoundingCircle(this.x, this.y, this.radius);
        this.removeFromWorld = false;
    };

    update() {
        this.updateCircle();
        let that = this;
        
        this.game.entities.forEach(entity => {
            //console.log(entity);
            if (that.boundingcircle.collide(entity.boundingcircle)) {
                if (entity instanceof EvilCircle) {
                    if (that.boundingcircle.radius >= entity.boundingcircle.radius) {
                        that.radius += entity.boundingcircle.radius*0.10;
                        entity.regenerate();
                        console.log("grow time");
                    } else {
                        console.log('YOU LOST');
                        that.die();
                        console.log(this.removeFromWorld);
                    }
                }
            }
        });
    };

    draw(ctx) {
        if (this.game.mouse) {
            this.game.mouse.click = true;
            var mouse = this.game.mouse;    
            ctx.arc(mouse.x, mouse.y, this.radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            //this.boundingcircle.draw(ctx);
        };
    };

    updateCircle() {
        if (this.game.mouse) {
            this.boundingcircle = new BoundingCircle(this.game.mouse.x, this.game.mouse.y, this.radius);
        }
        
    };

    die() {
        // die animation/reset game
        this.removeFromWorld = true;
        //ASSET_MANAGER.playAsset("Minecraft Damage (Oof) - Sound Effect (HD).mp3");
        
    }
};