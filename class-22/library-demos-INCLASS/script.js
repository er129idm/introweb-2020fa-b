
// Parallax library
var rellax = new Rellax('.rellax');

// Glide carousel Library
new Glide('.glide').mount();

// Lazy loading large images...
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
