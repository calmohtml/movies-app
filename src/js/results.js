"use strict";

console.log("Hello, results!");

import fetchData, { apiKey, imgURL } from "./fetchData";

const currentURL = window.location.search;
const urlSplited = currentURL.split("=");
const idNumber = urlSplited[1];

console.log(urlSplited);
console.log(idNumber);

const queryURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${idNumber}&include_adult=true`;
console.log(queryURL);

const moviesContainer = document.querySelector(".movies__container");

fetchData(queryURL).then((movies) => {
  movies.results.forEach((movie) => {
    let title = movie.original_title;
    let image = `${imgURL + movie.poster_path}`;

    let movieItem = `
    <article class="movie__info-container">
      <div class="movie">
        <h3>${title}</h3>
        <figure>
          <img src="${image}" alt="Image of the movie ${title}" />
        </figure>
        <button>
          <a href=${"details.html"}?id=${movie.id}>More</a>
        </button>
      </div>
    </article>
    `;

    moviesContainer.insertAdjacentHTML("beforeend", movieItem);
  });
});
