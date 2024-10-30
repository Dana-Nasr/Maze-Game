let player,
  cursors,
  puzzle = 0,
  score = 0;
timeLeft = 0;
levelCompleted = false;

function create(index) {
  platforms = this.physics.add.staticGroup();
  coins = this.physics.add.staticGroup();
  trophy = this.physics.add.staticGroup();

  //modify addd if else func level

  n_maze = maze[index - 1];
  if (index === 1) {
    timeLeft = 60;
    this.add.image(400, 300, "sky");
  } else if (index === 2) {
    timeLeft = 45;
    this.add.image(400, 294, "grass");
  } else if (index == 3) {
    this.add.image(400, 286, "brown");
    timeLeft = 3;
  }

  const tileW = 40; //tile dimensions
  const tileH = 40;
  const collectorsW = 30;
  const collectorsY = 30;

  for (let row = 0; row < n_maze.length; row++) {
    for (let col = 0; col < n_maze[row].length; col++) {
      if (n_maze[row][col] === 1) {
        const wall = platforms
          .create(col * tileW, row * tileH, "tile")
          .setOrigin(0, 0)
          .refreshBody();
        wall.setDisplaySize(tileW, tileH);
      } else if (n_maze[row][col] === 2) {
        // Create coins
        const coin = coins
          .create(col * tileW, row * tileH, "coin")
          .setOrigin(0, 0)
          .refreshBody();
        coin.setCollideWorldBounds(true);

        coin.setDisplaySize(collectorsW, collectorsY);
      } else if (n_maze[row][col] === 3) {
        // Create trophy
        const prize = trophy
          .create(col * tileW, row * tileH, "prize")
          .setOrigin(0, 0)
          .refreshBody();

        prize.setCollideWorldBounds(true);

        //modify :check
        prize.setDisplaySize(collectorsW, collectorsY);
      }
    }
  }

  choosePlayer();

  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers(run, { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "turn",
    frames: [{ key: run, frame: 4 }],
    frameRate: 20,
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers(run, { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1,
  });

  player = this.physics.add.sprite(30, 545, run);
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
        const gameOverBg = this.add.graphics();
        gameOverBg.fillStyle(0x000000, 0.9);
        gameOverBg.fillRect(200, 200, 400, 150);
        puzzle += 1;
        console.log(puzzle);
        this.add.text(200, 250, " Game Over :(", {
          fontSize: "48px",
          fill: "#ff0000",
          fontStyle: "bold",
        });
        this.time.delayedCall(1500, () => {
          this.scene.restart({ index: 2 });
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
  this.physics.add.overlap(
    player,
    trophy,
    (player, prize) => DisplayLevelCompleted(player, prize, this),
    null,
    this
  );
}

function DisplayLevelCompleted(player, prize, scene) {
  prize.disableBody(true, true);
  levelCompleted = true;
  destroyMaze();
  player.setVelocity(0);

  const levelCompleteBg = player.scene.add.graphics();
  levelCompleteBg.fillStyle(0x000000, 0.9);
  levelCompleteBg.fillRect(200, 200, 400, 150);

  player.scene.add.text(210, 250, "Level Completed ;)", {
    fontSize: "36px",
    fill: "#00ff00",
    fontStyle: "bold",
  });
  this.time.delayedCall(1500, () => {
    create(2);
  });
}
function destroyMaze() {
  platforms.clear(true, true);
  coins.clear(true, true);
  trophy.clear(true, true);
}
