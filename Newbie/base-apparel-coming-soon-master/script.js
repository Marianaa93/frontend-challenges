const inputEl = document.querySelector("#email");
const btn = document.querySelector("#submit");
const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const iconErrorEl = document.querySelector(".icon-error");
const textErrorEl = document.querySelector(".text-error");
const fromGroupEl = document.querySelector(".form_submit");
let errors = [];

btn.addEventListener("click", (e) => {
  textErrorEl.classList.remove("text-success");
  errors = [];
  e.preventDefault();
  const email = inputEl.value;

  if (email == "" || email === undefined) {
    errors.push("Please provide us your email");
    iconErrorEl.style.display = "block";
    textErrorEl.innerText = errors[0];
  } else if (!email.match(RegEmail)) {
    errors.push("Please provide us your valid email");
    iconErrorEl.style.display = "block";
    textErrorEl.innerText = errors[0];
  }

  if (!errors.length > 0) {
    iconErrorEl.style.display = "none";
    textErrorEl.classList.add("text-success");
    textErrorEl.innerText = "Thank you for subscribing to our newsletter.";
  }
});
