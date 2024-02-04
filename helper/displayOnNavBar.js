import getUser from "./getUser"
function displayOnNavbar() {
    const loginBlock = document.getElementById('login_block')
    const notLoginBlock = document.getElementById('not_login_block')

    const user = getUser()
    if (user) {
        loginBlock.remove('d-none')
        navbarUsername.innerHTML = user.username
    }
    else {
        notLoginBlock.remove('d-none')
    }
}
export default displayOnNavbar