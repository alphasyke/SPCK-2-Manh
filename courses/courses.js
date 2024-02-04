import courses from '../data/courses.js'
import formatCurrency from '../utils/formatCurrency.js'

function getUser() {
    const user = JSON.parse(localStorage.getItem('user'))
    return user
}

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

constlogoutBtn = document.getElementById('log_out_btn')
// continue with recording

function renderCourses(courses) {
    const courseList = document.getElementById('course_list')
    courseList.innerHTML = ''

    for (let i = 0; i < courses.length; i++) {
        const course = courses[i]

        const courseImage = document.createElement('img')
        courseImage.setAttribute('src', course.img)

        const category = document.createElement('div')
        category.classList.add('category')
        category.appendChild(courseImage)

        const courseImageLink = document.createElement('a')
        courseImageLink.setAttribute('href', '../details/index.html?id=' + course.id)
        courseImageLink.appendChild(category)

        const courseName = document.createElement('a')
        courseName.setAttribute('href', '../details/index.html?id=' + course.id)
        courseName.classList.add('course_name')
        courseName.innerHTML = course.name

        const newPrice = document.createElement('span')
        newPrice.classList.add('new_price')
        newPrice.innerHTML = formatCurrency(course.price)

        const coursePrices = document.createElement('div')
        coursePrices.classList.add("course_prices")
        coursePrices.appendChild(newPrice)

        const addToCartBtn = document.createElement('button')
        addToCartBtn.innerHTML = 'Add to cart'
        addToCartBtn.classList.add('btn', 'btn-primary', 'w-100', 'mt-3')

        const courseTag = document.createElement('div')
        courseTag.classList.add('course')
        courseTag.appendChild(courseImageLink)
        courseTag.appendChild(courseName)
        courseTag.appendChild(coursePrices)
        courseTag.appendChild(addToCartBtn)

        const courseWrapper = document.createElement('div')
        courseWrapper.classList.add('col-12', 'col-sm-6', 'col-md-3', 'col-lg-3', 'p-3')
        courseWrapper.appendChild(courseTag)

        courseList.appendChild(courseWrapper)
    }
}
renderCourses(courses)

const searchInput = document.getElementById('search_input')
searchInput.onchange = function (event) {
    const text = event.target.value
    searchCourses(text)
}

function searchCourses(text) {
    const coursesCopy = [...courses]
    const searchText = text.toLowerCase().trim()
    if (searchText === '') {
        renderCourses(coursesCopy)
    }
    else {
        const result = coursesCopy.filter(function (c) {
            const courseName = c.name
            const courseNameLower = courseName.toLowerCase()
            return courseNameLower.includes(searchText)
        })
        renderCourses(result)
    }
}