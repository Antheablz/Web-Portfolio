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

/*
function checkInputFields() {
    let form = document.getElementById("contact-form");
    let input_fields = document.getElementsByClassName("contact-test");
    let err_msg = document.getElementsByClassName("err-msg");
    let num_errs = 0;

    for(let i = 0; i < input_fields.length(); i++){
        if (input_fields[i] == "") {
            err_msg[i].style.visibility = "visible";
            num_errs ++;
        }
    }

    if (num_errs == 0) {
        form.submit();
        console.log("submitted");
    }
}
*/




