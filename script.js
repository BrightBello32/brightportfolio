var ham = document.querySelector('.hamburger')
var sideBar = document.querySelector('.side-bar')
var section1 = document.querySelector(".section1")
var section2 = document.querySelector("#section2")
var section3 = document.querySelector("#section3")
var link = document.querySelectorAll(".side-bar ul li a")
var body = document.querySelector("body")
ham.addEventListener('click', function(){
    sideBar.classList.toggle("move")
    this.classList.toggle("animate")
    section1.classList.toggle("join")
    section2.classList.toggle("join")
    section3.classList.toggle("join")
    body.classList.toggle("fixed")
    link.forEach(function(el, i){
      el.addEventListener('click', function(){
        sideBar.classList.toggle("move")
        ham.classList.toggle("animate")
        section1.classList.toggle("join")
        section2.classList.toggle("join")
        section3.classList.toggle("join")
         body.classList.toggle('fixed')
      })
    })
})


AOS.init();


// ScrollReveal().reveal('.section1',{
//   delay: 500,
//   distance: '50px',
//   opacity: 0,
//   origin: "left",
// });
// ScrollReveal().reveal('#section2',{
//   delay: 500,
//   distance: '50px',
//   opacity: 0,
//   origin: "left",
// });
// ScrollReveal().reveal('.img-box',{
//   delay: 500,
//   distance: '100px',
//   opacity: 0,
//   origin: "right",
// });
// ScrollReveal().reveal('#section3',{
//   delay: 500,
//   distance: '100px',
//   opacity: 0,
//   origin: "bottom",
// });
// ScrollReveal().reveal('.img-work',{
//   delay: 500,
//   distance: '100px',
//   opacity: 0,
//   origin: "left",
// });
// ScrollReveal().reveal('.featured-projects',{
//   delay: 500,
//   distance: '100px',
//   opacity: 0,
//   origin: "right",
// });
// ScrollReveal().reveal('#section4',{
//   delay: 500,
//   distance: '100px',
//   opacity: 0,
//   origin: "right",
// });
// ScrollReveal().reveal('.featured-projects2',{
//   delay: 500,
//   distance: '100px',
//   opacity: 0,
//   origin: "left",
// });
// ScrollReveal().reveal('#section5',{
//   delay: 500,
//   distance: '100px',
//   opacity: 0,
//   origin: "top",
// });

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 400);
});

// ScrollReveal().reveal('.about-me');
  