const adviceNumber = document.getElementById("adviceNumber");
const adviceText = document.getElementById("adviceText");
const button = document.getElementById("icon-dice");

button.addEventListener("click", getAdvice);

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => data.slip)
    .then((data) => {
      adviceNumber.textContent = data.id;
      adviceText.textContent = data.advice;
    });
}
