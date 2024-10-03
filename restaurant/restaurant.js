const hamburgerButton = document.querySelector('.hamburger-logo')
const navbar = document.querySelector('.navbar')
const cross = document.querySelector('.cross')

const locationsMap = document.querySelector('.locations-map')
const muradpur = document.querySelector('.muradpur')
const chawkbazar = document.querySelector('.chawkbazar')
const agrabad = document.querySelector('.agrabad')
const oxygen = document.querySelector('.oxygen')
const jamalkhan = document.querySelector('.jamalkhan')

hamburgerButton.addEventListener('click', () => {
    navbar.parentElement.classList.toggle('show')
})

cross.addEventListener('click', () => {
    navbar.parentElement.classList.remove('show')
})

muradpur.addEventListener('click', () => {
    locationsMap.innerHTML = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8643.268621848056!2d91.82975119968945!3d22.36339152890994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad277dde13d9ff%3A0xd9b8958ae462843e!2sThe%20King%20of%20Chittagong!5e0!3m2!1sen!2sbd!4v1727932213391!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `
    muradpur.style.color = 'rgb(252, 38, 38)'
    chawkbazar.style.color = 'rgb(254, 131, 49)'
    agrabad.style.color = 'rgb(254, 131, 49)'
    oxygen.style.color = 'rgb(254, 131, 49)'
    jamalkhan.style.color = 'rgb(254, 131, 49)'
})

chawkbazar.addEventListener('click', () => {
    locationsMap.innerHTML = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7379.5939386967875!2d91.83975467296754!3d22.361293800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2771c12b5d63%3A0x755702064d9a7fd1!2sFOOD%20AVENUE%20ROOFTOP!5e0!3m2!1sen!2sbd!4v1727932263008!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `
    muradpur.style.color = 'rgb(254, 131, 49)'
    chawkbazar.style.color = 'rgb(252, 38, 38)'
    agrabad.style.color = 'rgb(254, 131, 49)'
    oxygen.style.color = 'rgb(254, 131, 49)'
    jamalkhan.style.color = 'rgb(254, 131, 49)'
})

agrabad.addEventListener('click', () => {
    locationsMap.innerHTML = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15191.79960193559!2d91.80616641131753!3d22.3600538803684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8f2cddd101f%3A0x86429e8c1ed9a533!2sTava%20Restaurant%20%26%20Lounge!5e0!3m2!1sen!2sbd!4v1727932123800!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `
    muradpur.style.color = 'rgb(254, 131, 49)'
    chawkbazar.style.color = 'rgb(254, 131, 49)'
    agrabad.style.color = 'rgb(252, 38, 38)'
    oxygen.style.color = 'rgb(254, 131, 49)'
    jamalkhan.style.color = 'rgb(254, 131, 49)'
})

oxygen.addEventListener('click', () => {
    locationsMap.innerHTML = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11711.50018353374!2d91.8329633800176!3d22.395458728440907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad27d3a1c81911%3A0x1dbee722030e3853!2sNahar%20Garden%20Restaurant%20%26%20Party%20House!5e0!3m2!1sen!2sbd!4v1727932307084!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `
    muradpur.style.color = 'rgb(254, 131, 49)'
    chawkbazar.style.color = 'rgb(254, 131, 49)'
    agrabad.style.color = 'rgb(254, 131, 49)'
    oxygen.style.color = 'rgb(252, 38, 38)'
    jamalkhan.style.color = 'rgb(254, 131, 49)'
})

jamalkhan.addEventListener('click', () => {
    locationsMap.innerHTML = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.1905094500644!2d91.8319625!3d22.34643435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad275e2dd44a09%3A0x6e30da03e83c7fbf!2scube!5e0!3m2!1sen!2sbd!4v1727932329905!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `
    muradpur.style.color = 'rgb(254, 131, 49)'
    chawkbazar.style.color = 'rgb(254, 131, 49)'
    agrabad.style.color = 'rgb(254, 131, 49)'
    oxygen.style.color = 'rgb(254, 131, 49)'
    jamalkhan.style.color = 'rgb(252, 38, 38)'
})

