/**
 * @type {number} Store current image number
 */
let currentImageIndex = 0;

/**
 * List of images
 * @type {*[]}
 */
const images = [ '2.jpg', '3.jpg', '4.jpg', '5.jpg',
    '6.jpg', '7.jpg', '8.jpg','9.jpg', '10.jpg',
    '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg'];

/**
 * Add image
 */
addImage(images[0]);

/**
 * Show slide images window
 */
function slide() {
    const gallery = document.getElementById('carousel');
    gallery.style.display = 'block';
}

/**
 * Close slide images window
 */
function slideShowClose() {
    const gallery = document.getElementById('carousel');
    gallery.style.display = 'none';
}

/**
 * Show next slide
 */
function nextSlide() {
    const oldImage = document.getElementById('slide-image');
    oldImage.remove();

    // Reset value to 0 with mod operator
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const imageName = images[currentImageIndex];

    addImage(imageName);
}

/**
 * Add image element to image container in DOM and show it
 * @param name
 */
function addImage(name) {
    const container = document.getElementById('i-container');
    const img = document.createElement('img');
    img.src = 'img/' + name;
    img.id = 'slide-image';
    container.append(img);
}

/**
 * Show previous slide
 */
function backSlide() {
    const oldImage = document.getElementById('slide-image');
    oldImage.remove();

    // Reset value to 0 with mod operator
    currentImageIndex = (currentImageIndex - 1) % images.length;
    if (currentImageIndex === -1) {
        currentImageIndex = images.length - 1;
    }
    const imageName = images[currentImageIndex];

    addImage(imageName);
}

/**
 * Close Intro Slide
 */
function closeSlideIntro() {
    console.log('close slide intro ...');
    const elem = document.getElementById('slide-intro');
    elem.style.display = 'none';
}

