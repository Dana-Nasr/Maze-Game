let run;
var players = ["red", "black", "purple"];

function collectCoin(player, coin) {
  coin.disableBody(true, true);
  score += 10;
  scoreText.setText("Score: " + score);
}

function choosePlayer() {
  if (character == 1) {
    run = players[0];
    console.log(players[0]);
  } else if (character == 2) {
    run = players[1];
  } else {
    run = players[2];
  }
}
