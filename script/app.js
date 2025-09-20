"use strict"

const icone = document.querySelector(".icon");
const sidbar = document.querySelector(".sidbar");
const setting=document.querySelector("#setting")

icone.addEventListener("click", function () {
    icone.classList.toggle("linear")
    sidbar.classList.toggle("active")

})
window.addEventListener("scroll", function () {
    const winer = window.pageYOffset;
    icone.style.top=`${winer}px`
})
 