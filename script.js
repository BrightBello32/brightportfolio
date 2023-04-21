var ham = document.querySelector('.hamburger')
var sideBar = document.querySelector('.side-bar')
var section1 = document.querySelector(".section1")
var section2 = document.querySelector(".section2")
var section3 = document.querySelector(".section3")
var body = document.querySelector("body")
ham.addEventListener('click', function(){
    sideBar.classList.toggle("move")
    section1.classList.toggle("join")
    section2.classList.toggle("join")
    section3.classList.toggle("join")
    body.classList.toggle("fixed")
})

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 2000);
});

  