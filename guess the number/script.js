const reandomNumInput = document.querySelector(".render-number");
const submit = document.querySelector(".submit");
const startGame = document.querySelector(".start-game");
const resultText = document.querySelector(".resulttext");
const gussedNum = document.querySelector(".tryNum");
const check = document.querySelector(".check");
const darkMode = document.querySelector(".Darkmode");
const header = document.querySelector(".header");
const title = document.querySelector(".title");
const tryedNum = document.querySelector(".tryedNum");
//////////////

let randomNum = Math.floor(Math.random() * 100);
let gussNumber = [];
const avey = function () {
  if (+reandomNumInput.value < 100 && +reandomNumInput.value > 0) {
    if (+reandomNumInput.value === randomNum) {
      submit.style.color = "white";
      check.style.backgroundColor = "pink";
      reandomNumInput.style.color = "red";
      resultText.textContent = "You got it! Congrats";
      gussedNum.textContent = `${gussNumber.length} attempts`;
    }
    if (+reandomNumInput.value > randomNum) {
      resultText.textContent = "Too High Number ";
      gussNumber.push(reandomNumInput.value);
      gussedNum.textContent = gussNumber;
    }
    if (+reandomNumInput.value < randomNum) {
      resultText.textContent = "Too low Number";
      gussNumber.push(reandomNumInput.value);
      gussedNum.textContent = gussNumber;
    }
  } else {
    alert("Write Number between 0 to 100");
  }
};
reandomNumInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    avey();
  }
});
submit.addEventListener("click", function () {
  avey();
});

startGame.addEventListener("click", function () {
  randomNum = Math.floor(Math.random() * 100);
  gussNumber = [];
  check.style.backgroundColor = "#D0DAD6";
  submit.style.color = "black";
  reandomNumInput.value = "";
  gussedNum.textContent = "";
  resultText.textContent = "";
});

darkMode.addEventListener("click", function () {
  check.style.backgroundColor = "#191C1B";
  title.style.color = "white";
  submit.style.backgroundColor = "#191C1B";
  submit.style.color = "white";
  header.style.color = "white";
  resultText.style.color = "white";
  gussedNum.style.color = "white";
  tryedNum.style.color = "white";
});
