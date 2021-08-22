const slider = document.querySelector(".slider__range");
const toggler = document.querySelector(".toggle__input");
const pageViews = document.querySelector(".slider__views");
const price = document.querySelector(".slider__price");

const sliderFill = function (slider) {
  const sliderColors = {
    empty: "hsl(224, 65%, 95%)",
    fill: "hsl(174, 77%, 80%)",
  };
  const percentage =
    (100 * (slider.value - slider.min)) / (slider.max - slider.min);
  const bg = `linear-gradient(90deg, ${sliderColors.fill} ${percentage}%, ${sliderColors.empty} ${percentage}% )`;

  slider.style.background = bg;
};

const updateValue = function (slider) {
  const valueToUpdate = function (views, prices) {
    pageViews.textContent = `${views} pageviews`;
    price.textContent = `$${
      toggler.checked ? (prices * 0.75).toFixed(2) : prices.toFixed(2)
    }`;
  };
  if (slider.value === "0") valueToUpdate("10k", 8);
  if (slider.value === "25") valueToUpdate("50k", 12);
  if (slider.value === "50") valueToUpdate("100k", 16);
  if (slider.value === "75") valueToUpdate("500k", 24);
  if (slider.value === "100") valueToUpdate("1M", 36);
};

toggler.addEventListener("click", function () {
  updateValue(slider);
});

slider.addEventListener("input", (e) => {
  sliderFill(e.target);
  updateValue(e.target);
});

sliderFill(slider);
