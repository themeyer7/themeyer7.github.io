/* js for assignment portal */

let options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};

document.getElementById("currentdate").innerHTML = 
	new date().toLocaleDateString("en-US", options);