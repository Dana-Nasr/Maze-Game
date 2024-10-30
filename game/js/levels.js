var index = 0;
var game;

button1.addEventListener("click", function () {
  stopLevel();
  startGame(1);
});

button2.addEventListener("click", function () {
  stopLevel();
  startGame(2);
});

button3.addEventListener("click", function () {
  stopLevel();
  startGame(3);
});

function startGame(level) {
  index = level;
  color = character;
  game = new Phaser.Game(config);
}

function stopLevel() {
  secondh2.style.display = "none";
  level.style.display = "none";
  button1.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
}
