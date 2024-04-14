function toggleMenu() {
    const menu = document.getElementById("mobile-dropdown");
    const icon = document.getElementById("mobile-hamburger");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}