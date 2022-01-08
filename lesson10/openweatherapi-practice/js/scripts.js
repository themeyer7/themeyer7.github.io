//location of file with info
//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?zip=99577,us&units=imperial&APPID=8cdbb2b865b52ea0e6ede10017720a4a"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
//Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML=weatherInfo.name;

    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;

    document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;

    const iconcode = weatherInfo.weather[0].icon;
//    console.log(iconcode);

    const icon_path="//openweathermap.org/img/w/"+iconcode+".png";
//    console.log(icon_path);

    document.getElementById('weather_icon').src = icon_path;

 }); //end of "then" fat arrow function

// Forcast section
const mydate = new Date();
console.log(mydate);

const y = mydate.getDay();
console.log(y);

const myweekday = new Array(7);
myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";
console.log(myweekday[y]);