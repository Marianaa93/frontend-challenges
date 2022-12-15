const wrapsubmit = document.querySelector("#wrapSubmit");
const wrapSubmited = document.querySelector(".wrap__submitted");
const form = document.querySelector(".rating-form");
const selector = "input[name=ratings]:checked";
const checkedInput = document.querySelector(selector);

// function handleSubmit(event) {
//   event.preventDefault();
//   if (checkedInput !== null) {
//     const selectedRating = document.querySelector("#selection");
//     selectedRating.textContent =
//       "You selected " + checkedInput.getAttribute("value") + " out of 5";

//   }
// }

// const submitBtn = document.querySelector("#button__submit");
// submitBtn.addEventListener("click", handleSubmit);

form.addEventListener("submit", function (e) {
  e.preventDefault(); //prevents Browser from refreshing
  const selector = "input[name=ratings]:checked";
  const checkedInput = document.querySelector(selector);

  // User needs to select an Option in order to go on
  if (checkedInput !== null) {
    const selectedRating = document.querySelector("#selection");
    selectedRating.textContent =
      "You selected " + checkedInput.getAttribute("value") + " out of 5";
    wrapsubmit.style.display = "none";
    wrapSubmited.style.display = "block";
  }
});
