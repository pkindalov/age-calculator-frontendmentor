import { initCalcAge } from "/js/calcAge.js";
// import { initCalcAge } from "https://pkindalov.github.io/age-calculator-frontendmentor/js/js/calcAge.js";

const init = () => {
  try {
    initCalcAge();
  } catch (error) {
    console.log(error.message);
  }
};

document.addEventListener("DOMContentLoaded", init);
document.removeEventListener("beforeunload", init);
