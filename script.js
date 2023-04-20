var ham = document.querySelector('.hamburger')
var sideBar = document.querySelector('.side-bar')
var section1 = document.querySelector(".section1")
var body = document.querySelector("body")
ham.addEventListener('click', function(){
    sideBar.classList.toggle("move")
    section1.classList.toggle("join")
    body.classList.toggle("fixed")
})