var elem = document.querySelector('.parallax');
var instance = M.Parallax.init(elem);

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("nav");
var logo = document.querySelector(".logo");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
console.log(sticky);
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        navbar.classList.add("sticky-nav");
        navbar.classList.remove("nav");
        logo.classList.add('sticky-logo');
        logo.classList.remove('logo');
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("sticky-nav");
        navbar.classList.add("nav");
        logo.classList.remove('sticky-logo');
        logo.classList.add('logo');
    }
} 