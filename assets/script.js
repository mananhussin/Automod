const navbar = document.querySelector(".nav-bar");
const offset = navbar.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset > offset) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};
