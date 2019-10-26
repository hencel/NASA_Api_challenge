document.addEventListener("DOMContentLoaded", function() {
  const api = 'https://api.nasa.gov/planetary/apod?api_key=';
  const key = 'BB1eByfRXLelMm1RuJTtTX9pcIF5EztFLQRO5aHT';
  const header = document.querySelector('header');
  let dayImage;
 
  let imageBannerLeft = document.createElement('div'); //div to place a image of the day
  let imageBannerRight = document.createElement('div'); //div to place description of the header
  let imageBannerRightMain = document.createElement('h2');
  let imageBannerRightSecond = document.createElement('h2');
  let img = document.createElement('img'); //image of the day

  imageBannerLeft.style.height = '100%'; 
  imageBannerLeft.style.width = '50%';
  imageBannerLeft.classList.add('imageBannerLeft');
  img.style.width = '100%';
  img.style.height = '100%';
  imageBannerLeft.appendChild(img); //append img to image of the day frame
  header.appendChild(imageBannerLeft); //append frame to header
  
  imageBannerRight.classList.add('imageBannerRight');
  imageBannerRightMain.innerText = 'NASA API Challenge';
  imageBannerRightSecond.innerText = 'made by Zbyszek';
  imageBannerRight.appendChild(imageBannerRightMain);
  imageBannerRight.appendChild(imageBannerRightSecond);
  
  header.appendChild(imageBannerRight);

  fetch(api+key)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      console.log(data.copyright);
      console.log(data.url);
      dayImage = data.url;
      console.log(dayImage);
      img.src = dayImage;
    })
  
  const search = document.querySelector('input[name="searchButton"]');
  let userData;
  search.addEventListener('click', search => {
    userData = document.querySelector('input[name="searchArea"]').value.toString();
    console.log(userData);
    console.log(typeof userData);
    fetch(`https://images-api.nasa.gov/search?q=${userData}`)
    .then(resp => resp.json())
    .then(data => console.log(data))

    //pobierz wpisany tekst i umieść w fetch poniżej zamiast apollo
    
    //uzyskaj tylko zdjęcia data.collection.items[0].data[0].media_type != video
    //stwórz galerię przez forEach dla np.50 zdjęć
  })

});