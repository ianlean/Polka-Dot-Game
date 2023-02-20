class Scene {
    constructor(game) {
        this.start = performance.now();
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.score = 0;
        this.last
        this.elapsedGraveTime = 0;
        this.oldElapsed = 0;
        this.loadLevel();

    };


    loadLevel() {
        ASSET_MANAGER.playAsset("./game_music.mp3");
        ASSET_MANAGER.autoRepeat("./game_music.mp3");
        this.random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        var thing;
        var thing2;
        //spawns in 100 enemy circles in a "natural manner"
        this.game.addEntity(new Dot(this.game));
        for(var i=0;i<100;i++){
            if (Math.random() < 0.5){thing = false;} else {thing = true;}
            if (Math.random() >= 0.5){thing2 = false;} else {thing2 = true;}
            var spawnFromSides = Math.random();
        
            //this.radius = Math.random()* 100;
            if (spawnFromSides > 0.5) {
                var temp = Math.random();
                if (temp > 0.5) { 
                    this.game.addEntity(new EvilCircle(this.game, thing,thing2,this.random(0, 1500), this.random(1000, 1400)));
                } else {
                    this.game.addEntity(new EvilCircle(this.game, thing,thing2,this.random(0, 1500), this.random(-400, -200)));
                }
            } else {
                var temp = Math.random();
                if (temp > 0.5) {
                    this.game.addEntity(new EvilCircle(this.game, thing,thing2,this.random(1700,1900), this.random(0, 850)));
                } else {
                    this.game.addEntity(new EvilCircle(this.game, thing,thing2,this.random(-150,-50), this.random(0, 850)));
                }
            }
         }
    };

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    update() {
    
    };

    draw(ctx) {
        if (this.game.dot){ctx.fillText(this.game.dot.score, 1400,55);}
        if (this.radius > 450) {
            if(this.elapsedGraveTime == 0) {
                this.oldElapsed = performance.now() - this.start;
                console.log("fuck");
                this.elapsedGraveTime = 1;
            }
            ctx.fillText("Congrats you broke the game in " + Math.floor((this.oldElapsed/1000).toString()) + " seconds", 500,450);
            
            ctx.fillText("Click anywhere to try again", 500,515);
        }
        if (this.game.dot.removeFromWorld) { // if ur dead
            if(this.elapsedGraveTime == 0) {
                this.oldElapsed = performance.now() - this.start;
                console.log("fuck");
                this.elapsedGraveTime = 1;
            }
            ctx.fillText("OUCH! you lasted " + Math.floor((this.oldElapsed/1000).toString()) + " seconds", 500,450);
            ctx.fillText("Click anywhere to try again", 500,515);
            if(this.game.click) { //retry
                this.game.click.y = 0;
                this.clearEntities();
                ASSET_MANAGER.pauseBackgroundMusic();
                this.game.addEntity(new Scene(this.game));
            }
        }

    };

};