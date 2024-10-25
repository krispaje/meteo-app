function doTheSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#weather-app-search");
  let searchedCityElement = document.querySelector("#searched-city");
  searchedCityElement.innerHTML = searchInput.value;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", doTheSearch);
