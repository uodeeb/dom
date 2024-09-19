const tabs = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".section");
let i = 0;
setInterval(() =>{
    tabs[i].style.display = "block";
    sections[i].style.display = "flex";
    sections[i].classList.add("section");
    tabs[i].style.display = "block";

if (i < tabs.length) i++;
else clearInterval()
}, 500);
