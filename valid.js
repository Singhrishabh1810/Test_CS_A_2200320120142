function validate(){
    let isValid = false;
    var name = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if(name.trim()===""){
        alert("invalid or empty username");
        isValid = false;
    }
    if(pass.trim()===""){
        alert("invalid password");
        isValid = false;
    }
    
    if(name=="admin"){
        isValid=true;
    }
    if(pass=="admin"){
        isValid=true;
    }
    if(isValid){
        window.location.href= "currencyConverter.html";
    }
    return false;

}