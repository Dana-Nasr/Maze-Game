const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");
console.log(username);
document.getElementById("welcome-message").textContent =
  `Welcome, ${username}! `;
