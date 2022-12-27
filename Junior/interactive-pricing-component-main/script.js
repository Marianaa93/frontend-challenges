const price = document.getElementById("price");
const views = document.getElementById("views");
const slider = document.querySelector("#slider");
const discountApplied = document.getElementById("discount");

function appliedDiscount() {
  let sliderValue = slider.value;

  if (!discountApplied.checked) {
    price.textContent = sliderValue + ".00";
  } else {
    price.textContent = sliderValue * 0.25 + ".00";
  }
}

function labelFormat() {
  if (slider.value == 8) {
    views.innerHTML = "10K";
  } else if (slider.value == 12) {
    views.innerHTML = "50K";
  } else if (slider.value == 16) {
    views.innerHTML = "100K";
  } else if (slider.value == 24) {
    views.innerHTML = "500K";
  } else if (slider.value == 36) {
    views.innerHTML = "1M";
  }
}

slider.oninput = function () {
  labelFormat();
  appliedDiscount();
};

slider.addEventListener("mousemove", () => {
  labelFormat();
  discountApplied();
});
