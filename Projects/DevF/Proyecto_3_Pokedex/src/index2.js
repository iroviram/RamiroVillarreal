//? First Form

/* let promises = [];
var numPokemonBoxes = document.querySelectorAll('li.pokemon-box').length
for (let i = 1; i <= numPokemonBoxes; i++) {
  promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(response => response.json()));
}

function fetchPokemon(){
  Promise.all(promises)
  .then(response => {
    pokemonImage(response);
  });
}

function pokemonImage(pokemon){
  var numPokemonBoxes = document.querySelectorAll('li.pokemon-box').length
  for (let i = 0; i <= numPokemonBoxes; i++){
    let pokemonOrderNum = pokemon[i]['order'];
    // let pokemonSpriteFront = pokemon['sprites']['front_default'];
    let pokemonSpriteFront = pokemon[i]['sprites']['other']['official-artwork']['front_default'];
    let pokemonSpritFrontString = pokemonSpriteFront.replace(/"/g,'')
    document.getElementById(`pokemon-${pokemonOrderNum}`).style.backgroundImage = `url(${pokemonSpritFrontString})`;
  }
}

fetchPokemon();
window.onload = fetchPokemon; */

//? Second Form

/* const URI = 'https://pokeapi.co/api/v2/pokemon/';

function consultarPokemon(id) {
    fetch(URI+id)
        .then(response => response.json())
        .then(pokemon => pokemonImage(pokemon));
}

function getPokemonByName(name){
    return new Promise((resolve,reject)=>{
        fetch(URI+name)
              .then(response => response.json())
    }
)};

async function getPokemonStatsByNameDos(pokemonName){
  // si funcion cae en RESOLVE
  try{
      const pokemonData = await getPokemonByName(pokemonName);
      console.log(pokemonData);
      const stats = pokemonData.objeto.stats.map((objeto)=>[objeto.stat.name, objeto.base_stat]);
      console.log(`Las estadisticas de ${pokemonName}`,stats);
  }catch(err){
      console.log(err);
  }
}

getPokemonStatsByNameDos("pikachu");
window.onload = getPokemonStatsByNameDos; */


//? Third Form

/* const URI = 'https://pokeapi.co/api/v2/pokemon/';

function function1() {
    
    for (let i = 0; i < 153; i++) {
        var ul = document.getElementById("listaPokemon");
        var li = document.createElement("li");
        ul.appendChild(li);
        var node = ul.getElementsByTagName("li")[i];
        node.setAttribute("class", "pokemon-box");
        node.setAttribute("id", `pokemon-${i+1}`);
    }
    pokemonNumberSearch();
}

window.onload = function1;

function pokemonImage(pokemon){
    let pokemonOrderNum = pokemon.order;
    // let pokemonSpriteFront = pokemon['sprites']['front_default'];
    let pokemonSpriteFront = pokemon['sprites']['other']['official-artwork']['front_default'];
    let pokemonSpriteFrontString = pokemonSpriteFront.replace(/"/g,'')
    let arrayPokedexSprites = [pokemonOrderNum,pokemonSpriteFrontString]
    insertPokemonSprites(arrayPokedexSprites);
}

function consultarPokemon(id) {
    fetch(URI+id)
        .then(response => response.json())
        .then(pokemon => pokemonImage(pokemon));
}

function pokemonNumberSearch(){
    var numPokemonBoxes = document.querySelectorAll('li.pokemon-box').length
    for (let i = 1; i <= numPokemonBoxes; i++) {
        consultarPokemon(i)
    }
}

function insertPokemonSprites(arrayPokedexSprites){
  document.getElementById(`pokemon-${arrayPokedexSprites.pokemonOrderNum}`).style.backgroundImage = `url(${arrayPokedexSprites.pokemonSpriteFrontString})`;
} */


/* //? Fourth Form

const URI = 'https://pokeapi.co/api/v2/pokemon/';

function function1() {
    
    for (let i = 0; i < 153; i++) {
        var ul = document.getElementById("listaPokemon");
        var li = document.createElement("li");
        ul.appendChild(li);
        var node = ul.getElementsByTagName("li")[i];
        node.setAttribute("class", "pokemon-box");
        node.setAttribute("id", `pokemon-${i+1}`);
    }
    pokemonNumberSearch();
}

window.onload = function1;

function pokemonImage(pokemon){
    let pokemonOrderNum = pokemon.order;
    // let pokemonSpriteFront = pokemon['sprites']['front_default'];
    let pokemonSpriteFront = pokemon['sprites']['other']['official-artwork']['front_default'];
    let pokemonSpriteFrontString = pokemonSpriteFront.replace(/"/g,'')
    document.getElementById(`pokemon-${pokemonOrderNum}`).style.backgroundImage = `url(${pokemonSpriteFrontString})`;
}

function consultarPokemon(id) {
    fetch(URI+id)
        .then(response => response.json())
        .then(pokemon => pokemonImage(pokemon));
}

function pokemonNumberSearch(){
    var numPokemonBoxes = document.querySelectorAll('li.pokemon-box').length
    for (let i = 1; i <= numPokemonBoxes; i++) {
        consultarPokemon(i)
    }
} */

//? Fifth Form

