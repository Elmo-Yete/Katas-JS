import netflixShows from "../data/netflix-shows.mjs";

const res = netflixShows.map((show) => {
  return `${show.type}: ${show.title}`;
});

console.log("res:", res);
