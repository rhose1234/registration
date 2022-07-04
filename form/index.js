var fnameError = document.getElementById('fname-error');
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var submitError = document.getElementById('submit-error')

function validatefName(){
    var firstname = document.getElementById('firstname').value;

    if (firstname.length == 0){
        fnameError.innerHTML = "First name cannot be blank";
        return false;
    }
    if (!firstname.match(/^[A-Za-z]*$/)){
     fnameError.innerHTML = "write first name only"
     return false;
}
    fnameError.innerHTML = '<i class="fas fa-check-circle" </i>';
    return true;
}

function validateName(){
    var lastname = document.getElementById('lastname').value;

    if (lastname.length == 0){
        nameError.innerHTML = "last name cannot be blank";
        return true;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle" </i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('email').value;

    if (email.length == 0){
        emailError.innerHTML = "Email cannot be blank";
        return false;
    }
    if (!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "looks like this is not an email"
        return true;
   }
    emailError.innerHTML = '<i class="fas fa-check-circle" </i>';
    return true;
}

function validatePassword(){
    var password = document.getElementById('password').value;

    if (password.length == 0){
        passwordError.innerHTML = "password cannot be blank";
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle" </i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validatefName() || !validatePassword() )
   
    return false;

}