let data;
async function start() {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/breeds");
    data = await response.json();
    console.log(data);
    createBreedList(data);
  } catch (e) {
    console.log(e);
  }
}
start();

function createBreedList(breedList) {
  document.getElementById("breed").innerHTML = `
    <select onchange="imageCat(this.value)">
     <option>Choose a cat breed</option>
     ${Object.keys(breedList)
       .map(function (breed) {
         return `<option>${breedList[breed].name}</option>`;
       })
       .join("")}
    </select>
    `;
}

function imageCat(search) {
  data.forEach((element) => {
    // On passe dans tous les elements de data
    if (element.name === search) {
      // Si le nom est le bon :
      document.getElementById('breedImage3').innerHTML = `<img src="${element.image.url}" alt="...">`
    //   console.log(element.image.url); // On recupère le bon element
    }
  });
}


