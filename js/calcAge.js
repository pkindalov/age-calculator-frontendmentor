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

const dayValidators = () => {
  const [dayInput] = document.getElementsByClassName(dayFieldCls);
  const [dayErrEl] = document.getElementsByClassName(dayErrCls);
  const [dayLabel] = document.getElementsByClassName(dayLabelCls);
  if (!dayInput) throw new Error("Day error input not found!");
  if (!dayErrEl) throw new Error("Day error span element is missing!");
  if (!dayLabel) throw new Error("Day label is not found!");
  let isValid = true;
  let msg;
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
      addRemoveCls({ el: dayErrEl, clsName: hiddenCls, operation: "remove" });
      addRemoveCls({ el: dayInput, clsName: inputErrCls, operation: "add" });
      addRemoveCls({ el: dayLabel, clsName: labelErrCls, operation: "add" });
    } else {
      addRemoveCls({ el: dayErrEl, clsName: hiddenCls, operation: "add" });
      addRemoveCls({ el: dayInput, clsName: inputErrCls, operation: "remove" });
      addRemoveCls({ el: dayLabel, clsName: labelErrCls, operation: "remove" });
    }
  }

  return isValid;
};

const monthValidators = () => {
  const [monthInput] = document.getElementsByClassName(monthFieldCls);
  const [monthErrEl] = document.getElementsByClassName(monthErrCls);
  const [monthLabel] = document.getElementsByClassName(monthLabelCls);
  if (!monthInput) throw new Error("Month error input not found!");
  if (!monthErrEl) throw new Error("Month error span element is missing!");
  if (!monthLabel) throw new Error("Month label is not found!");
  let isValid = true;
  let msg;
  if (!monthField.value) {
    isValid = false;
    msg = "This field is required";
    monthErrEl.innerText = msg;
    addRemoveCls({ el: monthErrEl, clsName: hiddenCls, operation: "remove" });
    addRemoveCls({ el: monthInput, clsName: inputErrCls, operation: "add" });
    addRemoveCls({ el: monthLabel, clsName: labelErrCls, operation: "add" });
  } else {
    // makeHidden(monthErrEl);
    addRemoveCls({ el: monthErrEl, clsName: hiddenCls, operation: "add" });
    addRemoveCls({ el: monthInput, clsName: inputErrCls, operation: "remove" });
    addRemoveCls({ el: monthLabel, clsName: labelErrCls, operation: "remove" });
  }

  if (monthField.value) {
    const monthNumber = +monthField.value;
    if (monthNumber < 1 || monthNumber > 12) {
      isValid = false;
      msg = "Must be a valid month";
      monthErrEl.innerText = msg;
      addRemoveCls({ el: monthErrEl, clsName: hiddenCls, operation: "remove" });
      addRemoveCls({ el: monthInput, clsName: inputErrCls, operation: "add" });
      addRemoveCls({ el: monthLabel, clsName: labelErrCls, operation: "add" });
    } else {
      addRemoveCls({ el: monthErrEl, clsName: hiddenCls, operation: "add" });
      addRemoveCls({
        el: monthInput,
        clsName: inputErrCls,
        operation: "remove",
      });
      addRemoveCls({
        el: monthLabel,
        clsName: labelErrCls,
        operation: "remove",
      });
    }
  }
  return isValid;
};

const yearValidators = () => {
  const [yearInput] = document.getElementsByClassName(yearFieldCls);
  const [yearErrEl] = document.getElementsByClassName(yearErrCls);
  const [yearLabel] = document.getElementsByClassName(yearLabelCls);
  if (!yearInput) throw new Error("Year error input not found!");
  if (!yearErrEl) throw new Error("Year error span element is missing!");
  if (!yearLabel) throw new Error("Year label is not found!");
  let isValid = true;
  let msg;
  if (!yearField.value) {
    isValid = false;
    msg = "This field is required";
    yearErrEl.innerText = msg;
    addRemoveCls({ el: yearErrEl, clsName: hiddenCls, operation: "remove" });
    addRemoveCls({ el: yearInput, clsName: inputErrCls, operation: "add" });
    addRemoveCls({ el: yearLabel, clsName: labelErrCls, operation: "add" });
  } else {
    addRemoveCls({ el: yearErrEl, clsName: hiddenCls, operation: "add" });
    addRemoveCls({ el: yearInput, clsName: inputErrCls, operation: "remove" });
    addRemoveCls({ el: yearLabel, clsName: labelErrCls, operation: "remove" });
  }

  if (yearField.value) {
    const yearNumber = +yearField.value;
    const currentYear = new Date().getFullYear();
    if (Math.abs(currentYear - yearNumber) > 100) {
      isValid = false;
      msg = "Must be in the past";
      yearErrEl.innerText = msg;
      addRemoveCls({ el: yearErrEl, clsName: hiddenCls, operation: "remove" });
      addRemoveCls({ el: yearInput, clsName: inputErrCls, operation: "add" });
      addRemoveCls({ el: yearLabel, clsName: labelErrCls, operation: "add" });
    } else {
      addRemoveCls({ el: yearErrEl, clsName: hiddenCls, operation: "add" });
      addRemoveCls({
        el: yearInput,
        clsName: inputErrCls,
        operation: "remove",
      });
      addRemoveCls({
        el: yearLabel,
        clsName: labelErrCls,
        operation: "remove",
      });
    }
  }
  return isValid;
};

const validate = () => {
  let isValid = true;
  let msg;
  isValid = dayValidators() && monthValidators() && yearValidators();

  if (isValid) {
    const userDate = new Date(
      yearField.value + "-" + monthField.value + "-" + dayField.value,
    );
    const lastMonthDate = new Date(
      userDate.getFullYear(),
      userDate.getMonth(),
      0,
    );
    const monthNumberOfDays = lastMonthDate.getDate();
    const [dayInput] = document.getElementsByClassName(dayFieldCls);
    const [dayErrEl] = document.getElementsByClassName(dayErrCls);
    const [dayLabel] = document.getElementsByClassName(dayLabelCls);
    if (+dayField.value > monthNumberOfDays) {
      isValid = false;
      msg = "This number is invalid";
      dayErrEl.innerText = msg;
      addRemoveCls({ el: dayErrEl, clsName: hiddenCls, operation: "remove" });
      addRemoveCls({ el: dayInput, clsName: inputErrCls, operation: "add" });
      addRemoveCls({ el: dayLabel, clsName: labelErrCls, operation: "add" });
    } else {
      addRemoveCls({ el: dayErrEl, clsName: hiddenCls, operation: "add" });
      addRemoveCls({ el: dayInput, clsName: inputErrCls, operation: "remove" });
      addRemoveCls({ el: dayLabel, clsName: labelErrCls, operation: "remove" });
    }
  }

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

  return { years: ageYears, months: ageMonths, days: ageDays };
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
