
emailjs.init("acu-D5P21dGPIRx7B");
let otpInputs = document.querySelectorAll(".otp-box input");
let verifyBtn = document.getElementById("verifyBtn");
let resendBtn = document.getElementById("resendOtp");

verifyBtn.addEventListener("click", function(e){
    e.preventDefault();
    let enteredOtp = "";
    otpInputs.forEach(function(input){
        enteredOtp += input.value;
    });
    let savedOtp = localStorage.getItem("otp");

    if(enteredOtp.length !== 6){
        alert("Please enter 6 digit OTP");
        return;
    }

    if(enteredOtp === savedOtp){
        alert("OTP Verified Successfully");
        window.location.href = "../resetpass/reset.html";
    }
    else{
        alert("Invalid OTP");
    }
});






resendBtn.addEventListener("click", function(e){
    e.preventDefault();
    let email = localStorage.getItem("userEmail");
    if(email === null){
        alert("Email not found");
        return;
    }
    let newOtp = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("otp", newOtp);
    let templateParams = {
        email: email,
        passcode: newOtp,
        time: "15 minutes"
    };
    emailjs.send(
        "service_ajt7m0r",
        "template_6g3frb4",
        templateParams
    )
    .then(function(response){
        console.log(response);
        alert("New OTP Sent Successfully");
    })
    .catch(function(error){
        console.log(error);
        alert("Resend OTP Failed");
    });


});