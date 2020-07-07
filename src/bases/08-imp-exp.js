// Importacion y exportacion


//Tipos de importación

const { default: heroes, owners } = require("../data/heroes");
// const { heroes } = require("./data/heroes");
// import heroes from "./data/heroes";
// import {heroes} from "./data/heroes";

//Buscar elemento por ID
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
console.log(getHeroeById(2));

// Aca no se usa find, sino filter
const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);
console.log(getHeroesByOwner("DC"));

console.log(owners);
