const url = "https://pokeapi.co/api/v2/pokemon/";
const pokecard = document.getElementById("poke-card");
const head = document.getElementById("head");
function getpokemoncard() {
    let id = Math.floor((Math.random() * 150)) + 1;
    console.log(id);
    const finalUrl = url + id + "/";
    console.log(finalUrl);
    fetch(finalUrl)
        .then((response) => {
            return response.json();
        }).then((data) => {
            if (`${data.types[0].type}` === undefined) {
                pokecard.innerHTML = "<h1>Try Again😐</h1>"
            }
            pokecard.innerHTML = `
            <div class="result" >
            <div class="hp">
            <p>hp - ${data.stats[0].base_stat}</p>
           </div>
           <div class="pokeimg">
            <img src="${data.sprites.other.dream_world.front_default}" alt="pokemonimg">
           </div>
           <div><h1 class="name">${data.name}</h1></div>
           <div class="types">
            <div class="type1">
                ${data.types[0].type.name || " "}
            </div>
            <div class="type2">
                ${data.types[1].type.name || " "} 
            </div>
        </div>
            <div class="abt">
                <div class="attack">
                    <div class="atknum">
                    ${data.stats[1].base_stat}
                    </div>
                    <p class="atk">Attack</p>
                </div>
                <div class="defense">
                    <div class="defnum">
                    ${data.stats[2].base_stat}
                    </div>
                    <p class="atk">Defense</p>
                </div>
                <div class="speed">
                    <div class="spdnum">
                    ${data.stats[5].base_stat}
                    </div>
                    <p class="atk">Speed</p>
                </div>
            </div>
            </div>
            <div class="btn">
            <button onclick=" getpokemoncard()" class="crdbtn"> Genrate Crad</button>
        </div>
           `
            console.log(data);
        }).catch((error) => {
            console.log(error);
        })

}
function htmlchng() {
    head.innerHTML = " ";
}





