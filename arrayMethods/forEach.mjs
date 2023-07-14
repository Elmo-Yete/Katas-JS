import netflixShows from "../data/netflix-shows.mjs";

export default function forEach() {
  netflixShows.forEach((show) => {
    console.log("title: ", show.title);
  });
}

forEach(netflixShows);
