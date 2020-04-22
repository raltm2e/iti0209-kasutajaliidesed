
function validateLogin() {
    // clearRequiredFields();
    var required = document.getElementsByClassName("required");
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("telefoninumber").value;
    if (phoneNumber == "") {
        required[0].innerHTML = "This field cannot be empty.";
    }
    if (email == "") {
        required[1].innerHTML = "This field cannot be empty.";
    } else if (!validateEmail(email)) {
        required[1].innerHTML = "Invalid Email Format.";
    }
}

function validateEmail(email) {
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    var emailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\"[^\s@]+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailformat.test(String(email).toLowerCase());
}

function clearRequiredFields() {
    let required = document.getElementsByClassName("required");
    for (i = 0; i < required.length; i++) {
        required[i].innerHTML = "";
    }
}
