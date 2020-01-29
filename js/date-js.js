/* js for assignment portal */

const option1 = {year: 'numeric'};

const option2 = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

document.getElementById('currentyear').innerHTML = new Date().toLocaleDateString("en-US", option1);

document.getElementById('datemodified').innerHTML = new Date(document.lastModified).toLocaleDateString("en-US", option2);