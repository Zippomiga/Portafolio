window.onscroll = function() {agregarBordeNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function agregarBordeNavbar() {
  if(window.pageYOffset >= sticky) {
    navbar.style.borderBottom = "4px solid black";
  } else {
    navbar.style.borderBottom = ""
  }
}