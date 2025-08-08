//Form control 

//Get id's from elements needed using Id
let formName = document.getElementById('name');
let formEmail = document.getElementById('email');
let formMessage = document.getElementById('message');

//Function for form to prevent it submitting to itself.
function form(e) {
    e.preventDeafult();
}

//Regex function for correct email submission
function emailCorrection() {
    let regex = /[0-9]\s/;
    //return regex
    return regex;
}

