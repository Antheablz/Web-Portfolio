function toggleMenu() {
    const menu = document.getElementById("mobile-dropdown");
    const icon = document.getElementById("mobile-hamburger");
    const body = document.getElementById("blur-container");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
    body.classList.toggle("blur")
}

function openDialog(dialog_id) {
    let dialog = document.getElementById(dialog_id);
    let body = document.getElementById("blur-container");

    dialog.showModal();
    body.classList.toggle("blur");
    console.log('testing');
}

function closeDialog(dialog_id) {
    let dialog = document.getElementById(dialog_id);
    let body = document.getElementById("blur-container");
    
    body.classList.toggle("blur");
    dialog.close();
}