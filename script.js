function toggleMenu() {
    const menu = document.getElementById("mobile-dropdown");
    const icon = document.getElementById("mobile-hamburger");
    const body = document.getElementById("blur-container");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
    body.classList.toggle("blur")
}

function openDialog() {
    let dialog = document.getElementById("work-dialog");
    let body = document.getElementById("blur-container");

    dialog.showModal()
    body.classList.toggle("blur")
    console.log("FUCK YA DIALOG");
}

function closeDialog(elem_id) {
    let dialog = document.getElementById(elem_id);
    let body = document.getElementById("blur-container");
    
    body.classList.toggle("blur")
    dialog.close();
}