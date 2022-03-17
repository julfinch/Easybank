const openBtn = document.getElementById("open-menu-btn");
const closeBtn = document.getElementById("close-menu-btn");
const menuItem = document.querySelector(".nav-menu");
const gradientBg = document.getElementById("header-gradient");

openBtn.addEventListener("click", () => {
    menuItem.style.display = "block";
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
    gradientBg.style.display = "block";
});

const closeNav = () => {
    menuItem.style.display = "none";
    openBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
    gradientBg.style.display = "none";
}
closeBtn.addEventListener("click", closeNav);
gradientBg.addEventListener("click", closeNav);