// ---------------- NORMAL LOGIN ----------------

let email = document.querySelector("#email1");
let password = document.querySelector("#password");
let button = document.querySelector(".btn");

button.addEventListener("click", function () {

    let emailValue = email.value.trim();
    let passwordValue = password.value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let found = false;

    for (let i = 0; i < users.length; i++) {

        if (
            users[i].email === emailValue &&
            users[i].password === passwordValue
        ) {

            found = true;
            break;

        }

    }

    if (found) {

        alert("Login Successful");

        window.location.href = "../main.html";

    }
    else {

        alert("Invalid Email or Password");

    }

});

window.onload = function () {

    google.accounts.id.initialize({
        client_id: "994655521297-l33lrkmbpr33oi8efhg6t8vj4mormmmt.apps.googleusercontent.com",
        callback: handleCredentialResponse,
        auto_select: false
    });

    let buttonWidth = Math.min(window.innerWidth - 40, 350);

    google.accounts.id.renderButton(
        document.getElementById("googleBtn"),
        {
            theme: "outline",
            size: "large",
            width: buttonWidth
        }
    );

};

function handleCredentialResponse(response) {

    console.log(response);

    alert("Google Login Successful");

    window.location.href = "../main.html";

}