var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 650,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
};


var game = new Phaser.Game(config);
