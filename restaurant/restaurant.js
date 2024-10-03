const hamburgerButton = document.querySelector('.hamburger-logo')
const navbar = document.querySelector('.navbar')
const cross = document.querySelector('.cross')

hamburgerButton.addEventListener('click', () => {
    navbar.parentElement.classList.toggle('show')
})

cross.addEventListener('click', () => {
    navbar.parentElement.classList.remove('show')
})