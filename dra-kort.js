// Selectors
const cardBtn = document.querySelector('#card-button');
const imgOutput = document.querySelector('#image-output');
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

        data.res.forEach(post => {
            const img = post.image;
            const cardImg = document.createElement('IMAGE');
            // let input = cardImg.setAttribute('src', img);
           cardImg.setAttribute('src', img);
            // cardImg.innerHTM = input;
            imgOutput.appendChild(cardImg);

        })
    })
    .catch(error => {
        console.log('fel! ' + error);
    })
}




  // Event listener
  cardBtn.addEventListener('click', getAPi);