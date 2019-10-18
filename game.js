const gameState = {}

const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 1000,
  backgroundColor: "#BB9543",
  scene: {
    preload,
    create,
    update
  }
}

const game = new Phaser.Game(config)
