function notif() {
    var a =document.getElementById("email").value;

    alert("Selamat Login "+a);
}

function notif2() {
    var nama =document.getElementById("nama").value;

    alert("Trimaksih "+nama+" Sudah Melakukan Register")
}

function validasiemail() {
    var form =document.getElementById("form");
    var email=document.getElementById("email").value;
    var text =document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address is valid.";
        text.style.color= "blue";
        text.style.fontSize ="14px";
    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter Valid Email Address.";
        text.style.color= "red";
        text.style.fontSize ="14px";
    }
}