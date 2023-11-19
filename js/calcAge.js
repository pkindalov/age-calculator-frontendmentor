//date inputs css classes
const dayFieldCls = "js-date";
const monthFieldCls = "js-month";
const yearFieldCls = "js-year";
const hiddenCls = "u-hidden";

//label css classes
const dayLabelCls = "js-datepicker__label--day";
const monthLabelCls = "js-datepicker__label--month";
const yearLabelCls = "js-datepicker__label--year";

//error css classes
const inputErrCls = "u-error-input";
const labelErrCls = "u-error-label";

//date span css classes
const dayErrCls = "js-date-err";
const monthErrCls = "js-month-err";
const yearErrCls = "js-year-err";

const calcBtnCls = "js-calc-btn";

//keep the input html element

let dayField;
let monthField;
let yearField;

//date values
//TODO to reset values to undefined after test
let userDay = 24;
let userMonth = 9;
let userYear = 1984;

export const initCalcAge = () => activateCalcBtn();

const dateInputsInitialization = () => {
  const [dayInput] = document.getElementsByClassName(dayFieldCls);
  const [monthInput] = document.getElementsByClassName(monthFieldCls);
  const [yearInput] = document.getElementsByClassName(yearFieldCls);
  if (!dayInput) throw new Error("Day input is not found in DOM.");
  if (!monthInput) throw new Error("Day input is not found in DOM.");
  if (!yearInput) throw new Error("Day input is not found in DOM.");
  dayField = dayInput;
  monthField = monthInput;
  yearField = yearInput;
};

const addRemoveCls = ({ el, clsName, operation = "add" }) => {
  if (operation === "add") {
    if (!el.classList.contains(clsName)) el.classList.add(clsName);
    return;
  }
  if (el.classList.contains(clsName)) el.classList.remove(clsName);
};

// const makeVisibe = (dayErrEl) => {
//   if (dayErrEl.classList.contains(hiddenCls))
//     dayErrEl.classList.remove(hiddenCls);
// };
//
// const makeHidden = (dayErrEl) => {
//   if (!dayErrEl.classList.contains(hiddenCls))
//     dayErrEl.classList.add(hiddenCls);
// };

// const checkIsNumber = (str) => !isNaN(str);

const validate = () => {
  //span containing error messages
  const [dayErrEl] = document.getElementsByClassName(dayErrCls);
  const [monthErrEl] = document.getElementsByClassName(monthErrCls);
  const [yearErrEl] = document.getElementsByClassName(yearErrCls);

  //inputs
  const [dayInput] = document.getElementsByClassName(dayFieldCls);
  const [monthInput] = document.getElementsByClassName(monthFieldCls);
  const [yearInput] = document.getElementsByClassName(yearFieldCls);

  //labels on top of inputs
  const [dayLabel] = document.getElementsByClassName(dayLabelCls);
  const [monthLabel] = document.getElementsByClassName(monthLabelCls);
  const [yearLabel] = document.getElementsByClassName(yearLabelCls);

  if (!dayErrEl) throw new Error("Day error span element is missing");
  if (!monthErrEl) throw new Error("Month error span element is missing");
  if (!yearErrEl) throw new Error("Year error span element is missing");

  let isValid = true;
  let msg;

  //Day field checks
  if (!dayField.value) {
    isValid = false;
    msg = "This field is required";
    dayErrEl.innerText = msg;
    // makeVisibe(dayErrEl);
    addRemoveCls({ el: dayErrEl, clsName: hiddenCls, operation: "remove" });
    addRemoveCls({ el: dayInput, clsName: inputErrCls, operation: "add" });
    addRemoveCls({ el: dayLabel, clsName: labelErrCls, operation: "add" });
  } else {
    // makeHidden(dayErrEl);
    addRemoveCls({ el: dayErrEl, clsName: hiddenCls, operation: "add" });
    addRemoveCls({ el: dayInput, clsName: inputErrCls, operation: "remove" });
    addRemoveCls({ el: dayLabel, clsName: labelErrCls, operation: "remove" });
  }

  if (dayField.value) {
    const dayNumber = +dayField.value;
    if (dayNumber < 1 || dayNumber > 31) {
      isValid = false;
      msg = "This number is invalid";
      dayErrEl.innerText = msg;
      // makeVisibe(dayErrEl);
      addRemoveCls({ el: dayErrEl, clsName: hiddenCls, operation: "remove" });
      addRemoveCls({ el: dayInput, clsName: inputErrCls, operation: "add" });
      addRemoveCls({ el: dayLabel, clsName: labelErrCls, operation: "add" });
    } else {
      // makeHidden(dayErrEl);
      addRemoveCls({ el: dayErrEl, clsName: hiddenCls, operation: "add" });
      addRemoveCls({ el: dayInput, clsName: inputErrCls, operation: "remove" });
      addRemoveCls({ el: dayLabel, clsName: labelErrCls, operation: "remove" });
    }
  }

  //Month field checks
  if (!monthField.value) {
    isValid = false;
    msg = "This field is required";
    monthErrEl.innerText = msg;
    // makeVisibe(monthErrEl);
    addRemoveCls({ el: monthErrEl, clsName: hiddenCls, operation: "remove" });
    addRemoveCls({ el: monthInput, clsName: inputErrCls, operation: "add" });
    addRemoveCls({ el: monthLabel, clsName: labelErrCls, operation: "add" });
  } else {
    // makeHidden(monthErrEl);
    addRemoveCls({ el: monthErrEl, clsName: hiddenCls, operation: "add" });
    addRemoveCls({ el: monthInput, clsName: inputErrCls, operation: "remove" });
    addRemoveCls({ el: monthLabel, clsName: labelErrCls, operation: "remove" });
  }

  //Year fields checks
  if (!yearField.value) {
    isValid = false;
    msg = "This field is required";
    yearErrEl.innerText = msg;
    // makeVisibe(yearErrEl);
    addRemoveCls({ el: yearErrEl, clsName: hiddenCls, operation: "remove" });
    addRemoveCls({ el: yearInput, clsName: inputErrCls, operation: "add" });
    addRemoveCls({ el: yearLabel, clsName: labelErrCls, operation: "add" });
  } else {
    // makeHidden(yearErrEl);
    addRemoveCls({ el: yearErrEl, clsName: hiddenCls, operation: "add" });
    addRemoveCls({ el: yearInput, clsName: inputErrCls, operation: "remove" });
    addRemoveCls({ el: yearLabel, clsName: labelErrCls, operation: "remove" });
  }

  // if (checkIsNumber(dayField.value)) {
  //   isValid = false;
  //   msg = "The provided value is not a number.";
  //   dayErrEl.innerText = msg;
  //   makeVisibe(dayErrEl);
  // } else {
  //   makeHidden(dayErrEl);
  // }

  return isValid;
};

const makeCalculations = () => {
  const userDate = userYear + "-" + userMonth + "-" + userDay;

  // Convert birthdate and currentDate to Date objects
  const birthDateObject = new Date(userDate);
  const currentDateObject = new Date();

  // Calculate the difference in years, months, and days
  let ageYears =
    currentDateObject.getFullYear() - birthDateObject.getFullYear();
  let ageMonths = currentDateObject.getMonth() - birthDateObject.getMonth();
  let ageDays = currentDateObject.getDate() - birthDateObject.getDate();

  // If the day of the birthdate is greater than the day of the currentDate
  if (ageDays < 0) {
    // Calculate the total days in the previous month
    ageDays += new Date(
      currentDateObject.getFullYear(),
      currentDateObject.getMonth(),
      0,
    ).getDate();
    ageMonths--; // Subtract 1 from months

    // If the month of the birthdate is greater than the month of the currentDate
    if (ageMonths < 0) {
      ageMonths += 12; // Add 12 to months
      ageYears--; // Subtract 1 from years
    }
  }

  // Return the result as an object
  return { years: ageYears, months: ageMonths, days: ageDays };
  // const currentDate = new Date();
  // const currentMonth = currentDate.getMonth() + 1;
  // const currentDay = currentDate.getDate();
  // let resultYears = currentDate.getFullYear() - +userYear;
  // let resultMonths = Math.abs(currentMonth - +userMonth);
  // let resultDays = Math.abs(currentDay - (+userDay));
  // // if(currentMonth < userMonth) resultYears--;
  // if (currentMonth <= userMonth && currentDay < userDay) resultYears--;
  // console.log(resultYears, resultMonths, resultDays);
};

const calcAge = () => {
  dateInputsInitialization();
  //TODO to finish this later
  const isUserDataValid = validate();
  if (!isUserDataValid) return;
  // const { years, months, days} = makeCalculations();
  //  console.log(years, months, days);
};

const activateCalcBtn = async () => {
  const btnEl = document.getElementsByClassName(calcBtnCls)[0];
  if (!btnEl) throw new Error("Button element is missing in DOM.");
  if (!btnEl.hasListener) {
    await btnEl.addEventListener("click", calcAge);
    btnEl.hasListener = true;
  }
};
