let data;
async function start() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/3");
    data = await response.json();
    console.log(data);
    randomPicture(data.message);
  } catch (e) {
    console.log(e);
    s;
    s;
  }
}

function randomPicture(url) {
  document.getElementById(
    "picture"
  ).innerHTML = `<img src="${url[0]}" alt="..."> <br><img src="${url[1]}" alt="...">  s<br><img src="${url[2]}" alt="...">`;
}

// function createBreedList(breedList) {
//   document.getElementById("breed").innerHTML = `
//     <select onchange="breedLoad(this.value)">
//      <option>Choose a cat breed</option>
//      ${Object.keys(breedList)
//        .map(function (breed) {

//          return `<option>${breed}</option>`
//        })
//        .join("")}
//     </select>
//     `;
// }
