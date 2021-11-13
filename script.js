let email = document.getElementById("inputEmail4");
let pwd = document.getElementById("inputPassword4");
let pwd1 = document.getElementById("inputPassword");
let phone = document.getElementById("inputPhone");
let error = document.getElementById("error");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");

/* email-validation */
    
    function validate() {

    let regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        error.innerHTML="Valid";
        error.style.color="green";
        return true;
    }
    else {
        error.innerHTML="Inavlid";
        error.style.color="red";
        return false;
    }
}

/* pwd-validation */

function validate1() {
    let regexp1= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    if(regexp1.test(pwd.value)){
        error1.innerHTML="Valid";
        error1.style.color="green";
        
    }
    else {
        error1.innerHTML="Inavlid: must contain min 8 characters, at least one uppercase & lowercase & at least one number";
        error1.style.color="red";
        return false;
    }
    
    if(pwd.value==pwd1.value){
        error2.innerHTML="password created succesfully";
        error2.style.color="green";
        return true;

    }
    else{
        error2.innerHTML="Password do not match";
        error2.style.color="red";
        return false;
    }
}

/* Phone-validation */

function validate2() {

let regexp2 = /^\d{10}$/;

if(regexp2.test(phone.value)){
    error3.innerHTML="Valid format";
    error3.style.color="green";
    return true;
}
else{
    error3.innerHTML="Invalid format";
    error3.style.color="red";
    return false;
    }
}
