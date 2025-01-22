const inputValue = document.querySelector("input");
const lowerCase = document.querySelector(".lowerCase");
const upperCase = document.querySelector(".UpperCase");
const camelCase = document.querySelector(".CamelCase");
const pascalCase = document.querySelector(".PascalCase");
const snakeCase = document.querySelector(".SnakeCase");
const kebabCase = document.querySelector(".KebabCase");
const trimCase = document.querySelector(".trimCase");

inputValue.addEventListener("input", function () {
  const experiment = inputValue.value;
  const ye = experiment.split(" ").filter((word) => word);
  const arr = [];
  for (let i = 0; i < ye.length; i++) {
    const check = ye[i].slice(1);
    const y = ye[i][0].toUpperCase() + check;
    const yee = arr.push(y);
  }
  const yt = arr.join("");
  ///////
  const arrC = [];
  for (let i = 0; i < ye.length; i++) {
    const check = ye[i].slice(1);
    const y =
      i === 0 ? ye[i].toLowerCase() + check : ye[i][0].toUpperCase() + check;
    const yee = arrC.push(y);
  }
  const ytc = arrC.join("");
  const event = experiment;
  lowerCase.textContent = event.toLowerCase();
  upperCase.textContent = event.toUpperCase();
  snakeCase.textContent = event.replaceAll(" ", "_");
  kebabCase.textContent = event.replaceAll(" ", "-");
  trimCase.textContent = event.replaceAll(" ", "");
  pascalCase.textContent = yt;
  camelCase.textContent = ytc;
});
