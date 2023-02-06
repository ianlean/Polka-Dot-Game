const game = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./RedCircle.png");
ASSET_MANAGER.queueDownload("./black.png");
ASSET_MANAGER.queueDownload("./Minecraft Damage (Oof) - Sound Effect (HD).mp3");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	
	game.init(ctx);
	game.addEntity(new Menu(game))
	game.start();
});
