const varibleNum = document.querySelector(".changng-number");
const addNum = document.querySelector(".add");
const minusNum = document.querySelector(".minus");
const renderNumber = document.querySelector(".render-number");
const resetButton = document.querySelector(".reset-button");
const restnum = document.querySelector(".changng-number");

addNum.addEventListener("click", function () {
  let chagingNum = Number(varibleNum.innerText);
  const inRn = parseInt(renderNumber.value);
  chagingNum = chagingNum + inRn;

  varibleNum.innerHTML = chagingNum;
});
minusNum.addEventListener("click", function () {
  let decreaseNum = Number(varibleNum.innerText);
  const inRn = parseInt(renderNumber.value);
  decreaseNum = decreaseNum - inRn;
  varibleNum.innerHTML = decreaseNum;
});

resetButton.addEventListener("click", function () {
  restnum.innerHTML = 0;
});
