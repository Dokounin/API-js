let data;
async function start() {
  try {
    const response = await fetch("https://api.imgflip.com/get_memes");
    data = await response.json();
    console.log(data);
    createMemesList(data.data.memes);
  } catch (e) {
    console.log(e);
  }
}
start();

function createMemesList(memesList) {
  document.getElementById("meme").innerHTML = `
    <select onchange="imageMemes(this.value)">
     <option>Choose a memes</option>
     ${Object.keys(memesList)
       .map(function (meme) {
         return `<option>${memesList[meme].name}</option>`;
       })
       .join("")}
    </select>
    `;
}

function imageMemes(search) {
  data.data.memes.forEach((element) => {
    // On passe dans tous les elements de data
    if (element.name === search) {
      // Si le nom est le bon :
      document.getElementById(
        "imgApi"
      ).innerHTML = `<img src="${element.url}" alt="...">`;
      //   console.log(element.image.url); // On recupère le bon element
    }
  });
}
