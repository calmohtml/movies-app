"use strict";

import fetchData, { imgURL } from "./fetchData";

const url =
  "https://api.themoviedb.org/3/discover/movie?api_key=21215a583436d37882f71c3c9ac58af6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

const moviesContainer = document.querySelector(".movies__container");

// Displaying the data into 'Popular'
fetchData(url).then((movies) => {
  movies.results.forEach((movie) => {
    let title = movie.title;
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

console.log(fetchData);
console.log(url);
