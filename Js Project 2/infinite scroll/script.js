

// access key FdM1N1Z9YLqszI3GYjXk9tkVVrYYSl0mjEkwqlUG59I
// Unspash url
const imageContainer =document.getElementById('image-container')
const loader =document.getElementById('loader')

 const photosArray =[ ]  ;
const count =10;
const apiKey= 'API_KEY';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=FdM1N1Z9YLqszI3GYjXk9tkVVrYYSl0mjEkwqlUG59I&/&count=${count}`
let imgsloaded =0;
let ready =false;
let totalimgs=0;
function imgloaded() {
    imgsloaded++
    console.log(imgsloaded)
    if (imgsloaded === totalimgs) {
        ready = true
        loader.hidden = true
        console.log('ready =', ready)
    }
    if (loader.hidden = true) {
        imageContainer.hidden = false
    }
    }

function displayPhotos(){
    imgsloaded=0
    data.forEach((photo)=>{
        // create "a" tag
        const item =document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target','_blank');
        // create img tage
        const img =document.createElement('img')
        img.setAttribute('src',photo.urls.regular)
        img.setAttribute('alt',photo.alt_description);
        img.setAttribute('title',photo.alt_description);
        img.addEventListener('load',imgloaded)
        item.appendChild(img);
        imageContainer.appendChild(item)
    })
}
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
         data=await response.json();
        console.log(data)
        displayPhotos()
    }
    catch(err){
        console.log(err)
    }
}
window.addEventListener('scroll',()=>{
   if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000  && ready){
    ready= false;
    console.log('loadmore')
}


})

getPhotos();