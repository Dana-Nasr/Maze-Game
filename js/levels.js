var index = 0;
var game;
const content = document.getElementById("content");

const button1 = document.getElementById("btn1");
button1.addEventListener("click", function () {
  button1.disabled = true;
  startGame(1);
});

const button2 = document.getElementById("btn2");
button2.addEventListener("click", function () {
  button2.disabled = true;
  startGame(2);
});

const button3 = document.getElementById("btn3");
button3.addEventListener("click", function () {
  button3.disabled = true;
  startGame(3);
});

function startGame(level) {
  index = level;
  clearContentFromDiv();
  game = new Phaser.Game(config);
}

function clearContentFromDiv() {
  if (content) {
    content.innerHTML = " ";
  }
}
