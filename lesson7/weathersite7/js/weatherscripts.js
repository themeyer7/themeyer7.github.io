//toggle menu
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}


//current date
const option1 = {year: 'numeric'};

const option2 = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

document.getElementById('currentyear').innerHTML = new Date().toLocaleDateString("en-US", option1);

document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString("en-US", option2);


//special message
const today = new Date();
//console.log(today);

const dayNumber = today.getDay();
//console.log(dayNumber);

const element = document.getElementById("message");

if (dayNumber == 5) {
  element.classList.add("showme");
} else {
  element.classList.add("hideme");
}

