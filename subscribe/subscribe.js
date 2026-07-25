let fullName = document.querySelector('input[type="text"]');
let email = document.querySelector('input[type="email"]');
let subscribeBtn = document.querySelector("button");
subscribeBtn.addEventListener("click", function () {
    if (fullName.value.trim() === "") {
        alert("Please enter your Full Name");
        fullName.focus();
        return;
    }
    if (email.value.trim() === "") {
        alert("Please enter your Email Address");
        email.focus();
        return;
    }
    if (!email.value.includes("@") || !email.value.includes(".")) {
        alert("Please enter a valid Email Address");
        email.focus();
        return;
    }
    alert("Subscription Successful!");
    window.location.href = "../loginpage/login.html";
});