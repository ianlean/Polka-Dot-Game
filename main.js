const game = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./RedCircle.png");
ASSET_MANAGER.queueDownload("./black.png");
ASSET_MANAGER.queueDownload("./Minecraft Damage (Oof) - Sound Effect (HD).mp3");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	// for (let i = 0; i < 50; i++) {
	// 	bool1 = false;
	// 	bool2 = false;
	// 	if (Math.random() * 0.5 < 0.5) {
	// 		bool1 = true;
	// 	}

	// 	if (Math.random() * 0.5 < 0.5) {
	// 		bool2 = true;
	// 	}

	// 	let y = 0;
	// 	if(Math.random() * 0.5 < 0.5) {
	// 		y = -100;
	// 	} else {
	// 		y = 1700;
	// 	}	

	// 	let x = Math.floor(Math.random() * (1700 - -150 + 1) + -150);

	// 	gameEngine.addEntity(new EvilCircle(gameEngine,bool1,bool2,x,y, Math.random()*100));
	//}
	game.init(ctx);
	game.addEntity(new Menu())
	game.start();
});
