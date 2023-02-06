class EvilCircle {

    constructor(game, postiveX, postiveY, givenX, givenY) {
        this.game = game;
        this.positiveDirectionX = postiveX;
        this.positiveDirectionY = postiveY;
        this.x = givenX;
        this.y = givenY;
        this.radius = Math.random() * 50;
        this.speed = 200;
        this.boundingcircle = new BoundingCircle(this.x,this.y,this.radius);
        this.random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        //this.game.ctx.fillStyle ="#" +  Math.floor(Math.random()*0xFFFFFF).toString(16);
    };

    update() {
        this.updateCircle();
        if (this.positiveDirectionX) {
            this.x += this.speed * this.game.clockTick;
            //console.log("going right");
        } else {
            this.x -= this.speed * this.game.clockTick;
            //console.log("going left");
        }

        if (this.positiveDirectionY) {
            this.y += this.speed * this.game.clockTick;
            //console.log("going right");
        } else {
            this.y -= this.speed * this.game.clockTick;
            //console.log("going left");
        }

        if (this.x >= 2000 && this.positiveDirectionX) {
                this.positiveDirectionX = false;
                this.regenerate();
            //console.log("going left");
        }
        if (this.x <= -200 && !this.positiveDirectionX) {
            this.positiveDirectionX = true;
            this.regenerate();
            //console.log("going right");
        }

        if (this.y <= -500 && !this.positiveDirectionY) {
                this.positiveDirectionY = true;
                this.regenerate();
                //console.log("going up");
        }
        if (this.y >= 1500 && this.positiveDirectionY) {
            this.positiveDirectionY = false;
            this.regenerate();
            //console.log("going down");
        }
    };

    draw(ctx) {
        if (this.game.mouse) {
            ctx.strokeStyle = "Red";
            //ctx.fillStyle ="#" +  Math.floor(Math.random()*0xFFFFFF).toString(16);
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            //ctx.fillStyle = "Red";
            ctx.fill();
            ctx.stroke();
        }
    };

    updateCircle() {
        this.boundingcircle = new BoundingCircle(this.x, this.y, this.radius);
    }

    regenerate() {
        
        var spawnFromSides = Math.random();

        this.radius = Math.random()* 50;
        if (spawnFromSides > 0.5) {
            var temp = Math.random();
            if (temp > 0.5) { //spawn down
                this.x = this.random(0, 1500);
                this.y = this.random(1000, 1400);
            } else {
                this.x = this.random(0, 1500);//spawn above
                this.y = this.random(-400, -200);
            }
        } else {
            var temp = Math.random();
            if (temp > 0.5) {
                this.x = this.random(1700,1900);
                this.y = this.random(0, 850);
            } else {
                this.x = this.random(-150,-50);
                this.y = this.random(0, 850);
            }
        }
    }
};