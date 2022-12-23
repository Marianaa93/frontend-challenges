const error = document.querySelector(".error");
const email = document.getElementById("email");
const form = document.getElementById("form");

function submitBtn(event) {
  event.preventDefault();
  // email.preventDefault();
  let re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value)) {
    error.innerText = "";
    console.log("ok");
  } else {
    error.innerText = "ooops!check your email";
  }
}
form.addEventListener("submit", submitBtn);
