const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
// console.log(fetch(url));
const jokes = document.getElementById("jokes");
function getjoke() {
    fetch(url).then((data) => {
        // console.log(data.json())
        data.json().then((joke) => {
            console.log(joke);
            jokes.innerHTML = joke.joke;
        });
    }).catch((err) => {
        console.log(err);
    })
}
getjoke();