document.addEventListener("DOMContentLoaded", function() {
  const api = 'https://api.nasa.gov/planetary/apod?api_key=';
  const key = 'BB1eByfRXLelMm1RuJTtTX9pcIF5EztFLQRO5aHT';
  const header = document.querySelector('header');
  let dayImage;
  
  let imageBanner = document.createElement('div');
  let img = document.createElement('img');
  //pospinać style w jeden obiekt
  imageBanner.style.height = '100%';
  imageBanner.style.width = '50%';
  imageBanner.classList.add('imageBanner');
  img.style.width = '100%';
  img.style.height = '100%';
  imageBanner.appendChild(img);
  header.appendChild(imageBanner);

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
});


