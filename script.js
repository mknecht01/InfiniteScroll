const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photoArray = [];
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

// Unsplash API
const apiKey = 'PGT4r9iR3QKJEKBseC_0H5UHaBPM4aBMcgJgGSRAEq0';
const count = 30;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// helper function to set element attributes
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// check if all images were loaded
function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
    }
}

// create elements for links and photos, add to DOM
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photoArray.length;
    // run function for each object in photos array
    photoArray.forEach((photo) => {
        // create <a> to link to Unsplash photo
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        });
        // create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });
        img.addEventListener('load', imageLoaded);
        // put <img> inside <a>, then put both inside image container element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photoArray = await response.json();
        displayPhotos();
    } catch (error) {
        // Catch Error Here
        console.log(error);
    }
}

// check to see if scrolling near bottom of page, then load more photos
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotos();
    }
});

// on load
getPhotos();