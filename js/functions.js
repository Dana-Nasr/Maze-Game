function collectCoin(player, coin) {
    coin.disableBody(true, true);
    score += 10;
    scoreText.setText("Score: " + score);
  }
  
  function DisplayLevelCompleted(player, prize) {
    prize.disableBody(true, true);
    levelCompleted = true;
    player.setVelocity(0);
  
    const levelCompleteBg = player.scene.add.graphics();
    levelCompleteBg.fillStyle(0x000000, 0.9);
    levelCompleteBg.fillRect(200, 200, 400, 150);
  
    player.scene.add.text(210, 250, "Level Completed ;)", {
      fontSize: "36px",
      fill: "#00ff00",
      fontStyle: "bold",
    });
  }