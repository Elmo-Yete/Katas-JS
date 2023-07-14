import netflixShows from "../data/netflix-shows.mjs";

const obj = netflixShows.reduce((obj, show) => {
  obj[show.title] = show.type;
  return obj;
}, {});
console.log("obj:", obj);

// * `${text} ${show.release_year}: ${show.title}`; como hacerlo si el return fuera un ""
// * [...text, show]; si fuera un array el return []
