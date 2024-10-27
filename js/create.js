let player,
  cursors,
  score = 0;
timeLeft = 0;
levelCompleted = false;
function create(index) {
  this.add.image(400, 300, "sky");
  platforms = this.physics.add.staticGroup();
  coins = this.physics.add.staticGroup();
  trophy = this.physics.add.staticGroup();
  maze = maze[index - 1];

  if (index === 1) {
    timeLeft = 60;
  } else if (index === 2) {
    timeLeft = 45;
  } else if (index == 3) {
    timeLeft = 30;
  }

  const tileW = 40; //tile dimensions
  const tileH = 40;
  const collectorsW = 30;
  const collectorsY = 30;
  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze[row].length; col++) {
      if (maze[row][col] === 1) {
        const wall = platforms
          .create(col * tileW, row * tileH, "tile")
          .setOrigin(0, 0)
          .refreshBody();
        wall.setDisplaySize(tileW, tileH);
      } else if (maze[row][col] === 2) {
        // Create coins
        const coin = coins
          .create(col * tileW, row * tileH, "coin")
          .setOrigin(0, 0)
          .refreshBody();
        coin.setCollideWorldBounds(true);
        coin.setDisplaySize(collectorsW, collectorsY);
      } else if (maze[row][col] === 3) {
        // Create trophy
        const prize = trophy
          .create(col * tileW, row * tileH, "prize")
          .setOrigin(0, 0)
          .refreshBody();
        prize.setCollideWorldBounds(true);
        prize.setDisplaySize(collectorsW, collectorsY);
      }
    }
  }

  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "turn",
    frames: [{ key: "dude", frame: 4 }],
    frameRate: 20,
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1,
  });

  player = this.physics.add.sprite(30, 545, "dude");
  player.setScale(0.7);
  player.setBounce(0);
  player.setCollideWorldBounds(true);

  cursors = this.input.keyboard.createCursorKeys();

  this.physics.add.collider(coins, platforms);
  this.physics.add.collider(player, platforms);
  scoreText = this.add.text(60, 610, "score: 0", {
    fontSize: "32px",
    fill: "#ffffff",
  });

  timerText = this.add.text(600, 610, "Time: " + timeLeft, {
    fontSize: "32px",
    fill: "#ffffff",
  });

  this.time.addEvent({
    delay: 1000,
    callback: () => {
      if (timeLeft > 0 && levelCompleted !== true) {
        timeLeft--;
        timerText.setText("Time: " + timeLeft);
      } else if (levelCompleted !== true) {
        this.scene.pause();
        const gameOverBg = this.add.graphics();
        gameOverBg.fillStyle(0x000000, 0.9);
        gameOverBg.fillRect(200, 200, 400, 150);

        this.add.text(200, 250, " Game Over :(", {
          fontSize: "48px",
          fill: "#ff0000",
          fontStyle: "bold",
        });
      }
    },
    callbackScope: this,
    loop: true,
  });

  if (index == 1) {
    level = this.add.text(350, 610, "Easy", {
      fontSize: "32px",
      fill: "#ffffff",
    });
  } else if (index == 2) {
    level = this.add.text(350, 610, " Meduim", {
      fontSize: "32px",
      fill: "#ffffff",
    });
  } else if (index == 3) {
    level = this.add.text(350, 610, "Hard", {
      fontSize: "32px",
      fill: "#ffffff",
    });
  }
  this.physics.add.overlap(player, coins, collectCoin, null, this);
  this.physics.add.overlap(player, trophy, DisplayLevelCompleted, null, this);
}
