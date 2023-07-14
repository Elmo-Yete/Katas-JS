import netflixShows from "../data/netflix-shows.mjs";
// ? regresa en base al true / false
const movies = netflixShows
  .filter((show) => show.type === "Movie" && show.release_year > 2020)
  .map((movie) => `${movie.release_year}: ${movie.title}`);

console.log("solo movies:", movies);
