

var ham = document.querySelector('.hamburger')
var sideBar = document.querySelector('.side-bar')
var section1 = document.querySelector(".section1")
var section2 = document.querySelector("#section2")
var section3 = document.querySelector("#section3")
var section4 = document.querySelector("#section4")
var section5 = document.querySelector("#section5")
var link = document.querySelectorAll(".side-bar ul li a")
var nav = document.querySelector('nav')
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
        sideBar.classList.remove('move')
        ham.classList.remove("animate")
        // ham.style.display = 'block'
        section1.classList.remove("join")
        section2.classList.remove("join")
        section3.classList.remove("join")
         body.classList.remove('fixed')
      })
    })
    // body.addEventListener('click', function(){
    //   sideBar.classList.remove('move')
    // })
})



// window.addEventListener('scroll', function(){
//   console.log(this.scrollY);
//     if (body.scrollTop = 0) {
//       nav.style.display = 'block';
//       // nav.classList.toggle('show')
//     } else if (body.scrol) {
//       nav.style.display = 'flex';
//       nav.classList.toggle('show')
//     } else {
      
//     }
    
  
// })


let previousScrollPosition = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > previousScrollPosition) {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
    nav.classList.add('show')
  }

  previousScrollPosition = currentScrollPosition;
});






// set visibility to hidden for all elements that will be revealed
// $('.section1').css('visibility', 'hidden');

// $(window).on('load', function() {
//   $('.section1').css('visibility', 'visible');
//   ScrollReveal().reveal('.section1');
// });

ScrollReveal().reveal('.section1',{
  delay: 500,
  distance: '50px',
  opacity: 0,
  origin: "left",
});
ScrollReveal().reveal('#section2',{
  delay: 500,
  distance: '50px',
  opacity: 0,
  origin: "left",
});
ScrollReveal().reveal('.img-box',{
  delay: 500,
  distance: '100px',
  opacity: 0,
  origin: "right",
});
ScrollReveal().reveal('#section3',{
  delay: 500,
  distance: '100px',
  opacity: 0,
  origin: "bottom",
});
ScrollReveal().reveal('.img-work',{
  delay: 500,
  distance: '100px',
  opacity: 0,
  origin: "left",
});
ScrollReveal().reveal('.featured-projects',{
  delay: 500,
  distance: '100px',
  opacity: 0,
  origin: "right",
});
ScrollReveal().reveal('#section4',{
  delay: 500,
  distance: '100px',
  opacity: 0,
  origin: "right",
});
ScrollReveal().reveal('.featured-projects2',{
  delay: 500,
  distance: '100px',
  opacity: 0,
  origin: "left",
});
ScrollReveal().reveal('#section5',{
  delay: 500,
  distance: '100px',
  opacity: 0,
  origin: "top",
});

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 400);
});

// ScrollReveal().reveal('.about-me');
  