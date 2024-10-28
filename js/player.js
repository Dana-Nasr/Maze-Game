let character;
let flag = false;
const content = document.getElementById("content");
const playerBack = document.getElementById("black");
const playerRed = document.getElementById("red");
const playerpurple = document.getElementById("purple");
playerRed.addEventListener("click", function () {
  playerBlack.disabled = true;
  playerpurple.disabled = true;
  character = 1;
  button1.disabled = false;
  button2.disabled = false;
  button3.disabled = false;
});

playerBack.addEventListener("click", function () {
  playerRed.disabled = true;
  playerpurple.disabled = true;
  character = 2;
  button1.disabled = false;
  button2.disabled = false;
  button3.disabled = false;
});

playerpurple.addEventListener("click", function () {
  playerBlack.disabled = true;
  playerpurple.disabled = true;
  character = 3;
  button1.disabled = false;
  button2.disabled = false;
  button3.disabled = false;
});
