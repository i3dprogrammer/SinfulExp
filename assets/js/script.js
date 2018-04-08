document.querySelectorAll('.parallax').forEach((parallax, index) => {
    M.Parallax.init(parallax);
});

M.Modal.init(document.querySelector('.modal'));

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

var modal = document.querySelector(".s-modal");
var close_elements = document.querySelectorAll(".s-modal-close");
var html_doc = document.documentElement;

close_elements.forEach((mclose, index) => {
    mclose.addEventListener("click", () => {
        modal.style.display = 'none';
        html_doc.style.overflowY = 'auto';
    })
})

var show_vid_el = document.querySelector('.play-icon');
show_vid_el.addEventListener('click', (event) => {
    modal.style.display = 'inline';
    html_doc.style.overflowY = 'hidden';
});

window.addEventListener("keydown", (event) => {
    if (event.keyCode == 27) {
        modal.style.display = 'none';
        html_doc.style.overflowY = 'auto';
    }
});