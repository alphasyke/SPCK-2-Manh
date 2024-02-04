import courses from '../data/courses.js'
import formatCurrency from '../utils/formatCurrency.js'

const name = document.getElementById('name')
const img = document.getElementById('img')
const desc = document.getElementById('desc')
const price = document.getElementById('price')

const params = new URL(document.location).searchParams
const courseId = params.get('id')

const course = courses.find(function (p) {
    return p.id == courseId
})

if (course) {
    name.innerHTML = course.name
    desc.innerHTML = course.desc
    price.innerHTML = formatCurrency(course.price)
    img.setAttribute('src', course.img)
}

const navbarSearchForm = document.getElementById('navbar_search_form')
const navbarSearchInput = document.getElementById('navbar_search')

navbarSearchForm.onsubmit = function (event) {
    event.preventDefault()
    const text = navbarSearchInput.value
    searchProducts(text)
}