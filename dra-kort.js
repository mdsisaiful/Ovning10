// Selectors
const cardBtn = document.querySelector('#card-button');
let imgOutput = document.querySelector('#image-output');
const baseUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1'


// function
const getAPi = () => {
    console.log(baseUrl);
    fetch(baseUrl, {
        method : 'GET',
        headers: {
            'Accept' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);

        imgOutput.innerHTML = '';

        // data.res.forEach(post => {
            const img = data.cards[0].image;
            const cardImg = document.createElement('IMG');
            // let input = cardImg.setAttribute('src', img);
           cardImg.setAttribute('src', img);
            // cardImg.innerHTM = input;
            imgOutput.appendChild(cardImg);

        // })
    })
    .catch(error => {
        console.log('fel! ' + error);
    })
}




  // Event listener
  cardBtn.addEventListener('click', getAPi);