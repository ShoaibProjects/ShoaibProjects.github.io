let body=document.body;
let moon=document.getElementById('imoon');
let sun=document.getElementById('isun');

function dark(){
    body.classList.add("dark-mode");
    moon.classList.remove("bx-moon");
    moon.classList.add("bxs-moon");
    sun.classList.remove("bxs-sun");
    sun.classList.add("bx-sun");
}
function light(){
    body.classList.remove("dark-mode");
    moon.classList.add("bx-moon");
    moon.classList.remove("bxs-moon");
    sun.classList.add("bxs-sun");
    sun.classList.remove("bx-sun");
}
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".ham-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
let hmoon=document.getElementById('hmoon');
let hsun=document.getElementById('hsun');

function hdark(){
    body.classList.add("dark-mode");
    hmoon.classList.remove("bx-moon");
    hmoon.classList.add("bxs-moon");
    hsun.classList.remove("bxs-sun");
    hsun.classList.add("bx-sun");
}
function hlight(){
    body.classList.remove("dark-mode");
    hmoon.classList.add("bx-moon");
    hmoon.classList.remove("bxs-moon");
    hsun.classList.add("bxs-sun");
    hsun.classList.remove("bx-sun");
}