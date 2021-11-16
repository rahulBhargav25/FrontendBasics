function validateForm() {
    var email = document.validate.email.value;
    var password = document.validate.password.value;
    var password2 = document.validate.password2.value;

    if(email==null || email=="") {
        alert("email cant be blank");
        return false;

    } else if(password.length<6) {
        alert("password length cannot be less than 6 characters");
        return false;
    } else if(password != password2) {
        alert("password must be same");
        return false;
    }
}

function validatenum() {
    var num = document.validate.num.value;
    if(isNaN(num)) {
        document.getElementById("sp").innerHTML="enter numric value";
    }
}