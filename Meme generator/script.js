const genrateMeme = document.querySelector(".genrateMeme");
const memeTitle = document.querySelector(".memeTitle");
const memeImage = document.querySelector(".memeImage");
const memeBy = document.querySelector(".memeBY");

function loadImage() {
  let fetchRes = fetch("https://meme-api.com/gimme/wholesomememes");

  const dataAll = fetchRes
    .then((res) => res.json())
    .then((data) => {
      const authorName = data.author;
      const imgUrl = data.url;
      const memeName = data.title;
      memeTitle.textContent = memeName;
      memeImage.src = imgUrl;
      memeBy.textContent = authorName;
    });
}
loadImage();
genrateMeme.addEventListener("click", loadImage);
