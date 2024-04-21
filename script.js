function toggleMenu() {
    const menu = document.getElementById("mobile-dropdown");
    const icon = document.getElementById("mobile-hamburger");
    const body = document.getElementById("temp");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
    body.classList.toggle("blur")
}