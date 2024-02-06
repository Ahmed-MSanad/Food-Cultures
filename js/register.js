function _id(name){
    return document.getElementById(name);
}
function _class(name){
    return document.getElementsByClassName(name);
}

_id("password-field").addEventListener("focus",function(){
    _class("password-policies")[0].classList.add("active");
});
_id("password-field").addEventListener("blur",function(){
    _class("password-policies")[0].classList.remove("active");
});

_id("password-field").addEventListener("keyup",function(){
    let password = _id("password-field").value;

    if(/[A-Z]/.test(password[0])){
        _class("policy-uppercase")[0].classList.add("active");
    }
    else{
        _class("policy-uppercase")[0].classList.remove("active");
    }

    if(/[0-9]/.test(password)){
        _class("policy-number")[0].classList.add("active");
    }
    else{
        _class("policy-number")[0].classList.remove("active");
    }

    if(/[^A-Za-z0-9]/.test(password)){
        _class("policy-special")[0].classList.add("active");
    }
    else{
        _class("policy-special")[0].classList.remove("active");
    }
    
    if(password.length == 8){
        _class("policy-length")[0].classList.add("active");
    }
    else{
        _class("policy-length")[0].classList.remove("active");
    }

    if(/^.*(?=\s)/.test(password)){
        _class("policy-whitespace")[0].classList.remove("active");
    }
    else{
        _class("policy-whitespace")[0].classList.add("active");
    }
});