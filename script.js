const allRateBtn = document.querySelectorAll(".rateBtn");
const submitted = document.querySelector("#submit");
const rated = document.querySelector(".rated");
const ratingCard = document.querySelector(".rating-card");
const thankyouCard = document.querySelector(".thankyou-card");
let rate;

allRateBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    allRateBtn.forEach((btn) => btn.classList.remove("active"));

    btn.classList.add("active");
    rate = btn.value;
  });
});

submitted.addEventListener("click", () => {
  rated.innerHTML = rate;
  ratingCard.classList.add("hide");
  thankyouCard.classList.remove("hide");
});