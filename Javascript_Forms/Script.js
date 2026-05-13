function ValidateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let valid = true;
    document.getElementById("nameError").innerHTML="";
    document.getElementById("emailError").innerHTML="";
    document.getElementById("passwordError").innerHTML="";
    document.getElementById("confirmPasswordError").innerHTML="";

    if(name == ""){
        document.getElementById("nameError").innerHTML="Enter the name";
        valid =false;
    }
    if(email==""){
        document.getElementById("emailError").innerHTML="Enter the email";
        valid =false;
    }
    if(password ==""){
        document.getElementById("passwordError").innerHTML="Enter the password";
        valid=false;
    }
    else  if(password <6){
         document.getElementById("passwordError").innerHTML="Enter minimum 6 characters";
        valid=false;
    }
    
    if(confirmPassword != password){
        document.getElementById("confirmPasswordError").innerHTML="password do not match ";
        valid=false;
    }
    if(valid){
        window.location.href="Login.html";
        valid=false;
    }
    return valid;
}


function LoginValidate() {
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let valid = true;

    if(email ==""){
        valid =false;
    }
    if(password=="")
    {
        valid=false;
    }

    if(valid){
        window.location.href="Home.html";
        valid=false;
    }
    return valid;
}