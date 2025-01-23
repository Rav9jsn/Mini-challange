const inputValue = document.querySelector(".input-value");

let previousValue = "";
inputValue.addEventListener("input", function (number) {
  number = inputValue.value;

  if (/\d+$/g.test(number)) {
    inputValue.value = number;
  } else {
    inputValue.value = number.substring(0, number.length - 1);
  }
  if (number.length === 4 && previousValue.length < number.length) {
    const threenum = inputValue.value;
    const ye = threenum.split("");
    const y = ye.pop();
    let yo = `+(${ye.join("")})-`;
    inputValue.value = yo;
  }
  if (number.length === 7 && previousValue.length > number.length) {
    const o = inputValue.value;
    const y = o.substring(2, 5);
    inputValue.value = y;
  }
  previousValue = number;
});
