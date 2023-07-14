import ivaCalculator from "./katas/Iva.mjs";
import NoVocals from "./katas/noVocal.mjs";
import countByCountry from "./katas/Artists.mjs";
import Artists from "./data/artists.mjs";

let iva = ivaCalculator(500);
let vocalLess = NoVocals("ESTO es otra prueba");
let artists = countByCountry(Artists);

console.log("iva de 500: ", iva);
console.log("texto sin vocales", vocalLess);
console.log("artistas por país:", artists);
