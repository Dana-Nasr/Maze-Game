// var config = {
//   type: Phaser.AUTO,
//   width: 800,
//   height: 600,
//   scene: {
//     preload: preload,
//     create: create,
//     // update: update,
//   },
// };

// var game = new Phaser.Game(config);
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: function () {
      this.load.image("sky", "assets/sky.png");
      this.load.image("ground", "assets/platform.png");
      this.load.image("vertical", "assets/vertical.png");
    },
    create: function () {
      this.add.image(400, 300, "sky");

   
        maze = [
            [0,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1,1,1],
            [0,1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0,0,0,1],
            [0,1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1,0,0],
            [0,1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1,0,1,1],
            [0,1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0,0,0,1],
            [0,1,1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,0,0, 1],
            [0,1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0,1,1,0 ,1],
            [0,1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0, 1],
            [0,1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0,0,1,0, 1],
            [0,1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,1,1,1, 1],
            [0,1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1,1,0,0, 1],
            [0,1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0,1, 0,0, 1],
            [0,1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1,0,0,0, 1],
            [0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0, 1],
            [0,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1,1,1,]
        ]
        
      const graphics = this.add.graphics(); //graphic obj

      const tileW = 40; //tile dimensions
      const tileH = 40;

      for (let row = 0; row < maze.length; row++) {
        for (let col = 0; col < maze[row].length; col++) {
          if (maze[row][col] === 1) {
            graphics.fillStyle(0x555555, 1);
            graphics.fillRect(col * tileW, row * tileH, tileW, tileH);
          }
        }
      }




      
    },

    update: function () {
      // Future update logic can go here
    },
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
