const registerForm = document.getElementById('register_form')
const userList = JSON.parse(localStorage.getItem('userList')) || []

registerForm.onsubmit = function (event) {
    event.preventDefault()
    console.log(event)

    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const confirmPassword = document.getElementById('password2')

    const emailError = document.getElementById('email_error')
    const passwordError = document.getElementById('password_error')
    const confirmPasswordError = document.getElementById('confirm_password_error')
    const registerError = document.getElementById('register_error')

    if (email.value === '') {
        emailError.innerHTML = 'Please enter your email'
    } else {
        emailError.innerHTML = ''
    }

    if (password.value === '') {
        passwordError.innerHTML = 'Please enter your password'
    } else {
        passwordError.innerHTML = ''
    }

    if (email.value === '') {
        confirmPasswordError.innerHTML = 'Please reenter your password'
    } else if (confirmPassword.value !== password.value) {
        confirmPasswordError.innerHTML = 'Passwords do not match'
    }
    else {
        confirmPasswordError.innerHTML = ''
    }

    const existingUser = userList.find(function (user) {
        return user.email === email.value
    })
    if (existingUser) {
        registerError.innerHTML = 'Email has already been used'
    } else {
        newUser = {
            email: email.value,
            password: password.value
        }
        userList.push(newUser)
        localStorage.setItem('userList', JSON.stringify(userList))
        registerError.innerHTML = ''
        window.location.href = '../login'
    }
}

// function logInfo() {
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var password2 = document.getElementById("password2").value;

//     if (email == "" || password == "" || password2 == "") {
//         alert("Please enter your details");
//         return;
//     }
//     if (password != password2) {
//         alert("Your password and confirmation password don't match");
//         return;
//     }
//     if (password.length < 9 || password2.length < 9) {
//         alert("Your password must be greater than 8 characters");
//     }
//     if (email.includes("@") && email.includes(".com")) {
//         return;
//     }
//     else {
//         alert("email is not valid");
//     }
// }


//local storage


