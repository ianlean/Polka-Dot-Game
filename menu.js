class Menu{
    constructor(game,x,y) {
        Object.assign(this, { game});
        this.game = game;
        this.removeFromWorld = false;
    };

    update() {
        
        if(this.game.click && this.game.click.y > 475 && this.game.click.y < 515) {
            this.game.click.y = 0;
            this.removeFromWorld = true;
            this.game.addEntity(new Scene(this.game));
        }
     };
    
    draw(ctx){ 

        //ctx.drawImage(ASSET_MANAGER.getAsset("./Forest.png"), 0,0, 1920, 768,);

        const offsetX = 400;
        const offsetY = 600
        
    

        ctx.font =  '60px ""'
        ctx.fillStyle = 'Red';
        ctx.fillText("Big Fish, Small Pond", 600,450);

        


        ctx.strokeStyle = 'RED';
        ctx.font =  '48px ""'
        ctx.fillText("Play", 625,515);
        ctx.fillText("Dodge other circles for as long as you can!",625,560)
        // if ((this.game.mouse && this.game.mouse.y > 475 && this.game.mouse.y < 515)) {
        //     ctx.fillStyle = 'Yellow';
        //     ctx.font =  '64px ""'
        //     //ctx.drawImage(ASSET_MANAGER.getAsset("./duckies.png"),0,0,72,72,585,470,48,48)
        // }
        // if ((this.game.mouse && this.game.mouse.y > 520 && this.game.mouse.y < 560)) {
        //     ctx.fillStyle = 'Yellow';
        //     ctx.font =  '64px ""'
        //    // ctx.drawImage(ASSET_MANAGER.getAsset("./duckies.png"),0,0,72,72,585,515,48,48)
        // }
        

        ctx.fillStyle = 'Grey';

    };
}