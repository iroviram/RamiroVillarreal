/* Ejemplo de realizar una petición GET con Axios */
// En este caso pedire una lista de los 10 primeros pokémons
// Pueden adaptar este código para solicitar a la API la información que requieran

const pokemonCount = 10;
const URI = `https://pokeapi.co/api/v2/pokemon?limit=${pokemonCount}&offset=0`;

/* function axiosAPIGet() {
    axios.get(URI) //Realizo una petición con GET con Axios a una URI
        .then((response) => {
            console.log("Status Code:",response.status); //status de la petición
            console.log("La Data:", response.data.results); //data es donde tiene la información
            //Aquí es donde debo implementar mi lógica de la app, ya que la respuesta
            //con los Pokemones solo existe dentro del then
            console.log(response.data.results[0]['name']);
        }).catch((error) => {
            console.log("Error:",error);
    });
} */

export function exportTest() {
    console.log("Export/Import Success!")
    document.getElementById("pokemon1_151").innerHTML = "National Pokedex (Pokemon 1-151)";
}

