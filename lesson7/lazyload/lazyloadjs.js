//load images via js

let imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

imagesToLoad.forEach((img) => {
  loadImages(img);
});

//intersection observer
/*
if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}  */

if(!!window.IntersectionObserver){console.log("I support Inserction Observer.")}


// create a function
let myObserver = new IntersectionObserver((myListA, myObserver) => {
myListA.forEach(cupX => {
if(cupX.isIntersecting){
cupX.target.src = cupX.target.dataset.src;
cupX.target.removeAttribute('data-src');
myObserver.unobserve(cupX.target);
}
});
}, {rootMargin: "0px 0px -10px 0px"});

// make a list of all images with a data source and send that list to myObserver
document.querySelectorAll('img[data-src]').forEach(img => {myObserver.observe(img) });