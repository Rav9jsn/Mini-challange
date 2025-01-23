const fullScreen = document.querySelector(".entirecontainerInput");
const containerDark = document.querySelector(".containerInput");
const label = document.querySelector(".label");
const header = document.querySelector("header");
const darkModeContent = document.querySelector(".entirecontainer");
const content = document.querySelector(".container");
const exp = document.querySelectorAll(".exp");

///////////

const fullDark = JSON.parse(localStorage.getItem("fullScreen"));
const contentDark = JSON.parse(localStorage.getItem("containerDark"));
console.log(contentDark);

fullScreen.addEventListener("change", function () {
  containerD();
  fullD();
});

function containerD() {
  containerDark.addEventListener("change", function () {
    if (containerDark.checked) {
      localStorage.setItem("containerDark", true);

      content.classList.add("Darkmode");
    } else {
      content.classList.remove("Darkmode");
      localStorage.setItem("containerDark", false);
    }
  });
}

function fullD() {
  fullScreen.addEventListener("change", function () {
    if (fullScreen.checked) {
      localStorage.setItem("fullScreen", true);
      content.classList.add("Darkmode");
      document.body.classList.add("Darkmode");
      darkModeContent.classList.add("Darkmode");
      containerDark.checked = fullScreen.checked;
    } else {
      localStorage.setItem("fullScreen", false);
      document.body.classList.remove("Darkmode");
      content.classList.remove("Darkmode");
      darkModeContent.classList.remove("Darkmode");
      containerDark.checked = fullScreen.checked;
    }
  });
}

if (fullDark) {
  fullScreen.checked = true;
  document.body.classList.add("Darkmode");
  content.classList.add("Darkmode");
  darkModeContent.classList.add("Darkmode");
  containerDark.checked = true;
}
if (contentDark) {
  containerDark.checked = true;
  content.classList.add("Darkmode");
}
fullD();
containerD();
