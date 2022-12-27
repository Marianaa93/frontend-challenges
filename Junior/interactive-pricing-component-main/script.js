const price = document.getElementById("price");
const views = document.getElementById("views");
const slider = document.querySelector("#slider");

slider.oninput = function () {
  // if (slider.value <= 8) {
  //  = "8.00";
  //   views.innerHTML = "10K";
  // } else if ((slider.value > 8) & (slider.value <= 12)) {
  //   price.innerHTML = "12.00";
  //   views.innerHTML = "50K";
  // } else if ((slider.value > 12) & (slider.value <= 16)) {
  //   price.innerHTML = "16.00";
  //   views.innerHTML = "100K";
  // } else if ((slider.value > 16) & (slider.value <= 24)) {
  //   price.innerHTML = "24.00";
  //   views.innerHTML = "500K";
  // } else if ((slider.value > 24) & (slider.value <= 36)) {
  //   price.innerHTML = "36.00";
  //   views.innerHTML = "1M";
  // }
  let teste = slider.value;
  price.textContent = teste + ".00";
  labelFormat();
};

function labelFormat() {
  if (slider.value == 8) {
    views.innerHTML = "10K";
  } else if (slider.value <= 12) {
    views.innerHTML = "50K";
  } else if (slider.value == 16) {
    views.innerHTML = "100K";
  } else if (slider.value == 24) {
    views.innerHTML = "500K";
  } else if (slider.value == 36) {
    views.innerHTML = "1M";
  }
}

slider.addEventListener("mousemove", () => {});
