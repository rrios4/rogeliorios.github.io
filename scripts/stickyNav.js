window.onscroll = function() {myFunction()};

var navbar = document.getElementById("left-nav");
var sticky = navbar.offsetLeft;

function myFunction(){
    if(window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}