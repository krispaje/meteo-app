function updateWeatherInfo(response) {
  let temperatureValue = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;

  let searchedCityElement = document.querySelector("#searched-city");
  searchedCityElement.innerHTML = response.data.city;

  temperatureValue.innerHTML = Math.round(temperature);
}
function searchCity(city) {
  let apiKey = "9c764o4f1faeb3c3bct46f73f94b0e7b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherInfo);
}
function doTheSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#weather-app-search");

  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", doTheSearch);
