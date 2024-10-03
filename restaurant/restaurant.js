const hamburgerButton = document.querySelector('.hamburger-logo')
const navbar = document.querySelector('.navbar')

hamburgerButton.addEventListener('click', () => {
    navbar.classList.toggle('hamburger') 
})