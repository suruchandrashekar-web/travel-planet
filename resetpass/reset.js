
let newPassword = document.getElementById("newPassword");
let confirmPassword = document.getElementById("confirmPassword");
let updateBtn = document.getElementById("updateBtn");
updateBtn.addEventListener("click", function(e){
    e.preventDefault();
    let passwordValue = newPassword.value.trim();
    let confirmValue = confirmPassword.value.trim();
    if(passwordValue === "" || confirmValue === ""){
        alert("Please fill all fields");
        return;
    }
    if(passwordValue !== confirmValue){
        alert("Passwords do not match");
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let email = localStorage.getItem("userEmail");
    let userFound = false;
    for(let i = 0; i < users.length; i++){
        if(users[i].email === email){
            users[i].password = passwordValue;
            userFound = true;
            break;
        }
    }
    if(userFound){
        localStorage.setItem("users", JSON.stringify(users));
        alert("Password Updated Successfully");
        localStorage.removeItem("otp");
        localStorage.removeItem("userEmail");
        window.location.href = "loginpage/login.html";
    }
    else{
        alert("User not found");
    }
});