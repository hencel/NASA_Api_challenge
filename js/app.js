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

  fetch(api+key)  //using fetch to get image of the day from NASA Api
    .then(resp => resp.json())
    .then(data => {
      dayImage = data.url;
      img.src = dayImage;
    })
    .catch(err => {
      console.log("Something gone wrong...")
    })
  
  const search = document.querySelector('input[name="searchButton"]'); 
  let userData;
  search.addEventListener('click', search => {  //add listener to click button
    search.preventDefault();
    if(document.querySelector('.gallery').contains(document.querySelector('.galleryArea'))) { //check if old gallery exist, if yes, delete it
      document.querySelector('.galleryArea').remove();
    } 
    const galleryArea = document.createElement('div'); //create container for photos
    galleryArea.classList.add('galleryArea');
    document.querySelector('.gallery').appendChild(galleryArea); //append container to gallery

    userData = document.querySelector('input[name="searchArea"]').value.toString(); //get user search data 

    fetch(`https://images-api.nasa.gov/search?q=${userData}`) //fetch photos from NASA Api based on user's search
    .then(resp => resp.json())
    .then(data => {
      
      console.log(data);
      data.collection.items.forEach(element => {  //iterate through NASA Api library photos and videos
        const galleryArea = document.querySelector('.galleryArea');
        if(element.data[0].media_type === 'image') { //looking for only images (not videos)
          console.log(element.data[0].media_type);
          for(let i=0; i<1; i++) { //make new img for each photos from NASA
            fetch(element.href) //get json file with addresses to images from each photo
            .then(response => {
              return response.json();
              })
            .then(el => {
              const newLink = document.createElement('a');
              const newImg = document.createElement('img'); //create
              newLink.href = el[0];
              newLink.classList.add('galleryItem'); //add class
              newImg.src = element.links[0].href; //add link to photo
              newLink.appendChild(newImg);
              galleryArea.appendChild(newLink); //append to gallery Area
            })
            .catch(err => {
              console.log("Something gone wrong...")
            })
          } 
        }
      });  
    })
    .catch(err => {
      console.log("Something gone wrong...")
    })
  })

});