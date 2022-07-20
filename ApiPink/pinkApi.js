let data;
async function start() {
  try {
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?page=2&per_page=40"
    );
    data = await response.json();
    console.log(data);
    createPinkList(data);
  } catch (e) {
    console.log(e);
  }
}
start();
function createPinkList() {
  data.forEach((element) => {
    document.getElementById(
      "pinkImg"
    ).innerHTML += `<div class="grid grid-cols-1 items-center h-[700px] p-[22.3px] m-2 max-w-sm bg-gray rounded-lg border border-gray-400 shadow-md hover:bg-stone-300">
    <img class="w-52 object-contain max-h-full max-w-full pt-10" src="${element.image_url}" alt="...">
    <div class="font-bold text-4xl pl-6">${element.name}</div>
    </div> `;
    // console.log(element.ph);
  });
}
