fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
        renderCountryCards(data)
        allCountriesData = data //for search input filter
    })

// Making Filter by region option

const filterByRegion = document.querySelector('.filter')

filterByRegion.addEventListener('change', (e) => {
    fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
    .then((res) => res.json())
    .then((data) => {
        renderCountryCards(data)
    })
})

// Generate card function

function renderCountryCards (data) {
    const countriesContainer = document.querySelector('.countries-container')
    countriesContainer.innerHTML=``

    data.forEach((country) => {
        
    const countriesCard = document.createElement('a')
    countriesCard.classList.add('countries-card')
    countriesCard.href = `country.html?name=${country.name.common}`

    countriesCard.innerHTML = `
    <img src="${country.flags.svg}" alt="">
        <div class="card-content">
            <h2>${country.name.common}</h2>
            <p>Population: <span>${new Intl.NumberFormat('en-US').format(country.population)}</span></p>
            <p>Region: <span>${country.region}</span></p>
            <p>Capital: <span>${country.capital?.[0]}</span></p>
        </div>
    `

    countriesContainer.append(countriesCard)

    })
}

//Making search bar work

let allCountriesData 

const searchInput = document.querySelector('.search-bar input')

searchInput.addEventListener('input', (e) => {
    const filteredCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
    renderCountryCards(filteredCountries)
})


//Dark Mode

const darkMode = document.querySelector('.dark-mode')
const lightMode = document.querySelector('.light-mode')
const body = document.querySelector('body')

darkMode.addEventListener('click', () => {
    body.classList.toggle('dark')
    lightMode.style.display = 'flex'
    darkMode.style.display = 'none'
})

lightMode.addEventListener('click', () => {
    body.classList.toggle('dark')
    lightMode.style.display = 'none'
    darkMode.style.display = 'flex'
})

