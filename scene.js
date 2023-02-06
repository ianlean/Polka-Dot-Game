class Scene {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.score = 0;

        this.elapsedGraveTime = 0;
        this.elapsedDogTime = 0;
        this.scoreTime = 0;

        this.loadLevel();

    };


    loadLevel() {
        this.random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        var thing;
        var thing2;
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
        this.game.addEntity(new Dot(this.game));
    };

    // clearEntities() {
    //     this.game.entities.forEach(function (entity) {
    //         entity.removeFromWorld = true;
    //     });
    // };

    update() {
        
    };

    draw(ctx){
        

    };

};