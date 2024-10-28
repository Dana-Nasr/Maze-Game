var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 650,
  scene: {
    preload: preload,
    create: function () {
      create.call(this, index);
    },
    update: update,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
    parent: 'content',
  },
};
