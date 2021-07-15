"use strict";

import fetchData, { apiKey, imgURL } from "./fetchData";

// To get the query string, first we get the current URL, then we get the number of id, and then we use it to display the data into 'moviesContainer'
const currentURL = window.location.search;
const urlSplited = currentURL.split("=");
const idNumber = urlSplited[1];
const url = `https://api.themoviedb.org/3/movie/${idNumber}?api_key=${apiKey}&language=en-US`;
const movieContainer = document.querySelector(".movie__container");

fetchData(url).then((movie) => {
  let title = movie.title;
  let tagline = movie.tagline;
  let averageVote = movie.vote_average;
  let image = `${imgURL + movie.poster_path}`;
  let overview = movie.overview;
  let genres = movie.genres;
  let homepage = movie.homepage;

  let releaseDate = movie.release_date;
  let formatReleaseDate = new Date(releaseDate);
  let printReleaseDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
  }).format(formatReleaseDate);

  let producedBy = movie.production_companies[0].name;
  let producedByLogo = movie.production_companies[0].logo_path;

  let runningTime = movie.runtime;

  let budget = movie.budget;
  let formatBudget = new Intl.NumberFormat("en");
  let printBudget = formatBudget.format(budget);

  let movieItem = `
  <article class="movie__item-container">
    <div class="movie__item">
      <div class="movie__info">
        <div>
          <h2>${title}</h2>
          <h3>${tagline}</h3>
          <h3>Average vote: ${averageVote}</h3>
        </div>
        <figure class="movie__img">
          <img src="${image}" alt="Image of the movie ${title}" />
        </figure>
      </div>
      <div class="movie__info">
        <p>Genres: ${genres[0].name}, ${genres[1].name}</p>
        <p>${overview}</p>
        <p>Homepage: <a href="${homepage}">${homepage}</a></p>
        <p>Relase date: ${printReleaseDate}</p>
        <p>Running time: ${runningTime} minutes</p>
        <p>Budget: ${printBudget == 0 ? "Unknown" : printBudget + " USD"}</p>
        <figure class="movie__production">
          <figcaption>Produced by:</figcaption>
          <img src="${imgURL + producedByLogo}" 
          alt="${producedBy}" />
        </figure>
      </div>
      <button>
        <a href=${"index.html"}>Back</a>
      </button>
      </div>
  </article>
  `;

  movieContainer.insertAdjacentHTML("beforeend", movieItem);
  console.log(movie);
});

console.log(currentURL);
console.log(urlSplited);
console.log(idNumber);
console.log(`${url}`);
