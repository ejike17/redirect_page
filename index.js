let btn = document.getElementById("btn");
let counter = document.getElementById("counter");
let messageDisplay = document.getElementById("display");
let count = 5;

btn.addEventListener("click", function () {
  clearInterval(redirectCounter);
  clearInterval(redirect);
  messageDisplay.textContent = "Redirect Canclelled";
});

let redirect = setTimeout(function () {
  window.location.href = "https://google.com";
}, 4000);

let redirectCounter = setInterval(function () {
  count--;
  counter.textContent = count;
}, 1000);
