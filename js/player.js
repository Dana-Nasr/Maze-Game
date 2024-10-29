let character;
let flag = false;
const content = document.getElementById("content");
const playerBlack = document.getElementById("black");
const playerRed = document.getElementById("red");
const playerpurple = document.getElementById("purple");
playerRed.addEventListener("click", function () {
  disabled();
  character = 1;
});

playerBlack.addEventListener("click", function () {
  disabled();
  character = 2;
});

playerpurple.addEventListener("click", function () {
  disabled();
  character = 3;
});

function disabled() {
  playerBlack.disabled = true;
  playerpurple.disabled = true;
  playerRed.disabled = true;
  button1.disabled = false;
  button2.disabled = false;
  button3.disabled = false;
}
