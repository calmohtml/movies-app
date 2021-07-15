"use strict";
// Bringing the data from the API
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Exporting API Key and the Image URL due to is needed many times
export const apiKey = "21215a583436d37882f71c3c9ac58af6";
export const imgURL = "https://image.tmdb.org/t/p/w500/";
// Exporting the base function
export default fetchData;
