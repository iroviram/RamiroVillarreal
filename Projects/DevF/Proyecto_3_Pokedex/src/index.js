/* import {exportTest} from './pokeapi.js';
exportTest();

function testKey() {
    console.log("Test Worked")
} */

const URIpokemon = 'https://pokeapi.co/api/v2/pokemon/';
const URIpokemonSpecies = 'https://pokeapi.co/api/v2/pokemon-species/';
//const URItypes = 'https://pokeapi.co/api/v2/type/';

var pokemonCountMax = 3;

const pokemonTypeColors = {
    grass: '#9BCC50',
    poison: '#B97FC9',
    fire: '#FD7D24',
    flying: '#3DC7EF',
    bug: '#729F3F',
    water: '#4592C4',
    normal: '#A4ACAF',
    electric: '#EED535',
    ground: '#EED535',
    fairy: '#FDB9E9',
    fighting: '#D56723',
    psychic: '#F366B9',
    rock: '#A38C21',
    steel: '#9EB7B8',
    ice: '#51C4E7',
    ghost: '#7B62A3',
    dragon: '#F16E57',
    dark:'#707070'
};


window.onload = liPokemonCreator;

function liPokemonCreator() {

    

    for (let i = 1; i <= pokemonCountMax; i++) {
        let ul = document.getElementById("listaPokemon");
        let li = document.createElement("li");
        ul.appendChild(li);
        let node = ul.getElementsByTagName("li")[i-1];
        node.setAttribute("class", "pokemon-box");
        node.setAttribute("id", `pokemon-${i}`);
    };
    pokemonNumberSearch();
    buttonPokemonCreator();
}

function pokemonNumberSearch(){
    for (let i = 1; i <= pokemonCountMax; i++) {
        consultarPokemon(i)
    }
}

function consultarPokemon(id) {
    fetch(URIpokemon+id)
        .then(response => response.json())
        .then(pokemon => pokemonImage(pokemon,id));
}

function pokemonImage(pokemon,id){
    let pokemonOrderNum = pokemon.id;
    let pokemonSpriteFront = pokemon['sprites']['other']['official-artwork']['front_default'];
    document.getElementById(`pokemon-${pokemonOrderNum}`).style.backgroundImage = `url(${pokemonSpriteFront})`;

    let li = document.getElementById(`pokemon-${id}`);
    let span = document.createElement("span");
    li.appendChild(span);
    let node = li.getElementsByTagName("span")[0];
    node.setAttribute("class", "pokemon-name");
    node.setAttribute("id", `pokemonName-${id}`);
    document.getElementById(`pokemonName-${id}`).innerHTML = `${pokemon['species']['name']}`;
    let typeName = pokemon['types'][0]['type']['name'];
    document.getElementById(`pokemonName-${id}`).style.backgroundColor = `${pokemonTypeColors[typeName]}`;
    if (pokemon['types'].length > 1){
        document.getElementById(`pokemonName-${id}`).style.background = `linear-gradient(to right, ${pokemonTypeColors[pokemon['types'][0]['type']['name']]} 50%, ${pokemonTypeColors[pokemon['types'][1]['type']['name']]} 50%`;
    }
}

function buttonPokemonCreator(){
    for (let i = 1; i <= pokemonCountMax; i++) {
        let li = document.getElementById(`pokemon-${i}`);
        let button = document.createElement("button");
        li.appendChild(button);
        let node = li.getElementsByTagName("button")[0];
        node.setAttribute("class", "pokemon-button");
        node.setAttribute("data-bs-toggle", "modal");
        node.setAttribute("data-bs-target", "#exampleModal");
        node.setAttribute("id", `pokemonButton-${i}`);
    }
}

/* ----------------------------------------------------------------------------------- */
/* MODAL */

/* ----------- Modal Button Click - START ----------- */

window.onclick = e => {
    let clickTarget = e.target.id;
    let clickTargetString = clickTarget.replace(/[^a-zA-Z]/g, '');
    if(clickTargetString == "pokemonButton"){
        let pokemonIdNumber = clickTarget.replace( /^\D+/g, '');
        fetch(URIpokemon+pokemonIdNumber)
        .then(response => response.json())
        .then(function(data){
            document.getElementById("exampleModalLabelTitle").innerHTML = `${data.species.name}`;
            pokemonImageModal(data);
            spanModalTypeCreator(data.types);
            weaknessTypeDivCreator(data.types)
            document.getElementById("pokemonNumber").innerHTML = `#${data.id}`;
            pokemonStats(data);
            pokemonProfile1(data);
        })
    } else if(clickTargetString=="modalxbutton" || clickTargetString=="exampleModal"){
        deleteCreateModalElements();
    }

    if(clickTargetString == "pokemonButton"){
        let pokemonIdNumber = clickTarget.replace( /^\D+/g, '');
        fetch(URIpokemonSpecies+pokemonIdNumber)
        .then(response => response.json())
        .then(function(data){
            pokemonProfile2(data);
            let dataURL = data.evolution_chain.url;
            let evolvesFrom = data.evolves_from_species;
            if (evolvesFrom == null){
                pokemonEvolutions(dataURL,null);
            } else{
                pokemonEvolutions(dataURL,evolvesFrom);
            }
            
        })
    } else if(clickTargetString=="modalxbutton" || clickTargetString=="exampleModal"){
            deleteCreateModalElements();
    }
};

/* ----------- Modal Button Click - Section 1 ----------- */

function deleteCreateModalElements() {
    const myNode = document.getElementById("pokemonType");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
};

function pokemonImageModal(data) {
    let pokemonSpriteFront = data['sprites']['other']['official-artwork']['front_default'];
    document.getElementById("pokemonModalDetailsImage").style.backgroundImage = `url(${pokemonSpriteFront})`;
}

function spanModalTypeCreator(types){
    for (let i = 0; i < types.length; i++) {
        let div = document.getElementById("pokemonType");
        let span = document.createElement("span");
        div.appendChild(span);
        let node = div.getElementsByTagName("span")[i];
        node.setAttribute("class", `pokemon-type-${i}`);
        node.setAttribute("id", `pokemonType-${i}`);
        let typeName = types[i]['type']['name'];
        document.getElementById(`pokemonType-${i}`).innerHTML = `${typeName}`;
        document.getElementById(`pokemonType-${i}`).style.backgroundColor = `${pokemonTypeColors[typeName]}`
    }
    let typeName = types[0]['type']['name'];
    let h2TagName = document.getElementsByTagName("h2");
    for (let i = 0; i < h2TagName.length; i++) {
        h2TagName[i].style.backgroundColor = `${pokemonTypeColors[typeName]}`;
    }
}

function weaknessTypeDivCreator(types){
    for (let i = 0; i < types.length; i++) {
        let div = document.getElementById("typeDamage");
        let div1 = document.createElement("div");
        div.appendChild(div1);
        let node = div.getElementsByTagName("div")[i];
        node.setAttribute("class", `type-damag-section`);
        let typeName = types[i]['type']['name'];
        node.setAttribute("id", `typeDamage-${typeName}`);
        //weaknessTypeSpanCreator(types,i);
    }
};

function weaknessTypeSpanCreator(types,i){
        let div = document.getElementById(`typeDamage${i}`);
        let div1 = document.createElement("div");
        div.appendChild(div1);
        let node = div.getElementsByTagName("div")[i];
        node.setAttribute("class", `type-damag-bar${i}`);
        node.setAttribute("id", `typeDamageBar${i}`);

        let typeName = types[i]['type']['name'];
        document.getElementById(`typeDamageBar${i}`).innerHTML = `${typeName}`;
        document.getElementById(`typeDamageBar${i}`).style.backgroundColor = `${pokemonTypeColors[typeName]}`
}

function pokemonStats(data) {
    let typeName = data['types'][0]['type']['name'];
    //HP
    let highestBaseHp = 255; //Blissey
    let currentPokemonBaseHP = data['stats'][0]['base_stat'];
    let hpStatName = data['stats'][0]['stat']['name'];
    document.getElementById(`${hpStatName}Number`).innerHTML = `${currentPokemonBaseHP}`;
    let hpPercentage = (currentPokemonBaseHP/highestBaseHp)*100;
    document.getElementById(`${hpStatName}Bar`).style.width = `${hpPercentage}%`;
    document.getElementById(`${hpStatName}Bar`).style.backgroundColor = `${pokemonTypeColors[typeName]}`

    //Attack
    let highestBaseAttack = 181; //Kartana
    let currentPokemonBaseAttack = data['stats'][1]['base_stat'];
    let attackStatName = data['stats'][1]['stat']['name'];
    document.getElementById(`${attackStatName}Number`).innerHTML = `${currentPokemonBaseAttack}`;
    let attackPercentage = (currentPokemonBaseAttack/highestBaseAttack)*100;
    document.getElementById(`${attackStatName}Bar`).style.width = `${attackPercentage}%`;
    document.getElementById(`${attackStatName}Bar`).style.backgroundColor = `${pokemonTypeColors[typeName]}`

    //Defense
    let highestBaseDefense = 230; //Shuckle
    let currentPokemonBaseDefense = data['stats'][2]['base_stat'];
    let defenseStatName = data['stats'][2]['stat']['name'];
    document.getElementById(`${defenseStatName}Number`).innerHTML = `${currentPokemonBaseDefense}`;
    let defensePercentage = (currentPokemonBaseDefense/highestBaseDefense)*100;
    document.getElementById(`${defenseStatName}Bar`).style.width = `${defensePercentage}%`;
    document.getElementById(`${defenseStatName}Bar`).style.backgroundColor = `${pokemonTypeColors[typeName]}`

    //SpecialAttack
    let highestBaseSpecialAttack = 173; //Xurkitree
    let currentPokemonBaseSpecialAttack = data['stats'][3]['base_stat'];
    let specialAttackStatName = data['stats'][3]['stat']['name'];
    document.getElementById(`${specialAttackStatName}Number`).innerHTML = `${currentPokemonBaseSpecialAttack}`;
    let specialAttackPercentage = (currentPokemonBaseSpecialAttack/highestBaseSpecialAttack)*100;
    document.getElementById(`${specialAttackStatName}Bar`).style.width = `${specialAttackPercentage}%`;
    document.getElementById(`${specialAttackStatName}Bar`).style.backgroundColor = `${pokemonTypeColors[typeName]}`

    //SpecialDefense
    let highestBaseSpecialDefense = 230; //Shuckle
    let currentPokemonBaseSpecialDefense = data['stats'][4]['base_stat'];
    let specialDefenseStatName = data['stats'][4]['stat']['name'];
    document.getElementById(`${specialDefenseStatName}Number`).innerHTML = `${currentPokemonBaseSpecialDefense}`;
    let specialDefensePercentage = (currentPokemonBaseSpecialDefense/highestBaseSpecialDefense)*100;
    document.getElementById(`${specialDefenseStatName}Bar`).style.width = `${specialDefensePercentage}%`;
    document.getElementById(`${specialDefenseStatName}Bar`).style.backgroundColor = `${pokemonTypeColors[typeName]}`

    //Speed
    let highestBaseSpeed = 200; //Regieleki
    let currentPokemonBaseSpeed = data['stats'][5]['base_stat'];
    let speedStatName = data['stats'][5]['stat']['name'];
    document.getElementById(`${speedStatName}Number`).innerHTML = `${currentPokemonBaseSpeed}`;
    let speedPercentage = (currentPokemonBaseSpeed/highestBaseSpeed)*100;
    document.getElementById(`${speedStatName}Bar`).style.width = `${speedPercentage}%`;
    document.getElementById(`${speedStatName}Bar`).style.backgroundColor = `${pokemonTypeColors[typeName]}`
    
};

function pokemonProfile1(data) {

    // Height & Weight

    let heightNumber = (data['height']/10);
    let weightNumber = (data['weight']/10);

    document.getElementById("height-number").innerHTML = `${heightNumber} m`;
    document.getElementById("weight-number").innerHTML = `${weightNumber} kg`;

    // Abilities

    let abilities = data['abilities'];
    const abilitiesNameArray = [];
    for (let i = 0; i < abilities.length; i++) {
        let abilitiesName = abilities[i]['ability']['name'];
        abilitiesNameArray.push(abilitiesName)
    }
    let abilitiesFull = abilitiesNameArray.join(", ");
    document.getElementById("abilities-number").innerHTML = `${abilitiesFull}`;

    // EVs

    let stats = data['stats'];
    for (let i = 0; i < stats.length; i++) {
        let effort = stats[i]['effort'];
        if(effort > 0){
            let statName = stats[i]['stat']['name'] 
            document.getElementById("evs-number").innerHTML = `${effort} ${statName}`;
        }
    }
};

/* ----------- Modal Button Click - Section 2 ----------- */

function pokemonProfile2(data) {
    // Capture Rate
    let maxCaptureRate = 255;
    let captureRateNumber = Math.floor((data['capture_rate']/maxCaptureRate)*100);
    document.getElementById("captureRate-number").innerHTML = `${captureRateNumber}%`;

    // Egg Groups
    let eggGroups = data['egg_groups'];
    const eggGroupsNameArray = [];
    for (let i = 0; i < eggGroups.length; i++) {
        let eggGroupsName = eggGroups[i]['name'];
        eggGroupsNameArray.push(eggGroupsName)
    }
    let eggGroupsFull = eggGroupsNameArray.join(", ");
    document.getElementById("eggGroups-number").innerHTML = `${eggGroupsFull}`;

    // Hatch Steps
    let hatchSteps = 255*(data['hatch_counter']+1); //"one must walk 255 × (hatch_counter + 1) steps before this Pokémon's egg hatches
    document.getElementById("hatchSteps-number").innerHTML = `${hatchSteps}`;
};

function pokemonEvolutions(data,evolvesFrom){
    fetch(data)
    .then(response => response.json())
    .then(function(data){        
        let checkEvolution1 = data['chain']['evolves_to']
        //let checkEvolution2 = data['chain']['evolves_to'][0]['evolves_to'];
        
        if(checkEvolution1 == "" && evolvesFrom == null){
            console.log("No Evolution nor Preevolution")
            hidePokemonEvolution();
            document.getElementById("noEvolution").style.display = "";
            document.getElementById("noEvolution").innerHTML = "NO EVOLUTION";
        } else if(data['chain']['evolves_to'][0]['evolves_to'] == "" && evolvesFrom == null){
            console.log("No Preevolution / 1 Evolution  ")
            let clickedPokemon = data['chain']['species']['name'];
            let evolution1 = data['chain']['evolves_to'][0]['species']['name'];
            showPokemonEvolution1()
            hidePokemonEvolution2();
            pokemonEvolutionsImage1(clickedPokemon,null,evolution1,null,checkEvolution1)
        } else if (evolvesFrom == null){
            console.log("No Preevolution / 2 Evolutions")
            let clickedPokemon = data['chain']['species']['name'];
            let evolution1 = data['chain']['evolves_to'][0]['species']['name'];
            let evolution2 = data['chain']['evolves_to'][0]['evolves_to'][0]['species']['name'];
            showPokemonEvolution()
            pokemonEvolutionsImage2(clickedPokemon,null,evolution1,evolution2,checkEvolution1)
        } else if (data['chain']['evolves_to'][0]['evolves_to'] == ""){
            console.log("1 Preevolution / 1 Evolution")
            let preevolution = evolvesFrom;
            let evolution1 = data['chain']['evolves_to'][0]['species']['name'];
            showPokemonEvolution1()
            hidePokemonEvolution2();
            pokemonEvolutionsImage3(null,preevolution,evolution1,null,checkEvolution1)
        } else {
            console.log("3 Evolution Phases");
            let preevolution = evolvesFrom;
            let evolution1 = data['chain']['evolves_to'][0]['species']['name'];
            let evolution2 = data['chain']['evolves_to'][0]['evolves_to'][0]['species']['name'];
            let basePokemon = data['chain']['species']['name'];
            showPokemonEvolution();
            pokemonEvolutionsImage4(null,preevolution,evolution1,evolution2,basePokemon,checkEvolution1)
        }           
    });
};

function hidePokemonEvolution() {
    document.getElementById("evolutionRow1").style.display = "none";
    document.getElementById("evolutionDescription").style.display = "none";
    document.getElementById("evolutionRow2").style.display = "none";
    document.getElementById("evolutionDescription1").style.display = "none";
};

function hidePokemonEvolution2() {
    document.getElementById("evolutionRow2").style.display = "none";
    document.getElementById("evolutionDescription1").style.display = "none";
    document.getElementById("noEvolution").style.display = "none";
};

function showPokemonEvolution() {
    document.getElementById("evolutionRow1").style.display = "";
    document.getElementById("evolutionDescription").style.display = "";
    document.getElementById("evolutionRow2").style.display = "";
    document.getElementById("evolutionDescription1").style.display = "";

    document.getElementById("noEvolution").style.display = "none";
};

function showPokemonEvolution1() {
    document.getElementById("evolutionRow1").style.display = "";
    document.getElementById("evolutionDescription").style.display = "";

    document.getElementById("noEvolution").style.display = "none";
};

function showPokemonEvolution2() {
    document.getElementById("evolutionRow2").style.display = "";
    document.getElementById("evolutionDescription1").style.display = "";
    
    document.getElementById("noEvolution").style.display = "none";
};

function pokemonEvolutionsImage1(clickedPokemon,preevolution,evolution1,evolution2,evolutionData) {

    let capitalizedEvolution1Name = evolution1.replace(/\b\w/g, l => l.toUpperCase());
    let capatilzedPreevolutionName = clickedPokemon.replace(/\b\w/g, l => l.toUpperCase());

    pokemonEvolutionDiv1();
    pokemonPreevolutionImage(clickedPokemon,null);
    pokemonEvolutionImage(evolution1,null);

    let evolution1Level = evolutionData[0]['evolution_details'][0]['min_level']

    document.getElementById("evolutionDescriptionText").innerHTML = `${capatilzedPreevolutionName} evolves into ${capitalizedEvolution1Name} at level ${evolution1Level}`;

};

function pokemonEvolutionsImage2(clickedPokemon,preevolution,evolution1,evolution2,evolutionData) {

    let capitalizedEvolution1Name = evolution1.replace(/\b\w/g, l => l.toUpperCase());
    let capitalizedEvolution2Name = evolution2.replace(/\b\w/g, l => l.toUpperCase());
    let capatilzedPreevolutionName = clickedPokemon.replace(/\b\w/g, l => l.toUpperCase());

    let evolution1Level = evolutionData[0]['evolution_details'][0]['min_level']
    let evolution2Level = evolutionData[0]['evolves_to'][0]['evolution_details'][0]['min_level']

    pokemonEvolutionDiv1();
    pokemonEvolutionDiv2();
    pokemonPreevolutionImage(clickedPokemon,evolution1);
    pokemonEvolutionImage(evolution1,evolution2);

    document.getElementById("evolutionDescriptionText").innerHTML = `${capatilzedPreevolutionName} evolves into ${capitalizedEvolution1Name} at level ${evolution1Level}`;
    document.getElementById("evolutionDescriptionText1").innerHTML = `${capitalizedEvolution1Name} evolves into ${capitalizedEvolution2Name} at level ${evolution2Level}`;
};

function pokemonEvolutionsImage3(clickedPokemon,preevolution,evolution1,evolution2,evolutionData) {

    let preevolutionName = preevolution['name'];
    let capatilzedPreevolutionName = preevolutionName.replace(/\b\w/g, l => l.toUpperCase());
    let capitalizedEvolution1Name = evolution1.replace(/\b\w/g, l => l.toUpperCase());

    pokemonEvolutionDiv1();
    pokemonPreevolutionImage(preevolutionName,null);
    pokemonEvolutionImage(evolution1,null);

    let evolution1Level = evolutionData[0]['evolution_details'][0]['min_level']

    document.getElementById("evolutionDescriptionText").innerHTML = `${capatilzedPreevolutionName} evolves into ${capitalizedEvolution1Name} at level ${evolution1Level}`;
};

function pokemonEvolutionsImage4(clickedPokemon,preevolution,evolution1,evolution2,basePokemon,evolutionData) {

    let preevolutionName = preevolution['name'];

    let capitalizedEvolution1Name = evolution1.replace(/\b\w/g, l => l.toUpperCase());
    let capitalizedEvolution2Name = evolution2.replace(/\b\w/g, l => l.toUpperCase());
    let capatilzedPreevolutionName = preevolutionName.replace(/\b\w/g, l => l.toUpperCase());
    let capitalizedBasePokemon = basePokemon.replace(/\b\w/g, l => l.toUpperCase());


    //let evolution1Level = evolutionData[0]['evolution_details'][0]['min_level']
    let evolution1Level = evolutionLevel1(evolutionData);
    let evolution2Level = evolutionLevel2(evolutionData);
    
    pokemonEvolutionDiv1();
    pokemonEvolutionDiv2();

    if(evolution1 == preevolutionName){
        pokemonPreevolutionImage(basePokemon,evolution1);
        pokemonEvolutionImage(evolution1,evolution2);
    
        document.getElementById("evolutionDescriptionText").innerHTML = `${capitalizedBasePokemon} evolves into ${capitalizedEvolution1Name} at level ${evolution1Level}`;
        document.getElementById("evolutionDescriptionText1").innerHTML = `${capitalizedEvolution1Name} evolves into ${capitalizedEvolution2Name} at level ${evolution2Level}`;
    } else {
        pokemonPreevolutionImage(preevolutionName,evolution1);
        pokemonEvolutionImage(evolution1,evolution2);
    
        document.getElementById("evolutionDescriptionText").innerHTML = `${capatilzedPreevolutionName} evolves into ${capitalizedEvolution1Name} at level ${evolution1Level}`;
        document.getElementById("evolutionDescriptionText1").innerHTML = `${capitalizedEvolution1Name} evolves into ${capitalizedEvolution2Name} at level ${evolution2Level}`;
    }
};

function evolutionLevel1(evolutionData) {
    // probar un for en el array de evolutionData[0]['evolution_details'][0] para que de un resultado que no sea null ni false y saber que tipo de evolucion es.
    let evolutionDetailsArray = evolutionData[0]['evolution_details'][0];
    console.log(evolutionDetailsArray)
    console.log(evolutionDetailsArray[Object.keys(evolutionDetailsArray)])
    let evolutionType = evolutionDetailsArray[Object.keys(evolutionDetailsArray)[9]];
    console.log(evolutionType)

    for (let i = 0; i < evolutionDetailsArray.length; i++) {
        if (evolutionDetailsArray[i] != null || evolutionDetailsArray[i] != false){
            console.log("Forma de evolucion",evolutionDetailsArray[i])
        }
    }

    return evolutionData[0]['evolution_details'][0]['min_level'];
}

function evolutionLevel2(evolutionData) {
    return evolutionData[0]['evolves_to'][0]['evolution_details'][0]['min_level'];
}

function pokemonEvolutionDiv1() {
    let div = document.getElementById("evolutionRow1");
    let span = document.createElement("span");
    div.appendChild(span);
    let node = div.getElementsByTagName("span")[0];
    node.setAttribute("class", "pokemon-preevolution");
    node.setAttribute("id", "pokemonPreevolution");

    let span1 = document.createElement("span");
    div.appendChild(span1);
    let node1 = div.getElementsByTagName("span")[1];
    node1.setAttribute("class", "evolution-arrow");
    node1.setAttribute("id", "evolutionArrow");

    let span2 = document.createElement("span");
    div.appendChild(span2);
    let node2 = div.getElementsByTagName("span")[2];
    node2.setAttribute("class", "pokemon-evolution");
    node2.setAttribute("id", "pokemonEvolution");
};

function pokemonEvolutionDiv2() {
    let div = document.getElementById("evolutionRow2");
    let span = document.createElement("span");
    div.appendChild(span);
    let node = div.getElementsByTagName("span")[0];
    node.setAttribute("class", "pokemon-preevolution");
    node.setAttribute("id", "pokemonPreevolution1");

    let span1 = document.createElement("span");
    div.appendChild(span1);
    let node1 = div.getElementsByTagName("span")[1];
    node1.setAttribute("class", "evolution-arrow");
    node1.setAttribute("id", "evolutionArrow1");

    let span2 = document.createElement("span");
    div.appendChild(span2);
    let node2 = div.getElementsByTagName("span")[2];
    node2.setAttribute("class", "pokemon-evolution");
    node2.setAttribute("id", "pokemonEvolution1");
};

function pokemonPreevolutionImage(preevolution,evolution1) {
    fetch(URIpokemon+preevolution)
        .then(response => response.json())
        .then(function(data){
            let pokemonSpriteFront = data['sprites']['other']['official-artwork']['front_default'];
            document.getElementById("pokemonPreevolution").style.backgroundImage = `url(${pokemonSpriteFront})`;
        });

    if (evolution1 !== null) {
        fetch(URIpokemon+evolution1)
        .then(response => response.json())
        .then(function(data){
            let pokemonSpriteFront = data['sprites']['other']['official-artwork']['front_default'];
            document.getElementById("pokemonPreevolution1").style.backgroundImage = `url(${pokemonSpriteFront})`;
        });
    }
};

function pokemonEvolutionImage(evolution1,evolution2) {
    fetch(URIpokemon+evolution1)
        .then(response => response.json())
        .then(function(data){
            let pokemonSpriteFront = data['sprites']['other']['official-artwork']['front_default'];
            document.getElementById("pokemonEvolution").style.backgroundImage = `url(${pokemonSpriteFront})`;
        });
    if (evolution2 !== null) {
        fetch(URIpokemon+evolution2)
        .then(response => response.json())
        .then(function(data){
            let pokemonSpriteFront = data['sprites']['other']['official-artwork']['front_default'];
            document.getElementById("pokemonEvolution1").style.backgroundImage = `url(${pokemonSpriteFront})`;
        });
    }
};

/* ----------- Modal Button Click - END ----------- */

/* function searchHidePokemon() {

    const pokemonSearched = document.getElementById("searchBar").value.toLowerCase();
    if (pokemonSearched === '') {
        for (let i = 1; i <= pokemonCountMax; i++) {
            document.getElementById(`pokemon-${i}`).style.display = "";      
        }  
    } else {
        console.log("PokemonSearched: ",pokemonSearched)
        for (let i = 0; i < pokemonCountMax; i++) {
        let j = pokemonSearched.length;
        console.log("Cantidad de letras: ",j)
        let pokemonName = document.getElementById(`pokemonName-${i+1}`).innerHTML;
        console.log("Pokemon Name: ",pokemonName)
        let letterPokemonName = pokemonName.charAt(j-1);
        console.log("letterPokemonName: ",letterPokemonName)
        let letterPokemonSearched = pokemonSearched.charAt(j-1);
        console.log("Letra de Pokemon Buscad PokeSearched: ",letterPokemonSearched)
            if (letterPokemonSearched !== letterPokemonName) {
                document.getElementById(`pokemon-${i+1}`).style.display = "none";
            }
        }
    }
}; */

console.log(document.querySelectorAll('#listaPokemon')[0]['children'])

$(".search").keyup(() => {

    var value = $(".search").val().toLowerCase()

    $(".pokemon-list").children('.pokemon-box').each((index,element)=>{
    if(!$(element).attr('id').startsWith(value)){
        $(element).hide();
    }
    else{
        $(element).show();
    }

    })
})