// const devloper = document.querySelector(".devloper");
// // const check = "Developer";
// const array = ["Developer", "Writer", "Student"];

// let index = 0;
// let wordindex = 0;
// let y = false; // Typing forward: false, deleting: true

// const styleCode = setInterval(function () {
//   if (!y) {
//     // Typing effect: Add characters one by one
//     devloper.textContent = array[wordindex].slice(0, index);
//     index++;
//     if (index > array[wordindex].length) {
//       y = true; // Switch to deleting mode when fully typed
//     }
//   } else {
//     // Deleting effect: Remove characters one by one
//     devloper.textContent = array[wordindex].slice(0, index);
//     index--;
//     if (index < 0) {
//       y = false; // Switch back to typing mode when fully deleted
//       index = 0; // Reset index for typing mode
//     }
//   }

//   // For debugging
// }, 200);

const devloper = document.querySelector(".devloper");
const array = ["Developer", "Writer", "Student", "Youtuber"];

let index = 0; // Current character index for typing/deleting
let wordindex = 0; // Current word index in the array
let y = false; // Typing forward: false, deleting: true

const styleCode = setInterval(function () {
  if (!y) {
    // Typing effect: Add characters one by one
    devloper.textContent = array[wordindex].slice(0, index);
    index++;
    if (index > array[wordindex].length) {
      y = true; // Switch to deleting mode when fully typed
    }
  } else {
    // Deleting effect: Remove characters one by one
    devloper.textContent = array[wordindex].slice(0, index);
    index--;
    if (index < 0) {
      y = false; // Switch back to typing mode when fully deleted
      index = 0; // Reset index for typing mode
      if (wordindex + 1 < array.length) {
        ++wordindex;
      } else {
        wordindex = 0;
      }
      // Move to the next word in the array
    }
  }
}, 100);
