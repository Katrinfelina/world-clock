document.getElementById("reloadButton").addEventListener("click", function () {
  location.reload();
});

const bgImages = [
  "https://github.com/Katrinfelina/world-clock/blob/main/media/Tokyo_small.jpg?raw=true",
  "https://github.com/Katrinfelina/world-clock/blob/main/media/Rome_small.jpg?raw=true",
  "https://github.com/Katrinfelina/world-clock/blob/main/media/London_small.jpg?raw=true",
  "https://github.com/Katrinfelina/world-clock/blob/main/media/Sydney_small.jpg?raw=true",
  "https://github.com/Katrinfelina/world-clock/blob/main/media/LA_small.jpg?raw=true",
  "https://github.com/Katrinfelina/world-clock/blob/main/media/Bangkok_small.jpg?raw=true",
  "https://github.com/Katrinfelina/world-clock/blob/main/media/New%20York_small%20(2).jpg?raw=true",
  "https://github.com/Katrinfelina/world-clock/blob/main/media/Paris%20(2)_small.jpg?raw=true",
  "https://github.com/Katrinfelina/world-clock/blob/main/media/Casablanca_small.jpg?raw=true",
  "https://github.com/Katrinfelina/world-clock/blob/main/media/Auckland_small.jpg?raw=true",
  "https://github.com/Katrinfelina/world-clock/blob/main/media/Location_small.jpg?raw=true",
];

// Bilder vorladen
bgImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});

function updateTime() {
  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoCountryElement = tokyoElement.querySelector(".country");
  let tokyoCityNameElement = tokyoElement.querySelector(".city-name");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoUtcElement = tokyoElement.querySelector(".utc");
  let tokyoDateElement = tokyoElement.querySelector(".date");

  tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format("HH:mm");
  tokyoUtcElement.innerHTML = moment().tz("Asia/Tokyo").format("[UTC] Z");
  tokyoDateElement.innerHTML = moment().tz("Asia/Tokyo").format("D MMMM YYYY");

  //rome
  let romeElement = document.querySelector("#rome");
  let romeCountryElement = romeElement.querySelector(".country");
  let romeCityNameElement = romeElement.querySelector(".city-name");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeUtcElement = romeElement.querySelector(".utc");
  let romeDateElement = romeElement.querySelector(".date");

  romeTimeElement.innerHTML = moment().tz("Europe/Rome").format("HH:mm");
  romeUtcElement.innerHTML = moment().tz("Europe/Rome").format("[UTC] Z");
  romeDateElement.innerHTML = moment().tz("Europe/Rome").format("D MMMM YYYY");

  //london
  let londonElement = document.querySelector("#london");
  let londonCountryElement = londonElement.querySelector(".country");
  let londonCityNameElement = londonElement.querySelector(".city-name");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonUtcElement = londonElement.querySelector(".utc");
  let londonDateElement = londonElement.querySelector(".date");

  londonTimeElement.innerHTML = moment().tz("Europe/London").format("HH:mm");
  londonUtcElement.innerHTML = moment().tz("Europe/London").format("[UTC] Z");
  londonDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("D MMMM YYYY");

  //sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyCountryElement = sydneyElement.querySelector(".country");
  let sydneyCityNameElement = sydneyElement.querySelector(".city-name");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyUtcElement = sydneyElement.querySelector(".utc");
  let sydneyDateElement = sydneyElement.querySelector(".date");

  sydneyTimeElement.innerHTML = moment().tz("Australia/Sydney").format("HH:mm");
  sydneyUtcElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("[UTC] Z");
  sydneyDateElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("D MMMM YYYY");

  //LA
  let LosAngelesElement = document.querySelector("#los-angeles");
  let LosAngelesCountryElement = LosAngelesElement.querySelector(".country");
  let LosAngelesCityNameElement = LosAngelesElement.querySelector(".city-name");
  let LosAngelesTimeElement = LosAngelesElement.querySelector(".time");
  let LosAngelesUtcElement = LosAngelesElement.querySelector(".utc");
  let LosAngelesDateElement = LosAngelesElement.querySelector(".date");

  LosAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("HH:mm");
  LosAngelesUtcElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("[UTC] Z");
  LosAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("D MMMM YYYY");
}

function updateCity(event) {
  let cityTimeZone;
  let cityId;
  if (event.target.value === "user-location") {
    cityTimeZone = moment.tz.guess();
    cityId = "user-location";
  } else {
    cityTimeZone = event.target.value;
    cityId = cityTimeZone.split("/")[1];
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityContinent = cityTimeZone.replace("_", " ").split("/")[0];
  let cityTime = moment().tz(cityTimeZone).format("HH:mm");
  let cityUtc = moment().tz(cityTimeZone).format("[UTC] Z");
  let cityDate = moment().tz(cityTimeZone).format("D MMMM YYYY");
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="grid-container-change">
       <div class="grid-item" id="${cityId}">
        <span class="city-name">${cityName}</span>
        <span class="continent">${cityContinent}</span>
        <span class="time">${cityTime}</span>
        <span class="utc">${cityUtc}</span>
        <span class="date">${cityDate}</span>
      </div>
      </div>
    `;
}

updateTime();
setInterval(updateTime, 60000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
