document.addEventListener("DOMContentLoaded", function() {
  const api = 'https://api.nasa.gov/planetary/apod?api_key=';
  const key = 'BB1eByfRXLelMm1RuJTtTX9pcIF5EztFLQRO5aHT';
  const header = document.querySelector('header');
  let dayImage;
  header.style.height = '100vh';
  header.style.height = '100vh';
  fetch(api+key)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      console.log(data.copyright);
      console.log(data.url);
      dayImage = data.url;
    })
  console.log(dayImage);
  header.style.backgroundColor = 'black';
  header.style.backgroundImage = 'url("https://apod.nasa.gov/apod/image/1910/MilkyWayAbove_Guerra_960.jpg")';
  header.style.backgroundRepeat = 'no-repeat';
  header.style.backgroundPosition = 'center';
});


