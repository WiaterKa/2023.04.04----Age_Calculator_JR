const dayInpRef = document.querySelector(".fi1");
const monthInpRef = document.querySelector(".fi2");
const yearInpRef = document.querySelector(".fi3");

const inpOne = document.querySelector(".inp1");
const inpTwo = document.querySelector(".inp2");
const inpThree = document.querySelector(".inp3");

console.log(inpOne);

dayInpRef.addEventListener("change", () => {
  if (!dayInpRef.value < 0 || dayInpRef.value > 31) {
    inpOne.children[4].innerText = "Must be a valid day";
    inpOne.children[0].style.color = "red";
    inpOne.children[2].style.borderColor = "red";
  } else {
    inpOne.children[4].innerText = "";
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
  const date = new Date();
  const currentYear = date.getFullYear();

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
