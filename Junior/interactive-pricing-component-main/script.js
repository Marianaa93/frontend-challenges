const price = document.getElementById("price");
const views = document.getElementById("views");
const slider = document.querySelector("#slider");
const discountApplied = document.getElementById("discount");

const prices = [
  {
    value: 8,
    traffic: "10k",
  },
  {
    value: 12,
    traffic: "50k",
  },
  {
    value: 16,
    traffic: "100k",
  },
  {
    value: 24,
    traffic: "500k",
  },
  {
    value: 36,
    traffic: "1M",
  },
];

function appliedDiscount() {
  let sliderValue = prices[slider.value].value;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const finalPrice = discountApplied.checked
    ? sliderValue - sliderValue * 0.25
    : sliderValue;

  price.textContent = formatter.format(finalPrice);
}

function labelFormat() {
  views.innerHTML = prices[slider.value].traffic;
}

slider.addEventListener("input", () => {
  labelFormat();
  appliedDiscount();
});

discountApplied.addEventListener("change", () => {
  appliedDiscount();
});
