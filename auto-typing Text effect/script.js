const devloper = document.querySelector(".devloper");
// const check = "Developer";
const array = ["Developer", "Writer", "Student"];
check = array[2];

let index = 0;
let y = false; // Typing forward: false, deleting: true

const styleCode = setInterval(function () {
  if (!y) {
    // Typing effect: Add characters one by one
    devloper.textContent = check.slice(0, index);
    index++;
    if (index > check.length) {
      y = true; // Switch to deleting mode when fully typed
    }
  } else {
    // Deleting effect: Remove characters one by one
    devloper.textContent = check.slice(0, index);
    index--;
    if (index < 0) {
      y = false; // Switch back to typing mode when fully deleted
      index = 0; // Reset index for typing mode
    }
  }
  // For debugging
}, 200);
