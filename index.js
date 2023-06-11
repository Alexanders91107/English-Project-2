var root = document.querySelector(':root');
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));
if(window.location.pathname.endsWith('index.html')){
    root.style.setProperty('--clr-1', '#042a2e');
    root.style.setProperty('--clr-2', '#073438');
    root.style.setProperty('--clr-3', '#0e4b50');
    root.style.setProperty('--clr-4', '#2d8f85');
    root.style.setProperty('--clr-5', '#637c54');
    root.style.setProperty('--clr-6', '#001920');
}
if(window.location.pathname.endsWith('bookCover.html')){
    root.style.setProperty('--clr-1', '#241a2e');
    root.style.setProperty('--clr-2', '#272438');
    root.style.setProperty('--clr-3', '#2f528d');
    root.style.setProperty('--clr-4', '#7661a8');
    root.style.setProperty('--clr-5', '#835481');
    root.style.setProperty('--clr-6', '#200920');
}
if(window.location.pathname.endsWith('themeSong.html')){
    root.style.setProperty('--clr-1', '#042a5e');
    root.style.setProperty('--clr-2', '#073468');
    root.style.setProperty('--clr-3', '#0e4b80');
    root.style.setProperty('--clr-4', '#1d95b5');
    root.style.setProperty('--clr-5', '#b4a470');
    root.style.setProperty('--clr-6', '#001930');
}
else if(window.location.pathname.endsWith('bookSnap.html')){
    root.style.setProperty('--clr-1', '#2e1a04');
    root.style.setProperty('--clr-2', '#380707');
    root.style.setProperty('--clr-3', '#50330e');
    root.style.setProperty('--clr-4', '#8f342d');
    root.style.setProperty('--clr-5', '#7c7654');
    root.style.setProperty('--clr-6', '#201100');
}
else if(window.location.pathname.endsWith('bookReview.html')){
    root.style.setProperty('--clr-1', '#24042e');
    root.style.setProperty('--clr-2', '#300738');
    root.style.setProperty('--clr-3', '#380e50');
    root.style.setProperty('--clr-4', '#782d8f');
    root.style.setProperty('--clr-5', '#7c5454');
    root.style.setProperty('--clr-6', '#200018');
}