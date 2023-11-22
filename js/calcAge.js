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

//result fields css classes
const resultYearsCls = "js-card__result-years";
const resultMonthsCls = "js-card__result-months";
const resultDaysCls = "js-card__result-days";

//keep the input html element

let dayField;
let monthField;
let yearField;

//date values
//TODO to reset values to undefined after test
// let userDay;
// let userMonth;
// let userYea;

export const initCalcAge = () => {
  dateInputsInitialization();
  activateCalcBtn();
};

const clearDayField = () => {
  const [dayInput] = document.getElementsByClassName(dayFieldCls);
  const [dayErrEl] = document.getElementsByClassName(dayErrCls);
  const [dayLabel] = document.getElementsByClassName(dayLabelCls);
  addRemoveCls({ el: dayErrEl, clsName: hiddenCls, operation: "add" });
  addRemoveCls({ el: dayInput, clsName: inputErrCls, operation: "remove" });
  addRemoveCls({ el: dayLabel, clsName: labelErrCls, operation: "remove" });
};

const clearMonthField = () => {
  const [monthInput] = document.getElementsByClassName(monthFieldCls);
  const [monthErrEl] = document.getElementsByClassName(monthErrCls);
  const [monthLabel] = document.getElementsByClassName(monthLabelCls);
  addRemoveCls({ el: monthErrEl, clsName: hiddenCls, operation: "add" });
  addRemoveCls({ el: monthInput, clsName: inputErrCls, operation: "remove" });
  addRemoveCls({ el: monthLabel, clsName: labelErrCls, operation: "remove" });
};

const clearYearField = () => {
  const [yearInput] = document.getElementsByClassName(yearFieldCls);
  const [yearErrEl] = document.getElementsByClassName(yearErrCls);
  const [yearLabel] = document.getElementsByClassName(yearLabelCls);
  addRemoveCls({ el: yearErrEl, clsName: hiddenCls, operation: "add" });
  addRemoveCls({ el: yearInput, clsName: inputErrCls, operation: "remove" });
  addRemoveCls({ el: yearLabel, clsName: labelErrCls, operation: "remove" });
};

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

  if (!dayInput.hasFocusListener) {
    dayInput.addEventListener("focus", clearDayField);
    dayInput.hasFocusListener = true;
  }

  if (!dayInput.hasBlurListener) {
    dayInput.addEventListener("blur", dayValidators);
    dayInput.hasBlurListener = true;
  }

  if (!monthInput.hasFocusListener) {
    monthInput.addEventListener("focus", clearMonthField);
    monthInput.hasFocusListener = true;
  }

  if (!monthInput.hasBlurListener) {
    monthInput.addEventListener("blur", monthValidators);
    monthInput.hasBlurListener = true;
  }

  if (!yearInput.hasFocusListener) {
    yearInput.addEventListener("focus", clearYearField);
    yearInput.hasFocusListener = true;
  }

  if (!yearInput.hasBlurListener) {
    yearInput.addEventListener("blur", yearValidators);
    yearInput.hasBlurListener = true;
  }
};

const addRemoveCls = ({ el, clsName, operation = "add" }) => {
  if (operation === "add") {
    if (!el.classList.contains(clsName)) el.classList.add(clsName);
    return;
  }
  if (el.classList.contains(clsName)) el.classList.remove(clsName);
};

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
    clearDayField();
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
      clearDayField();
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
    clearMonthField();
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
      clearMonthField();
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
    clearYearField();
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
      clearYearField();
    }
  }
  return isValid;
};

const validate = () => {
  let isValid;
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
  const [userDay] = document.getElementsByClassName(dayFieldCls);
  const [userMonth] = document.getElementsByClassName(monthFieldCls);
  const [userYear] = document.getElementsByClassName(yearFieldCls);

  const userDate = userYear.value + "-" + userMonth.value + "-" + userDay.value;

  // Convert birthdate and currentDate to Date objects
  const birthDateObject = new Date(userDate);
  // const currentDateObject = new Date("2023-11-15");
  const currentDateObject = new Date();

  //
  // // Calculate the difference in years, months, and days
  let ageYears =
    currentDateObject.getFullYear() - birthDateObject.getFullYear();
  let ageMonths = 0;
  let ageDays = 0;

  if (currentDateObject.getDate() < birthDateObject.getDate()) {
    ageMonths =
      Math.abs(currentDateObject.getMonth() - birthDateObject.getMonth()) - 1;
    const prevMont = new Date(
      currentDateObject.getFullYear(),
      currentDateObject.getMonth(),
      0,
    );
    const prevMonthDays = prevMont.getDate();
    ageDays =
      prevMonthDays - (birthDateObject.getDate() - currentDateObject.getDate());
    console.log("days: " + ageDays);
  } else {
    ageMonths = currentDateObject.getMonth() - birthDateObject.getMonth();
    ageDays = currentDateObject.getDate() - birthDateObject.getDate();
  }

  return { years: ageYears, months: ageMonths, days: ageDays };
};

const showResults = ({ years, months, days }) => {
  const [resultYearsField] = document.getElementsByClassName(resultYearsCls);
  const [resultMonthsField] = document.getElementsByClassName(resultMonthsCls);
  const [resultDaysField] = document.getElementsByClassName(resultDaysCls);
  if (!resultYearsField || !resultMonthsField || !resultDaysField)
    throw new Error("years, months" + " or days field is missing.");
  resultYearsField.innerText = years;
  resultMonthsField.innerText = months;
  resultDaysField.innerText = days;
  console.log(years, months, days);
};

const calcAge = () => {
  const isUserDataValid = validate();
  if (!isUserDataValid) return;
  const { years, months, days } = makeCalculations();
  //TODO to finish this later
  showResults({ years, months, days });
};

const activateCalcBtn = async () => {
  const btnEl = document.getElementsByClassName(calcBtnCls)[0];
  if (!btnEl) throw new Error("Button element is missing in DOM.");
  if (!btnEl.hasListener) {
    await btnEl.addEventListener("click", calcAge);
    btnEl.hasListener = true;
  }
};
