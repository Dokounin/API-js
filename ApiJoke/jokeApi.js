async function myJoke() {
  const response = await fetch(
    "https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,racist,sexist,explicit"
  );
  const data = await response.json();
  console.log(data);
  document.getElementById("request").innerHTML = data.setup;
  document.getElementById("request2").innerHTML = data.delivery;
}
function afficheUrl() {
  let link = "https://v2.jokeapi.dev/joke";
  document.getElementById("url").innerHTML = "URL : " + link;
}
afficheUrl();

