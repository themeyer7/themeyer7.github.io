//location of file with info
const apiURL = '//api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=8cdbb2b865b52ea0e6ede10017720a4a';

//get info from file
fetch(apiURL)
  .then((response) => response.json())

  // temporary checking for valid response and data parsing
  .then((jsObject) => {
    console.log(jsObject);
  
    document.getElementById('current-temp').textContent = jsObject.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);


  });