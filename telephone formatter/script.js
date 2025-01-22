const inputValue = document.querySelector(".input-value");

inputValue.addEventListener("input", function (number) {
  number = inputValue.value;
  //   console.log(number);
  //   console.log(number.length);
  if (number.length === 4) {
    const threenum = inputValue.value;
    const ye = threenum.split("");
    const y = ye.pop();
    inputValue.value = `+(${ye.join("")})-`;
  }
});
