//location of file with info
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


//get info from file
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {

    // temporary checking for valid response and data parsing
    console.table(jsonObject);

    //store the results of the converted response into an array
    const prophets = jsonObject['prophets'];

    //loop through every record and process them into their own 'cards'
    for (let i = 0; i < prophets.length; i++ ) {
      let card = document.createElement('section');

      //name
      let h2 = document.createElement('h2');
      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      card.appendChild(h2);

      //birth date
      let birthdate = document.createElement('p');
      birthdate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
      card.appendChild(birthdate);

      //birth place
      let birthplace = document.createElement('p');
      birthplace.textContent = 'Place of Birth: ' + prophets[i].birthplace;
      card.appendChild(birthplace);

      //external image
      let image = document.createElement('img');
      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);
      card.appendChild(image);
      

      document.querySelector('div.cards').appendChild(card);
    }
  });