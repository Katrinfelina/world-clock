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

updateTime();
setInterval(updateTime, 60000);
