var elem = document.querySelector('.parallax');
var instance = M.Parallax.init(elem);

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
console.log(sticky);
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        navbar.classList.remove("nav");
        navbar.classList.add("sticky-nav");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.add("nav");
        navbar.classList.remove("sticky-nav");
    }
} 