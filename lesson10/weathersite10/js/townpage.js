//location of file with info
//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=8cdbb2b865b52ea0e6ede10017720a4a"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
//Once it comes back, display it to the console.
    console.log(weatherInfo);

    document.getElementById('currentTemp').innerHTML=Math.round(weatherInfo.main.temp) + "&deg;F";

    document.getElementById('currentCondition').innerHTML=weatherInfo.weather[0].description;

    document.getElementById('humidity').innerHTML=weatherInfo.main.humidity + "&percnt;";

    document.getElementById('windSpeed').innerHTML=Math.round(weatherInfo.wind.speed) + " mph";
    
 }); //end of "then" fat arrow function