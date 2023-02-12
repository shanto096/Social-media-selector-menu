const menu = document.querySelector(".menu");
const socialLIst = document.querySelector(".content-all");
const arroIcon = document.querySelector(".upper-icon");
const liEls = document.querySelectorAll(".menu-content li")
const menuEl = document.querySelector(".menu h1");


console.log(liEls);


menu.addEventListener("click",function () {
    socialLIst.classList.toggle("hidden");
    arroIcon.classList.toggle("rotate-180")
});

liEls.forEach((liEl)=>{
   liEl.addEventListener("click",function () {
    menuEl.innerHTML = liEl.innerHTML;
    menuEl.classList.add("flex","ml-4")
    socialLIst.classList.add("hidden");
    arroIcon.classList.toggle("rotate-180")
   })
})