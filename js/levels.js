var index = 0;
var game;
const h2 = document.querySelector("h2");
const button1 = document.getElementById("btn1");
button1.addEventListener("click", function () {
  stop();
  startGame(1);
});

const button2 = document.getElementById("btn2");
button2.addEventListener("click", function () {
  stop();
  startGame(2);
});

const button3 = document.getElementById("btn3");
button3.addEventListener("click", function () {
  stop();

  startGame(3);
});

function startGame(level) {
  index = level;
  color = character;
  clearContentFromDiv();
  game = new Phaser.Game(config);
}

function clearContentFromDiv() {
  if (content) {
    content.innerHTML = " ";
  }
}
if (flag == false) {
  button1.disabled = true;
  button2.disabled = true;
  button3.disabled = true;
}
function stop() {
  h2.style.display = "none";
  button1.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
  playerBlack.style.display = "none";
  playerRed.style.display = "none";
  playerpurple.style.display = "none";
}
