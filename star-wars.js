
// Selectors
const searchBtn = document.querySelector('#search-button');
const searchOutput = document.querySelector('#search-output');
const searchInput = document.querySelector('#search-input');
const baseUrl = 'https://www.swapi.tech/api/people/'


// function
const getAPi = () => {
    console.log(baseUrl + searchInput.value);
    fetch(baseUrl, {
        method : 'GET',
        headers: {
            'Accept' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);

        searchOutput.innerHTML = '';

        data.res.forEach(post => {
            searchOutput.innerHTML +=
            `
            Height: ${post.height}, Mass: ${post.mass},
            Gender: ${post.gender}, Hair Color: ${post.hair_color},
            `
        })
    })
    .catch(error => {
        console.log('fel! ' + error);
    })
}




  // Event listener
  searchBtn.addEventListener('click', getAPi);