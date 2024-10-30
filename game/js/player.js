let character;
let flag = false;
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const secondh2 = document.getElementById("message");
const h2 = document.querySelector("h2");
const levelh2 = document.getElementById("level");
const content = document.getElementById("content");
const playerBlack = document.getElementById("black");
const playerRed = document.getElementById("red");
const playerpurple = document.getElementById("purple");

button1.style.display = "none";
button2.style.display = "none";
button3.style.display = "none";
levelh2.style.display = "none";

playerRed.addEventListener("click", function () {
  stopPlayer();
  character = 1;
});

playerBlack.addEventListener("click", function () {
  stopPlayer();
  character = 2;
});

playerpurple.addEventListener("click", function () {
  stopPlayer();
  character = 3;
});

function stopPlayer() {
  h2.style.display = "none";
  secondh2.style.display = "none";
  playerBlack.style.display = "none";
  playerRed.style.display = "none";
  playerpurple.style.display = "none";
  button1.style.display = "block";
  button2.style.display = "block";
  button3.style.display = "block";
  levelh2.style.display = "block";
}
