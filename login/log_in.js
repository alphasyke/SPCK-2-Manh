// function getInSite() {
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;


// }

const loginForm = document.getElementById('login_form')
const userList = JSON.parse(localStorage.getItem('userList')) || []

loginForm.onsubmit = function (event) {
    event.preventDefault()
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    const emailError = document.getElementById('email_error')
    const passwordError = document.getElementById('password_error')
    const loginError = document.getElementById('login_error')

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

    const existingUser = userList.find(function (user) {
        return user.email === email.value && user.password === password.value
    })
    if (!existingUser) {
        loginError.innerHTML = 'Incorrect email or password'
    } else {
        loginError.innerHTML = ''
        const user = {
            email: email.value,
            password: password.value
        }
        userList.push(user)
        localStorage.setItem('userList', JSON.stringify(user))
        window.location.href = '../index.html'
    }
}