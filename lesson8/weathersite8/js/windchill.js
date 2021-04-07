/* calculate wind chill */

const tempNumber = parseFloat(document.getElementById("temp").textContent);
//console.log(tempNumber);

const windNumber = parseFloat(document.getElementById("wind").textContent);
//console.log(windNumber);

if(tempNumber<=50 && windNumber>3) {

  let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(windNumber, 0.16)) + (0.4275 * tempNumber * Math.pow(windNumber, 0.16));
  //console.log(windchill);

  windchill = Math.round(windchill);
  //console.log(windchill);

  document.getElementById("chill").textContent = windchill + "\xB0F";

} else {

  document.getElementById("chill").textContent = "N/A";
}