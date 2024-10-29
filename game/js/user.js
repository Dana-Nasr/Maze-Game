var startButton = document.getElementById("start-btn");

console.log("Script loaded");

startButton.addEventListener("click", logger);

function logger() {
  var username = document.getElementById("username").value;
  if(!username){ username = "Guest";}
  window.location.href = `./game.html?username=${encodeURIComponent(username)}`;
}
