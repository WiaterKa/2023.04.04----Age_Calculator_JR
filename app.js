// FORM VALIDATION

const dayInpRef = document.querySelector(".fi1");
const monthInpRef = document.querySelector(".fi2");
const yearInpRef = document.querySelector(".fi3");

const inpOne = document.querySelector(".inp1");
const inpTwo = document.querySelector(".inp2");
const inpThree = document.querySelector(".inp3");

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();

dayInpRef.addEventListener("change", () => {
  if (!dayInpRef.value < 0 || dayInpRef.value > 31) {
    inpOne.children[3].innerText = "Must be a valid day";
    inpOne.children[0].style.color = "red";
    inpOne.children[2].style.borderColor = "red";
  } else {
    inpOne.children[3].innerText = "";
    inpOne.children[0].style.color = "#716f6f";
    inpOne.children[2].style.borderColor = "#dcdcdc";
  }
});

monthInpRef.addEventListener("change", () => {
  if (!monthInpRef.value < 0 || monthInpRef.value > 12) {
    inpTwo.children[3].innerText = "Must be a valid month";
    inpTwo.children[0].style.color = "red";
    inpTwo.children[2].style.borderColor = "red";
  } else {
    inpTwo.children[3].innerText = "";
    inpTwo.children[0].style.color = "#716f6f";
    inpTwo.children[2].style.borderColor = "#dcdcdc";
  }
});

yearInpRef.addEventListener("change", () => {
  if (yearInpRef.value > currentYear) {
    inpThree.children[3].innerText = "Must be in the past";
    inpThree.children[0].style.color = "red";
    inpThree.children[2].style.borderColor = "red";
  } else {
    inpThree.children[3].innerText = "";
    inpThree.children[0].style.color = "#716f6f";
    inpThree.children[2].style.borderColor = "#dcdcdc";
  }
});

//CALCULATION

const formRef = document.querySelector("form");

const yearsSpan = document.querySelector(".years");
const monthsSpan = document.querySelector(".months");
const daysSpan = document.querySelector(".days");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();

  let birthdate = [];

  birthdate.push(yearInpRef.value, monthInpRef.value, dayInpRef.value);

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    yearsSpan.innerText = years;
    monthsSpan.innerText = months;
    daysSpan.innerText = days;
  };

  calculateAge(birthdate);
});
