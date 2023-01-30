class Scene {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.score = 0;

        this.player = new CharacterControlle(new Dot(game));

        this.elapsedGraveTime = 0;
        this.elapsedDogTime = 0;
        this.scoreTime = 0;

        this.loadLevel();

    };


    loadLevel() {
        this.game.addEntity(this.player);

        this.game.addEntity(new EvilCircle(game, true, false, 50, 20, 25));
        this.game.addEntity(new EvilCircle(game, false,true,1300, 100,22));
        this.game.addEntity(new EvilCircle(game, false,false,1300, 400,40));
        this.game.addEntity(new EvilCircle(game, true,true,1300, 400,50));
        this.game.addEntity(new EvilCircle(game, false,true,1000, 700,52));
        this.game.addEntity(new EvilCircle(game, true,false,200, 600,84));
        this.game.addEntity(new EvilCircle(game, true,true,100, 40,50));
        this.game.addEntity(new EvilCircle(game, false,true,2000, 70,52));
        this.game.addEntity(new EvilCircle(game, true,false,2200, 200,84));
        this.game.addEntity(new EvilCircle(game, true,false,50, 60,84));
        this.game.addEntity(new EvilCircle(game, true,true,-1100, 40,50));
        this.game.addEntity(new EvilCircle(game, false,true,-100, 70,52));
        this.game.addEntity(new EvilCircle(game, true,false,1500, 20,84));
        this.game.addEntity(new EvilCircle(game, true, false, 50, 20, 25));
        this.game.addEntity(new EvilCircle(game, false,true,1300, 100,22));
        this.game.addEntity(new EvilCircle(game, false,false,1300, 400,40));
        this.game.addEntity(new EvilCircle(game, true,true,1300, 400,50));
        this.game.addEntity(new EvilCircle(game, false,true,1000, 700,52));
        this.game.addEntity(new EvilCircle(game, true,false,200, 600,84));
        this.game.addEntity(new EvilCircle(game, true,true,100, 40,50));
        this.game.addEntity(new EvilCircle(game, false,true,2000, 70,52));
        this.game.addEntity(new EvilCircle(game, true,false,2200, 200,84));
        this.game.addEntity(new EvilCircle(game, true,false,50, 60,84));
        this.game.addEntity(new EvilCircle(game, true,true,-1100, 40,50));
        this.game.addEntity(new EvilCircle(game, false,true,-100, 70,52));
        this.game.addEntity(new EvilCircle(game, true,false,1500, 20,84));
    };
    addPoints(p) {
        this.scoreTime += p;
        this.draw(this.game.ctx)
    };

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    update() {
        
    };

    draw(ctx){
        

    };

};