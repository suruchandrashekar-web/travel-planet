let firstname = document.getElementById("fristname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let showPassword = document.getElementById("check");
let checked = document.getElementById("checkbox");
let checked1 = document.getElementById("checkbox1");
let checked2 = document.getElementById("checkbox2");
let signup = document.querySelector(".signup-btn");
showPassword.addEventListener("change", function () {
    if (showPassword.checked) {
        password.type = "text";
        confirmPassword.type = "text";
    } else {
        password.type = "password";
        confirmPassword.type = "password";
    }
});
signup.addEventListener("click", function () {
    let fullname = firstname.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value;
    let confirmValue = confirmPassword.value;
    if (fullname === "" || emailValue === "" || passwordValue === "" || confirmValue === "") {
        alert("Please fill all fields");
        return;
    }
    if (passwordValue !== confirmValue) {
        alert("Passwords do not match");
        return;
    }
    if (!checked.checked) {
        alert("Please verify 'I'm not a robot'");
        return;
    }
    if (!checked1.checked) {
        alert("Please accept Terms & Conditions");
        return;
    }
    if (!checked2.checked) {
        alert("Please accept Privacy Policy");
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let exists = users.find(function (user) {
        return user.email === emailValue;
    });
    if (exists) {
        alert("Email already registered");
        return;
    }
    let newUser = {
        fullname: fullname,
        email: emailValue,
        password: passwordValue
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration Successful");
    window.location.href = "login.html";
});

let termsand =document.querySelector(".termsand");
termsand.addEventListener("click",function(){
      window.location.href="../termsandcontions/terms.html";
})
let privacy2=document.querySelector(".privacy2");
privacy2.addEventListener("click",function(){
    window.location.href="../termsandcontions/terms.html";
})