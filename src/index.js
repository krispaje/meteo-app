function updateWeatherInfo(response) {
  let temperatureValue = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;

  let searchedCityElement = document.querySelector("#searched-city");
  let descriptionValue = document.querySelector("#description");

  let humidityValue = document.querySelector("#humidity");

  let windSpeedValue = document.querySelector("#wind-speed");
  let timeValue = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconValue = document.querySelector("#weather-icon");
  iconValue.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon" />`;

  searchedCityElement.innerHTML = response.data.city;
  timeValue.innerHTML = formatDate(date);

  descriptionValue.innerHTML = response.data.condition.description;
  humidityValue.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedValue.innerHTML = `${response.data.wind.speed}km/h`;

  temperatureValue.innerHTML = Math.round(temperature);
}
function searchCity(city) {
  let apiKey = "9c764o4f1faeb3c3bct46f73f94b0e7b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherInfo);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}
function doTheSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#weather-app-search");

  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", doTheSearch);

searchCity("California");
