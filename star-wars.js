
// Selectors
const searchBtn = document.querySelector('#search-button');
let searchOutput = document.querySelector('#search-output');
const searchInput = document.querySelector('#search-input');
const baseUrl = 'https://www.swapi.tech/api/people/?name='


// function
const getAPi = () => {
    console.log(baseUrl + searchInput.value);
    fetch(baseUrl + searchInput.value, {
        method : 'GET',
        headers: {
            'Accept' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);

        searchOutput.innerHTML = '';
        

        let prop = data.result[0].properties;
        // data.res.forEach(post => {
            searchOutput.innerHTML +=
            
            `
            Height: ${prop.height}, Mass: ${prop.mass},
            Gender: ${prop.gender}, Hair Color: ${prop.hair_color},
            `
        // })
    })
    .catch(error => {
        console.log('fel! ' + error);
    })
}




  // Event listener
  searchBtn.addEventListener('click', getAPi);