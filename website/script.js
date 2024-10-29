const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');


burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});

var startButton = document.getElementById("start");


startButton.addEventListener("click", logger);

function logger() {
  window.location.href = `../user.html`;
}