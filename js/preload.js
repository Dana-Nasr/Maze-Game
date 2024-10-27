function preload () {
    this.load.image("sky", "assets/sky.png");
    this.load.image("coin", "assets/star.png");
    this.load.image("prize", "assets/prize.png");
    this.load.spritesheet("dude", "assets/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
    this.load.image("tile", "assets/tile.jpg");
  }