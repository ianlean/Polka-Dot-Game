const game = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./No.mp3");
ASSET_MANAGER.queueDownload("./game_music.mp3");
ASSET_MANAGER.queueDownload("./munch.mp3");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "Red";
	game.init(ctx);
	game.addEntity(new Menu(game))
	game.start();
});
