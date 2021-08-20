function time() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hour = now.getHours();
  let minute = (`0` + now.getMinutes()).slice(-2);
  let date = `${day} ${hour}:${minute}`;
  let currently = document.querySelector(".currently");
  currently.innerHTML = `${date}`;
}
time();
function cityInput(event) {
  event.preventDefault();
  let input = document.querySelector("#searchBar");
  let city = document.querySelector(".cityName");
  city.innerHTML = `${input.value}`;
  let apiKey = "2d4efaaa370d6f57efb38fafb5b28a97";
  let currCity = `${input.value}`;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currCity}&units=${units}`;

  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let currentTemperature = document.querySelector("#rightNow");
    currentTemperature.innerHTML = `${temperature}`;
  }

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let searchedCity = document.querySelector("#searchCity");
searchedCity.addEventListener("submit", cityInput);
