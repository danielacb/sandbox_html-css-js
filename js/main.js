window.onscroll = function() {this.fixedNav()};

const navbar = document.getElementById("navbar");
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("navlinks");
const menuIcon = document.getElementById("menu-icon")
const sticky = navbar.offsetTop;

function fixedNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

toggle.onclick = function() {
    menu.classList.toggle("on");
    menuIcon.classList.toggle("on");
}