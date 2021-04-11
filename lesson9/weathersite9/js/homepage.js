//location of file with info
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


//get info from file
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {

    // temporary checking for valid response and data parsing
    console.table(jsonObject);

    //store the results of the converted response into an array
    const towns = jsonObject['towns'];

    //loop through every record and process them into their own 'cards'
    for (let i = 0; i < towns.length; i++ ) {

      let card = document.createElement('section');

      //town name
      let townname = document.createElement('h3');
      townname.textContent = towns[i].name;
      card.appendChild(townname);

      //town check
      if (townname.textContent=='Preston' || townname.textContent=='Soda Springs' || townname.textContent=='Fish Haven'){

        //motto
        let motto = document.createElement('h4');
        motto.textContent = towns[i].motto;
        card.appendChild(motto);

        //year founded
        let founded = document.createElement('p');
        founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        card.appendChild(founded);

        //population
        let population = document.createElement('p');
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        card.appendChild(population);

        //annual rainfall
        let rainfall = document.createElement('p');
        rainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall + '"';
        card.appendChild(rainfall);

        //external image
        let image = document.createElement('img');
        image.setAttribute('src', towns[i].photo);
        image.setAttribute('alt', towns[i].name + ' scenery');
        card.appendChild(image);
      
        //print to page
        document.querySelector('div.townbox').appendChild(card);
      }
    }
  })