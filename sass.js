const myBody = document.querySelector("body");
const add = document.querySelector(".add");
const multiply = document.querySelector(".multiply");
const subtract = document.querySelector(".subtract");
const divide = document.querySelector(".divide");
const toggleOn = document.querySelector(".on");
const toggleOff = document.querySelector(".off");
const firstNum = document.querySelector(".firstNum");
const secNum = document.querySelector(".secNum");
const border = "2px solid white";
const borderB = "2px solid black";
const path = document.querySelector(".path");
const p = document.querySelector("p");

toggleOn.addEventListener("click", function () {
  myBody.style.background = "black";
  myBody.style.color = "white";
  add.style.border = border;
  multiply.style.border = border;
  subtract.style.border = border;
  divide.style.border = border;
  firstNum.style.borderBottom = border;
  secNum.style.borderBottom = border;
  toggleOn.style.display = "none";
  toggleOff.style.display = "block";
  firstNum.style.color = "white";
  secNum.style.color = "white";
  path.style.fill = "white";
});

toggleOff.addEventListener("click", function () {
  myBody.style.background = "white";
  myBody.style.color = "black";
  add.style.border = borderB;
  multiply.style.border = borderB;
  subtract.style.border = borderB;
  divide.style.border = borderB;
  firstNum.style.borderBottom = borderB;
  secNum.style.borderBottom = borderB;
  toggleOn.style.display = "block";
  toggleOff.style.display = "none";
  path.style.fill = "white";
  firstNum.style.color = "black";
  secNum.style.color = "black";

  const myNum = firstNum.value;
  const num = secNum.value;
  const adde = num + myNum;

  console.log(adde);
});

add.addEventListener("click", function () {
  let fir = firstNum.value;
  let sec = secNum.value;

  p.textContent = (fir - -sec).toLocaleString();
});
divide.addEventListener("click", function () {
  p.textContent = (firstNum.value / secNum.value).toLocaleString();
});
subtract.addEventListener("click", function () {
  p.textContent = (firstNum.value - secNum.value).toLocaleString();
});
multiply.addEventListener("click", function () {
  p.textContent = (firstNum.value * secNum.value).toLocaleString();
});

const myNum = firstNum.value;
const num = secNum.value;
const adde = num + myNum;

console.log(adde);
