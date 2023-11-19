import { initCalcAge } from "/js/calcAge.js";

const init = () => {
  try {
    initCalcAge();
  } catch (error) {
      console.log(error.message);
  }
};

document.addEventListener("DOMContentLoaded", init);
document.removeEventListener("beforeunload", init);
