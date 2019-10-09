/* js for assignment portal */

let options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};

document.getElementById("currentdate").textContent = 
	newdate().toLocaleDateString("en-US", opitons);