
emailjs.init("acu-D5P21dGPIRx7B");
let sendOtpBtn = document.getElementById("sendOtpBtn");
sendOtpBtn.addEventListener("click", function(e){
    e.preventDefault();
    let email = document.getElementById("email").value.trim();
    if(email === ""){
        alert("Please enter your email");
        return;
    }
    let otp = Math.floor(100000 + Math.random() * 900000);
    console.log("Generated OTP:", otp);
    localStorage.setItem("otp", otp);
    localStorage.setItem("userEmail", email);
    let templateParams = {

        email: email,

        passcode: otp,

        time: "15 minutes"

    };
    emailjs.send(
        "service_ajt7m0r",
        "template_6g3frb4",
        templateParams
    )
    .then(function(response){
        console.log("Email Sent:", response);
        alert("OTP Sent Successfully");
        window.location.href = "../verfiyotp/verfiy.html";
    })
    .catch(function(error){
        console.log("Email Error:", error);
        alert("OTP Sending Failed");
    });
});