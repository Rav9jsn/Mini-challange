const billInput = document.querySelector(".amount");
const tipButton = document.querySelectorAll(".tipnum");
const customTip = document.querySelector(".customTip");
const NumberOFPeople = document.querySelector(".NoOfPeople");
const generateBill = document.querySelector(".generatebill");
const genrateTip = document.querySelector(".generate-tip");
const genrateTotal = document.querySelector(".generate-total");
const genratePerPerson = document.querySelector(".generate-eachValue");
const resetButton = document.querySelector(".restButoon");

const arr = [];
function tipB() {
  tipButton.forEach((t) => {
    t.addEventListener("click", function () {
      let y = t.textContent;
      arr.push(y);
      if (arr.length === 1) {
        customTip.value = arr.toString().split("").slice(0, -1).join("");
      } else {
        customTip.value = "";
        customTip.value = arr[arr.length - 1]
          .toString()
          .split("")
          .slice(0, -1)
          .join("");
      }
    });
  });
}

tipB();

///////
generateBill.addEventListener("click", function () {
  const bill = +billInput.value;

  //   if()
  const tip = +customTip.value / 100;
  const numPeople = +NumberOFPeople.value;
  const tipamount = tip * bill;
  const total = bill + bill * tip;
  const eachPersonBill = (bill + bill * tip) / numPeople;
  genrateTip.textContent = `₹${parseFloat(`${tipamount}`).toFixed(2)}`;
  genrateTotal.textContent = `₹${parseFloat(`${total}`).toFixed(2)}`;
  genratePerPerson.textContent = `₹${parseFloat(`${eachPersonBill}`).toFixed(
    2
  )}`;
});
resetButton.addEventListener("click", function () {
  billInput.value = "";
  customTip.value = "";
  NumberOFPeople.value = "";
  genrateTip.textContent = "";
  genrateTotal.textContent = "";
  eachPersonBill.textContent = "";
});
