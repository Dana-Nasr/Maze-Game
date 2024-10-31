let images = [
  "game/assets/red.png",
  "game/assets/black.png",
  "game/assets/purple.png",
];
function preload() {
  this.load.image("sky", "game/assets/sky.png");
  this.load.image("grass", "game/assets/green1.jpg");
  this.load.image("brown", "game/assets/brown1.png");
  this.load.image("coin", "game/assets/star.png");
  this.load.image("prize", "game/assets/prize.png");
  this.load.spritesheet("red", images[0], {
    frameWidth: 32,
    frameHeight: 48,
  });
  this.load.spritesheet("black", images[1], {
    frameWidth: 32,
    frameHeight: 48,
  });
  this.load.spritesheet("purple", images[2], {
    frameWidth: 32,
    frameHeight: 48,
  });
  this.load.image("tile", "game/assets/tile.jpg");
}
