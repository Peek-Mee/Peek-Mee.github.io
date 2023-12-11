document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    var sidenavInit = M.Sidenav.init(sidenav, {});

    var carousel = document.querySelectorAll('.carousel.carousel-slider');
    var initCarousel = M.Carousel.init(carousel,{
        fullWidth   : true,
        indicators  : true,
    });
    autoplay();
  });

  var dynamic = document.querySelectorAll(".dynamic-size");
  dynamic.forEach(element => {
    var sibling = element.nextElementSibling;
    if (sibling == null) sibling = element.previousElementSibling;
    if (sibling != null){
      element.style.height = (sibling.offsetHeight * 1.25) + "px";
    }
  });

  var dy16x9 = document.querySelectorAll(".dynamic-16x9");
  dy16x9.forEach(el =>{

    el.style.height = (el.offsetWidth * 10 /16) + "px";
    console.log(el.style.height);
  })
  function autoplay(){
    M.Carousel.getInstance(document.querySelector(".carousel.carousel-slider")).next();
  setTimeout(autoplay, 5500);
}