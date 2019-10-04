const gameState = {}

function preload() {
  this.load.image('codey', 'https://raw.githubusercontent.com/Grimnir03/Grimnir03.github.io/master/backgrounds/New%20Piskel%20(1).png');
}

function create() {
  gameState.codey = this.add.sprite(150, 200, 'codey');
  gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (gameState.cursors.right.isDown) {
    gameState.codey.x += 5;
  }

  if (gameState.cursors.left.isDown) {
    gameState.codey.x -= 5;
  }

  if (gameState.cursors.down.isDown) {
    gameState.codey.y += 5;
  }

  if (gameState.cursors.up.isDown) {
    gameState.codey.y -= 5;
  }
}

const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 500,
  backgroundColor: "#BB9543",
  scene: {
    preload,
    create,
    update
  }
}

const game = new Phaser.Game(config)
